import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Flame, Target, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { getTopicByDay } from '../data/curriculum';
import { phases } from '../data/phases';
import { MathRenderer } from '../components/math/MathRenderer';

const masteryLabels: Record<string, string> = {
  novice: 'Novice',
  apprentice: 'Apprentice',
  practitioner: 'Practitioner',
  expert: 'Expert',
  master: 'Master',
};

export function Dashboard() {
  const { progress, getAccuracy } = useProgress();
  const currentTopic = getTopicByDay(progress.currentDay);
  const completionPercent = Math.round((progress.completedDays.length / 90) * 100);
  const accuracy = getAccuracy();

  const currentPhase = phases.find(
    p => progress.currentDay >= p.days[0] && progress.currentDay <= p.days[1]
  ) ?? phases[0];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text-bright">
          Welcome back
        </h1>
        <p className="text-text-muted mt-1">
          Day {progress.currentDay} of 90 &middot; {masteryLabels[progress.masteryLevel]} Level
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: Flame, label: 'Streak', value: `${progress.streakDays} days`, color: 'text-secondary' },
          { icon: Target, label: 'Accuracy', value: `${accuracy}%`, color: 'text-accent' },
          { icon: Clock, label: 'Study Time', value: `${Math.round(progress.totalTimeMinutes / 60)}h ${progress.totalTimeMinutes % 60}m`, color: 'text-info' },
          { icon: TrendingUp, label: 'Completed', value: `${progress.completedDays.length}/90`, color: 'text-primary-light' },
        ].map(({ icon: Icon, label, value, color }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface rounded-xl p-5 border border-surface-lighter"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon size={16} className={color} />
              <span className="text-xs text-text-muted uppercase tracking-wide">{label}</span>
            </div>
            <p className="text-2xl font-bold text-text-bright">{value}</p>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-surface rounded-xl p-6 border border-surface-lighter"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-text-bright">90-Day Progress</h2>
          <span className="text-sm text-text-muted">{completionPercent}% complete</span>
        </div>
        <div className="w-full h-3 bg-bg rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
        <div className="flex justify-between mt-3 text-xs text-text-muted">
          {phases.map(phase => (
            <span key={phase.id} style={{ color: phase.color }}>
              {phase.icon} {phase.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Today's Lesson Card */}
      {currentTopic && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: currentPhase.color + '30', color: currentPhase.color }}
                >
                  {currentPhase.name} &middot; Day {currentTopic.day}
                </span>
                <span className="text-xs text-text-muted">~{currentTopic.estimatedMinutes} min</span>
              </div>
              <h2 className="text-2xl font-bold text-text-bright mb-1">{currentTopic.title}</h2>
              <p className="text-text-muted mb-4">{currentTopic.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentTopic.keyFormulas.slice(0, 3).map((f, i) => (
                  <span key={i} className="bg-surface/50 px-3 py-1 rounded-lg text-sm">
                    <MathRenderer latex={f.latex} />
                  </span>
                ))}
              </div>
              <Link
                to={`/lesson/${currentTopic.day}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Play size={18} />
                {progress.completedDays.includes(currentTopic.day) ? 'Review Lesson' : 'Start Lesson'}
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Phase Overview */}
      <div>
        <h2 className="text-lg font-semibold text-text-bright mb-4">Learning Phases</h2>
        <div className="grid grid-cols-3 gap-4">
          {phases.map(phase => {
            const [start, end] = phase.days;
            const totalDays = end - start + 1;
            const completed = progress.completedDays.filter(d => d >= start && d <= end).length;
            const phasePercent = Math.round((completed / totalDays) * 100);
            const isActive = progress.currentDay >= start && progress.currentDay <= end;

            return (
              <Link
                key={phase.id}
                to={`/curriculum?phase=${phase.id}`}
                className={`bg-surface rounded-xl p-5 border transition-all hover:border-primary/50 ${
                  isActive ? 'border-primary/50 ring-1 ring-primary/20' : 'border-surface-lighter'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{phase.icon}</span>
                  <ChevronRight size={16} className="text-text-muted" />
                </div>
                <h3 className="font-semibold text-text-bright text-sm">{phase.name}</h3>
                <p className="text-xs text-text-muted mt-1 line-clamp-2">{phase.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-bg rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${phasePercent}%`, background: phase.color }}
                    />
                  </div>
                  <span className="text-xs text-text-muted">{phasePercent}%</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
