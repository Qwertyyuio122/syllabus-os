import type {
  ConceptComparisonMatrixSpec,
  InteractiveFunctionGraphSpec,
  WorkedExampleSpec,
} from '@/types/diagrams';

// ---------------------------------------------------------------------------
// Guide 1 (2.2–2.5): Functions, Domain Restrictions, Composites & Inverses
// ---------------------------------------------------------------------------

export const MATH_V3_FN_INVERSE_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-fn-inverse-graph',
  title: 'Functions, Restricted Domains & Inverse Reflection Across y = x (2.2–2.5)',
  caption:
    'Adjust a*(x − h)^2 + k and toggle "Reflect y = x (f⁻¹)" to verify why non-one-to-one quadratics require domain restriction x ≥ h and how Domain(f) swaps with Range(f⁻¹).',
  xMin: -6,
  xMax: 8,
  yMin: -6,
  yMax: 8,
  xLabel: 'x (Domain of f)',
  yLabel: 'y (Range of f)',
  sliders: [
    { key: 'a', label: 'Scale a', min: 0.25, max: 2, step: 0.25, defaultValue: 0.5 },
    { key: 'h', label: 'Horizontal Shift h', min: -3, max: 3, step: 0.5, defaultValue: 1 },
    { key: 'k', label: 'Vertical Shift k', min: -3, max: 3, step: 0.5, defaultValue: -1 },
  ],
  curves: [
    {
      id: 'f-quad',
      label: 'f(x) = a(x-h)^2 + k',
      expression: 'a*(x-h)^2+k',
      color: '#4F46E5',
    },
    {
      id: 'f-lin',
      label: 'g(x) = a*x + k',
      expression: 'a*x+k',
      dashed: true,
      color: '#059669',
    },
  ],
  inverseReflection: {
    enabled: true,
    defaultVisible: true,
    sourceCurveId: 'f-quad',
    label: 'f⁻¹ reflection across y = x',
  },
  showDerivative: false,
  readouts: [
    {
      label: 'Vertex / Restriction x ≥ h',
      expression: 'h',
      format: 'coordinate',
      yExpression: 'k',
    },
    {
      label: 'Image on f⁻¹(x)',
      expression: 'k',
      format: 'coordinate',
      yExpression: 'h',
    },
    {
      label: 'g(0) = y-intercept',
      expression: 'k',
      format: 'number',
    },
    {
      label: 'f(h + 1)',
      expression: 'a+k',
      format: 'number',
    },
  ],
};

export const MATH_V3_FN_PROTOCOLS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-fn-protocols-matrix',
  title: 'Function Foundations, Composites & Invertibility Protocol (Oxford Ch. 2 / IB 2.2–2.5)',
  caption:
    'Distinguish function existence (VLT) from invertibility (HLT), enforce nested composite domain gates, and verify self-inverses rigorously.',
  columns: ['Rule / Concept', 'Algebraic & Graphical Criterion', 'Paper 1 Examiner Trap'],
  rows: [
    {
      criterion: 'Function (Vertical Line Test)',
      cells: [
        'Every x in the domain maps to at most ONE output y; any vertical line cuts the graph ≤ 1 time.',
        'Maximal real domain excludes denominator = 0, negative even radicands (< 0), and non-positive log arguments (≤ 0).',
      ],
      ibExamTip: 'State domain exclusions BEFORE simplifying rational expressions; open circles/asymptotes use open brackets ]a, b[ or (a, b).',
    },
    {
      criterion: 'One-to-One (Horizontal Line Test)',
      cells: [
        'Every output y corresponds to at most ONE input x; any horizontal line cuts the graph ≤ 1 time.',
        'If a function fails HLT (e.g. y = x² − 4x + 7), restrict its domain at the vertex x ≥ 2 or x ≤ 2 to construct f⁻¹.',
      ],
      ibExamTip: 'Choose +√ when Range(f⁻¹) = Domain(f) is above the vertex, and −√ when Domain(f) lies left of the vertex.',
    },
    {
      criterion: 'Composite (f ∘ g)(x) = f(g(x))',
      cells: [
        'Evaluate innermost function g(x) first, then feed g(x) into outer f. Generally (f ∘ g)(x) ≠ (g ∘ f)(x).',
        'Domain of f(g(x)) requires BOTH x ∈ Dom(g) AND g(x) ∈ Dom(f).',
      ],
      ibExamTip: 'Do NOT simplify f(g(x)) and ignore g(x)’s own domain restriction (e.g. x ≥ −1 inside √(x + 1)).',
    },
    {
      criterion: 'Inverse Swap & Self-Inverse',
      cells: [
        'Reflection across y = x swaps coordinates (a, b) ↔ (b, a), so Dom(f⁻¹) = Ran(f) and Ran(f⁻¹) = Dom(f).',
        'A function is self-inverse iff f⁻¹(x) = f(x) (equivalently f(f(x)) = x and its graph is symmetric across y = x).',
      ],
      ibExamTip: 'To solve f(x) = f⁻¹(x), intersect y = f(x) with y = x when f is increasing — fast Paper 1 shortcut!',
    },
  ],
};

export const MATH_V3_FN_COMPOSITE_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-fn-composite-worked',
  title: 'Worked Example: Composite Maximal Domain & Restricted Quadratic Inverse (2.2–2.5)',
  caption:
    'Reveal each markscheme step to see how inner/outer domain constraints and the vertex-branch sign choice earn full Paper 1 credit.',
  sourceLabel: 'Oxford Ch. 2 / Ian Toms Notes',
  commandTerm: 'Find',
  marks: 7,
  problemMarkdown:
    'Let $f(x) = \\frac{1}{x - 3}$ ($x \\neq 3$), $g(x) = \\sqrt{x + 1}$ ($x \\ge -1$), and $h(x) = x^2 - 4x + 7$ for $x \\ge 2$.\n\n**(a)** Find $(f \\circ g)(x)$ and state its maximal real domain. **[3 marks]**\n\n**(b)** Find an expression for $h^{-1}(x)$ and state its domain and range. **[4 marks]**',
  givenData: [
    { label: 'f(x)', value: '1/(x − 3), x ≠ 3' },
    { label: 'g(x)', value: '√(x + 1), x ≥ −1' },
    { label: 'h(x)', value: 'x² − 4x + 7, x ≥ 2' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Form the composite (f ∘ g)(x) innermost-first',
      workingMarkdown: 'Substitute $g(x) = \\sqrt{x + 1}$ directly into $f$: $(f \\circ g)(x) = f(g(x)) = \\frac{1}{\\sqrt{x + 1} - 3}$.',
      formulaLatex: '(f \\circ g)(x) = \\frac{1}{\\sqrt{x + 1} - 3}',
      markCode: 'A1',
      rationale: 'Always apply the innermost rule g(x) first; do not confuse with g(f(x)).',
    },
    {
      stepNumber: 2,
      title: 'Enforce BOTH inner and outer domain restrictions',
      workingMarkdown:
        'Inner radicand demands $x + 1 \\ge 0 \\implies x \\ge -1$. Outer denominator demands $\\sqrt{x + 1} - 3 \\neq 0 \\implies \\sqrt{x + 1} \\neq 3 \\implies x + 1 \\neq 9 \\implies x \\neq 8$.',
      formulaLatex: '\\text{Dom}(f \\circ g) = [-1,\\, 8) \\cup (8,\\, \\infty)',
      markCode: 'M1 A1',
      rationale: 'Both inequalities must hold simultaneously: x ≥ −1 and x ≠ 8.',
    },
    {
      stepNumber: 3,
      title: 'Complete the square on h(x) to isolate Range(h)',
      workingMarkdown:
        'Rewrite $h(x) = (x - 2)^2 + 3$. Since $x \\ge 2$, $(x - 2)^2 \\ge 0$, so the minimum output at vertex $(2, 3)$ gives $\\text{Ran}(h) = [3, \\infty)$.',
      formulaLatex: 'h(x) = (x - 2)^2 + 3 \\ge 3 \\quad (x \\ge 2)',
      markCode: 'M1',
      rationale: 'Completing the square reveals both the range of h and a single isolated y for algebraic inversion.',
    },
    {
      stepNumber: 4,
      title: 'Swap x and y, select the +√ branch, and swap Domain/Range',
      workingMarkdown:
        'Set $x = (y - 2)^2 + 3 \\implies (y - 2)^2 = x - 3 \\implies y = 2 \\pm \\sqrt{x - 3}$. Because $\\text{Ran}(h^{-1}) = \\text{Dom}(h) = [2, \\infty)$, we MUST choose $+\\sqrt{x - 3}$.',
      formulaLatex: 'h^{-1}(x) = 2 + \\sqrt{x - 3}, \\quad \\text{Dom}(h^{-1}) = [3, \\infty), \\quad \\text{Ran}(h^{-1}) = [2, \\infty)',
      markCode: 'M1 A1 A1',
      rationale: 'Leaving ± fails the Vertical Line Test (not a function); rejecting the − branch earns the accuracy mark.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** $(f \\circ g)(x) = \\frac{1}{\\sqrt{x+1}-3}$ with domain $x \\ge -1,\\; x \\neq 8$.\n**(b)** $h^{-1}(x) = 2 + \\sqrt{x - 3}$ with domain $x \\ge 3$ and range $y \\ge 2$.',
  commonTrapMarkdown:
    'Candidates frequently write $h^{-1}(x) = 2 \\pm \\sqrt{x - 3}$ or forget to exclude $x = 8$ in part (a). An inverse **function** must output a single $y$ per $x$!',
};

// ---------------------------------------------------------------------------
// Guide 2 (2.6–2.7): Quadratics, Discriminant Δ & Inequalities
// ---------------------------------------------------------------------------

export const MATH_V3_QUAD_DISCRIMINANT_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-quad-discriminant-graph',
  title: 'Quadratics & Discriminant Parameter Explorer (Oxford Ch. 3 + Oct 13 Drill)',
  caption:
    'Vary leading coefficient a, linear b, and constant c to observe Δ = b² − 4ac crossing zero (tangent root) or going negative. Set a = 0 to witness the Grill IB #5a degenerate line collapse!',
  xMin: -8,
  xMax: 8,
  yMin: -8,
  yMax: 10,
  xLabel: 'x',
  yLabel: 'f(x)',
  sliders: [
    { key: 'a', label: 'Leading Coefficient a (or k)', min: -2, max: 3, step: 0.25, defaultValue: 1 },
    { key: 'b', label: 'Linear Coefficient b', min: -6, max: 6, step: 0.5, defaultValue: -4 },
    { key: 'c', label: 'Constant c (y-intercept)', min: -6, max: 6, step: 0.5, defaultValue: 1 },
  ],
  curves: [
    {
      id: 'quad-std',
      label: 'f(x) = ax^2 + bx + c',
      expression: 'a*x^2+b*x+c',
      color: '#4F46E5',
    },
  ],
  tangentX: 2,
  showDerivative: true,
  readouts: [
    { label: 'Discriminant Δ = b^2 - 4ac', expression: 'b^2-4*a*c', format: 'number' },
    {
      label: 'Vertex (-b/2a, f)',
      expression: '-b/(2*a)',
      format: 'coordinate',
      yExpression: 'c-(b^2)/(4*a)',
    },
    { label: 'Sum of Roots -b/a', expression: '-b/a', format: 'number' },
    { label: 'Product of Roots c/a', expression: 'c/a', format: 'number' },
  ],
};

export const MATH_V3_QUAD_FORMS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-quad-forms-matrix',
  title: 'Three Quadratic Forms, Discriminant Cases & Inequality Sign Charts (2.6–2.7)',
  caption:
    'Select the most efficient representation on Paper 1 to read features immediately without wasted expansion.',
  columns: ['Form / Tool', 'Exact Parameters & Feature Readout', 'Best Use Case & Exam Pitfall'],
  rows: [
    {
      criterion: 'Standard / General Form: ax² + bx + c',
      cells: [
        'y-intercept is (0, c); axis of symmetry x = −b/(2a); discriminant Δ = b² − 4ac.',
        'Essential for quadratic formula and discriminant parameter conditions (two curves tangent ⇒ Δ = 0).',
      ],
      ibExamTip: 'On parameter problems like kx² + 4kx − 3 = 0, ALWAYS check k = 0 separately before concluding Δ = 0!',
    },
    {
      criterion: 'Vertex Form: a(x − h)² + k',
      cells: [
        'Vertex is (h, k); axis of symmetry x = h; min k if a > 0, max k if a < 0.',
        'Fastest when given vertex + 1 point (Mock Test 1 Q1 & Mock Test 2 Q1) or proving f(x) > 0 for all x (a > 0, k > 0).',
      ],
      ibExamTip: 'When completing the square on −2x² + 12x − 7, factor −2 ONLY from x-terms: −2[(x − 3)² − 9] − 7 = −2(x − 3)² + 11.',
    },
    {
      criterion: 'Factored / Intercept Form: a(x − p)(x − q)',
      cells: [
        'x-intercepts are (p, 0) and (q, 0); axis of symmetry is exact midpoint x = (p + q)/2.',
        'Fastest when x-intercepts + 1 point are given (Grill IB #4a) and for solving quadratic inequalities.',
      ],
      ibExamTip: 'Never drop the leading multiplier a! Substitute the third point (e.g. y-intercept) to lock a.',
    },
    {
      criterion: 'Quadratic Inequality: ax² + bx + c > 0',
      cells: [
        '1) Move all terms to one side & find critical roots; 2) Sketch "garbage graph" parabola on number line; 3) Read positive/negative intervals.',
        'Disjoint outer regions must be written as "x < p or x > q" (NEVER write invalid chained −5 > x > 1).',
      ],
      ibExamTip: 'Check open (<, >) vs closed (≤, ≥) circles carefully on strict vs non-strict inequalities.',
    },
  ],
};

export const MATH_V3_QUAD_GRILL_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-quad-grill-worked',
  title: 'Worked Example: Discriminant Parameter k = 0 Trap & Quadratic Inequality (2.7)',
  caption:
    'Synthesizes Oct 13 Whiteboard "Grill IB #5" and Chalkboard Inequalities Lesson with full Paper 1 justification.',
  sourceLabel: 'CRHS Oct 13 Whiteboard ("Grill IB")',
  commandTerm: 'Find',
  marks: 7,
  problemMarkdown:
    '**(a)** Find the exact value(s) of $k \\in \\mathbb{R}$ such that the curve $y = kx^2 + 4kx - 3$ has:\n  (i) **exactly one** $x$-intercept;\n  (ii) **two distinct** $x$-intercepts. **[4 marks]**\n\n**(b)** Solve the inequality $3x^2 + 12x - 15 > 0$ analytically without a GDC. **[3 marks]**',
  givenData: [
    { label: 'Curve', value: 'y = kx² + 4kx − 3' },
    { label: 'Coefficients', value: 'a = k, b = 4k, c = −3' },
    { label: 'Inequality', value: '3x² + 12x − 15 > 0' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Compute discriminant Δ(k) = b² − 4ac',
      workingMarkdown:
        'Substitute $a = k$, $b = 4k$, $c = -3$: $\\Delta = (4k)^2 - 4(k)(-3) = 16k^2 + 12k = 4k(4k + 3)$.',
      formulaLatex: '\\Delta = 4k(4k + 3)',
      markCode: 'M1',
      rationale: 'Factoring Δ immediately reveals both critical boundary values k = 0 and k = −3/4.',
    },
    {
      stepNumber: 2,
      title: 'Test k = 0 separately for part (a)(i)!',
      workingMarkdown:
        'Setting $\\Delta = 0$ gives $k = 0$ or $k = -\\frac{3}{4}$. However, when **$k = 0$**, the equation collapses to $y = -3$, a horizontal line with **zero** $x$-intercepts! Reject $k = 0$.',
      formulaLatex: 'k = -\\frac{3}{4} \\quad (\\text{since } k = 0 \\implies y = -3 \\text{ has } 0 \\text{ roots})',
      markCode: 'A1',
      rationale: 'The quadratic formula divides by 2a = 2k, which is invalid when k = 0.',
    },
    {
      stepNumber: 3,
      title: 'Solve Δ > 0 for two distinct x-intercepts in (a)(ii)',
      workingMarkdown:
        'We need $4k(4k + 3) > 0$. Since $4k(4k + 3)$ opens upward with zeros at $k = -\\frac{3}{4}$ and $k = 0$, the product is strictly positive on the outer arms.',
      formulaLatex: 'k < -\\frac{3}{4} \\quad \\text{or} \\quad k > 0',
      markCode: 'M1 A1',
      rationale: 'For k < −3/4 or k > 0, k ≠ 0 is automatically satisfied so the curve is genuinely quadratic with Δ > 0.',
    },
    {
      stepNumber: 4,
      title: 'Solve 3x² + 12x − 15 > 0 via critical roots & sign parabola',
      workingMarkdown:
        'Factor out $3$: $3(x^2 + 4x - 5) > 0 \\implies 3(x + 5)(x - 1) > 0$. Critical roots are $x = -5$ and $x = 1$. Since $a = 3 > 0$, the parabola opens upward and sits above the $x$-axis outside the roots.',
      formulaLatex: 'x < -5 \\quad \\text{or} \\quad x > 1 \\quad (\\,] -\\infty, -5 [ \\cup ] 1, \\infty [\\,)',
      markCode: 'M1 M1 A1',
      rationale: 'Never write "−5 > x > 1"; disjoint intervals require "or" or union notation.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)(i)** $k = -\\frac{3}{4}$ only ($k=0$ rejected); **(a)(ii)** $k < -\\frac{3}{4}$ or $k > 0$.\n**(b)** $x < -5$ or $x > 1$.',
  commonTrapMarkdown:
    'In the Oct 13 Grill IB board key, a common slip is leaving $k = 0$ alongside $k = -\\frac{3}{4}$. Whenever the leading coefficient depends on a parameter, **substitute $a(k) = 0$ directly** into the original equation!',
};

// ---------------------------------------------------------------------------
// Guide 3 (2.11): Function Transformations
// ---------------------------------------------------------------------------

export const MATH_V3_TRANSFORM_COMPOSITE_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-transform-composite-graph',
  title: 'Composite Graph Transformations g(x) = a·f(b(x − h)) + k (Oxford Sec. 3.3 / IB 2.11)',
  caption:
    'Compare parent f(x) = x² (dashed) against g(x) = a·(b(x − h))² + k. Remember Ian Toms’ Sec. 3.3 rule: factor b out first, then apply dilations/reflections BEFORE translations!',
  xMin: -8,
  xMax: 8,
  yMin: -6,
  yMax: 10,
  xLabel: 'x',
  yLabel: 'y',
  sliders: [
    { key: 'a', label: 'Vertical Stretch / Reflect a', min: -2, max: 3, step: 0.5, defaultValue: -1 },
    { key: 'b', label: 'Horizontal Scale b (factor 1/b)', min: 0.5, max: 2, step: 0.5, defaultValue: 1 },
    { key: 'h', label: 'Horizontal Shift h (+right)', min: -4, max: 4, step: 0.5, defaultValue: 2 },
    { key: 'k', label: 'Vertical Shift k (+up)', min: -4, max: 4, step: 0.5, defaultValue: 3 },
  ],
  curves: [
    {
      id: 'transformed',
      label: 'g(x) = a*(b*(x-h))^2 + k',
      expression: 'a*(b*(x-h))^2+k',
      color: '#4F46E5',
    },
    {
      id: 'parent',
      label: 'Parent f(x) = x^2',
      expression: 'x^2',
      dashed: true,
      color: '#0891B2',
    },
  ],
  showDerivative: false,
  readouts: [
    { label: 'Transformed Vertex (h, k)', expression: 'h', format: 'coordinate', yExpression: 'k' },
    { label: 'Horizontal Stretch Factor 1/b', expression: '1/b', format: 'number' },
    { label: 'Vertical Stretch |a|', expression: 'abs(a)', format: 'number' },
    { label: 'g(h + 1/b) image of (1,1)', expression: 'a+k', format: 'number' },
  ],
};

export const MATH_V3_TRANSFORM_MAPPING_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-transform-mapping-matrix',
  title: 'Complete Transformation Dictionary & Coordinate Mapping (Sec. 3.3 / IB 2.11)',
  caption:
    'Use the universal mapping (x, y) ↦ (x/b + h, a·y + k) ONLY after rewriting g(x) = a·f(b(x − h)) + k.',
  columns: ['Equation Transformation', 'Point Map (x, y) ↦', 'Required IB Markscheme Wording'],
  rows: [
    {
      criterion: 'y = f(x − h) + k',
      cells: [
        '(x + h, y + k)',
        'Translation by column vector (h over k): right h if h > 0, up k if k > 0.',
      ],
      ibExamTip: 'Always use the word "translation" (not "shift" or "move") and write the column vector on IB Paper 1!',
    },
    {
      criterion: 'y = −f(x) vs y = f(−x)',
      cells: [
        '(x, −y) vs (−x, y)',
        '−f(x): reflection in the x-axis (y = 0). f(−x): reflection in the y-axis (x = 0).',
      ],
      ibExamTip: 'On reciprocal graphs y = 1/x + q, reflecting the whole curve −f(x) negates BOTH 1/x AND +q!',
    },
    {
      criterion: 'y = a·f(x) (a > 0)',
      cells: [
        '(x, a·y)',
        'Vertical stretch parallel to the y-axis (invariant x-axis) with scale factor a.',
      ],
      ibExamTip: 'Include BOTH the direction ("parallel to y-axis" / "vertical") AND exact scale factor.',
    },
    {
      criterion: 'y = f(bx) (b > 0)',
      cells: [
        '(x/b, y)',
        'Horizontal stretch parallel to the x-axis (invariant y-axis) with scale factor 1/b.',
      ],
      ibExamTip: 'f(2x) has scale factor 1/2 (compression); f(x/3) has scale factor 3 (stretch). NEVER quote scale factor b!',
    },
    {
      criterion: 'Combined y = a·f(b(x − h)) + k',
      cells: [
        '(x/b + h, a·y + k)',
        'Factor b FIRST (e.g. f(2x − 4) = f(2(x − 2))), apply stretches/reflections FIRST, then translate LAST!',
      ],
      ibExamTip: 'Reversing stretch and translation inside f(2x − 4) shifts by 4 instead of 2 — the #1 transformation error.',
    },
  ],
};

export const MATH_V3_TRANSFORM_IBQ_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-transform-ibq-worked',
  title: 'Worked Example: Factoring b Out & Mapping Points/Asymptotes (Handout Sec. 3.3)',
  caption:
    'Models the exact IB Questionbank Transformation Handout wording and point-mapping algebra.',
  sourceLabel: 'Math SL 11 Transformation Handout',
  commandTerm: 'Describe',
  marks: 6,
  problemMarkdown:
    'The point $P(6, -4)$ lies on the graph of $y = f(x)$, and $g(x) = 3f(2x - 4) + 1$.\n\n**(a)** Rewrite $g(x)$ in factored transformation form $a f(b(x - h)) + k$. **[1 mark]**\n**(b)** State a valid sequence of transformations mapping $y = f(x)$ to $y = g(x)$. **[3 marks]**\n**(c)** Find the coordinates of the image point $P\'$ on $y = g(x)$. **[2 marks]**',
  givenData: [
    { label: 'Original Point', value: 'P(6, −4)' },
    { label: 'Target Function', value: 'g(x) = 3f(2x − 4) + 1' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Factor inner coefficient b = 2 out of (2x − 4)',
      workingMarkdown:
        'Factor $2$ inside the argument: $2x - 4 = 2(x - 2)$, giving $g(x) = 3f(2(x - 2)) + 1$. Thus $a = 3$, $b = 2$, $h = 2$, $k = 1$.',
      formulaLatex: 'g(x) = 3f\\bigl(2(x - 2)\\bigr) + 1',
      markCode: 'A1',
      rationale: 'Never read h = 4 directly from 2x − 4; horizontal translation must be read after factoring b.',
    },
    {
      stepNumber: 2,
      title: 'State stretches first, then translation LAST',
      workingMarkdown:
        '1. **Vertical stretch** parallel to the $y$-axis with scale factor **$3$**.\n2. **Horizontal stretch** parallel to the $x$-axis with scale factor **$\\frac{1}{2}$**.\n3. **Translation** by vector $\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ ($2$ units right, $1$ unit up).',
      markCode: 'A1 A1 A1',
      rationale: 'IB markschemes require exact terminology ("scale factor 1/2", "translation [2, 1]") and correct order (dilations before translation).',
    },
    {
      stepNumber: 3,
      title: 'Apply coordinate map (x, y) ↦ (x/b + h, a·y + k)',
      workingMarkdown:
        'Compute $x\' = \\frac{6}{2} + 2 = 3 + 2 = 5$ and $y\' = 3(-4) + 1 = -12 + 1 = -11$. Check: $g(5) = 3f(2(5)-4)+1 = 3f(6)+1 = 3(-4)+1 = -11$.',
      formulaLatex: 'P(6, -4) \\mapsto P\'\\left(\\frac{6}{2} + 2,\\; 3(-4) + 1\\right) = P\'(5, -11)',
      markCode: 'M1 A1',
      rationale: 'Direct substitution back into g(5) verifies that f(6) is evaluated at the exact original x-coordinate 6.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** $g(x) = 3f(2(x - 2)) + 1$; **(b)** Vertical stretch s.f. $3$, horizontal stretch s.f. $\\frac{1}{2}$, then translation $\\binom{2}{1}$; **(c)** $P\'(5, -11)$.',
  commonTrapMarkdown:
    'Applying the horizontal shift of $4$ right BEFORE compressing by $\\frac{1}{2}$ gives $x\' = \\frac{1}{2}(6+4) = 5$ (which works only if you shift by $+4$ before scaling!), whereas shifting by $2$ BEFORE scaling gives the WRONG point $4$. **Factor $b$ and translate LAST** eliminates order ambiguity completely.',
};

// ---------------------------------------------------------------------------
// Guide 4 (2.8): Reciprocal & Linear-Rational Functions
// ---------------------------------------------------------------------------

export const MATH_V3_RATIONAL_ASYMPTOTES_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-rational-asymptotes-graph',
  title: 'Linear-Rational Functions & Dynamic Asymptotes Lab (Oxford Ch. 4 / IB 2.8)',
  caption:
    'Explore f(x) = (a*x + b)/(c*x + d) with live AST-evaluated Vertical Asymptote x = −d/c and Horizontal Asymptote y = a/c. Toggle "Reflect y = x (f⁻¹)" to verify VA and HA swap!',
  xMin: -8,
  xMax: 10,
  yMin: -8,
  yMax: 8,
  xLabel: 'x',
  yLabel: 'y',
  sliders: [
    { key: 'a', label: 'Numerator x coeff a', min: -3, max: 4, step: 0.5, defaultValue: 2 },
    { key: 'b', label: 'Numerator const b', min: -6, max: 6, step: 0.5, defaultValue: 5 },
    { key: 'c', label: 'Denominator x coeff c', min: 1, max: 2, step: 0.5, defaultValue: 1 },
    { key: 'd', label: 'Denominator const d', min: -6, max: 4, step: 0.5, defaultValue: -3 },
  ],
  curves: [
    {
      id: 'rat-main',
      label: 'f(x) = (ax+b)/(cx+d)',
      expression: '(a*x+b)/(c*x+d)',
      color: '#4F46E5',
    },
  ],
  asymptotes: [
    { kind: 'vertical', expression: '-d/c' },
    { kind: 'horizontal', expression: 'a/c' },
  ],
  inverseReflection: {
    enabled: true,
    defaultVisible: false,
    sourceCurveId: 'rat-main',
    label: 'Reflect y = x (f⁻¹)',
  },
  showDerivative: true,
  readouts: [
    { label: 'Vertical Asymptote x = -d/c', expression: '-d/c', format: 'number' },
    { label: 'Horizontal Asymptote y = a/c', expression: 'a/c', format: 'number' },
    { label: 'x-intercept (-b/a)', expression: '-b/a', format: 'number' },
    { label: 'y-intercept (b/d)', expression: 'b/d', format: 'number' },
  ],
};

export const MATH_V3_RATIONAL_FORMS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-rational-forms-matrix',
  title: 'Reciprocal vs Linear-Rational Forms, Holes & Self-Inverse Conditions (2.8)',
  caption:
    'Convert smoothly between transformed hyperbola form, linear-over-linear form, and "mutant" mixed forms.',
  columns: ['Form / Feature', 'Asymptotes & Intercepts', 'Algebraic Conversion & Trap'],
  rows: [
    {
      criterion: 'Transformed Reciprocal: k/(x − h) + q',
      cells: [
        'VA: x = h; HA: y = q; Domain: x ≠ h; Range: y ≠ q.',
        'Sketch dotted asymptotes x = h and y = q FIRST, then draw hyperbola branches in Q1/Q3 if k > 0 or Q2/Q4 if k < 0.',
      ],
      ibExamTip: 'Ch. 4 Ex. 1 Erratum Fix: denominator x − 3 = 0 gives VA x = +3 (NOT −3!).',
    },
    {
      criterion: 'Linear-Rational: (ax + b)/(cx + d)',
      cells: [
        'VA: x = −d/c (set cx + d = 0); HA: y = a/c (leading ratio as |x| → ∞); x-int: −b/a; y-int: b/d.',
        'Long division (or rewriting numerator in terms of cx + d) converts (ax + b)/(cx + d) into q + k/(x − h).',
      ],
      ibExamTip: 'Check ad − bc ≠ 0! If ad − bc = 0, numerator and denominator share a common factor, leaving a horizontal line with a removable HOLE!',
    },
    {
      criterion: 'Inverse f⁻¹(x) of (ax + b)/(cx + d)',
      cells: [
        'f⁻¹(x) = (dx − b)/(−cx + a) with Domain x ≠ a/c and Range y ≠ −d/c.',
        'Notice VA and HA trade values: VA of f becomes HA of f⁻¹ and vice versa.',
      ],
      ibExamTip: 'A linear-rational is self-inverse (f⁻¹ = f) precisely when a + d = 0 (i.e. d = −a), such as (2x + 5)/(x − 2).',
    },
    {
      criterion: '"Mutant" Mixed Form: A − B/(cx + d)',
      cells: [
        'Combine over common denominator: [A(cx + d) − B]/(cx + d) to read x-intercept and linear-rational form cleanly.',
        'Or read VA cx + d = 0 and HA y = A directly!',
      ],
      ibExamTip: 'If solving a rational equation, ALWAYS list excluded x-values before multiplying by the LCD to catch extraneous roots.',
    },
  ],
};

export const MATH_V3_RATIONAL_EXTRANEOUS_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-rational-extraneous-worked',
  title: 'Worked Example: Rational Equation Extraneous Roots & Linear-Rational Inverse (2.8)',
  caption:
    'Demonstrates Ch. 4 Ex. 5 domain-restriction auditing and Ch. 4 Ex. 6 exact inverse derivation.',
  sourceLabel: 'CRHS Ch. 4 Notes (Ex. 1, 5 & 6)',
  commandTerm: 'Solve',
  marks: 8,
  problemMarkdown:
    '**(a)** Solve $\\frac{x}{x - 2} - \\frac{2}{x + 1} = \\frac{6}{x^2 - x - 2}$ analytically. **[4 marks]**\n\n**(b)** Given $f(x) = \\frac{2x + 5}{x - 3}$ ($x \\neq 3$), find $f^{-1}(x)$, state its domain, and write down both asymptotes of $f^{-1}$. **[4 marks]**',
  givenData: [
    { label: 'Equation (a)', value: 'x/(x−2) − 2/(x+1) = 6/(x²−x−2)' },
    { label: 'Function (b)', value: 'f(x) = (2x + 5)/(x − 3)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Factor denominators and record domain restrictions BEFORE clearing fractions',
      workingMarkdown:
        'Factor $x^2 - x - 2 = (x - 2)(x + 1)$. Thus the LCD is $(x - 2)(x + 1)$, requiring **$x \\neq 2$ and $x \\neq -1$**.',
      formulaLatex: '\\text{LCD} = (x - 2)(x + 1), \\quad x \\neq 2,\\; x \\neq -1',
      markCode: 'M1',
      rationale: 'Any candidate root equal to 2 or −1 triggers division by zero in the original equation.',
    },
    {
      stepNumber: 2,
      title: 'Clear denominators, solve quadratic, and audit candidate roots',
      workingMarkdown:
        'Multiply by $(x - 2)(x + 1)$: $x(x + 1) - 2(x - 2) = 6 \\implies x^2 - x + 4 = 6 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0$. Both candidates $x = 2$ and $x = -1$ are **extraneous**, so there are **no real solutions**!',
      formulaLatex: '(x - 2)(x + 1) = 0 \\implies \\text{No real solutions (both excluded)}',
      markCode: 'M1 A1',
      rationale: 'Accepting x = 2 or x = −1 loses the final accuracy mark.',
    },
    {
      stepNumber: 3,
      title: 'Invert f(x) = (2x + 5)/(x − 3) by swapping x and y and collecting y-terms',
      workingMarkdown:
        'Write $x = \\frac{2y + 5}{y - 3} \\implies x(y - 3) = 2y + 5 \\implies xy - 2y = 3x + 5 \\implies y(x - 2) = 3x + 5$.',
      formulaLatex: 'f^{-1}(x) = \\frac{3x + 5}{x - 2}',
      markCode: 'M1 M1 A1',
      rationale: 'Group every y-term on one side before factoring y out.',
    },
    {
      stepNumber: 4,
      title: 'State Domain and Asymptotes of f⁻¹ (verify VA ↔ HA swap)',
      workingMarkdown:
        'For $f(x)$, VA is $x = 3$ (not $-3$!) and HA is $y = 2$. For $f^{-1}(x)$, VA and HA swap: **Domain $x \\neq 2$**, **VA $x = 2$**, and **HA $y = 3$**.',
      formulaLatex: '\\text{Dom}(f^{-1}) = \\{x \\in \\mathbb{R} \\mid x \\neq 2\\}, \\quad \\text{VA: } x = 2, \\quad \\text{HA: } y = 3',
      markCode: 'A1',
      rationale: 'Swapping VA and HA instantly double-checks your algebra.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** No real solutions (both $x = 2$ and $x = -1$ are extraneous).\n**(b)** $f^{-1}(x) = \\frac{3x + 5}{x - 2}$, domain $x \\neq 2$, VA $x = 2$, HA $y = 3$.',
  commonTrapMarkdown:
    'Never ignore domain restrictions when solving rational equations, and remember Ch. 4 Ex. 1: $x - 3 = 0$ gives VA $x = +3$, not $x = -3$.',
};

// ---------------------------------------------------------------------------
// Guide 5 (1.2–1.4, 1.6, 1.8): Sequences, Series, Finance & Proof
// ---------------------------------------------------------------------------

export const MATH_V3_SEQ_FINANCE_GROWTH_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-seq-finance-growth-graph',
  title: 'Arithmetic (Simple) vs Geometric (Compound) Growth Explorer (1.2–1.4)',
  caption:
    'Compare geometric compound interest FV(t) = PV·(1 + r/(100k))^(kt) against arithmetic simple interest PV·(1 + rt/100) over 20 years. Notice how compounding frequency k accelerates exponential divergence!',
  xMin: 0,
  xMax: 20,
  yMin: 0,
  yMax: 1200,
  xLabel: 'Time t (years)',
  yLabel: 'Value ($)',
  sliders: [
    { key: 'p', label: 'Principal PV ($)', min: 100, max: 500, step: 50, defaultValue: 200 },
    { key: 'r', label: 'Nominal Annual Rate r (%)', min: 2, max: 12, step: 1, defaultValue: 6 },
    { key: 'k', label: 'Compounding Periods / yr (k)', min: 1, max: 12, step: 1, defaultValue: 4 },
  ],
  curves: [
    {
      id: 'compound-fv',
      label: 'Compound FV = PV(1 + r/(100k))^(kx)',
      expression: 'p*(1+(r/(100*k)))^(k*x)',
      color: '#4F46E5',
    },
    {
      id: 'simple-fv',
      label: 'Simple Interest PV(1 + r*x/100)',
      expression: 'p*(1+(r/100)*x)',
      dashed: true,
      color: '#059669',
    },
  ],
  showDerivative: false,
  readouts: [
    { label: 'Compound FV at 10 yr', expression: 'p*(1+(r/(100*k)))^(k*10)', format: 'number' },
    { label: 'Simple Value at 10 yr', expression: 'p*(1+(r/100)*10)', format: 'number' },
    {
      label: 'Compound Advantage (10 yr)',
      expression: 'p*(1+(r/(100*k)))^(k*10)-p*(1+(r/100)*10)',
      format: 'number',
    },
    {
      label: 'Effective Annual Rate (%)',
      expression: '((1+(r/(100*k)))^k-1)*100',
      format: 'number',
    },
  ],
};

export const MATH_V3_SEQ_SERIES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-seq-series-matrix',
  title: 'Sequences, Series, Financial Models & Deductive Proof Reference (Oxford Ch. 1)',
  caption:
    'Complete Topic 1.1–1.4, 1.6 & 1.8 formula architecture with convergence criteria and proof rules.',
  columns: ['Model / Subtopic', 'Core Formula(s)', 'Condition & IB Examiner Pitfall'],
  rows: [
    {
      criterion: 'Arithmetic Progression (1.2)',
      cells: [
        'u_n = u_1 + (n − 1)d;  S_n = (n/2)[2u_1 + (n − 1)d] = (n/2)(u_1 + u_n).',
        'Check constant difference d = u_{k+1} − u_k. When solving S_n = target, reject negative or non-integer n!',
      ],
      ibExamTip: 'To show a sequence is arithmetic from S_n, compute u_n = S_n − S_{n−1} and verify u_{n+1} − u_n is constant.',
    },
    {
      criterion: 'Geometric Progression (1.3)',
      cells: [
        'u_n = u_1 r^{n−1};  S_n = u_1(r^n − 1)/(r − 1) = u_1(1 − r^n)/(1 − r) (r ≠ 1).',
        'When solving r^{even} = k, remember BOTH +r and −r unless terms are stated positive!',
      ],
      ibExamTip: 'On sigma sums like Σ_{k=1}^n 3·2^{k−1}, write the first 3 terms first to identify u_1 and r cleanly without off-by-one errors.',
    },
    {
      criterion: 'Infinite Geometric Series (1.8)',
      cells: [
        'S_∞ = u_1 / (1 − r), valid ONLY when |r| < 1 (i.e. −1 < r < 1).',
        'On bouncing-ball total distance problems, count the initial drop ONCE and every rebound UP + DOWN TWICE!',
      ],
      ibExamTip: 'State "|r| < 1" explicitly whenever asked why an infinite sum exists or to find parameter bounds for convergence.',
    },
    {
      criterion: 'Compound Interest & Depreciation (1.4)',
      cells: [
        'FV = PV(1 + r/(100k))^{kn};  Depreciation: FV = PV(1 − r/100)^n;  Real value adjusts by dividing by (1 + i/100)^n.',
        'Annual k = 1, half-yearly k = 2, quarterly k = 4, monthly k = 12. Beware confusing total interest earned (FV − PV) with FV!',
      ],
      ibExamTip: 'Read "after how many COMPLETE years" carefully — round fractional log answers UP (or check table values on GDC).',
    },
    {
      criterion: 'Deductive Algebraic Proof (1.6)',
      cells: [
        'Start explicitly from ONE side (LHS) and transform algebraically step-by-step to match the other (RHS).',
        'NEVER work across the "=" sign assuming the identity is true upfront (circular reasoning)!',
      ],
      ibExamTip: 'To prove algebraic parity/divisibility (e.g. sum of squares of two consecutive odd integers), write (2n+1)² + (2n+3)² cleanly.',
    },
  ],
};

export const MATH_V3_SEQ_COMPOUND_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-seq-compound-worked',
  title: 'Worked Example: Geometric Convergence & Compound Interest vs Depreciation (1.3–1.8)',
  caption:
    'Adapts Oxford Ch. 1 Exam-Style & Practice Paper 2 #9 with both exact logarithmic and GDC verification.',
  sourceLabel: 'Oxford Ch. 1 / Practice Paper 2 #9',
  commandTerm: 'Calculate',
  marks: 8,
  problemMarkdown:
    '**(a)** The second term of a convergent geometric series is $180$ and the sixth term is $\\frac{20}{9}$. Find the common ratio $r$ and the sum to infinity $S_\\infty$. **[4 marks]**\n\n**(b)** Anna invests $\\$200$ at $5\\%$ annual compound interest (compounded annually) while a mountain bike currently worth $\\$350$ depreciates at $6\\%$ per year. Find the number of complete years before Anna can afford the bike. **[4 marks]**',
  givenData: [
    { label: 'Series', value: 'u₂ = 180, u₆ = 20/9, convergent' },
    { label: 'Investment', value: 'PV = $200, r = 5% p.a.' },
    { label: 'Bike Value', value: 'PV = $350, dep = 6% p.a.' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Divide u₆ by u₂ to isolate r⁴ and check both signs',
      workingMarkdown:
        '$\\frac{u_6}{u_2} = \\frac{u_1 r^5}{u_1 r} = r^4 = \\frac{20/9}{180} = \\frac{20}{1620} = \\frac{1}{81}$. Therefore $r = \\pm \\frac{1}{3}$ (both satisfy $|r| < 1$!).',
      formulaLatex: 'r^4 = \\frac{1}{81} \\implies r = \\frac{1}{3} \\;\\text{ or }\\; r = -\\frac{1}{3}',
      markCode: 'M1 A1',
      rationale: 'Both positive and negative even roots exist unless the problem specifies positive terms.',
    },
    {
      stepNumber: 2,
      title: 'Compute u₁ and S_∞ for both valid values of r',
      workingMarkdown:
        'If $r = \\frac{1}{3}$: $u_1 = \\frac{180}{1/3} = 540$, so $S_\\infty = \\frac{540}{1 - 1/3} = 810$.\nIf $r = -\\frac{1}{3}$: $u_1 = \\frac{180}{-1/3} = -540$, so $S_\\infty = \\frac{-540}{1 + 1/3} = -405$.',
      formulaLatex: 'S_\\infty = 810 \\;\\text{ (for } r=\\tfrac{1}{3}) \\quad \\text{or} \\quad S_\\infty = -405 \\;\\text{ (for } r=-\\tfrac{1}{3})',
      markCode: 'M1 A1',
      rationale: 'Explicitly check |r| < 1 so S_∞ = u₁/(1 − r) is justified.',
    },
    {
      stepNumber: 3,
      title: 'Set up compound growth vs depreciation inequality',
      workingMarkdown:
        'After $n$ complete years, Anna’s savings equal $200(1.05)^n$ and the bike’s value equals $350(0.94)^n$. Set $200(1.05)^n \\ge 350(0.94)^n$.',
      formulaLatex: '\\left(\\frac{1.05}{0.94}\\right)^n \\ge \\frac{350}{200} = 1.75',
      markCode: 'M1 A1',
      rationale: 'Combining exponential bases into a single ratio makes taking logs clean.',
    },
    {
      stepNumber: 4,
      title: 'Solve for n via logarithms and round up to complete years',
      workingMarkdown:
        'Take natural logs: $n \\ge \\frac{\\ln(1.75)}{\\ln(1.05/0.94)} \\approx \\frac{0.5596}{0.11066} \\approx 5.057$. Since $n$ must be a complete year ($n=5$ gives $\\$255.26 < \\$256.87$), Anna needs **$6$ complete years** ($\\$268.02 > \\$241.45$).',
      formulaLatex: 'n = 6 \\text{ complete years}',
      markCode: 'M1 A1',
      rationale: 'Always check n = 5 and n = 6 numerically to confirm the crossover year.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** $r = \\pm\\frac{1}{3}$, giving $S_\\infty = 810$ (if $r=\\frac{1}{3}$) or $S_\\infty = -405$ (if $r=-\\frac{1}{3}$).\n**(b)** $6$ complete years.',
  commonTrapMarkdown:
    'Forgetting the negative root $r = -\\frac{1}{3}$ when taking an even root ($r^4 = 1/81$) drops half the solutions, and rounding $5.057$ down to $5$ leaves Anna $\\$1.61$ short of the bike!',
};

// ---------------------------------------------------------------------------
// Guide 6 (1.5, 1.7, 1.9): Exponents, Logarithms & Binomial Theorem
// ---------------------------------------------------------------------------

export const MATH_V3_EXP_LOG_DUALITY_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-exp-log-duality-graph',
  title: 'Exponential–Logarithmic Inverse Duality: y = a^(x − h) vs y = log_a(x) + h (1.5, 1.7)',
  caption:
    'Adjust base a and horizontal shift h to watch f(x) = a^(x − h) and its exact inverse log_a(x) + h = ln(x)/ln(a) + h reflect symmetrically across y = x.',
  xMin: -4,
  xMax: 6,
  yMin: -4,
  yMax: 6,
  xLabel: 'x',
  yLabel: 'y',
  sliders: [
    { key: 'a', label: 'Base a (> 1)', min: 1.5, max: 4, step: 0.5, defaultValue: 2 },
    { key: 'h', label: 'Shift h', min: -2, max: 2, step: 0.5, defaultValue: 0 },
  ],
  curves: [
    {
      id: 'exp-curve',
      label: 'f(x) = a^(x-h)',
      expression: 'a^(x-h)',
      color: '#4F46E5',
    },
    {
      id: 'log-curve',
      label: 'f⁻¹(x) = ln(x)/ln(a) + h',
      expression: 'ln(x)/ln(a)+h',
      color: '#059669',
    },
  ],
  asymptotes: [
    { kind: 'horizontal', expression: '0', label: 'Exp HA: y = 0' },
    { kind: 'vertical', expression: '0', label: 'Log VA: x = 0' },
  ],
  inverseReflection: {
    enabled: true,
    defaultVisible: true,
    sourceCurveId: 'exp-curve',
    label: 'Verify y = x symmetry',
  },
  showDerivative: true,
  readouts: [
    { label: 'Exp y-intercept a^(-h)', expression: 'a^(-h)', format: 'number' },
    { label: 'Log x-intercept a^(-h)', expression: 'a^(-h)', format: 'number' },
    { label: 'Natural factor ln(a)', expression: 'ln(a)', format: 'number' },
    { label: 'Value f(h+1) = a', expression: 'a', format: 'number' },
  ],
};

export const MATH_V3_LOG_BINOMIAL_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-log-binomial-matrix',
  title: 'Exponent Rules, Logarithm Laws, Change of Base & Binomial Theorem (1.5, 1.7, 1.9)',
  caption:
    'Master exact non-GDC Paper 1 algebraic manipulation for powers, logs, and (a + b)^n general terms.',
  columns: ['Topic / Law', 'Exact Identity / Formula', 'Critical Domain & Trap Warning'],
  rows: [
    {
      criterion: 'Rational & Negative Exponents (1.5, 1.7)',
      cells: [
        'a^{m/n} = (ⁿ√a)^m;  a^{−k} = 1/a^k;  (a^m)^n = a^{mn}.',
        'Solve matching-base equations (e.g. 9^{x−1} = 1/27 ⇒ 3^{2x−2} = 3^{−3}) without a GDC.',
      ],
      ibExamTip: 'Distribute negative exponents across ALL factors in a product: (4m^{−1}n)² = 16 n² / m².',
    },
    {
      criterion: 'Logarithm Equivalence & Laws (1.5, 1.7)',
      cells: [
        'a^x = b ⇔ x = log_a(b);  log(xy) = log x + log y;  log(x/y) = log x − log y;  log(x^k) = k log x.',
        'Requires base a > 0, a ≠ 1, and STRICTLY POSITIVE argument x > 0!',
      ],
      ibExamTip: 'Reject any algebraic root that makes an argument inside the ORIGINAL log equation ≤ 0! Never confuse log(x+y) with log x + log y.',
    },
    {
      criterion: 'Change of Base Rule (1.7)',
      cells: [
        'log_b(a) = log_c(a) / log_c(b) = ln(a) / ln(b); in particular log_b(a) = 1 / log_a(b).',
        'Essential when combining logs of different bases (e.g. log₂ x + log₄ x = 6 ⇒ log₂ x + ½ log₂ x = 6).',
      ],
      ibExamTip: 'On Paper 1, leave answers in exact form like x = ln(5)/ln(2) or log₂(5) unless asked for a numeric approximation.',
    },
    {
      criterion: 'Binomial Theorem (1.9)',
      cells: [
        '(a + b)^n = Σ_{r=0}^n C(n, r) a^{n−r} b^r, with C(n, r) = n! / [r!(n − r)!].',
        'To find a single x^k or constant (x⁰) term, set up the general term T_{r+1} and solve the exponent equation for r ∈ {0,…,n}.',
      ],
      ibExamTip: 'In products like (x + 3)(2x − 1)⁶, TWO terms contribute to x⁵: x·(x⁴ term) + 3·(x⁵ term)!',
    },
  ],
};

export const MATH_V3_BINOMIAL_CONSTANT_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-binomial-constant-worked',
  title: 'Worked Example: Binomial Constant Term & Extraneous Logarithmic Equation (1.7, 1.9)',
  caption:
    'Combines Oxford Practice Paper 2 #6 binomial general-term extraction with Paper 1 log-domain auditing.',
  sourceLabel: 'Oxford Paper 2 #6 & Ch. 9 Review',
  commandTerm: 'Find',
  marks: 8,
  problemMarkdown:
    '**(a)** Find the constant term (term independent of $x$) in the expansion of $\\left(x + \\frac{2}{x}\\right)^6$. **[4 marks]**\n\n**(b)** Solve $\\log_3(x - 1) + \\log_3(x + 1) = 1$ without a GDC. **[4 marks]**',
  givenData: [
    { label: 'Expansion', value: '(x + 2/x)⁶, n = 6' },
    { label: 'Log Equation', value: 'log₃(x − 1) + log₃(x + 1) = 1' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Write the general binomial term T_{r+1} for (x + 2x⁻¹)⁶',
      workingMarkdown:
        'Using $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$ with $a = x$, $b = 2x^{-1}$, and $n = 6$: $T_{r+1} = \\binom{6}{r} x^{6-r} (2x^{-1})^r = \\binom{6}{r} 2^r x^{6 - 2r}$.',
      formulaLatex: 'T_{r+1} = \\binom{6}{r} 2^r x^{6 - 2r}',
      markCode: 'M1 A1',
      rationale: 'Collecting the combined power of x as 6 − 2r immediately lets us target any desired exponent.',
    },
    {
      stepNumber: 2,
      title: 'Set exponent of x to zero and evaluate',
      workingMarkdown:
        'For the constant term, $6 - 2r = 0 \\implies r = 3$. Then $\\binom{6}{3} 2^3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} \\times 8 = 20 \\times 8 = 160$.',
      formulaLatex: '\\binom{6}{3} 2^3 = 20 \\times 8 = 160',
      markCode: 'M1 A1',
      rationale: 'Note r = 3 corresponds to the 4th term in the expansion.',
    },
    {
      stepNumber: 3,
      title: 'Combine logs and convert to exponential form in (b)',
      workingMarkdown:
        'First note domain: $x - 1 > 0$ and $x + 1 > 0 \\implies x > 1$. Combine using product rule: $\\log_3\\bigl((x - 1)(x + 1)\\bigr) = 1 \\implies x^2 - 1 = 3^1 = 3$.',
      formulaLatex: 'x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = 2 \\;\\text{ or }\\; x = -2',
      markCode: 'M1 M1',
      rationale: 'Applying log_a(A) + log_a(B) = log_a(AB) before exponentiating turns log into polynomial algebra.',
    },
    {
      stepNumber: 4,
      title: 'Reject extraneous negative root against original log domain',
      workingMarkdown:
        'Substituting $x = -2$ into $\\log_3(x - 1)$ gives $\\log_3(-3)$, which is undefined in $\\mathbb{R}$. Check $x = 2$: $\\log_3(1) + \\log_3(3) = 0 + 1 = 1$. Only $x = 2$ is valid!',
      formulaLatex: 'x = 2 \\quad (x = -2 \\text{ rejected: } x > 1 \\text{ required})',
      markCode: 'A1 A1',
      rationale: 'Stating why x = −2 is rejected explicitly earns full marks.',
    },
  ],
  finalAnswerMarkdown: '**(a)** Constant term is $160$.\n**(b)** $x = 2$ only ($x = -2$ rejected because $\\log_3(-3)$ is undefined).',
  commonTrapMarkdown:
    'Leaving $x = -2$ in part (b) loses the final accuracy mark, and forgetting to raise the $2$ inside $(2/x)^r$ to the power $r$ gives $20$ instead of $160$ in part (a)!',
};

// ---------------------------------------------------------------------------
// Guide 7 (2.9–2.10): Exponential & Logarithmic Models
// ---------------------------------------------------------------------------

export const MATH_V3_EXP_DECAY_ASYMPTOTE_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-exp-decay-asymptote-graph',
  title: 'Exponential Cooling & Decay Model T(t) = a·e^(−kt) + c (Oxford Ch. 9 / IB 2.9–2.10)',
  caption:
    'Model Newton’s Law of Cooling (Haese Ch. 4 #10: T = 4 + 96e^(−0.03t)). Scrub Tangent t₀ to observe how instantaneous cooling rate T\'(t) = −k(T(t) − c) decays toward zero at the ambient asymptote y = c.',
  xMin: 0,
  xMax: 40,
  yMin: 0,
  yMax: 110,
  xLabel: 'Time t (min)',
  yLabel: 'Temperature T (°C)',
  sliders: [
    { key: 'a', label: 'Initial Excess a', min: 20, max: 96, step: 4, defaultValue: 96 },
    { key: 'k', label: 'Decay Constant k', min: 0.02, max: 0.15, step: 0.01, defaultValue: 0.03 },
    { key: 'c', label: 'Ambient Asymptote c', min: 0, max: 30, step: 2, defaultValue: 4 },
  ],
  curves: [
    {
      id: 'cooling-curve',
      label: 'T(x) = a*exp(-k*x) + c',
      expression: 'a*exp(-k*x)+c',
      color: '#4F46E5',
    },
  ],
  asymptotes: [{ kind: 'horizontal', expression: 'c', label: 'Ambient HA: y = c' }],
  tangentX: 10,
  showDerivative: true,
  readouts: [
    { label: 'Initial T(0) = a + c', expression: 'a+c', format: 'number' },
    { label: 'Half-Excess Time ln(2)/k', expression: 'ln(2)/k', format: 'number' },
    { label: 'T at t = 15 min', expression: 'a*exp(-k*15)+c', format: 'number' },
    { label: 'Initial Slope -a*k', expression: '-a*k', format: 'number' },
  ],
};

export const MATH_V3_EXP_LOG_MODELS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-exp-log-models-matrix',
  title: 'Exponential & Logarithmic Curve Features and Real-World Models (2.9–2.10)',
  caption:
    'Compare canonical shapes, asymptotes, domains/ranges, and half-life/doubling equations across Ch. 9.',
  columns: ['Function Family', 'Domain, Range & Asymptotes', 'Key Modeling & Solving Technique'],
  rows: [
    {
      criterion: 'Exponential Growth / Decay: f(x) = A·b^{kx} + c',
      cells: [
        'Domain: x ∈ ℝ; Range: y > c (if A > 0) or y < c (if A < 0); Horizontal Asymptote: y = c.',
        'At x = 0, y = A + c (initial value). Doubling time T_d = ln(2)/k; half-life t_{1/2} = −ln(2)/k.',
      ],
      ibExamTip: 'On Paper 1/2, read the horizontal asymptote c directly as the ambient/limiting value as t → ∞.',
    },
    {
      criterion: 'Natural Exponential: f(x) = e^x',
      cells: [
        'Passes through (0, 1) and (1, e ≈ 2.718); strictly increasing; HA: y = 0.',
        'Unique base where tangent slope equals the y-value itself: d/dx(e^x) = e^x.',
      ],
      ibExamTip: 'Convert e^{2x} − 5e^x + 6 = 0 via substitution u = e^x > 0 to solve quadratic-in-e^x equations!',
    },
    {
      criterion: 'Logarithmic Curve: g(x) = a·ln(x − h) + q',
      cells: [
        'Domain: x > h; Range: y ∈ ℝ; Vertical Asymptote: x = h; x-int where ln(x − h) = −q/a.',
        'Inverse of exponential across y = x; grows ultra-slowly (Richter, decibel, pH scales).',
      ],
      ibExamTip: 'To sketch y = ln(x − 2) + 1, plot VA x = 2 first, then anchor point (3, 1) since ln(1) = 0!',
    },
    {
      criterion: 'Analytical vs GDC Equation Solving (2.10)',
      cells: [
        'Analytical: isolate A·e^{kx} = M and apply ln to both sides. GDC: intersect f₁(x) and f₂(x) when x appears both inside and outside exp/ln.',
        'Equations like e^x = 3x + 2 have NO closed elementary algebraic solution — use GDC intersection!',
      ],
      ibExamTip: 'Always verify that GDC intersections lie within the stated physical context domain (e.g. t ≥ 0).',
    },
  ],
};

export const MATH_V3_COOLING_LOG_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-cooling-log-worked',
  title: 'Worked Example: Cooling Model Exact Logarithm Inversion & Inverse Function (2.9–2.10)',
  caption:
    'Adapted from Haese Ch. 4 Review #10 & Oxford Ch. 9: exact Paper 1 expression vs 3 s.f. Paper 2 evaluation.',
  sourceLabel: 'Haese Ch. 4 Review #10 / Oxford Ch. 9',
  commandTerm: 'Find',
  marks: 7,
  problemMarkdown:
    'The temperature $T$ ($^\\circ\\text{C}$) of a liquid $t$ minutes after being placed in a refrigerator is modelled by $T(t) = 4 + 96 e^{-0.03t}$, $t \\ge 0$.\n\n**(a)** State the initial temperature and the limiting temperature as $t \\to \\infty$. **[2 marks]**\n**(b)** Find the inverse function $t(T)$ giving time in terms of temperature $T$, and state its domain. **[3 marks]**\n**(c)** Find the exact time when $T = 25^\\circ\\text{C}$, and express it to $3$ significant figures. **[2 marks]**',
  givenData: [
    { label: 'Model', value: 'T(t) = 4 + 96e^(−0.03t), t ≥ 0' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Evaluate T(0) and limiting asymptote as t → ∞',
      workingMarkdown:
        'At $t = 0$: $T(0) = 4 + 96 e^0 = 100^\\circ\\text{C}$. As $t \\to \\infty$, $e^{-0.03t} \\to 0$, so $T(t) \\to 4^\\circ\\text{C}$ (refrigerator temperature).',
      formulaLatex: 'T(0) = 100^\\circ\\text{C}, \\quad \\lim_{t \\to \\infty} T(t) = 4^\\circ\\text{C}',
      markCode: 'A1 A1',
      rationale: 'Since T decreases monotonically from 100 down toward 4, the range is 4 < T ≤ 100.',
    },
    {
      stepNumber: 2,
      title: 'Isolate the exponential term and take natural logarithms',
      workingMarkdown:
        'Subtract $4$ and divide by $96$: $e^{-0.03t} = \\frac{T - 4}{96}$. Take $\\ln$ of both sides: $-0.03t = \\ln\\left(\\frac{T - 4}{96}\\right)$.',
      formulaLatex: 't(T) = -\\frac{100}{3}\\ln\\left(\\frac{T - 4}{96}\\right) = \\frac{100}{3}\\ln\\left(\\frac{96}{T - 4}\\right)',
      markCode: 'M1 A1',
      rationale: 'Never apply ln to (4 + 96e^{-0.03t}) term-by-term; isolate the exponential factor FIRST.',
    },
    {
      stepNumber: 3,
      title: 'State the domain of the inverse t(T)',
      workingMarkdown:
        'Since $\\text{Dom}(t) = \\text{Ran}(T)$, the inverse accepts temperatures $4 < T \\le 100$.',
      formulaLatex: '\\text{Dom}(t) = \\{T \\in \\mathbb{R} \\mid 4 < T \\le 100\\}',
      markCode: 'A1',
      rationale: 'The vertical asymptote at T = 4 reflects the horizontal asymptote T = 4 of the original function.',
    },
    {
      stepNumber: 4,
      title: 'Evaluate exact time at T = 25°C',
      workingMarkdown:
        '$t(25) = \\frac{100}{3}\\ln\\left(\\frac{96}{21}\\right) = \\frac{100}{3}\\ln\\left(\\frac{32}{7}\\right) \\approx 50.659\\dots \\approx 50.7\\text{ minutes}$.',
      formulaLatex: 't = \\frac{100}{3}\\ln\\left(\\frac{32}{7}\\right) \\approx 50.7\\text{ min}',
      markCode: 'M1 A1',
      rationale: 'Leaving exact ln(32/7) earns Paper 1 marks; 50.7 min gives the 3 s.f. Paper 2 value.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** Initial $100^\\circ\\text{C}$, limiting $4^\\circ\\text{C}$; **(b)** $t(T) = \\frac{100}{3}\\ln\\left(\\frac{96}{T-4}\\right)$ on $4 < T \\le 100$; **(c)** $\\frac{100}{3}\\ln\\left(\\frac{32}{7}\\right) \\approx 50.7\\text{ min}$.',
  commonTrapMarkdown:
    'A classic error is writing $\\ln(4 + 96e^{-0.03t}) = \\ln 4 + \\ln(96e^{-0.03t})$. Logarithms NEVER distribute over addition!',
};

// ---------------------------------------------------------------------------
// Guide 8 (3.1–3.3): Triangle Trigonometry, 3D Geometry & Mensuration
// ---------------------------------------------------------------------------

export const MATH_V3_TRIG_COSINE_LAW_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-trig-cosine-law-graph',
  title: 'Cosine Rule Side Length c(θ) & Triangle Area ½ab·sin(θ) Explorer (3.2)',
  caption:
    'Adjust sides a and b and track how the third side c(θ) = √(a² + b² − 2ab cos θ) increases from |a − b| to a + b as included angle θ varies from 0 to π radians, while triangle area peaks at θ = π/2.',
  xMin: 0,
  xMax: 3.15,
  yMin: 0,
  yMax: 22,
  xLabel: 'Included angle θ (rad, 0 to π)',
  yLabel: 'Side c / Area',
  sliders: [
    { key: 'a', label: 'Side a', min: 2, max: 7, step: 0.5, defaultValue: 5 },
    { key: 'b', label: 'Side b', min: 2, max: 7, step: 0.5, defaultValue: 6 },
  ],
  curves: [
    {
      id: 'cosine-side',
      label: 'c(θ) = sqrt(a^2 + b^2 - 2ab*cos(x))',
      expression: 'sqrt(a^2+b^2-2*a*b*cos(x))',
      color: '#4F46E5',
    },
    {
      id: 'tri-area',
      label: 'Area A(θ) = 0.5*a*b*sin(x)',
      expression: '0.5*a*b*sin(x)',
      dashed: true,
      color: '#059669',
    },
  ],
  showDerivative: false,
  readouts: [
    { label: 'Hypotenuse at θ = π/2', expression: 'sqrt(a^2+b^2)', format: 'number' },
    { label: 'Side c at θ = π/3 (60°)', expression: 'sqrt(a^2+b^2-a*b)', format: 'number' },
    { label: 'Maximum Area (θ = π/2)', expression: '0.5*a*b', format: 'number' },
    { label: 'Upper Bound a + b', expression: 'a+b', format: 'number' },
  ],
};

export const MATH_V3_TRIG_2D3D_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-trig-2d3d-matrix',
  title: '2D Non-Right Trigonometry & 3D Geometry Decision Protocol (Oxford Ch. 11 / IB 3.1–3.3)',
  caption:
    'Match known triangle and 3D solid parameters immediately to the right IB Formula Booklet tool.',
  columns: ['Given Information / Solid', 'Exact Formula & Rule', 'IB Examiner Check'],
  rows: [
    {
      criterion: 'Sine Rule (AAS, ASA, SSA)',
      cells: [
        'a / sin A = b / sin B = c / sin C;  use when an angle AND its opposite side are known.',
        'SSA Ambiguous Case: sin B = k gives acute B₁ = arcsin(k) AND possible obtuse B₂ = 180° − B₁ if A + B₂ < 180°!',
      ],
      ibExamTip: 'On Paper 2, check Degree vs Radian mode BEFORE pressing sin⁻¹ or cos⁻¹!',
    },
    {
      criterion: 'Cosine Rule (SAS or SSS)',
      cells: [
        'Side: c² = a² + b² − 2ab cos C;  Angle: cos C = (a² + b² − c²) / (2ab).',
        'Cosine uniquely distinguishes acute (cos C > 0) from obtuse (cos C < 0) angles — zero ambiguity!',
      ],
      ibExamTip: 'Store unrounded intermediate side lengths in your TI-nspire memory so later steps stay accurate to 3 s.f.',
    },
    {
      criterion: 'Triangle Area & Bearings (3.2–3.3)',
      cells: [
        'Area = ½ a b sin C (requires TWO sides + INCLUDED angle C). True bearings measured clockwise from North in 3 digits (e.g. 065°).',
        'Alternate interior angles at parallel North arrows give fast bearing-to-triangle interior angles.',
      ],
      ibExamTip: 'Always draw a separate North arrow at EVERY turning vertex in a bearings problem.',
    },
    {
      criterion: '3D Coordinates & Mensuration (3.1, 3.3)',
      cells: [
        'Distance d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²); Pyramid V = ⅓Ah; Cone V = ⅓πr²h, Curved A = πrl; Sphere V = ⁴⁄₃πr³, A = 4πr².',
        'Angle between a line VA and base plane ABCD equals ∠VAO where O is the perpendicular foot of V onto the plane.',
      ],
      ibExamTip: 'Slice 3D solids into labeled 2D right triangles (using diagonal AC or slant height l = √(r² + h²)) before applying trig!',
    },
  ],
};

export const MATH_V3_TRIG_ELEVATION_3D_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-trig-elevation-3d-worked',
  title: 'Worked Example: Double Angle of Elevation & 3D Pyramid Angle (Oxford Paper 2 #4 / Ch. 11)',
  caption:
    'Solves the classic Paper 2 double-observation height problem via both right-triangle algebra and Sine Rule.',
  sourceLabel: 'Oxford Practice Paper 2 #4 & Ch. 11 Opening',
  commandTerm: 'Find',
  marks: 7,
  problemMarkdown:
    '**(a)** From point $A$ on horizontal ground, the angle of elevation to the top $T$ of a vertical cliff $TB$ is $40^\\circ$. Maria runs $5\\text{ m}$ directly away from $B$ along horizontal ground to point $C$, where the angle of elevation to $T$ is now $35^\\circ$. Find the height $h = TB$ to $3$ s.f. **[4 marks]**\n\n**(b)** The Louvre glass pyramid has a square base of side $35\\text{ m}$ and vertical height $21.6\\text{ m}$. Find the angle between a sloping face and the horizontal base to $3$ s.f. **[3 marks]**',
  givenData: [
    { label: 'Angles', value: '∠TAB = 40°, ∠TCB = 35°, AC = 5 m' },
    { label: 'Pyramid', value: 'Square base 35 × 35 m, height 21.6 m' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Set up two right-triangle tangent equations (or Sine Rule in ΔATC)',
      workingMarkdown:
        'Let $AB = x\\text{ m}$. Then $\\tan 40^\\circ = \\frac{h}{x}$ and $\\tan 35^\\circ = \\frac{h}{x + 5}$. Equating $h = x\\tan 40^\\circ = (x+5)\\tan 35^\\circ$ eliminates $h$.',
      formulaLatex: 'x(\\tan 40^\\circ - \\tan 35^\\circ) = 5\\tan 35^\\circ',
      markCode: 'M1 A1',
      rationale: 'Alternatively, in obtuse ΔATC: ∠ATC = 40° − 35° = 5°, so AT = 5 sin(35°)/sin(5°).',
    },
    {
      stepNumber: 2,
      title: 'Solve for x and height h to full GDC precision before rounding',
      workingMarkdown:
        '$x = \\frac{5\\tan 35^\\circ}{\\tan 40^\\circ - \\tan 35^\\circ} \\approx 25.206\\dots\\text{ m}$. Therefore $h = x\\tan 40^\\circ \\approx 21.150\\dots \\approx 21.2\\text{ m}$.',
      formulaLatex: 'h \\approx 21.2\\text{ m (3 s.f.)}',
      markCode: 'M1 A1',
      rationale: 'Keep full GDC precision for x = 25.206... before multiplying by tan(40°).',
    },
    {
      stepNumber: 3,
      title: 'Extract the 2D right triangle for face-to-base angle of the pyramid',
      workingMarkdown:
        'Drop the vertical apex height $h = 21.6\\text{ m}$ to base centre $O$. The horizontal perpendicular distance from $O$ to the midpoint $M$ of a base edge is half the side length: $OM = \\frac{35}{2} = 17.5\\text{ m}$.',
      formulaLatex: '\\tan\\theta = \\frac{21.6}{17.5}',
      markCode: 'M1 A1',
      rationale: 'Face-to-base angle uses half the side (17.5 m), NOT half the base diagonal (17.5√2 m — which gives edge-to-base angle!).',
    },
    {
      stepNumber: 4,
      title: 'Evaluate angle θ in degrees to 3 s.f.',
      workingMarkdown: '$\\theta = \\arctan\\left(\\frac{21.6}{17.5}\\right) \\approx 50.988^\\circ \\approx 51.0^\\circ$.',
      formulaLatex: '\\theta \\approx 51.0^\\circ',
      markCode: 'A1',
      rationale: 'Check GDC is in DEGREE mode; 51.0° requires the trailing zero for 3 significant figures.',
    },
  ],
  finalAnswerMarkdown: '**(a)** Height $h \\approx 21.2\\text{ m}$.\n**(b)** Face-to-base angle $\\theta \\approx 51.0^\\circ$.',
  commonTrapMarkdown:
    'In 3D pyramid problems, mixing up the **face-to-base angle** (uses midpoint distance $s/2 = 17.5$) with the **edge-to-base angle** (uses half-diagonal $s\\sqrt{2}/2 \\approx 24.75$) is the most frequent Paper 2 geometry mistake.',
};

// ---------------------------------------------------------------------------
// Guide 9 (3.4–3.8): Radians, Unit Circle, Identities & Circular Functions
// ---------------------------------------------------------------------------

export const MATH_V3_CIRCULAR_SINUSOID_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-circular-sinusoid-graph',
  title: 'Circular Sinusoid Modeler: f(x) = a·sin(b(x − c)) + d (Oxford Ch. 12 / IB 3.7)',
  caption:
    'Adjust amplitude |a|, frequency b (period T = 2π/b), phase shift c, and principal axis d against parent y = sin(x) (dashed). Toggle f\'(x) Curve to confirm derivative phase lead!',
  xMin: -3.2,
  xMax: 9.5,
  yMin: -6,
  yMax: 6,
  xLabel: 'x (radians)',
  yLabel: 'y',
  sliders: [
    { key: 'a', label: 'Amplitude scalar a', min: -3, max: 3, step: 0.5, defaultValue: 2 },
    { key: 'b', label: 'Frequency b (Period 2π/b)', min: 0.5, max: 3, step: 0.5, defaultValue: 1 },
    { key: 'c', label: 'Phase shift c (+right)', min: -2, max: 2, step: 0.5, defaultValue: 0 },
    { key: 'd', label: 'Principal axis d', min: -3, max: 3, step: 0.5, defaultValue: 1 },
  ],
  curves: [
    {
      id: 'sinusoid',
      label: 'f(x) = a*sin(b*(x-c)) + d',
      expression: 'a*sin(b*(x-c))+d',
      color: '#4F46E5',
    },
    {
      id: 'sin-parent',
      label: 'Parent sin(x)',
      expression: 'sin(x)',
      dashed: true,
      color: '#0891B2',
    },
  ],
  asymptotes: [{ kind: 'horizontal', expression: 'd', label: 'Principal axis y = d' }],
  tangentX: 0,
  showDerivative: true,
  readouts: [
    { label: 'Amplitude |a|', expression: 'abs(a)', format: 'number' },
    { label: 'Period 2*pi/b', expression: '2*pi/b', format: 'number' },
    { label: 'Maximum d + |a|', expression: 'd+abs(a)', format: 'number' },
    { label: 'Minimum d - |a|', expression: 'd-abs(a)', format: 'number' },
  ],
};

export const MATH_V3_TRIG_IDENTITIES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-trig-identities-matrix',
  title: 'Radians, Unit Circle Exact Values, Identities & Equation Domain Scaling (3.4–3.8)',
  caption:
    'Complete reference linking radian geometry, CAST symmetry, double-angle reductions, and finite-interval solving.',
  columns: ['Topic / Identity', 'Exact Formula / Ratio Table', 'Paper 1 & 2 Exam Strategy'],
  rows: [
    {
      criterion: 'Radian Arc, Sector & Segment (3.4)',
      cells: [
        'π rad = 180°;  l = rθ;  A_sector = ½r²θ;  A_segment = ½r²(θ − sin θ) (θ in radians!).',
        'Verify your GDC is in RADIAN mode before evaluating ½r²(θ − sin θ) or sinusoidal models.',
      ],
      ibExamTip: 'Perimeter of a sector = 2r + rθ (do NOT forget the two straight radii!).',
    },
    {
      criterion: 'Unit Circle & Exact Ratios (3.5)',
      cells: [
        'Point (cos θ, sin θ), tan θ = sin θ / cos θ. sin(π/6)=½, sin(π/4)=√2/2, sin(π/3)=√3/2; cos reverses.',
        'CAST signs: Q1 All+, Q2 Sin+, Q3 Tan+, Q4 Cos+. Symmetry: sin(π − θ) = sin θ, cos(−θ) = cos θ.',
      ],
      ibExamTip: 'Memorize the 0, π/6, π/4, π/3, π/2 table — these exact values are NOT printed in the AA SL Formula Booklet!',
    },
    {
      criterion: 'Pythagorean & Double-Angle Identities (3.6)',
      cells: [
        'cos²θ + sin²θ = 1;  sin 2θ = 2 sin θ cos θ;  cos 2θ = cos²θ − sin²θ = 2 cos²θ − 1 = 1 − 2 sin²θ.',
        'When given sin θ = 3/5 and obtuse θ ∈ (π/2, π), find cos θ = −4/5 using Q2 sign BEFORE computing sin 2θ!',
      ],
      ibExamTip: 'Pick whichever form of cos 2θ matches the remaining linear trig function (e.g. 1 − 2sin²x if sin x is also present).',
    },
    {
      criterion: 'Sinusoids & Multiple-Angle Equations (3.7–3.8)',
      cells: [
        'Amplitude |a| = (Max−Min)/2, Axis d = (Max+Min)/2, b = 2π/Period. tan(bx) has period π/b & VA at x = π/(2b).',
        'To solve sin(2x) = k on 0 ≤ x ≤ 2π, FIRST scale the target domain to 0 ≤ 2x ≤ 4π so you capture ALL 4 roots!',
      ],
      ibExamTip: 'Always divide by b LAST after listing every coterminal angle inside the scaled interval!',
    },
  ],
};

export const MATH_V3_TRIG_DOUBLE_ANGLE_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-trig-double-angle-worked',
  title: 'Worked Example: Double-Angle Quadratic Trig Equation & Quadrant Sign Audit (3.5–3.8)',
  caption:
    'Paper 1 Non-GDC exact solution method from Haese Ch. 11 & Oxford Ch. 12.',
  sourceLabel: 'Oxford Ch. 12 / Haese Ch. 11 Review',
  commandTerm: 'Solve',
  marks: 8,
  problemMarkdown:
    '**(a)** Given $\\sin\\theta = \\frac{3}{5}$ and $\\frac{\\pi}{2} < \\theta < \\pi$, find the exact values of $\\cos\\theta$ and $\\sin 2\\theta$. **[3 marks]**\n\n**(b)** Solve $\\cos 2x + 3\\sin x - 2 = 0$ for $0 \\le x \\le 2\\pi$ without a GDC. **[5 marks]**',
  givenData: [
    { label: 'Quadrant (a)', value: 'π/2 < θ < π (Q2: Sin +, Cos −)' },
    { label: 'Interval (b)', value: '0 ≤ x ≤ 2π (radians)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Apply Pythagorean identity with Q2 sign for cos θ',
      workingMarkdown:
        '$\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$. Because $\\theta \\in (\\frac{\\pi}{2}, \\pi)$ (Quadrant 2), $\\cos\\theta < 0$, so $\\cos\\theta = -\\frac{4}{5}$.',
      formulaLatex: '\\cos\\theta = -\\frac{4}{5} \\implies \\sin 2\\theta = 2\\left(\\frac{3}{5}\\right)\\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}',
      markCode: 'M1 A1 A1',
      rationale: 'Omitting the negative sign in Q2 flips the sign of sin 2θ.',
    },
    {
      stepNumber: 2,
      title: 'Replace cos 2x with (1 − 2sin²x) to unify the trig ratio',
      workingMarkdown:
        'Substitute $\\cos 2x = 1 - 2\\sin^2 x$ into $\\cos 2x + 3\\sin x - 2 = 0$: $(1 - 2\\sin^2 x) + 3\\sin x - 2 = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0$.',
      formulaLatex: '2\\sin^2 x - 3\\sin x + 1 = 0',
      markCode: 'M1 A1',
      rationale: 'Choosing 1 − 2sin²x converts a mixed cos 2x / sin x equation into a pure quadratic in sin x.',
    },
    {
      stepNumber: 3,
      title: 'Factor quadratic in sin x cleanly',
      workingMarkdown:
        'Factor $(2\\sin x - 1)(\\sin x - 1) = 0$, giving $\\sin x = \\frac{1}{2}$ or $\\sin x = 1$.',
      formulaLatex: '\\sin x = \\frac{1}{2} \\quad \\text{or} \\quad \\sin x = 1',
      markCode: 'M1',
      rationale: 'Check both branches lie within the valid range [−1, 1].',
    },
    {
      stepNumber: 4,
      title: 'Read exact unit-circle angles inside [0, 2π]',
      workingMarkdown:
        '$\\sin x = \\frac{1}{2}$ gives $x = \\frac{\\pi}{6}$ (Q1) and $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (Q2). $\\sin x = 1$ gives $x = \\frac{\\pi}{2}$.',
      formulaLatex: 'x \\in \\left\\{\\frac{\\pi}{6},\\; \\frac{\\pi}{2},\\; \\frac{5\\pi}{6}\\right\\}',
      markCode: 'A1 A1',
      rationale: 'Give answers strictly in radians since the domain [0, 2π] is specified in radians.',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** $\\cos\\theta = -\\frac{4}{5}$, $\\sin 2\\theta = -\\frac{24}{25}$.\n**(b)** $x = \\frac{\\pi}{6},\\; \\frac{\\pi}{2},\\; \\frac{5\\pi}{6}$.',
  commonTrapMarkdown:
    'On Paper 1, students often drop the Q2 solution $x = \\frac{5\\pi}{6}$ or give degree answers ($30^\\circ, 90^\\circ, 150^\\circ$) when the interval is written in radians $[0, 2\\pi]$.',
};

// ---------------------------------------------------------------------------
// Guide 10 (4.1–4.12): Statistics, Regression, Probability, Binomial & Normal
// ---------------------------------------------------------------------------

export const MATH_V3_NORMAL_PDF_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-normal-pdf-graph',
  title: 'Interactive Normal Distribution X ~ N(μ, σ²) & Probability Integral Lab (4.9, 4.12)',
  caption:
    'Adjust mean μ and standard deviation σ, then drag integral bounds [a, b] to compute real Normal probabilities P(a ≤ X ≤ b) directly via Simpson’s rule (μ = 0, σ = 1, [−1, 1] → 0.683; [−2, 2] → 0.954!).',
  xMin: -6,
  xMax: 10,
  yMin: -0.05,
  yMax: 0.85,
  xLabel: 'x',
  yLabel: 'Probability Density f(x)',
  sliders: [
    { key: 'mu', label: 'Mean μ', min: -2, max: 4, step: 0.5, defaultValue: 0 },
    { key: 'sd', label: 'Std Dev σ', min: 0.5, max: 2.5, step: 0.25, defaultValue: 1 },
  ],
  curves: [
    {
      id: 'normal-pdf',
      label: 'f(x) = (1/(sd*sqrt(2*pi)))*exp(-0.5*((x-mu)/sd)^2)',
      expression: '(1/(sd*sqrt(2*pi)))*exp(-0.5*((x-mu)/sd)^2)',
      color: '#4F46E5',
    },
  ],
  integralBounds: {
    a: -1,
    b: 1,
    label: 'Normal Probability P(a ≤ X ≤ b) = ∫ pdf dx',
  },
  showDerivative: false,
  readouts: [
    { label: 'Peak Density f(μ)', expression: '1/(sd*sqrt(2*pi))', format: 'number' },
    { label: '68.3% Lower (μ − σ)', expression: 'mu-sd', format: 'number' },
    { label: '68.3% Upper (μ + σ)', expression: 'mu+sd', format: 'number' },
    { label: 'Variance σ^2', expression: 'sd^2', format: 'number' },
  ],
};

export const MATH_V3_STATS_PROB_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-stats-prob-matrix',
  title: 'Statistics, Bivariate Regression & Probability Distributions Matrix (4.1–4.12)',
  caption:
    'High-yield IB Paper 1 & Paper 2 rules across sampling, linear transforms, regression, trees, Binomial, and Normal.',
  columns: ['Topic / Distribution', 'Core Formula & Conditions', 'Critical IB Examiner Trap'],
  rows: [
    {
      criterion: 'Outliers & Linear Scaling (4.1, 4.3)',
      cells: [
        'Outlier if x < Q₁ − 1.5·IQR or x > Q₃ + 1.5·IQR. Under y = ax + b: mean = a·x̄ + b, SD_y = |a|·SD_x, Var_y = a²·Var_x.',
        'Adding a constant b shifts Mean/Median/Q₁/Q₃ by +b, while Range, IQR, and SD stay UNCHANGED!',
      ],
      ibExamTip: 'Always read cumulative frequency curves at UPPER class boundaries, and estimate grouped means using mid-interval values.',
    },
    {
      criterion: 'Regression y on x vs x on y (4.4, 4.10)',
      cells: [
        'Line y = ax + b passes through mean point (x̄, ȳ). Use y on x ONLY to predict y from x; compute x on y to predict x from y!',
        'Pearson r ∈ [−1, 1] measures LINEAR strength only. Extrapolating outside observed domain or inferring causation loses marks.',
      ],
      ibExamTip: 'NEVER rearrange the y-on-x line to solve for x unless r = ±1; run linear regression of x on y on your GDC!',
    },
    {
      criterion: 'Probability Laws & Conditioning (4.5, 4.6, 4.11)',
      cells: [
        'P(A ∪ B) = P(A) + P(B) − P(A ∩ B);  P(A|B) = P(A ∩ B)/P(B).',
        'Mutually exclusive: P(A ∩ B) = 0. Independent: P(A ∩ B) = P(A)·P(B) (two non-empty events CANNOT be both!).',
      ],
      ibExamTip: 'For "without replacement" trees, decrement BOTH numerator and total denominator on the second branch.',
    },
    {
      criterion: 'Discrete RV & Binomial B(n, p) (4.7, 4.8)',
      cells: [
        'Σ P(X=x) = 1; E(X) = Σ x·P(X=x) (fair game ⇒ E(net)=0). For X ~ B(n, p): E(X) = np, Var(X) = np(1 − p).',
        'Strict inequality P(X > 6) on integers means P(X ≥ 7) = 1 − P(X ≤ 6) = 1 − binomCdf(n, p, 6)!',
      ],
      ibExamTip: 'Off-by-one errors between binomCdf(..., 6) and binomCdf(..., 7) are the #1 GDC Binomial mistake.',
    },
    {
      criterion: 'Normal Distribution & Z-Scores (4.9, 4.12)',
      cells: [
        'X ~ N(μ, σ²); Z = (X − μ)/σ ~ N(0, 1). 68.3% within μ ± 1σ, 95.4% within μ ± 2σ.',
        'In invNorm(area, 0, 1), ALWAYS feed the LEFT-TAIL area P(Z < z)! If given P(X > a) = 0.2, use area = 0.8.',
      ],
      ibExamTip: 'Notice IB notation N(μ, σ²) writes VARIANCE σ² as the second parameter — take √σ² to get σ before entering into GDC!',
    },
  ],
};

export const MATH_V3_PROB_NORMAL_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-prob-normal-worked',
  title: 'Worked Example: Conditional Binomial & Unknown (μ, σ) Normal Standardization (4.8–4.12)',
  caption:
    'Solves Oxford Practice Paper 2 #3 and Paper 1/2 simultaneous z-score standardization cleanly.',
  sourceLabel: 'Oxford Practice Paper 2 #3 & Answers p. 714',
  commandTerm: 'Calculate',
  marks: 10,
  problemMarkdown:
    '**(a)** Abi plants $10$ seeds; each seed independently grows into a plant with probability $0.8$. Let $X$ be the number of seeds that grow.\n  (i) Calculate $P(X = 7)$ and $P(X > 6)$ to $3$ s.f.\n  (ii) Given that $X > 6$, find the conditional probability $P(X = 7 \\mid X > 6)$. **[5 marks]**\n\n**(b)** Test scores $Y \\sim N(\\mu, \\sigma^2)$ satisfy $P(Y < 40) = 0.20$ and $P(Y > 82) = 0.10$. Find $\\mu$ and $\\sigma$ to $3$ s.f. **[5 marks]**',
  givenData: [
    { label: 'Binomial', value: 'X ~ B(10, 0.8)' },
    { label: 'Normal', value: 'P(Y < 40) = 0.20, P(Y > 82) = 0.10' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Compute P(X = 7) and P(X > 6) via B(10, 0.8)',
      workingMarkdown:
        'Using `binomPdf(10, 0.8, 7)`: $P(X = 7) = \\binom{10}{7}(0.8)^7(0.2)^3 = 0.201326\\dots \\approx 0.201$.\nFor $P(X > 6) = P(X \\ge 7) = 1 - P(X \\le 6) = 1 - \\text{binomCdf}(10, 0.8, 6) = 0.879126\\dots \\approx 0.879$.',
      formulaLatex: 'P(X = 7) \\approx 0.201, \\quad P(X > 6) = 1 - P(X \\le 6) \\approx 0.879',
      markCode: 'A1 M1 A1',
      rationale: 'Store unrounded probabilities in the GDC before dividing in the next step.',
    },
    {
      stepNumber: 2,
      title: 'Apply conditional probability formula P(X=7 | X>6)',
      workingMarkdown:
        'Because $\{X = 7\} \\subset \{X > 6\}$, the intersection $(X = 7) \\cap (X > 6)$ is simply $(X = 7)$. Divide unrounded values: $\\frac{0.201326\\dots}{0.879126\\dots} = 0.229007\\dots \\approx 0.229$.',
      formulaLatex: 'P(X = 7 \\mid X > 6) = \\frac{P(X = 7)}{P(X > 6)} = \\frac{0.201326\\dots}{0.879126\\dots} \\approx 0.229',
      markCode: 'M1 A1',
      rationale: 'Dividing rounded 0.201/0.879 gives 0.22867 -> 0.229, so keeping full precision protects 3 s.f. accuracy.',
    },
    {
      stepNumber: 3,
      title: 'Standardize both Normal bounds using left-tail invNorm',
      workingMarkdown:
        'For $P(Y < 40) = 0.20$: $z_1 = \\text{invNorm}(0.20, 0, 1) \\approx -0.841621$, so $\\frac{40 - \\mu}{\\sigma} = -0.841621$.\nFor $P(Y > 82) = 0.10 \\implies P(Y < 82) = 0.90$: $z_2 = \\text{invNorm}(0.90, 0, 1) \\approx +1.281552$, so $\\frac{82 - \\mu}{\\sigma} = 1.281552$.',
      formulaLatex: '40 - \\mu = -0.8416\\sigma, \\qquad 82 - \\mu = 1.2816\\sigma',
      markCode: 'M1 A1 A1',
      rationale: 'Remember invNorm takes the cumulative LEFT-tail area 0.90, NOT right-tail 0.10!',
    },
    {
      stepNumber: 4,
      title: 'Solve the linear system simultaneously for σ and μ',
      workingMarkdown:
        'Subtract the first equation from the second: $82 - 40 = (1.281552 - (-0.841621))\\sigma \\implies 42 = 2.12317\\sigma \\implies \\sigma \\approx 19.782 \\approx 19.8$.\nThen $\\mu = 40 + 0.841621(19.782) \\approx 56.649 \\approx 56.6$.',
      formulaLatex: '\\mu \\approx 56.6, \\quad \\sigma \\approx 19.8',
      markCode: 'M1 A1',
      rationale: 'Verify sanity: μ = 56.6 lies between 40 and 82, closer to 40 since 0.20 > 0.10!',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** $P(X=7) \\approx 0.201$, $P(X>6) \\approx 0.879$, $P(X=7 \\mid X>6) \\approx 0.229$.\n**(b)** $\\mu \\approx 56.6$, $\\sigma \\approx 19.8$.',
  commonTrapMarkdown:
    'Two classic Paper 2 traps: computing `binomCdf(10, 0.8, 7)` instead of `6` inside $1 - P(X \\le 6)$, and feeding $0.10$ instead of $0.90$ into `invNorm` for an upper-tail probability.',
};

// ---------------------------------------------------------------------------
// Guide 11 (5.1–5.11): Full Differential & Integral Calculus Foundations
// ---------------------------------------------------------------------------

export const MATH_V3_CALC_DERIVATIVE_EXTREMA_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-calc-derivative-extrema-graph',
  title: 'Cubic Curve f(x) vs Live Derivative f\'(x) — Extrema, Tangent & Inflection Lab (5.1–5.8)',
  caption:
    'Inspect f(x) = a*x³ + b*x² + c*x + d alongside its live central-difference derivative f\'(x) (amber dashed). Notice how zeros of f\'(x) align with local max/min of f(x), and the vertex of f\'(x) marks the inflection point x = −b/(3a)!',
  xMin: -4,
  xMax: 5,
  yMin: -10,
  yMax: 10,
  xLabel: 'x',
  yLabel: 'f(x) & f\'(x)',
  sliders: [
    { key: 'a', label: 'Cubic coeff a', min: 0.25, max: 1.5, step: 0.25, defaultValue: 0.5 },
    { key: 'b', label: 'Quadratic coeff b', min: -3, max: 3, step: 0.5, defaultValue: -1.5 },
    { key: 'c', label: 'Linear coeff c', min: -4, max: 4, step: 0.5, defaultValue: 0 },
    { key: 'd', label: 'Constant d', min: -4, max: 4, step: 0.5, defaultValue: 2 },
  ],
  curves: [
    {
      id: 'cubic-f',
      label: 'f(x) = ax^3 + bx^2 + cx + d',
      expression: 'a*x^3+b*x^2+c*x+d',
      color: '#4F46E5',
    },
  ],
  tangentX: 2,
  showDerivative: true,
  defaultShowDerivative: true,
  readouts: [
    { label: 'Inflection x = -b/(3a)', expression: '-b/(3*a)', format: 'number' },
    { label: 'Discriminant of f\' (4b^2-12ac)', expression: '4*b^2-12*a*c', format: 'number' },
    { label: 'y-intercept d', expression: 'd', format: 'number' },
    { label: 'Initial Slope f\'(0) = c', expression: 'c', format: 'number' },
  ],
};

export const MATH_V3_CALC_INTEGRAL_AREA_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-v3-calc-integral-area-graph',
  title: 'Definite Integral vs Geometric Area Lab: Signed ∫ f(x) dx vs Total ∫ |f(x)| dx (5.9–5.11)',
  caption:
    'With c = 0 on [0, 4], positive area on [0, 2] (indigo, +2) cancels negative area on [2, 4] (rose, −2): Signed ∫ = 0 while Total Area = 4! Adjust vertical shift c and bounds [a, b] to explore cancellation and kinematics distance!',
  xMin: -1,
  xMax: 5,
  yMin: -6,
  yMax: 6,
  xLabel: 'x (or time t)',
  yLabel: 'f(x) (or velocity v(t))',
  sliders: [
    { key: 'a', label: 'Amplitude scalar a', min: 0.25, max: 1, step: 0.25, defaultValue: 0.5 },
    { key: 'c', label: 'Vertical shift c', min: -3, max: 3, step: 0.5, defaultValue: 0 },
  ],
  curves: [
    {
      id: 'signed-area-fn',
      label: 'f(x) = a*x*(x-2)*(x-4) + c',
      expression: 'a*x*(x-2)*(x-4)+c',
      color: '#4F46E5',
    },
  ],
  integralBounds: {
    a: 0,
    b: 4,
    label: 'Signed ∫₀⁴ f(x) dx vs Total Area ∫₀⁴ |f(x)| dx',
  },
  showDerivative: true,
  defaultShowDerivative: false,
  readouts: [
    { label: 'Shift / f(0) = c', expression: 'c', format: 'number' },
    { label: 'Value f(2) = c', expression: 'c', format: 'number' },
    { label: 'Peak height at 2-2/sqrt(3)', expression: 'a*1.5396*2+c', format: 'number' },
    { label: 'Amplitude factor a', expression: 'a', format: 'number' },
  ],
};

export const MATH_V3_CALC_RULES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'math-v3-calc-rules-matrix',
  title: 'Complete IB AA SL Calculus Reference: Rules, Curve Shape, Kinematics & Integration (5.1–5.11)',
  caption:
    'Every differentiation and integration rule required on Paper 1 & Paper 2, paired with top examiner error checks.',
  columns: ['Topic / Rule', 'Exact Calculus Formula(s)', 'IB Paper 1 & 2 Examiner Check'],
  rows: [
    {
      criterion: 'Power, Chain, Product & Quotient Rules (5.3, 5.6)',
      cells: [
        'd/dx(x^n) = n x^{n−1};  Chain: (f(g(x)))′ = f′(g(x))·g′(x);  Product: (uv)′ = u′v + uv′;  Quotient: (u/v)′ = (u′v − uv′)/v².',
        'Transcendentals: (e^x)′ = e^x,  (ln x)′ = 1/x,  (sin x)′ = cos x,  (cos x)′ = −sin x.',
      ],
      ibExamTip: 'Rewrite 1/(x³) = x⁻³ and √x = x^{1/2} BEFORE differentiating! Never forget the inner derivative factor g′(x) in sin(2x) or e^{4x}.',
    },
    {
      criterion: 'Tangents, Normals & Curve Analysis (5.4, 5.7, 5.8)',
      cells: [
        'm_T = f′(x₀), m_N = −1/f′(x₀). Increasing: f′ > 0; Stationary: f′(c) = 0; Concave up: f″ > 0.',
        'Inflection point requires f″(c) = 0 AND a verified sign change in f″ across c!',
      ],
      ibExamTip: 'If f′(c) = 0 and f″(c) = 0 (like y = x⁴ at 0), the second derivative test is inconclusive — revert to f′ sign chart!',
    },
    {
      criterion: 'Kinematics: s ↔ v ↔ a (5.9)',
      cells: [
        'v = ds/dt, a = dv/dt = d²s/dt². Displacement = ∫_{t₁}^{t₂} v(t) dt; Total Distance = ∫_{t₁}^{t₂} |v(t)| dt.',
        'Particle speeds up when v(t) and a(t) share the SAME sign; reverses direction when v(t) changes sign through 0.',
      ],
      ibExamTip: 'Never equate total distance to displacement when v(t) changes sign inside [t₁, t₂] — split the integral at v(t) = 0 or integrate |v(t)|!',
    },
    {
      criterion: 'Antiderivatives, Substitution & Areas (5.5, 5.10, 5.11)',
      cells: [
        '∫ x^n dx = x^{n+1}/(n+1) + C (n ≠ −1);  ∫ (1/x) dx = ln|x| + C;  ∫ sin x dx = −cos x + C;  ∫ cos x dx = sin x + C;  ∫ e^x dx = e^x + C.',
        'Area between curves: ∫_a^b (y_upper − y_lower) dx; find limits a, b by solving y_upper = y_lower.',
      ],
      ibExamTip: 'In linear substitution ∫ f(ax + b) dx, divide by a! In definite u-substitution, convert x-limits to u-limits so you never back-substitute.',
    },
  ],
};

export const MATH_V3_CALC_OPTIMIZATION_SUB_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'math-v3-calc-optimization-sub-worked',
  title: 'Worked Example: Minimum-Time Optimization & Exact Substitution Integral (5.6, 5.8, 5.10–5.11)',
  caption:
    'Full Paper 1 Non-GDC solutions adapted directly from Oxford Practice Paper 1 #7 and #10.',
  sourceLabel: 'Oxford Practice Paper 1 #7 & #10',
  commandTerm: 'Find',
  marks: 11,
  problemMarkdown:
    '**(a)** Evaluate $\\int_0^4 \\frac{1}{2x + 1}\\,dx$, giving your exact answer in the form $\\ln k$ where $k \\in \\mathbb{Z}$. **[4 marks]**\n\n**(b)** A farmer at point $A$, $2\\text{ km}$ south of point $B$ on an east–west road, drives across a field at $12\\text{ km h}^{-1}$ to reach the road at point $P$ ($x\\text{ km}$ east of $B$, $0 \\le x \\le 2$), then drives along the road to $C$ ($2\\text{ km}$ east of $B$) at $20\\text{ km h}^{-1}$. Total travel time is $T(x) = \\frac{\\sqrt{4 + x^2}}{12} + \\frac{2 - x}{20}$. Use calculus to find the exact value of $x$ minimizing $T(x)$. **[7 marks]**',
  givenData: [
    { label: 'Integral (a)', value: '∫₀⁴ 1/(2x+1) dx' },
    { label: 'Time Model (b)', value: 'T(x) = √(4+x²)/12 + (2−x)/20, 0 ≤ x ≤ 2' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Apply u-substitution (or linear rule) and transform limits in (a)',
      workingMarkdown:
        'Let $u = 2x + 1 \\implies du = 2\\,dx \\implies dx = \\frac{1}{2}du$. Transform limits: $x = 0 \\implies u = 1$; $x = 4 \\implies u = 9$.',
      formulaLatex: '\\int_1^9 \\frac{1}{2u}\\,du = \\left[\\frac{1}{2}\\ln u\\right]_1^9 = \\frac{1}{2}(\\ln 9 - \\ln 1)',
      markCode: 'M1 A1',
      rationale: 'Converting the limits immediately avoids back-substitution errors.',
    },
    {
      stepNumber: 2,
      title: 'Simplify exact logarithm to ln k form',
      workingMarkdown:
        'Since $\\ln 1 = 0$ and $\\frac{1}{2}\\ln 9 = \\ln(9^{1/2}) = \\ln 3$, we obtain $k = 3$.',
      formulaLatex: '\\frac{1}{2}\\ln 9 = \\ln(\\sqrt{9}) = \\ln 3',
      markCode: 'M1 A1',
      rationale: 'Read "in the form ln k" carefully — leaving (1/2)ln 9 loses the final mark!',
    },
    {
      stepNumber: 3,
      title: 'Differentiate T(x) using the Chain Rule',
      workingMarkdown:
        'Write $\\sqrt{4 + x^2} = (4 + x^2)^{1/2}$. Then $\\frac{d}{dx}(4 + x^2)^{1/2} = \\frac{1}{2}(4 + x^2)^{-1/2}(2x) = \\frac{x}{\\sqrt{4 + x^2}}$. Hence $T\'(x) = \\frac{x}{12\\sqrt{4 + x^2}} - \\frac{1}{20}$.',
      formulaLatex: 'T\'(x) = \\frac{x}{12\\sqrt{4 + x^2}} - \\frac{1}{20}',
      markCode: 'M1 A1 A1',
      rationale: 'Check both factors: the 1/2 cancels the chain rule 2x cleanly.',
    },
    {
      stepNumber: 4,
      title: 'Set T\'(x) = 0, solve for x > 0, and verify minimum',
      workingMarkdown:
        'Set $\\frac{x}{12\\sqrt{4+x^2}} = \\frac{1}{20} \\implies 20x = 12\\sqrt{4+x^2} \\implies 5x = 3\\sqrt{4+x^2}$. Square both sides ($x \\ge 0$): $25x^2 = 9(4 + x^2) \\implies 16x^2 = 36 \\implies x = \\frac{6}{4} = \\frac{3}{2}\\text{ km}$. Checking $T\'(1) < 0$ and $T\'(2) > 0$ (or $T\'\' > 0$) confirms a local and global minimum on $[0, 2]$.',
      formulaLatex: 'x = \\frac{3}{2}\\text{ km} = 1.5\\text{ km}',
      markCode: 'M1 M1 A1 A1',
      rationale: 'Always justify why the stationary point is a MINIMUM (sign change in T\' or T\'\' > 0) for full optimization marks!',
    },
  ],
  finalAnswerMarkdown:
    '**(a)** $\\ln 3$.\n**(b)** $x = \\frac{3}{2}\\text{ km}$ ($1.5\\text{ km}$ east of $B$).',
  commonTrapMarkdown:
    'Two classic Paper 1 deductions: forgetting the factor $\\frac{1}{2}$ when integrating $\\frac{1}{2x+1}$ (yielding $\\ln 9$ instead of $\\ln 3$), and skipping the minimum-verification step ($T\'$ sign change or $T\'\' > 0$) in optimization.',
};
