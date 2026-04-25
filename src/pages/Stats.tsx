import { motion } from 'framer-motion';
import { BarChart3, Target, Clock, Flame, BookOpen, TrendingUp } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { phases } from '../data/phases';
import { allTopics } from '../data/curriculum';

export function Stats() {
  const { progress, getAccuracy } = useProgress();
  const accuracy = getAccuracy();
  const totalProblems = Object.keys(progress.problemResults).length;
  const correctProblems = Object.values(progress.problemResults).filter(r => r.correct).length;

  const phaseStats = phases.map(phase => {
    const [start, end] = phase.days;
    const topics = allTopics.filter(t => t.day >= start && t.day <= end);
    const completed = progress.completedDays.filter(d => d >= start && d <= end).length;
    const total = end - start + 1;
    const phaseProblems = topics.flatMap(t => t.problems);
    const attempted = phaseProblems.filter(p => progress.problemResults[p.id]).length;
    const correct = phaseProblems.filter(p => progress.problemResults[p.id]?.correct).length;

    return { ...phase, completed, total, attempted, correct, totalProblems: phaseProblems.length };
  });

  const hours = Math.floor(progress.totalTimeMinutes / 60);
  const mins = progress.totalTimeMinutes % 60;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-text-bright flex items-center gap-3">
          <BarChart3 className="text-primary" />
          Statistics
        </h1>
        <p className="text-text-muted mt-1">Track your calculus mastery journey</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-surface rounded-xl p-6 border border-surface-lighter">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-primary" />
            <h3 className="font-medium text-text-bright">Lessons Completed</h3>
          </div>
          <p className="text-4xl font-bold text-text-bright">{progress.completedDays.length}<span className="text-lg text-text-muted">/90</span></p>
          <div className="w-full h-2 bg-bg rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(progress.completedDays.length / 90) * 100}%` }} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-surface rounded-xl p-6 border border-surface-lighter">
          <div className="flex items-center gap-2 mb-3">
            <Target size={18} className="text-accent" />
            <h3 className="font-medium text-text-bright">Problem Accuracy</h3>
          </div>
          <p className="text-4xl font-bold text-text-bright">{accuracy}<span className="text-lg text-text-muted">%</span></p>
          <p className="text-sm text-text-muted mt-2">{correctProblems} correct out of {totalProblems} attempted</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-surface rounded-xl p-6 border border-surface-lighter">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} className="text-info" />
            <h3 className="font-medium text-text-bright">Total Study Time</h3>
          </div>
          <p className="text-4xl font-bold text-text-bright">{hours}<span className="text-lg text-text-muted">h</span> {mins}<span className="text-lg text-text-muted">m</span></p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-surface rounded-xl p-6 border border-surface-lighter">
          <div className="flex items-center gap-2 mb-3">
            <Flame size={18} className="text-secondary" />
            <h3 className="font-medium text-text-bright">Current Streak</h3>
          </div>
          <p className="text-4xl font-bold text-text-bright">{progress.streakDays}<span className="text-lg text-text-muted"> days</span></p>
        </motion.div>
      </div>

      {/* Phase Breakdown */}
      <div>
        <h2 className="text-lg font-semibold text-text-bright mb-4 flex items-center gap-2">
          <TrendingUp size={18} className="text-primary" />
          Phase Breakdown
        </h2>
        <div className="space-y-3">
          {phaseStats.map((phase) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface rounded-xl p-5 border border-surface-lighter"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{phase.icon}</span>
                  <div>
                    <h3 className="font-medium text-text-bright">{phase.name}</h3>
                    <p className="text-xs text-text-muted">Days {phase.days[0]}–{phase.days[1]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-text-bright">{phase.completed}/{phase.total} days</p>
                  <p className="text-xs text-text-muted">{phase.correct}/{phase.attempted} problems correct</p>
                </div>
              </div>
              <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${(phase.completed / phase.total) * 100}%`, background: phase.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
