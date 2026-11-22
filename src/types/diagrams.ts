import { z } from 'zod';

// ---------------------------------------------------------------------------
// 1. Labeled Anatomy / Structure Explorer
// ---------------------------------------------------------------------------

const BaseSvgShapeProps = {
  opacity: z.number().optional(),
  focusTags: z.array(z.string()).optional(),
  onlyWhenFocused: z.boolean().optional(),
  hotspotId: z.string().optional(),
  layers: z.array(z.string()).optional(),
  strokeDasharray: z.string().optional(),
};

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
    ...BaseSvgShapeProps,
  }),
  z.object({
    kind: z.literal('circle'),
    cx: z.number(),
    cy: z.number(),
    r: z.number(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    ...BaseSvgShapeProps,
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
    ...BaseSvgShapeProps,
  }),
  z.object({
    kind: z.literal('line'),
    x1: z.number(),
    y1: z.number(),
    x2: z.number(),
    y2: z.number(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    animatedFlow: z.boolean().optional(),
    ...BaseSvgShapeProps,
  }),
  z.object({
    kind: z.literal('path'),
    d: z.string(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    animatedFlow: z.boolean().optional(),
    ...BaseSvgShapeProps,
  }),
  z.object({
    kind: z.literal('polygon'),
    points: z.string(),
    fill: z.string().optional(),
    stroke: z.string().optional(),
    strokeWidth: z.number().optional(),
    ...BaseSvgShapeProps,
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
    ...BaseSvgShapeProps,
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

export const LabeledExplorerLayerSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  defaultVisible: z.boolean().optional(),
});

export type LabeledExplorerLayer = z.infer<typeof LabeledExplorerLayerSchema>;

export const LabeledExplorerViewSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  subtitle: z.string().optional(),
  viewBox: z.string().optional(),
  shapes: z.array(SvgShapeSchema).min(1),
  hotspots: z.array(LabeledHotspotSchema).min(1),
  layers: z.array(LabeledExplorerLayerSchema).optional(),
});

export type LabeledExplorerView = z.infer<typeof LabeledExplorerViewSchema>;

export const LabeledExplorerAnimationStepSchema = z.object({
  title: z.string().min(1),
  detailMarkdown: z.string().min(1),
  highlightHotspotIds: z.array(z.string()),
  activeFlowTags: z.array(z.string()),
});

export const LabeledExplorerAnimationSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  steps: z.array(LabeledExplorerAnimationStepSchema).min(1),
});

export type LabeledExplorerAnimation = z.infer<
  typeof LabeledExplorerAnimationSchema
>;

export const LabeledExplorerSpecSchema = z.object({
  type: z.literal('labeled_explorer'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  viewBox: z.string().optional(),
  palette: z.enum(['scientific', 'monochrome']).optional(),
  layers: z.array(LabeledExplorerLayerSchema).optional(),
  shapes: z.array(SvgShapeSchema).min(1),
  hotspots: z.array(LabeledHotspotSchema).min(1),
  views: z.array(LabeledExplorerViewSchema).optional(),
  animations: z.array(LabeledExplorerAnimationSchema).optional(),
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
  stepIllustration: z.array(SvgShapeSchema).optional(),
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
  palette: z.enum(['scientific', 'monochrome']).optional(),
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

export const FunctionAsymptoteSchema = z.object({
  kind: z.enum(['vertical', 'horizontal']),
  expression: z.string().min(1),
  label: z.string().optional(),
});

export type FunctionAsymptote = z.infer<typeof FunctionAsymptoteSchema>;

export const FunctionInverseReflectionSchema = z.object({
  enabled: z.boolean().optional(),
  defaultVisible: z.boolean().optional(),
  sourceCurveId: z.string().min(1),
  label: z.string().optional(),
});

export type FunctionInverseReflection = z.infer<
  typeof FunctionInverseReflectionSchema
>;

export const FunctionReadoutSchema = z.object({
  label: z.string().min(1),
  expression: z.string().min(1),
  format: z.enum(['number', 'coordinate']).optional(),
  yExpression: z.string().optional(),
});

export type FunctionReadout = z.infer<typeof FunctionReadoutSchema>;

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
  asymptotes: z.array(FunctionAsymptoteSchema).optional(),
  inverseReflection: FunctionInverseReflectionSchema.optional(),
  readouts: z.array(FunctionReadoutSchema).optional(),
  showDerivative: z.boolean().optional(),
  defaultShowDerivative: z.boolean().optional(),
  integralBounds: z
    .object({
      a: z.number(),
      b: z.number(),
      label: z.string().optional(),
    })
    .optional(),
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

export const HistoriographyNoteSchema = z.object({
  historian: z.string().min(1),
  school: z.string().min(1),
  argument: z.string().min(1),
});

export type HistoriographyNote = z.infer<typeof HistoriographyNoteSchema>;

export const TimelineEventSchema = z.object({
  id: z.string().min(1),
  dateLabel: z.string().min(1),
  title: z.string().min(1),
  category: z.string().min(1),
  summaryMarkdown: z.string().min(1),
  primarySourceQuote: z.string().optional(),
  significanceMarkdown: z.string().min(1),
  conceptTags: z.array(z.string()).optional(),
  historiographyNotes: z.array(HistoriographyNoteSchema).optional(),
});

export type TimelineEvent = z.infer<typeof TimelineEventSchema>;

export const TimelineCausalitySpecSchema = z.object({
  type: z.literal('timeline_causality'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  categories: z.array(z.string()).optional(),
  concepts: z.array(z.string()).optional(),
  events: z.array(TimelineEventSchema).min(1),
});

export type TimelineCausalitySpec = z.infer<typeof TimelineCausalitySpecSchema>;

// ---------------------------------------------------------------------------
// 6. Chemistry SL — VSEPR & Dipole Polarity 3D Lab
// ---------------------------------------------------------------------------

export const VseprAtom3dSchema = z.object({
  id: z.string().min(1),
  element: z.string().min(1),
  x: z.number(),
  y: z.number(),
  z: z.number(),
  delta: z.enum(['delta+', 'delta-', 'none']).optional(),
});

export const VseprBondSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  order: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  isDative: z.boolean().optional(),
});

export const VseprMoleculeSchema = z.object({
  id: z.string().min(1),
  formula: z.string().min(1),
  name: z.string().min(1),
  centralAtom: z.string().min(1),
  outerAtoms: z.array(z.string()),
  electronDomains: z.union([z.literal(2), z.literal(3), z.literal(4)]),
  bondingPairs: z.number().int().min(1),
  lonePairs: z.number().int().min(0),
  electronGeometry: z.string().min(1),
  molecularGeometry: z.string().min(1),
  idealAngleDeg: z.number(),
  actualAngleLabel: z.string().min(1),
  bondDeltaEn: z.number(),
  bondPolarity: z.enum(['non-polar', 'polar']),
  molecularPolarity: z.enum(['non-polar', 'polar']),
  symmetrySummary: z.string().min(1),
  lewisSummary: z.string().min(1),
  atoms3d: z.array(VseprAtom3dSchema).min(2),
  bonds: z.array(VseprBondSchema).min(1),
  lonePairDirs: z
    .array(z.object({ x: z.number(), y: z.number(), z: z.number() }))
    .optional(),
  ibExamTip: z.string().min(1),
});

export type VseprMolecule = z.infer<typeof VseprMoleculeSchema>;

export const VseprPolarityLabSpecSchema = z.object({
  type: z.literal('vsepr_polarity_lab'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  defaultMoleculeId: z.string().optional(),
  molecules: z.array(VseprMoleculeSchema).min(1),
});

export type VseprPolarityLabSpec = z.infer<typeof VseprPolarityLabSpecSchema>;

// ---------------------------------------------------------------------------
// 7. Chemistry SL — van Arkel-Ketelaar Triangle & Structure Models Lab
// ---------------------------------------------------------------------------

export const BondingCompoundPointSchema = z.object({
  id: z.string().min(1),
  formula: z.string().min(1),
  name: z.string().min(1),
  enA: z.number(),
  enB: z.number(),
  avgEn: z.number(),
  deltaEn: z.number(),
  bondingClass: z.enum(['ionic', 'polar_covalent', 'nonpolar_covalent', 'metallic']),
  stateAtStp: z.string().min(1),
  meltingPointC: z.string().min(1),
  conductivity: z.string().min(1),
  explanationMarkdown: z.string().min(1),
});

export type BondingCompoundPoint = z.infer<typeof BondingCompoundPointSchema>;

export const BondingStructureModelSchema = z.object({
  id: z.enum([
    'ionic_lattice',
    'metallic_sea',
    'diamond',
    'graphite',
    'graphene',
    'sio2',
    'c60_fullerene',
  ]),
  title: z.string().min(1),
  bondingType: z.string().min(1),
  summaryMarkdown: z.string().min(1),
  keyProperties: z.array(
    z.object({
      label: z.string().min(1),
      value: z.string().min(1),
    }),
  ),
  examTrapNote: z.string().optional(),
});

export type BondingStructureModel = z.infer<typeof BondingStructureModelSchema>;

export const BondingContinuumLabSpecSchema = z.object({
  type: z.literal('bonding_continuum_lab'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  defaultTab: z.enum(['triangle', 'models']).optional(),
  compounds: z.array(BondingCompoundPointSchema).min(1),
  models: z.array(BondingStructureModelSchema).min(1),
});

export type BondingContinuumLabSpec = z.infer<
  typeof BondingContinuumLabSpecSchema
>;

// ---------------------------------------------------------------------------
// 8. Interactive Scientific Simulation Lab (Bio HL & Chem SL)
// ---------------------------------------------------------------------------

export const SimulationKindSchema = z.enum([
  'enzyme_kinetics',
  'water_potential_osmosis',
  'microscopy_magnification',
  'respiration_photosynthesis_flux',
  'bohr_emission_spectra',
  'enthalpy_energy_profile',
  'titration_ph_curve',
  'periodicity_explorer',
  'equilibrium_le_chatelier',
]);

export type SimulationKind = z.infer<typeof SimulationKindSchema>;

export const SimulationParamValueSchema = z.union([
  z.number(),
  z.string(),
  z.boolean(),
]);

export type SimulationParamValue = z.infer<typeof SimulationParamValueSchema>;

export const ScientificSimulationPresetSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  description: z.string().optional(),
  params: z.record(z.string(), SimulationParamValueSchema),
});

export type ScientificSimulationPreset = z.infer<
  typeof ScientificSimulationPresetSchema
>;

export const ScientificSimulationSpecSchema = z.object({
  type: z.literal('scientific_simulation'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  simulationKind: SimulationKindSchema,
  initialParams: z.record(z.string(), SimulationParamValueSchema).optional(),
  presets: z.array(ScientificSimulationPresetSchema).optional(),
  examTakeaways: z.array(z.string().min(1)).min(1),
  formulaLatex: z.string().optional(),
});

export type ScientificSimulationSpec = z.infer<
  typeof ScientificSimulationSpecSchema
>;

// ---------------------------------------------------------------------------
// 9. History HL — Primary Source & Historiography Analyzer (May 2028)
// ---------------------------------------------------------------------------

export const PrimarySourceSegmentSchema = z.object({
  text: z.string().min(1),
  annotationId: z.string().optional(),
});

export type PrimarySourceSegment = z.infer<typeof PrimarySourceSegmentSchema>;

export const PrimarySourceItemSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  author: z.string().min(1),
  date: z.string().min(1),
  provenance: z.string().min(1),
  citationChicago: z.string().min(1),
  sourceType: z.enum(['Primary', 'Secondary', 'Historiography']),
  perspectiveSchool: z.string().optional(),
  segments: z.array(PrimarySourceSegmentSchema).min(1),
});

export type PrimarySourceItem = z.infer<typeof PrimarySourceItemSchema>;

export const PrimarySourceAnnotationSchema = z.object({
  id: z.string().min(1),
  category: z.enum([
    'Origin',
    'Purpose',
    'Content',
    'Value',
    'Limitation',
    'Perspective',
    'Historiography',
  ]),
  title: z.string().min(1),
  analysisMarkdown: z.string().min(1),
  conceptTag: z.string().optional(),
});

export type PrimarySourceAnnotation = z.infer<
  typeof PrimarySourceAnnotationSchema
>;

export const PrimarySourceAnalyzerSpecSchema = z.object({
  type: z.literal('primary_source_analyzer'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  sources: z.array(PrimarySourceItemSchema).min(1),
  annotations: z.array(PrimarySourceAnnotationSchema).min(1),
  comparisonPrompt: z.string().optional(),
});

export type PrimarySourceAnalyzerSpec = z.infer<
  typeof PrimarySourceAnalyzerSpecSchema
>;

// ---------------------------------------------------------------------------
// 10. English A: Literature HL — Literary Extract Annotator
// ---------------------------------------------------------------------------

export const LiteraryLayerSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  color: z.string().min(1),
});

export type LiteraryLayer = z.infer<typeof LiteraryLayerSchema>;

export const LiteraryPassageSegmentSchema = z.object({
  text: z.string().min(1),
  annotationId: z.string().optional(),
});

export type LiteraryPassageSegment = z.infer<
  typeof LiteraryPassageSegmentSchema
>;

export const LiteraryPassageLineSchema = z.object({
  lineNumber: z.union([z.number(), z.string()]).optional(),
  segments: z.array(LiteraryPassageSegmentSchema).min(1),
});

export type LiteraryPassageLine = z.infer<typeof LiteraryPassageLineSchema>;

export const LiteraryAnnotationSchema = z.object({
  id: z.string().min(1),
  layerId: z.string().min(1),
  deviceName: z.string().min(1),
  effectMarkdown: z.string().min(1),
  band7Sentence: z.string().min(1),
});

export type LiteraryAnnotation = z.infer<typeof LiteraryAnnotationSchema>;

export const LiteraryExtractAnnotatorSpecSchema = z.object({
  type: z.literal('literary_extract_annotator'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  workTitle: z.string().min(1),
  author: z.string().min(1),
  genre: z.string().min(1),
  globalIssue: z.string().optional(),
  ibConcept: z.string().optional(),
  layers: z.array(LiteraryLayerSchema).min(1),
  passages: z.array(LiteraryPassageLineSchema).min(1),
  annotations: z.array(LiteraryAnnotationSchema).min(1),
});

export type LiteraryExtractAnnotatorSpec = z.infer<
  typeof LiteraryExtractAnnotatorSpecSchema
>;

// ---------------------------------------------------------------------------
// 11. French B SL — Paper 1 Text Type & Register Studio
// ---------------------------------------------------------------------------

export const FrenchTextSectionSchema = z.object({
  id: z.string().min(1),
  roleLabel: z.string().min(1),
  conventionNote: z.string().min(1),
  frenchFormal: z.string().min(1),
  frenchSemiFormal: z.string().optional(),
});

export type FrenchTextSection = z.infer<typeof FrenchTextSectionSchema>;

export const FrenchTextTypeItemSchema = z.object({
  id: z.string().min(1),
  nameFr: z.string().min(1),
  nameEn: z.string().min(1),
  register: z.string().min(1),
  audience: z.string().min(1),
  purpose: z.string().min(1),
  wordTarget: z.string().min(1),
  sections: z.array(FrenchTextSectionSchema).min(1),
  oralLinkPrompt: z.string().optional(),
  markschemeTips: z.array(z.string().min(1)).min(1),
});

export type FrenchTextTypeItem = z.infer<typeof FrenchTextTypeItemSchema>;

export const FrenchTextTypeStudioSpecSchema = z.object({
  type: z.literal('french_text_type_studio'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  themeLabel: z.string().min(1),
  textTypes: z.array(FrenchTextTypeItemSchema).min(1),
});

export type FrenchTextTypeStudioSpec = z.infer<
  typeof FrenchTextTypeStudioSpecSchema
>;

// ---------------------------------------------------------------------------
// 12. Interactive Step-by-Step Worked Example (Math / Chem / Bio)
// ---------------------------------------------------------------------------

export const WorkedExampleGivenItemSchema = z.union([
  z.string().min(1),
  z.object({
    label: z.string().min(1),
    value: z.string().min(1),
  }),
]);

export const WorkedExampleStepSchema = z.object({
  stepNumber: z.number().int().min(1),
  title: z.string().min(1),
  workingMarkdown: z.string().min(1),
  formulaLatex: z.string().optional(),
  markCode: z.string().optional(),
  rationale: z.string().min(1),
});

export type WorkedExampleStep = z.infer<typeof WorkedExampleStepSchema>;

export const WorkedExampleSpecSchema = z.object({
  type: z.literal('worked_example'),
  id: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  sourceLabel: z.string().optional(),
  commandTerm: z.string().min(1),
  marks: z.number().int().min(1),
  problemMarkdown: z.string().min(1),
  givenData: z.array(WorkedExampleGivenItemSchema).optional(),
  steps: z.array(WorkedExampleStepSchema).min(1),
  finalAnswerMarkdown: z.string().min(1),
  commonTrapMarkdown: z.string().optional(),
});

export type WorkedExampleSpec = z.infer<typeof WorkedExampleSpecSchema>;

// ---------------------------------------------------------------------------
// Discriminated Union of Playable Diagrams & Read-Only Notion Note Blocks
// ---------------------------------------------------------------------------

export const PlayableDiagramSpecSchema = z.discriminatedUnion('type', [
  LabeledExplorerSpecSchema,
  StepMechanismSpecSchema,
  InteractiveFunctionGraphSpecSchema,
  ConceptComparisonMatrixSpecSchema,
  TimelineCausalitySpecSchema,
  VseprPolarityLabSpecSchema,
  BondingContinuumLabSpecSchema,
  ScientificSimulationSpecSchema,
  PrimarySourceAnalyzerSpecSchema,
  LiteraryExtractAnnotatorSpecSchema,
  FrenchTextTypeStudioSpecSchema,
  WorkedExampleSpecSchema,
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
      'guiding_questions',
      'textbook_excerpt',
      'tok_nos',
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
