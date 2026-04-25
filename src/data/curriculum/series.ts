import type { Topic } from '../types';

export const seriesTopics: Topic[] = [
  {
    id: 'day-56', day: 56, phase: 'series', title: 'Sequences', subtitle: 'Convergence and divergence of sequences', difficulty: 'intermediate', estimatedMinutes: 50, prerequisites: ['day-8'],
    objectives: ['Determine if a sequence converges or diverges', 'Find limits of sequences', 'Apply the Monotone Convergence Theorem'],
    keyFormulas: [
      { name: 'Sequence limit', latex: '\\lim_{n \\to \\infty} a_n = L', description: 'Sequence converges to L' },
    ],
    sections: [{ title: 'Sequences', content: 'A sequence {aₙ} converges if lim(n→∞) aₙ = L for some finite L. Otherwise it diverges. Many limit techniques from functions carry over.' }],
    problems: [
      { id: 'p56-1', question: 'Does aₙ = (2n+1)/(3n-1) converge? If so, to what?', type: 'multiple-choice', choices: ['Converges to 2/3', 'Converges to 1', 'Diverges', 'Converges to 0'], correctAnswer: 'Converges to 2/3', explanation: 'Divide by n: (2+1/n)/(3-1/n) → 2/3.', difficulty: 'beginner' },
      { id: 'p56-2', question: 'Does aₙ = (-1)ⁿ converge?', type: 'multiple-choice', choices: ['Yes, to 0', 'Yes, to 1', 'Yes, to -1', 'No, it diverges'], correctAnswer: 'No, it diverges', explanation: 'Alternates between -1 and 1, never settling on one value.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-57', day: 57, phase: 'series', title: 'Infinite Series & Geometric Series', subtitle: 'Summing infinitely many terms', difficulty: 'intermediate', estimatedMinutes: 55, prerequisites: ['day-56'],
    objectives: ['Define partial sums and series convergence', 'Sum geometric series', 'Apply the divergence test'],
    keyFormulas: [
      { name: 'Geometric series', latex: '\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}, \\; |r| < 1', description: '' },
      { name: 'Divergence test', latex: '\\lim a_n \\neq 0 \\implies \\sum a_n \\text{ diverges}', description: '' },
    ],
    sections: [
      { title: 'Geometric Series', content: 'Σ arⁿ converges to a/(1-r) when |r| < 1 and diverges when |r| ≥ 1.',
        example: { problem: 'Sum: 1 + 1/2 + 1/4 + 1/8 + ...', steps: ['a = 1, r = 1/2', 'S = 1/(1-1/2) = 2'], solution: '2' } },
    ],
    problems: [
      { id: 'p57-1', question: 'What is the sum of Σ(1/3)ⁿ from n=0 to ∞?', type: 'multiple-choice', choices: ['3/2', '1/3', '3', '1/2'], correctAnswer: '3/2', explanation: 'a=1, r=1/3. S = 1/(1-1/3) = 1/(2/3) = 3/2.', difficulty: 'beginner' },
      { id: 'p57-2', question: 'Does Σ n/(n+1) converge?', type: 'multiple-choice', choices: ['Yes', 'No (divergence test)', 'Cannot determine', 'Converges to 1'], correctAnswer: 'No (divergence test)', explanation: 'lim n/(n+1) = 1 ≠ 0. By divergence test, series diverges.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-58', day: 58, phase: 'series', title: 'Integral & Comparison Tests', subtitle: 'Testing convergence of positive series', difficulty: 'intermediate', estimatedMinutes: 55, prerequisites: ['day-57'],
    objectives: ['Apply the Integral Test', 'Apply Direct and Limit Comparison Tests', 'Determine convergence of p-series'],
    keyFormulas: [
      { name: 'p-series', latex: '\\sum \\frac{1}{n^p} \\text{ converges iff } p > 1', description: '' },
      { name: 'Integral test', latex: '\\sum a_n \\text{ and } \\int f(x)\\,dx \\text{ converge/diverge together}', description: '' },
    ],
    sections: [
      { title: 'Comparison Tests', content: 'Direct comparison: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges. Limit comparison: if lim(aₙ/bₙ) = c > 0 (finite), then both converge or both diverge.' },
    ],
    problems: [
      { id: 'p58-1', question: 'Does Σ 1/n² converge?', type: 'multiple-choice', choices: ['Yes (p-series, p=2>1)', 'No', 'Cannot determine', 'Yes, to π²/6'], correctAnswer: 'Yes (p-series, p=2>1)', explanation: 'p-series with p=2 > 1 converges. (Its sum is π²/6.)', difficulty: 'beginner' },
      { id: 'p58-2', question: 'Does Σ 1/√n converge?', type: 'multiple-choice', choices: ['Yes', 'No (p=1/2≤1)', 'Cannot determine', 'Yes, by comparison'], correctAnswer: 'No (p=1/2≤1)', explanation: 'p-series with p=1/2 ≤ 1 diverges.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-59', day: 59, phase: 'series', title: 'Ratio & Root Tests', subtitle: 'Tests for series with factorials and powers', difficulty: 'intermediate', estimatedMinutes: 50, prerequisites: ['day-57'],
    objectives: ['Apply the Ratio Test', 'Apply the Root Test', 'Handle series with factorials'],
    keyFormulas: [
      { name: 'Ratio test', latex: 'L = \\lim \\frac{|a_{n+1}|}{|a_n|}. \\; L<1 \\Rightarrow \\text{converges}', description: '' },
      { name: 'Root test', latex: 'L = \\lim \\sqrt[n]{|a_n|}. \\; L<1 \\Rightarrow \\text{converges}', description: '' },
    ],
    sections: [
      { title: 'Ratio Test', content: 'Compute L = lim|aₙ₊₁/aₙ|. If L < 1, converges absolutely. If L > 1, diverges. If L = 1, inconclusive.' },
    ],
    problems: [
      { id: 'p59-1', question: 'Use the ratio test on Σ n!/nⁿ. Does it converge?', type: 'multiple-choice', choices: ['Yes (L < 1)', 'No (L > 1)', 'Inconclusive (L = 1)', 'Cannot apply ratio test'], correctAnswer: 'Yes (L < 1)', explanation: 'L = lim (n/(n+1))ⁿ = 1/e < 1. Converges.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-60', day: 60, phase: 'series', title: 'Alternating Series', subtitle: 'Series with alternating signs', difficulty: 'intermediate', estimatedMinutes: 45, prerequisites: ['day-57'],
    objectives: ['Apply the Alternating Series Test', 'Estimate error in alternating series', 'Distinguish absolute vs conditional convergence'],
    keyFormulas: [
      { name: 'AST', latex: '\\sum (-1)^n b_n \\text{ converges if } b_n \\downarrow 0', description: 'bₙ decreasing to 0' },
      { name: 'Error bound', latex: '|R_n| \\leq b_{n+1}', description: 'Error ≤ first omitted term' },
    ],
    sections: [
      { title: 'Alternating Series', content: 'Σ(-1)ⁿbₙ converges if bₙ is decreasing and lim bₙ = 0. The error after n terms is at most bₙ₊₁.' },
    ],
    problems: [
      { id: 'p60-1', question: 'Does Σ (-1)ⁿ/n converge?', type: 'multiple-choice', choices: ['Yes (AST)', 'No', 'Absolutely convergent', 'Cannot determine'], correctAnswer: 'Yes (AST)', explanation: 'bₙ = 1/n is decreasing and → 0. Converges conditionally (not absolutely since Σ1/n diverges).', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-61', day: 61, phase: 'series', title: 'Absolute Convergence & Strategy', subtitle: 'Choosing the right convergence test', difficulty: 'intermediate', estimatedMinutes: 50, prerequisites: ['day-60'],
    objectives: ['Distinguish absolute vs conditional convergence', 'Develop a convergence test decision tree'],
    keyFormulas: [
      { name: 'Absolute convergence', latex: '\\sum |a_n| \\text{ converges} \\implies \\sum a_n \\text{ converges}', description: '' },
    ],
    sections: [{ title: 'Convergence Strategy', content: 'Decision tree: (1) Divergence test. (2) Geometric/p-series? (3) Alternating? → AST. (4) Factorials or powers of n? → Ratio test. (5) Can you integrate? → Integral test. (6) Compare to known series.' }],
    problems: [
      { id: 'p61-1', question: 'Σ (-1)ⁿ/n is:', type: 'multiple-choice', choices: ['Absolutely convergent', 'Conditionally convergent', 'Divergent', 'Cannot determine'], correctAnswer: 'Conditionally convergent', explanation: 'Σ1/n diverges (harmonic), but Σ(-1)ⁿ/n converges by AST.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-62', day: 62, phase: 'series', title: 'Power Series', subtitle: 'Functions defined by infinite series', difficulty: 'advanced', estimatedMinutes: 55, prerequisites: ['day-59'],
    objectives: ['Find the radius and interval of convergence', 'Understand power series as functions', 'Differentiate and integrate power series'],
    keyFormulas: [
      { name: 'Power series', latex: '\\sum_{n=0}^{\\infty} c_n (x-a)^n', description: 'Centered at a' },
      { name: 'Radius', latex: 'R = \\lim \\frac{|c_n|}{|c_{n+1}|}', description: 'Radius of convergence' },
    ],
    sections: [
      { title: 'Power Series', content: 'A power series Σcₙ(x-a)ⁿ converges in some interval centered at a with radius R. Within this interval, you can differentiate and integrate term by term.' },
    ],
    problems: [
      { id: 'p62-1', question: 'Find the radius of convergence of Σ xⁿ/n!.', type: 'multiple-choice', choices: ['R = 1', 'R = 0', 'R = ∞', 'R = e'], correctAnswer: 'R = ∞', explanation: 'Ratio test: |x|/(n+1) → 0 < 1 for all x. Converges everywhere.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-63', day: 63, phase: 'series', title: 'Taylor & Maclaurin Series', subtitle: 'Representing functions as power series', difficulty: 'advanced', estimatedMinutes: 60, prerequisites: ['day-62'],
    objectives: ['Find Taylor series for common functions', 'Compute Maclaurin series', 'Use known series to find new ones'],
    keyFormulas: [
      { name: 'Taylor series', latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n', description: '' },
      { name: 'eˣ', latex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}', description: '' },
      { name: 'sin x', latex: '\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}', description: '' },
      { name: 'cos x', latex: '\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}', description: '' },
      { name: '1/(1-x)', latex: '\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n, \\; |x|<1', description: '' },
    ],
    sections: [
      { title: 'Taylor Series', content: 'The Taylor series of f at a is Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ. The Maclaurin series is the Taylor series at a = 0. Memorize: eˣ, sin x, cos x, 1/(1-x), ln(1+x).',
        example: { problem: 'Find the Maclaurin series for eˣ.', steps: ['f(x) = eˣ, f⁽ⁿ⁾(0) = 1 for all n', 'eˣ = Σ xⁿ/n! = 1 + x + x²/2 + x³/6 + ...'], solution: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}' } },
    ],
    problems: [
      { id: 'p63-1', question: 'What is the Maclaurin series coefficient of x³ in sin(x)?', type: 'multiple-choice', choices: ['-1/6', '1/6', '-1/3', '1/3'], correctAnswer: '-1/6', explanation: 'sin(x) = x - x³/3! + ... = x - x³/6 + ... Coefficient of x³ is -1/6.', difficulty: 'intermediate' },
      { id: 'p63-2', question: 'Find the Maclaurin series for e^(2x) up to x² term.', type: 'multiple-choice', choices: ['1 + 2x + 2x²', '1 + 2x + 4x²', '1 + x + x²/2', '1 + 2x + x²'], correctAnswer: '1 + 2x + 2x²', explanation: 'Substitute 2x into eˣ series: 1 + 2x + (2x)²/2 + ... = 1 + 2x + 2x² + ...', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-64', day: 64, phase: 'series', title: 'Taylor Polynomials & Remainder', subtitle: 'Approximation and error bounds', difficulty: 'advanced', estimatedMinutes: 50, prerequisites: ['day-63'],
    objectives: ['Compute Taylor polynomial approximations', 'Apply Taylor\'s Remainder Theorem for error bounds'],
    keyFormulas: [
      { name: 'Taylor polynomial', latex: 'P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k', description: 'Degree-n approximation' },
      { name: 'Remainder', latex: '|R_n(x)| \\leq \\frac{M}{(n+1)!}|x-a|^{n+1}', description: 'M = max |f⁽ⁿ⁺¹⁾| on interval' },
    ],
    sections: [
      { title: 'Taylor Remainder', content: 'The remainder (error) satisfies |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M bounds |f⁽ⁿ⁺¹⁾| on the interval.' },
    ],
    problems: [
      { id: 'p64-1', question: 'Use the degree-1 Taylor polynomial of eˣ at a=0 to approximate e^(0.1).', type: 'numeric', correctAnswer: '1.1', explanation: 'P₁(x) = 1 + x. P₁(0.1) = 1.1.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-65', day: 65, phase: 'series', title: 'Applications of Power Series', subtitle: 'Solving problems with series', difficulty: 'advanced', estimatedMinutes: 55, prerequisites: ['day-63'],
    objectives: ['Evaluate limits using Taylor series', 'Integrate functions with no elementary antiderivative', 'Solve differential equations with power series'],
    keyFormulas: [],
    sections: [
      { title: 'Series for Limits', content: 'Taylor series can evaluate tricky limits. Expand f(x) near the limit point and simplify.',
        example: { problem: 'Evaluate: lim(x→0) (sin x - x)/x³.', steps: ['sin x = x - x³/6 + ...', 'sin x - x = -x³/6 + ...', '(sin x - x)/x³ = -1/6 + ...'], solution: '-\\frac{1}{6}' } },
    ],
    problems: [
      { id: 'p65-1', question: 'Using Taylor series, evaluate: lim(x→0) (eˣ - 1 - x)/x²', type: 'multiple-choice', choices: ['0', '1/2', '1', '∞'], correctAnswer: '1/2', explanation: 'eˣ = 1 + x + x²/2 + ... So (eˣ-1-x)/x² = (x²/2 + ...)/x² → 1/2.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-66', day: 66, phase: 'series', title: 'Fourier Series Preview', subtitle: 'Representing functions with sines and cosines', difficulty: 'advanced', estimatedMinutes: 45, prerequisites: ['day-63'],
    objectives: ['Understand the concept of Fourier series', 'Compute basic Fourier coefficients'],
    keyFormulas: [
      { name: 'Fourier series', latex: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)', description: '' },
    ],
    sections: [{ title: 'Fourier Series', content: 'While Taylor series use powers of x, Fourier series use sines and cosines. This is the foundation of signal processing and heat equation solutions.' }],
    problems: [
      { id: 'p66-1', question: 'What type of functions form the basis for Fourier series?', type: 'multiple-choice', choices: ['Polynomials', 'Exponentials', 'Sines and cosines', 'Logarithms'], correctAnswer: 'Sines and cosines', explanation: 'Fourier series decompose functions into sine and cosine components.', difficulty: 'beginner' },
    ],
  },
  { id: 'day-67', day: 67, phase: 'series', title: 'Binomial Series', subtitle: 'Generalized binomial expansion', difficulty: 'advanced', estimatedMinutes: 45, prerequisites: ['day-63'],
    objectives: ['Apply the binomial series for non-integer exponents'],
    keyFormulas: [{ name: 'Binomial series', latex: '(1+x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n', description: 'For any real k' }],
    sections: [{ title: 'Binomial Series', content: 'The binomial series (1+x)^k = Σ C(k,n)xⁿ works for any real k, converging for |x| < 1.' }],
    problems: [
      { id: 'p67-1', question: 'What is the first 3 terms of (1+x)^(1/2)?', type: 'multiple-choice', choices: ['1 + x/2 - x²/8', '1 + x/2 + x²/4', '1 + x/2 + x²/8', '1 - x/2 + x²/8'], correctAnswer: '1 + x/2 - x²/8', explanation: 'C(1/2,0)=1, C(1/2,1)=1/2, C(1/2,2)=(1/2)(-1/2)/2=-1/8.', difficulty: 'intermediate' },
    ],
  },
  { id: 'day-68', day: 68, phase: 'series', title: 'Series Manipulation & Multiplication', subtitle: 'Combining and manipulating series', difficulty: 'advanced', estimatedMinutes: 50, prerequisites: ['day-63'],
    objectives: ['Multiply power series', 'Substitute one series into another', 'Find series for complex functions'],
    keyFormulas: [],
    sections: [{ title: 'Series Operations', content: 'You can add, subtract, multiply, and compose power series within their radius of convergence. This lets you find series for functions like eˣ·sin(x) or ln(1+eˣ).' }],
    problems: [
      { id: 'p68-1', question: 'What is the coefficient of x in the series for eˣ·sin(x)?', type: 'numeric', correctAnswer: '1', explanation: 'eˣ = 1+x+... and sin(x) = x-... Product: (1)(x) + (x)(0) = x + x = ... Coefficient of x is 1.', difficulty: 'intermediate' },
    ],
  },
  { id: 'day-69', day: 69, phase: 'series', title: 'Series Review', subtitle: 'Comprehensive review', difficulty: 'advanced', estimatedMinutes: 55, prerequisites: ['day-68'],
    objectives: ['Review all series convergence tests', 'Practice Taylor/Maclaurin series'],
    keyFormulas: [],
    sections: [{ title: 'Series Toolkit', content: 'Your convergence test toolkit: divergence test, geometric, p-series, comparison, limit comparison, ratio, root, integral, alternating series. Your series representation toolkit: Taylor, Maclaurin, binomial, Fourier preview.' }],
    problems: [
      { id: 'p69-1', question: 'Which test is best for Σ n²/3ⁿ?', type: 'multiple-choice', choices: ['Ratio test', 'p-series', 'Integral test', 'Comparison'], correctAnswer: 'Ratio test', explanation: 'Ratio of nᵗʰ and (n+1)ᵗʰ terms involves 1/3 factor → converges.', difficulty: 'intermediate' },
    ],
  },
  { id: 'day-70', day: 70, phase: 'series', title: 'Series Assessment', subtitle: 'Phase 4 mastery check', difficulty: 'advanced', estimatedMinutes: 60, prerequisites: ['day-69'],
    objectives: ['Demonstrate mastery of sequences, series, and Taylor series'],
    keyFormulas: [],
    sections: [{ title: 'Phase 4 Complete!', content: 'Excellent — you\'ve tamed infinite series! Next: multivariable calculus, where everything extends to higher dimensions.' }],
    problems: [
      { id: 'p70-1', question: 'Find the interval of convergence for Σ xⁿ/n.', type: 'multiple-choice', choices: ['[-1, 1)', '(-1, 1)', '(-1, 1]', '[-1, 1]'], correctAnswer: '[-1, 1)', explanation: 'Ratio test: R=1. At x=1: Σ1/n diverges. At x=-1: Σ(-1)ⁿ/n converges (AST). So [-1,1).', difficulty: 'intermediate' },
      { id: 'p70-2', question: 'What is the sum of Σ 1/n! from n=0 to ∞?', type: 'multiple-choice', choices: ['e', 'π', '2', '∞'], correctAnswer: 'e', explanation: 'This is the Maclaurin series for eˣ at x=1: e¹ = e.', difficulty: 'beginner' },
    ],
  },
];
