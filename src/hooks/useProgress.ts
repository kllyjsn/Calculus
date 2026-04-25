import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, ProblemResult, MasteryLevel } from '../data/types';

const STORAGE_KEY = 'calculus-mastery-progress';

const defaultProgress: UserProgress = {
  completedDays: [],
  currentDay: 1,
  streakDays: 0,
  lastStudyDate: null,
  problemResults: {},
  phaseScores: {},
  totalTimeMinutes: 0,
  masteryLevel: 'novice',
};

function computeMasteryLevel(completedDays: number[]): MasteryLevel {
  const count = completedDays.length;
  if (count >= 80) return 'master';
  if (count >= 55) return 'expert';
  if (count >= 35) return 'practitioner';
  if (count >= 15) return 'apprentice';
  return 'novice';
}

function computeStreak(lastStudyDate: string | null): { streakDays: number; isToday: boolean } {
  if (!lastStudyDate) return { streakDays: 0, isToday: false };
  const last = new Date(lastStudyDate);
  const now = new Date();
  const diffMs = now.getTime() - last.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return { streakDays: 1, isToday: true };
  if (diffDays === 1) return { streakDays: 1, isToday: false };
  return { streakDays: 0, isToday: false };
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as UserProgress;
        const { streakDays } = computeStreak(parsed.lastStudyDate);
        if (streakDays === 0) {
          parsed.streakDays = 0;
        }
        return parsed;
      } catch {
        return defaultProgress;
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeDay = useCallback((day: number) => {
    setProgress(prev => {
      const completedDays = prev.completedDays.includes(day)
        ? prev.completedDays
        : [...prev.completedDays, day].sort((a, b) => a - b);
      const today = new Date().toISOString().split('T')[0];
      const { streakDays } = computeStreak(prev.lastStudyDate);
      const isNewDay = prev.lastStudyDate !== today;

      return {
        ...prev,
        completedDays,
        currentDay: Math.max(prev.currentDay, day + 1),
        lastStudyDate: today,
        streakDays: isNewDay ? (streakDays > 0 ? prev.streakDays + 1 : 1) : prev.streakDays,
        masteryLevel: computeMasteryLevel(completedDays),
      };
    });
  }, []);

  const recordProblemResult = useCallback((problemId: string, correct: boolean) => {
    setProgress(prev => {
      const existing = prev.problemResults[problemId];
      const now = new Date().toISOString();
      const ef = existing ? (correct ? Math.min(existing.easeFactor + 0.1, 2.5) : Math.max(existing.easeFactor - 0.2, 1.3)) : (correct ? 2.5 : 1.3);
      const interval = existing ? (correct ? Math.ceil(existing.interval * ef) : 1) : (correct ? 1 : 1);
      const nextReview = new Date(Date.now() + interval * 24 * 60 * 60 * 1000).toISOString();

      const result: ProblemResult = {
        problemId,
        correct,
        attempts: existing ? existing.attempts + 1 : 1,
        lastAttempted: now,
        nextReview,
        easeFactor: ef,
        interval,
      };

      return {
        ...prev,
        problemResults: { ...prev.problemResults, [problemId]: result },
      };
    });
  }, []);

  const addStudyTime = useCallback((minutes: number) => {
    setProgress(prev => ({
      ...prev,
      totalTimeMinutes: prev.totalTimeMinutes + minutes,
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getAccuracy = useCallback(() => {
    const results = Object.values(progress.problemResults);
    if (results.length === 0) return 0;
    const correct = results.filter(r => r.correct).length;
    return Math.round((correct / results.length) * 100);
  }, [progress.problemResults]);

  const getDueReviews = useCallback(() => {
    const now = new Date().toISOString();
    return Object.values(progress.problemResults).filter(r => r.nextReview <= now && !r.correct);
  }, [progress.problemResults]);

  return {
    progress,
    completeDay,
    recordProblemResult,
    addStudyTime,
    resetProgress,
    getAccuracy,
    getDueReviews,
  };
}
