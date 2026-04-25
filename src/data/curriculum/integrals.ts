import type { Topic } from '../types';

export const integralsTopics: Topic[] = [
  {
    id: 'day-36', day: 36, phase: 'integrals',
    title: 'Antiderivatives & Indefinite Integrals',
    subtitle: 'Reversing differentiation',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-14'],
    objectives: ['Find antiderivatives of basic functions', 'Understand the constant of integration', 'Apply basic integration rules'],
    keyFormulas: [
      { name: 'Power rule', latex: '\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C, \\; n \\neq -1', description: 'Reverse of power rule for derivatives' },
      { name: 'Exponential', latex: '\\int e^x \\, dx = e^x + C', description: '' },
      { name: '1/x', latex: '\\int \\frac{1}{x} \\, dx = \\ln|x| + C', description: '' },
      { name: 'Trig', latex: '\\int \\sin x \\, dx = -\\cos x + C', description: '' },
    ],
    sections: [
      { title: 'Antiderivatives', content: 'An antiderivative of f(x) is a function F(x) such that F\'(x) = f(x). The general antiderivative is F(x) + C, where C is an arbitrary constant. We write ∫f(x)dx = F(x) + C.',
        example: { problem: 'Find ∫(3x² + 2x - 5)dx.', steps: ['Integrate term by term:', 'x³ + x² - 5x + C'], solution: 'x^3 + x^2 - 5x + C' } },
    ],
    problems: [
      { id: 'p36-1', question: 'What is ∫x⁴ dx?', type: 'multiple-choice', choices: ['x⁵/5 + C', '4x³ + C', 'x⁵ + C', '5x⁵ + C'], correctAnswer: 'x⁵/5 + C', explanation: 'Power rule: x^(4+1)/(4+1) = x⁵/5 + C.', difficulty: 'beginner' },
      { id: 'p36-2', question: '∫(cos x + eˣ)dx = ?', type: 'multiple-choice', choices: ['sin x + eˣ + C', '-sin x + eˣ + C', 'sin x - eˣ + C', '-sin x - eˣ + C'], correctAnswer: 'sin x + eˣ + C', explanation: '∫cos x dx = sin x, ∫eˣ dx = eˣ.', difficulty: 'beginner' },
      { id: 'p36-3', question: '∫(1/x + 1/x²)dx = ?', type: 'multiple-choice', choices: ['ln|x| - 1/x + C', 'ln|x| + 1/x + C', '1/x² - 1/x³ + C', 'ln|x| - 1/x² + C'], correctAnswer: 'ln|x| - 1/x + C', explanation: '∫1/x dx = ln|x|, ∫x⁻² dx = -x⁻¹ = -1/x.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-37', day: 37, phase: 'integrals',
    title: 'Riemann Sums & the Definite Integral',
    subtitle: 'Area under curves via rectangles',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-36'],
    objectives: ['Compute left, right, and midpoint Riemann sums', 'Understand the definite integral as a limit of sums', 'Interpret the integral as signed area'],
    keyFormulas: [
      { name: 'Riemann sum', latex: '\\sum_{i=1}^{n} f(x_i^*) \\Delta x', description: 'Sum of rectangle areas' },
      { name: 'Definite integral', latex: '\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\Delta x', description: 'Limit of Riemann sums' },
    ],
    sections: [
      { title: 'Riemann Sums', content: 'Divide [a,b] into n equal subintervals of width Δx = (b-a)/n. Choose sample points x_i* (left endpoint, right endpoint, or midpoint). The Riemann sum is Σf(x_i*)Δx.' },
      { title: 'Definite Integral', content: 'As n → ∞, the Riemann sum converges to the definite integral ∫ₐᵇ f(x)dx. This represents the signed area between f and the x-axis.' },
    ],
    problems: [
      { id: 'p37-1', question: 'Estimate ∫₀² x² dx using a right Riemann sum with n = 2.', type: 'numeric', correctAnswer: '5', explanation: 'Δx = 1. Right endpoints: x=1, x=2. Sum = f(1)·1 + f(2)·1 = 1 + 4 = 5.', difficulty: 'beginner' },
      { id: 'p37-2', question: 'The exact value of ∫₀² x² dx is:', type: 'multiple-choice', choices: ['8/3', '4', '2', '4/3'], correctAnswer: '8/3', explanation: 'x³/3 from 0 to 2 = 8/3 - 0 = 8/3.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-38', day: 38, phase: 'integrals',
    title: 'Fundamental Theorem of Calculus',
    subtitle: 'The bridge between derivatives and integrals',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-37'],
    objectives: ['State and apply both parts of the FTC', 'Evaluate definite integrals using antiderivatives', 'Differentiate integral functions using FTC Part 1'],
    keyFormulas: [
      { name: 'FTC Part 1', latex: '\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)', description: 'Derivative of integral = integrand' },
      { name: 'FTC Part 2', latex: '\\int_a^b f(x)\\,dx = F(b) - F(a)', description: 'Evaluate with antiderivative' },
    ],
    sections: [
      { title: 'The Fundamental Theorem', content: 'Part 1: The derivative of the integral function g(x) = ∫ₐˣ f(t)dt is g\'(x) = f(x). Part 2: ∫ₐᵇ f(x)dx = F(b) - F(a) where F is any antiderivative of f. This connects the two halves of calculus.',
        example: { problem: 'Evaluate: ∫₁³ (2x + 1)dx.', steps: ['Antiderivative: x² + x', 'F(3) - F(1) = (9+3) - (1+1) = 12 - 2 = 10'], solution: '10' } },
    ],
    problems: [
      { id: 'p38-1', question: 'Evaluate: ∫₀^π sin(x) dx', type: 'numeric', correctAnswer: '2', explanation: '[-cos x]₀^π = -cos(π) - (-cos(0)) = 1 + 1 = 2.', difficulty: 'beginner' },
      { id: 'p38-2', question: 'If g(x) = ∫₀ˣ t² dt, what is g\'(x)?', type: 'multiple-choice', choices: ['x²', 'x³/3', '2x', '0'], correctAnswer: 'x²', explanation: 'FTC Part 1: g\'(x) = x².', difficulty: 'beginner' },
      { id: 'p38-3', question: 'If g(x) = ∫₀^(x²) sin(t) dt, what is g\'(x)?', type: 'multiple-choice', choices: ['sin(x²)', '2x·sin(x²)', 'cos(x²)·2x', 'sin(x²)/2x'], correctAnswer: '2x·sin(x²)', explanation: 'Chain rule with FTC: g\'(x) = sin(x²) · 2x.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-39', day: 39, phase: 'integrals',
    title: 'U-Substitution',
    subtitle: 'The chain rule in reverse',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-38'],
    objectives: ['Apply u-substitution to indefinite integrals', 'Apply u-substitution to definite integrals (changing bounds)', 'Recognize common substitution patterns'],
    keyFormulas: [
      { name: 'Substitution', latex: '\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du', description: 'Let u = g(x), du = g\'(x)dx' },
    ],
    sections: [
      { title: 'U-Substitution', content: 'Look for a composition f(g(x)) where g\'(x) appears (possibly up to a constant). Let u = g(x), then du = g\'(x)dx.',
        example: { problem: '∫ 2x·cos(x²) dx', steps: ['Let u = x², du = 2x dx', '∫ cos(u) du = sin(u) + C = sin(x²) + C'], solution: '\\sin(x^2) + C' } },
    ],
    problems: [
      { id: 'p39-1', question: '∫ eˢⁱⁿˣ cos(x) dx = ?', type: 'multiple-choice', choices: ['eˢⁱⁿˣ + C', 'eᶜᵒˢˣ + C', '-eˢⁱⁿˣ + C', 'sin(eˣ) + C'], correctAnswer: 'eˢⁱⁿˣ + C', explanation: 'u = sin x, du = cos x dx. ∫eᵘ du = eᵘ + C.', difficulty: 'beginner' },
      { id: 'p39-2', question: '∫₀¹ 2x(x²+1)³ dx = ?', type: 'numeric', correctAnswer: '3.75', explanation: 'u = x²+1, du = 2x dx. Bounds: u(0)=1, u(1)=2. ∫₁² u³ du = [u⁴/4]₁² = 16/4 - 1/4 = 15/4 = 3.75.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-40', day: 40, phase: 'integrals',
    title: 'Integration by Parts',
    subtitle: 'The product rule in reverse',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-39'],
    objectives: ['Apply integration by parts formula', 'Use LIATE rule to choose u and dv', 'Handle repeated integration by parts'],
    keyFormulas: [
      { name: 'IBP', latex: '\\int u\\,dv = uv - \\int v\\,du', description: 'Integration by parts' },
      { name: 'LIATE', latex: '\\text{Log, Inverse trig, Algebraic, Trig, Exponential}', description: 'Priority order for choosing u' },
    ],
    sections: [
      { title: 'Integration by Parts', content: 'Choose u and dv so that ∫v du is simpler than the original. LIATE gives priority: u should be the first type in the list.',
        example: { problem: '∫ x·eˣ dx', steps: ['u = x, dv = eˣ dx', 'du = dx, v = eˣ', 'uv - ∫v du = xeˣ - ∫eˣ dx = xeˣ - eˣ + C'], solution: 'xe^x - e^x + C' } },
    ],
    problems: [
      { id: 'p40-1', question: '∫ x·cos(x) dx = ?', type: 'multiple-choice', choices: ['x·sin(x) + cos(x) + C', 'x·sin(x) - cos(x) + C', '-x·sin(x) + cos(x) + C', 'x·cos(x) - sin(x) + C'], correctAnswer: 'x·sin(x) + cos(x) + C', explanation: 'u=x, dv=cos x dx. uv - ∫v du = x sin x - ∫sin x dx = x sin x + cos x + C.', difficulty: 'intermediate' },
      { id: 'p40-2', question: '∫ ln(x) dx = ?', type: 'multiple-choice', choices: ['x·ln(x) - x + C', 'x·ln(x) + x + C', '1/x + C', 'x²·ln(x)/2 + C'], correctAnswer: 'x·ln(x) - x + C', explanation: 'u = ln x, dv = dx. du = dx/x, v = x. x ln x - ∫1 dx = x ln x - x + C.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-41', day: 41, phase: 'integrals',
    title: 'Trigonometric Integrals',
    subtitle: 'Powers and products of trig functions',
    difficulty: 'advanced', estimatedMinutes: 55,
    prerequisites: ['day-39', 'day-4'],
    objectives: ['Integrate products of sin and cos', 'Integrate powers of tan and sec', 'Use trig identities to set up substitutions'],
    keyFormulas: [
      { name: 'Half-angle', latex: '\\cos^2 x = \\frac{1 + \\cos 2x}{2}', description: 'For even powers' },
      { name: 'Half-angle', latex: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}', description: 'For even powers' },
      { name: 'Pythagorean', latex: '\\sin^2 x + \\cos^2 x = 1', description: 'For odd powers' },
    ],
    sections: [
      { title: 'Strategy for sinⁿx · cosᵐx', content: 'If n or m is odd, save one factor, convert the rest using sin²+cos²=1, then substitute. If both are even, use half-angle formulas to reduce powers.' },
    ],
    problems: [
      { id: 'p41-1', question: '∫ sin³(x)·cos(x) dx = ?', type: 'multiple-choice', choices: ['sin⁴(x)/4 + C', '-cos⁴(x)/4 + C', 'sin⁴(x)/3 + C', '-sin⁴(x)/4 + C'], correctAnswer: 'sin⁴(x)/4 + C', explanation: 'u = sin x, du = cos x dx. ∫u³ du = u⁴/4 + C.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-42', day: 42, phase: 'integrals',
    title: 'Trigonometric Substitution',
    subtitle: 'Using trig to handle radicals',
    difficulty: 'advanced', estimatedMinutes: 55,
    prerequisites: ['day-41'],
    objectives: ['Apply the three standard trig substitutions', 'Evaluate integrals with √(a²-x²), √(a²+x²), √(x²-a²)', 'Convert back to x using right triangle diagrams'],
    keyFormulas: [
      { name: '√(a²-x²)', latex: 'x = a\\sin\\theta', description: 'Use for a²-x² under root' },
      { name: '√(a²+x²)', latex: 'x = a\\tan\\theta', description: 'Use for a²+x² under root' },
      { name: '√(x²-a²)', latex: 'x = a\\sec\\theta', description: 'Use for x²-a² under root' },
    ],
    sections: [
      { title: 'Trig Substitution', content: 'Match the form under the radical to choose the right substitution. Draw a reference triangle to convert back to x at the end.' },
    ],
    problems: [
      { id: 'p42-1', question: 'What substitution would you use for ∫ 1/√(4-x²) dx?', type: 'multiple-choice', choices: ['x = 2sin θ', 'x = 2tan θ', 'x = 2sec θ', 'u = 4-x²'], correctAnswer: 'x = 2sin θ', explanation: 'Form is √(a²-x²) with a=2, so use x = 2sin θ.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-43', day: 43, phase: 'integrals',
    title: 'Partial Fractions',
    subtitle: 'Decomposing rational functions for integration',
    difficulty: 'advanced', estimatedMinutes: 55,
    prerequisites: ['day-39'],
    objectives: ['Decompose rational functions into partial fractions', 'Handle distinct linear, repeated linear, and irreducible quadratic factors', 'Integrate the resulting terms'],
    keyFormulas: [
      { name: 'Distinct linear', latex: '\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}', description: '' },
      { name: 'Repeated linear', latex: '\\frac{P(x)}{(x-a)^2} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2}', description: '' },
    ],
    sections: [
      { title: 'Partial Fraction Decomposition', content: 'To integrate P(x)/Q(x): (1) Ensure degree(P) < degree(Q). (2) Factor Q completely. (3) Set up the decomposition. (4) Solve for coefficients. (5) Integrate each term.',
        example: { problem: '∫ (3x+5)/((x+1)(x+2)) dx', steps: ['Decompose: A/(x+1) + B/(x+2)', '3x+5 = A(x+2) + B(x+1)', 'x=-1: 2 = A(1) → A=2. x=-2: -1 = B(-1) → B=1', '∫2/(x+1) + 1/(x+2) dx = 2ln|x+1| + ln|x+2| + C'], solution: '2\\ln|x+1| + \\ln|x+2| + C' } },
    ],
    problems: [
      { id: 'p43-1', question: 'Decompose 1/(x(x+1)). What is A (coefficient of 1/x)?', type: 'numeric', correctAnswer: '1', explanation: '1/(x(x+1)) = A/x + B/(x+1). 1 = A(x+1) + Bx. At x=0: A=1.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-44', day: 44, phase: 'integrals',
    title: 'Improper Integrals',
    subtitle: 'Integrals with infinite limits or discontinuities',
    difficulty: 'advanced', estimatedMinutes: 50,
    prerequisites: ['day-38'],
    objectives: ['Evaluate improper integrals with infinite limits', 'Evaluate improper integrals with discontinuities', 'Determine convergence vs divergence'],
    keyFormulas: [
      { name: 'Type 1', latex: '\\int_a^\\infty f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx', description: 'Infinite upper limit' },
      { name: 'p-test', latex: '\\int_1^\\infty \\frac{1}{x^p}\\,dx \\text{ converges iff } p > 1', description: 'Key convergence test' },
    ],
    sections: [
      { title: 'Improper Integrals', content: 'Replace the infinity (or discontinuity) with a variable limit and take the limit. If the limit is finite, the integral converges; otherwise, it diverges.',
        example: { problem: 'Evaluate: ∫₁^∞ 1/x² dx', steps: ['lim(b→∞) ∫₁ᵇ x⁻² dx', 'lim(b→∞) [-1/x]₁ᵇ = lim(b→∞) (-1/b + 1) = 1'], solution: '1' } },
    ],
    problems: [
      { id: 'p44-1', question: 'Does ∫₁^∞ 1/x dx converge or diverge?', type: 'multiple-choice', choices: ['Converges to 1', 'Converges to 0', 'Diverges', 'Converges to ln(2)'], correctAnswer: 'Diverges', explanation: '∫₁ᵇ 1/x dx = ln(b) → ∞ as b → ∞. Diverges (p = 1 ≤ 1).', difficulty: 'beginner' },
      { id: 'p44-2', question: 'Evaluate: ∫₀^∞ e⁻ˣ dx', type: 'numeric', correctAnswer: '1', explanation: 'lim(b→∞) [-e⁻ˣ]₀ᵇ = lim(b→∞)(−e⁻ᵇ + 1) = 0 + 1 = 1.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-45', day: 45, phase: 'integrals',
    title: 'Area Between Curves',
    subtitle: 'Using integrals to find regions',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-38'],
    objectives: ['Find area between two curves using vertical slices', 'Find area using horizontal slices', 'Set up integrals for complex regions'],
    keyFormulas: [
      { name: 'Area', latex: 'A = \\int_a^b |f(x) - g(x)|\\,dx', description: 'Top minus bottom' },
    ],
    sections: [
      { title: 'Area Between Curves', content: 'Area = ∫ₐᵇ [top function - bottom function] dx. Always check which function is on top in the interval.',
        example: { problem: 'Find the area between y = x² and y = x.', steps: ['Intersection: x² = x → x = 0, x = 1', 'x > x² on (0,1)', 'A = ∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6'], solution: '\\frac{1}{6}' } },
    ],
    problems: [
      { id: 'p45-1', question: 'Find the area between y = x and y = x² from x = 0 to x = 1.', type: 'multiple-choice', choices: ['1/6', '1/3', '1/2', '1/4'], correctAnswer: '1/6', explanation: '∫₀¹ (x-x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-46', day: 46, phase: 'integrals',
    title: 'Volumes by Disks & Washers',
    subtitle: 'Solids of revolution — method 1',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-45'],
    objectives: ['Set up and compute volumes using the disk method', 'Apply the washer method for hollow solids', 'Revolve around non-standard axes'],
    keyFormulas: [
      { name: 'Disk', latex: 'V = \\pi \\int_a^b [R(x)]^2\\,dx', description: 'Solid with no hole' },
      { name: 'Washer', latex: 'V = \\pi \\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)dx', description: 'Solid with a hole' },
    ],
    sections: [
      { title: 'Disk Method', content: 'When a region is revolved around an axis, the cross-section is a disk. Volume = π∫[R(x)]² dx.',
        example: { problem: 'Find the volume when y = √x (0 ≤ x ≤ 4) is revolved around the x-axis.', steps: ['R(x) = √x', 'V = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx', 'V = π[x²/2]₀⁴ = π(8) = 8π'], solution: 'V = 8\\pi' } },
    ],
    problems: [
      { id: 'p46-1', question: 'Find the volume when y = x² (0 ≤ x ≤ 2) is revolved around the x-axis.', type: 'multiple-choice', choices: ['32π/5', '16π/5', '8π', '4π'], correctAnswer: '32π/5', explanation: 'V = π∫₀² (x²)² dx = π∫₀² x⁴ dx = π[x⁵/5]₀² = 32π/5.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-47', day: 47, phase: 'integrals',
    title: 'Volumes by Cylindrical Shells',
    subtitle: 'Solids of revolution — method 2',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-46'],
    objectives: ['Set up shell method integrals', 'Choose between disk/washer and shell methods', 'Apply shells to non-standard axes'],
    keyFormulas: [
      { name: 'Shell method', latex: 'V = 2\\pi \\int_a^b x \\cdot f(x)\\,dx', description: 'Thin cylindrical shells' },
    ],
    sections: [
      { title: 'Shell Method', content: 'For revolution around the y-axis, use shells: V = 2π∫ₐᵇ (radius)(height) dx = 2π∫ₐᵇ x·f(x) dx.' },
    ],
    problems: [
      { id: 'p47-1', question: 'Use shells to find the volume when y = x² (0 ≤ x ≤ 1) is revolved around the y-axis.', type: 'multiple-choice', choices: ['π/2', 'π/3', '2π/3', 'π'], correctAnswer: 'π/2', explanation: 'V = 2π∫₀¹ x·x² dx = 2π∫₀¹ x³ dx = 2π[x⁴/4]₀¹ = 2π/4 = π/2.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-48', day: 48, phase: 'integrals',
    title: 'Arc Length & Surface Area',
    subtitle: 'Measuring curves and surfaces',
    difficulty: 'advanced', estimatedMinutes: 50,
    prerequisites: ['day-38'],
    objectives: ['Compute arc length of curves', 'Compute surface area of revolution', 'Set up parametric arc length integrals'],
    keyFormulas: [
      { name: 'Arc length', latex: "L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx", description: '' },
      { name: 'Surface area', latex: "S = 2\\pi\\int_a^b f(x)\\sqrt{1 + [f'(x)]^2}\\,dx", description: 'Revolution around x-axis' },
    ],
    sections: [
      { title: 'Arc Length', content: 'The length of the curve y = f(x) from a to b is L = ∫ₐᵇ √(1 + (f\')²) dx.' },
    ],
    problems: [
      { id: 'p48-1', question: 'Set up (but don\'t evaluate) the arc length integral for y = x² from x = 0 to x = 1. The integrand √(1 + ?) has what inside?', type: 'multiple-choice', choices: ['4x²', '2x', 'x⁴', '4x⁴'], correctAnswer: '4x²', explanation: "f'(x) = 2x, [f'(x)]² = 4x². Integrand: √(1 + 4x²).", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-49', day: 49, phase: 'integrals',
    title: 'Physical Applications of Integration',
    subtitle: 'Work, fluid force, and centers of mass',
    difficulty: 'advanced', estimatedMinutes: 50,
    prerequisites: ['day-38'],
    objectives: ['Compute work done by variable forces', 'Calculate fluid pressure and force', 'Find centers of mass using moments'],
    keyFormulas: [
      { name: 'Work', latex: 'W = \\int_a^b F(x)\\,dx', description: 'Work = force × distance (variable force)' },
      { name: 'Center of mass', latex: '\\bar{x} = \\frac{\\int_a^b x \\cdot f(x)\\,dx}{\\int_a^b f(x)\\,dx}', description: 'Balance point of a region' },
    ],
    sections: [
      { title: 'Work', content: 'If a force F(x) acts over a distance from a to b, the total work is W = ∫ₐᵇ F(x)dx.' },
    ],
    problems: [
      { id: 'p49-1', question: 'A spring requires F(x) = 3x N to stretch x meters. Find the work to stretch it from 0 to 2 m.', type: 'numeric', correctAnswer: '6', explanation: 'W = ∫₀² 3x dx = [3x²/2]₀² = 6 J.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-50', day: 50, phase: 'integrals',
    title: 'Numerical Integration',
    subtitle: 'Trapezoidal rule and Simpson\'s rule',
    difficulty: 'intermediate', estimatedMinutes: 45,
    prerequisites: ['day-37'],
    objectives: ['Apply the trapezoidal rule', 'Apply Simpson\'s rule', 'Estimate integration error bounds'],
    keyFormulas: [
      { name: 'Trapezoidal', latex: 'T_n = \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + \\cdots + 2f(x_{n-1}) + f(x_n)]', description: '' },
      { name: "Simpson's", latex: "S_n = \\frac{\\Delta x}{3}[f(x_0) + 4f(x_1) + 2f(x_2) + \\cdots + f(x_n)]", description: 'n must be even' },
    ],
    sections: [
      { title: 'Numerical Integration', content: 'When an antiderivative can\'t be found, approximate the integral numerically. Simpson\'s rule is generally more accurate than the trapezoidal rule for smooth functions.' },
    ],
    problems: [
      { id: 'p50-1', question: 'Use the trapezoidal rule with n=2 to estimate ∫₀² x² dx. Δx = 1.', type: 'numeric', correctAnswer: '3', explanation: 'T₂ = (1/2)[f(0) + 2f(1) + f(2)] = (1/2)[0 + 2 + 4] = 3. (Exact: 8/3 ≈ 2.667)', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-51', day: 51, phase: 'integrals', title: 'Integration Strategy & Practice', subtitle: 'Choosing the right technique', difficulty: 'advanced', estimatedMinutes: 55, prerequisites: ['day-43'],
    objectives: ['Develop a decision tree for integration techniques', 'Practice recognizing which method to use'],
    keyFormulas: [{ name: 'Decision tree', latex: '\\text{Simplify} \\to \\text{u-sub} \\to \\text{IBP} \\to \\text{Trig} \\to \\text{Partial fractions}', description: '' }],
    sections: [{ title: 'Integration Strategy', content: 'Step 1: Can you simplify? Step 2: Is there an obvious u-substitution? Step 3: Is it a product of different types? → IBP. Step 4: Is it a rational function? → Partial fractions. Step 5: Does it have √(a²±x²) or √(x²-a²)? → Trig sub.' }],
    problems: [
      { id: 'p51-1', question: 'Which technique is best for ∫ x²·eˣ dx?', type: 'multiple-choice', choices: ['U-substitution', 'Integration by parts', 'Partial fractions', 'Trig substitution'], correctAnswer: 'Integration by parts', explanation: 'Product of algebraic and exponential → IBP (twice).', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-52', day: 52, phase: 'integrals', title: 'Differential Equations Preview', subtitle: 'Separable equations', difficulty: 'intermediate', estimatedMinutes: 50, prerequisites: ['day-39'],
    objectives: ['Solve basic separable differential equations', 'Find particular solutions given initial conditions'],
    keyFormulas: [{ name: 'Separable', latex: '\\frac{dy}{dx} = f(x)g(y) \\implies \\frac{dy}{g(y)} = f(x)\\,dx', description: 'Separate and integrate' }],
    sections: [{ title: 'Separable Equations', content: 'If dy/dx = f(x)·g(y), separate: dy/g(y) = f(x)dx. Integrate both sides.',
      example: { problem: 'Solve: dy/dx = 2xy, y(0) = 1.', steps: ['dy/y = 2x dx', 'ln|y| = x² + C', 'y = Ae^(x²)', 'y(0) = 1 → A = 1'], solution: 'y = e^{x^2}' } }],
    problems: [
      { id: 'p52-1', question: 'Solve: dy/dx = y. What is the general solution?', type: 'multiple-choice', choices: ['y = Ceˣ', 'y = x + C', 'y = eˣ + C', 'y = Cx'], correctAnswer: 'y = Ceˣ', explanation: 'dy/y = dx. ln|y| = x + C. y = Aeˣ.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-53', day: 53, phase: 'integrals', title: 'Parametric & Polar Integration', subtitle: 'Area and arc length in other coordinate systems', difficulty: 'advanced', estimatedMinutes: 55, prerequisites: ['day-38', 'day-33'],
    objectives: ['Compute area under parametric curves', 'Compute area enclosed by polar curves'],
    keyFormulas: [
      { name: 'Polar area', latex: 'A = \\frac{1}{2}\\int_\\alpha^\\beta [r(\\theta)]^2\\,d\\theta', description: '' },
    ],
    sections: [{ title: 'Polar Area', content: 'Area enclosed by r = f(θ) from α to β is A = (1/2)∫[r(θ)]² dθ.' }],
    problems: [
      { id: 'p53-1', question: 'Find the area enclosed by r = 2 (a circle of radius 2).', type: 'multiple-choice', choices: ['4π', '2π', 'π', '8π'], correctAnswer: '4π', explanation: 'A = (1/2)∫₀²π 4 dθ = (1/2)(4)(2π) = 4π.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-54', day: 54, phase: 'integrals', title: 'Integration Review', subtitle: 'Comprehensive technique practice', difficulty: 'advanced', estimatedMinutes: 60, prerequisites: ['day-53'],
    objectives: ['Review all integration techniques', 'Solve challenging mixed problems'],
    keyFormulas: [],
    sections: [{ title: 'Integration Mastery', content: 'You now have a complete integration toolkit: basic rules, u-sub, IBP, trig integrals, trig sub, partial fractions, improper integrals, and applications.' }],
    problems: [
      { id: 'p54-1', question: '∫ x/(x²+1) dx = ?', type: 'multiple-choice', choices: ['(1/2)ln(x²+1) + C', 'ln(x²+1) + C', 'arctan(x) + C', 'x·arctan(x) + C'], correctAnswer: '(1/2)ln(x²+1) + C', explanation: 'u = x²+1, du = 2x dx. (1/2)∫du/u = (1/2)ln|u| + C.', difficulty: 'intermediate' },
      { id: 'p54-2', question: '∫ 1/(x²+1) dx = ?', type: 'multiple-choice', choices: ['arctan(x) + C', '(1/2)ln(x²+1) + C', 'arcsin(x) + C', '-1/x + C'], correctAnswer: 'arctan(x) + C', explanation: 'Standard formula: ∫1/(x²+1) dx = arctan(x) + C.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-55', day: 55, phase: 'integrals', title: 'Integration Assessment', subtitle: 'Phase 3 mastery check', difficulty: 'advanced', estimatedMinutes: 60, prerequisites: ['day-54'],
    objectives: ['Demonstrate mastery of all integration topics'],
    keyFormulas: [],
    sections: [{ title: 'Phase 3 Complete!', content: 'You\'ve conquered integration! Next: the fascinating world of infinite series and sequences.' }],
    problems: [
      { id: 'p55-1', question: 'Evaluate: ∫₀¹ x·eˣ dx', type: 'numeric', correctAnswer: '1', explanation: 'IBP: xeˣ - eˣ |₀¹ = (e-e) - (0-1) = 1.', difficulty: 'intermediate' },
      { id: 'p55-2', question: '∫ 1/((x+1)(x+2)) dx. After partial fractions, the antiderivative involves:', type: 'multiple-choice', choices: ['ln|x+1| - ln|x+2|', 'ln|x+1| + ln|x+2|', 'arctan(x)', '1/(x+1) + 1/(x+2)'], correctAnswer: 'ln|x+1| - ln|x+2|', explanation: '1/((x+1)(x+2)) = 1/(x+1) - 1/(x+2). Integrate: ln|x+1| - ln|x+2| + C.', difficulty: 'intermediate' },
    ],
  },
];
