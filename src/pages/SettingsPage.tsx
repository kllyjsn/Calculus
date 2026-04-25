import { useState } from 'react';
import { Settings, RotateCcw, AlertTriangle } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

export function SettingsPage() {
  const { progress, resetProgress } = useProgress();
  const [showReset, setShowReset] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text-bright flex items-center gap-3">
          <Settings className="text-primary" />
          Settings
        </h1>
      </div>

      <div className="bg-surface rounded-xl p-6 border border-surface-lighter space-y-6">
        <div>
          <h2 className="font-semibold text-text-bright mb-2">Progress Summary</h2>
          <div className="text-sm text-text-muted space-y-1">
            <p>Days completed: {progress.completedDays.length}/90</p>
            <p>Current day: {progress.currentDay}</p>
            <p>Problems attempted: {Object.keys(progress.problemResults).length}</p>
            <p>Study time: {Math.floor(progress.totalTimeMinutes / 60)}h {progress.totalTimeMinutes % 60}m</p>
            <p>Mastery level: {progress.masteryLevel}</p>
          </div>
        </div>

        <div className="border-t border-surface-lighter pt-6">
          <h2 className="font-semibold text-danger flex items-center gap-2 mb-2">
            <AlertTriangle size={16} />
            Danger Zone
          </h2>
          {!showReset ? (
            <button
              onClick={() => setShowReset(true)}
              className="flex items-center gap-2 text-sm text-danger hover:text-danger/80 transition-colors"
            >
              <RotateCcw size={14} />
              Reset all progress
            </button>
          ) : (
            <div className="bg-danger/10 border border-danger/30 rounded-lg p-4">
              <p className="text-sm text-danger mb-3">This will permanently delete all your progress. Are you sure?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => { resetProgress(); setShowReset(false); }}
                  className="bg-danger text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Yes, reset everything
                </button>
                <button
                  onClick={() => setShowReset(false)}
                  className="bg-surface text-text-muted px-4 py-2 rounded-lg text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
