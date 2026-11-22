import type { ClassroomSeedNote } from '../types';
import {
  MATH_V3_CALC_DERIVATIVE_EXTREMA_GRAPH,
  MATH_V3_CALC_INTEGRAL_AREA_GRAPH,
  MATH_V3_CALC_OPTIMIZATION_SUB_WORKED,
  MATH_V3_CALC_RULES_MATRIX,
  MATH_V3_CIRCULAR_SINUSOID_GRAPH,
  MATH_V3_NORMAL_PDF_GRAPH,
  MATH_V3_PROB_NORMAL_WORKED,
  MATH_V3_STATS_PROB_MATRIX,
  MATH_V3_TRIG_2D3D_MATRIX,
  MATH_V3_TRIG_COSINE_LAW_GRAPH,
  MATH_V3_TRIG_DOUBLE_ANGLE_WORKED,
  MATH_V3_TRIG_ELEVATION_3D_WORKED,
  MATH_V3_TRIG_IDENTITIES_MATRIX,
} from './diagrams';

export const MATH_NOTES_T345: ClassroomSeedNote[] = [
  // =========================================================================
  // 8. Triangle Trigonometry, 3D Geometry & Mensuration (3.1–3.3)
  // =========================================================================
  {
    topicCode: '3.2',
    title: 'Triangle Trigonometry, 3D Geometry & Mensuration (3.1–3.3)',
    summary:
      'Master 3D coordinates, volume and surface area of pyramids, cones, and spheres, right-angled trigonometry, true bearings, elevation/depression angles, Sine & Cosine Rules (including the ambiguous SSA case), and triangle area ½ab sin C (Oxford Ch. 11 & Haese Ch. 9).',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
      'math sl year one course outline 2026.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 11 Guiding Questions — Space & Measurement (pp. 466–467)',
        markdown:
          '- When designing glass-and-steel structures such as I. M. Pei’s **Louvre Pyramid** ($35\\text{ m}$ square base, $21.6\\text{ m}$ height), how do 2D right triangles unlock 3D volume, surface cladding, face-to-base angles, and edge-to-base angles?\n- Why can two distinct triangles share the exact same SSA measurements ($a, b, A$), whereas SSS and SAS measurements fix a single unique triangle?\n- How do three-figure true bearings and angles of elevation/depression reduce multi-observer surveying problems to non-right triangles?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. 3D Coordinate Geometry & Mensuration of Solids (Topic 3.1)',
      },
      {
        type: 'paragraph',
        markdown:
          'Extending Cartesian geometry into three dimensions $(x, y, z)$ applies the Pythagorean theorem twice: first across the horizontal base $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, then vertically along $\\Delta z$. Consequently, the **3D distance** $d$ and **3D midpoint** $M$ between $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$ mirror the 2D formulas directly (Oxford Ch. 11.1, pp. 468–471):',
      },
      {
        type: 'equation',
        latex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}, \\qquad M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2},\\; \\frac{z_1 + z_2}{2}\\right)',
        caption: '3D Euclidean Distance & Midpoint Formulas (IB AA SL Formula Booklet Topic 3.1).',
        variableLegend: [
          { symbol: 'd', meaning: 'straight-line distance between two points in 3D space' },
          { symbol: 'M', meaning: 'exact midpoint coordinates of segment AB' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'For **mensuration of 3D solids**, keep every Formula Booklet formula crisp and verify unit consistency ($1\\text{ m}^3 = 10^6\\text{ cm}^3 = 1000\\text{ litres}$, $1\\text{ cm}^3 = 1\\text{ mL}$):\n- **Right Pyramid:** Volume $V = \\frac{1}{3} A_{\\text{base}} h$ ($A_{\\text{base}}$ = base area, $h$ = perpendicular vertical height); total surface area sums base area plus triangular lateral faces whose slant height $l$ comes from Pythagoras ($l = \\sqrt{h^2 + (s/2)^2}$ on a square base of side $s$).\n- **Right Circular Cone:** Volume $V = \\frac{1}{3}\\pi r^2 h$; curved surface area $A_{\\text{curved}} = \\pi r l$ where slant height $l = \\sqrt{r^2 + h^2}$; total surface area (closed cone) adds base $\\pi r^2$. Note how truncated cones (frustums, Oxford p. 499) subtract the removed small top cone from the full cone via similar triangles $\\frac{r_{\\text{top}}}{r_{\\text{base}}} = \\frac{h_{\\text{top}}}{h_{\\text{full}}}$.\n- **Sphere & Hemisphere:** Sphere volume $V = \\frac{4}{3}\\pi r^3$ and surface area $A = 4\\pi r^2$. A **solid** hemisphere has volume $\\frac{2}{3}\\pi r^3$ and total surface area $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$ (remember the flat circular cross-section!).',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Right-Angled Trigonometry, Sine Rule, Cosine Rule & Triangle Area (3.2)',
      },
      {
        type: 'paragraph',
        markdown:
          'In a **right-angled triangle**, SOH-CAH-TOA ($\\sin\\theta = \\frac{O}{H}$, $\\cos\\theta = \\frac{A}{H}$, $\\tan\\theta = \\frac{O}{A}$) and Pythagoras ($a^2 + b^2 = c^2$) solve every length and acute angle directly. Remember that in any right triangle, complementary acute angles satisfy $\\sin(90^\\circ - \\theta) = \\cos\\theta$.\n\nFor **general non-right triangles** $\\triangle ABC$ with sides $a, b, c$ opposite angles $A, B, C$, dropping an altitude $h = b\\sin C$ onto base $a$ immediately yields the **area formula** $A = \\frac{1}{2}ah = \\frac{1}{2}ab\\sin C$. Equating two expressions for the same altitude ($b\\sin A = a\\sin B$) yields the **Sine Rule**, while applying Pythagoras to the two right sub-triangles ($c^2 = (b\\sin C)^2 + (a - b\\cos C)^2$) proves the **Cosine Rule**:',
      },
      {
        type: 'equation',
        latex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}, \\qquad c^2 = a^2 + b^2 - 2ab\\cos C, \\qquad \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}, \\qquad \\text{Area} = \\frac{1}{2}ab\\sin C',
        caption: 'Sine Rule, Cosine Rule (Side & Angle Forms), and Non-Right Triangle Area (Oxford Ch. 11.3–11.4).',
        variableLegend: [
          { symbol: 'a, b, c', meaning: 'side lengths strictly opposite vertices A, B, C' },
          { symbol: 'C', meaning: 'included angle strictly between sides a and b' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '**Decision Protocol:** Use the **Sine Rule** when you know a matched angle-and-opposite-side pair plus one extra piece (AAS, ASA, or SSA). Use the **Cosine Rule** when you know **two sides and the included angle (SAS)** or **all three sides (SSS)**. Notice how cleanly the Cosine Rule reveals triangle type: if $a^2 + b^2 - c^2 < 0$, then $\\cos C < 0$ and angle $C$ is automatically **obtuse** ($90^\\circ < C < 180^\\circ$); by contrast, $\\sin B$ stays positive for BOTH acute $B_1$ and obtuse $B_2 = 180^\\circ - B_1$, creating the **ambiguous case** whenever solving SSA with the Sine Rule!',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRIG_COSINE_LAW_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. The Ambiguous Case of the Sine Rule & Non-Right Angle Traps (3.2, 3.5)',
      },
      {
        type: 'paragraph',
        markdown:
          'Suppose you are given acute angle $A$, adjacent side $b$, and opposite side $a$ (**SSA**). If $a < b\\sin A$, no triangle closes. If $b\\sin A < a < b$, swinging side $a$ like a compass intersects the base ray **twice**, generating two valid triangles with supplementary angles at $B$: acute $B_1 = \\arcsin\\left(\\frac{b\\sin A}{a}\\right)$ and obtuse $B_2 = 180^\\circ - B_1$. Always test whether $A + B_2 < 180^\\circ$! If $A + B_2 \\ge 180^\\circ$ (which always happens when $a \\ge b$), only the single acute solution $B_1$ exists. Notice an exam shortcut: when solving for an angle in an SSS triangle using the Cosine Rule, solve for the **largest angle** (opposite the longest side) FIRST if you plan to use the Sine Rule afterward, guaranteeing the remaining two angles must be acute!',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Oxford Ch. 11 Worked Strategy — Area-Driven Side Recovery & Exact Paper 1 Angles',
        markdown:
          'On **Paper 1 (Non-GDC)**, triangle trigonometry questions pair the Cosine/Sine Rules with exact ratios ($\\cos 60^\\circ = \\frac{1}{2}$, $\\cos 120^\\circ = -\\frac{1}{2}$, $\\sin 150^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$) or rational values like $\\cos\\theta = \\frac{3}{5}$ (requiring $\\sin\\theta = \\frac{4}{5}$ via $\\sin^2\\theta + \\cos^2\\theta = 1$ to evaluate Area $= \\frac{1}{2}ab\\sin\\theta$!). For example, Haese Review Set 9A #12 asks how far apart two walkers heading at $120^\\circ$ at $6\\text{ km h}^{-1}$ and $8\\text{ km h}^{-1}$ are after $45\\text{ min}$: distances are $4.5\\text{ km}$ and $6\\text{ km}$, and $d^2 = (\\frac{9}{2})^2 + 6^2 - 2(\\frac{9}{2})(6)(-\\frac{1}{2}) = \\frac{81}{4} + 36 + 27 = \\frac{333}{4} \\implies d = \\frac{3\\sqrt{37}}{2}\\text{ km}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. True Bearings, Angles of Elevation/Depression & 3D Line–Plane Angles (3.3)',
      },
      {
        type: 'paragraph',
        markdown:
          'In navigation and surveying (Topic 3.3, Oxford Ch. 11.5, pp. 492–498):\n- **Three-Figure True Bearings:** Measured **clockwise from true North ($000^\\circ$)** as three digits (East $= 090^\\circ$, South $= 180^\\circ$, West $= 270^\\circ$). Always sketch a vertical North ray at **each** station; parallel North lines create alternate interior or co-interior angles ($\\theta_{\\text{back}} = \\theta_{\\text{forward}} \\pm 180^\\circ$) that yield the exact triangle angle.\n- **Angles of Elevation & Depression:** Measured strictly from the **horizontal** ray upward (elevation) or downward (depression)—NEVER from the vertical wall or flagpole! By parallel horizontal lines, angle of depression from cliff top $T$ to boat $B$ equals angle of elevation from $B$ to $T$.\n- **Angles in 3D Solids & Mensuration (3.1, 3.3):** To find the angle between a slanted line $VA$ and a base plane $ABCD$, drop a perpendicular from $V$ to its orthogonal foot $O$ on the plane; the required angle is $\\angle VAO$ inside right triangle $\\triangle VOA$. Distinguish carefully between the **edge-to-base** angle (using half base diagonal $OA = \\frac{1}{2}\\sqrt{l^2 + w^2}$ in a symmetric rectangular pyramid, e.g., $V(0,0,h)$ over base diagonal $AC$) and the **face-to-base** angle (using perpendicular base-edge midpoint distance $OM = \\frac{w}{2}$). Likewise, for composite cuboid diagonals ($BD$ then $BH$) or solid cones/hemispheres, separate vertical height $h$ from slant height $l = \\sqrt{r^2 + h^2}$ ($V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$, curved $A = \\pi r l$) and omit shared internal faces when summing total external surface area!',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Four High-Cost Topic 3.1–3.3 Examiner Traps',
        markdown:
          '1. **Radian vs Degree Mode:** On Paper 2, Topic 3.2–3.3 questions almost always use **degrees**, whereas Topic 3.4–3.8 and Topic 5 calculus require **radians**. Check your TI-nspire status bar at the start of EVERY question!\n2. **Vertical vs Horizontal Reference:** Measuring angle of depression from the vertical cliff edge gives the complement $90^\\circ - \\theta$ and ruins every subsequent length.\n3. **Premature Intermediate Rounding:** Rounding an intermediate side like $BD = 14.327\\text{ m}$ to $14.3$ before feeding it into a second triangle frequently shifts final 3 s.f. answers by $\\pm 0.1$—store full calculator precision!\n4. **Open vs Closed Surfaces:** Read carefully whether a cylinder, box, or hemisphere has a lid/top before adding $\\pi r^2$ or base areas.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Non-Euclidean Triangles & Surveying (Oxford Ch. 11 & Haese p. 272)',
        markdown:
          '*"Is the angle sum of a triangle always equal to $180^\\circ$?"* In flat Euclidean geometry, yes—yet global navigation across Earth’s curved sphere uses spherical triangles whose interior angles exceed $180^\\circ$ (for example, a triangle from the North Pole to two points $90^\\circ$ apart on the Equator has three $90^\\circ$ angles summing to $270^\\circ$!).',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Sine Rule (Ambiguous Case)',
            definitionMarkdown: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$; in SSA triangles, check obtuse supplement $B_2 = 180^\\circ - B_1$ whenever $A + B_2 < 180^\\circ$.',
            markschemeKeyword: '180° - θ obtuse check',
          },
          {
            term: 'Cosine Rule',
            definitionMarkdown: '$c^2 = a^2 + b^2 - 2ab\\cos C$ solves SAS and SSS triangles uniquely with zero quadrant ambiguity.',
            markschemeKeyword: 'a^2 + b^2 - 2ab cos C',
          },
          {
            term: 'Three-Figure Bearing',
            definitionMarkdown: 'Angle measured clockwise from true North ($000^\\circ$–$360^\\circ$); draw parallel North arrows at every vertex.',
            markschemeKeyword: 'clockwise from North',
          },
          {
            term: 'Line–Plane Angle',
            definitionMarkdown: 'Angle between line $VA$ and plane $P$, measured to the orthogonal projection $OA$ of $VA$ onto $P$.',
            markschemeKeyword: 'orthogonal projection foot',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRIG_2D3D_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRIG_ELEVATION_3D_WORKED,
      },
    ],
  },

  // =========================================================================
  // 9. Radian Measure, Unit Circle, Identities & Circular Functions (3.4–3.8)
  // =========================================================================
  {
    topicCode: '3.5',
    title: 'Radian Measure, Unit Circle, Trig Identities & Circular Functions (3.4–3.8)',
    summary:
      'Bridge degree/radian arc & sector geometry, exact unit-circle ratios (0, π/6, π/4, π/3, π/2) and CAST symmetry, Pythagorean and double-angle identities, sinusoidal modelling a·sin(b(x−c)) + d, tangent asymptotes, and solving multiple-angle/quadratic trig equations (Oxford Ch. 12 & Haese Ch. 8, 10–11).',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 12 Guiding Questions — Periodic Relationships (pp. 506–508)',
        markdown:
          '- How do we extend right-angled trigonometric ratios beyond $90^\\circ$ to arbitrary positive and negative angles using the unit circle?\n- How do parameters $a, b, c, d$ in $y = a\\sin(b(x - c)) + d$ model Ferris wheel height, ocean tides, daylight hours, and musical pitch?\n- Why does the periodic shape of $y = \\sin x$ guarantee infinitely many angles sharing the same sine value, requiring careful domain bounds $[0, 2\\pi]$ when solving equations?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Radian Measure, Arc Length, Sector & Segment Area (Topic 3.4)',
      },
      {
        type: 'paragraph',
        markdown:
          'One **radian** is the angle subtended at the centre of a circle by an arc equal in length to the radius $r$. Because full circumference $2\\pi r$ subtends $360^\\circ$, **$2\\pi\\text{ rad} = 360^\\circ \\iff \\pi\\text{ rad} = 180^\\circ$** ($1\\text{ rad} \\approx 57.3^\\circ$). Convert degrees to radians by multiplying by $\\frac{\\pi}{180}$, and radians to degrees by multiplying by $\\frac{180}{\\pi}$.\n\nWorking in radians simplifies circular geometry dramatically (Oxford Ch. 12.1, pp. 508–512; Paper 1 #2 wire-arc problem):',
      },
      {
        type: 'equation',
        latex: 'l = r\\theta, \\qquad A_{\\text{sector}} = \\frac{1}{2}r^2\\theta, \\qquad A_{\\text{segment}} = A_{\\text{sector}} - A_{\\triangle} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)',
        caption: 'Radian Arc Length, Sector Area & Circular Segment Area (θ MUST be in radians!).',
        variableLegend: [
          { symbol: 'r', meaning: 'circle radius' },
          { symbol: '\\theta', meaning: 'central subtended angle strictly in radians (0 < θ < 2π)' },
          { symbol: 'l', meaning: 'minor/major arc length along circumference' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Two frequent Paper 1 geometry combinations appear in Ch. 12: first, the **perimeter of a sector** equals **$2r + r\\theta$** (arc plus two straight radii—never forget the $+2r$!); second, finding the **area of a shaded circular segment** (cut off by chord $AB$) subtracts $\\triangle OAB$ area $\\frac{1}{2}r^2\\sin\\theta$ from sector area $\\frac{1}{2}r^2\\theta$. If a problem gives chord length $AB$ or angle in degrees, convert to radians first or compute $\\theta$ via the Cosine Rule $\\cos\\theta = \\frac{2r^2 - AB^2}{2r^2}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unit Circle Definitions, Exact Values & CAST Symmetry (3.5)',
      },
      {
        type: 'paragraph',
        markdown:
          'Place a circle of radius $1$ centred at the origin $(0, 0)$. Measuring angle $\\theta$ counterclockwise from the positive $x$-axis locates point $P(\\cos\\theta, \\sin\\theta)$, with $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ representing the gradient of radius $OP$ (Haese Ch. 8F)! Immediately $\\cos\\theta$ is the horizontal $x$-coordinate, $\\sin\\theta$ is the vertical $y$-coordinate, and both stay bounded inside $[-1, 1]$, while $\\tan\\theta$ is undefined whenever $\\cos\\theta = 0$ ($\\theta = \\frac{\\pi}{2} + k\\pi$).\n\nBy quadrant (**CAST** counterclockwise from Quadrant IV): **Q1 ($0 < \\theta < \\frac{\\pi}{2}$):** All $+$; **Q2 ($\\frac{\\pi}{2} < \\theta < \\pi$):** $\\sin +$, $\\cos -, \\tan -$; **Q3 ($\\pi < \\theta < \\frac{3\\pi}{2}$):** $\\tan +$, $\\sin -, \\cos -$; **Q4 ($\\frac{3\\pi}{2} < \\theta < 2\\pi$):** $\\cos +$, $\\sin -, \\tan -$. Furthermore, reflection across the axes establishes exact symmetry identities: $\\sin(\\pi - \\theta) = \\sin\\theta$, $\\cos(\\pi - \\theta) = -\\cos\\theta$, $\\sin(-\\theta) = -\\sin\\theta$ (odd), and $\\cos(-\\theta) = \\cos\\theta$ (even).\n\nFor **Paper 1 (Non-GDC)**, memorize the exact special-triangle ratios (Oxford p. 535 explicitly warns these are **NOT** in the Formula Booklet!):\n- $\\theta = 0$: $\\sin 0 = 0,\\; \\cos 0 = 1,\\; \\tan 0 = 0$\n- $\\theta = \\frac{\\pi}{6}\\; (30^\\circ)$: $\\sin = \\frac{1}{2},\\; \\cos = \\frac{\\sqrt{3}}{2},\\; \\tan = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$\n- $\\theta = \\frac{\\pi}{4}\\; (45^\\circ)$: $\\sin = \\frac{\\sqrt{2}}{2},\\; \\cos = \\frac{\\sqrt{2}}{2},\\; \\tan = 1$\n- $\\theta = \\frac{\\pi}{3}\\; (60^\\circ)$: $\\sin = \\frac{\\sqrt{3}}{2},\\; \\cos = \\frac{1}{2},\\; \\tan = \\sqrt{3}$\n- $\\theta = \\frac{\\pi}{2}\\; (90^\\circ)$: $\\sin = 1,\\; \\cos = 0,\\; \\tan = \\text{undefined}$',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Pythagorean & Double-Angle Trigonometric Identities (Topic 3.6)',
      },
      {
        type: 'paragraph',
        markdown:
          'Because $P(\\cos\\theta, \\sin\\theta)$ satisfies $x^2 + y^2 = 1$, Pythagoras gives the master identity **$\\cos^2\\theta + \\sin^2\\theta = 1$** for every $\\theta \\in \\mathbb{R}$. Combined with the tangent identity $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ and the three **double-angle identities** in the IB Formula Booklet (Oxford Ch. 12.3, pp. 517–521):',
      },
      {
        type: 'equation',
        latex: '\\cos^2\\theta + \\sin^2\\theta = 1, \\qquad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\qquad \\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta',
        caption: 'IB AA SL Formula Booklet Pythagorean & Double-Angle Identities (Topic 3.6).',
        variableLegend: [
          { symbol: '\\sin 2\\theta', meaning: 'exact sine of double angle (always requires both sin θ and cos θ)' },
          { symbol: '\\cos 2\\theta', meaning: '3 equivalent forms: pick the one matching the rest of your equation!' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Notice two key algebraic applications of these identities:\n1. **Sign-Aware Quadrant Evaluation:** If $\\sin\\theta = \\frac{3}{5}$ and $\\theta \\in (\\frac{\\pi}{2}, \\pi)$ (obtuse Q2), draw a $3$–$4$–$5$ reference triangle AND enforce Q2 negativity on cosine: $\\cos\\theta = -\\frac{4}{5}$, yielding $\\sin 2\\theta = -\\frac{24}{25}$, $\\cos 2\\theta = 1 - 2(\\frac{9}{25}) = \\frac{7}{25}$, and $\\tan 2\\theta = -\\frac{24}{7}$.\n2. **Identity Proofs & Power Reduction:** Rearranging $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ gives $\\sin^2\\theta = \\frac{1}{2}(1 - \\cos 2\\theta)$ and $\\cos^2\\theta = \\frac{1}{2}(1 + \\cos 2\\theta)$—indispensable in both proving identities and integrating $\\sin^2 x$ or $\\cos^2 x$ in Topic 5!',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Circular Functions & Solving Finite-Interval Trig Equations (3.7–3.8)',
      },
      {
        type: 'paragraph',
        markdown:
          'Wrapping the unit circle continuously generates the periodic **circular functions** $y = \\sin x$ and $y = \\cos x$ (period $2\\pi$, range $[-1, 1]$) and $y = \\tan x$ (period $\\pi$, range $\\mathbb{R}$, vertical asymptotes at $x = \\frac{\\pi}{2} + k\\pi$). Under full transformation form $f(x) = a\\sin\\bigl(b(x - c)\\bigr) + d$ (or cosine, Oxford Ch. 12.4, pp. 523–534):',
      },
      {
        type: 'equation',
        latex: '\\text{Amplitude} = |a| = \\frac{\\text{Max} - \\text{Min}}{2}, \\quad \\text{Principal Axis: } y = d = \\frac{\\text{Max} + \\text{Min}}{2}, \\quad \\text{Period } T = \\frac{2\\pi}{b}, \\quad \\text{Tan Period} = \\frac{\\pi}{b}',
        caption: 'Sinusoidal & Tangent Modelling Parameters (note b = 2π / Period for sin/cos, π / Period for tan!).',
        variableLegend: [
          { symbol: '|a|', meaning: 'vertical distance from principal axis y = d to peak or trough' },
          { symbol: 'b', meaning: 'angular frequency (rad / unit x); number of cycles in 2π' },
          { symbol: 'c', meaning: 'horizontal phase shift right after factoring b out' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'When modelling real-world periodic data (tides, Ferris wheels, seasonal temperature, Oxford p. 529): extract $d = \\frac{\\text{Max} + \\text{Min}}{2}$ and $|a| = \\frac{\\text{Max} - \\text{Min}}{2}$ first; compute $b = \\frac{2\\pi}{T}$ (remembering that time between a **maximum and the next minimum** is **half** a period $T/2$!); and select cosine with $c = t_{\\text{max}}$ ($a > 0$) or $c = t_{\\text{min}}$ ($a < 0$), or sine starting upward at $(c, d)$!\n\nWhen solving **multiple-angle equations** such as $\\sin(2x - \\frac{\\pi}{3}) = \\frac{1}{2}$ for $0 \\le x \\le 2\\pi$ (Topic 3.8): let $u = 2x - \\frac{\\pi}{3}$, **scale the domain first** to $-\\frac{\\pi}{3} \\le u \\le \\frac{11\\pi}{3}$, list ALL solutions for $u$ inside that scaled interval ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, \\frac{17\\pi}{6}$), and ONLY at the final step add $\\frac{\\pi}{3}$ and divide by $2$ to obtain $x \\in \\{\\frac{\\pi}{4}, \\frac{7\\pi}{12}, \\frac{5\\pi}{4}, \\frac{19\\pi}{12}\\}$.',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_CIRCULAR_SINUSOID_GRAPH,
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Oxford Ch. 12.4 Worked Walkthrough — Modelling a Ferris Wheel & Tidal Depth (pp. 523–534)',
        markdown:
          'Suppose a harbour tide reaches a maximum depth of $10\\text{ m}$ at $t = 2\\text{ h}$ and a minimum depth of $4\\text{ m}$ at $t = 8\\text{ h}$. Half a cycle spans $8 - 2 = 6\\text{ h}$, so the full period is $T = 12\\text{ h}$ and $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$. Principal axis is $d = \\frac{10+4}{2} = 7\\text{ m}$ and amplitude is $a = \\frac{10-4}{2} = 3\\text{ m}$. Choosing cosine anchored at its peak $t = 2$ gives $h(t) = 3\\cos\\bigl(\\frac{\\pi}{6}(t - 2)\\bigr) + 7$—or equivalently $h(t) = 3\\sin\\bigl(\\frac{\\pi}{6}(t + 1)\\bigr) + 7$!',
      },
      {
        type: 'paragraph',
        markdown:
          'Beyond single-equation solving, **Paper 1 identity proofs** rely on choosing the cleanest version of $\\cos 2\\theta$: to prove $\\frac{\\sin 2x}{1 + \\cos 2x} = \\tan x$, rewrite the numerator as $2\\sin x\\cos x$ and choose $\\cos 2x = 2\\cos^2 x - 1$ so the $+1$ and $-1$ cancel directly to $2\\cos^2 x$, yielding $\\frac{2\\sin x\\cos x}{2\\cos^2 x} = \\frac{\\sin x}{\\cos x} = \\tan x$ (valid for $\\cos x \\neq 0$). On **Paper 2**, mixed transcendental equations such as $\\sin(2x) = 0.3x$ on $[-2\\pi, 2\\pi]$ have no closed algebraic solution—plot $Y_1 = \\sin(2x)$ and $Y_2 = 0.3x$ in **radian mode**, count symmetric intersection points visually, and record roots to **3 s.f.**',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Four Classic Topic 3.4–3.8 Paper 1 & Paper 2 Mistakes',
        markdown:
          '1. **Cancelling a Trig Factor by Division:** In $2\\sin x = \\tan x \\implies 2\\sin x \\cos x = \\sin x$ (Oxford p. 536), **NEVER divide by $\\sin x$**! Rearrange to $\\sin x(2\\cos x - 1) = 0$ so you preserve the roots where $\\sin x = 0$!\n2. **Forgetting to Scale the Domain First:** Solving $\\cos(2x) = k$ on $[0, 2\\pi]$ without expanding to $2x \\in [0, 4\\pi]$ misses half the roots.\n3. **Forgetting $\\pi$ in Period Formula:** Given period $T = 12\\text{ hours}$ (tide), $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$ (NOT $12$ and NOT $\\frac{1}{12}$!).\n4. **Degree vs Radian Mismatch:** If the domain uses $\\pi$ or formulas involve $l = r\\theta$ / calculus, every trig input and solution MUST be in radians.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Pure Sound, Periodic Waves & Cultural Naming (Oxford p. 507; Haese p. 272)',
        markdown:
          'A pure $440\\text{ Hz}$ concert A tone oscillates as $y = A\\sin(880\\pi t)$, and Jean-Baptiste Fourier proved that any musical timbre decomposes into sums of pure sine waves. Meanwhile, trigonometric ratios traveled from Hipparchus’s chord tables through Indian *jyā* (half-chord, translated via Arabic into Latin *sinus*)—showing how cross-cultural translation shaped mathematical vocabulary.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Radian Sector & Segment',
            definitionMarkdown: 'Arc $l = r\\theta$, sector $A = \\frac{1}{2}r^2\\theta$, segment $A = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$ ($\\theta$ in rad).',
            markschemeKeyword: '½r²(θ − sin θ)',
          },
          {
            term: 'CAST Unit Circle Symmetry',
            definitionMarkdown: 'Coordinates $(\\cos\\theta, \\sin\\theta)$ with $\\tan\\theta = \\sin\\theta/\\cos\\theta$; determines quadrant signs and exact multiples of $\\frac{\\pi}{6}, \\frac{\\pi}{4}$.',
            markschemeKeyword: 'quadrant sign / CAST',
          },
          {
            term: 'Double-Angle Substitutions',
            definitionMarkdown: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ and $\\cos 2\\theta = 1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1$.',
            markschemeKeyword: 'cos 2θ = 1 - 2 sin²θ',
          },
          {
            term: 'Sinusoidal Frequency b',
            definitionMarkdown: 'Inside $a\\sin(b(x-c))+d$, $b = \\frac{2\\pi}{T}$ where $T$ is one full peak-to-peak cycle.',
            markschemeKeyword: 'T = 2π / b',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRIG_IDENTITIES_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_TRIG_DOUBLE_ANGLE_WORKED,
      },
    ],
  },

  // =========================================================================
  // 10. Statistics, Regression, Probability, Binomial & Normal (4.1–4.12)
  // =========================================================================
  {
    topicCode: '4.2',
    title: 'Statistics, Bivariate Regression, Probability, Binomial & Normal (4.1–4.12)',
    summary:
      'Comprehensive Topic 4 mastery covering sampling & outliers (1.5×IQR), cumulative frequency & linear data transforms, Pearson r and y-on-x vs x-on-y regression, Venn/tree conditional probability, discrete expected value, Binomial B(n, p), and Normal N(μ, σ²) standardization (Oxford Ch. 6–8 & 14).',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
      'math sl year one course outline 2026.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 6–8 & Ch. 14 Guiding Questions — Data & Chance (pp. 276, 318, 352, 582)',
        markdown:
          '- How can you design a sampling method that avoids bias, and when do different measures of central tendency (mean vs median) tell conflicting stories about skewed data?\n- When two variables show strong correlation ($r = 0.950$), why does correlation never automatically prove causation—and why can you NOT invert the $y$-on-$x$ regression line to predict $x$ from $y$?\n- In the **Monty Hall problem**, why does switching doors double your win probability from $\\frac{1}{3}$ to $\\frac{2}{3}$, and how do Binomial and Normal distributions quantify rare-event claims?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Sampling, Data Presentation, Outliers & Linear Scaling (4.1–4.3)',
      },
      {
        type: 'paragraph',
        markdown:
          'Statistical data are either **discrete** (countable exact values, e.g., number of siblings) or **continuous** (measured on an unbroken scale, e.g., height or reaction time). Representative sampling avoids bias via five IB methods: **simple random** (equal selection probability), **systematic** (every $k$-th entry), **stratified** (proportional random sampling within strata—preferred for heterogeneous schools), **quota** (non-random subgroup targets), and **convenience** (most prone to selection bias).\n\nFor **cumulative frequency graphs** (Topic 4.2, Oxford Ch. 6.2–6.4), always plot cumulative frequency against the **upper class boundary** (e.g. $5, 10, 15, \\dots$ for $0 \\le x < 5$, $5 \\le x < 10$, ...). Read the **median** $Q_2$ at $50\\%$ of $N$, lower quartile $Q_1$ at $25\\%$, upper quartile $Q_3$ at $75\\%$, interquartile range $\\text{IQR} = Q_3 - Q_1$, and $p$-th percentile at $\\frac{p}{100}N$. An observation $x$ is classified as a formal **outlier** when:',
      },
      {
        type: 'equation',
        latex: 'x < Q_1 - 1.5 \\times \\text{IQR} \\quad \\text{or} \\quad x > Q_3 + 1.5 \\times \\text{IQR}; \\qquad \\text{Linear map } y_i = a x_i + b \\implies \\bar{y} = a\\bar{x} + b, \\;\\; \\sigma_y = |a|\\sigma_x, \\;\\; \\sigma_y^2 = a^2\\sigma_x^2',
        caption: 'IB Outlier Boundary Rule (4.1) & Linear Data Transformation Properties (4.3, Oxford p. 312).',
        variableLegend: [
          { symbol: '\\text{IQR}', meaning: 'interquartile range Q_3 − Q_1 (resistant to extreme outliers)' },
          { symbol: '\\sigma_x,\\; \\sigma_x^2', meaning: 'population standard deviation and variance' },
          { symbol: 'b', meaning: 'additive shift (shifts mean/median/quartiles by +b; leaves IQR, range & SD unchanged!)' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'When computing **grouped frequency estimates** of mean $\\bar{x} = \\frac{\\sum f_i m_i}{\\sum f_i}$ and standard deviation $\\sigma$ on your TI-nspire GDC (`1-Var Stats`), enter the **mid-interval value** $m_i$ in `L1` and frequency $f_i$ in `L2`—and remember that grouped statistics are always **estimates** because individual raw values inside each interval are unknown (Oxford p. 313 #12b). Note also: on IB exams, use population standard deviation $\\sigma_n$ (`σx` on TI-nspire) unless specifically estimating an unbiased sample variance $s_{n-1}^2$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Bivariate Correlation & Regression: y on x vs x on y (4.4, 4.10)',
      },
      {
        type: 'paragraph',
        markdown:
          'Bivariate analysis quantifies linear association via **Pearson’s product-moment correlation coefficient $r \\in [-1, 1]$** ($|r| > 0.75$ strong, $0.5 < |r| \\le 0.75$ moderate, $0.25 < |r| \\le 0.5$ weak, $|r| \\le 0.25$ very weak). Beware: a parabolic relationship like $y = x^2$ on $[-3, 3]$ has $r = 0$ despite perfect deterministic dependence—always inspect the scatter plot first! Moreover, **correlation never implies causation** (confounding lurking variables like winter weather link hot drinks and wool socks, Oxford p. 318).\n\nEvery least-squares regression line passes strictly through the **mean point $(\\bar{x}, \\bar{y})$**. Critically, Topic 4.10 enforces a major distinction between the two regression lines:\n- To estimate **$y$ from a given $x$**, compute and use the **regression line of $y$ on $x$** ($y = ax + b$, minimizing vertical residuals).\n- To estimate **$x$ from a given $y$**, compute the **regression line of $x$ on $y$** ($x = cy + d$, minimizing horizontal residuals)—**NEVER algebraically rearrange $y = ax + b$ to solve for $x$** (Oxford Practice Paper 2 #7e & p. 338)! Predictions are reliable only under **interpolation** inside the observed range with strong $|r|$; **extrapolation** outside observed data boundaries risks model breakdown.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Probability Laws, Venn/Tree Diagrams & Conditional Independence (4.5–4.6, 4.11)',
      },
      {
        type: 'paragraph',
        markdown:
          'Every probability lies in $[0, 1]$, complementary events satisfy $P(A\') = 1 - P(A)$, and expected frequency across $n$ trials is $n P(A)$. Combined events obey the **Addition Rule** and **Conditional Probability Formula** (Oxford Ch. 8.2–8.4, pp. 363–387):',
      },
      {
        type: 'equation',
        latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B), \\qquad P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad \\text{Independent} \\iff P(A \\cap B) = P(A)P(B)',
        caption: 'IB AA SL Formula Booklet Probability Laws & Independence Condition (4.5–4.6, 4.11).',
        variableLegend: [
          { symbol: 'A \\cup B', meaning: 'A OR B (or both)' },
          { symbol: 'A \\cap B', meaning: 'A AND B occurring simultaneously' },
          { symbol: 'P(A \\mid B)', meaning: 'probability of A given that B has already occurred' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Examiners test one conceptual distinction relentlessly: **Mutually Exclusive** means $A$ and $B$ cannot co-occur ($P(A \\cap B) = 0$, giving $P(A \\cup B) = P(A) + P(B)$), whereas **Independent** means knowing $B$ occurred does not alter $A$’s chance ($P(A \\mid B) = P(A)$ and $P(A \\cap B) = P(A)P(B)$). For two events with positive probabilities $P(A) > 0, P(B) > 0$, they can **never** be both mutually exclusive and independent! For **two-stage conditional trees (Bayes-style Topic 4.11)**—such as medical false-positive tests or urns without replacement—compute $P(B) = \\sum_{\\text{all paths ending in } B} P(\\text{path})$ by summing joint branch probabilities, then compute $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Discrete Random Variables, Binomial B(n, p) & Normal N(μ, σ²) (4.7–4.9, 4.12)',
      },
      {
        type: 'paragraph',
        markdown:
          'For a **discrete random variable** $X$, probabilities sum to unity ($\\sum P(X = x_i) = 1$), and **expected value** is $E(X) = \\sum x_i P(X = x_i)$. In a **fair game**, expected net gain (prize minus entry stake!) equals **$0$** (Oxford Paper 1 #8).\n\nA **Binomial distribution** $X \\sim B(n, p)$ models the count of successes in $n$ **fixed**, **independent** Bernoulli trials with **two outcomes** (success/failure) and **constant** probability $p$ of success. Its mean is $E(X) = np$ and variance is $\\text{Var}(X) = np(1 - p)$ (so $\\sigma = \\sqrt{np(1 - p)}$). On your GDC, use `binomPdf(n, p, k)` for exact $P(X = k)$ and `binomCdf(n, p, a, b)` for cumulative $P(a \\le X \\le b)$. Always convert strict inequalities on integers cleanly: $P(X > 6) = 1 - P(X \\le 6)$ and $P(X \\ge 3) = 1 - P(X \\le 2)$!\n\nA continuous **Normal distribution** $X \\sim N(\\mu, \\sigma^2)$ yields a symmetric bell curve centred at mean $=$ median $=$ mode $= \\mu$, with inflection points at $\\mu \\pm \\sigma$ and empirical probabilities **$68.3\\%$** within $\\mu \\pm 1\\sigma$, **$95.4\\%$** within $\\mu \\pm 2\\sigma$, and **$99.7\\%$** within $\\mu \\pm 3\\sigma$ (Paper 1 Non-GDC questions rely on these exact empirical percentages!). Every normal variable standardizes to **$Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$**, enabling you to solve for unknown $\\mu$, $\\sigma$, or both via `invNorm` on Paper 2.',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_NORMAL_PDF_GRAPH,
      },
      {
        type: 'paragraph',
        markdown:
          'When working with **grouped continuous intervals** and **cumulative frequency graphs (ogives)** (Oxford Ch. 8.2–8.3), plot cumulative frequency strictly against **upper class boundaries** rather than midpoints so quartile estimates align cleanly: read $Q_1$ at $0.25N$, median $Q_2$ at $0.50N$, $Q_3$ at $0.75N$, and any $p$-th percentile at $\\frac{p}{100}N$ across to the curve and straight down to the horizontal axis. On **Paper 2 GDC checks**, store exact unrounded parameters ($\\bar{x}, s_x, r$, $a, b$, or single-trial probability $p$ from `normalCdf`) inside calculator variables before advancing to multi-part calculations.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Oxford Ch. 8 & Ch. 14 Inquiries — The Monty Hall Problem & Paul the Octopus (pp. 353, 582)',
        markdown:
          'Why does switching doors in **Monty Hall** double your chance of winning? Initially, your chosen door holds the car with $P = \\frac{1}{3}$ and a goat with $P = \\frac{2}{3}$. Because the host deliberately reveals a goat behind one of the two unchosen doors, switching **wins whenever your initial pick was a goat** ($P = \\frac{2}{3}$)! Meanwhile, in **Ch. 14 Opening Problem**, Paul the Octopus predicted $12$ out of $14$ football matches. Under pure random guessing $X \\sim B(14, 0.5)$, $P(X \\ge 12) = 1 - \\text{binomCdf}(14, 0.5, 11) \\approx 0.00647$ ($0.65\\%$)—illustrating how binomial tail probabilities evaluate statistical significance.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Five Classic Topic 4 Mark-Losing Slip-Ups',
        markdown:
          '1. **Variance vs Standard Deviation inside $N(\\mu, \\sigma^2)$:** In IB notation $X \\sim N(49, 225)$ (Haese Review Set 24B #6), $225$ is $\\sigma^2$, so the standard deviation is **$\\sigma = \\sqrt{225} = 15$**, NOT $225$!\n2. **`invNorm` Left-Tail Input:** TI-nspire `invNorm(area, 0, 1)` takes cumulative **left-tail** probability $P(Z < z)$. Given $P(X > 82) = 0.10$, feed **`0.90`** into `invNorm`!\n3. **Binomial Strict Inequality Off-by-One:** $P(X < 5)$ for discrete $X$ is $P(X \\le 4)$, NOT $P(X \\le 5)$.\n4. **Independent vs Mutually Exclusive Confusion:** Never write $P(A \\cap B) = P(A)P(B)$ unless independence is given or tested.\n5. **Adding Stake vs Net Gain in $E(X)$:** When checking a fair game, verify either $E(\\text{payout}) = \\text{cost}$ OR $E(\\text{net profit}) = 0$.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Statistics, Cognitive Biases & Misleading Data (Oxford pp. 284, 339, 583)',
        markdown:
          'Albert Einstein warned: *"Not everything that counts can be counted, and not everything that can be counted counts."* Truncated vertical axes, survivor bias, and p-hacking can persuade audiences visually even when numbers are accurate—making critical statistical literacy indispensable for evaluating real-world probability claims.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Outlier Fence (1.5 × IQR)',
            definitionMarkdown: 'Points below $Q_1 - 1.5\\text{IQR}$ or above $Q_3 + 1.5\\text{IQR}$ are plotted separately from box-plot whiskers.',
            markschemeKeyword: 'Q1 − 1.5·IQR / Q3 + 1.5·IQR',
          },
          {
            term: 'x on y vs y on x Regression',
            definitionMarkdown: 'Predict $y$ from $x$ using $y$-on-$x$; predict $x$ from $y$ using $x$-on-$y$ (never invert $y$-on-$x$ unless $r = \\pm 1$).',
            markschemeKeyword: 'regression of x on y',
          },
          {
            term: 'Binomial Conditions B(n, p)',
            definitionMarkdown: 'Fixed trials $n$, independent outcomes, 2 outcomes (success/fail), constant probability $p$; $\\mu = np$, $\\sigma^2 = np(1-p)$.',
            markschemeKeyword: 'np and np(1−p)',
          },
          {
            term: 'Z-Score Standardization',
            definitionMarkdown: '$Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$ converts any Normal problem into standard left-tail `invNorm` quantiles.',
            markschemeKeyword: 'z = (x − μ)/σ',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_STATS_PROB_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_PROB_NORMAL_WORKED,
      },
    ],
  },

  // =========================================================================
  // 11. Differential & Integral Calculus Foundations: Limits to Areas (5.1–5.11)
  // =========================================================================
  {
    topicCode: '5.1',
    title: 'Differential & Integral Calculus Foundations: Limits to Areas (5.1–5.11)',
    summary:
      'Complete Topic 5 AA SL Calculus synthesis: limits & first-principles derivative (5.1), increasing/decreasing sign charts & power rule (5.2–5.3), tangents & normals (5.4), chain/product/quotient & transcendental derivatives (5.6), concavity/inflection/optimization (5.7–5.8), kinematics (5.9), u-substitution integration (5.5, 5.10), and Fundamental Theorem & areas between curves (5.11).',
    sourceFileNames: [
      'OXFORD - Mathematics SL - Analysis and Approaches - 2019.pdf',
      'Old IB Textbook.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Oxford Ch. 5, 10 & 13 Guiding Questions — Change & Accumulation (pp. 214, 432, 542)',
        markdown:
          '- How does taking the limit $\\lim_{h \\to 0}$ transform average secant gradient into **instantaneous rate of change** $f\'(x)$?\n- How do the signs of $f\'(x)$ and $f\'\'(x)$ together govern local maxima, local minima, concavity, and true **points of inflection**?\n- Why can net displacement $\\int_{t_1}^{t_2} v(t)\\,dt$ differ strictly from total distance travelled $\\int_{t_1}^{t_2} |v(t)|\\,dt$, and how does the Fundamental Theorem of Calculus unify tangents with areas?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Limits, First Principles, Power Rule & Tangents/Normals (5.1–5.4)',
      },
      {
        type: 'paragraph',
        markdown:
          'Differential calculus measures instantaneous change by shrinking a secant chord over $[x, x + h]$ to zero width. Geometrically, $f\'(x) = \\frac{dy}{dx}$ is the **gradient of the tangent line** to $y = f(x)$ at $x$; physically, it is the **instantaneous rate of change** of $y$ with respect to $x$:',
      },
      {
        type: 'equation',
        latex: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}, \\qquad \\frac{d}{dx}(x^n) = n x^{n-1} \\;(n \\in \\mathbb{Q}), \\qquad m_{\\text{tangent}} = f\'(x_0), \\quad m_{\\text{normal}} = -\\frac{1}{f\'(x_0)}',
        caption: 'First-Principles Limit Definition, Power Rule & Tangent/Normal Gradients (5.1, 5.3, 5.4).',
        variableLegend: [
          { symbol: 'h', meaning: 'infinitesimal horizontal step approaching 0 (h ≠ 0)' },
          { symbol: 'm_{\\text{normal}}', meaning: 'gradient perpendicular to tangent at (x₀, f(x₀)) when f′(x₀) ≠ 0' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Before differentiating algebraic quotients or roots, **always rewrite into power form** $a x^n$: for instance, $\\frac{x^3 - x}{x^2} = x - x^{-1}$ differentiates immediately to $1 + x^{-2} = 1 + \\frac{1}{x^2}$, and $\\frac{4}{\\sqrt{x}} = 4x^{-1/2}$ gives $-2x^{-3/2}$. A differentiable function is **increasing** on intervals where **$f\'(x) > 0$**, **decreasing** where **$f\'(x) < 0$**, and **stationary** where **$f\'(x) = 0$** (horizontal tangent). To write the tangent or normal equation at $(x_0, y_0)$, evaluate $y_0 = f(x_0)$, compute $m_T = f\'(x_0)$ (or $m_N = -1/m_T$), and substitute into $y - y_0 = m(x - x_0)$. When a question asks for points where the tangent is parallel to $y = 2x + 5$, solve $f\'(x) = 2$; when normal is parallel to $x$-axis, tangent is vertical ($f\'(x)$ undefined); when tangent is horizontal, solve $f\'(x) = 0$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Chain, Product, Quotient Rules & Transcendental Derivatives (5.6)',
      },
      {
        type: 'paragraph',
        markdown:
          'To differentiate every elementary AA SL function (polynomial, rational, exponential, logarithmic, and trigonometric in radians!), combine the four transcendental building blocks with the three structural differentiation rules:',
      },
      {
        type: 'equation',
        latex: '\\frac{d}{dx}(e^x) = e^x, \\quad \\frac{d}{dx}(\\ln x) = \\frac{1}{x}, \\quad \\frac{d}{dx}(\\sin x) = \\cos x, \\quad \\frac{d}{dx}(\\cos x) = -\\sin x \\quad (x \\text{ in radians!})',
        caption: 'Core AA SL Transcendental Derivatives (Oxford Ch. 9.3 & Ch. 13.1).',
        variableLegend: [
          { symbol: 'e^x', meaning: 'unique function equal to its own derivative at every x' },
          { symbol: '\\ln x', meaning: 'derivative 1/x defined on x > 0 (notice chain rule gives d/dx(ln(kx)) = k/(kx) = 1/x!)' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '- **Chain Rule ($\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$):** Differentiate the outer wrapper evaluated at inner $g(x)$, then multiply by $g\'(x)$. Example: $\\frac{d}{dx}\\sin^2(3x) = 2\\sin(3x) \\cdot \\cos(3x) \\cdot 3 = 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$.\n- **Product Rule ($(uv)\' = u\'v + uv\'$):** Used when two $x$-dependent factors multiply—e.g. $\\frac{d}{dx}(x \\sin x) = \\sin x + x\\cos x$ (Oxford Paper 1 #1c) or $\\frac{d}{dx}(x^3 \\ln(2x)) = 3x^2\\ln(2x) + x^3\\cdot\\frac{2}{2x} = 3x^2\\ln(2x) + x^2$.\n- **Quotient Rule ($(\\frac{u}{v})\' = \\frac{u\'v - uv\'}{v^2}$):** Watch the **minus sign** and **numerator order** ($u\'v - uv\'$, NOT $uv\' - u\'v$)! Example: $\\frac{d}{dx}\\left(\\frac{e^x}{x^2+1}\\right) = \\frac{e^x(x^2+1) - e^x(2x)}{(x^2+1)^2} = \\frac{e^x(x-1)^2}{(x^2+1)^2}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Concavity, Extrema, Inflection Points & Optimization (5.7–5.8)',
      },
      {
        type: 'paragraph',
        markdown:
          'The **second derivative** $f\'\'(x) = \\frac{d^2y}{dx^2}$ measures how rapidly the gradient $f\'(x)$ changes, revealing **concavity**: the graph is **concave up** ($\\smile$, tangent lies below curve) where $f\'\'(x) > 0$, and **concave down** ($\\frown$, tangent lies above curve) where $f\'\'(x) < 0$. This gives two complementary tests at any stationary point $x = c$ where $f\'(c) = 0$:\n1. **First-Derivative Sign Test:** If $f\'(x)$ switches $+ \\to -$ across $c$, $c$ is a **local maximum**; if $- \\to +$, **local minimum**; if sign does not change (e.g., $y = x^3$ at $0$), $c$ is a **stationary inflection point**.\n2. **Second-Derivative Test:** If $f\'(c) = 0$ and $f\'\'(c) < 0$, **local maximum**; if $f\'\'(c) > 0$, **local minimum**; if $f\'\'(c) = 0$, the test is **inconclusive** and you MUST revert to the first-derivative sign chart!\n\nA **point of inflection** occurs at $x = c$ ONLY if **$f\'\'(c) = 0$ AND $f\'\'(x)$ changes sign** across $x = c$! (Counterexample trap: $f(x) = x^4$ has $f\'\'(0) = 0$, yet $f\'\'(x) = 12x^2 \\ge 0$ does not change sign, so $(0, 0)$ is a minimum, NOT an inflection point!). For **optimization** (Oxford Ch. 5.5, pp. 260–269; Paper 1 #10), express the target objective $Q(x)$ in a single variable using constraint geometry, differentiate $Q\'(x) = 0$, **explicitly justify max/min** via $Q\'$ sign change or $Q\'\'$, and check physical domain endpoints!',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_CALC_DERIVATIVE_EXTREMA_GRAPH,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Kinematics, Substitution Integration & Areas Between Curves (5.5, 5.9–5.11)',
      },
      {
        type: 'paragraph',
        markdown:
          'In **rectilinear kinematics** (Topic 5.9), differentiation moves down $s(t) \\xrightarrow{d/dt} v(t) \\xrightarrow{d/dt} a(t)$ while integration recovers $v(t) = \\int a(t)\\,dt$ and $s(t) = \\int v(t)\\,dt$ using initial conditions to pin $+C$. Memorize the Oxford Ch. 13.4 dictionary (p. 572): *"initially"* $\\implies t = 0$; *"at rest"* $\\implies v(t) = 0$; *"moving right/up"* $\\implies v > 0$; *"speeding up"* $\\implies v(t)$ and $a(t)$ share the **same sign** ($v\\cdot a > 0$); *"slowing down"* $\\implies v(t)$ and $a(t)$ have **opposite signs** ($v\\cdot a < 0$).\n\n**Indefinite & Substitution Integration (5.5, 5.10):** Antidifferentiation reverses differentiation plus an arbitrary family constant $+C$ (remember $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$, valid for both $x > 0$ and $x < 0$!). For linear composites $\\int f(ax + b)\\,dx$, divide by $a$ ($\\int e^{4x-1}\\,dx = \\frac{1}{4}e^{4x-1} + C$; $\\int \\sin(2x)\\,dx = -\\frac{1}{2}\\cos(2x) + C$). For general **u-substitution** $\\int f(g(x))g\'(x)\\,dx$, set $u = g(x)$, compute $du = g\'(x)\\,dx$, integrate in $u$, and either transform the definite limits $x \\to u$ directly or substitute $u = g(x)$ back.\n\n**Definite Integrals & Areas (5.11):** By the **Fundamental Theorem of Calculus**, $\\int_a^b f(x)\\,dx = F(b) - F(a)$ evaluates **signed net area** (regions below the $x$-axis contribute negative values!). Therefore:',
      },
      {
        type: 'equation',
        latex: '\\text{Displacement} = \\int_{t_1}^{t_2} v(t)\\,dt, \\quad \\text{Total Distance} = \\int_{t_1}^{t_2} |v(t)|\\,dt, \\quad \\text{Area Between Curves} = \\int_a^b \\bigl(y_{\\text{upper}} - y_{\\text{lower}}\\bigr)\\,dx',
        caption: 'Signed vs Geometric Total Distance & Area Between Curves (Oxford Ch. 10.3–10.5 & 13.4).',
        variableLegend: [
          { symbol: 'a, b', meaning: 'intersection x-coordinates satisfying y_upper = y_lower' },
          { symbol: '|v(t)|', meaning: 'speed; splits integral at sign-changing zeros of v(t) on Paper 1' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'When finding the **geometric area between a curve and the $x$-axis** on Paper 1, first find every zero inside $[a, b]$ where $f(x)$ crosses the axis and flip the sign of integrals over negative subintervals (or on Paper 2 evaluate $\\int_a^b |f(x)|\\,dx$ directly on your TI-nspire GDC!). When finding the **area enclosed between two curves** $y_1 = f(x)$ and $y_2 = g(x)$, solve $f(x) = g(x)$ to obtain the intersection limits $[a, b]$ and integrate $(\\text{upper} - \\text{lower})$—splitting at any interior crossing point where the curves trade top/bottom positions!\n\nIn **substitution & definite integrals** on Paper 1, spot the reverse chain pattern $\\int k\\,g\'(x)\\,f(g(x))\\,dx$ immediately: let $u = g(x)$ so $du = g\'(x)\\,dx$, and **transform the limits** $x = a \\to u = g(a)$ and $x = b \\to u = g(b)$ right away so you never have to back-substitute $u$! Note also that $\\int \\frac{2x}{x^2 + 3}\\,dx = \\ln(x^2 + 3) + C$ drops the absolute-value bars safely because $x^2 + 3 > 0$ for every real $x$.',
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_CALC_INTEGRAL_AREA_GRAPH,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Five Classic Topic 5 Calculus Markscheme Deductions',
        markdown:
          '1. **Missing $+C$ & Boundary Solve:** Omitting $+C$ in indefinite integrals or failing to solve for $C$ using $F(x_0) = y_0$ immediately caps accuracy marks.\n2. **Differentiating When Integrating (or vice versa!):** Double-check trig signs: $\\frac{d}{dx}\\cos x = -\\sin x$, whereas $\\int \\cos x\\,dx = +\\sin x + C$!\n3. **Forgetting Quotient Rule / Chain Rule Inner Factor:** Always check $\\frac{d}{dx}f(ax+b) = a f\'(ax+b)$ vs $\\int f(ax+b)\\,dx = \\frac{1}{a}F(ax+b) + C$.\n4. **Unverified Inflection / Optimization:** Writing "$f\'\'(c) = 0 \\implies$ inflection" or "$f\'(c) = 0 \\implies$ minimum" without verifying a sign change loses the justification `R1` mark!\n5. **Negative Displacement Treated as Distance:** In Oxford Paper 2 #5 ($v(t) = 5\\sin(t^2)$ on $[0, 3]$), displacement is $+3.87\\text{ m}$ whereas total distance travelled is $\\int_0^3 |5\\sin(t^2)|\\,dt = 8.51\\text{ m}$!',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK — Invention vs Discovery & Infinite Paradoxes (Oxford pp. 244, 436, 440)',
        markdown:
          'Newton and Leibniz formulated calculus independently in the late 17th century—does simultaneous discovery support mathematical Platonism (discovering pre-existing truths) over Constructivism? And consider Gabriel’s Horn ($y = 1/x$ on $x \\ge 1$): its area $\\int_1^\\infty \\frac{1}{x}\\,dx$ diverges to infinity, yet its solid of revolution volume $\\pi\\int_1^\\infty \\frac{1}{x^2}\\,dx = \\pi$ is finite!',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Point of Inflection',
            definitionMarkdown: 'Occurs at $x = c$ iff $f\'\'(c) = 0$ **AND** $f\'\'(x)$ changes sign across $c$ (concavity flips).',
            markschemeKeyword: 'f\'\'(c) = 0 and sign change',
          },
          {
            term: 'Integration by Substitution',
            definitionMarkdown: '$\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du$; convert $x$-limits directly to $u = g(x)$ in definite integrals.',
            markschemeKeyword: 'u = g(x), du = g\'(x) dx',
          },
          {
            term: 'Displacement vs Total Distance',
            definitionMarkdown: 'Displacement $= \\int_{t_1}^{t_2} v(t)\\,dt$ (signed); Distance $= \\int_{t_1}^{t_2} |v(t)|\\,dt$ (unsigned geometric path).',
            markschemeKeyword: '∫|v(t)| dt',
          },
          {
            term: 'Area Between Curves',
            definitionMarkdown: '$\\int_a^b (y_{\\text{upper}} - y_{\\text{lower}})\\,dx$ between intersection points $f(x) = g(x)$.',
            markschemeKeyword: 'upper minus lower',
          },
        ],
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_CALC_RULES_MATRIX,
      },
      {
        type: 'playable_diagram',
        spec: MATH_V3_CALC_OPTIMIZATION_SUB_WORKED,
      },
    ],
  },
];
