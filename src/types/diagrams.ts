import { z } from 'zod';

// ---------------------------------------------------------------------------
// 1. Labeled Anatomy / Structure Explorer
// ---------------------------------------------------------------------------

export const SvgShapeSchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('rect'),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
    rx: z.number().optional(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('circle'),
    cx: z.number(),
    cy: z.number(),
    r: z.number(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('ellipse'),
    cx: z.number(),
    cy: z.number(),
    rx: z.number(),
    ry: z.number(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('line'),
    x1: z.number(),
    y1: z.number(),
    x2: z.number(),
    y2: z.number(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    strokeDasharray: z.string().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
    animatedFlow: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('path'),
    d: z.string(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    strokeDasharray: z.string().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
    animatedFlow: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('polygon'),
    points: z.string(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('text'),
    x: z.number(),
    y: z.number(),
    text: z.string(),
    fontSize: z.number().optional(),
    fontWeight: z.union([z.number(), z.string()]).optional(),
    textAnchor: z.enum(['start', 'middle', 'end']).optional(),
    fill: z.string().optional(),
    opacity: z.number().optional(),
    focusTags: z.array(z.string()).optional(),
    onlyWhenFocused: z.boolean().optional(),
  }),
]);

export type SvgShape = z.infer<typeof SvgShapeSchema>;

export const LabeledHotspotSchema = z.object({
  id: z.string().min(1),
  x: z.number().min(0).max(800),
  y: z.number().min(0).max(440),
  label: z.string().min(1),
  category: z.string().min(1),
  examKeyword: z.string().min(1),
  detailMarkdown: z.string().min(1),
});

export type LabeledExplorerHotspot = z.infer<typeof LabeledHotspotSchema>;

export const LabeledExplorerSpecSchema = z.object({
  type: z.literal('labeled_explorer'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  viewBox: z.string().optional(),
  shapes: z.array(SvgShapeSchema).min(1),
  hotspots: z.array(LabeledHotspotSchema).min(1),
});

export type LabeledExplorerSpec = z.infer<typeof LabeledExplorerSpecSchema>;

// ---------------------------------------------------------------------------
// 2. Step-by-Step Mechanism / Process Player
// ---------------------------------------------------------------------------

export const StepMechanismNodeSchema = z.object({
  id: z.string().min(1),
  x: z.number().min(20).max(780),
  y: z.number().min(20).max(380),
  label: z.string().min(1),
  sublabel: z.string().optional(),
  group: z.string().optional(),
});

export type StepMechanismNode = z.infer<typeof StepMechanismNodeSchema>;

export const StepMechanismEdgeSchema = z.object({
  id: z.string().min(1),
  from: z.string().min(1),
  to: z.string().min(1),
  label: z.string().optional(),
  dashed: z.boolean().optional(),
});

export type StepMechanismEdge = z.infer<typeof StepMechanismEdgeSchema>;

export const StepMechanismStepSchema = z.object({
  stepNumber: z.number().int().min(1),
  title: z.string().min(1),
  descriptionMarkdown: z.string().min(1),
  formulaLatex: z.string().optional(),
  activeNodeIds: z.array(z.string()),
  activeEdgeIds: z.array(z.string()),
  metrics: z.array(
    z.object({
      label: z.string().min(1),
      value: z.string().min(1),
    }),
  ),
});

export type StepMechanismStep = z.infer<typeof StepMechanismStepSchema>;

export const StepMechanismSpecSchema = z.object({
  type: z.literal('step_mechanism'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  nodes: z.array(StepMechanismNodeSchema).min(1),
  edges: z.array(StepMechanismEdgeSchema),
  steps: z.array(StepMechanismStepSchema).min(1),
});

export type StepMechanismSpec = z.infer<typeof StepMechanismSpecSchema>;

// ---------------------------------------------------------------------------
// 3. Interactive Function Graph
// ---------------------------------------------------------------------------

export const FunctionSliderSchema = z.object({
  key: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
  label: z.string().min(1),
  min: z.number(),
  max: z.number(),
  step: z.number().positive(),
  defaultValue: z.number(),
});

export type FunctionSlider = z.infer<typeof FunctionSliderSchema>;

export const FunctionCurveSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  expression: z.string().min(1),
  dashed: z.boolean().optional(),
  color: z.string().optional(),
});

export type FunctionCurve = z.infer<typeof FunctionCurveSchema>;

export const FunctionMarkerSchema = z.object({
  x: z.number(),
  y: z.number(),
  label: z.string().min(1),
});

export type FunctionMarker = z.infer<typeof FunctionMarkerSchema>;

export const InteractiveFunctionGraphSpecSchema = z.object({
  type: z.literal('function_graph'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  xMin: z.number(),
  xMax: z.number(),
  yMin: z.number(),
  yMax: z.number(),
  xLabel: z.string().min(1),
  yLabel: z.string().min(1),
  sliders: z.array(FunctionSliderSchema),
  curves: z.array(FunctionCurveSchema).min(1),
  tangentX: z.number().optional(),
  markers: z.array(FunctionMarkerSchema).optional(),
});

export type InteractiveFunctionGraphSpec = z.infer<
  typeof InteractiveFunctionGraphSpecSchema
>;

// ---------------------------------------------------------------------------
// 4. Concept Comparison Matrix
// ---------------------------------------------------------------------------

export const ComparisonRowSchema = z.object({
  criterion: z.string().min(1),
  cells: z.array(z.string()).min(1),
  ibExamTip: z.string().optional(),
});

export type ComparisonRow = z.infer<typeof ComparisonRowSchema>;

export const ConceptComparisonMatrixSpecSchema = z.object({
  type: z.literal('comparison_matrix'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  columns: z.array(z.string().min(1)).min(2),
  rows: z.array(ComparisonRowSchema).min(1),
});

export type ConceptComparisonMatrixSpec = z.infer<
  typeof ConceptComparisonMatrixSpecSchema
>;

// ---------------------------------------------------------------------------
// 5. Timeline & Causality Explorer
// ---------------------------------------------------------------------------

export const TimelineEventSchema = z.object({
  id: z.string().min(1),
  dateLabel: z.string().min(1),
  title: z.string().min(1),
  category: z.string().min(1),
  summaryMarkdown: z.string().min(1),
  primarySourceQuote: z.string().optional(),
  significanceMarkdown: z.string().min(1),
});

export type TimelineEvent = z.infer<typeof TimelineEventSchema>;

export const TimelineCausalitySpecSchema = z.object({
  type: z.literal('timeline_causality'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  categories: z.array(z.string()).optional(),
  events: z.array(TimelineEventSchema).min(1),
});

export type TimelineCausalitySpec = z.infer<typeof TimelineCausalitySpecSchema>;

// ---------------------------------------------------------------------------
// Discriminated Union of Playable Diagrams & Read-Only Notion Note Blocks
// ---------------------------------------------------------------------------

export const PlayableDiagramSpecSchema = z.discriminatedUnion('type', [
  LabeledExplorerSpecSchema,
  StepMechanismSpecSchema,
  InteractiveFunctionGraphSpecSchema,
  ConceptComparisonMatrixSpecSchema,
  TimelineCausalitySpecSchema,
]);

export type PlayableDiagramSpec = z.infer<typeof PlayableDiagramSpecSchema>;

export const StudyNoteBlockSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('heading'),
    level: z.union([z.literal(2), z.literal(3)]),
    text: z.string().min(1),
  }),
  z.object({
    type: z.literal('paragraph'),
    markdown: z.string().min(1),
  }),
  z.object({
    type: z.literal('callout'),
    variant: z.enum([
      'definition',
      'examiner_warning',
      'key_formula',
      'syllabus_link',
    ]),
    title: z.string().min(1),
    markdown: z.string().min(1),
  }),
  z.object({
    type: z.literal('key_terms'),
    items: z
      .array(
        z.object({
          term: z.string().min(1),
          definitionMarkdown: z.string().min(1),
          markschemeKeyword: z.string().optional(),
        }),
      )
      .min(1),
  }),
  z.object({
    type: z.literal('equation'),
    latex: z.string().min(1),
    caption: z.string().optional(),
    variableLegend: z
      .array(
        z.object({
          symbol: z.string().min(1),
          meaning: z.string().min(1),
        }),
      )
      .optional(),
  }),
  z.object({
    type: z.literal('playable_diagram'),
    spec: PlayableDiagramSpecSchema,
  }),
]);

export type StudyNoteBlock = z.infer<typeof StudyNoteBlockSchema>;

export const StudyNoteBlocksSchema = z.array(StudyNoteBlockSchema);
