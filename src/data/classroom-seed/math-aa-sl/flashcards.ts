import type { ClassroomSeedFlashcard } from '../types';

/**
 * Active-recall flashcards for IB Mathematics AA SL (May 2028 cohort),
 * covering all five syllabus units (1.1–5.11) and grounded in Oxford AA SL (2019),
 * Haese Mathematics SL, and class handouts/mock tests.
 */
export const MATH_AA_SL_FLASHCARDS: ClassroomSeedFlashcard[] = [
  // =========================================================================
  // Topic 1: Number & Algebra (14 cards)
  // =========================================================================
  {
    topicCode: '1.1',
    frontMarkdown:
      'What are the **exact bounds** on the coefficient $a$ and exponent $k$ in IB standard form $a \\times 10^k$, and how many significant figures should non-exact GDC answers be given to?',
    backMarkdown:
      '- **Standard form:** $1 \\le a < 10$ and $k \\in \\mathbb{Z}$ (if $a = 10$, rewrite as $1 \\times 10^{k+1}$).\n- **IB accuracy rule:** Unless stated otherwise, give non-exact numerical answers **exact** or correct to **3 significant figures** ($3\\text{ s.f.}$). Keep **5+ figures** (or full calculator memory) during intermediate calculations to avoid premature rounding error.',
  },
  {
    topicCode: '1.2',
    frontMarkdown:
      'State the $n$-th term formula $u_n$, both sum formulas $S_n$, and the algebraic **proof test** for an arithmetic sequence.',
    backMarkdown:
      '- **General term:** $u_n = u_1 + (n - 1)d$\n- **Sum of $n$ terms:**\n  $$S_n = \\frac{n}{2}\\bigl(2u_1 + (n-1)d\\bigr) = \\frac{n}{2}(u_1 + u_n)$$\n- **Proof test:** Show that $u_{n+1} - u_n$ simplifies to a constant independent of $n$ (never verify using only the first 2–3 numerical terms).',
  },
  {
    topicCode: '1.3',
    frontMarkdown:
      'State the $n$-th term formula $u_n$, the finite sum formula $S_n$, and the **two-solution trap** when finding the common ratio $r$ in a geometric sequence.',
    backMarkdown:
      '- **General term:** $u_n = u_1 r^{n-1}$\n- **Finite sum ($r \\neq 1$):**\n  $$S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r}$$\n- **Trap:** When given $r^2 = k$ (e.g., $u_5/u_3 = 9$), **check both $r = +\\sqrt{k}$ and $r = -\\sqrt{k}$** unless the question states all terms are positive or $r > 0$.',
  },
  {
    topicCode: '1.4',
    frontMarkdown:
      'Write the IB compound interest formula and state how **effective annual rate** and **inflation** affect investment value.',
    backMarkdown:
      '- **Compound interest:**\n  $$FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$$\n  where $r\\%$ is nominal annual rate, $k$ is compounding periods per year, and $n$ is years.\n- **Inflation / real value:** Either compound inflation separately or use the real-rate adjustment $\\frac{1 + i_{\\text{nom}}}{1 + i_{\\text{inf}}} - 1$ (avoid just subtracting $r - i$ unless checking an approximation).',
  },
  {
    topicCode: '1.4',
    frontMarkdown:
      'On a GDC **TVM Solver** (`N, I%, PV, PMT, FV, P/Y, C/Y`), why must $PV$ and $FV$ carry **opposite signs**, and what is the sign convention for loan repayments?',
    backMarkdown:
      '- **Cash-flow direction:** Money leaving you (deposit, investment, loan payment) is **negative**; money coming to you (loan principal received, final withdrawal) is **positive**.\n- **Amortized loan:** $PV > 0$ (borrowed), $PMT < 0$ (paid monthly), $FV = 0$ when paid off.\n- Leaving `PV` and `FV` with the same sign triggers a GDC domain/sign error.',
  },
  {
    topicCode: '1.5',
    frontMarkdown:
      'How do you convert between rational/negative exponents and radical/fractional form, and how do you solve $a^{f(x)} = b^{g(x)}$ without a GDC?',
    backMarkdown:
      '- **Exponent rules:** $a^0 = 1\\ (a \\neq 0)$, $a^{-m} = \\frac{1}{a^m}$, $a^{p/q} = (\\sqrt[q]{a})^p = \\sqrt[q]{a^p}$.\n- **Exponential equations:** Rewrite both bases as powers of a common prime base (e.g. $8^{x+1} = 4^{2x-3} \\implies 2^{3x+3} = 2^{4x-6}$), equate exponents, or take $\\ln$ of both sides.',
  },
  {
    topicCode: '1.5',
    frontMarkdown:
      'Define $y = \\log_a x$ equivalently in exponential form and state all **strict domain constraints** on $a$ and $x$.',
    backMarkdown:
      '$$y = \\log_a x \\iff a^y = x$$\n- **Argument:** $x > 0$ (never $0$, never negative).\n- **Base:** $a > 0$ and $a \\neq 1$.\n- **Key values:** $\\log_a 1 = 0$, $\\log_a a = 1$, $a^{\\log_a x} = x$.',
  },
  {
    topicCode: '1.6',
    frontMarkdown:
      'What are the **three golden rules** for an IB **"Show that"** or **"Prove that"** algebra question?',
    backMarkdown:
      '1. **Work one-sidedly:** Start cleanly with $\\text{LHS}$ and transform algebraically step by step to $\\text{RHS}$ (do not cross-multiply an unproved identity as if it were an equation).\n2. **Generalize integers cleanly:** Represent an even integer as $2k$, odd as $2k + 1$, consecutive odd integers as $2k + 1$ and $2k + 3$ ($k \\in \\mathbb{Z}$).\n3. **Never prove by example:** Testing $n = 1, 2, 3$ earns zero proof marks.',
  },
  {
    topicCode: '1.7',
    frontMarkdown:
      'State the **three Laws of Logarithms** and the **Change of Base formula** from the IB AA SL formula booklet.',
    backMarkdown:
      '1. $\\log_a(xy) = \\log_a x + \\log_a y$\n2. $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$\n3. $\\log_a(x^m) = m\\log_a x$\n- **Change of base:** $\\log_a x = \\frac{\\log_b x}{\\log_b a} = \\frac{\\ln x}{\\ln a}$.',
  },
  {
    topicCode: '1.7',
    frontMarkdown:
      'When solving $\\log_2(x + 3) + \\log_2(x - 1) = 5$, what critical check **must** be performed at the final step?',
    backMarkdown:
      'Check every candidate root back inside **each original logarithm’s argument**:\n- $(x+3)(x-1) = 32 \\implies x^2 + 2x - 35 = 0 \\implies (x+7)(x-5) = 0$.\n- Reject $x = -7$ because both $\\log_2(-4)$ and $\\log_2(-8)$ are **undefined**; only $x = 5$ is valid.',
  },
  {
    topicCode: '1.8',
    frontMarkdown:
      'When does an infinite geometric series $\\sum_{n=1}^{\\infty} u_1 r^{n-1}$ **converge**, and what is its exact sum $S_\\infty$?',
    backMarkdown:
      '- **Convergence condition:** $|r| < 1$, i.e. $-1 < r < 1$ (and $r \\neq 0$ for a non-trivial geometric sequence).\n- **Sum to infinity:**\n  $$S_\\infty = \\frac{u_1}{1 - r}$$\n- Watch for **disguised ratio expressions** like $r = \\sin x$ or $r = \\frac{2}{x-1}$ when asked for "values of $x$ for which the series converges."',
  },
  {
    topicCode: '1.8',
    frontMarkdown:
      'How do you evaluate a sigma sum $\\sum_{k=m}^{n} f(k)$ when the lower index is **$m > 1$** instead of $1$?',
    backMarkdown:
      '- **Subtraction method:** $\\sum_{k=m}^{n} f(k) = S_n - S_{m-1}$.\n- **Direct re-indexing:** First term is $u_1^{\\text{new}} = f(m)$ and the exact **number of terms** is $N = n - m + 1$ (do not forget the $+1$!).',
  },
  {
    topicCode: '1.9',
    frontMarkdown:
      'Write the general $(r+1)$-th term in the binomial expansion of $(a + b)^n$ ($n \\in \\mathbb{Z}^+$) and state how to find $\\binom{n}{r}$ without a GDC.',
    backMarkdown:
      '- **General term:**\n  $$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$$\n- **Combinatorial formula:**\n  $$\\binom{n}{r} = {^n C_r} = \\frac{n!}{r!(n-r)!}$$\n- Remember Pascal symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$, and row sums equal $2^n$.',
  },
  {
    topicCode: '1.9',
    frontMarkdown:
      'Outline the method to find the **constant term** (term independent of $x$) in $\\left(ax^p + \\frac{b}{x^q}\\right)^n$.',
    backMarkdown:
      '1. Write the general term: $\\binom{n}{r}(ax^p)^{n-r}(bx^{-q})^r$.\n2. Collect the total exponent of $x$: $p(n - r) - qr$.\n3. Set the exponent equal to **$0$** and solve for integer $r \\in \\{0, 1, \\dots, n\\}$.\n4. Substitute $r$ back into $\\binom{n}{r}a^{n-r}b^r$ (including signs on $b^r$!).',
  },

  // =========================================================================
  // Topic 2: Functions (16 cards)
  // =========================================================================
  {
    topicCode: '2.1',
    frontMarkdown:
      'Given gradient $m$ and point $(x_1, y_1)$, write the point-slope form, perpendicular gradient rule, and IB’s **general integer form** for a straight line.',
    backMarkdown:
      '- **Point-slope:** $y - y_1 = m(x - x_1)$\n- **Perpendicular gradient:** $m_{\\perp} = -\\frac{1}{m}$ (so $m_1 m_2 = -1$)\n- **IB General Form:** $ax + by + d = 0$ where $a, b, d \\in \\mathbb{Z}$ (clear fractions and decimals!).',
  },
  {
    topicCode: '2.2',
    frontMarkdown:
      'What are the **three classical domain exclusions** for real-valued IB functions, and how do you distinguish a function from a general relation?',
    backMarkdown:
      '- **Function test:** Every input $x$ maps to **at most one** output $y$ (**Vertical Line Test**).\n- **Three domain exclusions over $\\mathbb{R}$:**\n  1. Denominator $= 0$ (e.g. $\\frac{1}{g(x)} \\implies g(x) \\neq 0$)\n  2. Even radical $< 0$ (e.g. $\\sqrt{g(x)} \\implies g(x) \\ge 0$)\n  3. Logarithm argument $\\le 0$ (e.g. $\\ln g(x) \\implies g(x) > 0$)',
  },
  {
    topicCode: '2.3',
    frontMarkdown:
      'In IB markschemes, what is the difference between **"Sketch"** and **"Draw"** for a graph?',
    backMarkdown:
      '- **Sketch:** Freehand curve showing **correct general shape** and **key features** clearly labeled (axis intercepts, asymptotes as dashed lines with equations, extrema, endpoints).\n- **Draw:** Accurate plot on scaled axes/grid paper using exact plotted coordinates joined cleanly.',
  },
  {
    topicCode: '2.4',
    frontMarkdown:
      'Distinguish between a **local extremum** and a **global (absolute) extremum** on a closed domain $[a, b]$.',
    backMarkdown:
      '- **Local max/min:** Highest/lowest $y$-value in a small open neighborhood around $x = c$ (where $f\'(c) = 0$ or sign changes).\n- **Global max/min on $[a, b]$:** Largest/smallest $y$-value across the **entire domain** — always check **both** interior critical points **and** the domain endpoints $f(a), f(b)$!',
  },
  {
    topicCode: '2.5',
    frontMarkdown:
      'How is $(f \\circ g)(x)$ evaluated, and what condition guarantees that the composite $f \\circ g$ exists cleanly?',
    backMarkdown:
      '- **Order of evaluation (right-to-left):** $(f \\circ g)(x) = f(g(x))$ — apply inner $g$ first, then feed the output into outer $f$.\n- **Existence / range condition:** $\\text{Range}(g) \\subseteq \\text{Domain}(f)$ (otherwise restrict $\\text{Domain}(g)$ to values whose $g(x)$ falls inside $\\text{Domain}(f)$).',
  },
  {
    topicCode: '2.5',
    frontMarkdown:
      'List all **four geometric and algebraic properties** of an inverse function $f^{-1}(x)$ and state what defines a **self-inverse** function.',
    backMarkdown:
      '1. Exists iff $f$ is **one-to-one** (Horizontal Line Test).\n2. **Domain–Range swap:** $\\text{Dom}(f^{-1}) = \\text{Ran}(f)$ and $\\text{Ran}(f^{-1}) = \\text{Dom}(f)$.\n3. **Graph symmetry:** Reflection across the line **$y = x$**.\n4. **Composition identity:** $(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x$.\n- **Self-inverse:** $f^{-1}(x) = f(x)$, equivalently $f(f(x)) = x$ (e.g., $f(x) = \\frac{1}{x}$ or $ax + b$ with $a=-1$).',
  },
  {
    topicCode: '2.5',
    frontMarkdown:
      'When inverting a restricted quadratic like $f(x) = (x - 3)^2 + 1$ for $x \\le 3$, how do you choose the correct $\\pm$ sign in $f^{-1}(x)$?',
    backMarkdown:
      '- Since $\\text{Dom}(f) = (-\\infty, 3]$ and $\\text{Ran}(f) = [1, \\infty)$:\n- $\\text{Ran}(f^{-1}) = (-\\infty, 3]$, so $f^{-1}(x) \\le 3$.\n- Solving $x = (y - 3)^2 + 1 \\implies y = 3 \\pm \\sqrt{x - 1}$ forces the **negative branch**:\n  $$f^{-1}(x) = 3 - \\sqrt{x - 1}, \\quad x \\ge 1.$$',
  },
  {
    topicCode: '2.6',
    frontMarkdown:
      'Compare the **three forms** of a quadratic function and state which key feature each form reveals immediately.',
    backMarkdown:
      '- **Standard form** $f(x) = ax^2 + bx + c$: reveals $y$-intercept $(0, c)$, concavity $a$, and axis of symmetry $h = -\\frac{b}{2a}$.\n- **Vertex form** $f(x) = a(x - h)^2 + k$: reveals vertex $(h, k)$ and extrema directly.\n- **Factored form** $f(x) = a(x - p)(x - q)$: reveals real $x$-intercepts $(p, 0)$ and $(q, 0)$, with axis $h = \\frac{p + q}{2}$.',
  },
  {
    topicCode: '2.6',
    frontMarkdown:
      'What is the **number-one algebraic slip** when completing the square on $f(x) = ax^2 + bx + c$ with $a \\neq 1$?',
    backMarkdown:
      'Forgetting to multiply the subtracted square term by $a$ when pulling it outside the bracket!\n- Correct factoring on first two terms:\n  $$a\\!\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a^2}\\right] + c = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a} + c.$$',
  },
  {
    topicCode: '2.7',
    frontMarkdown:
      'State the discriminant $\\Delta = b^2 - 4ac$ conditions for roots of $ax^2 + bx + c = 0$, positive definiteness, and the **leading-coefficient $k = 0$ trap**.',
    backMarkdown:
      '- $\\Delta > 0$: two distinct real roots (line cuts parabola twice).\n- $\\Delta = 0$: one repeated root (line is **tangent** to curve).\n- $\\Delta < 0$: no real roots (**strictly positive** for all $x \\in \\mathbb{R}$ iff $a > 0$ and $\\Delta < 0$!).\n- **$k = 0$ trap:** In $kx^2 + bx + c = 0$, ALWAYS test $k = 0$ separately because it reduces the equation to a linear equation, NOT a quadratic.',
  },
  {
    topicCode: '2.7',
    frontMarkdown:
      'When solving a quadratic inequality such as $x^2 - 5x + 6 \\le 0$ vs $> 0$, explain the **sign-line / parabola sketch rule** and why you must never divide by $(x - p)$.',
    backMarkdown:
      '- **Never divide by an expression containing $x$:** you lose roots or reverse inequality signs silently when $(x - p) < 0$.\n- **Parabola method:** Find roots $p < q$. If $a > 0$, then:\n  - $f(x) \\le 0$ **between** roots ($p \\le x \\le q$, "less than $\\to$ sandwich").\n  - $f(x) > 0$ **outside** roots ($x < p$ or $x > q$).',
  },
  {
    topicCode: '2.8',
    frontMarkdown:
      'For the linear-rational function $f(x) = \\frac{ax + b}{cx + d}$ ($c \\neq 0$, $ad - bc \\neq 0$), state the **VA**, **HA**, **axes intercepts**, and **quotient-remainder form**.',
    backMarkdown:
      '- **Vertical Asymptote (VA):** $x = -\\frac{d}{c}$ (denominator $= 0$)\n- **Horizontal Asymptote (HA):** $y = \\frac{a}{c}$ (ratio of leading coefficients)\n- **Intercepts:** $x$-int at $x = -\\frac{b}{a}$; $y$-int at $y = \\frac{b}{d}$\n- **Polynomial division form:** $\\frac{ax+b}{cx+d} = \\frac{a}{c} + \\frac{k}{cx+d}$, revealing exact stretch/translation from $\\frac{1}{x}$.',
  },
  {
    topicCode: '2.9',
    frontMarkdown:
      'Compare the asymptotes, domain, range, and $y$-intercepts of $f(x) = a e^{kx} + c$ ($a, k > 0$) and its shifted inverse $g(x) = \\ln(x - c) + d$.',
    backMarkdown:
      '- **Exponential** $f(x) = a e^{kx} + c$: Domain $\\mathbb{R}$, Range $(c, \\infty)$, **HA $y = c$**, $y$-intercept $(0, a + c)$.\n- **Logarithmic** $g(x) = \\ln(x - c) + d$: Domain $(c, \\infty)$, Range $\\mathbb{R}$, **VA $x = c$**, $x$-intercept when $\\ln(x - c) = -d \\implies x = c + e^{-d}$.',
  },
  {
    topicCode: '2.10',
    frontMarkdown:
      'How do you use a **GDC** to solve a non-elementary equation like $e^x = x^2 + 3$ on Paper 2 for full IB method marks?',
    backMarkdown:
      '1. Graph $Y_1 = e^x$ and $Y_2 = x^2 + 3$ (or $Y_1 = e^x - x^2 - 3$ and find zeros).\n2. **Write down the graphical method / intersection sketch** on your exam script (IB requires brief evidence of GDC method, not just a bare number!).\n3. Report intersection coordinate(s) $x$ to **3 significant figures** (check window bounds cover the full required domain!).',
  },
  {
    topicCode: '2.11',
    frontMarkdown:
      'In $g(x) = a\\,f\\bigl(b(x - c)\\bigr) + d$, why MUST $b$ be factored out before reading the horizontal translation $c$?',
    backMarkdown:
      'Because inside $f(\\dots)$, transformations **reverse** and scale/shift order matters:\n- Writing $f(2x - 6)$ as $f\\bigl(2(x - 3)\\bigr)$ shows a horizontal compression by factor $\\frac{1}{2}$ followed by a shift **3 units right** (NOT 6 units right!).\n- **Exact coordinate rule:** $(x, y) \\mapsto \\left(\\frac{x}{b} + c,\\; ay + d\\right)$.',
  },
  {
    topicCode: '2.11',
    frontMarkdown:
      'Given $y = f(x)$ with VA $x = p$ and HA $y = q$, where do the asymptotes move under $g(x) = a\\,f\\bigl(b(x - c)\\bigr) + d$?',
    backMarkdown:
      'Apply the coordinate map $(x, y) \\mapsto \\left(\\frac{x}{b} + c,\\; ay + d\\right)$ directly to the asymptotes:\n- **New VA:** $x = \\frac{p}{b} + c$\n- **New HA:** $y = aq + d$\nNotice vertical shifts $+d$ never move vertical asymptotes, and horizontal shifts $c$ never move horizontal asymptotes.',
  },

  // =========================================================================
  // Topic 3: Geometry & Trigonometry (12 cards)
  // =========================================================================
  {
    topicCode: '3.1',
    frontMarkdown:
      'State the 3D distance formula between $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$, plus the volume of a right circular **cone** vs a **sphere**.',
    backMarkdown:
      '- **3D distance:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$\n- **3D midpoint:** $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)$\n- **Cone volume:** $V = \\frac{1}{3}\\pi r^2 h$ (curved surface area $\\pi r l$, $l = \\sqrt{r^2 + h^2}$)\n- **Sphere volume / SA:** $V = \\frac{4}{3}\\pi r^3$, $A = 4\\pi r^2$.',
  },
  {
    topicCode: '3.2',
    frontMarkdown:
      'When using the **Sine Rule** $\\frac{\\sin B}{b} = \\frac{\\sin A}{a}$ to find an angle $B$, when does the **ambiguous case** produce TWO valid triangles?',
    backMarkdown:
      '1. Given angle $A$ is acute and $a < b$ (specifically $b\\sin A < a < b$).\n2. Compute acute $B_1 = \\arcsin\\!\\left(\\frac{b\\sin A}{a}\\right)$ and obtuse supplement **$B_2 = 180^\\circ - B_1$**.\n3. Both triangles are valid iff **$A + B_2 < 180^\\circ$** (leaving a positive third angle $C_2$).',
  },
  {
    topicCode: '3.2',
    frontMarkdown:
      'State both forms of the **Cosine Rule** (for side $c$ and for $\\cos C$) and the **non-right triangle area formula**.',
    backMarkdown:
      '- **Side form (SAS):** $c^2 = a^2 + b^2 - 2ab\\cos C$\n- **Angle form (SSS):** $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$\n- **Area (SAS):** $\\text{Area} = \\frac{1}{2}ab\\sin C$.',
  },
  {
    topicCode: '3.3',
    frontMarkdown:
      'How do you find the **angle between a line segment $AG$ and a plane** in 3D geometry, and what are the rules for **true bearings**?',
    backMarkdown:
      '- **Line-to-plane angle:** Drop a perpendicular from $G$ to its foot $F$ on the plane; the required angle is $\\angle GAF$ inside right triangle $\\triangle AFG$.\n- **Three-figure bearings:** Measured **clockwise from North**, always written as **3 digits** before the decimal (e.g. $042^\\circ$ or $235^\\circ$). The bearing of $A$ from $B$ differs from $B$ from $A$ by $\\pm 180^\\circ$.',
  },
  {
    topicCode: '3.4',
    frontMarkdown:
      'State the **radian** arc length $l$, sector area $A$, and segment area formulas for radius $r$ and central angle $\\theta$ (**radians**).',
    backMarkdown:
      '- **Conversion:** $\\theta_{\\text{rad}} = \\frac{\\pi}{180}\\theta^\\circ$\n- **Arc length:** $l = r\\theta$ (sector perimeter $= l + 2r$!)\n- **Sector area:** $A_{\\text{sector}} = \\frac{1}{2}r^2\\theta$\n- **Minor segment area:** $A_{\\text{seg}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$ (must use radian mode!).',
  },
  {
    topicCode: '3.5',
    frontMarkdown:
      'State the unit-circle definitions of $\\cos\\theta, \\sin\\theta, \\tan\\theta$, the **ASTC quadrant signs**, and exact values at $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$.',
    backMarkdown:
      '- $(\\cos\\theta, \\sin\\theta)$ on $x^2 + y^2 = 1$; $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.\n- **ASTC (Q1–Q4):** Q1 All $+$; Q2 $\\sin +$; Q3 $\\tan +$; Q4 $\\cos +$.\n- Exact $\\sin$ at $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$: $\\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}$ (and $\\cos$ reverses: $\\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{1}{2}$).',
  },
  {
    topicCode: '3.6',
    frontMarkdown:
      'State the Pythagorean identity and all **three equivalent forms of $\\cos 2\\theta$** in the IB AA SL formula booklet.',
    backMarkdown:
      '- **Pythagorean:** $\\sin^2\\theta + \\cos^2\\theta = 1$\n- **Double-angle $\\sin$:** $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$\n- **Double-angle $\\cos$:**\n  $$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$',
  },
  {
    topicCode: '3.6',
    frontMarkdown:
      'When asked to solve $2\\cos^2 x + 3\\sin x - 3 = 0$, which identity turns the equation into a clean single-function quadratic?',
    backMarkdown:
      'Substitute $\\cos^2 x = 1 - \\sin^2 x$ (replace the **squared** function to match the linear term $\\sin x$):\n$$2(1 - \\sin^2 x) + 3\\sin x - 3 = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0 \\implies (2\\sin x - 1)(\\sin x - 1) = 0.$$',
  },
  {
    topicCode: '3.7',
    frontMarkdown:
      'Given a sinusoid $y = a\\sin\\bigl(b(x - c)\\bigr) + d$ ($b > 0$), state how to read off **amplitude**, **period**, **principal axis**, and **horizontal phase shift**.',
    backMarkdown:
      '- **Amplitude:** $|a|$ (half the peak-to-trough height)\n- **Period:** $T = \\frac{2\\pi}{b}$ (so $b = \\frac{2\\pi}{T}$)\n- **Principal axis (midline):** $y = d$\n- **Phase shift:** $c$ units right (ensure $b$ is factored out!).',
  },
  {
    topicCode: '3.7',
    frontMarkdown:
      'How do you reconstruct parameters $a, b, d$ for $y = a\\cos\\bigl(b(t - c)\\bigr) + d$ from a **high tide $(t_{\\max}, y_{\\max})$** and the adjacent **low tide $(t_{\\min}, y_{\\min})$**?',
    backMarkdown:
      '- **Midline:** $d = \\frac{y_{\\max} + y_{\\min}}{2}$\n- **Amplitude:** $a = \\frac{y_{\\max} - y_{\\min}}{2}$\n- **Period & $b$:** Half a cycle separates peak and trough, so $T = 2|t_{\\max} - t_{\\min}|$ and $b = \\frac{2\\pi}{T} = \\frac{\\pi}{|t_{\\max} - t_{\\min}|}$. Using $\\cos$ puts $c = t_{\\max}$ cleanly!',
  },
  {
    topicCode: '3.8',
    frontMarkdown:
      'When solving $\\sin(3x - \\frac{\\pi}{4}) = \\frac{1}{2}$ for $x \\in [0, 2\\pi]$, what is the **mandatory first step** so you do not lose solutions?',
    backMarkdown:
      '**Transform the domain BEFORE solving for $x$:** let $u = 3x - \\frac{\\pi}{4}$.\n- Since $0 \\le x \\le 2\\pi$, the adjusted search interval is:\n  $$-\\frac{\\pi}{4} \\le u \\le 6\\pi - \\frac{\\pi}{4} = \\frac{23\\pi}{4}.$$\n- Find **all** solutions for $u$ inside $[-\\frac{\\pi}{4}, \\frac{23\\pi}{4}]$, then solve $x = \\frac{u + \\pi/4}{3}$.',
  },
  {
    topicCode: '3.8',
    frontMarkdown:
      'Given $\\cos\\theta = -\\frac{3}{5}$ and $\\theta \\in (\\frac{\\pi}{2}, \\pi)$, find exact $\\sin\\theta$ and $\\sin 2\\theta$ without a calculator.',
    backMarkdown:
      '- In Quadrant II ($\\frac{\\pi}{2} < \\theta < \\pi$), $\\sin\\theta > 0$:\n  $$\\sin\\theta = +\\sqrt{1 - (-3/5)^2} = \\frac{4}{5}.$$\n- **Double angle:** $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2\\left(\\frac{4}{5}\\right)\\left(-\\frac{3}{5}\\right) = -\\frac{24}{25}$.',
  },

  // =========================================================================
  // Topic 4: Statistics & Probability (13 cards)
  // =========================================================================
  {
    topicCode: '4.1',
    frontMarkdown:
      'Distinguish **systematic**, **stratified**, **quota**, and **convenience** sampling, and identify potential sampling bias.',
    backMarkdown:
      '- **Systematic:** Every $k$-th item from an ordered list after a random start.\n- **Stratified:** Random selection **within** homogeneous strata proportional to stratum size (most representative).\n- **Quota:** Non-random selection filling fixed subgroup counts (interviewer bias).\n- **Convenience:** Whoever is easiest to reach (strong selection bias).',
  },
  {
    topicCode: '4.2',
    frontMarkdown:
      'State how to estimate the **mean** from grouped intervals, define **IQR**, and write the **standard IB outlier boundaries**.',
    backMarkdown:
      '- **Grouped mean:** Use each class **mid-interval value** $x_m$ multiplied by frequency $f$: $\\bar{x} \\approx \\frac{\\sum f x_m}{\\sum f}$.\n- **Interquartile range:** $\\text{IQR} = Q_3 - Q_1$ (middle $50\\%$ spread, resistant to outliers).\n- **Outlier fences:** Values $< Q_1 - 1.5\\,\\text{IQR}$ or $> Q_3 + 1.5\\,\\text{IQR}$.',
  },
  {
    topicCode: '4.3',
    frontMarkdown:
      'If every value in a dataset is linearly transformed by $Y = aX + b$ ($a \\neq 0$), how do the **mean**, **IQR**, **standard deviation**, and **variance** change?',
    backMarkdown:
      '- **Location shifts by $b$ too:** $\\bar{y} = a\\bar{x} + b$\n- **Spread ignores $+b$ (shift-invariant):**\n  $$\\text{IQR}_Y = |a|\\,\\text{IQR}_X, \\qquad \\sigma_Y = |a|\\,\\sigma_X, \\qquad \\text{Var}(Y) = a^2\\,\\text{Var}(X).$$',
  },
  {
    topicCode: '4.4',
    frontMarkdown:
      'State the **centroid point** of a least-squares regression line, Pearson’s $r$ range, and the **two reliability pitfalls** when predicting with regression.',
    backMarkdown:
      '- **Guaranteed point:** Regression line of $y$ on $x$ always passes through **$(\\bar{x}, \\bar{y})$**.\n- **Pearson’s $r$:** $-1 \\le r \\le 1$ (measures **linear** strength & direction only; $r \\approx 0$ does not rule out a curved relationship).\n- **Two pitfalls:**\n  1. **Extrapolation** outside observed $x$-range is unreliable.\n  2. **Wrong direction:** never rearrange $y$-on-$x$ to predict $x$ from $y$; compute the regression line of $x$ on $y$ instead.',
  },
  {
    topicCode: '4.5',
    frontMarkdown:
      'Contrast **mutually exclusive** events vs **independent** events, and write the general **addition rule**.',
    backMarkdown:
      '- **Addition rule:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$\n- **Mutually exclusive:** $P(A \\cap B) = 0$ (cannot happen simultaneously).\n- **Independent:** $P(A \\cap B) = P(A)P(B)$ (equivalently $P(A \\mid B) = P(A)$).\n- Two non-zero probability events CANNOT be both mutually exclusive and independent!',
  },
  {
    topicCode: '4.6',
    frontMarkdown:
      'State the **conditional probability** formula and outline how to solve **"given it succeeded, find probability it came from Branch 1"** on a tree diagram.',
    backMarkdown:
      '- **Formula:** $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ ($P(B) > 0$).\n- **Tree diagram reversal (Bayes pattern):**\n  1. Find numerator $P(B_1 \\cap \\text{Pass})$ along the specific path.\n  2. Find denominator $P(\\text{Pass})$ by summing **all** pass branches.\n  3. Divide: $P(B_1 \\mid \\text{Pass}) = \\frac{P(B_1 \\cap \\text{Pass})}{P(\\text{Pass})}$.',
  },
  {
    topicCode: '4.7',
    frontMarkdown:
      'State the two axioms of a valid **discrete probability distribution**, the expected value $E(X)$, and the condition for a **fair game**.',
    backMarkdown:
      '- **Valid PMF:** $0 \\le p_i \\le 1$ for every outcome and **$\\sum P(X = x_i) = 1$**.\n- **Expected value:** $E(X) = \\sum x_i\\,P(X = x_i)$.\n- **Fair game:** Expected net gain equals zero ($E(\\text{Net Gain}) = 0$, or $E(\\text{Payout}) = \\text{Entry Fee}$).',
  },
  {
    topicCode: '4.8',
    frontMarkdown:
      'State the **4 binomial conditions (BINS)**, mean & variance of $X \\sim B(n, p)$, and the **strict-inequality GDC trap**.',
    backMarkdown:
      '- **BINS:** Binary outcome, Independent trials, fixed Number $n$, constant Success probability $p$.\n- **Moments:** $E(X) = np$, $\\text{Var}(X) = np(1 - p)$.\n- **Discrete GDC trap:** On TI/Casio, `binomcdf(n, p, k)` gives $P(X \\le k)$ **inclusive**. So:\n  $$P(X \\ge k) = 1 - P(X \\le k - 1), \\qquad P(X > k) = 1 - P(X \\le k).$$',
  },
  {
    topicCode: '4.9',
    frontMarkdown:
      'State the **standardization formula** to $Z \\sim N(0, 1)$, the **68–95–99.7 rule**, and when to use `normalcdf` vs `invNorm`.',
    backMarkdown:
      '- **Z-score:** $Z = \\frac{X - \\mu}{\\sigma}$ (signed number of standard deviations from mean).\n- **Empirical rule:** $\\approx 68\\%$ within $\\mu \\pm \\sigma$; $\\approx 95\\%$ within $\\mu \\pm 2\\sigma$; $\\approx 99.7\\%$ within $\\mu \\pm 3\\sigma$.\n- **`normalcdf(lower, upper, μ, σ)`:** given $x$-interval $\\to$ outputs **probability**.\n- **`invNorm(area_left, μ, σ)`:** given **left cumulative area** $\\to$ outputs boundary $x$.',
  },
  {
    topicCode: '4.9',
    frontMarkdown:
      'How do you find an **unknown mean $\\mu$ or standard deviation $\\sigma$** for $X \\sim N(\\mu, \\sigma^2)$ when given $P(X < c) = p$?',
    backMarkdown:
      '1. Find $z = \\text{invNorm}(p,\\, 0,\\, 1)$ on the standard normal distribution.\n2. Substitute into the standardization equation $\\frac{c - \\mu}{\\sigma} = z$ and solve for $\\mu$ or $\\sigma$ (or solve the $2\\times 2$ linear system if **two** tail probabilities are given).',
  },
  {
    topicCode: '4.10',
    frontMarkdown:
      'When do you use **$y$ on $x$** vs **$x$ on $y$**, and why might a scatter plot with $r = 0.96$ still **not** prove causation?',
    backMarkdown:
      '- Use **$y$ on $x$** solely to estimate $y$ from $x$, and **$x$ on $y$** solely to estimate $x$ from $y$ (only identical if $|r| = 1$).\n- **Correlation $\\neq$ causation:** A **confounding (lurking) variable**, coincidence, or reverse directionality can drive strong $r$ without causal mechanism.',
  },
  {
    topicCode: '4.11',
    frontMarkdown:
      'Contrast $P(X = c)$ and $P(X < c)$ vs $P(X \\le c)$ for a **continuous** normal variable vs a **discrete** binomial variable.',
    backMarkdown:
      '- **Continuous ($N(\\mu, \\sigma^2)$):** $P(X = c) = 0$ always, so $P(X < c) = P(X \\le c)$ and $P(X > c) = P(X \\ge c)$.\n- **Discrete ($B(n, p)$):** $P(X = c) > 0$, so $P(X < c) = P(X \\le c - 1) \\neq P(X \\le c)$.',
  },
  {
    topicCode: '4.12',
    frontMarkdown:
      'Describe the classic IB **Normal-to-Binomial two-stage problem** structure and how full intermediate accuracy is preserved.',
    backMarkdown:
      '- **Stage 1 (Normal):** Compute single-item success probability $p = P(X > c)$ from $X \\sim N(\\mu, \\sigma^2)$ — store $p$ to **5+ decimals** in GDC memory!\n- **Stage 2 (Binomial):** Model $n$ independent draws with $Y \\sim B(n, p)$ using the unrounded $p$ to compute $P(Y = k)$ or $P(Y \\ge k)$.',
  },

  // =========================================================================
  // Topic 5: Calculus (13 cards)
  // =========================================================================
  {
    topicCode: '5.1',
    frontMarkdown:
      'What does the derivative $f\'(a)$ measure geometrically, and how does the **limit of secant gradients** define it?',
    backMarkdown:
      '$$f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$\n- Geometrically, $f\'(a)$ is the **instantaneous rate of change** of $f$ with respect to $x$ — the gradient of the **tangent line** to $y = f(x)$ at $x = a$.',
  },
  {
    topicCode: '5.2',
    frontMarkdown:
      'State the derivative sign conditions for **strictly increasing**, **strictly decreasing**, and **stationary points**, and give the **normal line gradient**.',
    backMarkdown:
      '- **Increasing:** $f\'(x) > 0$; **Decreasing:** $f\'(x) < 0$.\n- **Stationary point:** $f\'(x) = 0$.\n- **Normal gradient at $x = a$ ($f\'(a) \\neq 0$):**\n  $$m_{\\text{normal}} = -\\frac{1}{f\'(a)}.$$',
  },
  {
    topicCode: '5.3',
    frontMarkdown:
      'How must expressions like $\\frac{3x^2 - 5}{\\sqrt{x}}$ be rewritten **before** applying the Power Rule for differentiation or integration?',
    backMarkdown:
      'Split into individual terms with **negative/fractional powers** (no Quotient/Power shortcuts needed for monomial denominators):\n$$\\frac{3x^2 - 5}{x^{1/2}} = 3x^{3/2} - 5x^{-1/2}.$$',
  },
  {
    topicCode: '5.4',
    frontMarkdown:
      'Outline the steps to find a point $P(x_0, y_0)$ on $y = f(x)$ whose **tangent** is parallel to a given line $ax + by + d = 0$.',
    backMarkdown:
      '1. Rearrange line to $y = -\\frac{a}{b}x - \\frac{d}{b}$ to read its gradient $m = -\\frac{a}{b}$.\n2. Compute $f\'(x)$ and solve **$f\'(x_0) = m$**.\n3. Substitute $x_0$ back into **$f(x)$** (NOT $f\'(x)$!) to get $y_0$.',
  },
  {
    topicCode: '5.5',
    frontMarkdown:
      'State the antiderivatives $\\int x^n\\,dx$ ($n \\neq -1$) and $\\int \\frac{1}{x}\\,dx$, and explain how an **initial condition** determines $+C$.',
    backMarkdown:
      '- $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C\\quad (n \\neq -1)$\n- $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$\n- Given $f\'(x)$ and $(x_0, y_0)$, integrate to $f(x) = F(x) + C$, then plug in $f(x_0) = y_0$ to solve uniquely for **$C$** (forgetting $+C$ loses accuracy marks across the whole part!).',
  },
  {
    topicCode: '5.6',
    frontMarkdown:
      'State the **Chain Rule**, **Product Rule**, and **Quotient Rule** plus derivatives of $e^{g(x)}$, $\\ln g(x)$, $\\sin g(x)$, and $\\cos g(x)$.',
    backMarkdown:
      '- **Product:** $(uv)\' = u\'v + uv\'$; **Quotient:** $(u/v)\' = \\frac{vu\' - uv\'}{v^2}$\n- **Chain derivatives:**\n  - $\\frac{d}{dx}[g(x)]^n = n[g(x)]^{n-1}g\'(x)$\n  - $\\frac{d}{dx}e^{g(x)} = g\'(x)e^{g(x)}$, $\\quad \\frac{d}{dx}\\ln g(x) = \\frac{g\'(x)}{g(x)}$\n  - $\\frac{d}{dx}\\sin g(x) = g\'(x)\\cos g(x)$, $\\quad \\frac{d}{dx}\\cos g(x) = -g\'(x)\\sin g(x)$.',
  },
  {
    topicCode: '5.7',
    frontMarkdown:
      'Compare the **First Derivative** vs **Second Derivative** tests for local extrema, and state the exact condition for a **point of inflexion**.',
    backMarkdown:
      '- **At $f\'(c) = 0$:**\n  - $f\'\'(c) > 0$ (concave up) $\\implies$ **local minimum**.\n  - $f\'\'(c) < 0$ (concave down) $\\implies$ **local maximum**.\n  - If $f\'\'(c) = 0$, the second-derivative test is **inconclusive** — check sign change of $f\'(x)$!\n- **Point of inflexion:** Requires **$f\'\'(c) = 0$ AND $f\'\'(x)$ changes sign** across $x = c$ (never just $f\'\'(c) = 0$ alone, e.g. $y = x^4$ at $0$ is a minimum, not an inflexion!).',
  },
  {
    topicCode: '5.8',
    frontMarkdown:
      'Complete the graphical correspondence table linking features of $y = f(x)$, $y = f\'(x)$, and $y = f\'\'(x)$.',
    backMarkdown:
      '- **Extrema of $f$** $\\longleftrightarrow$ **zeros ($x$-intercepts) of $f\'$** with sign change.\n- **Inflexion points of $f$** $\\longleftrightarrow$ **local extrema of $f\'$** $\\longleftrightarrow$ **zeros of $f\'\'$** with sign change.\n- **Net change $f(b) - f(a)$** $\\longleftrightarrow$ **signed area $\\int_a^b f\'(x)\\,dx$** under the $f\'$ graph.',
  },
  {
    topicCode: '5.9',
    frontMarkdown:
      'In kinematics ($s(t), v(t), a(t)$), contrast **displacement** over $[t_1, t_2]$ with **total distance travelled** over $[t_1, t_2]$.',
    backMarkdown:
      '- $v(t) = s\'(t)$ and $a(t) = v\'(t) = s\'\'(t)$ (rest when $v(t) = 0$).\n- **Net displacement:** $\\Delta s = \\int_{t_1}^{t_2} v(t)\\,dt = s(t_2) - s(t_1)$.\n- **Total distance travelled:** $\\text{Distance} = \\int_{t_1}^{t_2} |v(t)|\\,dt$ (split integral at any sign-change roots of $v(t) = 0$, or integrate $|v(t)|$ on GDC).',
  },
  {
    topicCode: '5.10',
    frontMarkdown:
      'List the **5-step IB Optimization** workflow for maximizing/minimizing a geometric quantity subject to a constraint.',
    backMarkdown:
      '1. Label variables clearly and write the **constraint equation** (e.g., fixed area/volume).\n2. Express the **target function** in **one variable** $x$ with its physical domain $(a, b)$.\n3. Differentiate and solve **$f\'(x) = 0$** for critical point(s).\n4. **Justify max or min** (required for full marks!) using $f\'\'(x)$ or $f\'(x)$ sign diagram (+ check endpoints).\n5. Answer the exact quantity asked (dimensions, value, or cost).',
  },
  {
    topicCode: '5.11',
    frontMarkdown:
      'Contrast **definite integral** $\\int_a^b f(x)\\,dx$, **total area with the $x$-axis**, and **area enclosed between two curves** $f(x)$ and $g(x)$.',
    backMarkdown:
      '- **Signed integral:** $\\int_a^b f(x)\\,dx$ subtracts area below the $x$-axis.\n- **Total geometric area with $x$-axis:** Split at roots inside $(a, b)$ or evaluate $\\int_a^b |f(x)|\\,dx$.\n- **Area between curves:** Find intersections $a < b$ by solving $f(x) = g(x)$, then:\n  $$\\text{Area} = \\int_a^b \\bigl(f_{\\text{top}}(x) - g_{\\text{bottom}}(x)\\bigr)\\,dx.$$',
  },
  {
    topicCode: '5.11',
    frontMarkdown:
      'State the two classic **substitution / reverse-chain-rule** integral templates tested on IB Math AA SL Paper 1.',
    backMarkdown:
      '1. **Power form:** $\\int k\\,g\'(x)\\,[g(x)]^n\\,dx = \\frac{k}{n+1}[g(x)]^{n+1} + C\\quad (n \\neq -1)$.\n2. **Logarithmic quotient form:**\n   $$\\int \\frac{g\'(x)}{g(x)}\\,dx = \\ln|g(x)| + C$$\n   Spot whether the numerator is a constant multiple of the denominator’s derivative!',
  },
  {
    topicCode: '5.7',
    frontMarkdown:
      'Why does $f(x) = x^3$ at $x = 0$ have BOTH $f\'(0) = 0$ and $f\'\'(0) = 0$, and how do you classify it rigorously?',
    backMarkdown:
      'Because $f\'(x) = 3x^2 \\ge 0$ on both sides ($+ \\to 0 \\to +$, no sign change in $f\'$) while $f\'\'(x) = 6x$ changes sign ($- \\to 0 \\to +$):\n- $x = 0$ is a **stationary (horizontal) point of inflexion**, NOT a local minimum or maximum.',
  },
];
