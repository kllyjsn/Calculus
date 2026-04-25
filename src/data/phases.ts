import type { Phase } from './types';

export const phases: Phase[] = [
  {
    id: 'foundations',
    name: 'Foundations',
    description: 'Build rock-solid pre-calculus skills: functions, algebra, trigonometry, and limits.',
    days: [1, 15],
    color: '#6366f1',
    icon: '🧱',
  },
  {
    id: 'derivatives',
    name: 'Differentiation',
    description: 'Master the derivative — rules, techniques, and powerful applications.',
    days: [16, 35],
    color: '#f59e0b',
    icon: '📐',
  },
  {
    id: 'integrals',
    name: 'Integration',
    description: 'Conquer integrals from Riemann sums to advanced techniques.',
    days: [36, 55],
    color: '#10b981',
    icon: '∫',
  },
  {
    id: 'series',
    name: 'Series & Sequences',
    description: 'Tame infinite series, convergence tests, and power series.',
    days: [56, 70],
    color: '#ef4444',
    icon: 'Σ',
  },
  {
    id: 'multivariable',
    name: 'Multivariable Calculus',
    description: 'Extend calculus to multiple dimensions — partial derivatives, multiple integrals, and vector fields.',
    days: [71, 85],
    color: '#8b5cf6',
    icon: '🌐',
  },
  {
    id: 'mastery',
    name: 'Mastery & Applications',
    description: 'Differential equations, real-world modeling, and comprehensive mastery assessment.',
    days: [86, 90],
    color: '#ec4899',
    icon: '🏆',
  },
];
