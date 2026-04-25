import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, Play, Clock } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { allTopics } from '../data/curriculum';
import { phases } from '../data/phases';

const difficultyColors: Record<string, string> = {
  beginner: 'text-accent',
  intermediate: 'text-info',
  advanced: 'text-secondary',
  expert: 'text-danger',
};

export function Curriculum() {
  const { progress } = useProgress();
  const [searchParams, setSearchParams] = useSearchParams();
  const activePhase = searchParams.get('phase') ?? 'all';

  const filteredTopics = activePhase === 'all'
    ? allTopics
    : allTopics.filter(t => t.phase === activePhase);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-text-bright">Curriculum</h1>
        <p className="text-text-muted mt-1">
          {allTopics.length} lessons across {phases.length} phases
        </p>
      </div>

      {/* Phase Filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSearchParams({})}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activePhase === 'all'
              ? 'bg-primary text-white'
              : 'bg-surface text-text-muted hover:bg-surface-light'
          }`}
        >
          All Days
        </button>
        {phases.map(phase => (
          <button
            key={phase.id}
            onClick={() => setSearchParams({ phase: phase.id })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activePhase === phase.id
                ? 'text-white'
                : 'bg-surface text-text-muted hover:bg-surface-light'
            }`}
            style={activePhase === phase.id ? { background: phase.color } : {}}
          >
            {phase.icon} {phase.name}
          </button>
        ))}
      </div>

      {/* Topic List */}
      <div className="space-y-3">
        {filteredTopics.map((topic, idx) => {
          const isCompleted = progress.completedDays.includes(topic.day);
          const isLocked = topic.day > progress.currentDay + 2;
          const isCurrent = topic.day === progress.currentDay;
          const phase = phases.find(p => p.id === topic.phase);

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.02 }}
            >
              {isLocked ? (
                <div className="bg-surface/50 rounded-xl p-4 border border-surface-lighter opacity-50 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-lighter flex items-center justify-center">
                    <Lock size={16} className="text-text-muted" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted">Day {topic.day}</p>
                    <p className="text-text-muted font-medium">{topic.title}</p>
                  </div>
                </div>
              ) : (
                <Link
                  to={`/lesson/${topic.day}`}
                  className={`block bg-surface rounded-xl p-4 border transition-all hover:border-primary/50 ${
                    isCurrent ? 'border-primary/50 ring-1 ring-primary/20' : 'border-surface-lighter'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: isCompleted ? '#22c55e' : (phase?.color ?? '#6366f1') }}
                    >
                      {isCompleted ? <CheckCircle size={20} /> : topic.day}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-muted">Day {topic.day}</span>
                        <span className="text-xs" style={{ color: phase?.color }}>{phase?.name}</span>
                        <span className={`text-xs ${difficultyColors[topic.difficulty]}`}>
                          {topic.difficulty}
                        </span>
                      </div>
                      <h3 className="font-semibold text-text-bright truncate">{topic.title}</h3>
                      <p className="text-sm text-text-muted truncate">{topic.subtitle}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-text-muted text-sm">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {topic.estimatedMinutes}m
                      </span>
                      <span className="flex items-center gap-1">
                        {topic.problems.length} problems
                      </span>
                      {isCurrent && (
                        <span className="flex items-center gap-1 text-primary">
                          <Play size={14} />
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
