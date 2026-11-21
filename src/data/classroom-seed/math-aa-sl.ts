import type { SubjectClassroomSeed } from './types';
import {
  MATH_CH2_FUNCTIONS_INVERSE_GRAPH,
  MATH_CH3_QUADRATICS_DISCRIMINANT_GRAPH,
  MATH_CH3_TRANSFORMATIONS_GRAPH,
  MATH_CH4_RATIONAL_ASYMPTOTES_GRAPH,
} from './enhanced-diagrams';

export const MATH_AA_SL_SEED: SubjectClassroomSeed = {
  slug: 'math-aa-sl',
  materials: [
    {
      fileName: 'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      fileType: 'pdf',
      topicCode: '2',
      extractedText: [
        'Primary Course Textbook (Oxford IB Diploma Programme, 2019 First Assessment 2021 — Current for May 2028 Math AA SL):',
        '- Ch. 1 Sequences, Proof & Counting Principles -> Topic 1.1–1.5; Ch. 2 Introducing Functions, Domain/Range, Composite & Inverse Functions -> Topic 2.2–2.5.',
        '- Ch. 3 Quadratic Functions, Inequalities & Transformations -> Topic 2.6, 2.7, 2.11; Ch. 4 Rational & Reciprocal Functions -> Topic 2.8.',
        '- Ch. 5 Exponentials & Logarithms -> Topic 2.9–2.10; Ch. 6–8 Statistics & Probability -> Topic 4.1–4.9; Ch. 11–13 Trigonometry -> Topic 3.1–3.8; Ch. 14–16 Calculus -> Topic 5.1–5.11.',
      ].join('\n'),
    },
    {
      fileName: 'Old IB Textbook.pdf',
      fileType: 'pdf',
      topicCode: '2',
      externalUrl: 'https://drive.google.com/file/d/1H2GiNQEkD4aHAx3iKNGOwqEqUZbwBekR/view?usp=drivesdk',
      extractedText:
        'External Google Drive Reference (17.8 MB textbook): Classic IB Mathematics SL textbook aligned with CRHS Year 1 sets in Ch. 2 Functions, Ch. 3 Quadratics, Sec. 3.3 Transformations, and Ch. 4 Rationals (pp. 199–211).',
    },
    {
      fileName: 'math sl year one course outline 2026.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1BXkFE5DcC30quk2byb1L6_7xJ6tIhMiR/view?usp=drivesdk',
      extractedText: [
        'CRHS IB Math AA SL Year 1 Course Outline (2026–2027) — Instructor: Ian Toms (Room 302), Archive: youtube.com/user/mathsl1.',
        'Hardware: TI-nspire non-CAS GDC. Text: Oxford Mathematics AA SL Course Companion (2019).',
        'May 2028 IB Assessment: Paper 1 (Non-GDC, 1h30, 80 marks, 40%), Paper 2 (GDC Required, 1h30, 80 marks, 40%), Mathematical Exploration IA (20 marks, 20%).',
      ].join('\n'),
    },
    {
      fileName: 'Math AA SL Functions Chapter 2 Notes.pdf',
      fileType: 'pdf',
      topicCode: '2.2',
      externalUrl: 'https://drive.google.com/file/d/1k_eOl4Yca4jN3w-_RQsYJDnQPNZZKg5V/view?usp=drivesdk',
      extractedText:
        'Chapter 2 Functions Notes (Ian Toms & Oxford Ch. 2): Vertical/Horizontal Line tests, domain exclusions (denominator != 0, even radicand >= 0), composites (f o g)(x), and inverse f^-1(x) across y = x.',
    },
    {
      fileName: 'Math AA SL Chapter 3 Quadratics Notes_SOL.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1LRkEvOBGJUyUL0NTcvrjl7tULkDfajZK/view?usp=drivesdk',
      extractedText:
        'Chapter 3 Quadratics Solved Notes: Standard ax^2+bx+c, Vertex a(x-h)^2+k, Factored a(x-p)(x-q), completing the square, quadratic formula, Δ = b^2 - 4ac, inequalities, and projectile optimization.',
    },
    {
      fileName: 'Math AA SL Section 3_3 Function Transformation Notes.pdf',
      fileType: 'pdf',
      topicCode: '2.11',
      externalUrl: 'https://drive.google.com/file/d/1jLKJGkwckvwXZCOwTk40vocydtg8MMwj/view?usp=drivesdk',
      extractedText:
        'Section 3.3 Function Transformations Notes: Toolkit graphs (x^2, x^3, |x|, sqrt(x), 1/x), coordinate map (x, y) -> (x/b + h, a*y + k), asymptotes-first sketching rule.',
    },
    {
      fileName: 'Math AA SL Chapter 4 Rational Function Notes.pdf',
      fileType: 'pdf',
      topicCode: '2.8',
      externalUrl: 'https://drive.google.com/file/d/1vJAY87oCd2Woa5fkjIyrooHGwekwStFc/view?usp=drivesdk',
      extractedText:
        'Chapter 4 Rational Functions Notes (with class errata fixes): y = k/(x - h) + q (Ex. 1 VA is x = +3, not -3; Ex. 2 reflect whole expression), f(x) = (ax+b)/(cx+d) VA = -d/c, HA = a/c, inverse f^-1, and extraneous root check.',
    },
    {
      fileName: 'Math SL 11 Transformation Handout.pdf',
      fileType: 'pdf',
      topicCode: '2.11',
      externalUrl: 'https://drive.google.com/file/d/1dsuIDOIpeSi6fzBYEdcuVGagHkTsWLZL/view?usp=drivesdk',
      extractedText:
        'Transformation Handout (12 IB Questionbank Questions + Markschemes pp. 23–25): 2f(x-3)+1, -f(2x), f(-x)+4, reciprocal asymptotes, sequential transformation wording.',
    },
    {
      fileName: 'Math SL 11 Quadratics Assignment 2026.pdf',
      fileType: 'pdf',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1WC4vmcNg89dyuIhekG0S8Ch_ewJAfc1z/view?usp=drivesdk',
      extractedText:
        'Quadratics Assignment (Q1–8 Non-GDC, Q9 GDC cliff projectile h(t) = -4.9t^2 + 12t + 35).',
    },
    {
      fileName: 'Math SL 11 Quadratics Mock Test.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1ctv9IxZJuDJqEFXFRsZybG-hf5q9xEJz/view?usp=drivesdk',
      extractedText:
        'Quadratics Mock Test 1 (Part I Non-GDC 34m; Part II GDC 19m): Vertex (-2,-4)/(2,-4), complete square -2x^2+12x-7, intersections, rocket h=-4.9t^2+14.7t+10, right triangle legs x, 2x, x+5.',
    },
    {
      fileName: 'Math SL 11 Quadratics Mock Test_SOL.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1z5PegABQqRr9freJIBr3t19iy4dCo92j/view?usp=drivesdk',
      extractedText:
        'Worked Key — Mock Test 1: Vertex form substitution, Δ < 0 -> k < -1/8, -2(x-3)^2 + 11, and 3-sig-fig GDC verification.',
    },
    {
      fileName: 'Quadratic Mock Test 2.pdf',
      fileType: 'pdf',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1DWX4teCim9FMcMlicWzXQVokuFjPN21U/view?usp=drivesdk',
      extractedText:
        'Quadratic Mock Test 2 (Non-GDC + GDC): Discriminant parameter bounds, exact surd roots, quadratic inequalities, and tangent line-parabola intersections.',
    },
    {
      fileName: 'Quadratic Mock Test 2_SOL.pdf',
      fileType: 'pdf',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1vBLXjkToKC9Abpa_uH-aB601REi1efII/view?usp=drivesdk',
      extractedText:
        'Worked Key — Quadratic Mock Test 2: Full algebraic steps for Non-GDC exact roots and GDC 3-s.f. solutions.',
    },
    {
      fileName: 'Quadratic Review.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1k4oGQSLNlr5mptdwPWAc4nV76Bi9Qn3k/view?usp=drivesdk',
      extractedText:
        'Ch. 3 Oxford Quadratic Review Sheet: Mixed Non-GDC and GDC practice consolidating completing the square, discriminant, and intersections.',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM.jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1MGVoAwT48e7WCBMyunxSbG0FpZkWB3Xz/view?usp=drivesdk',
      extractedText: 'Whiteboard Summary ("Apple Team — Quadratics"): Three quadratic forms, slide & divide factoring, vertex rules, and discriminant Δ.',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(1).jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1jwFf44TwJxtq2cPbiQwk5HMZpf89wcAg/view?usp=drivesdk',
      extractedText: 'Wipebook ("Top 3 Important Things"): Three solving methods, vertex form, Δ = b^2 - 4ac, and quadratic formula.',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(2).jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1Tk99Jmuaek9S1rRK_DUc_TQztDh1gWrO/view?usp=drivesdk',
      extractedText: 'Whiteboard Concept Map ("Quadratics"): Ties standard/vertex/factored forms, discriminant, inequalities, intersections, and TI-nspire Menu-8-1-4 shortcut.',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(3).jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1Imhb6npUdZHbwYFKLAQ-cBAtZTuSxowJ/view?usp=drivesdk',
      extractedText: 'Whiteboard Summary: Quadratic formula, √Δ root cases, slide-and-divide factoring, completing the square, and Vx = -b/(2a).',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(4).jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1s6vzktvkvr5RtGviJGvv5-NEXFN94lyp/view?usp=drivesdk',
      extractedText: 'Chalkboard Summary: axial intercepts, three boxed forms, opening sign a, vertex formula, and Δ = b^2 - 4ac.',
    },
    {
      fileName: 'Oct 13, 2026 at 11_08 AM.jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1OZpBnHSQNCaXhExRyaublVUPkNH3M_0l/view?usp=drivesdk',
      extractedText: 'Whiteboard Drill ("Grill IB" No-GDC Q1–5 & GDC Q6–7): includes 1/(x+2)+2x=3, kx^2+4kx-3=0, x^5-10x=1/(x+3), and projectile h=-5t^2+20t+9.',
    },
    {
      fileName: 'Oct 13, 2026 at 11_08 AM(1).jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1aO7P0fmV0tjVBmWC9RNPF7PB31uNTM3E/view?usp=drivesdk',
      extractedText: 'Chalkboard Lesson — Quadratic Inequalities: (1) Solve equality -> (2) Number line & "garbage graph" -> (3) Read intervals (e.g. 3x^2+12x-15 > 0 -> x < -5 or x > 1).',
    },
    {
      fileName: 'Oct 13, 2026 at 11_08 AM(2).jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1VfbJ_uw9TyGO3cCLSdTSotC2K9mW45IJ/view?usp=drivesdk',
      extractedText: 'Whiteboard Key ("Grill IB"): Q5a ONLY k = -3/4 valid (k = 0 destroys x^2 leaving y = -3); Q6 GDC roots; Q7 projectile times.',
    },
  ],
  notes: [
    {
      topicCode: '2.2',
      title: 'Functions, Domain Restrictions, Composites & Inverse Reflection (2.2–2.5)',
      summary:
        'Connect Vertical vs Horizontal Line tests, maximal domain exclusions, order-sensitive composites (f ∘ g), and geometric reflection y = x with Oxford Ch. 2 & Ian Toms notes.',
      sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf', 'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: MATH_CH2_FUNCTIONS_INVERSE_GRAPH },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'math-ch2-functions-matrix',
            title: 'Function Foundations & Invertibility Protocol (Oxford Ch. 2 / IB 2.2–2.5)',
            caption: 'Use "Reflect y = x (f⁻¹)" above to test live invertibility before completing algebraic swaps.',
            columns: ['Topic / Rule', 'Algebraic Criterion', 'IB Paper 1 Examiner Trap'],
            rows: [
              { criterion: 'Function vs One-to-One', cells: ['Vertical line hits ≤1 pt (function); Horizontal line hits ≤1 pt (one-to-one)', 'Always restrict domain (e.g. x ≥ 0 on x²−4) before forming f⁻¹'] },
              { criterion: 'Composite (f ∘ g)(x) = f(g(x))', cells: ['Inner g(x) evaluated first; exclude x outside Domain(g) or yielding g(x) ∉ Domain(f)', '(f ∘ g)(x) ≠ (g ∘ f)(x) in general!'], ibExamTip: 'Check BOTH denominator and square-root restrictions when taking f(g(x)).' },
              { criterion: 'Inverse f⁻¹(x) Swap', cells: ['Domain(f⁻¹) = Range(f) and Range(f⁻¹) = Domain(f)', 'Reflection across y = x means f(f⁻¹(x)) = x on Domain(f⁻¹)'] },
            ],
          },
        },
      ],
    },
    {
      topicCode: '2.6',
      title: 'Quadratics: Three Forms, Discriminant Δ, Inequalities & Mock Tests (2.6–2.7)',
      summary:
        'Unifies Ch. 3 notes, Quadratics Mock Tests 1 & 2, and Oct 7 / Oct 13 whiteboard drills — featuring interactive vertex/discriminant graphing and the k = 0 degenerate fix.',
      sourceFileNames: ['Math AA SL Chapter 3 Quadratics Notes_SOL.pdf', 'Math SL 11 Quadratics Mock Test_SOL.pdf', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
      blocks: [
        { type: 'playable_diagram', spec: MATH_CH3_QUADRATICS_DISCRIMINANT_GRAPH },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Oct 13 Whiteboard "Grill IB #5a" Fix: Leading Coefficient k = 0 Trap!',
          markdown:
            'Problem #5a asks for exact $k$ values where $y = kx^2 + 4kx - 3$ has **1 $x$-intercept**. Solving $\\Delta = (4k)^2 - 4(k)(-3) = 4k(4k + 3) = 0$ yields $k = 0$ or $k = -\\frac{3}{4}$. Substituting **$k = 0$ destroys the $x^2$ term**, collapsing the curve to $y = -3$ (**0 roots!**). Always reject $k = 0$: ONLY **$k = -\\frac{3}{4}$** is valid!',
        },
        {
          type: 'key_terms',
          items: [
            { term: 'Step 1 — Critical Equality Roots', definitionMarkdown: 'Move all terms to one side ($3x^2 + 12x - 15 > 0 \\implies 3(x+5)(x-1) > 0$) to find roots $x = -5, 1$.', markschemeKeyword: 'critical roots' },
            { term: 'Step 2 — "Garbage Graph" Sign Parabola', definitionMarkdown: 'Sketch upward ($a > 0$) or downward ($a < 0$) parabola across roots on a number line using open ($<, >$) or closed ($\\le, \\ge$) endpoints.', markschemeKeyword: 'sign chart / sketch' },
            { term: 'Step 3 — Read Valid Intervals', definitionMarkdown: 'For positive outer arms: **$x < -5$ or $x > 1$** ($]-\\infty, -5[ \\cup ]1, \\infty[$); never write invalid $-5 > x > 1$.', markschemeKeyword: 'disjoint inequality intervals' },
          ],
        },
      ],
    },
    {
      topicCode: '2.11',
      title: 'Function Transformations: Dilations, Reflections & Shift Order (2.11)',
      summary:
        'Live interactive transformation lab for y = a·f(b(x − h)) + k paired with coordinate mapping (x/b + h, a·y + k) and IB Questionbank Handout order rules (Sec. 3.3).',
      sourceFileNames: ['Math AA SL Section 3_3 Function Transformation Notes.pdf', 'Math SL 11 Transformation Handout.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: MATH_CH3_TRANSFORMATIONS_GRAPH },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'math-ch3-transform-map',
            title: 'Coordinate Mapping Reference for g(x) = a·f(b(x − h)) + k (IB 2.11)',
            caption: 'Always factor inner b out of (bx − c) BEFORE reading the horizontal shift h.',
            columns: ['Notation Change', 'Coordinate Map (x, y) ↦', 'Exact IB Verbal Description'],
            rows: [
              { criterion: 'y = a·f(x) (a > 0)', cells: ['(x, a·y)', 'Vertical stretch scale factor a (parallel to y-axis / invariant x-axis)'] },
              { criterion: 'y = −f(x) vs y = f(−x)', cells: ['(x, −y) vs (−x, y)', '−f(x) reflects in x-axis; f(−x) reflects in y-axis'] },
              { criterion: 'y = f(bx) (b > 0)', cells: ['(x/b, y)', 'Horizontal stretch scale factor 1/b (e.g. f(2x) halves horizontal width)'], ibExamTip: 'Always state scale factor 1/b, NEVER just "stretch by b".' },
              { criterion: 'y = f(x − h) + k', cells: ['(x + h, y + k)', 'Translation by column vector [h, k] (f(x − 3) moves 3 RIGHT)'] },
            ],
          },
        },
      ],
    },
    {
      topicCode: '2.8',
      title: 'Reciprocal & Linear-Rational Functions, Asymptotes & Inverses (2.8)',
      summary:
        'Covers y = k/(x − h) + q and f(x) = (ax + b)/(cx + d) vertical/horizontal asymptotes, inverse hyperbolas, extraneous root checks, and fixes two Ch. 4 class-note typos.',
      sourceFileNames: ['Math AA SL Chapter 4 Rational Function Notes.pdf', 'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: MATH_CH4_RATIONAL_ASYMPTOTES_GRAPH },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Chapter 4 Class Notes Errata Fixed (Ex. 1 VA & Ex. 2 Reflection Sign)',
          markdown:
            '1) **Ch. 4 Example 1:** Setting denominator $x - 3 = 0$ places the vertical asymptote at **$x = +3$**, NOT $x = -3$. 2) **Ch. 4 Example 2:** Reflecting a vertically shifted curve $-f(x)$ flips the sign of the **entire** $y$-expression including its shift constant $+q$. 3) Record denominator exclusions BEFORE clearing fractions to catch extraneous roots.',
        },
        {
          type: 'equation',
          latex: 'f(x) = \\frac{ax + b}{cx + d} \\implies \\text{VA: } x = -\\frac{d}{c}, \\quad \\text{HA: } y = \\frac{a}{c}, \\quad f^{-1}(x) = \\frac{dx - b}{-cx + a}',
          caption: 'Fast asymptote & inverse check for linear-over-linear rationals (notice VA and HA swap!).',
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: '2.2',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Let $f(x) = \\frac{1}{x - 3}$ ($x \\neq 3$) and $g(x) = \\sqrt{x + 1}$ ($x \\ge -1$). Find $(f \\circ g)(x)$ and state its maximal domain.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Evaluate f(g(x)) = 1 / (√(x + 1) − 3).', marks: 1 },
          { code: 'M2', criterion: 'Inner domain from g(x): x + 1 ≥ 0 -> x ≥ −1.', marks: 1 },
          { code: 'M3', criterion: 'Outer denominator exclusion: √(x + 1) ≠ 3 -> x + 1 ≠ 9 -> x ≠ 8.', marks: 1 },
          { code: 'A1', criterion: 'Maximal domain: x ≥ −1, x ≠ 8.', marks: 1 },
        ],
        model_answer: '(f ∘ g)(x) = 1 / (√(x + 1) − 3) with maximal domain x ≥ −1, x ≠ 8.',
      },
      sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf'],
    },
    {
      topicCode: '2.2',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'The function $h(x) = x^2 - 4x + 7$ is defined on the restricted domain $x \\ge 2$. Find $h^{-1}(x)$ and state its domain and range.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Complete square: y = (x − 2)² + 3, giving Range(h) = [3, ∞[.', marks: 1 },
          { code: 'M2', criterion: 'Swap x and y: x = (y − 2)² + 3 -> y = 2 ± √(x − 3).', marks: 1 },
          { code: 'A1', criterion: 'Select + root because Range(h⁻¹) = Domain(h) ≥ 2 -> h⁻¹(x) = 2 + √(x − 3).', marks: 1 },
          { code: 'A2', criterion: 'Domain(h⁻¹) = x ≥ 3, Range(h⁻¹) = y ≥ 2.', marks: 1 },
        ],
        model_answer: 'h⁻¹(x) = 2 + √(x − 3), Domain x ≥ 3, Range y ≥ 2.',
      },
      sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf', 'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
    },
    {
      topicCode: '2.6',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Foundation',
      maxMarks: 4,
      questionMarkdown:
        'Without a GDC, write $f(x) = -2x^2 + 12x - 7$ in vertex form $a(x - h)^2 + k$ and state the vertex and axis of symmetry (Mock Test 1).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Factor −2 from x terms: −2(x² − 6x) − 7.', marks: 1 },
          { code: 'M2', criterion: 'Complete square: −2[(x − 3)² − 9] − 7.', marks: 1 },
          { code: 'A1', criterion: 'Distribute −2 -> f(x) = −2(x − 3)² + 11.', marks: 1 },
          { code: 'A2', criterion: 'Maximum vertex (3, 11) and axis x = 3.', marks: 1 },
        ],
        model_answer: 'f(x) = −2(x − 3)² + 11; vertex (3, 11), axis x = 3.',
      },
      sourceFileNames: ['Math SL 11 Quadratics Mock Test.pdf', 'Math SL 11 Quadratics Mock Test_SOL.pdf'],
    },
    {
      topicCode: '2.6',
      paperType: 'Paper 1',
      commandTerm: 'Determine',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'A parabola has vertex $(2, -4)$ and passes through $(-1, 6)$. Express its equation in standard form $ax^2 + bx + c$ (Mock Test 1 Q1).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Write vertex form y = a(x − 2)² − 4.', marks: 1 },
          { code: 'M2', criterion: 'Substitute (−1, 6): 6 = 9a − 4 -> a = 10/9.', marks: 1 },
          { code: 'M3', criterion: 'Expand: (10/9)(x² − 4x + 4) − 4.', marks: 1 },
          { code: 'A1', criterion: 'y = (10/9)x² − (40/9)x + 4/9.', marks: 1 },
        ],
        model_answer: 'y = (10/9)x² − (40/9)x + 4/9.',
      },
      sourceFileNames: ['Math SL 11 Quadratics Mock Test_SOL.pdf'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Find the values of $k \\in \\mathbb{R}$ such that $y = kx^2 + 4kx - 3$ has (a) **one** $x$-intercept, and (b) **two distinct** $x$-intercepts (Grill IB #5).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Discriminant Δ = 16k² + 12k = 4k(4k + 3).', marks: 1 },
          { code: 'A1', criterion: '(a) Reject k = 0 (reduces to horizontal line y = −3, zero intercepts) -> ONLY k = −3/4.', marks: 1 },
          { code: 'M2', criterion: '(b) Solve 4k(4k + 3) > 0 on sign line.', marks: 1 },
          { code: 'A2', criterion: 'k < −3/4 or k > 0.', marks: 1 },
        ],
        model_answer: '(a) k = −3/4 only (k = 0 rejected); (b) k < −3/4 or k > 0.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 1',
      commandTerm: 'Solve',
      difficulty: 'Foundation',
      maxMarks: 3,
      questionMarkdown:
        'Solve $3x^2 + 12x - 15 > 0$ cleanly without a GDC (Oct 13 Chalkboard Lesson).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Factor: 3(x² + 4x − 5) = 3(x + 5)(x − 1) > 0.', marks: 1 },
          { code: 'M2', criterion: 'Roots −5 and 1 with upward-opening sign parabola.', marks: 1 },
          { code: 'A1', criterion: 'x < −5 or x > 1.', marks: 1 },
        ],
        model_answer: 'x < −5 or x > 1.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM(1).jpg'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 1',
      commandTerm: 'Solve',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Solve $\\frac{1}{x + 2} + 2x = 3$ giving exact answers in simplest surd form without a GDC (Grill IB #1c).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Note x ≠ −2; clear denominator: 1 + 2x(x + 2) = 3(x + 2).', marks: 1 },
          { code: 'M2', criterion: 'Rearrange: 2x² + x − 5 = 0.', marks: 1 },
          { code: 'M3', criterion: 'Apply quadratic formula: x = (−1 ± √(1 − 4·2·−5)) / 4.', marks: 1 },
          { code: 'A1', criterion: 'x = (−1 ± √41) / 4 (both valid).', marks: 1 },
        ],
        model_answer: 'x = (−1 ± √41) / 4.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 2',
      commandTerm: 'Calculate',
      difficulty: 'Standard IB',
      maxMarks: 5,
      questionMarkdown:
        'A projectile has height $h(t) = -5t^2 + 20t + 9$ metres for $t \\ge 0$. Find: (a) initial height, (b) maximum height, (c) times when $h = 13\\text{ m}$, and (d) ground impact time (3 s.f., Grill IB #7).',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: '(a) h(0) = 9 m.', marks: 1 },
          { code: 'M1', criterion: '(b) t_max = −20/(2·−5) = 2 s.', marks: 1 },
          { code: 'A2', criterion: 'h_max = h(2) = 29 m.', marks: 1 },
          { code: 'A3', criterion: '(c) −5t² + 20t + 9 = 13 -> t ≈ 0.211 s and t ≈ 3.79 s.', marks: 1 },
          { code: 'A4', criterion: '(d) h(t) = 0 -> positive root t ≈ 4.41 s.', marks: 1 },
        ],
        model_answer: '(a) 9 m; (b) 29 m at t = 2 s; (c) 0.211 s and 3.79 s; (d) 4.41 s.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.6',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Foundation',
      maxMarks: 3,
      questionMarkdown:
        'Find the exact coordinates of intersection of $y = x^2 - 4x + 10$ and $y = 5x - 10$ without a GDC (Grill IB #2).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'x² − 4x + 10 = 5x − 10 -> x² − 9x + 20 = 0.', marks: 1 },
          { code: 'M2', criterion: 'Factor (x − 4)(x − 5) = 0 -> x = 4, 5.', marks: 1 },
          { code: 'A1', criterion: 'Substitute back -> (4, 10) and (5, 15).', marks: 1 },
        ],
        model_answer: '(4, 10) and (5, 15).',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 2',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'A right-angled triangle has legs $x\\text{ cm}$ and $2x\\text{ cm}$, and hypotenuse $(x + 5)\\text{ cm}$. Calculate $x$ to 3 s.f. (Mock Test 1 Part II).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'x² + (2x)² = (x + 5)² -> 5x² = x² + 10x + 25.', marks: 1 },
          { code: 'M2', criterion: '4x² − 10x − 25 = 0; require x > 0.', marks: 1 },
          { code: 'A1', criterion: 'x = (10 + √500)/8 ≈ 4.05 cm.', marks: 1 },
        ],
        model_answer: 'x ≈ 4.05 cm.',
      },
      sourceFileNames: ['Math SL 11 Quadratics Mock Test.pdf'],
    },
    {
      topicCode: '2.11',
      paperType: 'Paper 1',
      commandTerm: 'Describe',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Point $P(6, -4)$ lies on $y = f(x)$. Find the image of $P$ on $g(x) = 3f(2x - 4) + 1$ and describe the geometric sequence of transformations (Handout).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Factor inner expression: g(x) = 3f(2(x − 2)) + 1.', marks: 1 },
          { code: 'A1', criterion: 'Coordinate map (x/2 + 2, 3y + 1) maps (6, −4) -> (5, −11).', marks: 1 },
          { code: 'A2', criterion: 'Vertical stretch s.f. 3, horizontal stretch s.f. 1/2, then translation [2, 1].', marks: 1 },
        ],
        model_answer: 'P′(5, −11); vertical stretch s.f. 3, horizontal compression s.f. 1/2, translation 2 right and 1 up.',
      },
      sourceFileNames: ['Math AA SL Section 3_3 Function Transformation Notes.pdf', 'Math SL 11 Transformation Handout.pdf'],
    },
    {
      topicCode: '2.11',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Transform $f(x) = \\frac{1}{x}$ into $g(x) = -2f(x + 3) + 5$. State both transformed asymptotes and which quadrants the curve occupies.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'VA shifts 3 left -> x = −3.', marks: 1 },
          { code: 'A2', criterion: 'HA reflects (still 0) then shifts +5 up -> y = 5.', marks: 1 },
          { code: 'A3', criterion: 'Negative multiplier −2 flips branches into top-left and bottom-right quadrants relative to (−3, 5).', marks: 1 },
        ],
        model_answer: 'VA x = −3, HA y = 5; branches occupy top-left and bottom-right sectors around (−3, 5).',
      },
      sourceFileNames: ['Math AA SL Section 3_3 Function Transformation Notes.pdf'],
    },
    {
      topicCode: '2.8',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'For $f(x) = \\frac{2x + 5}{x - 3}$, find both asymptotes, exact axial intercepts, and identify why stating "VA is $x = -3$" is incorrect (Ch. 4 Ex. 1 Fix).',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'x − 3 = 0 -> VA is x = +3 (NOT −3).', marks: 1 },
          { code: 'A2', criterion: 'Ratio of leading terms -> HA is y = 2.', marks: 1 },
          { code: 'A3', criterion: 'y-intercept (0, −5/3).', marks: 1 },
          { code: 'A4', criterion: 'x-intercept (−5/2, 0).', marks: 1 },
        ],
        model_answer: 'VA x = 3, HA y = 2, y-int (0, −5/3), x-int (−5/2, 0).',
      },
      sourceFileNames: ['Math AA SL Chapter 4 Rational Function Notes.pdf'],
    },
    {
      topicCode: '2.8',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Find the inverse $f^{-1}(x)$ of $f(x) = \\frac{2x + 5}{x - 3}$ ($x \\neq 3$) and state its domain and asymptotes.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Swap x and y: x = (2y + 5)/(y − 3).', marks: 1 },
          { code: 'M2', criterion: 'xy − 3x = 2y + 5 -> y(x − 2) = 3x + 5.', marks: 1 },
          { code: 'A1', criterion: 'f⁻¹(x) = (3x + 5) / (x − 2).', marks: 1 },
          { code: 'A2', criterion: 'Domain x ≠ 2; VA x = 2 (swapped HA of f) and HA y = 3 (swapped VA of f).', marks: 1 },
        ],
        model_answer: 'f⁻¹(x) = (3x + 5)/(x − 2), x ≠ 2, VA x = 2, HA y = 3.',
      },
      sourceFileNames: ['Math AA SL Chapter 4 Rational Function Notes.pdf'],
    },
    {
      topicCode: '2.8',
      paperType: 'Paper 1',
      commandTerm: 'Solve',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Solve $\\frac{x}{x - 2} - \\frac{2}{x + 1} = \\frac{6}{x^2 - x - 2}$ checking for extraneous roots (Ch. 4 Ex. 5).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Factor RHS = (x − 2)(x + 1); exclude x ≠ 2, x ≠ −1.', marks: 1 },
          { code: 'M2', criterion: 'Clear LCD: x(x + 1) − 2(x − 2) = 6.', marks: 1 },
          { code: 'M3', criterion: 'x² − x − 2 = 0 -> (x − 2)(x + 1) = 0.', marks: 1 },
          { code: 'A1', criterion: 'Both candidates violate domain -> No real solutions!', marks: 1 },
        ],
        model_answer: 'Candidates x = 2 and x = −1 are both excluded domain values; therefore no solution exists.',
      },
      sourceFileNames: ['Math AA SL Chapter 4 Rational Function Notes.pdf'],
    },
    {
      topicCode: '2.6',
      paperType: 'Paper 1',
      commandTerm: 'Find',
      difficulty: 'Foundation',
      maxMarks: 3,
      questionMarkdown:
        'Find the equation of the quadratic with $x$-intercepts $x = -1$ and $x = 3$ passing through $(0, -6)$ (Grill IB #4a).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'y = a(x + 1)(x − 3).', marks: 1 },
          { code: 'M2', criterion: '−6 = a(1)(−3) -> a = 2.', marks: 1 },
          { code: 'A1', criterion: 'y = 2(x + 1)(x − 3) = 2x² − 4x − 6.', marks: 1 },
        ],
        model_answer: 'y = 2(x + 1)(x − 3).',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.2',
      paperType: 'Paper 1',
      commandTerm: 'State',
      difficulty: 'Foundation',
      maxMarks: 2,
      questionMarkdown:
        'State how the **vertical line test** and **horizontal line test** determine whether a relation has a function and inverse.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Vertical line crosses ≤1 time -> relation is a function.', marks: 1 },
          { code: 'M2', criterion: 'Horizontal line crosses ≤1 time -> function is one-to-one (invertible without domain restriction).', marks: 1 },
        ],
        model_answer: 'Vertical line test verifies function uniqueness; horizontal line test verifies one-to-one invertibility.',
      },
      sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 2',
      commandTerm: 'Solve',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Using your TI-nspire GDC, solve $x^5 - 10x = \\frac{1}{x + 3}$ to 3 significant figures (Grill IB #6).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Plot f1(x) = x⁵ − 10x and f2(x) = 1/(x + 3) or locate zeros on GDC.', marks: 1 },
          { code: 'A1', criterion: 'Roots x ≈ −3.00 and −1.76.', marks: 1 },
          { code: 'A2', criterion: 'Roots x ≈ −0.0337 and 1.78 (3 s.f.).', marks: 1 },
        ],
        model_answer: 'x ≈ −3.00, −1.76, −0.0337, 1.78.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
  ],
  flashcards: [
    { topicCode: '2.2', frontMarkdown: 'Vertical Line Test vs Horizontal Line Test?', backMarkdown: 'Vertical = function check (≤1 output per x); Horizontal = one-to-one check (invertible directly).' },
    { topicCode: '2.2', frontMarkdown: 'Domain & Range relationship between f and f⁻¹?', backMarkdown: 'Domain(f⁻¹) = Range(f) and Range(f⁻¹) = Domain(f); reflected across diagonal line y = x.' },
    { topicCode: '2.2', frontMarkdown: 'How to find the maximal domain of (f ∘ g)(x)?', backMarkdown: 'Require BOTH x ∈ Domain(g) AND g(x) ∈ Domain(f).' },
    { topicCode: '2.6', frontMarkdown: 'Axis & Vertex formula from standard form ax² + bx + c?', backMarkdown: 'Axis x = −b/(2a); Vertex (−b/(2a), f(−b/(2a))); y-int = c.' },
    { topicCode: '2.6', frontMarkdown: 'Discriminant Δ = b² − 4ac three cases?', backMarkdown: 'Δ > 0 -> 2 real roots; Δ = 0 -> 1 repeated tangent root; Δ < 0 -> no real roots.' },
    { topicCode: '2.7', frontMarkdown: 'Oct 13 Grill IB #5a Trap: kx² + 4kx − 3 = 0 has 1 root -> why reject k = 0?', backMarkdown: 'Δ = 4k(4k + 3) = 0 gives k = 0 or −3/4, but k = 0 collapses the quadratic to y = −3 (0 roots!). Only k = −3/4 works.' },
    { topicCode: '2.7', frontMarkdown: 'Three-step method for quadratic inequalities?', backMarkdown: '1) Solve critical roots; 2) Draw "garbage graph" parabola on number line; 3) Read interval(s).' },
    { topicCode: '2.6', frontMarkdown: 'How to factor −2x² + 12x − 7 into vertex form?', backMarkdown: 'Factor −2 ONLY from x terms: −2(x² − 6x) − 7 = −2((x − 3)² − 9) − 7 = −2(x − 3)² + 11.' },
    { topicCode: '2.7', frontMarkdown: 'Solve a(x − h)² + k = 0 directly without expanding?', backMarkdown: '(x − h)² = −k/a -> x = h ± √(−k/a) when −k/a ≥ 0.' },
    { topicCode: '2.11', frontMarkdown: 'Coordinate map for y = a·f(b(x − h)) + k?', backMarkdown: '(x, y) ↦ (x/b + h, a·y + k).' },
    { topicCode: '2.11', frontMarkdown: 'Geometric difference between f(2x) and 2f(x)?', backMarkdown: 'f(2x) = horizontal stretch scale factor 1/2 toward y-axis; 2f(x) = vertical stretch s.f. 2 away from x-axis.' },
    { topicCode: '2.11', frontMarkdown: 'Why sketch asymptotes FIRST on 1/x transformations?', backMarkdown: 'Anchors shifted hyperbola quadrants around intersection (h, q) before plotting key points.' },
    { topicCode: '2.11', frontMarkdown: 'Factor f(2x − 4) before reading the shift!', backMarkdown: 'f(2(x − 2)): horizontal stretch s.f. 1/2 then translate 2 units RIGHT (not 4!).' },
    { topicCode: '2.8', frontMarkdown: 'VA and HA of f(x) = (ax + b)/(cx + d)?', backMarkdown: 'VA: x = −d/c (denominator = 0); HA: y = a/c.' },
    { topicCode: '2.8', frontMarkdown: 'Ch. 4 Ex. 1 Fix: What is the VA of y = (2x + 5)/(x − 3)?', backMarkdown: 'x = +3 (setting x − 3 = 0), NOT x = −3!' },
    { topicCode: '2.8', frontMarkdown: 'Fast inverse of (ax + b)/(cx + d)?', backMarkdown: 'f⁻¹(x) = (dx − b)/(−cx + a); VA and HA swap coordinates.' },
    { topicCode: '2.8', frontMarkdown: 'What makes a candidate solution extraneous in a rational equation?', backMarkdown: 'Any x-value that sets a denominator in the original equation equal to zero.' },
    { topicCode: '2.8', frontMarkdown: 'Convert 2 − 3/(x + 1) to linear-over-linear form?', backMarkdown: '(2(x + 1) − 3)/(x + 1) = (2x − 1)/(x + 1) -> VA x = −1, HA y = 2.' },
    { topicCode: '2.7', frontMarkdown: 'TI-nspire GDC precision rule on IB Math AA SL Paper 2?', backMarkdown: 'Round non-exact decimals to 3 significant figures unless exact form is requested.' },
    { topicCode: '2.6', frontMarkdown: 'CRHS / May 2028 Math AA SL Assessment Split?', backMarkdown: 'Paper 1 Non-GDC (40%, 1h30) + Paper 2 GDC (40%, 1h30) + Exploration IA (20%, 20 marks).' },
  ],
  topicGuidanceNotes: {
    '2': 'Oxford Mathematics AA SL (2019) Ch. 2–4 & Ian Toms Course Outline: Functions, Quadratics, Transformations, and Rationals form the Year 1 algebraic backbone.',
    '2.2': 'Oxford Ch. 2 / Ian Toms Notes: Vertical & Horizontal Line tests, maximal domains, composites, and inverse reflection y = x.',
    '2.6': 'Ch. 3 Quadratics & Mock Tests 1–2: Three forms, completing the square, discriminant Δ, and oct 7 / Oct 13 drills.',
    '2.7': 'Quadratics Assignment & Grill IB Drill: Factoring, quadratic formula, "garbage graph" inequalities, projectile GDC modeling, and k = 0 degenerate rejection.',
    '2.8': 'Ch. 4 Rational Functions (fixes Ex. 1 VA x=+3 & Ex. 2 sign flip): VA/HA hyperbola rules, linear-over-linear inverses, and extraneous root validation.',
    '2.11': 'Sec. 3.3 & Handout (12 Questionbank probs): Coordinate map (x/b + h, a·y + k), asymptotes-first sketching, and factoring bx − c cleanly.',
  },
};
