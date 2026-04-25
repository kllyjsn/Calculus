import type { Topic } from '../types';

export const derivativesTopics: Topic[] = [
  {
    id: 'day-16', day: 16, phase: 'derivatives',
    title: 'Product & Quotient Rules',
    subtitle: 'Differentiating products and ratios',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-14'],
    objectives: ['Apply the product rule', 'Apply the quotient rule', 'Combine rules for complex expressions'],
    keyFormulas: [
      { name: 'Product rule', latex: "(fg)' = f'g + fg'", description: 'Derivative of a product' },
      { name: 'Quotient rule', latex: "\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}", description: 'Derivative of a quotient' },
    ],
    sections: [
      { title: 'Product Rule', content: "When two functions are multiplied, (fg)' = f'g + fg'. Remember: \"first times derivative of second plus second times derivative of first.\"",
        example: { problem: 'Differentiate f(x) = x²·sin(x).', steps: ["f'(x) = (2x)(sin x) + (x²)(cos x)"], solution: "f'(x) = 2x\\sin x + x^2\\cos x" } },
      { title: 'Quotient Rule', content: "For f/g, the derivative is (f'g - fg')/g². Mnemonic: \"lo d-hi minus hi d-lo over lo-lo\" (lo = denominator, hi = numerator).",
        example: { problem: 'Differentiate f(x) = (x+1)/(x-1).', steps: ['Numerator: (1)(x-1) - (x+1)(1) = x-1-x-1 = -2', 'Denominator: (x-1)²', "f'(x) = -2/(x-1)²"], solution: "f'(x) = \\frac{-2}{(x-1)^2}" } },
    ],
    problems: [
      { id: 'p16-1', question: "Find f'(x) for f(x) = x·eˣ.", type: 'multiple-choice', choices: ['eˣ', 'xeˣ', '(x+1)eˣ', 'eˣ + x'], correctAnswer: '(x+1)eˣ', explanation: "Product rule: (1)(eˣ) + (x)(eˣ) = (x+1)eˣ.", difficulty: 'beginner' },
      { id: 'p16-2', question: 'Differentiate: f(x) = x²/(x+3). What is f\'(0)?', type: 'numeric', correctAnswer: '0', explanation: "f'(x) = (2x(x+3) - x²)/(x+3)² = (x²+6x)/(x+3)². f'(0) = 0/9 = 0.", difficulty: 'intermediate' },
      { id: 'p16-3', question: "Find f'(x) for f(x) = (2x+1)(3x-2).", type: 'multiple-choice', choices: ['12x - 1', '6x² - x - 2', '12x + 1', '6x - 1'], correctAnswer: '12x - 1', explanation: "Product rule: 2(3x-2) + (2x+1)(3) = 6x-4+6x+3 = 12x-1. Or expand first: 6x²-x-2, derivative = 12x-1.", difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-17', day: 17, phase: 'derivatives',
    title: 'Derivatives of Trig Functions',
    subtitle: 'sin, cos, tan, and their co-functions',
    difficulty: 'intermediate', estimatedMinutes: 45,
    prerequisites: ['day-14', 'day-4'],
    objectives: ['Memorize derivatives of all six trig functions', 'Apply trig derivatives with other rules'],
    keyFormulas: [
      { name: 'sin', latex: '\\frac{d}{dx}[\\sin x] = \\cos x', description: '' },
      { name: 'cos', latex: '\\frac{d}{dx}[\\cos x] = -\\sin x', description: '' },
      { name: 'tan', latex: '\\frac{d}{dx}[\\tan x] = \\sec^2 x', description: '' },
      { name: 'sec', latex: '\\frac{d}{dx}[\\sec x] = \\sec x \\tan x', description: '' },
      { name: 'csc', latex: '\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x', description: '' },
      { name: 'cot', latex: '\\frac{d}{dx}[\\cot x] = -\\csc^2 x', description: '' },
    ],
    sections: [
      { title: 'The Six Trig Derivatives', content: 'These must be memorized cold. Notice the pattern: "co-" functions all get a negative sign. sin→cos, cos→-sin, tan→sec², cot→-csc², sec→sec·tan, csc→-csc·cot.' },
    ],
    problems: [
      { id: 'p17-1', question: 'What is d/dx[sin(x) + cos(x)]?', type: 'multiple-choice', choices: ['cos(x) - sin(x)', 'cos(x) + sin(x)', '-sin(x) - cos(x)', 'sin(x) - cos(x)'], correctAnswer: 'cos(x) - sin(x)', explanation: 'd/dx[sin x] = cos x, d/dx[cos x] = -sin x.', difficulty: 'beginner' },
      { id: 'p17-2', question: 'Differentiate: f(x) = x·tan(x). What rule(s) do you need?', type: 'multiple-choice', choices: ['Power rule only', 'Product rule', 'Quotient rule', 'Chain rule'], correctAnswer: 'Product rule', explanation: "f'(x) = tan(x) + x·sec²(x). Product of x and tan(x).", difficulty: 'beginner' },
      { id: 'p17-3', question: 'What is d/dx[sec(x)]?', type: 'multiple-choice', choices: ['sec(x)tan(x)', '-sec(x)tan(x)', 'sec²(x)', 'tan²(x)'], correctAnswer: 'sec(x)tan(x)', explanation: 'Standard derivative: d/dx[sec x] = sec x · tan x.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-18', day: 18, phase: 'derivatives',
    title: 'The Chain Rule',
    subtitle: 'Differentiating compositions of functions',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-16', 'day-17'],
    objectives: ['Apply the chain rule to composite functions', 'Combine chain rule with product/quotient rules', 'Recognize and handle nested compositions'],
    keyFormulas: [
      { name: 'Chain rule', latex: '\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)', description: 'Outer derivative × inner derivative' },
      { name: 'General power', latex: '\\frac{d}{dx}[u^n] = nu^{n-1} \\cdot u\'', description: 'Power rule + chain rule' },
    ],
    sections: [
      { title: 'The Chain Rule', content: 'To differentiate f(g(x)): take the derivative of the outer function evaluated at the inner, then multiply by the derivative of the inner. Think: "derivative of outside · derivative of inside."',
        example: { problem: 'Differentiate f(x) = (3x + 1)⁵.', steps: ['Outer: u⁵ → 5u⁴', 'Inner: 3x+1 → 3', "f'(x) = 5(3x+1)⁴ · 3 = 15(3x+1)⁴"], solution: "f'(x) = 15(3x+1)^4" } },
      { title: 'Chain Rule with Trig', content: 'For sin(g(x)), the derivative is cos(g(x))·g\'(x). This pattern applies to all trig functions.',
        example: { problem: 'Differentiate f(x) = sin(x²).', steps: ['Outer: sin(u) → cos(u)', 'Inner: x² → 2x', "f'(x) = cos(x²) · 2x = 2x·cos(x²)"], solution: "f'(x) = 2x\\cos(x^2)" } },
    ],
    problems: [
      { id: 'p18-1', question: "Differentiate: f(x) = (2x - 5)³. What is f'(1)?", type: 'numeric', correctAnswer: '54', explanation: "f'(x) = 3(2x-5)² · 2 = 6(2x-5)². f'(1) = 6(-3)² = 54.", difficulty: 'beginner' },
      { id: 'p18-2', question: 'What is d/dx[cos(3x)]?', type: 'multiple-choice', choices: ['-sin(3x)', '-3sin(3x)', '3cos(3x)', '-3cos(3x)'], correctAnswer: '-3sin(3x)', explanation: 'd/dx[cos(3x)] = -sin(3x) · 3 = -3sin(3x).', difficulty: 'beginner' },
      { id: 'p18-3', question: 'Differentiate: f(x) = e^(x²)', type: 'multiple-choice', choices: ['e^(x²)', '2xe^(x²)', 'x²e^(x²-1)', '2e^(x²)'], correctAnswer: '2xe^(x²)', explanation: "Chain rule: e^(x²) · 2x = 2xe^(x²).", difficulty: 'intermediate' },
      { id: 'p18-4', question: 'Differentiate: f(x) = √(1 + x²)', type: 'multiple-choice', choices: ['x/√(1+x²)', '1/(2√(1+x²))', '2x/√(1+x²)', 'x²/√(1+x²)'], correctAnswer: 'x/√(1+x²)', explanation: "(1+x²)^(1/2) → (1/2)(1+x²)^(-1/2) · 2x = x/√(1+x²).", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-19', day: 19, phase: 'derivatives',
    title: 'Derivatives of Exponential & Log Functions',
    subtitle: 'eˣ, aˣ, ln(x), and log_a(x)',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-18', 'day-3'],
    objectives: ['Differentiate exponential functions with any base', 'Differentiate logarithmic functions', 'Combine with chain rule for complex expressions'],
    keyFormulas: [
      { name: 'Natural exp', latex: '\\frac{d}{dx}[e^x] = e^x', description: 'eˣ is its own derivative!' },
      { name: 'General exp', latex: '\\frac{d}{dx}[a^x] = a^x \\ln a', description: 'For any base a > 0' },
      { name: 'Natural log', latex: '\\frac{d}{dx}[\\ln x] = \\frac{1}{x}', description: '' },
      { name: 'General log', latex: '\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}', description: '' },
    ],
    sections: [
      { title: 'Exponential Derivatives', content: 'The function eˣ is remarkable: it is its own derivative. For other bases, d/dx[aˣ] = aˣ · ln(a). With chain rule: d/dx[e^(g(x))] = e^(g(x)) · g\'(x).',
        example: { problem: 'Differentiate f(x) = e^(3x+1).', steps: ['Chain rule: e^(3x+1) · d/dx(3x+1)', "f'(x) = 3e^(3x+1)"], solution: "f'(x) = 3e^{3x+1}" } },
      { title: 'Logarithmic Derivatives', content: 'd/dx[ln(x)] = 1/x. With chain rule: d/dx[ln(g(x))] = g\'(x)/g(x). This is incredibly useful — it turns products into sums.',
        example: { problem: 'Differentiate f(x) = ln(x² + 1).', steps: ["Chain rule: f'(x) = 2x/(x² + 1)"], solution: "f'(x) = \\frac{2x}{x^2+1}" } },
    ],
    problems: [
      { id: 'p19-1', question: 'What is d/dx[e^(5x)]?', type: 'multiple-choice', choices: ['e^(5x)', '5e^(5x)', '5xe^(5x-1)', 'e^(5x)/5'], correctAnswer: '5e^(5x)', explanation: 'Chain rule: e^(5x) · 5 = 5e^(5x).', difficulty: 'beginner' },
      { id: 'p19-2', question: 'Differentiate: f(x) = ln(3x). Simplify.', type: 'multiple-choice', choices: ['1/(3x)', '3/(3x)', '1/x', '3/x'], correctAnswer: '1/x', explanation: "f'(x) = 3/(3x) = 1/x. Or: ln(3x) = ln(3) + ln(x), so f'(x) = 0 + 1/x = 1/x.", difficulty: 'beginner' },
      { id: 'p19-3', question: 'What is d/dx[2ˣ]?', type: 'multiple-choice', choices: ['x·2^(x-1)', '2ˣ·ln(2)', '2ˣ/ln(2)', '2·2ˣ'], correctAnswer: '2ˣ·ln(2)', explanation: 'd/dx[aˣ] = aˣ · ln(a). So d/dx[2ˣ] = 2ˣ · ln(2).', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-20', day: 20, phase: 'derivatives',
    title: 'Implicit Differentiation',
    subtitle: 'Differentiating equations not solved for y',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-18'],
    objectives: ['Differentiate implicitly defined equations', 'Find dy/dx for circles, ellipses, and other curves', 'Find tangent lines to implicit curves'],
    keyFormulas: [
      { name: 'Implicit diff', latex: '\\frac{d}{dx}[y^2] = 2y \\cdot \\frac{dy}{dx}', description: 'Apply chain rule — y is a function of x' },
    ],
    sections: [
      { title: 'Implicit Differentiation', content: "Not all relationships between x and y can be solved for y. For x² + y² = 25 (a circle), differentiate both sides with respect to x, treating y as a function of x. Every time you differentiate a y-term, multiply by dy/dx.",
        example: { problem: 'Find dy/dx for x² + y² = 25.', steps: ['Differentiate both sides: 2x + 2y(dy/dx) = 0', 'Solve for dy/dx: dy/dx = -2x/(2y) = -x/y'], solution: "\\frac{dy}{dx} = -\\frac{x}{y}" } },
    ],
    problems: [
      { id: 'p20-1', question: 'Find dy/dx for xy = 6.', type: 'multiple-choice', choices: ['-y/x', 'y/x', '-x/y', '6/x²'], correctAnswer: '-y/x', explanation: 'Product rule: y + x(dy/dx) = 0 → dy/dx = -y/x.', difficulty: 'beginner' },
      { id: 'p20-2', question: 'Find the slope of the tangent to x² + y² = 25 at (3, 4).', type: 'multiple-choice', choices: ['-3/4', '3/4', '-4/3', '4/3'], correctAnswer: '-3/4', explanation: 'dy/dx = -x/y = -3/4.', difficulty: 'intermediate' },
      { id: 'p20-3', question: 'Find dy/dx for x³ + y³ = 6xy.', type: 'multiple-choice', choices: ['(2y-x²)/(y²-2x)', '(6y-3x²)/(3y²-6x)', 'Both are equivalent', 'Neither'], correctAnswer: 'Both are equivalent', explanation: '3x² + 3y²(dy/dx) = 6y + 6x(dy/dx). Solving: dy/dx = (6y-3x²)/(3y²-6x) = (2y-x²)/(y²-2x).', difficulty: 'advanced' },
    ],
  },
  {
    id: 'day-21', day: 21, phase: 'derivatives',
    title: 'Inverse Trig Derivatives & Logarithmic Differentiation',
    subtitle: 'arcsin, arctan, and the log-diff trick',
    difficulty: 'intermediate', estimatedMinutes: 55,
    prerequisites: ['day-20', 'day-19'],
    objectives: ['Differentiate inverse trig functions', 'Use logarithmic differentiation for complex products/powers', 'Handle derivatives of xˣ and similar forms'],
    keyFormulas: [
      { name: 'arcsin', latex: '\\frac{d}{dx}[\\sin^{-1} x] = \\frac{1}{\\sqrt{1-x^2}}', description: '' },
      { name: 'arctan', latex: '\\frac{d}{dx}[\\tan^{-1} x] = \\frac{1}{1+x^2}', description: '' },
      { name: 'arcsec', latex: '\\frac{d}{dx}[\\sec^{-1} x] = \\frac{1}{|x|\\sqrt{x^2-1}}', description: '' },
    ],
    sections: [
      { title: 'Inverse Trig Derivatives', content: 'These are derived using implicit differentiation. The most commonly used are arcsin and arctan.' },
      { title: 'Logarithmic Differentiation', content: 'For functions like y = xˣ or y = (complicated product), take ln of both sides, differentiate implicitly, then solve for dy/dx.',
        example: { problem: 'Differentiate y = xˣ.', steps: ['ln y = x ln x', "(1/y)(dy/dx) = ln x + x·(1/x) = ln x + 1", "dy/dx = y(ln x + 1) = xˣ(ln x + 1)"], solution: "\\frac{dy}{dx} = x^x(\\ln x + 1)" } },
    ],
    problems: [
      { id: 'p21-1', question: 'What is d/dx[arctan(x)]?', type: 'multiple-choice', choices: ['1/(1+x²)', '1/√(1-x²)', '-1/(1+x²)', '1/(x²-1)'], correctAnswer: '1/(1+x²)', explanation: 'Standard derivative of arctan(x).', difficulty: 'beginner' },
      { id: 'p21-2', question: 'Differentiate: f(x) = arcsin(2x). What is f\'(0)?', type: 'numeric', correctAnswer: '2', explanation: "f'(x) = 2/√(1-4x²). f'(0) = 2/√1 = 2.", difficulty: 'intermediate' },
      { id: 'p21-3', question: 'Using log diff, what is d/dx[xˣ] at x = 1?', type: 'numeric', correctAnswer: '1', explanation: "d/dx[xˣ] = xˣ(ln x + 1). At x=1: 1·(0+1) = 1.", difficulty: 'advanced' },
    ],
  },
  {
    id: 'day-22', day: 22, phase: 'derivatives',
    title: 'Related Rates',
    subtitle: 'How changing quantities are connected',
    difficulty: 'intermediate', estimatedMinutes: 60,
    prerequisites: ['day-20'],
    objectives: ['Set up and solve related rates problems', 'Identify the relationship between variables', 'Apply implicit differentiation with respect to time'],
    keyFormulas: [
      { name: 'Strategy', latex: '\\text{Relate variables} \\to \\text{Differentiate w.r.t. } t \\to \\text{Plug in known values}', description: 'Three-step approach' },
    ],
    sections: [
      { title: 'Related Rates Strategy', content: '(1) Draw a diagram and label variables. (2) Write an equation relating the variables. (3) Differentiate both sides with respect to time t. (4) Substitute known values and solve for the unknown rate.',
        example: { problem: 'A balloon is inflated at 100 cm³/s. How fast is the radius increasing when r = 5 cm?', steps: ['V = (4/3)πr³', 'dV/dt = 4πr² · dr/dt', '100 = 4π(25) · dr/dt', 'dr/dt = 100/(100π) = 1/π ≈ 0.318 cm/s'], solution: "\\frac{dr}{dt} = \\frac{1}{\\pi} \\text{ cm/s}" } },
    ],
    problems: [
      { id: 'p22-1', question: 'A 10-ft ladder slides down a wall. The bottom moves out at 1 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?', type: 'numeric', correctAnswer: '0.75', explanation: 'x²+y²=100. 2x(dx/dt)+2y(dy/dt)=0. At x=6, y=8: 12(1)+16(dy/dt)=0 → dy/dt=-0.75 ft/s. Speed = 0.75.', difficulty: 'intermediate' },
      { id: 'p22-2', question: 'A circle\'s area increases at 10 cm²/s. How fast is the radius increasing when r = 5?', type: 'multiple-choice', choices: ['1/π', '2/π', '10/π', '1/(5π)'], correctAnswer: '1/π', explanation: 'A = πr². dA/dt = 2πr(dr/dt). 10 = 2π(5)(dr/dt) → dr/dt = 1/π.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-23', day: 23, phase: 'derivatives',
    title: 'Linear Approximation & Differentials',
    subtitle: 'Using the tangent line to estimate function values',
    difficulty: 'intermediate', estimatedMinutes: 45,
    prerequisites: ['day-18'],
    objectives: ['Use linearization to approximate function values', 'Understand and compute differentials', 'Estimate errors using differentials'],
    keyFormulas: [
      { name: 'Linearization', latex: 'L(x) = f(a) + f\'(a)(x - a)', description: 'Tangent-line approximation near a' },
      { name: 'Differential', latex: 'dy = f\'(x) \\, dx', description: 'Approximate change in y' },
    ],
    sections: [
      { title: 'Linearization', content: 'Near x = a, f(x) ≈ f(a) + f\'(a)(x - a). This is just the tangent line used as an approximation.',
        example: { problem: 'Approximate √4.1 using linearization.', steps: ['f(x) = √x, a = 4', "f'(x) = 1/(2√x), f'(4) = 1/4", 'L(4.1) = 2 + (1/4)(0.1) = 2.025'], solution: '\\sqrt{4.1} \\approx 2.025' } },
    ],
    problems: [
      { id: 'p23-1', question: 'Use linearization at a = 0 to approximate e^(0.1).', type: 'multiple-choice', choices: ['1.1', '1.01', '1.105', '0.1'], correctAnswer: '1.1', explanation: "f(x) = eˣ, f(0) = 1, f'(0) = 1. L(0.1) = 1 + 1(0.1) = 1.1.", difficulty: 'beginner' },
      { id: 'p23-2', question: 'If y = x³ and x changes from 2 to 2.01, estimate dy.', type: 'multiple-choice', choices: ['0.12', '0.012', '1.2', '0.0012'], correctAnswer: '0.12', explanation: "dy = 3x² dx = 3(4)(0.01) = 0.12.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-24', day: 24, phase: 'derivatives',
    title: "L'Hôpital's Rule",
    subtitle: 'Evaluating indeterminate forms',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-18'],
    objectives: ["Apply L'Hôpital's Rule for 0/0 and ∞/∞ forms", 'Handle other indeterminate forms (0·∞, 1^∞, etc.)', 'Know when the rule does NOT apply'],
    keyFormulas: [
      { name: "L'Hôpital's Rule", latex: "\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}", description: 'When limit gives 0/0 or ∞/∞' },
    ],
    sections: [
      { title: "L'Hôpital's Rule", content: "If lim f(x)/g(x) gives 0/0 or ∞/∞, then it equals lim f'(x)/g'(x) (if that limit exists). You can apply the rule repeatedly.",
        example: { problem: 'Evaluate: lim(x→0) (eˣ - 1)/x.', steps: ['0/0 form → apply L\'Hôpital\'s', "f'(x) = eˣ, g'(x) = 1", 'lim(x→0) eˣ/1 = 1'], solution: '1' } },
    ],
    problems: [
      { id: 'p24-1', question: 'Evaluate: lim(x→0) sin(x)/x using L\'Hôpital\'s Rule.', type: 'numeric', correctAnswer: '1', explanation: "0/0 form. cos(x)/1 → 1.", difficulty: 'beginner' },
      { id: 'p24-2', question: 'Evaluate: lim(x→∞) ln(x)/x.', type: 'numeric', correctAnswer: '0', explanation: "∞/∞ form. (1/x)/1 → 0.", difficulty: 'intermediate' },
      { id: 'p24-3', question: 'Evaluate: lim(x→0) (eˣ - 1 - x)/x².', type: 'multiple-choice', choices: ['0', '1/2', '1', '∞'], correctAnswer: '1/2', explanation: "0/0 → (eˣ-1)/(2x) → 0/0 again → eˣ/2 → 1/2.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-25', day: 25, phase: 'derivatives',
    title: 'Extreme Values & Critical Points',
    subtitle: 'Finding maximum and minimum values',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-18'],
    objectives: ['Find critical points of a function', 'Apply the Extreme Value Theorem', 'Use the closed interval method for absolute extrema'],
    keyFormulas: [
      { name: 'Critical point', latex: "f'(c) = 0 \\text{ or } f'(c) \\text{ DNE}", description: 'Candidates for extrema' },
      { name: 'EVT', latex: '\\text{f continuous on } [a,b] \\implies \\text{f has absolute max and min}', description: 'Extreme Value Theorem' },
    ],
    sections: [
      { title: 'Critical Points', content: "A critical point of f is where f'(c) = 0 or f'(c) doesn't exist. These are the only places where local extrema can occur.",
        example: { problem: 'Find critical points of f(x) = x³ - 3x + 1.', steps: ["f'(x) = 3x² - 3 = 3(x²-1) = 3(x-1)(x+1)", "f'(x) = 0 at x = 1 and x = -1"], solution: 'x = -1, \\; x = 1' } },
      { title: 'Closed Interval Method', content: 'To find absolute max/min on [a,b]: (1) find critical points in (a,b), (2) evaluate f at each critical point and at endpoints, (3) the largest is the absolute max, the smallest is the absolute min.' },
    ],
    problems: [
      { id: 'p25-1', question: 'Find the critical points of f(x) = x⁴ - 4x³.', type: 'multiple-choice', choices: ['x = 0, x = 3', 'x = 0 only', 'x = 3 only', 'x = 0, x = 4'], correctAnswer: 'x = 0, x = 3', explanation: "f'(x) = 4x³ - 12x² = 4x²(x-3) = 0 at x = 0 and x = 3.", difficulty: 'beginner' },
      { id: 'p25-2', question: 'Find the absolute maximum of f(x) = -x² + 4x on [0, 5].', type: 'numeric', correctAnswer: '4', explanation: "f'(x) = -2x+4 = 0 at x=2. f(0)=0, f(2)=4, f(5)=-5. Max is 4.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-26', day: 26, phase: 'derivatives',
    title: 'The Mean Value Theorem',
    subtitle: 'Connecting average and instantaneous rates',
    difficulty: 'intermediate', estimatedMinutes: 45,
    prerequisites: ['day-25'],
    objectives: ['State and apply the Mean Value Theorem', 'Apply Rolle\'s Theorem', 'Use MVT for proofs and estimates'],
    keyFormulas: [
      { name: 'MVT', latex: "f'(c) = \\frac{f(b) - f(a)}{b - a}", description: 'Some c in (a,b) has instantaneous rate = average rate' },
      { name: "Rolle's", latex: "f(a) = f(b) \\implies \\exists c : f'(c) = 0", description: 'Special case of MVT' },
    ],
    sections: [
      { title: 'Mean Value Theorem', content: "If f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) where f'(c) = (f(b)-f(a))/(b-a). Geometrically: the tangent at c is parallel to the secant from a to b." },
    ],
    problems: [
      { id: 'p26-1', question: 'For f(x) = x² on [1,3], find c guaranteed by MVT.', type: 'numeric', correctAnswer: '2', explanation: "f'(c) = (9-1)/2 = 4. f'(c) = 2c = 4 → c = 2.", difficulty: 'intermediate' },
      { id: 'p26-2', question: 'If a car travels 100 miles in 2 hours, MVT guarantees the car was going exactly ___ mph at some point.', type: 'numeric', correctAnswer: '50', explanation: 'Average speed = 100/2 = 50 mph. MVT says instantaneous speed = 50 at some time.', difficulty: 'beginner' },
    ],
  },
  {
    id: 'day-27', day: 27, phase: 'derivatives',
    title: 'First Derivative Test & Increasing/Decreasing',
    subtitle: 'Using f\' to analyze function behavior',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-25'],
    objectives: ['Determine where f is increasing or decreasing using f\'', 'Apply the First Derivative Test for local extrema', 'Construct sign charts for f\''],
    keyFormulas: [
      { name: 'Increasing', latex: "f'(x) > 0 \\implies f \\text{ increasing}", description: '' },
      { name: 'Decreasing', latex: "f'(x) < 0 \\implies f \\text{ decreasing}", description: '' },
    ],
    sections: [
      { title: 'First Derivative Test', content: "At a critical point c: if f' changes from + to -, f has a local max. If f' changes from - to +, f has a local min. If f' doesn't change sign, it's neither." },
    ],
    problems: [
      { id: 'p27-1', question: 'f(x) = x³ - 3x. On what intervals is f increasing?', type: 'multiple-choice', choices: ['(-∞,-1) ∪ (1,∞)', '(-1,1)', '(0,∞)', '(-∞,0)'], correctAnswer: '(-∞,-1) ∪ (1,∞)', explanation: "f'(x) = 3x²-3 = 3(x-1)(x+1). f'>0 when x<-1 or x>1.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-28', day: 28, phase: 'derivatives',
    title: 'Second Derivative Test & Concavity',
    subtitle: 'Using f\'\' for deeper analysis',
    difficulty: 'intermediate', estimatedMinutes: 50,
    prerequisites: ['day-27'],
    objectives: ['Determine concavity using the second derivative', 'Find inflection points', 'Apply the Second Derivative Test for local extrema'],
    keyFormulas: [
      { name: 'Concave up', latex: "f''(x) > 0", description: 'Graph curves upward (holds water)' },
      { name: 'Concave down', latex: "f''(x) < 0", description: 'Graph curves downward (spills water)' },
      { name: '2nd derivative test', latex: "f'(c)=0 \\text{ and } f''(c)>0 \\implies \\text{local min}", description: '' },
    ],
    sections: [
      { title: 'Concavity & Inflection Points', content: "f''(x) > 0 means concave up; f''(x) < 0 means concave down. An inflection point is where concavity changes — where f''(x) changes sign." },
    ],
    problems: [
      { id: 'p28-1', question: 'Where does f(x) = x³ have an inflection point?', type: 'multiple-choice', choices: ['x = 0', 'x = 1', 'No inflection point', 'x = -1'], correctAnswer: 'x = 0', explanation: "f''(x) = 6x. Changes sign at x = 0.", difficulty: 'beginner' },
      { id: 'p28-2', question: 'Use the 2nd derivative test: f(x) = x⁴ - 4x². Does x = 0 give a max, min, or neither?', type: 'multiple-choice', choices: ['Local max', 'Local min', 'Neither', 'Test inconclusive'], correctAnswer: 'Local max', explanation: "f'(x) = 4x³-8x, f'(0)=0. f''(x) = 12x²-8, f''(0) = -8 < 0 → local max.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-29', day: 29, phase: 'derivatives',
    title: 'Optimization Problems',
    subtitle: 'Real-world max/min applications',
    difficulty: 'advanced', estimatedMinutes: 60,
    prerequisites: ['day-27', 'day-28'],
    objectives: ['Set up optimization problems from word problems', 'Apply derivatives to find optimal values', 'Verify solutions using first or second derivative tests'],
    keyFormulas: [
      { name: 'Strategy', latex: '\\text{Model} \\to \\text{Reduce to 1 variable} \\to \\text{Differentiate} \\to \\text{Solve} \\to \\text{Verify}', description: '' },
    ],
    sections: [
      { title: 'Optimization Strategy', content: '(1) Identify the quantity to optimize. (2) Write it as a function. (3) Use constraints to reduce to one variable. (4) Find critical points. (5) Verify it\'s a max/min.',
        example: { problem: 'Find the dimensions of a rectangle with perimeter 100 and maximum area.', steps: ['P = 2l + 2w = 100, so w = 50 - l', 'A = l·w = l(50-l) = 50l - l²', "A'(l) = 50 - 2l = 0 → l = 25", 'w = 50 - 25 = 25. A = 625.', 'A\'\'(l) = -2 < 0, confirmed max.'], solution: '25 \\times 25, \\; A = 625' } },
    ],
    problems: [
      { id: 'p29-1', question: 'A farmer has 200 ft of fence to enclose a rectangular area. What is the maximum area?', type: 'numeric', correctAnswer: '2500', explanation: 'P = 2l+2w = 200. A = l(100-l). Max at l = 50, A = 50·50 = 2500.', difficulty: 'intermediate' },
      { id: 'p29-2', question: 'Find the point on y = √x closest to (3, 0).', type: 'multiple-choice', choices: ['(5/2, √(5/2))', '(1, 1)', '(3, √3)', '(2, √2)'], correctAnswer: '(5/2, √(5/2))', explanation: 'Minimize D² = (x-3)² + x. d/dx = 2(x-3)+1 = 0 → x = 5/2.', difficulty: 'advanced' },
    ],
  },
  {
    id: 'day-30', day: 30, phase: 'derivatives',
    title: 'Curve Sketching',
    subtitle: 'Putting it all together with complete graph analysis',
    difficulty: 'advanced', estimatedMinutes: 55,
    prerequisites: ['day-27', 'day-28', 'day-8'],
    objectives: ['Perform complete curve analysis using derivatives', 'Sketch accurate graphs using all calculus tools', 'Identify all key features: intercepts, extrema, inflection points, asymptotes'],
    keyFormulas: [
      { name: 'Checklist', latex: '\\text{Domain → Intercepts → Symmetry → Asymptotes → f\' → f\'\' → Sketch}', description: 'Systematic curve analysis' },
    ],
    sections: [
      { title: 'Complete Curve Sketching', content: 'Use this systematic approach: (1) Find domain, (2) Find intercepts, (3) Check for symmetry, (4) Find asymptotes, (5) Find f\' for increasing/decreasing and extrema, (6) Find f\'\' for concavity and inflection points, (7) Plot key points and sketch.' },
    ],
    problems: [
      { id: 'p30-1', question: 'For f(x) = x³ - 3x², how many inflection points are there?', type: 'numeric', correctAnswer: '1', explanation: "f''(x) = 6x - 6 = 0 at x = 1. Sign changes, so x = 1 is an inflection point.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-31', day: 31, phase: 'derivatives',
    title: 'Newton\'s Method',
    subtitle: 'Iterative root-finding with derivatives',
    difficulty: 'advanced', estimatedMinutes: 45,
    prerequisites: ['day-18'],
    objectives: ['Apply Newton\'s method formula', 'Understand convergence behavior', 'Recognize when Newton\'s method fails'],
    keyFormulas: [
      { name: "Newton's method", latex: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}", description: 'Iterative root approximation' },
    ],
    sections: [
      { title: "Newton's Method", content: "Starting from an initial guess x₀, Newton's method iterates: x_{n+1} = xₙ - f(xₙ)/f'(xₙ). Each step uses the tangent line to get a better approximation of a root." },
    ],
    problems: [
      { id: 'p31-1', question: 'Use Newton\'s method with x₀ = 2 to find one iteration for f(x) = x² - 5.', type: 'numeric', correctAnswer: '2.25', explanation: 'x₁ = 2 - (4-5)/(2·2) = 2 - (-1/4) = 2.25.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-32', day: 32, phase: 'derivatives',
    title: 'Derivatives of Inverse Functions',
    subtitle: 'When you know f, find (f⁻¹)\'',
    difficulty: 'advanced', estimatedMinutes: 45,
    prerequisites: ['day-21'],
    objectives: ['Apply the inverse function derivative formula', 'Find derivatives of inverse trig functions from first principles'],
    keyFormulas: [
      { name: 'Inverse derivative', latex: "(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}", description: 'Reciprocal of f\' at the inverse point' },
    ],
    sections: [
      { title: 'Inverse Function Derivatives', content: "If f is one-to-one and differentiable, then (f⁻¹)'(a) = 1/f'(f⁻¹(a)). This lets you find derivatives of inverse functions without knowing the inverse explicitly." },
    ],
    problems: [
      { id: 'p32-1', question: "If f(x) = x³ + x, and f(1) = 2, what is (f⁻¹)'(2)?", type: 'multiple-choice', choices: ['1/4', '1/2', '4', '2'], correctAnswer: '1/4', explanation: "(f⁻¹)'(2) = 1/f'(f⁻¹(2)) = 1/f'(1) = 1/(3+1) = 1/4.", difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-33', day: 33, phase: 'derivatives',
    title: 'Parametric & Polar Derivatives',
    subtitle: 'Derivatives for parametric curves and polar graphs',
    difficulty: 'advanced', estimatedMinutes: 50,
    prerequisites: ['day-18'],
    objectives: ['Find dy/dx for parametric curves', 'Find slopes for polar curves', 'Compute second derivatives of parametric equations'],
    keyFormulas: [
      { name: 'Parametric derivative', latex: "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}", description: 'For x = x(t), y = y(t)' },
      { name: 'Polar derivative', latex: "\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}", description: 'Using x = r cos θ, y = r sin θ' },
    ],
    sections: [
      { title: 'Parametric Derivatives', content: 'If a curve is given by x = f(t), y = g(t), then dy/dx = (dy/dt)/(dx/dt), provided dx/dt ≠ 0.',
        example: { problem: 'Find dy/dx for x = t², y = t³ at t = 1.', steps: ['dx/dt = 2t, dy/dt = 3t²', 'dy/dx = 3t²/(2t) = 3t/2', 'At t = 1: dy/dx = 3/2'], solution: '\\frac{3}{2}' } },
    ],
    problems: [
      { id: 'p33-1', question: 'For x = cos(t), y = sin(t), what is dy/dx at t = π/4?', type: 'multiple-choice', choices: ['-1', '1', '0', '√2'], correctAnswer: '-1', explanation: 'dy/dx = cos(t)/(-sin(t)) = -cot(t). At π/4: -cot(π/4) = -1.', difficulty: 'intermediate' },
    ],
  },
  {
    id: 'day-34', day: 34, phase: 'derivatives',
    title: 'Review: Differentiation Mastery',
    subtitle: 'Comprehensive review of all derivative techniques',
    difficulty: 'advanced', estimatedMinutes: 60,
    prerequisites: ['day-33'],
    objectives: ['Review all differentiation rules and techniques', 'Solve complex multi-rule problems', 'Build speed and accuracy'],
    keyFormulas: [],
    sections: [
      { title: 'Differentiation Toolkit', content: 'You now have: power rule, product/quotient rules, chain rule, implicit differentiation, trig/inverse trig derivatives, exponential/log derivatives, parametric/polar derivatives, and applications (optimization, related rates, curve sketching).' },
    ],
    problems: [
      { id: 'p34-1', question: 'Differentiate: f(x) = e^(sin x) · ln(x²+1)', type: 'multiple-choice', choices: ['eˢⁱⁿˣ(cos x · ln(x²+1) + 2x/(x²+1))', 'eˢⁱⁿˣ · cos x + 2x/(x²+1)', 'eˢⁱⁿˣ · (cos x + 2x/(x²+1))', 'sin x · eˢⁱⁿˣ⁻¹ · 2x/(x²+1)'], correctAnswer: 'eˢⁱⁿˣ(cos x · ln(x²+1) + 2x/(x²+1))', explanation: 'Product rule + chain rule. f\' = eˢⁱⁿˣ·cos x·ln(x²+1) + eˢⁱⁿˣ·2x/(x²+1).', difficulty: 'advanced' },
      { id: 'p34-2', question: 'Find dy/dx for e^(xy) = x + y.', type: 'multiple-choice', choices: ['(1 - ye^(xy))/(xe^(xy) - 1)', '(e^(xy) - 1)/(1 - xe^(xy))', '(1 + ye^(xy))/(xe^(xy) + 1)', 'e^(xy)(y+x)'], correctAnswer: '(1 - ye^(xy))/(xe^(xy) - 1)', explanation: 'Implicit: e^(xy)(y + x dy/dx) = 1 + dy/dx. Solve for dy/dx.', difficulty: 'advanced' },
    ],
  },
  {
    id: 'day-35', day: 35, phase: 'derivatives',
    title: 'Differentiation Assessment',
    subtitle: 'Phase 2 mastery check',
    difficulty: 'advanced', estimatedMinutes: 60,
    prerequisites: ['day-34'],
    objectives: ['Demonstrate mastery of all differentiation topics', 'Solve mixed application problems', 'Prepare for integration'],
    keyFormulas: [],
    sections: [
      { title: 'Phase 2 Complete!', content: 'You\'ve mastered differentiation. Next up: integration — the reverse process. You\'ll discover that finding antiderivatives requires creativity and a toolkit of techniques.' },
    ],
    problems: [
      { id: 'p35-1', question: 'A particle moves along y = x²/(x+1). Find the velocity at x = 1 if dx/dt = 3.', type: 'numeric', correctAnswer: '2.25', explanation: "dy/dx = (x²+2x)/(x+1)². At x=1: 3/4. dy/dt = (3/4)(3) = 9/4 = 2.25.", difficulty: 'advanced' },
      { id: 'p35-2', question: 'Evaluate: lim(x→0) (x - sin x)/x³', type: 'multiple-choice', choices: ['0', '1/6', '1/3', '1/2'], correctAnswer: '1/6', explanation: "Apply L'Hôpital's three times: (1-cos x)/(3x²) → sin x/(6x) → cos x/6 → 1/6.", difficulty: 'advanced' },
    ],
  },
];
