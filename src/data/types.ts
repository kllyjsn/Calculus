export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type Phase = {
  id: string;
  name: string;
  description: string;
  days: [number, number];
  color: string;
  icon: string;
};

export type Topic = {
  id: string;
  day: number;
  phase: string;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  prerequisites: string[];
  objectives: string[];
  keyFormulas: Formula[];
  sections: Section[];
  problems: Problem[];
};

export type Formula = {
  name: string;
  latex: string;
  description: string;
};

export type Section = {
  title: string;
  content: string;
  formulas?: Formula[];
  example?: Example;
  tip?: string;
};

export type Example = {
  problem: string;
  steps: string[];
  solution: string;
};

export type Problem = {
  id: string;
  question: string;
  latex?: string;
  type: 'multiple-choice' | 'numeric' | 'expression';
  choices?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  difficulty: Difficulty;
};

export type UserProgress = {
  completedDays: number[];
  currentDay: number;
  streakDays: number;
  lastStudyDate: string | null;
  problemResults: Record<string, ProblemResult>;
  phaseScores: Record<string, number>;
  totalTimeMinutes: number;
  masteryLevel: MasteryLevel;
};

export type ProblemResult = {
  problemId: string;
  correct: boolean;
  attempts: number;
  lastAttempted: string;
  nextReview: string;
  easeFactor: number;
  interval: number;
};

export type MasteryLevel =
  | 'novice'
  | 'apprentice'
  | 'practitioner'
  | 'expert'
  | 'master';

export type DailyPlan = {
  day: number;
  topic: Topic;
  reviewProblems: Problem[];
  estimatedMinutes: number;
  isReviewDay: boolean;
};
