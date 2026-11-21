import type { IBSubjectConfig } from './index';

export const MATH_AA_SL_CONFIG: IBSubjectConfig = {
  slug: 'math-aa-sl',
  name: 'Mathematics: Analysis and Approaches',
  shortName: 'Math AA SL',
  level: 'SL',
  groupNumber: 5,
  firstAssessment: 'May 2021+ IB Diploma Guide',
  description:
    'IB Diploma Mathematics: Analysis and Approaches Standard Level covering Topics 1–5 (Number & Algebra, Functions, Geometry & Trigonometry, Statistics & Probability, and full Calculus 5.1–5.11) with Paper 1 Non-GDC analytic mastery and Paper 2 GDC modeling.',
  examPaperTypes: ['Paper 1 (Non-GDC)', 'Paper 2 (GDC)'],
  paper_types: ['Paper 1 (Non-GDC)', 'Paper 2 (GDC)'],
  assessmentComponents: [
    {
      name: 'Paper 1 — Compulsory Short- & Extended-Response (No Technology)',
      paperType: 'Paper 1 (Non-GDC)',
      duration: '1 hour 30 minutes',
      marks: 80,
      weightingPercent: 40,
      description:
        'Section A (short response) and Section B (extended response) completed strictly without a graphic display calculator (GDC), using only the IB AA Formula Booklet.',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Compulsory Short- & Extended-Response (GDC Required)',
      paperType: 'Paper 2 (GDC)',
      duration: '1 hour 30 minutes',
      marks: 80,
      weightingPercent: 40,
      description:
        'Section A and Section B completed with full GDC access for numerical solving, graphing intersections/extrema, regressions, and probability distributions.',
      isExternal: true,
    },
    {
      name: 'Mathematical Exploration (IA)',
      paperType: 'Internal Assessment',
      duration: '10–15 hours',
      marks: 20,
      weightingPercent: 20,
      description:
        'Individual written investigation exploring a mathematical area of personal interest, assessed on Presentation, Mathematical Communication, Personal Engagement, Reflection, and Use of Mathematics.',
      isExternal: false,
    },
  ],
  commandTerms: [
    'Calculate',
    'Comment',
    'Compare',
    'Construct',
    'Deduce',
    'Demonstrate',
    'Describe',
    'Determine',
    'Distinguish',
    'Draw',
    'Estimate',
    'Explain',
    'Find',
    'Hence',
    'Hence or otherwise',
    'Identify',
    'Interpret',
    'Investigate',
    'Justify',
    'Plot',
    'Predict',
    'Prove',
    'Show that',
    'Sketch',
    'Solve',
    'State',
    'Verify',
    'Write down',
  ],
  guidingPrinciples: [
    'Balanced mastery of exact algebraic manipulation (Paper 1 Non-GDC) and technological modeling/verification (Paper 2 GDC).',
    'Strict IB rounding to 3 significant figures unless exact answers or specified decimal places are requested.',
    'Interval notation: both North American [a, b) and European [a, b[ conventions are accepted; infinity is always open.',
    'Always factor horizontal scale parameter b out inside y = a f(b(x − h)) + k before applying horizontal translations.',
  ],
  iaOverview: {
    title: 'Mathematical Exploration (Math AA SL IA)',
    maxMarks: 20,
    wordLimit: '12–20 pages',
    weightingPercent: 20,
    summary:
      'Assessed out of 20 across Criterion A Presentation (4), B Mathematical Communication (4), C Personal Engagement (3), D Reflection (3), and E Use of Mathematics (6).',
  },
  units: [
    {
      code: '1',
      title: 'Topic 1: Number and algebra',
      guidanceNotes:
        'Scientific notation, arithmetic & geometric sequences/series, financial modeling, laws of exponents and logarithms, deductive proof, and the binomial theorem.',
      subtopics: [
        {
          code: '1.1',
          title: 'Scientific notation and number operations',
          teachingHours: 1,
          guidanceNotes:
            'Operations with numbers in the form $a \\times 10^k$ where $1 \\le a < 10$ and $k \\in \\mathbb{Z}$; exact values, rounding, estimation, percentage error, and upper/lower bounds.',
          keyConcepts: ['Standard form a × 10^k', '3 significant figures', 'Percentage error'],
        },
        {
          code: '1.2',
          title: 'Arithmetic sequences and series',
          teachingHours: 2,
          guidanceNotes:
            'Common difference $d$, general term $u_n = u_1 + (n - 1)d$, sum formulas $S_n = \\frac{n}{2}(2u_1 + (n-1)d) = \\frac{n}{2}(u_1 + u_n)$, and sigma notation $\\sum_{r=1}^n u_r$.',
          keyConcepts: ['Common difference d', 'Arithmetic sum Sn', 'Sigma notation'],
        },
        {
          code: '1.3',
          title: 'Geometric sequences and series',
          teachingHours: 2,
          guidanceNotes:
            'Common ratio $r$, general term $u_n = u_1 r^{n-1}$, finite sum $S_n = \\frac{u_1(r^n - 1)}{r - 1}$ ($r \\neq 1$), and applications.',
          keyConcepts: ['Common ratio r', 'Geometric sum Sn', 'Solving for n via logs'],
        },
        {
          code: '1.4',
          title: 'Financial applications of geometric sequences and series',
          teachingHours: 2,
          guidanceNotes:
            'Compound interest formula $FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$ (annual, half-yearly, quarterly, monthly compounding), annual depreciation, and real vs nominal value with inflation.',
          keyConcepts: ['Compound interest', 'Compounding periods k', 'Depreciation'],
        },
        {
          code: '1.5',
          title: 'Laws of exponents with integer exponents; introduction to logarithms',
          teachingHours: 2,
          guidanceNotes:
            'Integer exponent rules ($a^m a^n = a^{m+n}$, $a^0 = 1$, $a^{-n} = 1/a^n$), equivalence $a^x = b \\iff x = \\log_a b$ ($a > 0, a \\neq 1, b > 0$), common $\\log_{10} x$ and natural $\\ln x$.',
          keyConcepts: ['Integer exponent laws', 'Logarithm equivalence', 'Natural log ln x'],
        },
        {
          code: '1.6',
          title: 'Simple deductive proof',
          teachingHours: 2,
          guidanceNotes:
            'Numerical and algebraic deductive proof: explicitly start from LHS and transform to RHS (or vice versa), avoiding circular reasoning; algebraic parity/divisibility and identity proofs.',
          keyConcepts: ['LHS → RHS proof', 'Algebraic identities', 'Avoiding circularity'],
        },
        {
          code: '1.7',
          title: 'Laws of exponents with rational exponents; laws of logarithms; change of base',
          teachingHours: 3,
          guidanceNotes:
            'Fractional exponents $a^{m/n}$; laws of logarithms ($\\log_a(xy)$, $\\log_a(x/y)$, $\\log_a(x^m)$); change of base formula $\\log_b a = \\frac{\\log_c a}{\\log_c b}$; solving exponential equations with logarithms.',
          keyConcepts: ['Laws of logarithms', 'Change of base', 'Exponential equations'],
        },
        {
          code: '1.8',
          title: 'Sum of infinite convergent geometric sequences',
          teachingHours: 1,
          guidanceNotes:
            'Convergence condition $|r| < 1$ ($-1 < r < 1$) and infinite sum $S_\\infty = \\frac{u_1}{1 - r}$, including recurring decimals and geometric fractal perimeters/areas.',
          keyConcepts: ['Convergence |r| < 1', 'Infinite sum S∞'],
        },
        {
          code: '1.9',
          title: 'The binomial theorem',
          teachingHours: 4,
          guidanceNotes:
            'Expansion of $(a + b)^n$ ($n \\in \\mathbb{N}$), Pascal’s triangle, binomial coefficients $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$, finding specific $x^k$ or constant terms without full expansion.',
          keyConcepts: ['Binomial expansion', 'Combinations nCr', 'General term Tr+1'],
        },
      ],
    },
    {
      code: '2',
      title: 'Topic 2: Functions',
      guidanceNotes:
        'Linear, quadratic, reciprocal/rational, exponential, and logarithmic functions, compositions, inverses, and full graph transformations y = a f(b(x − h)) + k.',
      subtopics: [
        {
          code: '2.1',
          title: 'Different forms of the equation of a straight line',
          teachingHours: 2,
          guidanceNotes:
            'Gradient formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$, slope-intercept $y = mx + c$, general form $ax + by + d = 0$, point-gradient $y - y_1 = m(x - x_1)$, parallel ($m_1 = m_2$) and perpendicular ($m_1 m_2 = -1$) lines.',
          keyConcepts: ['Gradient & intercepts', 'Parallel & perpendicular', 'Point-gradient form'],
        },
        {
          code: '2.2',
          title: 'Concept of a function, domain, range, and inverse notation',
          teachingHours: 3,
          guidanceNotes:
            'Functions as mappings (Vertical Line Test), notation $f(x)$ and $f: x \\mapsto \\dots$, maximal real domain restrictions (denominators $\\neq 0$, even radicals $\\ge 0$, logs $> 0$), range, and interval notation.',
          keyConcepts: ['Vertical Line Test', 'Domain & range', 'Interval notation'],
        },
        {
          code: '2.3',
          title: 'Graph of a function; sketching from information and context',
          teachingHours: 2,
          guidanceNotes:
            'Distinguishing "draw" (accurate plotted points) vs "sketch" (key features: axis intercepts, turning points, endpoints, and asymptotes clearly labeled).',
          keyConcepts: ['Sketch vs draw', 'Endpoints & intercepts', 'Asymptotes'],
        },
        {
          code: '2.4',
          title: 'Determining key features of graphs using technology',
          teachingHours: 2,
          guidanceNotes:
            'Using GDC to determine zeros/roots, local maxima/minima, points of intersection of two curves, symmetry, and asymptotic behavior.',
          keyConcepts: ['GDC zeros & extrema', 'Curve intersections', 'Axis of symmetry'],
        },
        {
          code: '2.5',
          title: 'Composite functions and inverse functions',
          teachingHours: 4,
          guidanceNotes:
            'Composite $(f \\circ g)(x) = f(g(x))$ (innermost first; order matters), identity function, Horizontal Line Test (one-to-one requirement), domain restriction for inverses, reflection across $y = x$, $\\text{Dom}(f^{-1}) = \\text{Ran}(f)$, and self-inverse proofs $f^{-1}(x) = f(x)$.',
          keyConcepts: ['Composite f(g(x))', 'Horizontal Line Test', 'Domain/range swap', 'Self-inverse functions'],
        },
        {
          code: '2.6',
          title: 'The quadratic function and its forms',
          teachingHours: 3,
          guidanceNotes:
            'Standard $f(x) = ax^2 + bx + c$ ($y$-intercept $c$), factored $a(x - p)(x - q)$ ($x$-intercepts $p, q$), vertex/completed-square $a(x - h)^2 + k$ (vertex $(h, k)$), and axis of symmetry $x = -\\frac{b}{2a} = \\frac{p + q}{2}$.',
          keyConcepts: ['Vertex form', 'Completing the square', 'Axis of symmetry'],
        },
        {
          code: '2.7',
          title: 'Solution of quadratic equations and inequalities; the discriminant',
          teachingHours: 3,
          guidanceNotes:
            'Solving quadratics via factorization, completing the square, quadratic formula, and GDC; discriminant $\\Delta = b^2 - 4ac$ ($\\Delta > 0$ two distinct real roots, $\\Delta = 0$ one repeated root, $\\Delta < 0$ no real roots); degenerate $k = 0$ linear boundary checks; quadratic inequalities.',
          keyConcepts: ['Discriminant Δ = b² − 4ac', 'Degenerate leading coeff', 'Quadratic inequalities'],
        },
        {
          code: '2.8',
          title: 'The reciprocal and simple rational functions',
          teachingHours: 2,
          guidanceNotes:
            'Reciprocal $f(x) = \\frac{1}{x}$ and rational $f(x) = \\frac{ax + b}{cx + d}$: vertical asymptote $x = -d/c$ (denominator $= 0$), horizontal asymptote $y = a/c$ (leading ratio), removable holes when factors cancel, and self-inverse conditions.',
          keyConcepts: ['Vertical & horizontal asymptotes', 'Rational functions', 'Removable discontinuities'],
        },
        {
          code: '2.9',
          title: 'Exponential and logarithmic functions and their graphs',
          teachingHours: 2,
          guidanceNotes:
            'Graphs and asymptotic behavior of $f(x) = a^x$, $e^x$, $\\log_a x$, and $\\ln x$ (inverses across $y = x$); growth/decay models and horizontal/vertical asymptotes.',
          keyConcepts: ['Exponential growth/decay', 'Inverse e^x and ln x', 'Logarithmic asymptotes'],
        },
        {
          code: '2.10',
          title: 'Solving equations graphically and analytically',
          teachingHours: 1,
          guidanceNotes:
            'Translating real-world word problems into equations, solving analytically where exact forms exist and graphically via GDC intersection/zero tools, verifying domain validity.',
          keyConcepts: ['Graphical solving', 'Analytical solving', 'Domain validation'],
        },
        {
          code: '2.11',
          title: 'Transformations of graphs',
          teachingHours: 4,
          guidanceNotes:
            'Translations ($f(x) + k$, $f(x - h)$), reflections in $x$-axis ($-f(x)$) and $y$-axis ($f(-x)$), vertical stretch ($af(x)$) and horizontal stretch factor $1/|b|$ ($f(bx)$). Composite $y = a f(b(x - h)) + k$ ("factor $b$ first, translate LAST") with point mapping $(x, y) \\mapsto (\\frac{1}{b}x + h, ay + k)$.',
          keyConcepts: ['y = af(b(x − h)) + k', 'Factor b before h', 'Mapping rule', 'Reflections & stretches'],
        },
      ],
    },
    {
      code: '3',
      title: 'Topic 3: Geometry and trigonometry',
      guidanceNotes:
        '3D geometry, right/non-right trigonometry, radian measure, unit circle exact values, trig identities, circular functions, and trigonometric equations.',
      subtopics: [
        {
          code: '3.1',
          title: '3D coordinate geometry and mensuration of 3D solids',
          teachingHours: 3,
          guidanceNotes:
            'Distance between $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$, midpoint in 3D, volume and surface area of right pyramids, right cones, spheres, hemispheres, and composite solids.',
          keyConcepts: ['3D distance & midpoint', 'Cones, pyramids & spheres', 'Surface area & volume'],
        },
        {
          code: '3.2',
          title: 'Sine rule, cosine rule, and area of a triangle',
          teachingHours: 4,
          guidanceNotes:
            'Right-triangle SOHCAHTOA, sine rule $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$, cosine rule $c^2 = a^2 + b^2 - 2ab\\cos C$, and triangle area $A = \\frac{1}{2}ab\\sin C$.',
          keyConcepts: ['Sine rule', 'Cosine rule', 'Triangle area ½ab sin C'],
        },
        {
          code: '3.3',
          title: 'Applications of trigonometry in 2D and 3D',
          teachingHours: 3,
          guidanceNotes:
            'Angles of elevation and depression, three-figure true bearings, and angles between lines and planes in 3D figures.',
          keyConcepts: ['Bearings', 'Angles of elevation/depression', 'Line–plane angles'],
        },
        {
          code: '3.4',
          title: 'The circle: radian measure, arc length, and sector area',
          teachingHours: 3,
          guidanceNotes:
            'Converting between degrees and radians ($\\pi\\text{ rad} = 180^\\circ$), arc length $l = r\\theta$, sector area $A = \\frac{1}{2}r^2\\theta$, and segment area.',
          keyConcepts: ['Radians', 'Arc length l = rθ', 'Sector area ½r²θ'],
        },
        {
          code: '3.5',
          title: 'Unit circle definitions, exact values, and the ambiguous case',
          teachingHours: 4,
          guidanceNotes:
            'Unit circle coordinates $(\\cos\\theta, \\sin\\theta)$ and $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$; exact ratios for $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$ and all quadrants (CAST); ambiguous case of the sine rule (two possible triangles).',
          keyConcepts: ['Unit circle', 'Exact trig values', 'Ambiguous sine case'],
        },
        {
          code: '3.6',
          title: 'Trigonometric identities',
          teachingHours: 3,
          guidanceNotes:
            'Pythagorean identity $\\cos^2\\theta + \\sin^2\\theta = 1$, double-angle identities $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ and $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$.',
          keyConcepts: ['Pythagorean identity', 'Double-angle identities', 'Sign by quadrant'],
        },
        {
          code: '3.7',
          title: 'The circular functions sin x, cos x, and tan x',
          teachingHours: 3,
          guidanceNotes:
            'Graphs and sinusoidal modeling $f(x) = a\\sin(b(x - c)) + d$ and $a\\cos(b(x - c)) + d$: amplitude $|a|$, period $T = \\frac{2\\pi}{b}$, principal axis $y = d$, phase shift $c$, and $\\tan x$ asymptotes.',
          keyConcepts: ['Amplitude & period', 'Principal axis', 'Sinusoidal modeling'],
        },
        {
          code: '3.8',
          title: 'Solving trigonometric equations in a finite interval',
          teachingHours: 3,
          guidanceNotes:
            'Solving linear and quadratic trigonometric equations in $\\sin x, \\cos x, \\tan x$ and multiple-angle equations $\\sin(bx + c) = k$ over a specified domain analytically and via GDC.',
          keyConcepts: ['Multiple-angle domains', 'Quadratic trig equations', 'Finite interval solutions'],
        },
      ],
    },
    {
      code: '4',
      title: 'Topic 4: Statistics and probability',
      guidanceNotes:
        'Sampling, descriptive statistics, bivariate regression, probability laws, discrete random variables, binomial distribution, and normal distribution.',
      subtopics: [
        {
          code: '4.1',
          title: 'Populations, samples, data classification, and outliers',
          teachingHours: 2,
          guidanceNotes:
            'Population vs sample; discrete vs continuous data; simple random, systematic, stratified, quota, and convenience sampling; bias and $1.5 \\times \\text{IQR}$ outlier test.',
          keyConcepts: ['Sampling methods', 'Sampling bias', 'Outliers (1.5×IQR)'],
        },
        {
          code: '4.2',
          title: 'Presentation of data and cumulative frequency',
          teachingHours: 3,
          guidanceNotes:
            'Frequency histograms (continuous grouped data), cumulative frequency curves (median, $Q_1, Q_3$, percentiles, IQR), and box-and-whisker diagrams.',
          keyConcepts: ['Histograms', 'Cumulative frequency', 'Box plots & quartiles'],
        },
        {
          code: '4.3',
          title: 'Measures of central tendency and dispersion',
          teachingHours: 3,
          guidanceNotes:
            'Mean (including mid-interval grouped estimates), median, modal class, range, IQR, variance $\\sigma^2$, and standard deviation $\\sigma$; linear scaling effects ($x \\mapsto ax + b$).',
          keyConcepts: ['Mean/median/mode', 'Standard deviation', 'Linear transformation of data'],
        },
        {
          code: '4.4',
          title: 'Linear correlation and regression of y on x',
          teachingHours: 3,
          guidanceNotes:
            'Scatter diagrams, Pearson’s product-moment correlation coefficient $r$ ($-1 \\le r \\le 1$), least-squares regression line $y = ax + b$ passing through $(\\bar{x}, \\bar{y})$, interpolation vs extrapolation, correlation vs causation.',
          keyConcepts: ['Pearson r', 'Regression y on x', 'Interpolation vs extrapolation'],
        },
        {
          code: '4.5',
          title: 'Basic probability, Venn diagrams, and tree diagrams',
          teachingHours: 3,
          guidanceNotes:
            'Sample spaces, complementary events $P(A\') = 1 - P(A)$, expected frequency $nP(A)$, Venn and tree diagrams, and addition rule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
          keyConcepts: ['Venn & tree diagrams', 'Addition rule', 'Expected frequency'],
        },
        {
          code: '4.6',
          title: 'Conditional probability and independent events',
          teachingHours: 3,
          guidanceNotes:
            'Mutually exclusive ($P(A \\cap B) = 0$) vs independent events ($P(A \\cap B) = P(A)P(B)$); conditional probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.',
          keyConcepts: ['Conditional probability', 'Independence test', 'Mutually exclusive'],
        },
        {
          code: '4.7',
          title: 'Discrete random variables and expected value',
          teachingHours: 2,
          guidanceNotes:
            'Probability distribution tables ($\\sum P(X = x_i) = 1$), expected value $E(X) = \\sum x P(X = x)$, and fair games ($E(\\text{net gain}) = 0$).',
          keyConcepts: ['Probability distribution', 'Expected value E(X)', 'Fair games'],
        },
        {
          code: '4.8',
          title: 'The binomial distribution',
          teachingHours: 3,
          guidanceNotes:
            'Conditions for $X \\sim B(n, p)$ (fixed $n$, independent trials, constant $p$, two outcomes); `binomPdf` and `binomCdf`; mean $E(X) = np$ and variance $\\text{Var}(X) = np(1 - p)$.',
          keyConcepts: ['Binomial conditions', 'binomPdf vs binomCdf', 'Mean np & variance np(1−p)'],
        },
        {
          code: '4.9',
          title: 'The normal distribution and inverse normal',
          teachingHours: 2,
          guidanceNotes:
            'Bell-shaped symmetric properties of $X \\sim N(\\mu, \\sigma^2)$, `normalCdf` area probabilities, and `invNorm` quantile calculations.',
          keyConcepts: ['Normal curve', 'normalCdf', 'invNorm'],
        },
        {
          code: '4.10',
          title: 'Regression line of x on y',
          teachingHours: 1,
          guidanceNotes:
            'Using the regression line of $x$ on $y$ (rather than rearranging $y$ on $x$) when estimating $x$ from a given $y$ value.',
          keyConcepts: ['Regression x on y', 'Estimating x from y'],
        },
        {
          code: '4.11',
          title: 'Formal conditional probability and Bayes-style tree problems',
          teachingHours: 1,
          guidanceNotes:
            'Combining tree diagrams, two-way tables, and conditional probability formula to reverse conditioning ($P(A|B)$ given $P(B|A)$).',
          keyConcepts: ['Two-stage conditional trees', 'Reversing conditionality'],
        },
        {
          code: '4.12',
          title: 'Standardization of normal variables (z-values)',
          teachingHours: 1,
          guidanceNotes:
            'Standard normal $Z \\sim N(0, 1)$, $z = \\frac{x - \\mu}{\\sigma}$, and solving for unknown $\\mu$, $\\sigma$, or both via simultaneous equations.',
          keyConcepts: ['z-score standardization', 'Finding unknown μ or σ'],
        },
      ],
    },
    {
      code: '5',
      title: 'Topic 5: Calculus (Full 5.1–5.11)',
      guidanceNotes:
        'Complete IB Math AA SL Calculus sequence covering limits, derivatives, differentiation rules, concavity/extrema/optimization, kinematics, substitution integration, and areas between curves.',
      subtopics: [
        {
          code: '5.1',
          title: 'Introduction to limits and the derivative as gradient and rate of change',
          teachingHours: 2,
          guidanceNotes:
            'Informal limit notation $\\lim_{x \\to a} f(x)$ and $\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$; derivative $f\'(x)$ or $\\frac{dy}{dx}$ interpreted geometrically as gradient of tangent and physically as instantaneous rate of change.',
          keyConcepts: ['Limits', 'First-principles concept', 'Instantaneous rate of change'],
        },
        {
          code: '5.2',
          title: 'Increasing and decreasing functions',
          teachingHours: 1,
          guidanceNotes:
            'Connecting sign of $f\'(x)$ to curve behavior: $f\'(x) > 0$ increasing, $f\'(x) < 0$ decreasing, $f\'(x) = 0$ stationary point; sketching $f\'(x)$ from $f(x)$.',
          keyConcepts: ['f\'(x) > 0 increasing', 'f\'(x) < 0 decreasing', 'Sign charts'],
        },
        {
          code: '5.3',
          title: 'Derivative of f(x) = ax^n (integer powers) and polynomial sums',
          teachingHours: 2,
          guidanceNotes:
            'Power rule $\\frac{d}{dx}(x^n) = nx^{n-1}$ ($n \\in \\mathbb{Z}$, including negative integer powers via rewriting $1/x^k = x^{-k}$) and linearity $\\frac{d}{dx}(af + bg) = af\' + bg\'$.',
          keyConcepts: ['Integer power rule', 'Negative exponent rewriting', 'Linearity'],
        },
        {
          code: '5.4',
          title: 'Tangents and normals at a given point',
          teachingHours: 2,
          guidanceNotes:
            'Gradient of tangent $m_T = f\'(x_0)$, gradient of normal $m_N = -\\frac{1}{f\'(x_0)}$ ($f\'(x_0) \\neq 0$), and equations of tangent and normal lines in all standard forms.',
          keyConcepts: ['Tangent equation', 'Normal gradient −1/f\'(x0)', 'Horizontal tangents'],
        },
        {
          code: '5.5',
          title: 'Introduction to integration as anti-differentiation',
          teachingHours: 2,
          guidanceNotes:
            'Indefinite integral $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\neq -1$), finding constant of integration $C$ from boundary condition $(x_0, y_0)$, and intro to definite integrals $\\int_a^b y\\,dx$ via technology.',
          keyConcepts: ['Anti-derivative', 'Constant of integration +C', 'Boundary conditions'],
        },
        {
          code: '5.6',
          title: 'Chain, product, and quotient rules; derivatives of sin x, cos x, e^x, ln x',
          teachingHours: 4,
          guidanceNotes:
            'Standard derivatives ($\\sin x \\to \\cos x$, $\\cos x \\to -\\sin x$, $e^x \\to e^x$, $\\ln x \\to \\frac{1}{x}$); chain rule $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$; product rule $(uv)\' = u\'v + uv\'$; quotient rule $(u/v)\' = \\frac{u\'v - uv\'}{v^2}$.',
          keyConcepts: ['Chain rule', 'Product & quotient rules', 'Transcendental derivatives'],
        },
        {
          code: '5.7',
          title: 'The second derivative and concavity',
          teachingHours: 2,
          guidanceNotes:
            'Second derivative $f\'\'(x) = \\frac{d^2y}{dx^2}$; graphical relationships between $f$, $f\'$, and $f\'\'$; concave up ($f\'\'(x) > 0$) vs concave down ($f\'\'(x) < 0$).',
          keyConcepts: ['Second derivative f\'\'(x)', 'Concavity', 'f, f\', f\'\' graph matching'],
        },
        {
          code: '5.8',
          title: 'Local extrema, optimization, and points of inflection',
          teachingHours: 4,
          guidanceNotes:
            'Testing stationary points ($f\'(x) = 0$) via first-derivative sign change or second-derivative test ($f\'\'(x) > 0 \\implies$ min, $< 0 \\implies$ max); points of inflection ($f\'\'(x) = 0$ WITH sign change in $f\'\'$); real-world optimization problems with domain boundary checks.',
          keyConcepts: ['Local max/min tests', 'Points of inflection', 'Optimization modeling'],
        },
        {
          code: '5.9',
          title: 'Kinematic problems (displacement, velocity, acceleration)',
          teachingHours: 3,
          guidanceNotes:
            'Relationships $v = \\frac{ds}{dt}$, $a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$, $s(t) = \\int v(t)\\,dt$; displacement $\\int_{t_1}^{t_2} v(t)\\,dt$ vs total distance travelled $\\int_{t_1}^{t_2} |v(t)|\\,dt$.',
          keyConcepts: ['v = ds/dt, a = dv/dt', 'Displacement vs distance', '∫|v(t)| dt'],
        },
        {
          code: '5.10',
          title: 'Indefinite integrals of sin x, cos x, 1/x, e^x and integration by substitution',
          teachingHours: 3,
          guidanceNotes:
            'Anti-derivatives of $\\sin x$ ($-\\cos x$), $\\cos x$ ($\\sin x$), $\\frac{1}{x}$ ($\\ln|x|$), $e^x$ ($e^x$), and $\\int f(g(x))g\'(x)\\,dx$ via substitution $u = g(x)$ (including linear $ax + b$ scaling).',
          keyConcepts: ['Transcendental integrals', 'u-substitution', '∫(1/x) dx = ln|x| + C'],
        },
        {
          code: '5.11',
          title: 'Definite integrals and areas under and between curves',
          teachingHours: 3,
          guidanceNotes:
            'Fundamental Theorem $\\int_a^b f(x)\\,dx = F(b) - F(a)$; signed integral vs geometric area $\\int_a^b |f(x)|\\,dx$; area between two curves $\\int_a^b (y_{\\text{upper}} - y_{\\text{lower}})\\,dx$ (with limits found analytically or via GDC intersections).',
          keyConcepts: ['Definite integral evaluation', 'Area vs signed integral', 'Area between curves'],
        },
      ],
    },
  ],
};
