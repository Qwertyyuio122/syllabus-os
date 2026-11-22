import type { ClassroomSeedNote } from '../types';
import {
  MATH_V3_BINOMIAL_CONSTANT_WORKED,
  MATH_V3_COOLING_LOG_WORKED,
  MATH_V3_EXP_DECAY_ASYMPTOTE_GRAPH,
  MATH_V3_EXP_LOG_DUALITY_GRAPH,
  MATH_V3_EXP_LOG_MODELS_MATRIX,
  MATH_V3_FN_COMPOSITE_WORKED,
  MATH_V3_FN_INVERSE_GRAPH,
  MATH_V3_FN_PROTOCOLS_MATRIX,
  MATH_V3_LOG_BINOMIAL_MATRIX,
  MATH_V3_QUAD_DISCRIMINANT_GRAPH,
  MATH_V3_QUAD_FORMS_MATRIX,
  MATH_V3_QUAD_GRILL_WORKED,
  MATH_V3_RATIONAL_ASYMPTOTES_GRAPH,
  MATH_V3_RATIONAL_EXTRANEOUS_WORKED,
  MATH_V3_RATIONAL_FORMS_MATRIX,
  MATH_V3_SEQ_COMPOUND_WORKED,
  MATH_V3_SEQ_FINANCE_GROWTH_GRAPH,
  MATH_V3_SEQ_SERIES_MATRIX,
  MATH_V3_TRANSFORM_COMPOSITE_GRAPH,
  MATH_V3_TRANSFORM_IBQ_WORKED,
  MATH_V3_TRANSFORM_MAPPING_MATRIX,
} from './diagrams';

export const MATH_NOTES_T12: ClassroomSeedNote[] = [
  // =========================================================================
  // 1. Sequences, Series, Financial Modelling & Proof (1.1–1.4, 1.6, 1.8)
  // =========================================================================
  {
    topicCode: '1.2',
    title: 'Sequences, Series, Financial Modelling & Deductive Proof (1.1–1.4, 1.6, 1.8)',
    summary:
      'Master arithmetic and geometric progressions, sigma notation, infinite convergent series (|r| < 1), compound interest & depreciation models, and rigorous LHS-to-RHS deductive algebraic proofs from Oxford Ch. 1 and Haese Ch. 6.',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
      'math sl year one course outline 2026.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 1 Guiding Questions — Patterns & Generalization (pp. 2–3)',
        markdown:
          '- How can discrete patterns be generalized algebraically to predict distant terms or cumulative sums?\n- If you take out a loan or open a compound-interest savings account, how does compounding frequency $k$ alter total cost versus simple linear interest?\n- In fractal constructions such as the **Koch snowflake**, how can an **infinite perimeter** enclose a **finite area** ($|r| < 1$ convergence)?\n- What distinguishes an inductive conjecture from a valid **deductive proof**?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Scientific Notation, Estimation & Percentage Error (Topic 1.1)',
      },
      {
        type: 'paragraph',
        markdown:
          'IB Mathematics: Analysis and Approaches SL expects all final non-exact numerical answers to be rounded to **3 significant figures** unless a question specifies an exact surd, exact fraction, exact multiple of $\\pi$, or a stated number of decimal places (such as currency to $2$ decimal places). Always carry at least 5–6 significant digits—or store unrounded intermediate values in TI-nspire GDC variables—to prevent cascading rounding error across multi-part questions.\n\nIn **standard form (scientific notation)**, any positive real quantity is written as $a \\times 10^k$ where $1 \\le a < 10$ and $k \\in \\mathbb{Z}$. When approximating an exact value $v_E$ by an estimate or rounded measurement $v_A$, the **percentage error** formula in the AA SL Formula Booklet is:',
      },
      {
        type: 'equation',
        latex: '\\varepsilon = \\left| \\frac{v_A - v_E}{v_E} \\right| \\times 100\\%',
        caption: 'IB AA SL Percentage Error Formula (Topic 1.1) — note the exact value v_E sits in the denominator.',
        variableLegend: [
          { symbol: 'v_A', meaning: 'approximate or rounded value' },
          { symbol: 'v_E', meaning: 'exact theoretical value (v_E ≠ 0)' },
          { symbol: '\\varepsilon', meaning: 'non-negative percentage error (%)' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Upper and lower bounds follow directly from rounding precision: if a length is measured as $12.4\\text{ cm}$ to the nearest $0.1\\text{ cm}$, the true length $L$ satisfies $12.35 \\le L < 12.45$. When calculating the maximum possible percentage error of a derived area or volume, evaluate the extreme lower/upper bound combination that maximizes $|v_A - v_E|$ relative to $v_E$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Number Sequences, Sigma Notation & Arithmetic Progressions (1.2)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **sequence** $\\{u_n\\}$ is an ordered list of numbers defined either explicitly (e.g., $u_n = 3n + 2$) or recursively (e.g., $u_{n+1} = 2u_n - 3$ with seed $u_1 = 1$). A **series** is the sum of the terms of a sequence, written compactly in **sigma notation**: $\\sum_{r=1}^n u_r = u_1 + u_2 + \\dots + u_n$. On Paper 1, always expand the first two or three terms of a sigma expression before classifying it—this immediately reveals whether the sum is arithmetic, geometric, or a mixed sum such as $\\sum_{k=1}^{10}(2^k - 3k + 1)$.\n\nAn **arithmetic sequence** changes by a constant **common difference** $d = u_{n+1} - u_n$ at every step (Oxford Ch. 1.2, p. 13). Starting from $u_1$, each step adds one copy of $d$, so $u_2 = u_1 + d$, $u_3 = u_1 + 2d$, and in general:',
      },
      {
        type: 'equation',
        latex: 'u_n = u_1 + (n - 1)d, \\qquad S_n = \\frac{n}{2}\\bigl(2u_1 + (n - 1)d\\bigr) = \\frac{n}{2}(u_1 + u_n)',
        caption: 'Arithmetic $n$-th term and Gauss pairing sum formulas (Oxford Ch. 1.2–1.3, pp. 14–23).',
        variableLegend: [
          { symbol: 'u_1', meaning: 'first term of the arithmetic progression' },
          { symbol: 'd', meaning: 'constant common difference (u_{k+1} − u_k)' },
          { symbol: 'S_n', meaning: 'sum of the first n terms' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '**Derivation of $S_n$ (Gauss Method, Oxford p. 22):** Write $S_n = u_1 + (u_1 + d) + \\dots + u_n$, then write the exact same sum in reverse order: $S_n = u_n + (u_n - d) + \\dots + u_1$. Adding column by column pairs every element to $(u_1 + u_n)$ across $n$ columns, yielding $2S_n = n(u_1 + u_n)$ and hence $S_n = \\frac{n}{2}(u_1 + u_n)$. Substituting $u_n = u_1 + (n - 1)d$ recovers the second form.\n\nA crucial structural link connects any series $S_n$ to its general term: **$u_n = S_n - S_{n-1}$** for $n \\ge 2$, with $u_1 = S_1$. If an exam question gives a closed formula for $S_n$ (such as $S_n = 3n^2 - 2n$), compute $u_1 = S_1 = 1$, find $u_n = S_n - S_{n-1} = 6n - 5$, and verify that $u_{n+1} - u_n = 6$ is constant to prove the sequence is arithmetic. Similarly, to find the sum of integers between $500$ and $1400$ inclusive that are **not divisible by $7$** (Oxford p. 59), compute the arithmetic sum of all integers from $500$ to $1400$ ($n = 901$), then subtract the arithmetic sum of multiples of $7$ from $504$ to $1400$ ($d = 7$).',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Geometric Sequences, Finite Sums & Infinite Convergence (1.3, 1.8)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **geometric sequence** multiplies each consecutive term by a constant non-zero **common ratio** $r = \\frac{u_{n+1}}{u_n}$. Three consecutive terms $a, b, c$ form a geometric progression if and only if $b^2 = ac$ (just as $2b = a + c$ characterizes an arithmetic triple). Multiplying $u_1$ by $r$ a total of $(n-1)$ times gives $u_n = u_1 r^{n-1}$.\n\n**Derivation of Finite Geometric Sum ($r \\neq 1$):** Write $S_n = u_1 + u_1 r + u_1 r^2 + \\dots + u_1 r^{n-1}$ and multiply through by $r$: $r S_n = u_1 r + u_1 r^2 + \\dots + u_1 r^n$. Subtracting the two equations cancels every interior term identically, leaving $(1 - r)S_n = u_1(1 - r^n)$, or equivalently:',
      },
      {
        type: 'equation',
        latex: 'u_n = u_1 r^{n-1}, \\qquad S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r} \\;(r \\neq 1), \\qquad S_\\infty = \\frac{u_1}{1 - r} \\;(|r| < 1)',
        caption: 'Geometric progression formulas and infinite sum convergence condition (Oxford Ch. 1.3, pp. 26–33).',
        variableLegend: [
          { symbol: 'r', meaning: 'constant common ratio u_{k+1} / u_k' },
          { symbol: 'S_\\infty', meaning: 'limit of S_n as n → ∞ when −1 < r < 1' },
        ],
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Two Classic Geometric Sequence Traps (Paper 1 & Paper 2)',
        markdown:
          '1. **Even-Power Ratio Roots:** Given $u_2 = 180$ and $u_6 = \\frac{20}{9}$, dividing yields $r^4 = \\frac{1}{81}$. Unless the prompt states that all terms are positive, **$r = \\pm\\frac{1}{3}$** gives TWO valid geometric series!\n2. **Convergence Condition $|r| < 1$:** You MUST explicitly justify why an infinite geometric sum exists by writing $|r| < 1$ (or $-1 < r < 1$), because $r^n \\to 0$ as $n \\to \\infty$ only within this open interval. If $|r| \\ge 1$, the series diverges.',
      },
      {
        type: 'paragraph',
        markdown:
          'Infinite geometric series also provide exact fractional representations of recurring decimals (e.g. $0.\\overline{36} = 0.36 + 0.0036 + \\dots$ with $u_1 = 0.36$, $r = 0.01$, so $S_\\infty = \\frac{0.36}{0.99} = \\frac{4}{11}$) and resolve Oxford’s opening **Koch snowflake** paradox (p. 3, p. 35): at each iteration, side count scales by $4$ while side length scales by $\\frac{1}{3}$, so perimeter multiplies by $\\frac{4}{3} > 1$ (diverging to $\\infty$), whereas newly added equilateral triangles multiply total added area by $\\frac{4}{9} < 1$ (converging to a finite area of $\\frac{8}{5}$ of the initial triangle!). Likewise, on **bouncing-ball total distance** problems, count the initial drop ONCE ($H_0$) and every rebound UP + DOWN TWICE: $D = H_0 + \\frac{2 H_0 r}{1 - r}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Financial Applications: Compound Interest, Depreciation & Inflation (1.4)',
      },
      {
        type: 'paragraph',
        markdown:
          'Simple interest adds a constant dollar amount $I = PV \\cdot \\frac{r}{100}$ every period, producing an **arithmetic** sequence of balances. By contrast, **compound interest** pays interest on previously accumulated interest, forming a **geometric** sequence with common ratio $1 + \\frac{r}{100k}$ where $r\\%$ is the nominal annual interest rate and $k$ is the number of compounding periods per year ($k = 1$ annually, $k = 2$ half-yearly, $k = 4$ quarterly, $k = 12$ monthly):',
      },
      {
        type: 'equation',
        latex: 'FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}, \\qquad FV_{\\text{dep}} = PV\\left(1 - \\frac{r}{100}\\right)^n, \\qquad FV_{\\text{real}} = \\frac{FV_{\\text{nominal}}}{\\left(1 + \\frac{i}{100}\\right)^n}',
        caption: 'IB AA SL Financial Modelling Formulas: Compound Interest, Annual Depreciation & Inflation Adjustment.',
        variableLegend: [
          { symbol: 'PV', meaning: 'present value (initial principal invested or borrowed)' },
          { symbol: 'FV', meaning: 'future value after n years' },
          { symbol: 'k', meaning: 'compounding periods per year (1, 2, 4, 12, ...)' },
          { symbol: 'i', meaning: 'annual inflation rate (%) for real-value purchasing power' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'When solving for time $n$ (for example, how many complete years before an investment doubles or overtakes a depreciating asset), isolate the exponential base and apply logarithms (or use the GDC intersection graph / TVM Solver on TI-nspire). Always read carefully whether the markscheme asks for **total future value $FV$** or **interest earned $I = FV - PV$**, and remember that "after how many **complete** years" rounds up to the next integer when the logarithmic crossing falls between integer years.',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_SEQ_FINANCE_GROWTH_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Simple Deductive Proof & Algebraic Rigour (Topic 1.6)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **deductive proof** establishes that a mathematical statement holds universally for all admissible values by chaining valid definitions and algebraic identities—never by checking numerical examples alone (a single counterexample disproves a universal claim, whereas finite examples can only motivate conjectures). On IB AA SL Paper 1, follow the strict **one-sided proof structure**:\n\n1. Start explicitly with **LHS $= \\dots$** (or RHS $= \\dots$), choosing the more complex side to expand or combine.\n2. Transform step-by-step using valid algebraic expansion, common denominators, or binomial factorizations.\n3. Conclude explicitly with **$=$ RHS. QED.** Never manipulate both sides simultaneously across the equals sign, as that commits **circular reasoning** by assuming the conclusion.\n\nFor parity and divisibility proofs (Oxford Ch. 1.6, pp. 55–57), parameterize an arbitrary even integer as $2n$ ($n \\in \\mathbb{Z}$) and an odd integer as $2n + 1$. For instance, to prove that the difference of squares of any two consecutive odd integers is divisible by $8$, compute $(2n + 3)^2 - (2n + 1)^2 = (4n^2 + 12n + 9) - (4n^2 + 4n + 1) = 8n + 8 = 8(n + 1)$, which is an integer multiple of $8$ for all $n \\in \\mathbb{Z}$.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK Connection — Intuition vs Formal Proof (Oxford Ch. 1, pp. 22, 32, 39)',
        markdown:
          '*"Is it possible to know things about which we can have no experience, such as infinity?"* When Zeno argued that Achilles could never catch the tortoise, intuition collided with infinite geometric sums. Deductive proof formalizes intuition into certainty—while financial ethics reminds us that compound interest formulas depend on human social conventions.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Arithmetic Sequence',
            definitionMarkdown: 'Sequence with constant difference $d = u_{n+1} - u_n$; general term $u_n = u_1 + (n - 1)d$ and linear growth.',
            markschemeKeyword: 'common difference d',
          },
          {
            term: 'Geometric Convergence',
            definitionMarkdown: 'Infinite sum $S_\\infty = \\frac{u_1}{1 - r}$ exists **if and only if** $|r| < 1$ ($-1 < r < 1$).',
            markschemeKeyword: '|r| < 1',
          },
          {
            term: 'Compounding Frequency k',
            definitionMarkdown: 'Number of interest compoundings per year ($k = 12$ monthly, $4$ quarterly, $2$ half-yearly) inside $FV = PV(1 + \\frac{r}{100k})^{kn}$.',
            markschemeKeyword: 'r/(100k) and kn',
          },
          {
            term: 'Deductive Proof Rule',
            definitionMarkdown: 'Begin from LHS and derive RHS algebraically without assuming equality upfront; check excluded domain values in rational proofs.',
            markschemeKeyword: 'LHS → RHS without circularity',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_SEQ_SERIES_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_SEQ_COMPOUND_WORKED,
      },
    ],
  },

  // =========================================================================
  // 2. Exponents, Logarithms & The Binomial Theorem (1.5, 1.7, 1.9)
  // =========================================================================
  {
    topicCode: '1.5',
    title: 'Exponents, Logarithms, Change of Base & The Binomial Theorem (1.5, 1.7, 1.9)',
    summary:
      'Unify integer and rational exponent laws, logarithm properties, change of base, extraneous log-domain checks, Pascal’s triangle, and Binomial Theorem term extraction (Oxford Ch. 1.5 & Ch. 9.1–9.2, Haese Ch. 3, 4 & 7).',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 1.5 & Ch. 9 Guiding Questions (pp. 44, 394)',
        markdown:
          '- How do fractional and negative exponents extend repeated integer multiplication continuously to all real powers?\n- Why are earthquake magnitudes (Richter scale), sound intensity (decibels), and acidity (pH) measured using **logarithmic** rather than linear scales?\n- How does Pascal’s triangle (known in China centuries before Pascal) encode combinations $\\binom{n}{r}$ inside $(a + b)^n$ without expanding every bracket manually?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Laws of Integer & Rational Exponents (1.5, 1.7)',
      },
      {
        type: 'paragraph',
        markdown:
          'Exponents provide compact notation for repeated multiplication. Extending the fundamental identity $a^m \\cdot a^n = a^{m+n}$ consistently to zero, negative, and fractional powers forces $a^0 = 1$ ($a \\neq 0$), $a^{-n} = \\frac{1}{a^n}$, and $a^{1/n} = \\sqrt[n]{a}$ so that every exponent rule preserves algebraic coherence across integers, rationals $\\mathbb{Q}$, and reals $\\mathbb{R}$. Look carefully at order of operations when simplifying negative numbers: $-(3)^2 = -9$ whereas $(-3)^2 = +9$, and $2(ab)^{-2} = \\frac{2}{a^2 b^2}$ while $2ab^{-2} = \\frac{2a}{b^2}$ (Haese Review Set 3A #4).',
      },
      {
        type: 'equation',
        latex: 'a^m a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{mn}, \\quad a^{-n} = \\frac{1}{a^n}, \\quad a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}',
        caption: 'Complete Laws of Exponents for bases a > 0 (Oxford Ch. 9.1, p. 396; Haese Ch. 3B–3C).',
        variableLegend: [
          { symbol: 'a', meaning: 'positive base (a > 0 for general rational/real powers)' },
          { symbol: 'm/n', meaning: 'rational exponent: numerator m is power, denominator n is root index' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'On **Paper 1 (Non-GDC)**, exponential equations without logarithms are solved by rewriting every base as a power of a **common prime base**. For example:\n- Given $9^{x-1} = \\frac{1}{27}$, convert both sides to base $3$: $(3^2)^{x-1} = 3^{-3} \\implies 3^{2x-2} = 3^{-3}$. Because $f(u) = 3^u$ is strictly one-to-one, equating exponents gives $2x - 2 = -3 \\implies x = -\\frac{1}{2}$.\n- Given $(\\sqrt{3})^{1-x} \\cdot 9^{1-2x} = 3^k$, rewrite $\\sqrt{3} = 3^{1/2}$ and $9 = 3^2$: $3^{(1-x)/2 + 2(1-2x)} = 3^{(5 - 9x)/2}$.\n- For **quadratic-in-exponential equations** such as $4^x - 6(2^x) + 8 = 0$ or $e^{2x} - 5e^x + 6 = 0$, substitute $u = 2^x > 0$ (or $u = e^x > 0$) so $4^x = u^2$. Factor $(u - 2)(u - 4) = 0$, verify positivity $u > 0$, and solve back for $x = 1$ and $x = 2$. Whenever a factor yields $u \\le 0$ (e.g., $2^x = -3$), discard that branch immediately because $b^x > 0$ for all $x \\in \\mathbb{R}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Definition of a Logarithm, Laws of Logs & Change of Base (1.5, 1.7)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **logarithm** answers the inverse question: *"To what power must base $a$ be raised to obtain $b$?"* Formally, for $a > 0$, $a \\neq 1$, and $b > 0$:',
      },
      {
        type: 'equation',
        latex: 'a^x = b \\iff x = \\log_a b \\qquad (\\text{Common log: } \\log x = \\log_{10} x; \\quad \\text{Natural log: } \\ln x = \\log_e x)',
        caption: 'Fundamental Exponential–Logarithmic Equivalence (Oxford Ch. 9.2, p. 407).',
        variableLegend: [
          { symbol: 'a', meaning: 'logarithm base (a > 0, a ≠ 1)' },
          { symbol: 'b', meaning: 'strictly positive argument (b > 0)' },
          { symbol: 'e', meaning: 'Euler’s constant e ≈ 2.7182818...' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Every **law of logarithms** derives directly from the laws of exponents. Let $p = \\log_a x$ and $q = \\log_a y$, so by definition $x = a^p$ and $y = a^q$. Multiplying gives $xy = a^p a^q = a^{p+q}$, so $\\log_a(xy) = p + q = \\log_a x + \\log_a y$. Dividing gives $x/y = a^{p-q}$, yielding $\\log_a(x/y) = \\log_a x - \\log_a y$. Raising to power $m$ gives $x^m = (a^p)^m = a^{mp}$, so $\\log_a(x^m) = m\\log_a x$. Three immediate consequences simplify almost every Paper 1 expression: $\\log_a(1) = 0$, $\\log_a(a) = 1$, and inverse cancellation $a^{\\log_a x} = x$ ($x > 0$) and $\\log_a(a^x) = x$.\n\nLook at **Oxford Practice Paper 1 #4**: given $\\log x = p$ and $\\log y = q$, express $\\log(xy) = p + q$, $\\log(x^2/y) = 2p - q$, $\\log\\sqrt{x} = \\frac{1}{2}p$, and $\\log(100y) = \\log 100 + \\log y = 2 + q$. Notice how constants like $2 = \\log_{10}(100)$ or $k = \\ln(e^k)$ let you merge constants into single logarithmic expressions whenever solving equations.\n\nWhen equations mix two different bases (such as $\\log_2 x + \\log_4 x = 6$) or require exact evaluation of $\\log_b a$, apply the **Change of Base Rule**, derived by writing $y = \\log_b a \\implies b^y = a$, taking $\\log_c$ of both sides to get $y\\log_c b = \\log_c a$, and dividing:',
      },
      {
        type: 'equation',
        latex: '\\log_b a = \\frac{\\log_c a}{\\log_c b} = \\frac{\\ln a}{\\ln b}, \\qquad \\log_a(xy) = \\log_a x + \\log_a y, \\qquad \\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y, \\qquad \\log_a(x^m) = m\\log_a x',
        caption: 'IB AA SL Formula Booklet Logarithm Laws & Change of Base (Topic 1.7).',
        variableLegend: [
          { symbol: 'c', meaning: 'any valid positive base ≠ 1 (usually 10 or e)' },
          { symbol: 'x, y', meaning: 'strictly positive real arguments (> 0)' },
        ],
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Domain Trap in Logarithmic Equations (Always Audit x > 0!)',
        markdown:
          'Combining $\\log_a A + \\log_a B = \\log_a(AB)$ **widens the algebraic domain** because $AB > 0$ holds even when BOTH $A < 0$ and $B < 0$, whereas the original equation demands $A > 0$ AND $B > 0$ individually! In $\\log_3(x - 1) + \\log_3(x + 1) = 1$, solving $(x - 1)(x + 1) = 3$ yields $x = \\pm 2$, yet $x = -2$ makes BOTH arguments negative and **must be rejected**. Similarly, NEVER simplify $\\frac{\\log A}{\\log B}$ to $\\log(A - B)$ or distribute $\\log(x + y)$ into $\\log x + \\log y$!',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_EXP_LOG_DUALITY_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Combinatorics, Pascal’s Triangle & The Binomial Theorem (1.9)',
      },
      {
        type: 'paragraph',
        markdown:
          'When expanding $(a + b)^n$ for $n \\in \\mathbb{N}$, choosing $b$ from $r$ of the $n$ identical brackets and $a$ from the remaining $n - r$ brackets can be done in $\\binom{n}{r} = {}^nC_r = \\frac{n!}{r!(n - r)!}$ distinct ways. These binomial coefficients form **Pascal’s Triangle** (row $0$: $1$; row $1$: $1, 1$; row $2$: $1, 2, 1$; row $3$: $1, 3, 3, 1$; row $4$: $1, 4, 6, 4, 1$; row $5$: $1, 5, 10, 10, 5, 1$), where each interior entry equals the sum of the two entries directly above it (**Pascal’s identity**, Oxford p. 59: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$), and setting $a = b = 1$ proves that the sum of all entries in row $n$ equals $\\sum_{r=0}^n \\binom{n}{r} = (1 + 1)^n = 2^n$.\n\nBy symmetry $\\binom{n}{r} = \\binom{n}{n-r}$, with $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = n$, and $\\binom{n}{2} = \\frac{n(n-1)}{2}$ (essential on Paper 1 when solving for unknown exponent $n$: e.g., if the coefficient of $x^2$ in $(1 + 3x)^n$ is $495$, then $\\binom{n}{2} \\cdot 3^2 = 495 \\implies \\frac{n(n-1)}{2} = 55 \\implies n^2 - n - 110 = 0 \\implies n = 11$, Oxford p. 59!). The full **Binomial Theorem** for $n \\in \\mathbb{N}$ states:',
      },
      {
        type: 'equation',
        latex: '(a + b)^n = \\sum_{r=0}^n \\binom{n}{r} a^{n-r} b^r = a^n + \\binom{n}{1} a^{n-1}b + \\binom{n}{2} a^{n-2}b^2 + \\dots + b^n, \\qquad T_{r+1} = \\binom{n}{r} a^{n-r} b^r',
        caption: 'The Binomial Theorem & General (r+1)-th Term Formula (Oxford Ch. 1.5, pp. 49–53).',
        variableLegend: [
          { symbol: 'n', meaning: 'positive integer exponent (n ∈ ℕ)' },
          { symbol: '\\binom{n}{r}', meaning: 'n! / [r!(n−r)!] (index r runs from 0 to n)' },
          { symbol: 'T_{r+1}', meaning: 'the (r+1)-th term in descending powers of a' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'On IB AA SL exams, three binomial question patterns dominate:\n1. **Single-term extraction:** To find the coefficient of $x^k$ or the **constant term** ($x^0$) inside $(px^\\alpha + qx^\\beta)^n$, write $T_{r+1} = \\binom{n}{r} p^{n-r} q^r x^{\\alpha(n-r)+\\beta r}$, set the exponent of $x$ equal to $k$ (or $0$), solve for integer $r \\in \\{0, 1, \\dots, n\\}$, and compute the numerical coefficient carefully including negative signs inside $q^r$. Note that if the solved $r$ is not an integer in $[0, n]$, no such term exists!\n2. **Multiplied polynomials times a binomial:** For $(x + 3)(2x - 1)^6$ (Haese p. 187), NEVER expand $(2x - 1)^6$ fully! Simply extract the $x^4$ and $x^5$ terms of $(2x - 1)^6$ and collect the two cross-products yielding $x^5$: $x \\cdot \\binom{6}{2}(2x)^4(-1)^2 + 3 \\cdot \\binom{6}{1}(2x)^5(-1)^1 = (240 - 576)x^5 = -336x^5$.\n3. **Decimal power approximations:** For $0.975^5$ (Oxford p. 59), expand $(1 - x)^5 = 1 - 5x + 10x^2 - \\dots$ and substitute $x = 0.025$ into the first three terms to approximate without a GDC.',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Binomial Coefficient & Change-of-Base Quick Reference (Paper 1)',
        markdown:
          '- **Fast Binomial Values:** $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = \\binom{n}{n-1} = n$, $\\binom{n}{2} = \\frac{n(n-1)}{2}$, $\\binom{n}{3} = \\frac{n(n-1)(n-2)}{6}$. Memorizing row $n=5$ ($1, 5, 10, 10, 5, 1$) and row $n=6$ ($1, 6, 15, 20, 15, 6, 1$) speeds up Paper 1 expansions dramatically.\n- **Reciprocal Base Identity:** Changing base between $a$ and $b$ gives $\\log_b a = \\frac{1}{\\log_a b}$, so $(\\log_2 5)(\\log_5 8) = \\frac{\\ln 5}{\\ln 2} \\cdot \\frac{\\ln 8}{\\ln 5} = \\log_2 8 = 3$.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Who Owns Mathematical Discovery? (Oxford Ch. 1.5, pp. 45–46)',
        markdown:
          'Although Western textbooks name it **Pascal’s triangle**, Jia Xian and Yang Hui documented the exact binomial array in 11th–13th century China, and Al-Karaji explored it in 10th-century Baghdad. Does historical naming shape how we attribute mathematical knowledge across cultures—and why do logarithmic scales compress multiplicative sensory perception into additive steps?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Logarithm Equivalence',
            definitionMarkdown: '$a^x = b \\iff x = \\log_a b$ provided base $a > 0, a \\neq 1$ and argument $b > 0$.',
            markschemeKeyword: 'a^x = b <=> log_a(b) = x',
          },
          {
            term: 'Change of Base Rule',
            definitionMarkdown: '$\\log_b a = \\frac{\\ln a}{\\ln b} = \\frac{\\log_c a}{\\log_c b}$, converting any base into $\\ln$ or $\\log_{10}$.',
            markschemeKeyword: 'ln(a)/ln(b)',
          },
          {
            term: 'General Binomial Term',
            definitionMarkdown: '$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$ locates any $x^k$ or constant ($x^0$) term without full expansion.',
            markschemeKeyword: 'C(n,r) a^(n-r) b^r',
          },
          {
            term: 'Combinatorial Formula nCr',
            definitionMarkdown: '$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ counts combinations; key Paper 1 identity $\\binom{n}{2} = \\frac{n(n-1)}{2}$.',
            markschemeKeyword: 'n! / (r!(n-r)!)',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_LOG_BINOMIAL_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_BINOMIAL_CONSTANT_WORKED,
      },
    ],
  },

  // =========================================================================
  // 3. Functions, Domain Restrictions, Composites & Inverses (2.2–2.5) [UPGRADED]
  // =========================================================================
  {
    topicCode: '2.2',
    title: 'Functions, Domain Restrictions, Composites & Inverse Reflection (2.2–2.5)',
    summary:
      'Connect Vertical vs Horizontal Line tests, maximal real domain exclusions, interval notation, straight-line forms (2.1), order-sensitive composites (f ∘ g), inverse reflection across y = x, and self-inverse proofs using Oxford Ch. 2 & Ian Toms Chapter 2 Notes.',
    sourceFileNames: [
      'Math AA SL Functions Chapter 2 Notes.pdf',
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 2 Guiding Questions — Relationships & Representation (pp. 62–63)',
        markdown:
          '- What distinguishes a general mathematical **relation** from a **function**, and how do algebraic, graphical, and ordered-pair tests encode uniqueness?\n- How do physical contexts (car fuel consumption, supply-and-demand equilibrium, insurance pricing) restrict mathematical domains and ranges?\n- When can a mathematical process be reversed cleanly into an **inverse function** $f^{-1}$, and what happens geometrically at the diagonal $y = x$?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Relations, Functions, Straight Lines & Sketching Standards (2.1–2.4)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **relation** is any set of ordered pairs $(x, y)$ in the Cartesian plane. A **function** is a specialized relation in which every valid input $x$ in the domain maps to **at most one** unique output $y = f(x)$ (notation $f(x) = \\dots$ or $f: x \\mapsto \\dots$). On a table of ordered pairs, no two distinct pairs may share the same $x$-coordinate with different $y$-values; graphically, this is verified by the **Vertical Line Test (VLT)**: every vertical line $x = c$ intersects the graph at most once.\n\nThe simplest non-constant functions are **straight lines** (Topic 2.1, Oxford Ch. 3.1–3.2): gradient $m = \\frac{y_2 - y_1}{x_2 - x_1}$, slope-intercept $y = mx + c$, point-gradient $y - y_1 = m(x - x_1)$, and general form $ax + by + d = 0$. Two non-vertical lines are **parallel** iff $m_1 = m_2$ and **perpendicular** iff $m_1 m_2 = -1$ ($m_2 = -\\frac{1}{m_1}$). For example, the line through $(4, 3)$ perpendicular to $y = 2x + 11$ has $m = -\\frac{1}{2}$ and equation $y - 3 = -\\frac{1}{2}(x - 4) \\implies y = -\\frac{1}{2}x + 5$ (Oxford Paper 1 #5).\n\nWhen asked to **sketch** versus **draw** a function (Topic 2.3; Ch. 2 Notes, p. 3), IB marks hinge on the command term:\n- **Draw:** accurate plotting on a scaled grid using coordinates and rulers/smooth curves.\n- **Sketch:** clearly communicates shape and key features—**all axis intercepts, local extrema (turning points found via GDC `max`/`min` in 2.4), asymptotes (as dashed lines with equations), and domain endpoints** (closed dot $\\bullet$ for $\\le, \\ge$ vs open circle $\\circ$ for $<, >$).',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Maximal Real Domains, Ranges & Interval Notation (2.2, 2.4)',
      },
      {
        type: 'paragraph',
        markdown:
          'The **domain** of $f$ is the set of all permissible inputs $x$; the **range** is the corresponding set of realized outputs $y$. When a function rule is given without an explicit domain restriction, determine its **maximal real domain** by enforcing all three algebraic barriers simultaneously:\n1. **Denominators cannot equal zero:** $\\frac{P(x)}{Q(x)} \\implies Q(x) \\neq 0$.\n2. **Even-index radicands must be non-negative:** $\\sqrt[2k]{g(x)} \\implies g(x) \\ge 0$ (whereas odd roots like $\\sqrt[3]{x}$ accept all $x \\in \\mathbb{R}$).\n3. **Logarithm arguments must be strictly positive:** $\\log_a(h(x)) \\implies h(x) > 0$.\n\nWhen an expression combines multiple restrictions—such as $f(x) = \\frac{\\sqrt{x + 4}}{x^2 - 9}$—solve both $x + 4 \\ge 0 \\implies x \\ge -4$ AND $x^2 - 9 \\neq 0 \\implies x \\neq \\pm 3$. Notice that $-3$ lies inside $[-4, \\infty)$ while $+3$ also lies inside it, leaving $[-4, -3) \\cup (-3, 3) \\cup (3, \\infty)$. Both **North American** parentheses/brackets and **IB European reversed brackets** are accepted in interval notation—remembering that $\\pm\\infty$ is **always open** and $\\cup$ ("or") joins disjoint pieces:',
      },
      {
        type: 'equation',
        latex: 'a \\le x < b \\iff [a, b) \\text{ or } [a, b[, \\qquad x \\neq 3 \\iff (-\\infty, 3) \\cup (3, \\infty) \\text{ or } ]-\\infty, 3[ \\,\\cup\\, ]3, \\infty[',
        caption: 'Accepted IB Interval Notation Conventions (Ch. 2 Notes & Oxford Ch. 2.4, p. 80).',
        variableLegend: [
          { symbol: '[a,\\, b]', meaning: 'closed interval including both endpoints a ≤ x ≤ b' },
          { symbol: '(a, b) \\text{ or } ]a, b[', meaning: 'open interval excluding both endpoints a < x < b' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Composite Functions (f ∘ g)(x) = f(g(x)) (2.5)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **composite function** chains two function machines sequentially: $(f \\circ g)(x) = f(g(x))$ reads *"f following g of x"*. As Ian Toms emphasizes in Ch. 2.5, **always evaluate the innermost function first** and work outward. Because function composition is **not commutative**, $(f \\circ g)(x) \\neq (g \\circ f)(x)$ in general—for instance, if $f(x) = 2x + 1$ and $g(x) = 3x - 2$ (Oxford Paper 1 #3), then $(f \\circ g)(x) = 2(3x - 2) + 1 = 6x - 3$ whereas $(g \\circ f)(x) = 3(2x + 1) - 2 = 6x + 1$.\n\nDetermining the domain of $(f \\circ g)(x)$ requires two checks: first, $x$ must belong to $\\text{Dom}(g)$ so $g(x)$ exists; second, the intermediate output $g(x)$ must lie inside $\\text{Dom}(f)$ so the outer function does not divide by zero, square-root a negative, or take the log of $\\le 0$. Simply inspecting the simplified algebraic formula can hide inner restrictions—for example, if $f(x) = x^2$ and $g(x) = \\sqrt{x - 2}$, then $(f \\circ g)(x) = x - 2$, yet its true domain remains **$x \\ge 2$**, NOT $\\mathbb{R}$! Note also that for any pair of invertible functions, reversing a composition reverses the order of inverses: **$(g \\circ f)^{-1}(x) = (f^{-1} \\circ g^{-1})(x)$** ("shoes-and-socks" rule, Haese Review Set 2A #14).',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. One-to-One Functions, Inverse Reflection & Self-Inverses (2.5)',
      },
      {
        type: 'paragraph',
        markdown:
          'An **inverse function** $f^{-1}$ undoes the mapping of $f$, satisfying $(f \\circ f^{-1})(x) = x$ on $\\text{Dom}(f^{-1})$ and $(f^{-1} \\circ f)(x) = x$ on $\\text{Dom}(f)$. Geometrically, swapping input and output $(x, y) \\leftrightarrow (y, x)$ reflects the graph of $y = f(x)$ across the diagonal identity line **$y = x$**. Consequently, **$\\text{Dom}(f^{-1}) = \\text{Ran}(f)$** and **$\\text{Ran}(f^{-1}) = \\text{Dom}(f)$**, and every vertical asymptote $x = a$ of $f$ reflects into a horizontal asymptote $y = a$ of $f^{-1}$.\n\nFor the reflected curve to pass the Vertical Line Test and be a function itself, the original graph of $f$ must pass the **Horizontal Line Test (HLT)**—meaning $f$ is **one-to-one** ($f(x_1) = f(x_2) \\implies x_1 = x_2$). Many-to-one functions like $h(x) = x^2 - 4x + 7$ fail HLT on $\\mathbb{R}$, so we restrict the domain to one monotonic half (e.g., $x \\ge 2$ or $x \\le 2$) before inverting. To construct $f^{-1}(x)$ algebraically: (1) write $y = f(x)$, (2) **swap $x$ and $y$**, (3) solve for $y$ respecting the range restriction $\\text{Ran}(f^{-1}) = \\text{Dom}(f)$, and (4) rename $y = f^{-1}(x)$.',
      },
      {
        type: 'equation',
        latex: 'f\\bigl(f^{-1}(x)\\bigr) = f^{-1}\\bigl(f(x)\\bigr) = x, \\qquad \\text{Self-inverse: } f^{-1}(x) = f(x) \\iff (f \\circ f)(x) = x',
        caption: 'Identity Cancellation & Self-Inverse Condition (Oxford Ch. 2.6, pp. 97–99).',
        variableLegend: [
          { symbol: 'f^{-1}(x)', meaning: 'inverse function (NOT the reciprocal 1/f(x)!)' },
          { symbol: 'y = x', meaning: 'axis of geometric symmetry between f and f⁻¹' },
        ],
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Oxford Ch. 2.1–2.5 Worked Walkthrough — Piecewise Context & Arable Land Modelling (Ian Toms Ch. 2 Notes)',
        markdown:
          'In Ian Toms’ Chapter 2 classroom investigation (*Arable Land Supply Model*), researchers estimate $0.2\\text{ hectares}$ per person ($L(n) = 0.2n$) while population grows at $1.14\\%$ annually ($P(t) = 7.85\\times 10^9 (1.0114)^t$). Composing them forms $(L \\circ P)(t) = L(P(t)) = 1.57\\times 10^9 (1.0114)^t$, showing why **composition models chained rates** in Paper 2! Meanwhile, piecewise functions define distinct rules across disjoint intervals—such as supply/demand curves or shipping tariffs—requiring careful checking of open vs closed boundary dots at each transition $x = c$ so the graph still passes the Vertical Line Test.',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Straight-Line Forms & TI-nspire GDC Graph Features Checklist (2.1, 2.4)',
        markdown:
          '- **Point-Gradient Form:** $y - y_1 = m(x - x_1)$ is the fastest route to tangent/normal lines and perpendicular bisectors ($m_\\perp = -1/m$, passing through midpoint $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$).\n- **General Form:** $ax + by + d = 0$ (where $a, b, d \\in \\mathbb{Z}$); extract gradient by rearranging to $y = -\\frac{a}{b}x - \\frac{d}{b}$.\n- **TI-nspire GDC (`Menu → 6: Analyze Graph`):** Use `1: Zero` for $x$-intercepts, `2: Minimum` / `3: Maximum` for turning points, and `4: Intersection` for solving $f(x) = g(x)$ to $3$ significant figures.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Three Classic Chapter 2 Traps (Ch. 2 Notes & Oxford)',
        markdown:
          '1. **Notation Warning:** $f^{-1}(x)$ means the **inverse function**, NEVER the reciprocal $\\frac{1}{f(x)} = [f(x)]^{-1}$!\n2. **Quadratic Inverse Sign Choice:** When inverting $y = (x - 2)^2 + 3$ on $x \\ge 2$, choose $h^{-1}(x) = 2 + \\sqrt{x - 3}$; if the given domain had been $x \\le 2$, you would have to choose $2 - \\sqrt{x - 3}$ because $\\text{Ran}(h^{-1}) = \\text{Dom}(h)$.\n3. **Self-Inverse Proof:** Examples of self-inverses include $f(x) = x$, $f(x) = c - x$, and $f(x) = \\frac{k}{x}$. Prove self-inverse algebraically by computing $f^{-1}(x)$ (or $(f \\circ f)(x)$) and showing it simplifies identically to $f(x)$ (or $x$) with matching domain.',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_FN_INVERSE_GRAPH,
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK Connection — Mathematical Models & Self-Inverses (Oxford pp. 72, 85, 97)',
        markdown:
          'Jacques Hadamard noted that *"the object of mathematical rigour is to sanction and legitimize the conquests of intuition."* Does a graph without labelled axes convey any knowledge, and why are symmetric self-inverse transformations $f(f(x)) = x$ pervasive across reflections and involutions?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Vertical vs Horizontal Line Test',
            definitionMarkdown: 'VLT checks $\\le 1$ output per $x$ (**function**); HLT checks $\\le 1$ input per $y$ (**one-to-one / invertible**).',
            markschemeKeyword: 'one-to-one',
          },
          {
            term: 'Perpendicular Gradient Rule',
            definitionMarkdown: 'Non-vertical lines are perpendicular iff $m_1 m_2 = -1$ ($m_2 = -1/m_1$); parallel lines satisfy $m_1 = m_2$.',
            markschemeKeyword: 'm1 * m2 = -1',
          },
          {
            term: 'Composite Domain Gate',
            definitionMarkdown: '$\\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) \\mid g(x) \\in \\text{Dom}(f)\\}$. Always check before simplifying!',
            markschemeKeyword: 'x ∈ Dom(g) and g(x) ∈ Dom(f)',
          },
          {
            term: 'Self-Inverse Function',
            definitionMarkdown: 'A function satisfying $f^{-1}(x) = f(x)$, whose graph is symmetric across $y = x$ (e.g., $3 - x$, $2/x$, or $(ax+b)/(cx-a)$).',
            markschemeKeyword: 'f⁻¹(x) = f(x)',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_FN_PROTOCOLS_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_FN_COMPOSITE_WORKED,
      },
    ],
  },

  // =========================================================================
  // 4. Quadratics: Three Forms, Discriminant, Inequalities & Mock Tests (2.6–2.7) [UPGRADED]
  // =========================================================================
  {
    topicCode: '2.6',
    title: 'Quadratics: Three Forms, Discriminant Δ, Inequalities & Mock Tests (2.6–2.7)',
    summary:
      'Unifies Oxford Ch. 3, Ian Toms Chapter 3 Notes, Quadratics Mock Tests 1 & 2, Assignment 2026, and Oct 7 / Oct 13 whiteboard drills — including completing the square, discriminant parameter bounds with the k = 0 trap, "garbage graph" inequalities, and GDC projectile modelling.',
    sourceFileNames: [
      'Math AA SL Chapter 3 Quadratics Notes_SOL.pdf',
      'Math SL 11 Quadratics Mock Test_SOL.pdf',
      'Quadratic Mock Test 2_SOL.pdf',
      'Math SL 11 Quadratics Assignment 2026.pdf',
      'Oct 13, 2026 at 11_08 AM(2).jpg',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 3 Guiding Questions — Modelling Quadratic Relationships (pp. 108–109)',
        markdown:
          '- How do the **standard**, **vertex**, and **factored** forms of a quadratic each expose different geometric and physical information?\n- When modelling a free-falling supply crate $h(t) = -4.9t^2 + 720$ or a launched rocket, what do the vertex, $y$-intercept, and positive root represent in context?\n- How does the discriminant $\\Delta = b^2 - 4ac$ bridge algebra (number of solutions) and geometry (intersection of curves and tangent lines)?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Three Quadratic Forms & Completing the Square (2.6)',
      },
      {
        type: 'paragraph',
        markdown:
          'A quadratic function ($a \\neq 0$) describes a symmetric **parabola** opening upward when $a > 0$ (global minimum) and downward when $a < 0$ (global maximum). As summarized across the Oct 7 whiteboard posters ("Apple Team — Quadratics"), choosing the right form avoids unnecessary algebra when finding features or constructing equations from graphs:',
      },
      {
        type: 'equation',
        latex: 'f(x) = ax^2 + bx + c = a(x - h)^2 + k = a(x - p)(x - q), \\qquad h = -\\frac{b}{2a} = \\frac{p + q}{2}, \\quad k = f(h)',
        caption: 'Standard, Vertex (Completed-Square), and Factored Quadratic Forms (Ch. 3 Notes & Oct 7 Whiteboards).',
        variableLegend: [
          { symbol: 'a', meaning: 'leading dilation/direction coefficient (a ≠ 0)' },
          { symbol: '(h, k)', meaning: 'vertex (extremum); axis of symmetry is vertical line x = h' },
          { symbol: 'p, q', meaning: 'x-intercepts / real zeros when they exist' },
          { symbol: 'c', meaning: 'y-intercept at (0, c)' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '**Completing the square when $a \\neq 1$ (Mock Test 1 Q3, Mock Test 2 Q2 & Assignment Q7):** To write $f(x) = -2x^2 + 12x - 7$ in vertex form $-2(x - h)^2 + k$, you have two reliable paths:\n- **Algebraic Square Completion:** Factor $a = -2$ ONLY out of the $x^2$ and $x$ terms: $f(x) = -2(x^2 - 6x) - 7 = -2\\bigl[(x - 3)^2 - 9\\bigr] - 7 = -2(x - 3)^2 + 11$. Check on Assignment Q7 ($f(x) = 3x^2 - 2x + 5$): factor $3$ from $x$-terms to get $3(x^2 - \\frac{2}{3}x) + 5 = 3\\bigl[(x - \\frac{1}{3})^2 - \\frac{1}{9}\\bigr] + 5 = 3(x - \\frac{1}{3})^2 + \\frac{14}{3}$.\n- **Vertex-Formula Method (used in Mock Test 1 & 2 keys):** Note $a = -2$, compute $h = \\frac{-12}{2(-2)} = 3$, evaluate $k = f(3) = -2(9) + 36 - 7 = 11$, and assemble $f(x) = -2(x - 3)^2 + 11$.\n\nWhen reconstructing an equation from a graph (**Ch. 3 Sec. 1D**, Mock Test 1 Q1, Grill IB #4): if the **vertex $(h, k)$ plus one point** is given, substitute $(h, k)$ into $y = a(x - h)^2 + k$ and solve for $a$ (e.g., vertex $(2, -4)$ through $(-1, 6)$ gives $6 = 9a - 4 \\implies a = \\frac{10}{9}$); if the **$x$-intercepts $(p, 0), (q, 0)$ plus one point** are given, substitute into $y = a(x - p)(x - q)$ and solve for $a$ (never forget $a$!). Notice also the **Oct 7 Wipebook Correction**: in $y = a(x - h)^2 + k$, the vertex is **$(+h, k)$**, NOT $(-h, k)$—if you see $(x + 3)^2 - 9$ (Mock Test 2 Q5), rewrite as $(x - (-3))^2 - 9$ so the vertex is $(-3, -9)$ and the axis of symmetry is $x = -3$. And verify the **Oct 13 Answer Key Erratum Fix**: for $y = \\frac{2}{3}(x - 1)(x + 5)$, the axis of symmetry is $x = \\frac{1 + (-5)}{2} = -2$ (not $+2$), giving vertex $(-2, -6)$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Solving Quadratic Equations & Rational Quadratics in Disguise (2.7)',
      },
      {
        type: 'paragraph',
        markdown:
          'Every quadratic equation can be solved via four methods depending on structure and Paper 1 vs Paper 2 rules:\n1. **Zero Product Rule (Factoring):** Move all terms to one side ($ax^2 + bx + c = 0$), divide out numerical common factors (never divide by a variable $x$—if $3x^2 = 2x$, rearranging gives $x(3x - 2) = 0$, preserving $x = 0$!), and factor via slide-and-divide or grouping (e.g., $2x^2 + 5x + 3 = (2x+3)(x+1) = 0$).\n2. **Square Root Principle:** When $x$ appears inside a single squared bracket like $(x + 1)^2 = 3$ (Assignment Q2b), take BOTH roots directly: $x = -1 \\pm \\sqrt{3}$.\n3. **Quadratic Formula:** Derived by completing the square on $ax^2 + bx + c = 0$:',
      },
      {
        type: 'equation',
        latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\qquad \\Delta = b^2 - 4ac',
        caption: 'Quadratic Formula & Discriminant Δ (note Oct 7 Chalkboard erratum fix: always include c in 4ac!).',
        variableLegend: [
          { symbol: '\\Delta > 0', meaning: 'two distinct real roots / two parabola x-intercepts' },
          { symbol: '\\Delta = 0', meaning: 'one repeated real root / parabola or line is tangent' },
          { symbol: '\\Delta < 0', meaning: 'no real roots / curve lies strictly above or below axis' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '4. **Fractional Quadratics in Disguise:** Equations such as $\\frac{1}{x+2} + 2x = 3$ (Grill IB #1c), $\\frac{1}{x+2} = x$ (Mock Test 1 Q5b), or $3 + \\frac{1}{x} = x$ (Mock Test 2 Q4b) clear denominators by multiplying through by the LCD after noting domain exclusions ($x \\neq -2$, $x \\neq 0$), yielding $2x^2 + x - 5 = 0 \\implies x = \\frac{-1 \\pm \\sqrt{41}}{4}$ and $x^2 - 3x - 1 = 0 \\implies x = \\frac{3 \\pm \\sqrt{13}}{2}$. Simplify exact surds on Paper 1 (e.g. $\\sqrt{8} = 2\\sqrt{2}$ in Mock Test 1 Q5b so $\\frac{-2 \\pm 2\\sqrt{2}}{2} = -1 \\pm \\sqrt{2}$).',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. The Discriminant Δ, Tangency & Degenerate Parameter Traps (2.7)',
      },
      {
        type: 'paragraph',
        markdown:
          'The discriminant $\\Delta = b^2 - 4ac$ determines both the $x$-intercept count of $y = ax^2 + bx + c$ and the intersection count between a parabola $y = ax^2 + bx + c$ and a line $y = mx + d$: equate them to form $ax^2 + (b - m)x + (c - d) = 0$ and test $\\Delta$. When a line is **tangent** to a parabola, $\\Delta = 0$; when they **never intersect**, $\\Delta < 0$ (Haese Review Set 1A #12). Notice also **Oxford Paper 1 #9**: proving $f(x) = x^2 + 6x + (8 + k) > 0$ for all $x \\in \\mathbb{R}$ requires $a > 0$ AND $\\Delta < 0$ ($36 - 4(8+k) < 0 \\implies k > 1$), confirmed immediately by vertex form $(x + 3)^2 + (k - 1) > 0$.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Oct 13 Whiteboard "Grill IB #5a" Trap: Always Test Leading Coefficient k = 0!',
        markdown:
          'In Grill IB #5a, $y = kx^2 + 4kx - 3$ is required to have **exactly one $x$-intercept**. Computing $\\Delta = (4k)^2 - 4(k)(-3) = 4k(4k + 3) = 0$ yields $k = 0$ or $k = -\\frac{3}{4}$. Substituting **$k = 0$ destroys the $x^2$ term**, collapsing the graph to the horizontal line $y = -3$, which has **ZERO $x$-intercepts!** Always reject $k = 0$: ONLY **$k = -\\frac{3}{4}$** is valid!',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_QUAD_DISCRIMINANT_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Quadratic Inequalities ("Garbage Graph" Method) & GDC Modelling (2.7)',
      },
      {
        type: 'paragraph',
        markdown:
          'Unlike linear inequalities—which simply reverse direction when multiplied or divided by a negative constant—quadratic inequalities cannot be solved by taking $\\pm\\sqrt{\\cdot}$ blindly. Follow the three-step **Oct 13 Chalkboard Protocol**:\n1. Rearrange all terms to one side ($f(x) > 0$ or $f(x) \\le 0$) and solve the **corresponding equality** $f(x) = 0$ to locate critical roots.\n2. Sketch a quick **"garbage graph"** (upward or downward parabola over a number line) using open circles ($<, >$) or filled circles ($\\le, \\ge$).\n3. Read the interval(s) satisfying the inequality: e.g., $3x^2 + 12x - 15 > 0 \\implies 3(x + 5)(x - 1) > 0$ lies above the axis outside $[-5, 1]$, giving **$x < -5$ or $x > 1$** (never write invalid $-5 > x > 1$!).\n\nOn **Paper 2 (GDC Required)** projectile and geometric optimization models (Mock Test 1 $h = -4.9t^2 + 14.7t + 10$, Mock Test 2 $h = -16t^2 + 64t + 3$, Assignment Q9 $h = -4.9t^2 + 12t + 35$, Grill IB #7 $h = -5t^2 + 20t + 9$, 16:9 TV diagonal $42"$), use TI-nspire `Menu → 6 (Analyze Graph)` (or `Menu → 8-1-4` polynomial/system solver) to record initial height $h(0)$, maximum vertex height, intersection times at target altitudes, and positive ground-impact time to **3 significant figures**. Always state **contextual physical domain and range** ($0 \\le t \\le t_{\\text{impact}}$ and $0 \\le h \\le h_{\\max}$) rather than mathematical $\\mathbb{R}$, and on line–parabola intersections ($ax^2 + bx + c = mx + k$), bring everything to one side FIRST before evaluating $\\Delta$.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK & International-Mindedness — Ethics & Visual Proof (Oxford pp. 148, 154)',
        markdown:
          'Al-Khwarizmi justified completing the square geometrically by literally adding a physical square corner to a rectangle of area $x^2 + bx$. Meanwhile, Oxford p. 154 asks: *how do mathematicians engage with the ethical dimension of applying parabolic trajectory models to ballistics versus humanitarian aid drops?*',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Discriminant Δ = b² − 4ac',
            definitionMarkdown: 'Governs root multiplicity: $\\Delta > 0$ (2 distinct real), $\\Delta = 0$ (1 repeated tangent), $\\Delta < 0$ (0 real roots).',
            markschemeKeyword: 'b^2 - 4ac',
          },
          {
            term: 'Vertex Formula (-b/(2a), f(-b/(2a)))',
            definitionMarkdown: 'Locates the exact turning point and axis of symmetry $x = -\\frac{b}{2a}$ directly from standard form.',
            markschemeKeyword: 'axis of symmetry / vertex',
          },
          {
            term: 'Degenerate Leading Coefficient',
            definitionMarkdown: 'Value of parameter $k$ that sets $a(k) = 0$, reducing a quadratic to linear/constant and violating quadratic discriminant conclusions.',
            markschemeKeyword: 'reject k = 0',
          },
          {
            term: 'Sign Parabola ("Garbage Graph")',
            definitionMarkdown: 'Quick sketch of parabola orientation across critical roots to isolate valid inequality intervals cleanly.',
            markschemeKeyword: 'critical roots & disjoint intervals',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_QUAD_FORMS_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_QUAD_GRILL_WORKED,
      },
    ],
  },

  // =========================================================================
  // 5. Function Transformations (2.11) [UPGRADED]
  // =========================================================================
  {
    topicCode: '2.11',
    title: 'Function Transformations: Dilations, Reflections & Shift Order (2.11)',
    summary:
      'Live interactive transformation lab for y = a·f(b(x − h)) + k paired with Ian Toms’ Sec. 3.3 Notes ("factor b first, translate LAST"), universal coordinate mapping (x/b + h, a·y + k), asymptotes-first sketching, and IB Questionbank Q1–Q12 markscheme rules.',
    sourceFileNames: [
      'Math AA SL Section 3_3 Function Transformation Notes.pdf',
      'Math SL 11 Transformation Handout.pdf',
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 3.3 & Sec. 3.3 Guiding Questions (pp. 131–141)',
        markdown:
          '- Why do vertical changes outside $f(x)$ act directly on $y$, whereas horizontal changes inside $f(\\cdot)$ act **inversely** on $x$?\n- When both a horizontal dilation $b$ and a translation appear inside $f(2x - 4)$, why does rewriting it as $f(2(x - 2))$ prevent misreading the horizontal shift?\n- How do domain boundaries, range bounds, and asymptotes transform alongside individual key points $(x, y)$?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Toolkit Parent Graphs & Single Transformations (Sec. 3.3)',
      },
      {
        type: 'paragraph',
        markdown:
          'Every transformation builds on a library of **toolkit parent functions**: $x^2$, $x^3$, $|x|$, $\\sqrt{x}$, $\\frac{1}{x}$, $e^x$, $\\ln x$, and $\\sin x$. Notice that almost every algebraic toolkit graph contains the anchor point $(1, 1)$ (or $(0, 1)$ for $e^x$ and $(1, 0)$ for $\\ln x$), providing instant visual verification when sketching stretches and shifts.\n\nSingle transformations split cleanly into **vertical** (outer operations acting directly on $y$-coordinates) and **horizontal** (inner operations acting inversely on $x$-coordinates):\n- **Vertical Translation $y = f(x) + k$:** $(x, y) \\mapsto (x, y + k)$ (shifts up by $k$ if $k > 0$, down if $k < 0$). Watch out for rearranged prompts such as $y + 3 = f(x) \\implies y = f(x) - 3$ (down $3$, NOT up $3$!).\n- **Horizontal Translation $y = f(x - h)$:** $(x, y) \\mapsto (x + h, y)$ (moves **right** by $h$ for $f(x - 3)$, **left** by $3$ for $f(x + 3)$).\n- **Reflections:** $y = -f(x)$ flips across the **$x$-axis** via $(x, y) \\mapsto (x, -y)$; $y = f(-x)$ flips across the **$y$-axis** via $(x, y) \\mapsto (-x, y)$. Notice that on an even function like $f(x) = x^2$, $(-x)^2 = x^2$ leaves the graph unchanged, whereas for $y = \\sqrt{-x}$ (Sec. 3.3 Ex. 4b) the domain flips from $x \\ge 0$ to $x \\le 0$!\n- **Vertical Stretch $y = a\\,f(x)$ ($a > 0$):** $(x, y) \\mapsto (x, a\\,y)$ stretches away from the $x$-axis by **scale factor $a$** ($x$-intercepts remain invariant!).\n- **Horizontal Stretch $y = f(bx)$ ($b > 0$):** $(x, y) \\mapsto (\\frac{1}{b}x, y)$ stretches parallel to the $x$-axis by **scale factor $\\frac{1}{b}$** ($y$-intercept remains invariant! So $f(2x)$ halves every $x$-coordinate—horizontal compression by $\\frac{1}{2}$—while $f(\\frac{1}{4}x)$ widens horizontally by factor $4$).',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Factoring b Out & The Universal Coordinate Mapping Rule (2.11)',
      },
      {
        type: 'paragraph',
        markdown:
          'When multiple transformations combine, order matters! Stretching after translating scales the translation vector too, whereas translating **last** after factoring out $b$ keeps every parameter independent. Following Ian Toms’ Sec. 3.3 rule (*"From this form we translate LAST!!"*), ALWAYS rewrite $y = a\\,f(bx - c) + k$ into standard factored form before reading transformations or mapping points:',
      },
      {
        type: 'equation',
        latex: 'g(x) = a\\,f\\bigl(b(x - h)\\bigr) + k \\implies (x, y) \\longmapsto \\left(\\frac{x}{b} + h,\\; a\\,y + k\\right)',
        caption: 'Standard Factored Transformation Form & Universal Point Map (Sec. 3.3 Notes, p. 9).',
        variableLegend: [
          { symbol: 'a', meaning: 'vertical stretch factor |a| (plus x-axis reflection if a < 0)' },
          { symbol: 'b', meaning: 'horizontal stretch factor 1/|b| (plus y-axis reflection if b < 0)' },
          { symbol: 'h, k', meaning: 'final translation by column vector (h, k) applied LAST' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Verify this algebraically on three classic Sec. 3.3 examples:\n- **Sec. 3.3 Ex. 8b:** $y = 4f(5x - 15) + 2$ factors to $y = 4f(5(x - 3)) + 2$. Applying $(x, y) \\mapsto (\\frac{x}{5} + 3,\\; 4y + 2)$ performs: (1) vertical stretch scale factor $4$, (2) horizontal stretch scale factor $\\frac{1}{5}$, and (3) translation by $\\binom{3}{2}$ ($3$ right, $2$ up).\n- **Sec. 3.3 Ex. 10 (Equation Writing):** Start with $q(x)$, stretch vertically by $\\frac{2}{3}$ ($a = \\frac{2}{3}$), stretch horizontally by $\\frac{1}{3}$ ($b = 3$), reflect in the $y$-axis (multiply $b$ by $-1 \\implies b = -3$), and translate right $7$, up $2$ ($h = 7, k = 2$), giving $y = \\frac{2}{3}q\\bigl(-3(x - 7)\\bigr) + 2$.\n- **Sec. 3.3 Ex. 11:** For $2f(-x + 1)$, factor $-1$ out FIRST: $2f(-(x - 1))$, which reflects in the $y$-axis ($x \\mapsto -x$), stretches vertically by $2$, and **translates $1$ unit RIGHT** ($x\' = -x + 1$), NOT $1$ unit left!\n- **Sec. 3.3 Ex. 14 (Extracting Parameters from Two Graphs, Oxford pp. 140–141):** An arch $f(x)$ spans $[-4, 4]$ (width $8$) with peak $(0, 4)$, and transforms to a narrower inverted trough spanning $[0, 3]$ (width $3$) with bottom $(1.5, -8)$. Horizontal scale factor is $\\frac{3}{8} = \\frac{1}{b} \\implies b = \\frac{8}{3}$; peak height flips from $+4$ to $-8$ so $a = -2$; horizontal shift moves centre $0 \\to 1.5$, giving $y = -2f\\bigl(\\frac{8}{3}(x - 1.5)\\bigr)$.',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRANSFORM_COMPOSITE_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Domain/Range Bounds, Asymptotes & IB Questionbank Precision',
      },
      {
        type: 'paragraph',
        markdown:
          'To transform an entire **domain** $[x_1, x_2]$ and **range** $[y_1, y_2]$ under $g(x) = a\\,f(b(x - h)) + k$, apply $x\' = \\frac{x}{b} + h$ to the domain endpoints (reversing inequality order if $b < 0$) and $y\' = a\\,y + k$ to the range endpoints (reversing order if $a < 0$). For example, if $f$ has domain $[-3, 3]$ and range $[-1, 2]$, then $y = -2f(4x)$ transforms the domain to $[-\\frac{3}{4}, \\frac{3}{4}]$ and flips/scales the range to $[-4, 2]$ (Sec. 3.3 Ex. 13).\n\nFor **reciprocal and exponential curves**, shift the **asymptotes FIRST** as dotted lines: $y = \\frac{1}{x}$ has asymptotes $x = 0, y = 0$, so $y = \\frac{-2}{x + 3} + 5$ shifts the vertical asymptote to $x = -3$ and the horizontal asymptote to $y = 5$, while $-2$ reflects the branches into the top-left and bottom-right sectors around $(-3, 5)$ and doubles vertical distance from $y = 5$. Similarly, in IB Questionbank Q10 (Handout p. 21), shifting a curve with HA $y = 0$ by $y = f(x + 2) - 3$ translates points $2$ left and $3$ down AND drops the horizontal asymptote directly to $y = -3$.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'IB Questionbank Handout Synthesis (Q1–Q12 Markscheme Patterns, pp. 16–25)',
        markdown:
          'Across the 12 official IB Questionbank problems in the Transformation Handout, three structural patterns recur verbatim on Paper 1:\n1. **Piecewise Polygonal Tracing (Q1–Q3, Q8):** Transform ONLY the corner vertices $(x_i, y_i)$ using $(x/b + h, a y + k)$ and join consecutive image corners with straight segments—never guess by eye!\n2. **Quadratic Anchor Reconstruction (Q4, Q11–Q12):** Rewrite $y = 5 - 3(x - 4)^2$ in standard transformation order $y = -3(x - 4)^2 + 5$: reflection in $x$-axis ($a < 0$), vertical stretch scale factor $3$, translation $\\binom{4}{5}$. Note IB marks `(A1)` separately for each parameter!\n3. **Reciprocal & Asymptote Tracking (Q9–Q10):** When $y = f(x)$ has horizontal asymptote $y = 0$ and passes through $A(-5, -4)$ and $B(5, 4)$, $y = f(x + 2) - 3$ shifts **both** the plotted points to $A\'(-7, -7), B\'(3, 1)$ **and** the horizontal asymptote to $y = -3$.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'IB Questionbank Transformation Wording Checklist (Handout pp. 16–25)',
        markdown:
          '- Always write **"translation by vector $\\binom{h}{k}$"** (or "$h$ units right/left and $k$ units up/down") — never vague "move" or "shift".\n- Always write **"vertical stretch of scale factor $|a|$"** and **"horizontal stretch of scale factor $\\frac{1}{|b|}$"** (explicitly naming direction, e.g., *parallel to the $x$-axis*).\n- Note **Reflection Practice Q4d–f trap:** $y = -g(x) + 2$ reflects FIRST then moves $2$ up, whereas $y = -(g(x) + 2) = -g(x) - 2$ would move $2$ down! And $g(-(x + 2)) + 2$ maps $(-2, 3) \\mapsto (0, 5)$ because $-(0 + 2) = -2$.\n- For $f(bx + c)$, **NEVER** read horizontal shift before factoring $b$ out!',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Point-by-Point Coordinate Mapping Recipe (Sec. 3.3 Exam Checklist)',
        markdown:
          'When transforming an unfamiliar graph $y = f(x)$ into $y = a\\,f(b(x - h)) + k$:\n1. Rewrite the equation cleanly in factored form $y = a\\,f\\bigl(b(x - h)\\bigr) + k$ (e.g. $y + 3 = 2f(5x + 5) \\implies y = 2f(5(x+1)) - 3$, so $a=2, b=5, h=-1, k=-3$).\n2. Record the coordinate rule $(x, y) \\mapsto \\left(\\frac{1}{b}x + h,\\; a\\,y + k\\right)$.\n3. Transform 3–4 labelled anchor points (vertices, intercepts, endpoints) plus any horizontal/vertical asymptotes ($x = x_0 \\mapsto x = \\frac{x_0}{b} + h$; $y = y_0 \\mapsto y = a y_0 + k$), then connect smoothly.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Geometry Meets Algebra (Oxford Ch. 3, p. 119)',
        markdown:
          'René Descartes bridged geometry and algebra by showing that geometric stretches, reflections, and translations correspond precisely to algebraic substitutions $y \\mapsto a\\,y + k$ and $x \\mapsto b(x - h)$. Does switching between visual diagrams and algebraic mapping notation create new mathematical objects or reveal invariant relationships?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Horizontal Scale Factor 1/|b|',
            definitionMarkdown: 'Inside $f(bx)$, every $x$-coordinate divides by $b$: $b = 2$ compresses horizontally by scale factor $\\frac{1}{2}$.',
            markschemeKeyword: 'horizontal stretch s.f. 1/b',
          },
          {
            term: 'Factor b First, Translate LAST',
            definitionMarkdown: 'Rewrite $f(bx - c)$ as $f(b(x - c/b))$ so stretches/reflections precede the translation vector $\\binom{c/b}{k}$.',
            markschemeKeyword: 'b(x - h)',
          },
          {
            term: 'Asymptotes-First Sketching',
            definitionMarkdown: 'Shift $x = 0$ and $y = 0$ dotted lines to $(h, q)$ before plotting quadrants and intercepts of reciprocal transforms.',
            markschemeKeyword: 'dotted asymptotes',
          },
          {
            term: 'Invariant Points Under Stretches',
            definitionMarkdown: 'Points on $y = 0$ ($x$-intercepts) remain invariant under vertical stretches $a f(x)$; $(0, f(0))$ stays fixed under horizontal stretches $f(bx)$.',
            markschemeKeyword: 'invariant intercepts',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRANSFORM_MAPPING_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRANSFORM_IBQ_WORKED,
      },
    ],
  },

  // =========================================================================
  // 6. Reciprocal & Linear-Rational Functions (2.8) [UPGRADED]
  // =========================================================================
  {
    topicCode: '2.8',
    title: 'Reciprocal & Linear-Rational Functions, Asymptotes & Inverses (2.8)',
    summary:
      'Covers y = k/(x − h) + q and f(x) = (ax + b)/(cx + d) vertical/horizontal asymptotes, long division & "mutant" conversions, inverse hyperbolas, self-inverse conditions, extraneous root checks, and fixes Ch. 4 class-note errata.',
    sourceFileNames: [
      'Math AA SL Chapter 4 Rational Function Notes.pdf',
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 4 Guiding Questions — Equivalence & Asymptotes (pp. 184–185)',
        markdown:
          '- How does the concentration of medication in a patient’s bloodstream or the average unit cost of production behave over large time/quantity horizons?\n- Why can the same rational curve be written equivalently as $f(x) = \\frac{ax+b}{cx+d}$ and as $q + \\frac{k}{x-h}$, and which form reveals asymptotes vs intercepts faster?\n- What happens graphically if numerator and denominator share a common linear factor?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Basic & Transformed Reciprocal Function (Oxford 4.1–4.2)',
      },
      {
        type: 'paragraph',
        markdown:
          'The parent reciprocal function $f(x) = \\frac{1}{x}$ ($x \\neq 0$) produces a rectangular **hyperbola** ("butterfly" curve) with two symmetric branches in Quadrants I and III, symmetric across both $y = x$ and $y = -x$. Its maximal domain is $\\{x \\in \\mathbb{R} \\mid x \\neq 0\\}$ and its range is $\\{y \\in \\mathbb{R} \\mid y \\neq 0\\}$, bounded by **vertical asymptote (VA)** $x = 0$ and **horizontal asymptote (HA)** $y = 0$. Notice also that $\\frac{1}{x}$ is its own inverse: replacing $(x, y)$ with $(y, x)$ leaves $xy = 1$ unchanged!\n\nTransforming the reciprocal gives $y = \\frac{k}{x - h} + q$, shifting the asymptote crosshair from $(0, 0)$ to **$(h, q)$**: VA $x = h$, HA $y = q$, Domain $x \\neq h$, and Range $y \\neq q$. As $|x| \\to \\infty$, the fraction $\\frac{k}{x - h} \\to 0$ regardless of how large $|k|$ is, pulling the curve tightly toward $y = q$ (expressed formally in Ch. 4 notes via $\\lim_{x \\to \\pm\\infty} f(x) = q$). As $x \\to h^+$, the denominator approaches $0^+$ so $y \\to +\\infty$ (if $k > 0$) or $-\\infty$ (if $k < 0$). Plotting one anchor point per branch—such as $x = h \\pm 1 \\implies y = q \\pm k$—locks the exact stretch and quadrant orientation.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Linear-over-Linear Rational Functions (ax + b)/(cx + d) (Oxford 4.3)',
      },
      {
        type: 'paragraph',
        markdown:
          'When $x$ appears in both numerator and denominator—$f(x) = \\frac{ax + b}{cx + d}$ ($c \\neq 0$, $ad - bc \\neq 0$)—use Ian Toms’ systematic **6-step graphing recipe (Ch. 4 Notes)**:\n1. **Domain:** Set $cx + d \\neq 0 \\implies x \\neq -\\frac{d}{c}$.\n2. **Vertical Asymptote (VA):** $x = -\\frac{d}{c}$ (where denominator $= 0$ and numerator $\\neq 0$).\n3. **Horizontal Asymptote (HA):** Divide numerator and denominator by $x$ (or evaluate $\\lim_{x \\to \\pm\\infty} f(x)$): $\\frac{a + b/x}{c + d/x} \\to \\frac{a}{c}$, so HA is **$y = \\frac{a}{c}$** (ratio of leading $x$-coefficients!).\n4. **$y$-intercept:** Substitute $x = 0$ to obtain $\\left(0,\\, \\frac{b}{d}\\right)$ (when $d \\neq 0$).\n5. **$x$-intercept:** Set numerator $ax + b = 0$ to obtain $\\left(-\\frac{b}{a},\\, 0\\right)$ (when $a \\neq 0$).\n6. **Sketch:** Draw dotted asymptotes first, plot axial intercepts, and draw smooth hyperbolic branches approaching both asymptotes without crossing them.',
      },
      {
        type: 'equation',
        latex: 'f(x) = \\frac{ax + b}{cx + d} \\implies \\text{VA: } x = -\\frac{d}{c}, \\quad \\text{HA: } y = \\frac{a}{c}, \\quad f^{-1}(x) = \\frac{dx - b}{-cx + a}',
        caption: 'Asymptotes & Closed-Form Inverse of a Linear-Rational Function (note VA and HA trade values!).',
        variableLegend: [
          { symbol: 'ad - bc \\neq 0', meaning: 'non-degeneracy check; if ad − bc = 0 the graph collapses to a horizontal line with a hole' },
          { symbol: 'a + d = 0', meaning: 'exact self-inverse condition (f⁻¹(x) = f(x))' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '**Algebraic Division Equivalence:** How do you convert $f(x) = \\frac{6x + 3}{2x - 10}$ (Oxford Paper 2 #8) into transformation form $q + \\frac{k}{x - h}$? Rewrite the numerator in multiples of the denominator $(2x - 10)$: $6x + 3 = 3(2x - 10) + 33$, so $\\frac{6x + 3}{2x - 10} = 3 + \\frac{33}{2x - 10} = 3 + \\frac{16.5}{x - 5}$. Immediately we verify VA $x = 5$ and HA $y = 3$, and we can even differentiate easily to see $f\'(x) = \\frac{-16.5}{(x - 5)^2} < 0$ everywhere on $x \\neq 5$, proving the function is **strictly decreasing** on both branches!',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Oxford Ch. 4 Worked Applications — Unit Cost, Dilution & Hyperbola Tangents (pp. 184–211)',
        markdown:
          'Rational functions naturally model **average cost per unit** $\\bar{C}(x) = \\frac{mx + F}{x} = m + \\frac{F}{x}$ (approaching marginal cost $m$ as production $x \\to \\infty$, while vertical asymptote $x = 0$ reflects infinite fixed-cost overhead per item) and **medicine concentration dilution** $C(t) = \\frac{at + b}{ct + d}$. On **Oxford Practice Paper 2 #8**, given $f(x) = \\frac{6x + 3}{2x - 10}$ ($x \\neq 5$), candidates first identify VA $x = 5$, HA $y = 3$, $y$-intercept $(0, -\\frac{3}{10})$, and $x$-intercept $(-\\frac{1}{2}, 0)$, then differentiate $f\'(x) = \\frac{-66}{(2x - 10)^2} < 0$ to confirm $f$ decreases across both branches and find the exact tangent line at $x = 2$: $y = -1.83x + 1.17$.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Chapter 4 Class Notes Errata Fixed (Ex. 1 VA, Ex. 2 Reflection & Mutant Forms)',
        markdown:
          '1. **Ch. 4 Example 1 Fix:** For $f(x) = \\frac{2x + 5}{x - 3}$, setting denominator $x - 3 = 0$ puts the vertical asymptote at **$x = +3$**, NOT $x = -3$!\n2. **Ch. 4 Example 2 Fix:** When reflecting a vertically shifted hyperbola $y = \\frac{k}{x - h} + q$ across the $x$-axis ($-f(x)$), negate the **entire expression** $\\left(-\\frac{k}{x-h} - q\\right)$ so the horizontal asymptote flips to $y = -q$ too!\n3. **Mutant Mixed Forms (Ch. 4 Ex. 7):** Convert forms like $2 - \\frac{3}{x + 1}$ via common denominator: $\\frac{2(x+1) - 3}{x+1} = \\frac{2x - 1}{x + 1}$, immediately confirming VA $x = -1$, HA $y = 2$, and $x$-intercept $(\\frac{1}{2}, 0)$.\n4. **Watch Term Order:** If the prompt writes $\\frac{5 - 2x}{4 + x}$, rewrite in standard order $\\frac{-2x + 5}{x + 4}$ before reading HA $y = \\frac{-2}{1} = -2$ and VA $x = -4$!',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_RATIONAL_ASYMPTOTES_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Removable Holes, Inverses & Solving Rational Equations (Ch. 4.3)',
      },
      {
        type: 'paragraph',
        markdown:
          'What if numerator and denominator share a common root—for example, $f(x) = \\frac{2x - 6}{x - 3}$ ($ad - bc = 2(-3) - (-6)(1) = 0$)? Factoring gives $\\frac{2(x - 3)}{x - 3} = 2$ **for $x \\neq 3$**! Instead of a vertical asymptote, the graph is the horizontal line $y = 2$ punctured by a **removable discontinuity (hole)** at $(3, 2)$.\n\nTo invert $y = \\frac{ax + b}{cx + d}$ (Ch. 4 Ex. 6), follow the 5-step inversion algorithm: (1) swap $x$ and $y$, (2) clear the denominator $x(cy + d) = ay + b$, (3) gather all $y$-terms onto one side $y(cx - a) = -dx + b$, (4) factor out $y$, and (5) isolate $f^{-1}(x) = \\frac{-dx + b}{cx - a} = \\frac{dx - b}{-cx + a}$. Notice that $f^{-1}$ has VA $x = \\frac{a}{c}$ (the old HA of $f$) and HA $y = -\\frac{d}{c}$ (the old VA of $f$). When $a + d = 0$ (e.g. $f(x) = \\frac{3x + 2}{x - 3}$), $f^{-1}(x) = f(x)$ identically (**self-inverse hyperbola**).\n\nWhen solving rational equations algebraically (Ch. 4 Ex. 5: $\\frac{x}{x - 2} - \\frac{2}{x + 1} = \\frac{6}{x^2 - x - 2}$), factor the quadratic denominator FIRST into $(x - 2)(x + 1)$ and declare restrictions $x \\neq 2, -1$ before multiplying through by the LCD. That quadratic step yields $x(x + 1) - 2(x - 2) = 6 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0$: **both** candidates violate the original denominators, proving there is **no real solution**! On Paper 2, verify rational equations such as $\\frac{x + 3}{2x + 4} = 4 - x$ (Oxford p. 209) by plotting both sides on GDC across both hyperbola branches.',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Linear-Rational Equivalence & Asymptote Swap Summary (Ch. 4 Notes)',
        markdown:
          '- **Hyperbola Transformation Form:** $f(x) = q + \\frac{k}{x - h}$ immediately locates VA $x = h$, HA $y = q$, and symmetry centre $(h, q)$. Branch sign $k > 0$ occupies top-right/bottom-left sectors around $(h, q)$; $k < 0$ occupies top-left/bottom-right.\n- **Linear-over-Linear Form:** $f(x) = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0$) has VA $x = -\\frac{d}{c}$, HA $y = \\frac{a}{c}$, $x$-int $(-\\frac{b}{a}, 0)$, $y$-int $(0, \\frac{b}{d})$, and inverse $f^{-1}(x) = \\frac{dx - b}{-cx + a}$ whose VA and HA swap coordinates.\n- **Solving Rational Equations:** Always factor all denominators FIRST to identify the LCD and list restricted values ($\\neq 0$) before clearing fractions.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Zero, Infinity & Undefined Quotients (Oxford Ch. 4, pp. 186, 203)',
        markdown:
          '*"Is zero the same as nothing?"* Dividing by zero fails because no number $q$ satisfies $0 \\cdot q = 1$. Using limit notation $\\lim_{x \\to \\infty} f(x) = \\frac{a}{c}$, mathematics handles infinite end behaviour rigorously without treating $\\infty$ as a finite number.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Vertical Asymptote (x = −d/c)',
            definitionMarkdown: 'Line $x = -\\frac{d}{c}$ where denominator $cx + d = 0$ while numerator $ax + b \\neq 0$, driving $|f(x)| \\to \\infty$.',
            markschemeKeyword: 'cx + d = 0',
          },
          {
            term: 'Horizontal Asymptote (y = a/c)',
            definitionMarkdown: 'Limiting output $y = \\lim_{x \\to \\pm\\infty} \\frac{ax + b}{cx + d} = \\frac{a}{c}$ governing end behaviour.',
            markschemeKeyword: 'y = a/c',
          },
          {
            term: 'Removable Discontinuity (Hole)',
            definitionMarkdown: 'Occurs when $ad - bc = 0$ so numerator and denominator share a linear factor, puncturing a line at one excluded $x$-value.',
            markschemeKeyword: 'common factor / hole',
          },
          {
            term: 'Extraneous Solution',
            definitionMarkdown: 'Algebraic root produced after multiplying by the LCD that makes an original denominator equal zero.',
            markschemeKeyword: 'rejected domain exclusion',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_RATIONAL_FORMS_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_RATIONAL_EXTRANEOUS_WORKED,
      },
    ],
  },

  // =========================================================================
  // 7. Exponential & Logarithmic Functions & Models (2.9–2.10) [NEW]
  // =========================================================================
  {
    topicCode: '2.9',
    title: 'Exponential & Logarithmic Functions, Models & Equation Solving (2.9–2.10)',
    summary:
      'Analyze graphs, asymptotes, and inverse symmetry of a^x, e^x, log_a(x), and ln(x); build radioactive decay, half-life, doubling-time, and Newton’s cooling models; and combine Paper 1 analytical logs with Paper 2 GDC intersection solving (Oxford Ch. 9 & Haese Ch. 3–4).',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 9 Guiding Questions — Exponential & Logarithmic Models (pp. 394–395)',
        markdown:
          '- If bacteria in a Petri dish double every hour ($N = N_0 \\cdot 2^t$), what happens biologically if the exponential model runs indefinitely—and what domain constraints keep a mathematical model realistic?\n- How do you model the cooling curve of a hot drink approaching ambient room temperature asymptotically?\n- Why is $y = e^x$ the canonical base of continuous change in calculus, finance, and science?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Graphs & Asymptotes of Exponential Functions f(x) = a^x and e^x (2.9)',
      },
      {
        type: 'paragraph',
        markdown:
          'An **exponential function** places its independent variable in the exponent: $f(x) = b^x$ ($b > 0, b \\neq 1$). Unlike linear functions (constant additive difference) or quadratics (constant second difference), $b^x$ grows or decays by a **constant multiplicative ratio** per unit step in $x$:\n- **Domain & Range:** $\\text{Dom}(f) = \\mathbb{R}$, $\\text{Ran}(f) = (0, \\infty)$ because $b^x > 0$ strictly for all $x \\in \\mathbb{R}$.\n- **Key Anchor & Asymptote:** Every unshifted $b^x$ passes through $(0, 1)$ and $(1, b)$ with **horizontal asymptote $y = 0$** (the $x$-axis).\n- **Growth vs Decay:** If $b > 1$ (or $e^{kx}$ with $k > 0$), the curve increases strictly from $0^+$ to $+\\infty$. If $0 < b < 1$ (or $e^{kx}$ with $k < 0$), it decays strictly from $+\\infty$ toward $0^+$. Reflecting $b^x$ in the $y$-axis gives $b^{-x} = (1/b)^x$.\n\nApplying transformations $f(x) = A e^{k(x - h)} + c$ shifts the horizontal asymptote to **$y = c$** and rescales initial distance from the asymptote by $A$. If $A < 0$, the graph reflects below the asymptote ($y < c$, as in skydiver terminal velocity $V(t) = 50(1 - e^{-0.2t})$ approaching $V = 50\\text{ m s}^{-1}$ from below!). Notice that **every exponential function $b^x$ can be rewritten in base $e$** via $b = e^{\\ln b}$, so $b^x = e^{(\\ln b)x}$—a vital conversion before differentiating or comparing growth rates.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Logarithmic Curves y = log_a(x) & ln(x) as Inverses Across y = x (2.9)',
      },
      {
        type: 'paragraph',
        markdown:
          'Because $f(x) = a^x$ ($a > 0, a \\neq 1$) is strictly monotonic, it passes the Horizontal Line Test and possesses a global inverse **$f^{-1}(x) = \\log_a x$** (specifically $y = \\ln x$ is the inverse of $y = e^x$). Reflecting across $y = x$ swaps every geometric and algebraic property:\n- **Domain & Range:** $\\text{Dom}(\\log_a x) = (0, \\infty)$ ($x > 0$), $\\text{Ran}(\\log_a x) = \\mathbb{R}$.\n- **Asymptote & Intercept:** The horizontal asymptote $y = 0$ of $a^x$ reflects into the **vertical asymptote $x = 0$** of $\\log_a x$, and the $y$-intercept $(0, 1)$ reflects into the **$x$-intercept $(1, 0)$**.\n- **Transformed Logarithm $g(x) = p\\ln(x - h) + q$:** Domain is **$x > h$**, vertical asymptote is **$x = h$**, and the canonical $(1, 0)$ point shifts to $(h + 1, q)$.\n\nFor example (Haese Review Set 4A #2), inverting $f(x) = e^{x+1} - 3$ yields $x = e^{y+1} - 3 \\implies e^{y+1} = x + 3 \\implies f^{-1}(x) = \\ln(x + 3) - 1$. Observe the exact mirror behavior: $f$ has domain $\\mathbb{R}$, range $y > -3$, HA $y = -3$, $x$-int $\\ln 3 - 1$, $y$-int $e - 3$; while $f^{-1}$ has domain $x > -3$, range $\\mathbb{R}$, VA $x = -3$, $x$-int $e - 3$, and $y$-int $\\ln 3 - 1$!',
      },
      {
        type: 'equation',
        latex: 'y = A e^{kx} + c \\quad (\\text{HA: } y = c, \\; y > c \\text{ if } A > 0) \\qquad\\Longleftrightarrow\\qquad x = \\frac{1}{k}\\ln\\left(\\frac{y - c}{A}\\right) \\quad (\\text{VA: } y = c)',
        caption: 'General Exponential–Logarithmic Inverse Pair & Asymptote Trade (Oxford Ch. 9 & Haese Ch. 4).',
        variableLegend: [
          { symbol: 'c', meaning: 'horizontal asymptote of exponential model / vertical asymptote of its inverse' },
          { symbol: 'k', meaning: 'continuous growth rate (k > 0) or decay constant (k < 0)' },
          { symbol: 'A', meaning: 'initial excess above asymptote at x = 0 (since y(0) = A + c)' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Exponential Growth, Half-Life, Cooling & Semi-Log Linearization (2.9–2.10)',
      },
      {
        type: 'paragraph',
        markdown:
          'Real-world scientific, financial, and medical data frequently follow $N(t) = N_0 e^{kt}$ or $N(t) = N_0 b^{t/\\tau}$:\n- **Doubling Time ($T_d$):** Setting $2N_0 = N_0 e^{k T_d}$ ($k > 0$) cancels $N_0$ and yields **$T_d = \\frac{\\ln 2}{k}$**—meaning doubling time is constant regardless of current population size!\n- **Radioactive Half-Life ($t_{1/2}$):** Setting $\\frac{1}{2}W_0 = W_0 e^{-k t_{1/2}}$ ($k > 0$) yields **$t_{1/2} = \\frac{\\ln 2}{k}$**. To find when $80\\%$ has decayed ($20\\%$ remains), solve $0.20 = e^{-kt}$.\n- **Newton’s Law of Cooling / Terminal Velocity:** $T(t) = T_{\\text{amb}} + (T_0 - T_{\\text{amb}})e^{-kt}$ approaches room/refrigerator temperature $T_{\\text{amb}}$ as its horizontal asymptote $y = c$.\n- **Semi-Log Linearization (Haese Ch. 21):** Taking $\\ln$ of $M = A e^{kt}$ produces the straight line $\\ln M = kt + \\ln A$ of gradient $k$ and vertical intercept $\\ln A$, allowing linear regression on $(\\ln M, t)$ to fit exponential data!',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_EXP_DECAY_ASYMPTOTE_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Solving Exponential/Log Equations Analytically vs Via GDC (2.10)',
      },
      {
        type: 'paragraph',
        markdown:
          'On **Paper 1 (Non-GDC)**, isolate the exponential term $e^{kx} = C$ (or combine single-base logs $\\log_a(P) = Q \\implies P = a^Q$), leaving exact answers in terms of $\\ln$ or $e$ (e.g., $V = 50(1 - e^{-0.2t}) = 40 \\implies e^{-0.2t} = \\frac{1}{5} \\implies t = -5\\ln(1/5) = 5\\ln 5$). Remember that **$e^u > 0$** strictly: if a quadratic-in-$e^x$ yields $e^x = -3$, that branch has **no real solution**.\n\nOn **Paper 2 (GDC Required)**, many transcendental equations mix algebraic and exponential/logarithmic terms—such as $e^x = 4 - x^2$ or $x\\ln x = 2$. These possess no elementary closed-form solution: enter $f_1(x)$ and $f_2(x)$ (or $f_1(x) - f_2(x) = 0$) on your TI-nspire GDC, sketch the intersection clearly with labeled axes and window bounds, and report all valid domain roots to **3 significant figures**.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Oxford Ch. 9 & Haese Ch. 3–4 Synthesis — Finding Exponential Parameters from Two Points',
        markdown:
          'A classic IB Paper 2 modeling task provides two data readings—for example, initial radioactive mass $W(0) = 1000\\text{ g}$ and mass after $25\\text{ years}$ $W(25) = 500\\text{ g}$—and asks you to determine $W(t) = A e^{kt}$ or $W(t) = A \\cdot 2^{kt}$. Substituting $t = 0$ immediately locks $A = 1000$; substituting the second point gives $500 = 1000 e^{25k} \\implies k = \\frac{\\ln(0.5)}{25} = -\\frac{\\ln 2}{25} \\approx -0.0277\\text{ yr}^{-1}$. When a third shifted asymptote parameter $c$ is also unknown ($T(t) = A e^{kt} + c$), the horizontal limiting value as $t \\to \\infty$ locks $c$ directly before solving for $A$ and $k$.',
      },
      {
        type: 'paragraph',
        markdown:
          'A recurring Paper 1 algebra bridge turns exponential expressions into **disguised quadratics**: equations such as $e^{2x} - 5e^x + 6 = 0$ or $4^x - 3(2^{x+1}) + 8 = 0$. Substitute $u = e^x$ (or $u = 2^x$) with the strict positivity condition **$u > 0$**, factor $(u - 2)(u - 3) = 0$, reject any zero or negative branch $u \\le 0$, and finish with $x = \\ln 2$ or $x = \\ln 3$ in exact form. Similarly, when converting bases between natural exponential form $N_0 e^{kt}$ and annual multiplier form $N_0 b^t$, equate $b = e^k \\iff k = \\ln b$ cleanly so half-life ($T_{1/2} = \\frac{\\ln 2}{|k|}$) and effective annual percentage change ($b - 1$) stay consistent across multi-part Paper 2 questions.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Four Classic Examiner Pitfalls in Exponential & Logarithmic Models',
        markdown:
          '1. **Non-distributivity of $\\ln$:** $\\ln(A + B e^{kx}) \\neq \\ln A + \\ln(B e^{kx})$! Always subtract $A$ and divide by $B$ BEFORE taking $\\ln$.\n2. **Base-$e$ vs Annual Percentage Rate:** If $P(t) = 500(1.08)^t$, growth is $8\\%$ per year; if $P(t) = 500e^{0.08t}$, the annual multiplier is $e^{0.08} \\approx 1.0833$ ($8.33\\%$ effective annual growth).\n3. **Forgetting Vertical Asymptote shifts:** For $y = \\ln(x - 2)$, the vertical asymptote is $x = 2$, NOT $x = 0$, and the $x$-intercept shifts to $(3, 0)$.\n4. **GDC Domain Bounds:** Always verify whether a negative GDC intersection violates $t \\ge 0$ or $x > h$ inside a logarithm.',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Exponential & Logarithmic Sketching Anchor Guide (2.9)',
        markdown:
          '- **Exponential $y = A\\,b^{x - h} + c$ ($b > 0, b \\neq 1$):** (1) Draw dotted horizontal asymptote $y = c$; (2) Plot anchor $(h, A + c)$ where exponent equals $0$; (3) Plot $(h + 1, A b + c)$ and $y$-intercept $(0, A b^{-h} + c)$.\n- **Logarithm $y = p\\log_a(x - h) + q$ ($a > 0, a \\neq 1$):** (1) Draw dotted vertical asymptote $x = h$ and restrict domain $x > h$; (2) Plot anchor $(h + 1, q)$ where argument equals $1$; (3) Plot $(h + a, p + q)$ and check $x$-intercept by setting $y = 0 \\implies x = h + a^{-q/p}$.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Media Misuse of "Exponential Growth" (Oxford Ch. 9, p. 401)',
        markdown:
          'Headlines routinely describe any rapid increase (e.g., property prices) as *"growing exponentially."* How can informal use of precise mathematical language distort public understanding of proportional versus quadratic versus genuine constant-doubling exponential growth?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Exponential Asymptote y = c',
            definitionMarkdown: 'Horizontal line $y = c$ approached by $A e^{kx} + c$ as $kx \\to -\\infty$; never crossed by the curve.',
            markschemeKeyword: 'horizontal asymptote y = c',
          },
          {
            term: 'Logarithmic Asymptote x = h',
            definitionMarkdown: 'Vertical boundary $x = h$ of $p\\ln(x - h) + q$, ensuring the argument remains strictly positive ($x > h$).',
            markschemeKeyword: 'vertical asymptote x = h',
          },
          {
            term: 'Half-Life / Doubling Time',
            definitionMarkdown: 'Constant interval $T = \\frac{\\ln 2}{|k|}$ required for $N_0 e^{kt}$ to halve or double, independent of $N_0$.',
            markschemeKeyword: 'ln(2)/k',
          },
          {
            term: 'Transcendental GDC Intersection',
            definitionMarkdown: 'Numerical solving via `Menu -> Analyze Graph -> Intersection` when $x$ appears both inside and outside $\\exp$ or $\\ln$.',
            markschemeKeyword: 'GDC intersection (3 s.f.)',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_EXP_LOG_MODELS_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_COOLING_LOG_WORKED,
      },
    ],
  },
];
