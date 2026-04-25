import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Filter, Trophy } from 'lucide-react';
import { allTopics } from '../data/curriculum';
import { phases } from '../data/phases';
import { useProgress } from '../hooks/useProgress';
import { MathRenderer } from '../components/math/MathRenderer';
import type { Problem, Difficulty } from '../data/types';

type ProblemWithMeta = Problem & { topicTitle: string; day: number; phase: string };

export function Practice() {
  const { recordProblemResult, progress } = useProgress();
  const [phaseFilter, setPhaseFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [numericInput, setNumericInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);

  const allProblems = useMemo(() => {
    const problems: ProblemWithMeta[] = [];
    for (const topic of allTopics) {
      if (phaseFilter !== 'all' && topic.phase !== phaseFilter) continue;
      for (const p of topic.problems) {
        if (difficultyFilter !== 'all' && p.difficulty !== difficultyFilter) continue;
        problems.push({ ...p, topicTitle: topic.title, day: topic.day, phase: topic.phase });
      }
    }
    return problems;
  }, [phaseFilter, difficultyFilter]);

  const [shuffleSeed, setShuffleSeed] = useState(0);
  const shuffledProblems = useMemo(() => {
    void shuffleSeed;
    const copy = [...allProblems];
    let seed = shuffleSeed + 1;
    for (let i = copy.length - 1; i > 0; i--) {
      seed = (seed * 16807) % 2147483647;
      const j = seed % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [allProblems, shuffleSeed]);

  const problem = shuffledProblems[currentIdx];

  const handleCheck = () => {
    if (!problem) return;
    const answer = problem.type === 'numeric' ? numericInput.trim() : selected;
    if (!answer) return;
    const correct = answer === problem.correctAnswer;
    recordProblemResult(problem.id, correct);
    setAnswered(true);
    setSessionTotal(t => t + 1);
    if (correct) setSessionCorrect(c => c + 1);
  };

  const handleNext = () => {
    setCurrentIdx((currentIdx + 1) % shuffledProblems.length);
    setSelected(null);
    setNumericInput('');
    setAnswered(false);
  };

  const isCorrect = selected === problem?.correctAnswer || numericInput.trim() === problem?.correctAnswer;
  const phase = problem ? phases.find(p => p.id === problem.phase) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-text-bright flex items-center gap-3">
          <Trophy className="text-secondary" />
          Practice Mode
        </h1>
        <p className="text-text-muted mt-1">Sharpen your skills with randomized problems</p>
      </div>

      {/* Session Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-surface rounded-xl p-4 border border-surface-lighter">
          <p className="text-xs text-text-muted">Score</p>
          <p className="text-xl md:text-2xl font-bold text-text-bright">{sessionCorrect}/{sessionTotal}</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-surface-lighter">
          <p className="text-xs text-text-muted">Accuracy</p>
          <p className="text-xl md:text-2xl font-bold text-text-bright">
            {sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0}%
          </p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-surface-lighter">
          <p className="text-xs text-text-muted">Available</p>
          <p className="text-xl md:text-2xl font-bold text-text-bright">{shuffledProblems.length}</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-surface-lighter">
          <p className="text-xs text-text-muted">Lifetime</p>
          <p className="text-xl md:text-2xl font-bold text-text-bright">{Object.keys(progress.problemResults).length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <Filter size={16} className="text-text-muted" />
        <select
          value={phaseFilter}
          onChange={(e) => { setPhaseFilter(e.target.value); setCurrentIdx(0); setSelected(null); setNumericInput(''); setAnswered(false); }}
          className="bg-surface border border-surface-lighter text-text-bright rounded-lg px-3 py-2 text-sm flex-1 min-w-[120px]"
        >
          <option value="all">All Phases</option>
          {phases.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <select
          value={difficultyFilter}
          onChange={(e) => { setDifficultyFilter(e.target.value as Difficulty | 'all'); setCurrentIdx(0); setSelected(null); setNumericInput(''); setAnswered(false); }}
          className="bg-surface border border-surface-lighter text-text-bright rounded-lg px-3 py-2 text-sm flex-1 min-w-[120px]"
        >
          <option value="all">All Difficulties</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
        <button
          onClick={() => { setShuffleSeed(s => s + 1); setCurrentIdx(0); setSelected(null); setNumericInput(''); setAnswered(false); }}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
        >
          <Shuffle size={14} /> Shuffle
        </button>
      </div>

      {/* Problem Display */}
      {problem ? (
        <motion.div
          key={problem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface rounded-xl p-6 border border-surface-lighter"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: (phase?.color ?? '#6366f1') + '30', color: phase?.color }}>
              Day {problem.day}: {problem.topicTitle}
            </span>
            <span className="text-xs text-text-muted">{problem.difficulty}</span>
          </div>

          <p className="text-lg text-text-bright font-medium mb-4">{problem.question}</p>

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
                onKeyDown={(e) => e.key === 'Enter' && !answered && handleCheck()}
              />
            </div>
          )}

          <div className="flex items-center gap-3">
            {!answered ? (
              <button
                onClick={handleCheck}
                disabled={!selected && !numericInput.trim()}
                className="bg-primary hover:bg-primary-dark disabled:opacity-40 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Check
              </button>
            ) : (
              <>
                <span className={`font-medium ${isCorrect ? 'text-success' : 'text-danger'}`}>
                  {isCorrect ? 'Correct!' : `Incorrect — ${problem.correctAnswer}`}
                </span>
                <button
                  onClick={handleNext}
                  className="ml-auto bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Next Problem
                </button>
              </>
            )}
          </div>

          {answered && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-text-muted bg-bg rounded-lg p-3"
            >
              {problem.explanation}
            </motion.p>
          )}
        </motion.div>
      ) : (
        <div className="bg-surface rounded-xl p-12 border border-surface-lighter text-center">
          <p className="text-text-muted">No problems match your filters. Try broadening your selection.</p>
        </div>
      )}
    </div>
  );
}
