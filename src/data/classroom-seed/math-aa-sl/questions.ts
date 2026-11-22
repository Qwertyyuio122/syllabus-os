import type { ClassroomSeedQuestion } from '../types';

export const MATH_AA_SL_QUESTIONS: ClassroomSeedQuestion[] = [
  // =========================================================================
  // TOPIC 1: NUMBER & ALGEBRA (1.1–1.9) — 21 Questions
  // =========================================================================
  {
    topicCode: '1.1',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'Let $a = 4.2 \\times 10^5$ and $b = 6.0 \\times 10^{-2}$. Calculate $\\frac{a}{b}$ and give your answer in standard form $c \\times 10^k$ where $1 \\le c < 10$ and $k \\in \\mathbb{Z}$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Divide mantissas and subtract powers of 10: (4.2 / 6.0) × 10^(5 − (−2)).', marks: 1 },
        { code: 'A1', criterion: 'Obtain 0.7 × 10^7.', marks: 1 },
        { code: 'A2', criterion: 'Adjust to valid standard form 7.0 × 10^6 (1 ≤ c < 10).', marks: 1 },
      ],
      model_answer: '7.0 × 10^6.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.1',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'A rectangular metal plate is measured to have length $12.4\\text{ cm}$ and width $8.5\\text{ cm}$, each correct to the nearest $0.1\\text{ cm}$.\n\n**(a)** State the lower and upper bounds for the length. **[1 mark]**\n**(b)** A student approximates the area as $105\\text{ cm}^2$. Find the maximum possible percentage error of this estimate relative to the true area bounds (give your answer to 3 s.f.). **[3 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) Lower bound 12.35 cm, upper bound 12.45 cm.', marks: 1 },
        { code: 'M1', criterion: '(b) Test extreme areas: A_min = 12.35 × 8.45 = 104.3575 cm² and A_max = 12.45 × 8.55 = 106.4475 cm².', marks: 1 },
        { code: 'M2', criterion: 'Compute percentage errors |(105 − A_true)/A_true| × 100%; max occurs at A_max = 106.4475 cm².', marks: 1 },
        { code: 'A2', criterion: '|(105 − 106.4475)/106.4475| × 100% ≈ 1.36% (3 s.f.).', marks: 1 },
      ],
      model_answer: '(a) [12.35, 12.45) cm; (b) 1.36%.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.2',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'A piece of wood is $290\\text{ cm}$ long. It is cut into $10$ pieces, each of which is $2\\text{ cm}$ longer than the piece cut off immediately before it. All the wood is used up. Find:\n\n**(a)** the length of the first (shortest) piece; **[4 marks]**\n**(b)** the length of the last (longest) piece. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Recognize arithmetic series with n = 10, d = 2, and S_10 = 290.', marks: 1 },
        { code: 'M2', criterion: 'Substitute into S_n = (n/2)(2u_1 + (n − 1)d): 290 = (10/2)(2u_1 + 9 × 2).', marks: 2 },
        { code: 'A1', criterion: '290 = 10u_1 + 90 -> u_1 = 20 cm.', marks: 1 },
        { code: 'M3', criterion: '(b) u_10 = u_1 + 9d = 20 + 9(2).', marks: 1 },
        { code: 'A2', criterion: 'u_10 = 38 cm.', marks: 1 },
      ],
      model_answer: '(a) 20 cm; (b) 38 cm.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.2',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'In an arithmetic sequence, the $6$th term is $u_6 = -5$ and the $9$th term is $u_9 = -20$. Find the sum of the first $20$ terms, $S_{20}$ (Oxford Ch. 1 Review #2).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Set up u_1 + 5d = −5 and u_1 + 8d = −20.', marks: 1 },
        { code: 'A1', criterion: 'Subtract to find 3d = −15 -> d = −5.', marks: 1 },
        { code: 'A2', criterion: 'Substitute back: u_1 = −5 − 5(−5) = 20.', marks: 1 },
        { code: 'M2', criterion: 'Apply S_20 = (20/2)[2(20) + 19(−5)] = 10(40 − 95).', marks: 1 },
        { code: 'A3', criterion: 'S_20 = −550.', marks: 1 },
      ],
      model_answer: 'S_20 = −550.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.2',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'Find $k$ given that $3k$, $k - 2$, and $k + 7$ are three consecutive terms of an arithmetic sequence (Haese Review Set 6A #2).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Equate common differences: (k − 2) − 3k = (k + 7) − (k − 2).', marks: 1 },
        { code: 'M2', criterion: 'Simplify: −2k − 2 = 9.', marks: 1 },
        { code: 'A1', criterion: 'k = −11/2.', marks: 1 },
      ],
      model_answer: 'k = −11/2.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '1.2',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Find the sum of all integers between $500$ and $1400$ inclusive that are **not** divisible by $7$ (Oxford Ch. 1 Exam-Style).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Sum of all integers 500..1400: n = 1400 − 500 + 1 = 901; S_all = (901/2)(500 + 1400) = 855 950.', marks: 2 },
        { code: 'M2', criterion: 'Multiples of 7 from 504 (7×72) to 1400 (7×200): m = 200 − 72 + 1 = 129; S_div7 = (129/2)(504 + 1400) = 122 808.', marks: 2 },
        { code: 'A1', criterion: 'Subtract: 855 950 − 122 808 = 733 142.', marks: 1 },
      ],
      model_answer: '733 142.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.3',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'In a geometric sequence with positive common ratio, the fourth term is $8$ times the first term. If the sum of the first $10$ terms is $765$, find the $10$th term of the sequence (Oxford Ch. 1 Review #8).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'u_4 = 8 u_1 -> u_1 r^3 = 8 u_1 -> r^3 = 8 -> r = 2.', marks: 2 },
        { code: 'M2', criterion: 'S_10 = u_1(2^10 − 1)/(2 − 1) = 1023 u_1 = 765.', marks: 1 },
        { code: 'A1', criterion: 'u_1 = 765 / 1023 = 255 / 341.', marks: 1 },
        { code: 'A2', criterion: 'u_10 = u_1 · 2^9 = (255/341) × 512 = 130560 / 341.', marks: 1 },
      ],
      model_answer: 'u_10 = 130560 / 341 (≈ 383).',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.3',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Three consecutive terms of a geometric sequence are $x - 3$, $6$, and $x + 2$. Find all possible values of $x$ (Oxford Ch. 1 Review #9).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Equate common ratios: 6 / (x − 3) = (x + 2) / 6.', marks: 1 },
        { code: 'M2', criterion: '(x − 3)(x + 2) = 36 -> x² − x − 6 = 36 -> x² − x − 42 = 0.', marks: 1 },
        { code: 'M3', criterion: 'Factor (x − 7)(x + 6) = 0.', marks: 1 },
        { code: 'A1', criterion: 'x = 7 or x = −6.', marks: 1 },
      ],
      model_answer: 'x = 7 or x = −6.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.3',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Determine the general term $u_n$ of a geometric sequence given that $u_6 = \\frac{16}{3}$ and $u_{10} = \\frac{256}{3}$ (Haese Review Set 6A #5).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Divide u_10 / u_6 = r^4 = (256/3) / (16/3) = 16.', marks: 1 },
        { code: 'A1', criterion: 'r = 2 or r = −2 (both even roots valid!).', marks: 1 },
        { code: 'M2', criterion: 'u_6 = u_1 r^5 = 16/3 -> u_1 = (16/3)/(±32) = ±1/6.', marks: 1 },
        { code: 'A2', criterion: 'u_n = (1/6)·2^(n−1) or u_n = (−1/6)·(−2)^(n−1).', marks: 1 },
      ],
      model_answer: 'u_n = (1/6)·2^(n−1) or u_n = (−1/6)·(−2)^(n−1).',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '1.4',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'Anna invests $\\$200$ in a bank paying $5\\%$ annual compound interest (compounded annually), while a mountain bike currently priced at $\\$350$ depreciates by $6\\%$ per year.\n\n**(a)** Calculate Anna’s account balance after $3$ complete years to $2$ decimal places. **[2 marks]**\n**(b)** Calculate how many complete years Anna must wait until her money has more than doubled. **[2 marks]**\n**(c)** Calculate how many complete years it will take until Anna can afford the bike. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) FV = 200 × (1.05)^3.', marks: 1 },
        { code: 'A1', criterion: '$231.53.', marks: 1 },
        { code: 'M2', criterion: '(b) 200(1.05)^n > 400 -> n > ln(2)/ln(1.05) ≈ 14.207 -> 15 complete years.', marks: 2 },
        { code: 'M3', criterion: '(c) 200(1.05)^n ≥ 350(0.94)^n -> (1.05/0.94)^n ≥ 1.75 -> n ≥ 5.057.', marks: 1 },
        { code: 'A2', criterion: '6 complete years (at n=6: $268.02 > $241.45).', marks: 1 },
      ],
      model_answer: '(a) $231.53; (b) 15 complete years; (c) 6 complete years.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.4',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Kostas takes a $4$-year bank loan for a new car priced at $€20\\,987$. At the end of $4$ years, Kostas has repaid a total of $€22\\,960$ in a single lump-sum settlement. Calculate the nominal annual interest rate the bank charged if interest was compounded monthly (Oxford Ch. 1 Review).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Set up FV = PV(1 + r/(100k))^(kn) with k = 12, n = 4 (kn = 48).', marks: 1 },
        { code: 'M2', criterion: '22960 = 20987(1 + r/1200)^48.', marks: 1 },
        { code: 'M3', criterion: '(1 + r/1200) = (22960/20987)^(1/48) ≈ 1.001873.', marks: 1 },
        { code: 'A1', criterion: 'r ≈ 2.25% p.a. (3 s.f.).', marks: 1 },
      ],
      model_answer: 'r ≈ 2.25% per annum.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.4',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Brad deposits $\\$5500$ into an account earning $2.75\\%$ nominal annual interest compounded quarterly.\n\n**(a)** Determine the value of the investment after $4$ years to the nearest cent. **[2 marks]**\n**(b)** If average annual inflation is $2.0\\%$ over those $4$ years, calculate the real purchasing-power value of Brad’s investment in today’s dollars. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) FV = 5500(1 + 0.0275/4)^(4×4) = 5500(1.006875)^16.', marks: 1 },
        { code: 'A1', criterion: '$6137.13.', marks: 1 },
        { code: 'M2', criterion: '(b) Divide nominal FV by inflation factor (1.02)^4: 6137.13 / 1.082432.', marks: 1 },
        { code: 'A2', criterion: '$5669.76 (or $5670 to 3 s.f.).', marks: 1 },
      ],
      model_answer: '(a) $6137.13; (b) $5669.76 ($5670 to 3 s.f.).',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Solve',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'Solve $9^{x - 1} = \\frac{1}{27}$ without a GDC (Oxford Ch. 9 Review #3b).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Convert both sides to base 3: (3²)^(x−1) = 3^(−3).', marks: 1 },
        { code: 'M2', criterion: 'Equate exponents: 2x − 2 = −3.', marks: 1 },
        { code: 'A1', criterion: 'x = −1/2.', marks: 1 },
      ],
      model_answer: 'x = −1/2.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Prove',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Prove algebraically that the difference between the squares of any two consecutive odd integers is always divisible by $8$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Represent two consecutive odd integers generally as 2n + 1 and 2n + 3 (n ∈ ℤ).', marks: 1 },
        { code: 'M2', criterion: 'Form difference: (2n + 3)² − (2n + 1)².', marks: 1 },
        { code: 'M3', criterion: 'Expand accurately: (4n² + 12n + 9) − (4n² + 4n + 1) = 8n + 8.', marks: 1 },
        { code: 'A1', criterion: 'Factor 8(n + 1); since n + 1 ∈ ℤ, 8(n + 1) is divisible by 8. QED.', marks: 1 },
      ],
      model_answer: '(2n+3)² − (2n+1)² = 8(n+1), an integer multiple of 8 for all n ∈ ℤ.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Prove',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '**(a)** Prove that $\\frac{x^2 - 16}{x + 4} + \\frac{4x + 8}{x^2 + 2x} = \\frac{x^2 - 4x + 4}{x}$ for all $x \\notin \\{-4, -2, 0\\}$ (adapted from Oxford Ch. 1 #20). **[3 marks]**\n\n**(b)** State the values of $x$ for which the left-hand side is undefined. **[1 mark]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Factor numerators and denominators on LHS: (x−4)(x+4)/(x+4) + 4(x+2)/[x(x+2)].', marks: 1 },
        { code: 'M2', criterion: 'Cancel common factors to obtain (x − 4) + 4/x.', marks: 1 },
        { code: 'A1', criterion: 'Combine over common denominator x: (x² − 4x + 4)/x = RHS. QED.', marks: 1 },
        { code: 'A2', criterion: '(b) LHS denominators vanish at x = −4, x = −2, and x = 0.', marks: 1 },
      ],
      model_answer: '(a) LHS simplifies via factoring (x+4) and (x+2) to (x² − 4x + 4)/x = RHS; (b) x = −4, −2, 0.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.7',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Let $\\log_{10} x = p$ and $\\log_{10} y = q$. Express each of the following in terms of $p$ and $q$ (Oxford Practice Paper 1 #4):\n\n**(a)** $\\log_{10}(xy)$  **(b)** $\\log_{10}\\left(\\frac{x^2}{y}\\right)$  **(c)** $\\log_{10}\\sqrt{x}$  **(d)** $\\log_{10}(100y)$.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) log x + log y = p + q.', marks: 1 },
        { code: 'A2', criterion: '(b) 2 log x − log y = 2p − q.', marks: 1 },
        { code: 'A3', criterion: '(c) (1/2) log x = (1/2)p.', marks: 1 },
        { code: 'A4', criterion: '(d) log 100 + log y = 2 + q.', marks: 1 },
      ],
      model_answer: '(a) p + q; (b) 2p − q; (c) (1/2)p; (d) 2 + q.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.7',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Solve',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Solve $\\log_2 x + \\log_4 x = 6$ for $x > 0$ without a GDC.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Apply change of base on log_4(x) = log_2(x) / log_2(4) = (1/2) log_2(x).', marks: 2 },
        { code: 'M2', criterion: 'Combine: (3/2) log_2(x) = 6 -> log_2(x) = 4.', marks: 1 },
        { code: 'A1', criterion: 'x = 2^4 = 16 (valid since 16 > 0).', marks: 1 },
      ],
      model_answer: 'x = 16.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '1.8',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Show that',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'A ball is dropped vertically from a height of $20\\text{ m}$ onto horizontal ground. Following each bounce, it rebounds to $\\frac{5}{6}$ of its previous vertical height. Assuming the ball continues bouncing indefinitely, show that the total vertical distance it travels is $220\\text{ m}$ (Oxford Ch. 1 Exam-Style).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Recognize initial drop 20 m occurs once, whereas rebounds travel UP and DOWN twice: 20 + 2(20·5/6 + 20·(5/6)² + ...).', marks: 2 },
        { code: 'M2', criterion: 'Apply infinite sum S_∞ = u_1 / (1 − r) with u_1 = 20(5/6) = 100/6 and r = 5/6 (valid since |5/6| < 1).', marks: 2 },
        { code: 'A1', criterion: 'Total = 20 + 2 · [(100/6)/(1/6)] = 20 + 200 = 220 m. QED.', marks: 1 },
      ],
      model_answer: '20 + 2 · [20(5/6) / (1 − 5/6)] = 20 + 200 = 220 m.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.8',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'The second term of a convergent geometric series is $180$ and the sixth term is $\\frac{20}{9}$. Find all possible values of the sum to infinity $S_\\infty$ (Oxford Ch. 1 Exam-Style).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'u_6 / u_2 = r^4 = (20/9)/180 = 1/81 -> r = ±1/3 (both satisfy |r| < 1).', marks: 2 },
        { code: 'A1', criterion: 'For r = 1/3: u_1 = 540 -> S_∞ = 540 / (2/3) = 810.', marks: 1 },
        { code: 'A2', criterion: 'For r = −1/3: u_1 = −540 -> S_∞ = −540 / (4/3) = −405.', marks: 1 },
      ],
      model_answer: 'S_∞ = 810 (when r = 1/3) or S_∞ = −405 (when r = −1/3).',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.9',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'The coefficient of $x^2$ in the binomial expansion of $(1 + 3x)^n$, where $n \\in \\mathbb{Z}^+$, is $495$. Determine the value of $n$ (Oxford Ch. 1 Exam-Style).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'x² term is C(n, 2) · (3x)² = [n(n − 1)/2] · 9x².', marks: 2 },
        { code: 'M2', criterion: 'Set 9n(n − 1)/2 = 495 -> n(n − 1) = 110.', marks: 1 },
        { code: 'M3', criterion: 'n² − n − 110 = 0 -> (n − 11)(n + 10) = 0.', marks: 1 },
        { code: 'A1', criterion: 'Since n ∈ ℤ⁺, n = 11.', marks: 1 },
      ],
      model_answer: 'n = 11.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '1.9',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Find the coefficient of $x^5$ in the expansion of $(x + 3)(2x - 1)^6$ (Haese Ch. 7 p. 187).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Extract x⁴ and x⁵ terms of (2x − 1)⁶: C(6,2)(2x)⁴(−1)² = 240x⁴ and C(6,1)(2x)⁵(−1) = −192x⁵.', marks: 2 },
        { code: 'M2', criterion: 'Collect cross-products yielding x⁵: x·(240x⁴) + 3·(−192x⁵).', marks: 1 },
        { code: 'A1', criterion: '240 − 576 = −336.', marks: 1 },
      ],
      model_answer: '−336.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },

  // =========================================================================
  // TOPIC 2: FUNCTIONS (2.1–2.11) — 28 Questions
  // =========================================================================
  {
    topicCode: '2.1',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Find the equation of the straight line passing through the point $(4, 3)$ that is perpendicular to the line $y = 2x + 11$. Give your answer in the form $y = mx + c$ (Oxford Practice Paper 1 #5).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Given gradient m_1 = 2; perpendicular gradient m_2 = −1/2.', marks: 1 },
        { code: 'M2', criterion: 'Substitute (4, 3) into y − 3 = −(1/2)(x − 4) or 3 = −(1/2)(4) + c.', marks: 2 },
        { code: 'A1', criterion: 'y = −(1/2)x + 5.', marks: 1 },
      ],
      model_answer: 'y = −(1/2)x + 5.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '2.2',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'State',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'State how the **vertical line test** and **horizontal line test** determine whether a relation is a function and possesses an inverse function.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Vertical line crosses ≤1 time -> relation is a function.', marks: 1 },
        { code: 'A2', criterion: 'Horizontal line crosses ≤1 time -> function is one-to-one (directly invertible).', marks: 1 },
      ],
      model_answer: 'Vertical line test verifies function uniqueness; horizontal line test verifies one-to-one invertibility.',
    },
    sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf'],
  },
  {
    topicCode: '2.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Let $f(x) = \\frac{1}{x - 3}$ ($x \\neq 3$) and $g(x) = \\sqrt{x + 1}$ ($x \\ge -1$). Find $(f \\circ g)(x)$ and state its maximal real domain.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Evaluate f(g(x)) = 1 / (√(x + 1) − 3).', marks: 1 },
        { code: 'M2', criterion: 'Inner domain from g(x): x + 1 ≥ 0 -> x ≥ −1.', marks: 1 },
        { code: 'M3', criterion: 'Outer denominator exclusion: √(x + 1) ≠ 3 -> x + 1 ≠ 9 -> x ≠ 8.', marks: 1 },
        { code: 'A1', criterion: 'Maximal domain: x ≥ −1, x ≠ 8 (i.e. [−1, 8) ∪ (8, ∞)).', marks: 1 },
      ],
      model_answer: '(f ∘ g)(x) = 1 / (√(x + 1) − 3) with maximal domain x ≥ −1, x ≠ 8.',
    },
    sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf'],
  },
  {
    topicCode: '2.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'The function $h(x) = x^2 - 4x + 7$ is defined on the restricted domain $x \\ge 2$. Find $h^{-1}(x)$ and state its domain and range.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Complete square: y = (x − 2)² + 3, giving Range(h) = [3, ∞).', marks: 1 },
        { code: 'M2', criterion: 'Swap x and y: x = (y − 2)² + 3 -> y = 2 ± √(x − 3).', marks: 1 },
        { code: 'A1', criterion: 'Select + root because Range(h⁻¹) = Domain(h) ≥ 2 -> h⁻¹(x) = 2 + √(x − 3).', marks: 1 },
        { code: 'A2', criterion: 'Domain(h⁻¹) = x ≥ 3, Range(h⁻¹) = y ≥ 2.', marks: 1 },
      ],
      model_answer: 'h⁻¹(x) = 2 + √(x − 3), Domain x ≥ 3, Range y ≥ 2.',
    },
    sourceFileNames: ['Math AA SL Functions Chapter 2 Notes.pdf', 'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '2.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 5,
    questionMarkdown:
      'Functions $f, g : \\mathbb{R} \\to \\mathbb{R}$ are defined by $f(x) = 2x + 1$ and $g(x) = 3x - 2$. Find:\n\n**(a)** $(f \\circ g)(x)$  **(b)** $(g \\circ f)(x)$  **(c)** $f^{-1}(x)$ (Oxford Practice Paper 1 #3).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) f(g(x)) = 2(3x − 2) + 1 = 6x − 3.', marks: 1 },
        { code: 'A2', criterion: '(b) g(f(x)) = 3(2x + 1) − 2 = 6x + 1.', marks: 1 },
        { code: 'M1', criterion: '(c) Swap x and y: x = 2y + 1 -> 2y = x − 1.', marks: 2 },
        { code: 'A3', criterion: 'f⁻¹(x) = (x − 1)/2.', marks: 1 },
      ],
      model_answer: '(a) 6x − 3; (b) 6x + 1; (c) f⁻¹(x) = (x − 1)/2.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '2.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Show that',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Given $f(x) = 2x$ and $g(x) = 4x - 3$, show algebraically that $(f^{-1} \\circ g^{-1})(x) = (g \\circ f)^{-1}(x)$ (Haese Review Set 2A #14).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Find f⁻¹(x) = x/2 and g⁻¹(x) = (x + 3)/4.', marks: 1 },
        { code: 'M1', criterion: 'Compute LHS: (f⁻¹ ∘ g⁻¹)(x) = [(x + 3)/4] / 2 = (x + 3)/8.', marks: 1 },
        { code: 'M2', criterion: 'Compute (g ∘ f)(x) = 4(2x) − 3 = 8x − 3.', marks: 1 },
        { code: 'A2', criterion: 'Invert (g ∘ f): RHS = (x + 3)/8 = LHS. QED.', marks: 1 },
      ],
      model_answer: 'Both sides simplify identically to (x + 3)/8.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '2.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Without a GDC, write $f(x) = -2x^2 + 12x - 7$ in vertex form $-2(x - h)^2 + k$ and state the vertex and axis of symmetry (Mock Test 1 Q3).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Factor −2 from x terms: −2(x² − 6x) − 7 (or compute h = −12/(2·−2) = 3).', marks: 1 },
        { code: 'M2', criterion: 'Complete square: −2[(x − 3)² − 9] − 7 (or k = f(3) = 11).', marks: 1 },
        { code: 'A1', criterion: 'f(x) = −2(x − 3)² + 11.', marks: 1 },
        { code: 'A2', criterion: 'Maximum vertex (3, 11) and axis x = 3.', marks: 1 },
      ],
      model_answer: 'f(x) = −2(x − 3)² + 11; vertex (3, 11), axis x = 3.',
    },
    sourceFileNames: ['Math SL 11 Quadratics Mock Test.pdf', 'Math SL 11 Quadratics Mock Test_SOL.pdf'],
  },
  {
    topicCode: '2.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'A parabola has vertex $(1, 8)$ and passes through $(2, 6)$. Find the equation of the parabola and convert it into standard form $y = ax^2 + bx + c$ (Mock Test 2 Q1).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Write vertex form y = a(x − 1)² + 8.', marks: 1 },
        { code: 'M1', criterion: 'Substitute (2, 6): 6 = a(2 − 1)² + 8.', marks: 1 },
        { code: 'A2', criterion: 'a = −2 -> y = −2(x − 1)² + 8.', marks: 2 },
        { code: 'A3', criterion: 'Expand: y = −2(x² − 2x + 1) + 8 = −2x² + 4x + 6.', marks: 1 },
      ],
      model_answer: 'y = −2(x − 1)² + 8 = −2x² + 4x + 6.',
    },
    sourceFileNames: ['Quadratic Mock Test 2.pdf', 'Quadratic Mock Test 2_SOL.pdf'],
  },
  {
    topicCode: '2.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Convert $f(x) = -3x^2 + 12x - 8$ into the form $f(x) = -3(x - h)^2 + k$ without a GDC (Mock Test 2 Q2).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Vertex x = −12/(2·−3) = 2 (or −3(x² − 4x) − 8).', marks: 1 },
        { code: 'A1', criterion: 'f(2) = −3(4) + 24 − 8 = 4.', marks: 2 },
        { code: 'A2', criterion: 'f(x) = −3(x − 2)² + 4.', marks: 1 },
      ],
      model_answer: 'f(x) = −3(x − 2)² + 4.',
    },
    sourceFileNames: ['Quadratic Mock Test 2.pdf', 'Quadratic Mock Test 2_SOL.pdf'],
  },
  {
    topicCode: '2.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'Rewrite $f(x) = 3x^2 - 2x + 5$ in the exact vertex form $f(x) = 3(x - h)^2 + k$ (Quadratics Assignment Q7).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Factor 3 from x-terms: 3(x² − (2/3)x) + 5 (or h = 2/6 = 1/3).', marks: 1 },
        { code: 'M2', criterion: 'Complete square: 3[(x − 1/3)² − 1/9] + 5.', marks: 1 },
        { code: 'A1', criterion: 'f(x) = 3(x − 1/3)² + 14/3.', marks: 1 },
      ],
      model_answer: 'f(x) = 3(x − 1/3)² + 14/3.',
    },
    sourceFileNames: ['Math SL 11 Quadratics Assignment 2026.pdf'],
  },
  {
    topicCode: '2.6',
    paperType: 'Paper 1 (Non-GDC)',
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
    sourceFileNames: ['Math SL 11 Quadratics Mock Test.pdf', 'Math SL 11 Quadratics Mock Test_SOL.pdf'],
  },
  {
    topicCode: '2.6',
    paperType: 'Paper 1 (Non-GDC)',
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
    sourceFileNames: ['Oct 13, 2026 at 11_08 AM.jpg', 'Oct 13, 2026 at 11_08 AM(2).jpg'],
  },
  {
    topicCode: '2.7',
    paperType: 'Paper 1 (Non-GDC)',
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
    paperType: 'Paper 1 (Non-GDC)',
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
    paperType: 'Paper 1 (Non-GDC)',
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
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Solve',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Solve $3 + \\frac{1}{x} = x$ giving exact answers in simplest surd form without a GDC (Mock Test 2 Q4b).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Note x ≠ 0; multiply through by x: 3x + 1 = x².', marks: 1 },
        { code: 'M2', criterion: 'x² − 3x − 1 = 0.', marks: 1 },
        { code: 'M3', criterion: 'Quadratic formula: x = (3 ± √(9 − 4(1)(−1))) / 2.', marks: 1 },
        { code: 'A1', criterion: 'x = (3 ± √13) / 2.', marks: 1 },
      ],
      model_answer: 'x = (3 ± √13) / 2.',
    },
    sourceFileNames: ['Quadratic Mock Test 2.pdf', 'Quadratic Mock Test 2_SOL.pdf'],
  },
  {
    topicCode: '2.7',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Find all possible values of $k$ such that the equation $kx^2 - 3x + 4k = 0$ has one repeated real root (Mock Test 2 Q6b).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Require k ≠ 0 and Δ = 0.', marks: 1 },
        { code: 'M1', criterion: '(−3)² − 4(k)(4k) = 0 -> 9 − 16k² = 0.', marks: 2 },
        { code: 'A2', criterion: 'k² = 9/16 -> k = ±3/4 (both nonzero and valid).', marks: 1 },
      ],
      model_answer: 'k = ±3/4.',
    },
    sourceFileNames: ['Quadratic Mock Test 2.pdf', 'Quadratic Mock Test 2_SOL.pdf'],
  },
  {
    topicCode: '2.7',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'Let $f(x) = x^2 + 6x + (8 + k)$.\n\n**(a)** Find the discriminant $\\Delta$ in terms of $k$. **[2 marks]**\n**(b)** Given that $f(x) > 0$ for all $x \\in \\mathbb{R}$, find the set of possible values of $k$. **[2 marks]**\n**(c)** Express $f(x)$ in vertex form $(x + p)^2 + q$ and explain how it confirms your answer to (b). **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Δ = 6² − 4(1)(8 + k) = 36 − 32 − 4k = 4 − 4k.', marks: 2 },
        { code: 'M2', criterion: '(b) Since upward parabola f(x) > 0 for all x, Δ < 0 -> 4 − 4k < 0 -> k > 1.', marks: 2 },
        { code: 'A1', criterion: '(c) f(x) = (x + 3)² + (k − 1); since (x + 3)² ≥ 0, f(x) > 0 ∀x requires min vertex y = k − 1 > 0 -> k > 1.', marks: 2 },
      ],
      model_answer: '(a) Δ = 4 − 4k; (b) k > 1; (c) (x+3)² + (k−1) has min (k−1) > 0 -> k > 1.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '2.7',
    paperType: 'Paper 2 (GDC)',
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
    topicCode: '2.7',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'A ball is thrown off a cliff with height $h(t) = -4.9t^2 + 12t + 35$ feet after $t \\ge 0$ seconds (Quadratics Assignment Q9). Using your GDC, find to 3 s.f.:\n\n**(a)** the two times when the ball is at $42\\text{ feet}$; **[2 marks]**\n**(b)** the maximum height reached; **[2 marks]**\n**(c)** the time at which the ball hits the ground. **[1 mark]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Solve −4.9t² + 12t + 35 = 42 on GDC.', marks: 1 },
        { code: 'A1', criterion: 't ≈ 0.896 s and t ≈ 1.55 s.', marks: 1 },
        { code: 'M2', criterion: '(b) Find GDC maximum at t = 12/9.8 ≈ 1.224 s.', marks: 1 },
        { code: 'A2', criterion: 'h_max ≈ 42.3 feet (42.347).', marks: 1 },
        { code: 'A3', criterion: '(c) Positive zero t ≈ 4.17 s.', marks: 1 },
      ],
      model_answer: '(a) 0.896 s and 1.55 s; (b) 42.3 ft; (c) 4.17 s.',
    },
    sourceFileNames: ['Math SL 11 Quadratics Assignment 2026.pdf'],
  },
  {
    topicCode: '2.7',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Modern televisions have a $16:9$ aspect ratio (height $= \\frac{9}{16} \\times \\text{width}$) and are advertised by diagonal length. Find the width and height (in inches, to 3 s.f.) of a $42\\text{"}$ television (Mock Test 2 Part II Q2).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Let width = x, height = (9/16)x.', marks: 2 },
        { code: 'M1', criterion: 'Apply Pythagoras: x² + (9x/16)² = 42².', marks: 1 },
        { code: 'A2', criterion: 'x = 36.6 inches (36.606...).', marks: 1 },
        { code: 'A3', criterion: 'Height = (9/16)(36.606...) = 20.6 inches.', marks: 1 },
      ],
      model_answer: 'Width ≈ 36.6", Height ≈ 20.6".',
    },
    sourceFileNames: ['Quadratic Mock Test 2.pdf', 'Quadratic Mock Test 2_SOL.pdf'],
  },
  {
    topicCode: '2.7',
    paperType: 'Paper 2 (GDC)',
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
  {
    topicCode: '2.8',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'For $f(x) = \\frac{2x + 5}{x - 3}$, find both asymptotes, exact axial intercepts, and explain why stating "VA is $x = -3$" is incorrect (Ch. 4 Ex. 1 Fix).',
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
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Find the inverse $f^{-1}(x)$ of $f(x) = \\frac{2x + 5}{x - 3}$ ($x \\neq 3$) and state its domain and asymptotes (Ch. 4 Ex. 6).',
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
    paperType: 'Paper 1 (Non-GDC)',
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
    topicCode: '2.8',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'A function is defined by $f(x) = \\frac{6x + 3}{2x - 10}$, $x \\in \\mathbb{R}, x \\neq 5$ (Oxford Practice Paper 2 #8).\n\n**(a)** Write down the equations of the vertical and horizontal asymptotes. **[2 marks]**\n**(b)** Find the exact $x$- and $y$-intercepts. **[2 marks]**\n**(c)** Find the equation of the tangent to the curve at $x = 2$ (to 3 s.f.). **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) Vertical asymptote x = 5, horizontal asymptote y = 3.', marks: 2 },
        { code: 'A2', criterion: '(b) y-intercept (0, −3/10) = (0, −0.3); x-intercept (−1/2, 0).', marks: 2 },
        { code: 'M1', criterion: '(c) f(2) = 15/(−6) = −2.5; f\'(2) = −66/(−6)² = −11/6 ≈ −1.833 (or via GDC tangent).', marks: 1 },
        { code: 'A3', criterion: 'y = −1.83x + 1.17 (exact: y = −(11/6)x + 7/6).', marks: 1 },
      ],
      model_answer: '(a) x=5, y=3; (b) (0, −0.3), (−0.5, 0); (c) y = −1.83x + 1.17.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '2.9',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Show that',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'A skydiver’s downward speed is $V(t) = 50(1 - e^{-0.2t})\\text{ m s}^{-1}$, where $t$ is time in seconds. Show that it takes exactly $5\\ln 5$ seconds to reach $40\\text{ m s}^{-1}$ (Haese Review Set 4A #8).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Set 40 = 50(1 − e^(−0.2t)) -> 0.8 = 1 − e^(−0.2t).', marks: 1 },
        { code: 'M2', criterion: 'Isolate e^(−0.2t) = 0.2 = 1/5 -> −0.2t = ln(1/5) = −ln 5.', marks: 1 },
        { code: 'A1', criterion: 't = (ln 5)/0.2 = 5 ln 5 seconds. QED.', marks: 1 },
      ],
      model_answer: 'e^(−0.2t) = 1/5 -> t = 5 ln 5 seconds.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '2.9',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'The temperature $T$ ($^\\circ\\text{C}$) of a liquid $t$ minutes after placement in a refrigerator is $T = 4 + 96e^{-0.03t}$. Find the time (to 3 s.f.) for the temperature to reach (a) $25^\\circ\\text{C}$ and (b) $5^\\circ\\text{C}$ (Haese Review Set 4A #10).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) 25 = 4 + 96e^(−0.03t) -> e^(−0.03t) = 21/96 = 7/32.', marks: 1 },
        { code: 'A1', criterion: 't = −ln(7/32)/0.03 ≈ 50.7 min.', marks: 1 },
        { code: 'M2', criterion: '(b) 5 = 4 + 96e^(−0.03t) -> e^(−0.03t) = 1/96.', marks: 1 },
        { code: 'A2', criterion: 't = ln(96)/0.03 ≈ 152 min.', marks: 1 },
      ],
      model_answer: '(a) 50.7 minutes; (b) 152 minutes.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '2.10',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Solve',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Solve $e^{2x} - 5e^x + 6 = 0$ giving exact answers in terms of natural logarithms without a GDC.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Substitute u = e^x (u > 0): u² − 5u + 6 = 0.', marks: 1 },
        { code: 'M2', criterion: 'Factor (u − 2)(u − 3) = 0 -> u = 2 or u = 3.', marks: 1 },
        { code: 'A1', criterion: 'e^x = 2 -> x = ln 2.', marks: 1 },
        { code: 'A2', criterion: 'e^x = 3 -> x = ln 3.', marks: 1 },
      ],
      model_answer: 'x = ln 2 or x = ln 3.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '2.11',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Describe',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'Point $P(6, -4)$ lies on $y = f(x)$. Find the image of $P$ on $g(x) = 3f(2x - 4) + 1$ and describe the geometric sequence of transformations (Transformation Handout).',
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
    paperType: 'Paper 1 (Non-GDC)',
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
    topicCode: '2.11',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'The graph of $y = x^2$ is transformed into $y = 5 - 3(x - 4)^2$ by a reflection in the $x$-axis, a vertical stretch of scale factor $k$, a horizontal translation $p$, and a vertical translation $q$. State the values of $k$, $p$, and $q$ (IB Questionbank Handout Q11).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Rewrite in standard order: y = −3(x − 4)² + 5.', marks: 1 },
        { code: 'A1', criterion: 'Vertical stretch scale factor k = 3.', marks: 1 },
        { code: 'A2', criterion: 'Horizontal translation p = 4 (4 units right).', marks: 1 },
        { code: 'A3', criterion: 'Vertical translation q = 5 (5 units up).', marks: 1 },
      ],
      model_answer: 'k = 3, p = 4, q = 5.',
    },
    sourceFileNames: ['Math SL 11 Transformation Handout.pdf'],
  },
  {
    topicCode: '2.11',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'The graph of $f(x) = \\frac{q}{x - p}$ passes through $A(3, 10)$ and has a vertical asymptote at $x = 2$.\n\n**(a)** Find the values of $p$ and $q$. **[2 marks]**\n**(b)** A transformation maps $A(3, 10)$ to $A\'(3, -10)$. State a single geometric transformation that maps $y = f(x)$ onto this image (IB Questionbank Handout Q9). **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) Vertical asymptote x = 2 -> p = 2.', marks: 1 },
        { code: 'M1', criterion: 'Substitute (3, 10): 10 = q/(3 − 2) -> q = 10.', marks: 1 },
        { code: 'A2', criterion: '(b) (3, 10) -> (3, −10) negates y-coordinates: reflection in the x-axis (y = −f(x)).', marks: 2 },
      ],
      model_answer: '(a) p = 2, q = 10; (b) Reflection in the x-axis.',
    },
    sourceFileNames: ['Math SL 11 Transformation Handout.pdf'],
  },
  {
    topicCode: '2.11',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'The graph of $y = f(x)$ has horizontal asymptote $y = 0$ and passes through $A(-5, -4)$ and $B(5, 4)$. For $y = f(x + 2) - 3$, find the image coordinates $A\'$ and $B\'$ and write down the equation of the new horizontal asymptote (IB Questionbank Handout Q10).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Translation vector [−2, −3].', marks: 1 },
        { code: 'A1', criterion: 'A′(−7, −7).', marks: 1 },
        { code: 'A2', criterion: 'B′(3, 1).', marks: 1 },
        { code: 'A3', criterion: 'Horizontal asymptote shifts down 3 -> y = −3.', marks: 1 },
      ],
      model_answer: 'A′(−7, −7), B′(3, 1), HA y = −3.',
    },
    sourceFileNames: ['Math SL 11 Transformation Handout.pdf'],
  },

  // =========================================================================
  // TOPIC 3: GEOMETRY & TRIGONOMETRY (3.1–3.8) — 14 Questions
  // =========================================================================
  {
    topicCode: '3.1',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'A square-based right pyramid has a base side length of $8\\text{ m}$ and a vertical height of $3\\text{ m}$. Find its exact volume and total surface area (Oxford Ch. 11 Review #1).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Volume V = (1/3) A_base h = (1/3)(8²)(3).', marks: 1 },
        { code: 'A1', criterion: 'V = 64 m³.', marks: 1 },
        { code: 'M2', criterion: 'Slant height of each triangular face l = √(3² + 4²) = 5 m.', marks: 1 },
        { code: 'A2', criterion: 'Total SA = 8² + 4 × (1/2)(8)(5) = 64 + 80 = 144 m².', marks: 1 },
      ],
      model_answer: 'Volume = 64 m³, Total surface area = 144 m².',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.1',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Find the exact volume and exact total surface area (in terms of $\\pi$) of a closed right circular cone with base radius $6\\text{ cm}$ and vertical height $8\\text{ cm}$ (Oxford Ch. 11 Review #2).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Volume V = (1/3)π(6²)(8) = 96π cm³.', marks: 1 },
        { code: 'M1', criterion: 'Slant height l = √(6² + 8²) = 10 cm.', marks: 1 },
        { code: 'M2', criterion: 'Total SA = π r l + π r² = π(6)(10) + π(36).', marks: 1 },
        { code: 'A2', criterion: 'Total SA = 96π cm².', marks: 1 },
      ],
      model_answer: 'Volume = 96π cm³, Total surface area = 96π cm².',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.2',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Thabo and Palesa start from point $A$ and walk along straight paths inclined at an angle of $120^\\circ$ to each other. Thabo walks at $6\\text{ km h}^{-1}$ and Palesa walks at $8\\text{ km h}^{-1}$. Find their exact distance apart after $45$ minutes (Haese Review Set 9A #12).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Distances after 0.75 h: Thabo = 4.5 km = 9/2, Palesa = 6 km.', marks: 1 },
        { code: 'M1', criterion: 'Cosine rule: d² = (9/2)² + 6² − 2(9/2)(6)cos(120°).', marks: 1 },
        { code: 'M2', criterion: 'Substitute cos(120°) = −1/2: d² = 81/4 + 36 + 27 = 333/4.', marks: 1 },
        { code: 'A2', criterion: 'd = √(333)/2 = (3√37)/2 km.', marks: 1 },
      ],
      model_answer: 'd = (3√37)/2 km (≈ 9.12 km).',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '3.2',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'In $\\triangle PQR$, $PQ = 11\\text{ cm}$, $PR = 14\\text{ cm}$, and $\\angle QPR = 68^\\circ$. Calculate to 3 s.f.: (a) the length $QR$, and (b) the area of $\\triangle PQR$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Cosine rule: QR² = 11² + 14² − 2(11)(14)cos(68°).', marks: 1 },
        { code: 'A1', criterion: 'QR² ≈ 201.62 -> QR ≈ 14.2 cm.', marks: 1 },
        { code: 'M2', criterion: '(b) Area = (1/2)(11)(14)sin(68°).', marks: 1 },
        { code: 'A2', criterion: 'Area ≈ 71.4 cm².', marks: 1 },
      ],
      model_answer: '(a) QR ≈ 14.2 cm; (b) Area ≈ 71.4 cm².',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.3',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Maria observes the angle of elevation from ground level to the top of a vertical cliff to be $40^\\circ$. She runs $5\\text{ m}$ directly further away on horizontal ground, where the angle of elevation is now $35^\\circ$. Calculate the height of the cliff to 3 s.f. (Oxford Practice Paper 2 #4).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Let initial horizontal distance = x and height = h: h/x = tan 40° and h/(x + 5) = tan 35°.', marks: 2 },
        { code: 'M2', criterion: 'Equate h: x tan 40° = (x + 5) tan 35° -> x(tan 40° − tan 35°) = 5 tan 35°.', marks: 1 },
        { code: 'A1', criterion: 'x ≈ 25.206 m.', marks: 1 },
        { code: 'A2', criterion: 'h = 25.206 × tan 40° ≈ 21.2 m (3 s.f.).', marks: 1 },
      ],
      model_answer: '21.2 m.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.3',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'The Louvre glass pyramid has a square base of side $35\\text{ m}$ and vertical height $21.6\\text{ m}$. Calculate to 3 s.f. the angle between (a) a sloping triangular face and the base, and (b) a slanted corner edge and the base (Oxford Ch. 11 Opening).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Face angle uses midpoint distance OM = 35/2 = 17.5 m: tan θ_1 = 21.6 / 17.5.', marks: 1 },
        { code: 'A1', criterion: 'θ_1 ≈ 51.0°.', marks: 1 },
        { code: 'M2', criterion: '(b) Edge angle uses half-diagonal OA = (35√2)/2 ≈ 24.7487 m: tan θ_2 = 21.6 / 24.7487.', marks: 1 },
        { code: 'A2', criterion: 'θ_2 ≈ 41.1°.', marks: 1 },
      ],
      model_answer: '(a) 51.0°; (b) 41.1°.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.4',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'A single piece of wire is bent to form the perimeter of a square of side length $2\\text{ cm}$. The wire is then straightened and bent into an arc of a circle of radius $4\\text{ cm}$ (forming the arc only, not the radii). Calculate the angle, in radians, subtended at the centre of the circle (Oxford Practice Paper 1 #2).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Perimeter of square = 4 × 2 = 8 cm (arc length l = 8).', marks: 2 },
        { code: 'M1', criterion: 'Use arc length formula l = rθ -> 8 = 4θ.', marks: 1 },
        { code: 'A2', criterion: 'θ = 2 radians.', marks: 1 },
      ],
      model_answer: 'θ = 2 radians.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.4',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'A circle of radius $10\\text{ cm}$ has a chord $AB$ subtending an angle of $1.2\\text{ radians}$ at the centre $O$. Calculate to 3 s.f.: (a) the perimeter of minor sector $OAB$, and (b) the area of the minor segment cut off by chord $AB$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Perimeter = 2r + rθ = 20 + 10(1.2).', marks: 1 },
        { code: 'A1', criterion: '32.0 cm.', marks: 1 },
        { code: 'M2', criterion: '(b) Area_segment = (1/2)r²(θ − sin θ) = 50(1.2 − sin 1.2).', marks: 1 },
        { code: 'A2', criterion: 'Area ≈ 13.4 cm² (13.398...).', marks: 1 },
      ],
      model_answer: '(a) 32.0 cm; (b) 13.4 cm².',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '3.5',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'In $\\triangle ABC$, $A = 40^\\circ$, $b = 9\\text{ cm}$, and $a = 7\\text{ cm}$. Find both possible sizes of angle $B$ to 3 significant figures (ambiguous case of the sine rule).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Sine rule: sin B = 9 sin(40°) / 7 ≈ 0.82644.', marks: 1 },
        { code: 'A1', criterion: 'Acute solution B_1 = arcsin(0.82644) ≈ 55.7°.', marks: 1 },
        { code: 'M2', criterion: 'Check obtuse supplement B_2 = 180° − 55.73° = 124.27° (valid since 40° + 124.27° < 180°).', marks: 1 },
        { code: 'A2', criterion: 'B ≈ 55.7° or 124° (3 s.f.).', marks: 1 },
      ],
      model_answer: 'B ≈ 55.7° or 124°.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '3.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'Without a GDC, find the exact value of $\\sin\\left(\\frac{2\\pi}{3}\\right) + \\cos\\left(\\frac{5\\pi}{4}\\right) - \\tan\\left(\\frac{7\\pi}{6}\\right)$.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'sin(2π/3) = √3 / 2 (Q2 positive).', marks: 1 },
        { code: 'A2', criterion: 'cos(5π/4) = −√2 / 2 (Q3 negative); tan(7π/6) = 1/√3 = √3/3 (Q3 positive).', marks: 1 },
        { code: 'A3', criterion: 'Combine: √3/2 − √2/2 − √3/3 = √3/6 − √2/2.', marks: 1 },
      ],
      model_answer: '√3/6 − √2/2.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '3.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Given that $\\sin\\theta = \\frac{3}{5}$ and $\\frac{\\pi}{2} < \\theta < \\pi$, find the exact values of (a) $\\cos\\theta$, (b) $\\sin 2\\theta$, and (c) $\\cos 2\\theta$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'cos²θ = 1 − (3/5)² = 16/25; since Q2, cos θ < 0.', marks: 1 },
        { code: 'A1', criterion: '(a) cos θ = −4/5.', marks: 1 },
        { code: 'A2', criterion: '(b) sin 2θ = 2(3/5)(−4/5) = −24/25.', marks: 1 },
        { code: 'A3', criterion: '(c) cos 2θ = 1 − 2(9/25) = 7/25.', marks: 1 },
      ],
      model_answer: '(a) −4/5; (b) −24/25; (c) 7/25.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '3.7',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'The water depth $h(t)$ (metres) in a tidal harbour reaches a maximum of $10\\text{ m}$ at $t = 2\\text{ h}$ and the next minimum of $4\\text{ m}$ at $t = 8\\text{ h}$.\n\n**(a)** Express the depth in the form $h(t) = a\\cos\\bigl(b(t - c)\\bigr) + d$ with $a, b > 0$. **[4 marks]**\n**(b)** Estimate the depth at $t = 11\\text{ h}$ to 3 s.f. **[1 mark]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Amplitude a = (10 − 4)/2 = 3; principal axis d = (10 + 4)/2 = 7.', marks: 2 },
        { code: 'M1', criterion: 'Period T = 2(8 − 2) = 12 h -> b = 2π/12 = π/6; cosine peak at t = 2 -> c = 2.', marks: 2 },
        { code: 'A2', criterion: '(b) h(11) = 3 cos(π(9)/6) + 7 = 3 cos(3π/2) + 7 = 7.00 m.', marks: 1 },
      ],
      model_answer: '(a) h(t) = 3 cos((π/6)(t − 2)) + 7; (b) 7.00 m.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '3.8',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Solve',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Solve $\\cos 2x + 3\\sin x - 2 = 0$ for $0 \\le x \\le 2\\pi$ without a GDC.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Substitute cos 2x = 1 − 2sin²x.', marks: 1 },
        { code: 'A1', criterion: 'Simplify to 2sin²x − 3sin x + 1 = 0.', marks: 1 },
        { code: 'M2', criterion: 'Factor (2sin x − 1)(sin x − 1) = 0 -> sin x = 1/2 or sin x = 1.', marks: 1 },
        { code: 'A2', criterion: 'x = π/6, 5π/6, π/2.', marks: 2 },
      ],
      model_answer: 'x = π/6, π/2, 5π/6.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '3.8',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Solve',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Solve $\\sin(2x) = \\frac{\\sqrt{3}}{2}$ for $0 \\le x \\le 2\\pi$ without a GDC (Haese Ch. 11).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Scale domain: 0 ≤ 2x ≤ 4π.', marks: 1 },
        { code: 'M2', criterion: 'Angles for 2x: π/3, 2π/3, 7π/3, 8π/3.', marks: 2 },
        { code: 'A1', criterion: 'Divide by 2 -> x = π/6, π/3, 7π/6, 4π/3.', marks: 1 },
      ],
      model_answer: 'x = π/6, π/3, 7π/6, 4π/3.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },

  // =========================================================================
  // TOPIC 4: STATISTICS & PROBABILITY (4.1–4.12) — 14 Questions
  // =========================================================================
  {
    topicCode: '4.1',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Determine',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'A dataset has five-number summary $\\text{Min} = 14$, $Q_1 = 22$, $\\text{Median} = 28$, $Q_3 = 34$, and $\\text{Max} = 56$. Determine mathematically whether $56$ is an outlier.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'IQR = 34 − 22 = 12.', marks: 1 },
        { code: 'M1', criterion: 'Upper fence = Q_3 + 1.5·IQR = 34 + 18 = 52.', marks: 1 },
        { code: 'A2', criterion: 'Since 56 > 52, 56 IS an outlier.', marks: 1 },
      ],
      model_answer: 'IQR = 12; upper fence = 52; since 56 > 52, 56 is an outlier.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.3',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'A dataset has mean $48$ and standard deviation $5$ (Oxford Ch. 6 Review #6).\n\n**(a)** Each value in the dataset has $10$ added to it. State the new mean and new standard deviation. **[2 marks]**\n**(b)** Each value in the *original* dataset is multiplied by $10$. Find the new mean and new **variance**. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) New mean = 48 + 10 = 58; new SD = 5 (unchanged under shift).', marks: 2 },
        { code: 'A2', criterion: '(b) New mean = 48 × 10 = 480.', marks: 1 },
        { code: 'A3', criterion: 'New SD = 50 -> new variance = 50² = 2500.', marks: 1 },
      ],
      model_answer: '(a) Mean = 58, SD = 5; (b) Mean = 480, Variance = 2500.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.3',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Estimate',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Ode surveyed students on the number of friends attending birthday parties ($p$), recorded as grouped intervals: $0 \\le p < 5$ ($f=15$), $5 \\le p < 10$ ($f=11$), $10 \\le p < 15$ ($f=9$), $15 \\le p < 20$ ($f=12$), $20 \\le p < 25$ ($f=6$) (Oxford Ch. 6 Review #12).\n\n**(a)** Use mid-interval values on your GDC to find estimates for the mean and standard deviation $\\sigma$ (3 s.f.). **[3 marks]**\n**(b)** Explain why these values are only estimates. **[1 mark]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Use midpoints 2.5, 7.5, 12.5, 17.5, 22.5 with total n = 53.', marks: 1 },
        { code: 'A1', criterion: 'Mean ≈ 10.9 (577.5 / 53 = 10.896...).', marks: 1 },
        { code: 'A2', criterion: 'Population SD σ ≈ 6.72 (3 s.f.).', marks: 1 },
        { code: 'R1', criterion: '(b) Exact individual values inside each grouped interval are unknown.', marks: 1 },
      ],
      model_answer: '(a) Mean ≈ 10.9, σ ≈ 6.72; (b) Raw individual values within each class are unknown.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.4',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'Data from $10$ football clubs pairs player wages $w$ (£ millions) and goals scored $g$ (Oxford Practice Paper 2 #7):\n$w$: `200, 185, 190, 150, 160, 120, 50, 100, 40, 10`\n$g$: `92, 82, 85, 81, 79, 69, 62, 54, 41, 32`\n\n**(a)** Calculate Pearson’s correlation coefficient $r$ and the equation of the regression line of $g$ on $w$ (give answers to 3 s.f.). **[3 marks]**\n**(b)** Estimate the goals scored by a club spending $£80\\text{ million}$. **[1 mark]**\n**(c)** Give **two** reasons why using the line from (a) to estimate the wage bill of a club scoring $17$ goals is unreliable. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) r = 0.950 (0.9501..., 3 s.f., strong positive linear correlation).', marks: 1 },
        { code: 'A2', criterion: 'Regression line of g on w: g = 0.279w + 34.1 (slope 0.27907..., intercept 34.0718...).', marks: 2 },
        { code: 'A3', criterion: '(b) g(80) = 0.27907(80) + 34.0718 = 56.4 goals (approx. 56 goals).', marks: 1 },
        { code: 'R1', criterion: '(c) (1) You must use the regression line of w on g rather than rearranging g on w; (2) g = 17 lies below the observed sample range [32, 92] (extrapolation).', marks: 2 },
      ],
      model_answer: '(a) r = 0.950; g = 0.279w + 34.1; (b) 56.4 goals; (c) wrong regression direction (must use w on g) and extrapolation below [32, 92].',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'In a class of $30$ pupils, $18$ have a dog, $20$ have a cat, and $3$ have neither. A pupil is chosen at random. Find the probability that this pupil has both a dog and a cat (Oxford Ch. 8 Review #2).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Number with dog OR cat = 30 − 3 = 27.', marks: 1 },
        { code: 'M2', criterion: 'Inclusion–exclusion: n(D ∩ C) = 18 + 20 − 27 = 11.', marks: 1 },
        { code: 'A1', criterion: 'P(D ∩ C) = 11/30.', marks: 1 },
      ],
      model_answer: '11/30.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Events $A$ and $B$ satisfy $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \\cup B) = 0.7$.\n\n**(a)** Find $P(A \\cap B)$ and $P(A \\mid B)$. **[2 marks]**\n**(b)** Determine, with mathematical justification, whether $A$ and $B$ are (i) mutually exclusive, and (ii) independent. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) P(A ∩ B) = 0.4 + 0.5 − 0.7 = 0.2; P(A | B) = 0.2 / 0.5 = 0.4.', marks: 2 },
        { code: 'R1', criterion: '(b)(i) Not mutually exclusive since P(A ∩ B) = 0.2 ≠ 0.', marks: 1 },
        { code: 'R2', criterion: '(b)(ii) Independent because P(A)·P(B) = 0.4 × 0.5 = 0.2 = P(A ∩ B) (or P(A|B) = P(A)).', marks: 1 },
      ],
      model_answer: '(a) P(A∩B) = 0.2, P(A|B) = 0.4; (b) Not mutually exclusive (≠ 0), independent (P(A)P(B) = P(A∩B)).',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.11',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Bag $A$ contains $3$ red and $2$ blue marbles; Bag $B$ contains $1$ red and $4$ blue marbles. A fair coin is tossed: Heads selects Bag $A$, Tails selects Bag $B$, and one marble is drawn at random. Given that a red marble was drawn, calculate the probability that it came from Bag $A$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'P(A ∩ Red) = (1/2)(3/5) = 3/10.', marks: 1 },
        { code: 'M2', criterion: 'Total P(Red) = (1/2)(3/5) + (1/2)(1/5) = 4/10 = 2/5.', marks: 2 },
        { code: 'A1', criterion: 'P(A | Red) = (3/10) / (4/10) = 3/4 = 0.75.', marks: 1 },
      ],
      model_answer: '3/4 (0.75).',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.7',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'A discrete random variable $Y$ represents Toby’s net winnings in euros: $Y \\in \\{-2, 1, 2, 3\\}$ with probabilities $P(Y=-2) = b$, $P(Y=1) = c$, $P(Y=2) = 0.1$, and $P(Y=3) = 0.2$. Given that the game is **fair**, find $b$ and $c$ (Oxford Practice Paper 1 #8b).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Sum of probabilities = 1 -> b + c + 0.1 + 0.2 = 1 -> b + c = 0.7.', marks: 2 },
        { code: 'M2', criterion: 'Fair game means E(Y) = 0: −2b + c + 2(0.1) + 3(0.2) = 0 -> −2b + c = −0.8.', marks: 2 },
        { code: 'M3', criterion: 'Subtract equations: 3b = 1.5 -> b = 0.5.', marks: 1 },
        { code: 'A1', criterion: 'c = 0.7 − 0.5 = 0.2.', marks: 1 },
      ],
      model_answer: 'b = 0.5, c = 0.2.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.8',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'Abi plants $10$ seeds. Each seed independently grows into a plant with probability $0.8$. Let $X$ be the number of seeds that grow (Oxford Practice Paper 2 #3).\n\n**(a)** Write down the mean and variance of $X$. **[2 marks]**\n**(b)** Calculate $P(X = 7)$ and $P(X > 6)$ to 3 s.f. **[2 marks]**\n**(c)** Given that $X > 6$, find $P(X = 7 \\mid X > 6)$ to 3 s.f. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) E(X) = 10(0.8) = 8; Var(X) = 10(0.8)(0.2) = 1.6.', marks: 2 },
        { code: 'A2', criterion: '(b) P(X = 7) = 0.201; P(X > 6) = 1 − P(X ≤ 6) = 0.879.', marks: 2 },
        { code: 'M1', criterion: '(c) P(X = 7 | X > 6) = P(X = 7) / P(X > 6) = 0.201326... / 0.879126....', marks: 1 },
        { code: 'A3', criterion: '0.229 (3 s.f.).', marks: 1 },
      ],
      model_answer: '(a) Mean = 8, Var = 1.6; (b) 0.201, 0.879; (c) 0.229.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.8',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'A factory knows $18\\%$ of items produced are defective. An inspector randomly tests $10$ items with replacement (Haese Review Set 23B #2). Find the probability (to 3 s.f.) that (a) exactly $2$ are defective, and (b) at least $2$ are defective.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Model X ~ B(10, 0.18).', marks: 1 },
        { code: 'A1', criterion: '(a) P(X = 2) = binomPdf(10, 0.18, 2) ≈ 0.298.', marks: 1 },
        { code: 'M2', criterion: '(b) P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − binomCdf(10, 0.18, 1).', marks: 1 },
        { code: 'A2', criterion: '1 − 0.4392... ≈ 0.561.', marks: 1 },
      ],
      model_answer: '(a) 0.298; (b) 0.561.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '4.9',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'The heights of $17$-year-old boys are normally distributed with mean $179\\text{ cm}$ and standard deviation $8\\text{ cm}$ (Haese Review Set 24A #1). Using the empirical normal percentages ($68.3\\%$ within $\\mu \\pm \\sigma$, $95.4\\%$ within $\\mu \\pm 2\\sigma$), find the percentage of boys whose heights are:\n\n**(a)** between $171\\text{ cm}$ and $187\\text{ cm}$; **[1 mark]**\n**(b)** more than $195\\text{ cm}$. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) [171, 187] = μ ± 1σ -> 68.3%.', marks: 1 },
        { code: 'M1', criterion: '(b) 195 = μ + 2σ; two outer tails equal 100% − 95.4% = 4.6%.', marks: 1 },
        { code: 'A2', criterion: 'Upper tail P(X > 195) = 4.6% / 2 = 2.3% (or 2.28%).', marks: 1 },
      ],
      model_answer: '(a) 68.3%; (b) 2.3% (2.28%).',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '4.9',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'A machine fills sugar bags with mass $X \\sim N(503, 2^2)$ grams. Bags under $500\\text{ g}$ are rejected as underweight (Haese Review Set 24B #5).\n\n**(a)** Find the proportion of bags that are underweight (3 s.f.). **[2 marks]**\n**(b)** A quality inspector randomly checks $20$ bags. Find the probability that at most $2$ bags are underweight. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) p = normalCdf(−∞, 500, 503, 2) = 0.066807... ≈ 0.0668 (6.68%).', marks: 2 },
        { code: 'M1', criterion: '(b) Y ~ B(20, 0.066807): compute P(Y ≤ 2) = binomCdf(20, 0.066807, 2).', marks: 1 },
        { code: 'A2', criterion: '0.852 (3 s.f.).', marks: 1 },
      ],
      model_answer: '(a) 0.0668; (b) 0.852.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '4.12',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'The random variable $X$ is normally distributed with mean $\\mu = 8$. Given that $P(X > 7) = 0.69146$, find the standard deviation $\\sigma$ of $X$ (Oxford Practice Paper 2 #2).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Left-tail area P(X < 7) = 1 − 0.69146 = 0.30854.', marks: 1 },
        { code: 'M2', criterion: 'Standardize: z = (7 − 8)/σ = invNorm(0.30854, 0, 1) ≈ −0.500.', marks: 2 },
        { code: 'A1', criterion: '−1/σ = −0.5 -> σ = 2.00.', marks: 1 },
      ],
      model_answer: 'σ = 2.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '4.12',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Test scores follow $Y \\sim N(\\mu, \\sigma^2)$. Given that $P(Y < 40) = 0.20$ and $P(Y > 82) = 0.10$, find the mean $\\mu$ and standard deviation $\\sigma$ to 3 s.f. (Oxford Answers p. 714).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(40 − μ)/σ = invNorm(0.20) ≈ −0.84162.', marks: 1 },
        { code: 'M2', criterion: 'P(Y < 82) = 0.90 -> (82 − μ)/σ = invNorm(0.90) ≈ 1.28155.', marks: 2 },
        { code: 'M3', criterion: 'Subtract: 42 = 2.12317 σ.', marks: 1 },
        { code: 'A1', criterion: 'σ ≈ 19.8, μ ≈ 56.6.', marks: 1 },
      ],
      model_answer: 'μ ≈ 56.6, σ ≈ 19.8.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },

  // =========================================================================
  // TOPIC 5: CALCULUS (5.1–5.11) — 15 Questions
  // =========================================================================
  {
    topicCode: '5.1',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Determine',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Using the first-principles limit definition $f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$, find the derivative of $f(x) = x^2 - 3x$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Expand f(x+h) − f(x) = [(x+h)² − 3(x+h)] − (x² − 3x) = 2xh + h² − 3h.', marks: 2 },
        { code: 'M2', criterion: 'Divide by h ≠ 0: 2x + h − 3.', marks: 1 },
        { code: 'A1', criterion: 'Take limit as h -> 0: f\'(x) = 2x − 3.', marks: 1 },
      ],
      model_answer: 'f\'(x) = 2x − 3.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '5.3',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Differentiate each function with respect to $x$ without a GDC (Haese Review Set 15A #2):\n\n**(a)** $y = 3x^2 - x^4$  **[1 mark]**\n**(b)** $y = \\frac{x^3 - x}{x^2}$ ($x \\neq 0$) **[3 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) dy/dx = 6x − 4x³.', marks: 1 },
        { code: 'M1', criterion: '(b) Rewrite as y = x − x⁻¹ before differentiating.', marks: 1 },
        { code: 'A2', criterion: 'dy/dx = 1 + x⁻² = 1 + 1/x².', marks: 2 },
      ],
      model_answer: '(a) 6x − 4x³; (b) 1 + 1/x².',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '5.4',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Consider the curve $y = x^3 - 3x^2 + 4$. Find the equations of the **tangent** and **normal** lines to the curve at the point where $x = 3$.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'At x = 3, y = 27 − 27 + 4 = 4 -> point (3, 4).', marks: 1 },
        { code: 'M1', criterion: 'dy/dx = 3x² − 6x -> m_T = 3(9) − 18 = 9.', marks: 2 },
        { code: 'A2', criterion: 'Tangent: y − 4 = 9(x − 3) -> y = 9x − 23.', marks: 1 },
        { code: 'A3', criterion: 'Normal gradient −1/9 -> y − 4 = −(1/9)(x − 3) -> y = −(1/9)x + 13/3.', marks: 1 },
      ],
      model_answer: 'Tangent: y = 9x − 23; Normal: y = −(1/9)x + 13/3.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf', 'Old IB Textbook.pdf'],
  },
  {
    topicCode: '5.5',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Given that $f\'(x) = 4x^3 + 2$ and $f(2) = 24$, find an expression for $f(x)$ (Oxford Ch. 10 Review #4).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Antidifferentiate: f(x) = ∫(4x³ + 2) dx = x⁴ + 2x + C.', marks: 2 },
        { code: 'M2', criterion: 'Substitute f(2) = 24: 16 + 4 + C = 24 -> C = 4.', marks: 1 },
        { code: 'A1', criterion: 'f(x) = x⁴ + 2x + 4.', marks: 1 },
      ],
      model_answer: 'f(x) = x⁴ + 2x + 4.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Differentiate the following functions with respect to $x$:\n\n**(a)** $y = x\\sin x$ (Oxford Practice Paper 1 #1c) **[2 marks]**\n**(b)** $y = e^{4x} + x^3\\ln(2x)$ **[3 marks]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Product rule: (1)sin x + x(cos x).', marks: 1 },
        { code: 'A1', criterion: 'sin x + x cos x.', marks: 1 },
        { code: 'A2', criterion: '(b) d/dx(e^(4x)) = 4e^(4x).', marks: 1 },
        { code: 'M2', criterion: 'Product + chain rule on x³ ln(2x): 3x² ln(2x) + x³ · (2/(2x)).', marks: 1 },
        { code: 'A3', criterion: '4e^(4x) + 3x² ln(2x) + x².', marks: 1 },
      ],
      model_answer: '(a) sin x + x cos x; (b) 4e^(4x) + 3x² ln(2x) + x².',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.6',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Find the exact coordinates of the point on the curve $f(x) = \\frac{x}{\\sqrt{x^2 + 1}}$ where the tangent line has gradient $1$ (Haese Review Set 15A #3).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Quotient rule: f\'(x) = [√(x²+1) − x·(x/√(x²+1))] / (x² + 1).', marks: 2 },
        { code: 'A1', criterion: 'Simplify numerator: [(x²+1) − x²]/(x²+1)^(3/2) = (x² + 1)^(−3/2).', marks: 1 },
        { code: 'A2', criterion: 'Set (x²+1)^(−3/2) = 1 -> x² + 1 = 1 -> x = 0 -> point (0, 0).', marks: 1 },
      ],
      model_answer: '(0, 0).',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '5.7',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Consider $f(x) = x^3 - 6x^2 + 9x + 1$. Find the coordinates of the local maximum, local minimum, and point of inflection, and state the interval where $f$ is concave up.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'f\'(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3) = 0 -> x = 1, 3.', marks: 1 },
        { code: 'M2', criterion: 'f\'\'(x) = 6x − 12: f\'\'(1) = −6 < 0 (max), f\'\'(3) = 6 > 0 (min).', marks: 1 },
        { code: 'A1', criterion: 'Local max (1, 5); Local min (3, 1).', marks: 1 },
        { code: 'A2', criterion: 'f\'\'(x) = 0 at x = 2 with sign change (− to +) -> Inflection (2, 3); concave up for x > 2.', marks: 2 },
      ],
      model_answer: 'Local max (1, 5); local min (3, 1); inflection (2, 3); concave up for x > 2.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.8',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'A farmer drives a tractor across a field from $A$ ($2\\text{ km}$ south of road point $B$) at $12\\text{ km h}^{-1}$ to reach road point $P$ ($x\\text{ km}$ east of $B$), then drives along the road at $20\\text{ km h}^{-1}$ to $C$ ($2\\text{ km}$ east of $B$). The total journey time is $T(x) = \\frac{\\sqrt{4 + x^2}}{12} + \\frac{2 - x}{20}$ ($0 \\le x \\le 2$). Use calculus to find and justify the exact value of $x$ minimizing $T$ (Oxford Practice Paper 1 #10c).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Differentiate: T\'(x) = x / (12√(4 + x²)) − 1/20.', marks: 2 },
        { code: 'M2', criterion: 'Set T\'(x) = 0 -> 5x = 3√(4 + x²) -> 25x² = 36 + 9x².', marks: 2 },
        { code: 'A1', criterion: '16x² = 36 -> x = 3/2 = 1.5 km (since x ≥ 0).', marks: 1 },
        { code: 'R1', criterion: 'Justify minimum: T\'(x) changes from negative (x < 1.5) to positive (x > 1.5).', marks: 1 },
      ],
      model_answer: 'x = 3/2 km (1.5 km), verified as a minimum since T\' changes − to +.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.9',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'An object moves in a straight line from the origin with velocity $v(t) = 5\\sin(t^2)\\text{ m s}^{-1}$ for $t \\ge 0$ (Oxford Practice Paper 2 #5). Find (correct to 3 s.f. where non-exact):\n\n**(a)** the initial velocity; **[1 mark]**\n**(b)** the **total distance** travelled in the first $3$ seconds; **[2 marks]**\n**(c)** the **displacement** from the origin at $t = 3\\text{ s}$. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) v(0) = 5 sin(0) = 0 m s⁻¹.', marks: 1 },
        { code: 'M1', criterion: '(b) Total distance = ∫_0^3 |5 sin(t²)| dt on GDC.', marks: 1 },
        { code: 'A2', criterion: '8.51 m (3 s.f.).', marks: 1 },
        { code: 'M2', criterion: '(c) Displacement = ∫_0^3 5 sin(t²) dt on GDC -> +3.87 m.', marks: 2 },
      ],
      model_answer: '(a) 0 m s⁻¹; (b) 8.51 m; (c) +3.87 m.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.9',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'A particle moves in a straight line with velocity $v(t) = t^2 - 16\\text{ m s}^{-1}$ ($t \\ge 0$) and initial displacement $s(0) = 10\\text{ m}$ (Oxford Ch. 13.4 #6).\n\n**(a)** Find the acceleration at $t = 2\\text{ s}$ and determine whether the particle is speeding up or slowing down at $t = 2$. **[2 marks]**\n**(b)** Find an expression for $s(t)$ and calculate the total distance travelled between $t = 2$ and $t = 6$ seconds. **[3 marks]**',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '(a) a(t) = 2t -> a(2) = 4 m s⁻²; since v(2) = −12 < 0 and a(2) = 4 > 0 (opposite signs), slowing down.', marks: 2 },
        { code: 'A2', criterion: '(b) s(t) = t³/3 − 16t + 10.', marks: 1 },
        { code: 'M1', criterion: 'v(t) = 0 at t = 4 ∈ [2, 6]; split distance: |s(4)−s(2)| + |s(6)−s(4)| = |−32.67 − (−19.33)| + |−14 − (−32.67)|.', marks: 1 },
        { code: 'A3', criterion: '40/3 + 56/3 = 96/3 = 32 m.', marks: 1 },
      ],
      model_answer: '(a) 4 m s⁻², slowing down; (b) s(t) = t³/3 − 16t + 10, total distance = 32 m.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.10',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Evaluate $\\int_0^4 \\frac{1}{2x + 1}\\,dx$, giving your exact answer in the form $\\ln k$, where $k \\in \\mathbb{Z}$ (Oxford Practice Paper 1 #7).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Antiderivative (1/2) ln(2x + 1).', marks: 2 },
        { code: 'M2', criterion: 'Evaluate limits: (1/2)(ln 9 − ln 1).', marks: 1 },
        { code: 'A1', criterion: '(1/2) ln 9 = ln(9^(1/2)) = ln 3.', marks: 1 },
      ],
      model_answer: 'ln 3 (k = 3).',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.10',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Find each indefinite integral without a GDC (Haese Review Set 18A):\n\n**(a)** $\\int e^{\\sin x}\\cos x\\,dx$ using the substitution $u = \\sin x$ **[2 marks]**\n**(b)** $\\int (3x^2 + 1)\\cos(x^3 + x)\\,dx$. **[2 marks]**',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) u = sin x -> du = cos x dx -> ∫ e^u du.', marks: 1 },
        { code: 'A1', criterion: 'e^(sin x) + C.', marks: 1 },
        { code: 'M2', criterion: '(b) u = x³ + x -> du = (3x² + 1) dx -> ∫ cos u du.', marks: 1 },
        { code: 'A2', criterion: 'sin(x³ + x) + C.', marks: 1 },
      ],
      model_answer: '(a) e^(sin x) + C; (b) sin(x³ + x) + C.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '5.11',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Find the exact area enclosed between the curves $y = x^2 - 3x$ and $y = 2x - x^2$ without a GDC (Haese Ch. 1A #7 & Ch. 19).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Intersect: x² − 3x = 2x − x² -> 2x² − 5x = x(2x − 5) = 0 -> x = 0, 5/2.', marks: 2 },
        { code: 'M2', criterion: 'Set up upper minus lower: ∫_0^(5/2) [(2x − x²) − (x² − 3x)] dx = ∫_0^(5/2) (5x − 2x²) dx.', marks: 1 },
        { code: 'M3', criterion: 'Evaluate [(5/2)x² − (2/3)x³]_0^(5/2) = 125/8 − 125/12.', marks: 1 },
        { code: 'A1', criterion: '125/24 square units.', marks: 1 },
      ],
      model_answer: '125/24 square units.',
    },
    sourceFileNames: ['Old IB Textbook.pdf'],
  },
  {
    topicCode: '5.11',
    paperType: 'Paper 2 (GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Let $f(x) = x^3 - 3x^2 + 2x$ on $[0, 2.5]$. Using your GDC, find to 3 s.f.: (a) the definite integral $\\int_0^{2.5} f(x)\\,dx$, and (b) the total geometric area bounded by $y = f(x)$, the $x$-axis, and the lines $x = 0$ and $x = 2.5$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Evaluate definite integral ∫_0^2.5 (x³ − 3x² + 2x) dx directly.', marks: 1 },
        { code: 'A1', criterion: '0.391 (exact 25/64 = 0.390625).', marks: 1 },
        { code: 'M2', criterion: '(b) Evaluate ∫_0^2.5 |x³ − 3x² + 2x| dx (since f < 0 on (1, 2)).', marks: 1 },
        { code: 'A2', criterion: '0.891 (exact 57/64 = 0.890625).', marks: 1 },
      ],
      model_answer: '(a) Signed integral = 0.391; (b) Total geometric area = 0.891.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
  {
    topicCode: '5.11',
    paperType: 'Paper 1 (Non-GDC)',
    commandTerm: 'Find',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Given that $\\int_1^4 f(x)\\,dx = 10$ and $\\int_2^4 f(x)\\,dx = 6$, find without a GDC (Oxford Ch. 10 Review #3):\n\n**(a)** $\\int_1^2 f(x)\\,dx$  **(b)** $\\int_1^4 \\bigl(f(x) + 4\\bigr)\\,dx$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) ∫_1^2 f(x) dx = ∫_1^4 f(x) dx − ∫_2^4 f(x) dx = 10 − 6.', marks: 1 },
        { code: 'A1', criterion: '4.', marks: 1 },
        { code: 'M2', criterion: '(b) ∫_1^4 f(x) dx + ∫_1^4 4 dx = 10 + 4(4 − 1).', marks: 1 },
        { code: 'A2', criterion: '10 + 12 = 22.', marks: 1 },
      ],
      model_answer: '(a) 4; (b) 22.',
    },
    sourceFileNames: ['OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf'],
  },
];
