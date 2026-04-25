import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Lightbulb, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { getTopicByDay } from '../data/curriculum';
import { phases } from '../data/phases';
import { useProgress } from '../hooks/useProgress';
import { MathRenderer } from '../components/math/MathRenderer';
import type { Problem } from '../data/types';

function ProblemCard({
  problem,
  onAnswer,
  answered,
}: {
  problem: Problem;
  onAnswer: (correct: boolean) => void;
  answered: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [numericInput, setNumericInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const isCorrect = selected === problem.correctAnswer || numericInput.trim() === problem.correctAnswer;

  const handleSubmit = () => {
    const answer = problem.type === 'numeric' ? numericInput.trim() : selected;
    if (!answer) return;
    const correct = answer === problem.correctAnswer;
    onAnswer(correct);
    setShowExplanation(true);
  };

  return (
    <div className={`bg-surface rounded-xl p-6 border transition-colors ${
      answered
        ? isCorrect ? 'border-success/50' : 'border-danger/50'
        : 'border-surface-lighter'
    }`}>
      <p className="text-text-bright font-medium mb-4">{problem.question}</p>

      {problem.latex && (
        <div className="mb-4 bg-bg rounded-lg p-3 text-center">
          <MathRenderer latex={problem.latex} display />
        </div>
      )}

      {problem.type === 'multiple-choice' && problem.choices && (
        <div className="space-y-2 mb-4">
          {problem.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => !answered && setSelected(choice)}
              disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                answered && choice === problem.correctAnswer
                  ? 'border-success bg-success/10 text-success'
                  : answered && choice === selected && choice !== problem.correctAnswer
                    ? 'border-danger bg-danger/10 text-danger'
                    : selected === choice
                      ? 'border-primary bg-primary/10 text-primary-light'
                      : 'border-surface-lighter hover:border-primary/30 text-text'
              }`}
            >
              <span className="font-mono text-sm mr-2 text-text-muted">{String.fromCharCode(65 + idx)}.</span>
              {choice}
            </button>
          ))}
        </div>
      )}

      {problem.type === 'numeric' && (
        <div className="mb-4">
          <input
            type="text"
            value={numericInput}
            onChange={(e) => !answered && setNumericInput(e.target.value)}
            disabled={answered}
            placeholder="Enter your answer..."
            className="w-full px-4 py-3 rounded-lg bg-bg border border-surface-lighter text-text-bright placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
            onKeyDown={(e) => e.key === 'Enter' && !answered && handleSubmit()}
          />
        </div>
      )}

      <div className="flex items-center gap-3">
        {!answered && (
          <button
            onClick={handleSubmit}
            disabled={!selected && !numericInput.trim()}
            className="bg-primary hover:bg-primary-dark disabled:opacity-40 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Check Answer
          </button>
        )}

        {problem.hint && !answered && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1 text-sm text-secondary hover:text-secondary-dark transition-colors"
          >
            <Lightbulb size={14} />
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>
        )}

        {answered && (
          <div className={`flex items-center gap-2 font-medium ${isCorrect ? 'text-success' : 'text-danger'}`}>
            <CheckCircle size={18} />
            {isCorrect ? 'Correct!' : `Incorrect — answer: ${problem.correctAnswer}`}
          </div>
        )}
      </div>

      {showHint && !answered && problem.hint && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-3 text-sm text-secondary bg-secondary/10 rounded-lg p-3"
        >
          {problem.hint}
        </motion.p>
      )}

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-3 text-sm text-text-muted bg-bg rounded-lg p-3"
        >
          <strong className="text-text">Explanation:</strong> {problem.explanation}
        </motion.div>
      )}
    </div>
  );
}

export function Lesson() {
  const { day } = useParams<{ day: string }>();
  const navigate = useNavigate();
  const dayNum = parseInt(day ?? '1', 10);
  const topic = getTopicByDay(dayNum);
  const { progress, completeDay, recordProblemResult, addStudyTime } = useProgress();
  const [activeTab, setActiveTab] = useState<'lesson' | 'practice'>('lesson');
  const [answeredProblems, setAnsweredProblems] = useState<Set<string>>(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));
  const [startTime] = useState(() => Date.now());

  const phase = phases.find(p => p.id === topic?.phase);

  useEffect(() => {
    const interval = setInterval(() => {
      addStudyTime(1);
    }, 60000);
    return () => {
      clearInterval(interval);
      const totalMs = Date.now() - startTime;
      const recorded = Math.floor(totalMs / 60000);
      const remainderMs = totalMs - recorded * 60000;
      if (remainderMs > 10000) {
        addStudyTime(1);
      }
    };
  }, [startTime, addStudyTime]);

  if (!topic) {
    return (
      <div className="text-center py-20">
        <p className="text-text-muted text-lg">Lesson not found</p>
        <Link to="/curriculum" className="text-primary mt-2 inline-block">Back to curriculum</Link>
      </div>
    );
  }

  const handleAnswer = (problemId: string, correct: boolean) => {
    setAnsweredProblems(prev => new Set(prev).add(problemId));
    if (correct) setCorrectCount(c => c + 1);
    recordProblemResult(problemId, correct);
  };

  const allAnswered = topic.problems.length > 0 && answeredProblems.size === topic.problems.length;
  const isCompleted = progress.completedDays.includes(dayNum);

  const handleComplete = () => {
    completeDay(dayNum);
    if (dayNum < 90) navigate(`/lesson/${dayNum + 1}`);
  };

  const toggleSection = (idx: number) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <Link to="/curriculum" className="flex items-center gap-1 text-text-muted hover:text-text transition-colors text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Curriculum</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          {dayNum > 1 && (
            <Link to={`/lesson/${dayNum - 1}`} className="text-text-muted hover:text-text transition-colors text-sm">
              &larr; Day {dayNum - 1}
            </Link>
          )}
          {dayNum < 90 && (
            <Link to={`/lesson/${dayNum + 1}`} className="text-text-muted hover:text-text transition-colors text-sm">
              Day {dayNum + 1} &rarr;
            </Link>
          )}
        </div>
      </div>

      {/* Topic Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-medium px-2.5 py-0.5 rounded-full"
            style={{ background: (phase?.color ?? '#6366f1') + '30', color: phase?.color }}
          >
            {phase?.name} &middot; Day {topic.day}
          </span>
          <span className="text-xs text-text-muted">{topic.difficulty}</span>
          {isCompleted && <span className="text-xs text-success flex items-center gap-1"><CheckCircle size={12} /> Completed</span>}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-text-bright">{topic.title}</h1>
        <p className="text-text-muted mt-1">{topic.subtitle}</p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-surface rounded-xl p-5 border border-surface-lighter">
        <h3 className="text-sm font-semibold text-text-bright mb-3 flex items-center gap-2">
          <BookOpen size={16} className="text-primary" />
          Learning Objectives
        </h3>
        <ul className="space-y-1">
          {topic.objectives.map((obj, i) => (
            <li key={i} className="text-sm text-text-muted flex items-start gap-2">
              <span className="text-primary mt-0.5">&#9679;</span>
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Formulas */}
      {topic.keyFormulas.length > 0 && (
        <div className="bg-surface rounded-xl p-5 border border-surface-lighter">
          <h3 className="text-sm font-semibold text-text-bright mb-3">Key Formulas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topic.keyFormulas.map((f, i) => (
              <div key={i} className="bg-bg rounded-lg p-3">
                <p className="text-xs text-text-muted mb-1">{f.name}</p>
                <MathRenderer latex={f.latex} display />
                {f.description && <p className="text-xs text-text-muted mt-1">{f.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-surface-lighter">
        <button
          onClick={() => setActiveTab('lesson')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'lesson'
              ? 'border-primary text-primary-light'
              : 'border-transparent text-text-muted hover:text-text'
          }`}
        >
          Lesson ({topic.sections.length} sections)
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'practice'
              ? 'border-primary text-primary-light'
              : 'border-transparent text-text-muted hover:text-text'
          }`}
        >
          Practice ({topic.problems.length} problems)
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'lesson' ? (
          <motion.div
            key="lesson"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            {topic.sections.map((section, idx) => (
              <div key={idx} className="bg-surface rounded-xl border border-surface-lighter overflow-hidden">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h3 className="font-semibold text-text-bright">{section.title}</h3>
                  {expandedSections.has(idx) ? <ChevronUp size={18} className="text-text-muted" /> : <ChevronDown size={18} className="text-text-muted" />}
                </button>
                {expandedSections.has(idx) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-5 pb-5 space-y-4"
                  >
                    <p className="text-text-muted leading-relaxed whitespace-pre-line">{section.content}</p>

                    {section.formulas && section.formulas.length > 0 && (
                      <div className="space-y-2">
                        {section.formulas.map((f, i) => (
                          <div key={i} className="bg-bg rounded-lg p-3">
                            <MathRenderer latex={f.latex} display />
                            <p className="text-xs text-text-muted mt-1">{f.name}: {f.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.example && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm font-medium text-primary-light mb-2">Example</p>
                        <p className="text-text-bright mb-3">{section.example.problem}</p>
                        <ol className="space-y-1 mb-3">
                          {section.example.steps.map((step, i) => (
                            <li key={i} className="text-sm text-text-muted">
                              <span className="text-primary font-medium">Step {i + 1}:</span> {step}
                            </li>
                          ))}
                        </ol>
                        <div className="bg-bg rounded-lg p-3 text-center">
                          <MathRenderer latex={section.example.solution} display />
                        </div>
                      </div>
                    )}

                    {section.tip && (
                      <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 flex items-start gap-2">
                        <Lightbulb size={16} className="text-secondary mt-0.5" />
                        <p className="text-sm text-secondary">{section.tip}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            ))}

            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('practice')}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                Go to Practice <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="practice"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {topic.problems.length === 0 ? (
              <p className="text-text-muted text-center py-8">No practice problems for this lesson.</p>
            ) : (
              <>
                {topic.problems.map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    onAnswer={(correct) => handleAnswer(problem.id, correct)}
                    answered={answeredProblems.has(problem.id)}
                  />
                ))}

                {allAnswered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-6 border border-accent/30 text-center"
                  >
                    <h3 className="text-xl font-bold text-text-bright mb-2">
                      {correctCount === topic.problems.length ? 'Perfect Score!' : 'Practice Complete!'}
                    </h3>
                    <p className="text-text-muted mb-4">
                      You got {correctCount} out of {topic.problems.length} correct
                    </p>
                    <button
                      onClick={handleComplete}
                      className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                      {dayNum < 90 ? 'Complete & Continue to Day ' + (dayNum + 1) : 'Complete Course!'}
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
