import type { Topic } from '../types';

export const masteryTopics: Topic[] = [
  { id: 'day-86', day: 86, phase: 'mastery', title: 'Ordinary Differential Equations', subtitle: 'First and second order ODEs', difficulty: 'advanced', estimatedMinutes: 60, prerequisites: ['day-52'],
    objectives: ['Solve first-order linear ODEs with integrating factors', 'Solve second-order linear ODEs with constant coefficients', 'Apply initial conditions to find particular solutions'],
    keyFormulas: [
      { name: 'First-order linear', latex: 'y\' + P(x)y = Q(x)', description: 'Use integrating factor e^(∫P dx)' },
      { name: 'Characteristic equation', latex: 'ar^2 + br + c = 0', description: 'For ay\'\' + by\' + cy = 0' },
    ],
    sections: [
      { title: 'First-Order Linear ODEs', content: 'Multiply by integrating factor μ(x) = e^(∫P(x)dx). Then (μy)\' = μQ, so y = (1/μ)∫μQ dx.' },
      { title: 'Second-Order with Constant Coefficients', content: 'For ay\'\' + by\' + cy = 0, solve the characteristic equation ar² + br + c = 0. Two distinct real roots → y = C₁e^(r₁x) + C₂e^(r₂x). Repeated root → y = (C₁ + C₂x)e^(rx). Complex roots α ± βi → y = e^(αx)(C₁cos βx + C₂sin βx).' },
    ],
    problems: [
      { id: 'p86-1', question: 'Solve: y\'\' - 5y\' + 6y = 0. What is the general solution?', type: 'multiple-choice', choices: ['C₁e²ˣ + C₂e³ˣ', 'C₁e⁻²ˣ + C₂e⁻³ˣ', '(C₁ + C₂x)e²ˣ', 'C₁cos2x + C₂sin3x'], correctAnswer: 'C₁e²ˣ + C₂e³ˣ', explanation: 'r² - 5r + 6 = (r-2)(r-3) = 0. r = 2, 3.', difficulty: 'intermediate' },
    ],
  },
  { id: 'day-87', day: 87, phase: 'mastery', title: 'Real-World Modeling', subtitle: 'Calculus in science and engineering', difficulty: 'advanced', estimatedMinutes: 55, prerequisites: ['day-86'],
    objectives: ['Model population growth and decay', 'Model mechanical vibrations', 'Apply calculus to economics and physics problems'],
    keyFormulas: [
      { name: 'Exponential growth', latex: 'P(t) = P_0 e^{kt}', description: 'Solution of dP/dt = kP' },
      { name: 'Logistic growth', latex: "P' = kP(1 - P/M)", description: 'Growth with carrying capacity M' },
    ],
    sections: [
      { title: 'Modeling with Calculus', content: 'Calculus models everything: population dynamics (exponential/logistic growth), physics (projectile motion, heat transfer), economics (marginal cost/revenue, optimization), and more.' },
    ],
    problems: [
      { id: 'p87-1', question: 'A population doubles every 5 years. What is the growth rate k?', type: 'multiple-choice', choices: ['ln(2)/5', '2/5', 'ln(5)/2', '5/ln(2)'], correctAnswer: 'ln(2)/5', explanation: '2P₀ = P₀e^(5k) → e^(5k) = 2 → k = ln(2)/5.', difficulty: 'intermediate' },
    ],
  },
  { id: 'day-88', day: 88, phase: 'mastery', title: 'Connections & Big Picture', subtitle: 'How it all fits together', difficulty: 'expert', estimatedMinutes: 50, prerequisites: ['day-87'],
    objectives: ['See the connections between all major calculus theorems', 'Understand the Generalized Stokes\' Theorem', 'Appreciate the unity of calculus'],
    keyFormulas: [
      { name: 'Generalized Stokes\'', latex: '\\int_{\\partial \\Omega} \\omega = \\int_\\Omega d\\omega', description: 'Unifies FTC, Green\'s, Stokes\', and Divergence theorems' },
    ],
    sections: [
      { title: 'The Unity of Calculus', content: 'Every major theorem in calculus has the same form: "the integral of a derivative over a region equals the integral of the function over the boundary." FTC: ∫ₐᵇ f\'dx = f(b)-f(a). Green\'s, Stokes\', Divergence Theorems — all the same idea in higher dimensions.' },
    ],
    problems: [
      { id: 'p88-1', question: 'Which theorem is the 1D version of the generalized Stokes\' theorem?', type: 'multiple-choice', choices: ['Fundamental Theorem of Calculus', 'Mean Value Theorem', "L'Hôpital's Rule", 'Intermediate Value Theorem'], correctAnswer: 'Fundamental Theorem of Calculus', explanation: 'FTC: ∫ₐᵇ f\' = f(b) - f(a) is the 1D case of the generalized Stokes\' theorem.', difficulty: 'intermediate' },
    ],
  },
  { id: 'day-89', day: 89, phase: 'mastery', title: 'Comprehensive Review', subtitle: 'Full-spectrum review of all 90 days', difficulty: 'expert', estimatedMinutes: 60, prerequisites: ['day-88'],
    objectives: ['Review all phases', 'Identify remaining weak areas', 'Build final confidence'],
    keyFormulas: [],
    sections: [
      { title: 'The Journey', content: 'You\'ve covered: (1) Foundations: functions, limits, continuity. (2) Differentiation: all rules and applications. (3) Integration: techniques and applications. (4) Series: convergence and power series. (5) Multivariable: partial derivatives, multiple integrals, vector calculus. (6) Applications: ODEs and modeling. Tomorrow is the final assessment.' },
    ],
    problems: [
      { id: 'p89-1', question: 'Evaluate: d/dx[∫₀^(x²) sin(t²) dt]', type: 'multiple-choice', choices: ['sin(x⁴)·2x', 'sin(x²)', '2x·sin(x²)', 'cos(x⁴)·2x'], correctAnswer: 'sin(x⁴)·2x', explanation: 'FTC + Chain Rule: sin((x²)²) · 2x = 2x·sin(x⁴).', difficulty: 'advanced' },
      { id: 'p89-2', question: 'The Maclaurin series for f(x) = 1/(1-x) is:', type: 'multiple-choice', choices: ['Σxⁿ for |x|<1', 'Σxⁿ/n!', 'Σ(-1)ⁿxⁿ', 'Σnxⁿ'], correctAnswer: 'Σxⁿ for |x|<1', explanation: 'Geometric series: 1/(1-x) = 1 + x + x² + ... = Σxⁿ, |x|<1.', difficulty: 'beginner' },
    ],
  },
  { id: 'day-90', day: 90, phase: 'mastery', title: 'Final Mastery Assessment', subtitle: 'Prove your calculus mastery!', difficulty: 'expert', estimatedMinutes: 90, prerequisites: ['day-89'],
    objectives: ['Demonstrate comprehensive calculus mastery', 'Solve problems spanning all major topics', 'Achieve Calculus Master status'],
    keyFormulas: [],
    sections: [
      { title: 'Congratulations!', content: 'You\'ve completed the 90-Day Calculus Mastery program. You now have a deep, connected understanding of calculus from foundations through multivariable and vector calculus. You are a calculus master.' },
    ],
    problems: [
      { id: 'p90-1', question: 'Evaluate: ∫₀^∞ xe⁻ˣ dx', type: 'numeric', correctAnswer: '1', explanation: 'IBP: u=x, dv=e⁻ˣdx. [-xe⁻ˣ]₀^∞ + ∫₀^∞ e⁻ˣ dx = 0 + 1 = 1.', difficulty: 'intermediate' },
      { id: 'p90-2', question: 'What is the gradient of f(x,y,z) = x²yz at (1, 2, 3)?', type: 'multiple-choice', choices: ['⟨12, 3, 2⟩', '⟨6, 3, 2⟩', '⟨12, 6, 2⟩', '⟨4, 3, 2⟩'], correctAnswer: '⟨12, 3, 2⟩', explanation: '∇f = ⟨2xyz, x²z, x²y⟩. At (1,2,3): ⟨12, 3, 2⟩.', difficulty: 'intermediate' },
      { id: 'p90-3', question: 'The Taylor series for cos(x) begins with:', type: 'multiple-choice', choices: ['1 - x²/2 + x⁴/24', '1 + x²/2 + x⁴/24', 'x - x³/6 + x⁵/120', '1 - x + x²/2'], correctAnswer: '1 - x²/2 + x⁴/24', explanation: 'cos(x) = Σ(-1)ⁿx²ⁿ/(2n)! = 1 - x²/2 + x⁴/24 - ...', difficulty: 'beginner' },
      { id: 'p90-4', question: 'A region R bounded by y = 0, y = x, x = 1 is rotated around the x-axis. Volume = ?', type: 'multiple-choice', choices: ['π/3', 'π/2', 'π', '2π/3'], correctAnswer: 'π/3', explanation: 'V = π∫₀¹ x² dx = π[x³/3]₀¹ = π/3.', difficulty: 'intermediate' },
      { id: 'p90-5', question: 'Using the ratio test, Σ xⁿ/n! converges for:', type: 'multiple-choice', choices: ['All x', '|x| < 1', '|x| ≤ 1', 'x = 0 only'], correctAnswer: 'All x', explanation: '|x|/(n+1) → 0 < 1 for all x. This is eˣ — converges everywhere!', difficulty: 'intermediate' },
    ],
  },
];
