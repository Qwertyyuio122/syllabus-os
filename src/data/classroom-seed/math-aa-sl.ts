import type { SubjectClassroomSeed } from './types';

export const MATH_AA_SL_SEED: SubjectClassroomSeed = {
  slug: 'math-aa-sl',
  materials: [
    {
      fileName: 'Old IB Textbook.pdf',
      fileType: 'pdf',
      topicCode: '2',
      externalUrl: 'https://drive.google.com/file/d/1H2GiNQEkD4aHAx3iKNGOwqEqUZbwBekR/view?usp=drivesdk',
      extractedText:
        'External Google Drive Reference (17.8 MB textbook — kept on Drive to protect bundle size): Classic IB Mathematics Standard Level textbook aligned with CRHS Year 1 problem sets referenced inside Chapter 2 Functions, Chapter 3 Quadratics, Section 3.3 Transformations, and Chapter 4 Rational Function Notes (e.g. pp. 199–211 rational practice).',
    },
    {
      fileName: 'math sl year one course outline 2026.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1BXkFE5DcC30quk2byb1L6_7xJ6tIhMiR/view?usp=drivesdk',
      extractedText: [
        'CRHS IB Math AA SL Year 1 Course Outline (2026–2027) — Instructor: Ian Toms (Room 302), Video Archive: youtube.com/user/mathsl1.',
        'Required Hardware: TI-nspire non-CAS Graphing Display Calculator (GDC). Text: Oxford Mathematics AA SL Course Companion.',
        'Year 1 Sequence: (1) Sequences & Series (Ch. 1), (2) Finance & Proofs (1.4, 1.6), (3) Functions (Ch. 2 -> IB 2.2–2.5), (4) Linear & Quadratic Relationships (Ch. 3 -> IB 2.1, 2.6, 2.7, 2.11), (5) Rational Functions (Ch. 4 -> IB 2.8), (6) Binomial Expansion (1.5), (7) Triangle Trigonometry (Ch. 11 -> IB 3.2), (8) Statistics & Probability (Ch. 6–8 -> IB Topic 4).',
        'Dual Grading: Provincial mark (40% Tests, 20% Assignments, 40% Jan/June Exams) + May 2028 IB Score (Paper 1 Non-GDC 40%, Paper 2 GDC 40%, Mathematical Exploration IA 20%).',
      ].join('\n'),
    },
    {
      fileName: 'Math AA SL Functions Chapter 2 Notes.pdf',
      fileType: 'pdf',
      topicCode: '2.2',
      externalUrl: 'https://drive.google.com/file/d/1k_eOl4Yca4jN3w-_RQsYJDnQPNZZKg5V/view?usp=drivesdk',
      extractedText: [
        'Math AA SL Chapter 2 Functions Notes (Ian Toms):',
        '- Relation vs Function: Vertical line test (each input x maps to at most one output y); horizontal line test (one-to-one invertibility).',
        '- Domain & Range restrictions: denominator != 0, even-root radicand >= 0; express in interval and set-builder notation.',
        '- Function notation f(x), piecewise graphs, odd/even symmetry, and asymptotic behaviour.',
        '- Composite functions (f o g)(x) = f(g(x)) with order-sensitivity and restricted domain checking; inverse functions f^-1(x) found by swapping x and y and reflecting across the line y = x.',
      ].join('\n'),
    },
    {
      fileName: 'Math AA SL Chapter 3 Quadratics Notes_SOL.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1LRkEvOBGJUyUL0NTcvrjl7tULkDfajZK/view?usp=drivesdk',
      extractedText: [
        'Math AA SL Chapter 3 Quadratics Solved Notes:',
        '- Three quadratic forms: General/Standard f(x) = ax^2 + bx + c (y-int = c, vertex x = -b/(2a)); Vertex form f(x) = a(x - h)^2 + k (vertex (h, k), axis x = h); Factored/Root form f(x) = a(x - p)(x - q) (roots p, q, axis x = (p+q)/2).',
        '- Converting between forms: completing the square for general -> vertex; binomial expansion for vertex/factored -> standard.',
        '- Solving quadratic equations: factoring (incl. slide-and-divide when a != 1), completing the square, quadratic formula x = (-b ± sqrt(b^2 - 4ac)) / (2a).',
        '- Discriminant Δ = b^2 - 4ac: Δ > 0 -> 2 distinct real roots; Δ = 0 -> 1 repeated real root (tangent to x-axis); Δ < 0 -> no real roots.',
        '- Solving quadratic inequalities (sign number line / sketch) and projectile optimization.',
      ].join('\n'),
    },
    {
      fileName: 'Math AA SL Section 3_3 Function Transformation Notes.pdf',
      fileType: 'pdf',
      topicCode: '2.11',
      externalUrl: 'https://drive.google.com/file/d/1jLKJGkwckvwXZCOwTk40vocydtg8MMwj/view?usp=drivesdk',
      extractedText: [
        'Section 3.3 Function Transformations Notes (Ian Toms):',
        '- Basic toolkit graphs: x^2, x^3, |x|, sqrt(x), 1/x (including horizontal/vertical asymptotes shifted with dotted lines!).',
        '- Mapping notation (x, y) -> (x/b + h, a*y + k) for y = a*f(b(x - h)) + k.',
        '- Vertical changes (affect y): +k shifts up, -k down; negative outside -f(x) reflects in x-axis; a stretches vertically by scale factor |a|.',
        '- Horizontal changes (counter-intuitive, affect x): f(x - h) shifts RIGHT h; f(x + h) shifts LEFT h; f(-x) reflects in y-axis; f(bx) stretches horizontally by scale factor 1/|b|.',
        '- Sketching convention: shift asymptotes FIRST on 1/x graphs, then move key reference points.',
      ].join('\n'),
    },
    {
      fileName: 'Math AA SL Chapter 4 Rational Function Notes.pdf',
      fileType: 'pdf',
      topicCode: '2.8',
      externalUrl: 'https://drive.google.com/file/d/1vJAY87oCd2Woa5fkjIyrooHGwekwStFc/view?usp=drivesdk',
      extractedText: [
        'Chapter 4 Reciprocal & Rational Functions Notes (Ian Toms):',
        '- 4.1–4.2 Basic Reciprocal y = 1/x and y = k/(x - h) + q ("butterfly"/hyperbola): domain x != h, range y != q, vertical asymptote x = h (division by 0), horizontal asymptote y = q (limit as x -> ±infinity).',
        '- 4.3 Linear-over-linear rational f(x) = (ax + b)/(cx + d): (1) Domain & Vertical Asymptote from cx + d = 0 -> x = -d/c; (2) Horizontal Asymptote from large x limit -> y = a/c; (3) y-intercept at f(0) = b/d; (4) x-intercept from numerator ax + b = 0 -> x = -b/a.',
        '- Solving rational equations: factor denominators for LCD + note excluded domain restrictions BEFORE multiplying through, and reject extraneous roots.',
        '- Inverse of f(x) = (ax + b)/(cx + d): swap x and y, clear denominator, collect y terms, factor y out, divide.',
        '- Mutant mixed-form rationals (pp. 209–211): combine with common denominator into (ax+b)/(cx+d) or divide into quotient + k/(cx+d) shift form.',
      ].join('\n'),
    },
    {
      fileName: 'Math SL 11 Transformation Handout.pdf',
      fileType: 'pdf',
      topicCode: '2.11',
      externalUrl: 'https://drive.google.com/file/d/1dsuIDOIpeSi6fzBYEdcuVGagHkTsWLZL/view?usp=drivesdk',
      extractedText: [
        'Math SL 11 Transformation Handout (12 IB Questionbank Questions + Markschemes pp. 23–25):',
        '- Covers coordinate image tracking of vertices/maxima/roots under combinations such as 2f(x - 3) + 1, -f(2x), and f(-x) + 4.',
        '- Tests deducing transformed asymptotes of reciprocal curves, describing sequential geometric transformations in correct IB order (vertical/horizontal stretch -> reflection -> translation), and matching transformed piecewise graphs.',
        '- Includes official IB Paper 1 M1/A1 markscheme solutions on final 3 pages.',
      ].join('\n'),
    },
    {
      fileName: 'Math SL 11 Quadratics Assignment 2026.pdf',
      fileType: 'pdf',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1WC4vmcNg89dyuIhekG0S8Ch_ewJAfc1z/view?usp=drivesdk',
      extractedText: [
        'Math SL 11 Quadratics Assignment (Due Wed Oct 7, 8:50 am — Q1–8 Non-GDC, Q9 GDC):',
        '- Q1–2: Solve by factoring & exact quadratic formula (3q^2 - 6q = 0, t^2 - 3t = 10, 2x^2 + 3x + 1 = 0, (x+1)^2 = 3, x + 3/x = 4, 50x^2 + 150 = 200x).',
        '- Q3–5: Sketch y = -2(x+1)(x-3), y = 3(x+1)^2 + 2, y = x^2 + 4x + 4; exact x-intercepts of 5x^2 + 3x - 1; axis of symmetry of -2(x-3)^2 + 5.',
        '- Q6–8: Discriminant f(x) = 2px^2 + 10x - 3 has no x-intercepts (find p); complete square on 3x^2 - 2x + 5; factor -2x^2 + 10x - 12.',
        '- Q9 (GDC): Cliff ball height h(t) = -4.9t^2 + 12t + 35 (initial height, two times at 42 ft, max height, ground impact time).',
      ].join('\n'),
    },
    {
      fileName: 'Math SL 11 Quadratics Mock Test.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1ctv9IxZJuDJqEFXFRsZybG-hf5q9xEJz/view?usp=drivesdk',
      extractedText: [
        'Math SL 11 Quadratics Mock Test 1 (Part I Non-GDC 34 marks / 45 min; Part II GDC 19 marks / 30 min):',
        '- Part I Q1–4: Determine equation a(x-h)^2+k from vertex (2,-4) & point (-1,6); no real roots in kx^2+x-2=0; complete square f(x) = -2x^2+12x-7; intersection of 2x^2+4x and -x+3.',
        '- Part I Q5–7: Exact solve 2x^2+5x+3=0 and 1/(x+2)=x; intercepts/vertex/axis of y = -(x+4)(x-2); discriminant root count for 4x^2-4x+1.',
        '- Part II GDC Q1–4: Rocket h = -4.9t^2+14.7t+10 (h_0, t_max, h_max, times at 18 m); right-triangle legs x, 2x, hypotenuse x+5; solve 1 + 1/x = 3x; x-intercepts of -2x^2...',
      ].join('\n'),
    },
    {
      fileName: 'Math SL 11 Quadratics Mock Test_SOL.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1z5PegABQqRr9freJIBr3t19iy4dCo92j/view?usp=drivesdk',
      extractedText: [
        'Full Teacher Worked Solution Key — Quadratics Mock Test 1 (Ian Toms):',
        '- Step-by-step Non-GDC solutions showing substitution into vertex form, discriminant inequality Δ < 0 -> k < -1/8, completing the square factoring -2 out first (-2(x-3)^2 + 11), and exact quadratic formula intersections.',
        '- Full GDC solutions rounded to 3 significant figures with clear TI-nspire graphing / solver method notes.',
      ].join('\n'),
    },
    {
      fileName: 'Quadratic Mock Test 2.pdf',
      fileType: 'pdf',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1DWX4teCim9FMcMlicWzXQVokuFjPN21U/view?usp=drivesdk',
      extractedText:
        'Quadratic Mock Test 2 (Part I No GDC + Part II GDC): Second full-length IB assessment covering discriminant parameter bounds, exact surd solutions, vertex/factored curve sketching, line-parabola tangent/secant intersections, quadratic inequalities, and GDC optimization word problems.',
    },
    {
      fileName: 'Quadratic Mock Test 2_SOL.pdf',
      fileType: 'pdf',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1vBLXjkToKC9Abpa_uH-aB601REi1efII/view?usp=drivesdk',
      extractedText:
        'Teacher Worked Solution Key — Quadratic Mock Test 2: Full algebraic steps for Non-GDC exact roots, vertex conversion, discriminant inequalities, plus 3-sig-fig GDC verification.',
    },
    {
      fileName: 'Quadratic Review.pdf',
      fileType: 'pdf',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1k4oGQSLNlr5mptdwPWAc4nV76Bi9Qn3k/view?usp=drivesdk',
      extractedText:
        'Chapter 3 Quadratic Review Sheet (Oxford Practice Set): Mixed non-GDC and GDC exam review consolidating completing the square, axis of symmetry, discriminant conditions, intersections, and modelling.',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM.jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1MGVoAwT48e7WCBMyunxSbG0FpZkWB3Xz/view?usp=drivesdk',
      extractedText:
        'Whiteboard Summary ("Apple Team — Quadratics"): Covers (i) Solving trinomial ax^2+bx+c (slide & divide, grouping); (ii) Three forms — vertex a(x-h)^2+k, trinomial ax^2+bx+c, factored a(x-q)(x-p); Axis of symmetry & vertex rules (vertex form x=h, (h,k); trinomial (-b/(2a), f(-b/(2a))), c = y-int); Quadratic formula & Discriminant Δ = b^2-4ac (>0 two, <0 none, =0 one).',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(1).jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1jwFf44TwJxtq2cPbiQwk5HMZpf89wcAg/view?usp=drivesdk',
      extractedText:
        'Wipebook Review Sheet ("Top 3 Important Things"): Lists solving trinomial forms (factoring, completing the square, quadratic formula), vertex form properties, Δ = b^2 - 4ac, and x = (-b ± sqrt(b^2 - 4ac))/(2a).',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(2).jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1Tk99Jmuaek9S1rRK_DUc_TQztDh1gWrO/view?usp=drivesdk',
      extractedText:
        'Whiteboard Concept Map ("Quadratics"): Bullet checklist linking Discriminant Δ, Standard Form Ax^2+bx+c, Quadratic Formula, Vertex (-b/(2a), f(-b/(2a))), Axis of symmetry, Factoring, Vertex Form y = a(x-h)^2+k, Completing the Square, Factored Form y = a(x-h)(x-q), Inequalities, Intersections, and TI-nspire GDC "Menu, 814" shortcut.',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(3).jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1Imhb6npUdZHbwYFKLAQ-cBAtZTuSxowJ/view?usp=drivesdk',
      extractedText:
        'Whiteboard Summary: Quadratic formula highlighting sqrt(b^2-4ac) discriminant cases (Δ = 0 -> 1 real root; Δ > 0 -> 2 real roots; Δ < 0 -> no real roots), intersection points, slide-and-divide factoring, completing the square, and vertex formula V_x = -b/(2a).',
    },
    {
      fileName: 'Oct 7, 2026 at 2_32 PM(4).jpg',
      fileType: 'jpg',
      topicCode: '2.6',
      externalUrl: 'https://drive.google.com/file/d/1s6vzktvkvr5RtGviJGvv5-NEXFN94lyp/view?usp=drivesdk',
      extractedText:
        'Chalkboard Summary: Intercepts rule (y-int set x=0; x-int set y=0), three boxed quadratic forms, axis of symmetry x=h, parabola direction (-a opens down, +a opens up), vertex V_x = -b/(2a), and discriminant Δ = b^2-4ac.',
    },
    {
      fileName: 'Oct 13, 2026 at 11_08 AM.jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1OZpBnHSQNCaXhExRyaublVUPkNH3M_0l/view?usp=drivesdk',
      extractedText: [
        'Whiteboard Drill ("Grill IB — No GDC" Q1–5 & "GDC OK" Q6–7):',
        'No-GDC: 1a) 3x^2-6x=9; 1b) 5x^2+7x-6=0; 1c) 1/(x+2)+2x=3; 2) Intersection y=x^2-4x+10 & y=5x-10; 3) Graph -3(x-2)^2+7, (2/3)(x-1)(x+5), 2x^2+12x+4; 4) Equation from roots (-1, 3) & y-int -6 and vertex (4,6) through (6,5); 5) k-values for kx^2+4kx-3=0 having 1 or 2 x-intercepts.',
        'GDC OK: 6) Solve x^5 - 10x = 1/(x+3); 7) Projectile h(t) = -5t^2 + 20t + 9 (h0, max height, times at 13 m, ground hit time, height at 1.2 s).',
      ].join('\n'),
    },
    {
      fileName: 'Oct 13, 2026 at 11_08 AM(1).jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1aO7P0fmV0tjVBmWC9RNPF7PB31uNTM3E/view?usp=drivesdk',
      extractedText: [
        'Chalkboard Lesson — Solving a Quadratic Inequality (Ian Toms):',
        'Steps: (1) Find solutions to the corresponding equation; (2) Draw a number line and "garbage graph" (quick sign parabola); (3) Determine which intervals satisfy the inequality.',
        'Worked Example: 3x^2 + 12x - 15 > 0 -> 3(x^2 + 4x - 5) > 0 -> 3(x + 5)(x - 1) > 0 -> open circles at -5 and 1, positive outer arms -> x < -5 or x > 1.',
        'Classroom schedule noted on right: Ch.3 Assgnt Wed Oct 7; Ch.3 Test Tues Oct 13; IB Math Quadratics Test Wed Oct 21.',
      ].join('\n'),
    },
    {
      fileName: 'Oct 13, 2026 at 11_08 AM(2).jpg',
      fileType: 'jpg',
      topicCode: '2.7',
      externalUrl: 'https://drive.google.com/file/d/1VfbJ_uw9TyGO3cCLSdTSotC2K9mW45IJ/view?usp=drivesdk',
      extractedText: [
        'Whiteboard Answer Key for "Grill IB" Q1–7:',
        '1a) x = -1, x = 3; 1b) x = 3/5, x = -2; 1c) x = (-1 ± sqrt(41))/4.',
        '2) (5, 15) and (4, 10). 3a) vertex (2,7), y-int -5; 3b) axis x=-2, vertex (-2,-6); 3c) axis x=-3, vertex (-3,-14), y-int 4.',
        '4a) y = 2(x+1)(x-3); 4b) y = -1/4 (x-4)^2 + 6. 5a) k = -3/4 (class note mentions k=0 degenerate check); 5b) k < -3/4 or k > 0.',
        '6) x in {-3.00, -1.76, -0.0337, 1.78}. 7) a) 9 m, b) 29 m, c) 0.211 s & 3.79 s, d) 4.41 s, e) 25.8 m.',
      ].join('\n'),
    },
  ],
  notes: [
    {
      topicCode: '2.6',
      title: 'Quadratics: Three Forms, Discriminant & Inequalities (2.6–2.7)',
      summary:
        'Complete Chapter 3 synthesis built from Ian Toms’s Quadratics Notes_SOL and Oct 7 / Oct 13 whiteboard drills: vertex/factored conversions, discriminant conditions, and quadratic inequalities.',
      sourceFileNames: [
        'Math AA SL Chapter 3 Quadratics Notes_SOL.pdf',
        'Oct 7, 2026 at 2_32 PM.jpg',
        'Oct 13, 2026 at 11_08 AM(1).jpg',
      ],
      blocks: [
        { type: 'heading', level: 2, text: '1. Interactive Quadratic Vertex-Form Explorer' },
        {
          type: 'paragraph',
          markdown:
            'Adjust $a$ (stretch & reflection), $h$ (horizontal vertex shift / axis of symmetry $x=h$), and $k$ (vertical shift) in $f(x) = a(x - h)^2 + k$ against the dashed parent parabola $y = x^2$. Notice how the sign of $k$ relative to $a$ controls the discriminant $\\Delta = -4ak$.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'function_graph',
            id: 'math-2-6-quadratic-vertex-explorer',
            title: 'Vertex Form Quadratic Explorer: f(x) = a(x − h)² + k',
            caption: 'Drag sliders to inspect opening direction, vertex (h, k), and how vertical shift determines 2, 1, or 0 real roots.',
            xMin: -6,
            xMax: 8,
            yMin: -8,
            yMax: 10,
            xLabel: 'x',
            yLabel: 'f(x)',
            sliders: [
              { key: 'a', label: 'a (vertical scale / reflection)', min: -3, max: 3, step: 0.25, defaultValue: 1 },
              { key: 'h', label: 'h (axis of symmetry x = h)', min: -4, max: 5, step: 0.5, defaultValue: 2 },
              { key: 'k', label: 'k (vertex y-coordinate)', min: -6, max: 6, step: 0.5, defaultValue: -4 },
            ],
            curves: [
              { id: 'vertex-curve', label: 'f(x) = a(x - h)^2 + k', expression: 'a * (x - h)^2 + k' },
              { id: 'parent-curve', label: 'y = x^2 (parent)', expression: 'x^2', dashed: true },
            ],
            markers: [
              { x: 2, y: -4, label: 'Default Vertex (2, -4)' },
            ],
          },
        },
        { type: 'heading', level: 2, text: '2. Discriminant Rules & Three-Step Inequality Method' },
        {
          type: 'equation',
          latex: 'x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} \\qquad \\Delta = b^2 - 4ac',
          caption: 'Three discriminant outcomes: Δ > 0 (two distinct real roots), Δ = 0 (one repeated tangent root), Δ < 0 (no real roots).',
        },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Leading Coefficient Trap in Discriminant Problems (Grill IB #5a)',
          markdown:
            'For a curve $y = kx^2 + 4kx - 3$ to be a **quadratic** tangent to the $x$-axis, setting $\\Delta = 16k^2 + 12k = 0$ yields $k=0$ or $k=-\\frac{3}{4}$ — **check $k \\neq 0$** unless linear constants are permitted, because $k=0$ collapses the parabola to the horizontal line $y=-3$ (which has NO $x$-intercept!).',
        },
      ],
    },
    {
      topicCode: '2.11',
      title: 'Function Transformations: Dilations, Reflections & Shifts (2.11)',
      summary:
        'Section 3.3 visual guide uniting Ian Toms’s mapping notation (x, y) -> (x/b + h, a*y + k) with the 12-question IB Transformation Handout.',
      sourceFileNames: [
        'Math AA SL Section 3_3 Function Transformation Notes.pdf',
        'Math SL 11 Transformation Handout.pdf',
      ],
      blocks: [
        { type: 'heading', level: 2, text: '1. Interactive Transformation Playground' },
        {
          type: 'paragraph',
          markdown:
            'Every point $(x, y)$ on $y = f(x)$ maps to $\\left(\\frac{x}{b} + h,\\ a y + k\\right)$ on $y = a\\,f\\big(b(x - h)\\big) + k$. **Horizontal scaling and shifts act inversely inside the parentheses** (factor out $b$ BEFORE reading shift $h$!), whereas vertical transformations act directly outside.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'function_graph',
            id: 'math-2-11-transformation-explorer',
            title: 'Live Graph Transformation: g(x) = a·f(b(x − h)) + k on f(x) = x²',
            caption: 'Default matches Section 3.3 Example: shift right h=1, down k=-2, scale vertically by a or horizontally by 1/b.',
            xMin: -6,
            xMax: 6,
            yMin: -6,
            yMax: 10,
            xLabel: 'x',
            yLabel: 'y',
            sliders: [
              { key: 'a', label: 'a (vertical stretch / x-axis flip)', min: -3, max: 3, step: 0.5, defaultValue: 1 },
              { key: 'b', label: 'b (horizontal compression 1/b)', min: 0.5, max: 3, step: 0.5, defaultValue: 1 },
              { key: 'h', label: 'h (horizontal translation right)', min: -3, max: 3, step: 0.5, defaultValue: 1 },
              { key: 'k', label: 'k (vertical translation up)', min: -4, max: 4, step: 0.5, defaultValue: -2 },
            ],
            curves: [
              { id: 'transformed', label: 'g(x) = a*(b*(x - h))^2 + k', expression: 'a * (b * (x - h))^2 + k' },
              { id: 'base', label: 'f(x) = x^2 (parent)', expression: 'x^2', dashed: true },
            ],
            markers: [
              { x: 0, y: 0, label: 'Origin Vertex (0, 0)' },
            ],
          },
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'math-2-11-mapping-rules',
            title: 'Coordinate Mapping Reference for IB Paper 1 Transformation Questions',
            caption: 'Direct coordinate point transformation rules from Section 3.3 & Transformation Handout.',
            columns: ['Function Expression', 'Geometric Transformation', 'Point (x, y) -> Image', 'Asymptote Impact'],
            rows: [
              {
                criterion: 'y = f(x) + k',
                cells: ['Vertical translation by k units (up if k > 0)', '(x, y + k)', 'Horizontal asymptote y = c -> y = c + k'],
              },
              {
                criterion: 'y = f(x - h)',
                cells: ['Horizontal translation right by h units', '(x + h, y)', 'Vertical asymptote x = d -> x = d + h'],
                ibExamTip: 'Always check f(2x - 6) = f(2(x - 3)): horizontal stretch 1/2 FIRST, then translate right 3 (not 6!).',
              },
              {
                criterion: 'y = a·f(x) vs y = f(bx)',
                cells: ['Vertical scale factor a vs horizontal scale factor 1/b', '(x, a*y) vs (x/b, y)', 'y-intercept scales by a in a·f(x); stays fixed in f(bx)'],
              },
              {
                criterion: 'y = -f(x) vs y = f(-x)',
                cells: ['Reflection in x-axis vs reflection in y-axis', '(x, -y) vs (-x, y)', 'Inverts asymptote signs across the respective axis'],
              },
            ],
          },
        },
      ],
    },
    {
      topicCode: '2.8',
      title: 'Reciprocal & Linear-Rational Functions and Asymptotes (2.8)',
      summary:
        'Chapter 4 rational study guide (Sections 4.1–4.3): vertical division-by-zero asymptotes, horizontal end-behaviour limits y = a/c, inverse algebra, and clearing LCDs safely.',
      sourceFileNames: [
        'Math AA SL Chapter 4 Rational Function Notes.pdf',
        'Math AA SL Functions Chapter 2 Notes.pdf',
      ],
      blocks: [
        { type: 'heading', level: 2, text: '1. Interactive Rational Hyperbola: f(x) = (ax + b)/(cx + d)' },
        {
          type: 'paragraph',
          markdown:
            'Follow Ian Toms’s **6-step rational sketching workflow**: (1) Domain & **Vertical Asymptote** from $cx + d = 0 \\implies x = -\\frac{d}{c}$; (2) **Horizontal Asymptote** from leading $x$-coefficients as $x \\to \\pm\\infty \\implies y = \\frac{a}{c}$; (3) **$y$-intercept** at $f(0) = \\frac{b}{d}$; (4) **$x$-intercept** from $ax + b = 0$; (5) Plot hyperbola branches.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'function_graph',
            id: 'math-2-8-rational-explorer',
            title: 'Rational Hyperbola Explorer: f(x) = (ax + b) / (cx + d)',
            caption: 'Inspect how parameters (a, b, c, d) move the horizontal asymptote y = a/c (dashed) and vertical pole x = -d/c.',
            xMin: -8,
            xMax: 8,
            yMin: -8,
            yMax: 8,
            xLabel: 'x',
            yLabel: 'f(x)',
            sliders: [
              { key: 'a', label: 'a (numerator x-coeff)', min: -4, max: 4, step: 0.5, defaultValue: 2 },
              { key: 'b', label: 'b (numerator constant)', min: -5, max: 5, step: 0.5, defaultValue: 1 },
              { key: 'c', label: 'c (denominator x-coeff)', min: 1, max: 3, step: 0.5, defaultValue: 1 },
              { key: 'd', label: 'd (denominator constant)', min: -4, max: 4, step: 0.5, defaultValue: -2 },
            ],
            curves: [
              { id: 'rational-main', label: 'f(x) = (a*x + b)/(c*x + d)', expression: '(a*x + b)/(c*x + d)' },
              { id: 'horiz-asymp', label: 'Horizontal Asymptote y = a/c', expression: '0*x + a/c', dashed: true },
            ],
            markers: [
              { x: -0.5, y: 0, label: 'Default x-int (-0.5, 0)' },
            ],
          },
        },
        {
          type: 'equation',
          latex: 'f(x) = \\frac{ax+b}{cx+d} \\implies \\text{VA: } x = -\\frac{d}{c}, \\quad \\text{HA: } y = \\frac{a}{c}, \\quad f^{-1}(x) = \\frac{dx - b}{-cx + a}',
          caption: 'General Paper 1 non-GDC formula check: switch x and y, clear fraction, group y terms, and factor out y.',
        },
        {
          type: 'callout',
          variant: 'key_formula',
          title: 'Rational Equation Extraneous Root Check (Ch. 4 Ex. 5)',
          markdown:
            'When solving equations like $\\frac{1}{x+2} + 2x = 3$ or $\\frac{1}{x+2} = x$, ALWAYS list domain restrictions **before** multiplying through by the denominator ($x \\neq -2$), and verify candidate solutions do not zero any original denominator.',
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: '2.6',
      paperType: 'Paper 1 (Non-GDC)',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'A quadratic curve has equation $y = a(x - h)^2 + k$ where $a, h, k \\in \\mathbb{Z}$ (integers). Its vertex is $(2, -4)$ and the curve passes through the point $(-1, 6)$. Wait — check if $( -1, 6 )$ produces an exact fraction vs integer: solve for $a$ cleanly in exact form and write the equation of the parabola.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Substitute vertex (h, k) = (2, -4) into y = a(x - 2)^2 - 4', marks: 1 },
          { code: 'M2', criterion: 'Substitute point (-1, 6): 6 = a(-1 - 2)^2 - 4 -> 10 = 9a', marks: 2 },
          { code: 'A1', criterion: 'a = 10/9 -> y = (10/9)(x - 2)^2 - 4 (note: Mock Test 1 phrasing; exact rational value)', marks: 1 },
        ],
        model_answer:
          'Substitute vertex $(2, -4)$: $y = a(x - 2)^2 - 4$.\nSubstitute $(-1, 6)$:\n$$6 = a(-1 - 2)^2 - 4 \\implies 6 = 9a - 4 \\implies 9a = 10 \\implies a = \\frac{10}{9}$$\nHence $y = \\frac{10}{9}(x - 2)^2 - 4$. *(Exact Mock Test 1 item — note $a = \\frac{10}{9}$ is exact rational.)*',
      },
      sourceFileNames: ['Math SL 11 Quadratics Mock Test.pdf', 'Math SL 11 Quadratics Mock Test_SOL.pdf'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 1 (Non-GDC)',
      commandTerm: 'Find',
      difficulty: 'HL Extension',
      maxMarks: 5,
      questionMarkdown:
        'Consider the quadratic expression $y = kx^2 + 4kx - 3$ where $k \\neq 0$.\n(a) Find the value of $k$ such that the graph has **exactly one $x$-intercept**.\n(b) Find the range of values of $k$ such that the graph has **two distinct $x$-intercepts**.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Set up discriminant Δ = b^2 - 4ac = (4k)^2 - 4(k)(-3) = 16k^2 + 12k', marks: 1 },
          { code: 'M2', criterion: '(a) Set Δ = 0 -> 4k(4k + 3) = 0', marks: 1 },
          { code: 'A1', criterion: '(a) Reject k = 0 (since k != 0 for quadratic) -> k = -3/4', marks: 1 },
          { code: 'M3', criterion: '(b) Solve Δ > 0: 4k(4k + 3) > 0 with critical points -3/4 and 0', marks: 1 },
          { code: 'A2', criterion: '(b) k < -3/4 or k > 0', marks: 1 },
        ],
        model_answer:
          'Compute the discriminant:\n$$\\Delta = (4k)^2 - 4(k)(-3) = 16k^2 + 12k = 4k(4k + 3)$$\n(a) For one $x$-intercept, $\\Delta = 0 \\implies k = 0$ or $k = -\\frac{3}{4}$. Since $k \\neq 0$ (otherwise $y = -3$ is linear with zero $x$-intercepts), **$k = -\\frac{3}{4}$**.\n(b) For two distinct $x$-intercepts, $4k(4k + 3) > 0$, giving outer intervals **$k < -\\frac{3}{4}$ or $k > 0$**.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 1 (Non-GDC)',
      commandTerm: 'Solve',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Solve $\\dfrac{1}{x + 2} + 2x = 3$ for $x$, giving your answers in **exact simplest form**.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Clear denominator by multiplying by (x + 2), noting x != -2: 1 + 2x(x + 2) = 3(x + 2)', marks: 1 },
          { code: 'M2', criterion: 'Expand and collect standard quadratic: 2x^2 + 4x + 1 = 3x + 6 -> 2x^2 + x - 5 = 0', marks: 1 },
          { code: 'M3', criterion: 'Apply quadratic formula with a=2, b=1, c=-5: x = (-1 ± sqrt(1 - 4(2)(-5))) / 4', marks: 1 },
          { code: 'A1', criterion: 'Exact answers: x = (-1 ± sqrt(41)) / 4 (both != -2)', marks: 1 },
        ],
        model_answer:
          'Multiply both sides by $(x + 2)$ ($x \\neq -2$):\n$$1 + 2x^2 + 4x = 3x + 6 \\implies 2x^2 + x - 5 = 0$$\nUsing the quadratic formula:\n$$x = \\frac{-1 \\pm \\sqrt{1^2 - 4(2)(-5)}}{2(2)} = \\frac{-1 \\pm \\sqrt{41}}{4}$$',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.6',
      paperType: 'Paper 1 (Non-GDC)',
      commandTerm: 'Write',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'The quadratic function $f$ is defined by $f(x) = -2x^2 + 12x - 7$.\nExpress $f(x)$ in vertex form $f(x) = -2(x - h)^2 + k$ and state the coordinates of its vertex.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Factor -2 from the x^2 and x terms: f(x) = -2(x^2 - 6x) - 7', marks: 1 },
          { code: 'M2', criterion: 'Complete square inside brackets adding & subtracting 9: -2((x - 3)^2 - 9) - 7', marks: 1 },
          { code: 'A1', criterion: 'Expand -2(-9) = +18 -> f(x) = -2(x - 3)^2 + 11', marks: 1 },
          { code: 'A2', criterion: 'Vertex is (3, 11)', marks: 1 },
        ],
        model_answer:
          '$$f(x) = -2(x^2 - 6x) - 7 = -2\\big((x - 3)^2 - 9\\big) - 7 = -2(x - 3)^2 + 18 - 7 = -2(x - 3)^2 + 11$$\nTherefore $h = 3$, $k = 11$, and the vertex is **$(3, 11)$**.',
      },
      sourceFileNames: ['Math SL 11 Quadratics Mock Test.pdf', 'Math SL 11 Quadratics Mock Test_SOL.pdf'],
    },
    {
      topicCode: '2.7',
      paperType: 'Paper 1 (Non-GDC)',
      commandTerm: 'Solve',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown: 'Solve the quadratic inequality $3x^2 + 12x - 15 > 0$.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Factor completely: 3(x^2 + 4x - 5) = 3(x + 5)(x - 1) > 0', marks: 1 },
          { code: 'M2', criterion: 'Identify roots x = -5, x = 1 and upward-opening parabola sign diagram (+ / - / +)', marks: 1 },
          { code: 'A1', criterion: 'Strict outer intervals: x < -5 or x > 1', marks: 1 },
        ],
        model_answer:
          'Factor: $3(x^2 + 4x - 5) = 3(x + 5)(x - 1) > 0$. Roots are $x = -5$ and $x = 1$. Since $a = 3 > 0$, the parabola is positive outside the roots: **$x < -5$ or $x > 1$**.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM(1).jpg'],
    },
    {
      topicCode: '2.6',
      paperType: 'Paper 2 (GDC)',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 7,
      stimulusMarkdown:
        'An object is thrown vertically upward from a rooftop. Its height $h(t)$ in metres after $t$ seconds is modelled by $h(t) = -5t^2 + 20t + 9$, for $t \\ge 0$.',
      questionMarkdown:
        '(a) State the **initial height** of the object. [1]\n(b) Find the **maximum height** reached. [2]\n(c) Find the **two times** at which the object is at a height of $13\\ \\text{m}$, giving answers to 3 significant figures. [2]\n(d) Find the time when the object **hits the ground** ($h(t)=0$), to 3 significant figures. [2]',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: '(a) h(0) = 9 m', marks: 1 },
          { code: 'M1', criterion: '(b) Vertex time t = -20/(2×(-5)) = 2 s (or GDC max)', marks: 1 },
          { code: 'A2', criterion: '(b) h(2) = -5(4) + 40 + 9 = 29 m', marks: 1 },
          { code: 'M2', criterion: '(c) Solve -5t^2 + 20t + 9 = 13 -> 5t^2 - 20t + 4 = 0 via GDC', marks: 1 },
          { code: 'A3', criterion: '(c) t = 0.211 s and t = 3.79 s (3 s.f.)', marks: 1 },
          { code: 'M3', criterion: '(d) Solve -5t^2 + 20t + 9 = 0 for t > 0', marks: 1 },
          { code: 'A4', criterion: '(d) t = 4.41 s (reject negative root -0.408 s)', marks: 1 },
        ],
        model_answer:
          '(a) $h(0) = 9\\ \\text{m}$.\n(b) Vertex at $t = 2\\ \\text{s}$ gives **$h_{\\max} = 29\\ \\text{m}$**.\n(c) Graphing $y_1 = -5x^2+20x+9$ and $y_2 = 13$ intersects at **$t = 0.211\\ \\text{s}$** and **$t = 3.79\\ \\text{s}$**.\n(d) Positive zero gives ground impact at **$t = 4.41\\ \\text{s}$**.',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.4',
      paperType: 'Paper 2 (GDC)',
      commandTerm: 'Solve',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Using your GDC, solve the equation $x^5 - 10x = \\dfrac{1}{x + 3}$ giving all real solutions correct to 3 significant figures.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Plot y1 = x^5 - 10x and y2 = 1/(x + 3) over an appropriate viewing window showing all 4 intersections (or root-find y1 - y2 = 0)', marks: 2 },
          { code: 'A1', criterion: 'All four intersections accurately stated to 3 s.f.: x = -3.00, -1.76, -0.0337, 1.78 (award A1 per pair)', marks: 2 },
        ],
        model_answer:
          'Plotting $y_1 = x^5 - 10x$ and $y_2 = \\frac{1}{x+3}$ on the TI-nspire GDC reveals four intersections (note the branch just right of the $x=-3$ vertical asymptote):\n$$x \\approx -3.00,\\quad -1.76,\\quad -0.0337,\\quad 1.78\\ \\text{(3 s.f.)}$$',
      },
      sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
    },
    {
      topicCode: '2.8',
      paperType: 'Paper 1 (Non-GDC)',
      commandTerm: 'Find',
      difficulty: 'Standard IB',
      maxMarks: 5,
      questionMarkdown:
        'Consider the rational function $f(x) = \\dfrac{2x - 6}{x + 1}$ for $x \\neq -1$.\n(a) Write down the equations of the **vertical** and **horizontal** asymptotes.\n(b) Find the $x$- and $y$-intercepts.\n(c) Find an expression for the inverse function $f^{-1}(x)$.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: '(a) Vertical asymptote x = -1; Horizontal asymptote y = 2', marks: 2 },
          { code: 'A2', criterion: '(b) x-intercept (3, 0) from 2x - 6 = 0; y-intercept (0, -6) from f(0)', marks: 1 },
          { code: 'M1', criterion: '(c) Swap x and y: x = (2y - 6)/(y + 1) -> xy + x = 2y - 6 -> y(x - 2) = -x - 6', marks: 1 },
          { code: 'A3', criterion: '(c) f^-1(x) = (-x - 6)/(x - 2) or (x + 6)/(2 - x) for x != 2', marks: 1 },
        ],
        model_answer:
          '(a) **VA:** $x = -1$ ($x+1=0$); **HA:** $y = \\frac{2}{1} = 2$.\n(b) $x$-intercept at **$x = 3$**; $y$-intercept at **$y = -6$**.\n(c) Swapping $x$ and $y$:\n$$x(y+1)=2y-6 \\implies xy - 2y = -x - 6 \\implies f^{-1}(x) = \\frac{x+6}{2-x},\\quad x \\neq 2$$',
      },
      sourceFileNames: ['Math AA SL Chapter 4 Rational Function Notes.pdf', 'Math AA SL Functions Chapter 2 Notes.pdf'],
    },
  ],
  flashcards: [
    {
      topicCode: '2.6',
      frontMarkdown: 'How do you find the **vertex** directly from standard form $f(x) = ax^2 + bx + c$?',
      backMarkdown:
        'Calculate the axis of symmetry $h = -\\frac{b}{2a}$, then evaluate $k = f\\left(-\\frac{b}{2a}\\right)$.',
    },
    {
      topicCode: '2.7',
      frontMarkdown: 'Interpret all three signs of the discriminant **$\\Delta = b^2 - 4ac$**.',
      backMarkdown:
        '- $\\Delta > 0$: **2 distinct real roots** (crosses $x$-axis twice)\n- $\\Delta = 0$: **1 repeated real root** (tangent to $x$-axis)\n- $\\Delta < 0$: **no real roots** (never meets $x$-axis)',
    },
    {
      topicCode: '2.7',
      frontMarkdown: 'What is Ian Toms’s **3-step method** for solving a quadratic inequality like $3x^2 + 12x - 15 > 0$?',
      backMarkdown:
        '1. Solve the corresponding equality to find boundary roots.\n2. Sketch a number line & quick "garbage graph" parabola.\n3. Read the intervals where the curve sits above ($>$) or below ($<$) the $x$-axis.',
    },
    {
      topicCode: '2.11',
      frontMarkdown: 'State the general point mapping $(x, y) \\mapsto ?$ for $y = a\\,f\\big(b(x - h)\\big) + k$.',
      backMarkdown:
        '$(x, y) \\mapsto \\left(\\dfrac{x}{b} + h,\\ a\\,y + k\\right)$. Remember horizontal operations act **inversely** inside $f(\\cdot)$, and factor $b$ out before reading horizontal shift $h$!',
    },
    {
      topicCode: '2.8',
      frontMarkdown: 'State the **vertical** and **horizontal** asymptotes of $f(x) = \\dfrac{ax + b}{cx + d}$.',
      backMarkdown:
        '**Vertical asymptote:** $x = -\\dfrac{d}{c}$ (denominator $= 0$).\n**Horizontal asymptote:** $y = \\dfrac{a}{c}$ (limit as $x \\to \\pm\\infty$).',
    },
    {
      topicCode: '2.5',
      frontMarkdown: 'How are the graph and domain/range of an **inverse function $f^{-1}(x)$** related to $f(x)$?',
      backMarkdown:
        'Reflecting $y = f(x)$ across **$y = x$** yields $y = f^{-1}(x)$; the **domain of $f$ equals the range of $f^{-1}$** and vice versa (requires $f$ to be one-to-one).',
    },
    {
      topicCode: '2.4',
      frontMarkdown: 'How many **significant figures** are required on non-exact IB Math AA SL Paper 2 GDC answers?',
      backMarkdown:
        '**3 significant figures** (unless the question explicitly specifies an exact fraction or different rounding precision).',
    },
  ],
  topicGuidanceNotes: {
    '2.2': 'Math AA SL Ch.2 Functions (Ian Toms): Master vertical/horizontal line tests, domain/range restrictions (denominators != 0, even roots >= 0), and piecewise notation.',
    '2.4': 'Always set GDC (TI-nspire non-CAS) viewing windows wide enough to catch vertical-asymptote branches (as in Grill IB Q6) and round non-exact Paper 2 answers to 3 s.f.',
    '2.5': 'Composite functions f(g(x)) depend strictly on order; invert linear-rational functions by clearing denominators and grouping y-terms cleanly.',
    '2.6': 'Ch.3 Quadratics (Oct 7 Boards + Mock Tests 1 & 2): Convert fluently between standard ax^2+bx+c, vertex a(x-h)^2+k, and factored a(x-p)(x-q); always show vertex, y-int, and axis x=h on sketches.',
    '2.7': 'Grill IB Non-GDC & Oct 13 Chalkboard: Check leading coefficient k != 0 on Δ discriminant root-count problems; solve inequalities with factored roots + quick parabolic sign sketch; check extraneous roots in rational equations.',
    '2.8': 'Ch.4 Rationals (pp. 199–211): Always determine domain, VA (denominator=0), HA (y=a/c), and both axis intercepts before drawing "butterfly" hyperbola branches.',
    '2.11': 'Section 3.3 & 12-Q Transformation Handout: Apply stretches/reflections before translations unless using direct coordinate mapping (x/b + h, a*y + k); shift asymptotes first on reciprocal curves.',
  },
};
