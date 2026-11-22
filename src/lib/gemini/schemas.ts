import { z } from 'zod';
import { StudyNoteBlocksSchema } from '@/types/diagrams';

// ---------------------------------------------------------------------------
// API Request Schemas
// ---------------------------------------------------------------------------

export const SignedUploadRequestSchema = z.object({
  fileName: z.string().trim().min(1, 'fileName is required').max(255),
  subjectId: z.string().uuid('subjectId must be a valid UUID'),
  mimeType: z.string().trim().max(200).optional(),
});

export const StorageUploadJsonSchema = z.object({
  storagePath: z.string().trim().min(1, 'storagePath is required'),
  fileName: z.string().trim().min(1, 'fileName is required').max(255),
  mimeType: z.string().trim().max(200).optional(),
  subjectId: z.string().uuid('subjectId must be a valid UUID'),
  topicId: z.string().uuid('topicId must be a valid UUID').nullable().optional(),
});

export const PastedMaterialJsonSchema = z.object({
  pastedTitle: z.string().trim().min(1, 'pastedTitle is required').max(255),
  pastedText: z.string().trim().min(1, 'pastedText cannot be empty').max(200_000),
  subjectId: z.string().uuid('subjectId must be a valid UUID'),
  topicId: z.string().uuid('topicId must be a valid UUID').nullable().optional(),
});

export const UpdateMaterialRequestSchema = z
  .object({
    topicId: z.string().uuid().nullable().optional(),
    topic_id: z.string().uuid().nullable().optional(),
  })
  .refine(
    (data) => data.topicId !== undefined || data.topic_id !== undefined,
    { message: 'topicId must be provided (UUID or null).' },
  );

export const GenerateSuiteRequestSchema = z.object({
  subjectId: z.string().uuid('subjectId must be a valid UUID'),
  topicId: z.string().uuid('topicId must be a valid UUID').nullable().optional(),
  materialIds: z
    .array(z.string().uuid('Each materialId must be a valid UUID'))
    .min(1, 'Select at least one classroom material.')
    .max(20, 'Select at most 20 classroom materials per generation.'),
  mode: z.enum(['append', 'replace_topic']).default('append'),
});

export const GradeQuestionRequestSchema = z.object({
  questionId: z.string().uuid('questionId must be a valid UUID'),
  userAnswer: z.string().trim().min(1, 'Answer cannot be empty').max(30_000),
});

export const TutorChatRequestSchema = z.object({
  attemptId: z.string().uuid('attemptId must be a valid UUID'),
  message: z.string().trim().min(1, 'Message cannot be empty').max(8_000),
});

export const GradeCoreProjectRequestSchema = z.object({
  projectId: z.string().uuid('projectId must be a valid UUID'),
  rubricVariant: z.string().trim().max(80).optional(),
});

// ---------------------------------------------------------------------------
// Gemini Structured Output Zod Schemas
// ---------------------------------------------------------------------------

export const MarkingPointZodSchema = z.object({
  code: z.string().min(1),
  criterion: z.string().min(1),
  marks: z.number().int().min(1),
  keywords: z.array(z.string()).optional(),
});

export const QuestionMarkschemeZodSchema = z.object({
  marking_points: z.array(MarkingPointZodSchema).min(1),
  model_answer: z.string().min(1),
  examiner_notes: z.string().optional(),
});

export const McqOptionZodSchema = z.object({
  label: z.string().min(1),
  text: z.string().min(1),
});

export const GeneratedQuestionZodSchema = z.object({
  paper_type: z.string().min(1),
  command_term: z.string().min(1),
  difficulty: z.enum(['Foundation', 'Standard IB', 'HL Extension']),
  max_marks: z.number().int().min(1).max(25),
  stimulus_markdown: z.string().nullable().optional(),
  question_markdown: z.string().min(1),
  mcq_options: z.array(McqOptionZodSchema).nullable().optional(),
  correct_mcq_option: z.string().nullable().optional(),
  markscheme: QuestionMarkschemeZodSchema,
});

export const GeneratedFlashcardZodSchema = z.object({
  front_markdown: z.string().min(1),
  back_markdown: z.string().min(1),
});

export const GeneratedSuiteZodSchema = z.object({
  studyNote: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    blocks: StudyNoteBlocksSchema.min(3).refine(
      (blocks) => blocks.some((block) => block.type === 'playable_diagram'),
      { message: 'Study note must contain at least one playable_diagram block.' },
    ),
  }),
  questions: z.array(GeneratedQuestionZodSchema).min(1).max(12),
  flashcards: z.array(GeneratedFlashcardZodSchema).min(1).max(20),
});

export type GeneratedSuiteOutput = z.infer<typeof GeneratedSuiteZodSchema>;

export const PointResultZodSchema = z.object({
  code: z.string().min(1),
  criterion: z.string().min(1),
  awarded: z.number().int().min(0),
  max_marks: z.number().int().min(0).optional(),
  feedback: z.string().min(1),
});

export const QuestionGradeOutputZodSchema = z.object({
  awarded_marks: z.number().int().min(0),
  grading_breakdown: z.object({
    point_results: z.array(PointResultZodSchema).min(1),
    command_term_feedback: z.string().min(1),
    missing_keywords: z.array(z.string()),
    model_answer: z.string().min(1),
  }),
});

export type QuestionGradeOutput = z.infer<typeof QuestionGradeOutputZodSchema>;

export const TutorReplyOutputZodSchema = z.object({
  reply: z.string().min(1),
});

export type TutorReplyOutput = z.infer<typeof TutorReplyOutputZodSchema>;

export const CoreCriterionResultZodSchema = z.object({
  criterion: z.string().min(1),
  awarded: z.number().int().min(0),
  max_marks: z.number().int().min(1),
  justification: z.string().min(1),
  improvements: z.array(z.string().min(1)).min(1),
});

export const CoreReviewOutputZodSchema = z.object({
  total_awarded: z.number().int().min(0),
  total_max: z.number().int().min(1),
  overall_summary: z.string().min(1),
  criterion_results: z.array(CoreCriterionResultZodSchema).min(1),
  priority_actions: z.array(z.string().min(1)).min(1),
});

export type CoreReviewOutput = z.infer<typeof CoreReviewOutputZodSchema>;

// ---------------------------------------------------------------------------
// Gemini JSON Schemas (compatible with @google/genai responseJsonSchema)
// Only uses supported subset: $defs, $ref, type, description, enum, items,
// minItems, maxItems, minimum, maximum, anyOf, properties,
// additionalProperties, required.
// ---------------------------------------------------------------------------

export const STUDY_SUITE_JSON_SCHEMA: Record<string, unknown> = {
  type: 'object',
  additionalProperties: false,
  required: ['studyNote', 'questions', 'flashcards'],
  properties: {
    studyNote: {
      type: 'object',
      additionalProperties: false,
      required: ['title', 'summary', 'blocks'],
      properties: {
        title: {
          type: 'string',
          description: 'Concise Notion-style title for the comprehensive study guide.',
        },
        summary: {
          type: 'string',
          description: '2-3 sentence academic overview referencing key IB concepts and materials.',
        },
        blocks: {
          type: 'array',
          minItems: 5,
          description:
            'Ordered read-only Notion blocks including headings, paragraphs, callouts, key_terms, equations, and 1 to 3 playable_diagram blocks.',
          items: { $ref: '#/$defs/StudyNoteBlock' },
        },
      },
    },
    questions: {
      type: 'array',
      minItems: 8,
      maxItems: 8,
      description: 'Exactly 8 authentic IB exam questions matched to official subject papers.',
      items: { $ref: '#/$defs/GeneratedQuestion' },
    },
    flashcards: {
      type: 'array',
      minItems: 12,
      maxItems: 12,
      description: 'Exactly 12 active-recall IB revision flashcards.',
      items: { $ref: '#/$defs/GeneratedFlashcard' },
    },
  },
  $defs: {
    StudyNoteBlock: {
      anyOf: [
        { $ref: '#/$defs/HeadingBlock' },
        { $ref: '#/$defs/ParagraphBlock' },
        { $ref: '#/$defs/CalloutBlock' },
        { $ref: '#/$defs/KeyTermsBlock' },
        { $ref: '#/$defs/EquationBlock' },
        { $ref: '#/$defs/PlayableDiagramBlock' },
      ],
    },
    HeadingBlock: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'level', 'text'],
      properties: {
        type: { type: 'string', enum: ['heading'] },
        level: { type: 'integer', enum: [2, 3] },
        text: { type: 'string' },
      },
    },
    ParagraphBlock: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'markdown'],
      properties: {
        type: { type: 'string', enum: ['paragraph'] },
        markdown: { type: 'string' },
      },
    },
    CalloutBlock: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'variant', 'title', 'markdown'],
      properties: {
        type: { type: 'string', enum: ['callout'] },
        variant: {
          type: 'string',
          enum: [
            'definition',
            'examiner_warning',
            'key_formula',
            'syllabus_link',
            'guiding_questions',
            'textbook_excerpt',
            'tok_nos',
          ],
        },
        title: { type: 'string' },
        markdown: { type: 'string' },
      },
    },
    KeyTermsBlock: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'items'],
      properties: {
        type: { type: 'string', enum: ['key_terms'] },
        items: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['term', 'definitionMarkdown'],
            properties: {
              term: { type: 'string' },
              definitionMarkdown: { type: 'string' },
              markschemeKeyword: { type: 'string' },
            },
          },
        },
      },
    },
    EquationBlock: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'latex'],
      properties: {
        type: { type: 'string', enum: ['equation'] },
        latex: {
          type: 'string',
          description: 'Pure LaTeX formula string without surrounding $$ delimiters.',
        },
        caption: { type: 'string' },
        variableLegend: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['symbol', 'meaning'],
            properties: {
              symbol: { type: 'string' },
              meaning: { type: 'string' },
            },
          },
        },
      },
    },
    PlayableDiagramBlock: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'spec'],
      properties: {
        type: { type: 'string', enum: ['playable_diagram'] },
        spec: { $ref: '#/$defs/PlayableDiagramSpec' },
      },
    },
    PlayableDiagramSpec: {
      anyOf: [
        { $ref: '#/$defs/LabeledExplorerSpec' },
        { $ref: '#/$defs/StepMechanismSpec' },
        { $ref: '#/$defs/InteractiveFunctionGraphSpec' },
        { $ref: '#/$defs/ConceptComparisonMatrixSpec' },
        { $ref: '#/$defs/TimelineCausalitySpec' },
        { $ref: '#/$defs/WorkedExampleSpec' },
        { $ref: '#/$defs/ScientificSimulationSpec' },
        { $ref: '#/$defs/PrimarySourceAnalyzerSpec' },
        { $ref: '#/$defs/LiteraryExtractAnnotatorSpec' },
        { $ref: '#/$defs/FrenchTextTypeStudioSpec' },
      ],
    },
    SvgShape: {
      anyOf: [
        { $ref: '#/$defs/SvgShapeRect' },
        { $ref: '#/$defs/SvgShapeCircle' },
        { $ref: '#/$defs/SvgShapeEllipse' },
        { $ref: '#/$defs/SvgShapeLine' },
        { $ref: '#/$defs/SvgShapePath' },
        { $ref: '#/$defs/SvgShapePolygon' },
        { $ref: '#/$defs/SvgShapeText' },
      ],
    },
    SvgShapeRect: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'x', 'y', 'width', 'height'],
      properties: {
        kind: { type: 'string', enum: ['rect'] },
        x: { type: 'number' },
        y: { type: 'number' },
        width: { type: 'number' },
        height: { type: 'number' },
        rx: { type: 'number' },
        fill: { type: 'string' },
        stroke: { type: 'string' },
        strokeWidth: { type: 'number' },
        opacity: { type: 'number' },
      },
    },
    SvgShapeCircle: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'cx', 'cy', 'r'],
      properties: {
        kind: { type: 'string', enum: ['circle'] },
        cx: { type: 'number' },
        cy: { type: 'number' },
        r: { type: 'number' },
        fill: { type: 'string' },
        stroke: { type: 'string' },
        strokeWidth: { type: 'number' },
        opacity: { type: 'number' },
      },
    },
    SvgShapeEllipse: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'cx', 'cy', 'rx', 'ry'],
      properties: {
        kind: { type: 'string', enum: ['ellipse'] },
        cx: { type: 'number' },
        cy: { type: 'number' },
        rx: { type: 'number' },
        ry: { type: 'number' },
        fill: { type: 'string' },
        stroke: { type: 'string' },
        strokeWidth: { type: 'number' },
        opacity: { type: 'number' },
      },
    },
    SvgShapeLine: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'x1', 'y1', 'x2', 'y2'],
      properties: {
        kind: { type: 'string', enum: ['line'] },
        x1: { type: 'number' },
        y1: { type: 'number' },
        x2: { type: 'number' },
        y2: { type: 'number' },
        stroke: { type: 'string' },
        strokeWidth: { type: 'number' },
        strokeDasharray: { type: 'string' },
        opacity: { type: 'number' },
      },
    },
    SvgShapePath: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'd'],
      properties: {
        kind: { type: 'string', enum: ['path'] },
        d: { type: 'string' },
        fill: { type: 'string' },
        stroke: { type: 'string' },
        strokeWidth: { type: 'number' },
        strokeDasharray: { type: 'string' },
        opacity: { type: 'number' },
      },
    },
    SvgShapePolygon: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'points'],
      properties: {
        kind: { type: 'string', enum: ['polygon'] },
        points: { type: 'string' },
        fill: { type: 'string' },
        stroke: { type: 'string' },
        strokeWidth: { type: 'number' },
        opacity: { type: 'number' },
      },
    },
    SvgShapeText: {
      type: 'object',
      additionalProperties: false,
      required: ['kind', 'x', 'y', 'text'],
      properties: {
        kind: { type: 'string', enum: ['text'] },
        x: { type: 'number' },
        y: { type: 'number' },
        text: { type: 'string' },
        fontSize: { type: 'number' },
        fontWeight: {
          type: 'string',
          description: 'Font weight such as "400", "600", or "bold".',
        },
        textAnchor: { type: 'string', enum: ['start', 'middle', 'end'] },
        fill: { type: 'string' },
        opacity: { type: 'number' },
      },
    },
    LabeledExplorerSpec: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'id', 'title', 'caption', 'shapes', 'hotspots'],
      properties: {
        type: { type: 'string', enum: ['labeled_explorer'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        viewBox: {
          type: 'string',
          description: 'SVG viewBox string, use "0 0 800 440".',
        },
        palette: {
          type: 'string',
          enum: ['scientific', 'monochrome'],
          description: 'Use "scientific" for full-color academic diagrams.',
        },
        shapes: {
          type: 'array',
          minItems: 1,
          items: { $ref: '#/$defs/SvgShape' },
        },
        hotspots: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'id',
              'x',
              'y',
              'label',
              'category',
              'examKeyword',
              'detailMarkdown',
            ],
            properties: {
              id: { type: 'string' },
              x: { type: 'number', minimum: 0, maximum: 800 },
              y: { type: 'number', minimum: 0, maximum: 440 },
              label: { type: 'string' },
              category: { type: 'string' },
              examKeyword: { type: 'string' },
              detailMarkdown: { type: 'string' },
            },
          },
        },
      },
    },
    StepMechanismSpec: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'id', 'title', 'caption', 'nodes', 'edges', 'steps'],
      properties: {
        type: { type: 'string', enum: ['step_mechanism'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        palette: {
          type: 'string',
          enum: ['scientific', 'monochrome'],
        },
        nodes: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'x', 'y', 'label'],
            properties: {
              id: { type: 'string' },
              x: { type: 'number', minimum: 20, maximum: 780 },
              y: { type: 'number', minimum: 20, maximum: 380 },
              label: { type: 'string' },
              sublabel: { type: 'string' },
              group: { type: 'string' },
            },
          },
        },
        edges: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'from', 'to'],
            properties: {
              id: { type: 'string' },
              from: { type: 'string' },
              to: { type: 'string' },
              label: { type: 'string' },
              dashed: { type: 'boolean' },
            },
          },
        },
        steps: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'stepNumber',
              'title',
              'descriptionMarkdown',
              'activeNodeIds',
              'activeEdgeIds',
              'metrics',
            ],
            properties: {
              stepNumber: { type: 'integer', minimum: 1 },
              title: { type: 'string' },
              descriptionMarkdown: { type: 'string' },
              formulaLatex: { type: 'string' },
              activeNodeIds: { type: 'array', items: { type: 'string' } },
              activeEdgeIds: { type: 'array', items: { type: 'string' } },
              metrics: {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['label', 'value'],
                  properties: {
                    label: { type: 'string' },
                    value: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
    InteractiveFunctionGraphSpec: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type',
        'id',
        'title',
        'caption',
        'xMin',
        'xMax',
        'yMin',
        'yMax',
        'xLabel',
        'yLabel',
        'sliders',
        'curves',
      ],
      properties: {
        type: { type: 'string', enum: ['function_graph'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        xMin: { type: 'number' },
        xMax: { type: 'number' },
        yMin: { type: 'number' },
        yMax: { type: 'number' },
        xLabel: { type: 'string' },
        yLabel: { type: 'string' },
        sliders: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['key', 'label', 'min', 'max', 'step', 'defaultValue'],
            properties: {
              key: {
                type: 'string',
                description:
                  'Valid identifier starting with letter or underscore (e.g., a, b, h, k).',
              },
              label: { type: 'string' },
              min: { type: 'number' },
              max: { type: 'number' },
              step: { type: 'number', minimum: 0.01 },
              defaultValue: { type: 'number' },
            },
          },
        },
        curves: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'label', 'expression'],
            properties: {
              id: { type: 'string' },
              label: { type: 'string' },
              expression: {
                type: 'string',
                description:
                  'Plain math expression using x and slider keys (e.g., "a*(x-h)^2+k", "1/(x-h)+k", "sin(b*x)"). No LaTeX.',
              },
              dashed: { type: 'boolean' },
              color: { type: 'string' },
            },
          },
        },
        tangentX: { type: 'number' },
        showDerivative: { type: 'boolean' },
        defaultShowDerivative: { type: 'boolean' },
        integralBounds: {
          type: 'object',
          additionalProperties: false,
          required: ['a', 'b'],
          properties: {
            a: { type: 'number' },
            b: { type: 'number' },
            label: { type: 'string' },
          },
        },
        markers: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['x', 'y', 'label'],
            properties: {
              x: { type: 'number' },
              y: { type: 'number' },
              label: { type: 'string' },
            },
          },
        },
      },
    },
    ConceptComparisonMatrixSpec: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'id', 'title', 'caption', 'columns', 'rows'],
      properties: {
        type: { type: 'string', enum: ['comparison_matrix'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        columns: {
          type: 'array',
          minItems: 2,
          items: { type: 'string' },
        },
        rows: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['criterion', 'cells'],
            properties: {
              criterion: { type: 'string' },
              cells: {
                type: 'array',
                minItems: 2,
                items: { type: 'string' },
              },
              ibExamTip: { type: 'string' },
            },
          },
        },
      },
    },
    TimelineCausalitySpec: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'id', 'title', 'caption', 'events'],
      properties: {
        type: { type: 'string', enum: ['timeline_causality'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        categories: {
          type: 'array',
          items: { type: 'string' },
        },
        concepts: {
          type: 'array',
          items: { type: 'string' },
        },
        events: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'id',
              'dateLabel',
              'title',
              'category',
              'summaryMarkdown',
              'significanceMarkdown',
            ],
            properties: {
              id: { type: 'string' },
              dateLabel: { type: 'string' },
              title: { type: 'string' },
              category: { type: 'string' },
              summaryMarkdown: { type: 'string' },
              primarySourceQuote: { type: 'string' },
              significanceMarkdown: { type: 'string' },
              conceptTags: {
                type: 'array',
                items: { type: 'string' },
              },
              historiographyNotes: {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['historian', 'school', 'argument'],
                  properties: {
                    historian: { type: 'string' },
                    school: { type: 'string' },
                    argument: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
    WorkedExampleSpec: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type',
        'id',
        'title',
        'caption',
        'commandTerm',
        'marks',
        'problemMarkdown',
        'steps',
        'finalAnswerMarkdown',
      ],
      properties: {
        type: { type: 'string', enum: ['worked_example'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        sourceLabel: { type: 'string' },
        commandTerm: { type: 'string' },
        marks: { type: 'integer', minimum: 1 },
        problemMarkdown: { type: 'string' },
        givenData: {
          type: 'array',
          items: { type: 'string' },
        },
        steps: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['stepNumber', 'title', 'workingMarkdown', 'rationale'],
            properties: {
              stepNumber: { type: 'integer', minimum: 1 },
              title: { type: 'string' },
              workingMarkdown: { type: 'string' },
              formulaLatex: { type: 'string' },
              markCode: { type: 'string' },
              rationale: { type: 'string' },
            },
          },
        },
        finalAnswerMarkdown: { type: 'string' },
        commonTrapMarkdown: { type: 'string' },
      },
    },
    ScientificSimulationSpec: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type',
        'id',
        'title',
        'caption',
        'simulationKind',
        'examTakeaways',
      ],
      properties: {
        type: { type: 'string', enum: ['scientific_simulation'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        simulationKind: {
          type: 'string',
          enum: [
            'enzyme_kinetics',
            'water_potential_osmosis',
            'microscopy_magnification',
            'respiration_photosynthesis_flux',
            'bohr_emission_spectra',
            'enthalpy_energy_profile',
            'titration_ph_curve',
            'periodicity_explorer',
            'equilibrium_le_chatelier',
          ],
        },
        examTakeaways: {
          type: 'array',
          minItems: 1,
          items: { type: 'string' },
        },
        formulaLatex: { type: 'string' },
      },
    },
    PrimarySourceAnalyzerSpec: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'id', 'title', 'caption', 'sources', 'annotations'],
      properties: {
        type: { type: 'string', enum: ['primary_source_analyzer'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        comparisonPrompt: { type: 'string' },
        sources: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'id',
              'label',
              'author',
              'date',
              'provenance',
              'citationChicago',
              'sourceType',
              'segments',
            ],
            properties: {
              id: { type: 'string' },
              label: { type: 'string' },
              author: { type: 'string' },
              date: { type: 'string' },
              provenance: { type: 'string' },
              citationChicago: { type: 'string' },
              sourceType: {
                type: 'string',
                enum: ['Primary', 'Secondary', 'Historiography'],
              },
              perspectiveSchool: { type: 'string' },
              segments: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['text'],
                  properties: {
                    text: { type: 'string' },
                    annotationId: { type: 'string' },
                  },
                },
              },
            },
          },
        },
        annotations: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'category', 'title', 'analysisMarkdown'],
            properties: {
              id: { type: 'string' },
              category: {
                type: 'string',
                enum: [
                  'Origin',
                  'Purpose',
                  'Content',
                  'Value',
                  'Limitation',
                  'Perspective',
                  'Historiography',
                ],
              },
              title: { type: 'string' },
              analysisMarkdown: { type: 'string' },
              conceptTag: { type: 'string' },
            },
          },
        },
      },
    },
    LiteraryExtractAnnotatorSpec: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type',
        'id',
        'title',
        'caption',
        'workTitle',
        'author',
        'genre',
        'layers',
        'passages',
        'annotations',
      ],
      properties: {
        type: { type: 'string', enum: ['literary_extract_annotator'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        workTitle: { type: 'string' },
        author: { type: 'string' },
        genre: { type: 'string' },
        globalIssue: { type: 'string' },
        ibConcept: { type: 'string' },
        layers: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'label', 'color'],
            properties: {
              id: { type: 'string' },
              label: { type: 'string' },
              color: { type: 'string' },
            },
          },
        },
        passages: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['segments'],
            properties: {
              lineNumber: { type: 'integer' },
              segments: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['text'],
                  properties: {
                    text: { type: 'string' },
                    annotationId: { type: 'string' },
                  },
                },
              },
            },
          },
        },
        annotations: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'id',
              'layerId',
              'deviceName',
              'effectMarkdown',
              'band7Sentence',
            ],
            properties: {
              id: { type: 'string' },
              layerId: { type: 'string' },
              deviceName: { type: 'string' },
              effectMarkdown: { type: 'string' },
              band7Sentence: { type: 'string' },
            },
          },
        },
      },
    },
    FrenchTextTypeStudioSpec: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'id', 'title', 'caption', 'themeLabel', 'textTypes'],
      properties: {
        type: { type: 'string', enum: ['french_text_type_studio'] },
        id: { type: 'string' },
        title: { type: 'string' },
        caption: { type: 'string' },
        themeLabel: { type: 'string' },
        textTypes: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'id',
              'nameFr',
              'nameEn',
              'register',
              'audience',
              'purpose',
              'wordTarget',
              'sections',
              'markschemeTips',
            ],
            properties: {
              id: { type: 'string' },
              nameFr: { type: 'string' },
              nameEn: { type: 'string' },
              register: { type: 'string' },
              audience: { type: 'string' },
              purpose: { type: 'string' },
              wordTarget: { type: 'string' },
              oralLinkPrompt: { type: 'string' },
              markschemeTips: {
                type: 'array',
                minItems: 1,
                items: { type: 'string' },
              },
              sections: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: [
                    'id',
                    'roleLabel',
                    'conventionNote',
                    'frenchFormal',
                  ],
                  properties: {
                    id: { type: 'string' },
                    roleLabel: { type: 'string' },
                    conventionNote: { type: 'string' },
                    frenchFormal: { type: 'string' },
                    frenchSemiFormal: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
    GeneratedQuestion: {
      type: 'object',
      additionalProperties: false,
      required: [
        'paper_type',
        'command_term',
        'difficulty',
        'max_marks',
        'question_markdown',
        'markscheme',
      ],
      properties: {
        paper_type: { type: 'string' },
        command_term: { type: 'string' },
        difficulty: {
          type: 'string',
          enum: ['Foundation', 'Standard IB', 'HL Extension'],
        },
        max_marks: { type: 'integer', minimum: 1, maximum: 25 },
        stimulus_markdown: { type: 'string' },
        question_markdown: { type: 'string' },
        mcq_options: {
          type: 'array',
          minItems: 4,
          maxItems: 4,
          description: 'Provide exactly 4 options (A-D) ONLY for MCQ questions; omit for structured questions.',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['label', 'text'],
            properties: {
              label: { type: 'string', enum: ['A', 'B', 'C', 'D'] },
              text: { type: 'string' },
            },
          },
        },
        correct_mcq_option: {
          type: 'string',
          enum: ['A', 'B', 'C', 'D'],
          description: 'Provide ONLY for MCQ questions; omit for structured questions.',
        },
        markscheme: {
          type: 'object',
          additionalProperties: false,
          required: ['marking_points', 'model_answer'],
          properties: {
            marking_points: {
              type: 'array',
              minItems: 1,
              items: {
                type: 'object',
                additionalProperties: false,
                required: ['code', 'criterion', 'marks'],
                properties: {
                  code: {
                    type: 'string',
                    description: 'IB markscheme code such as M1, M2, A1, C1.',
                  },
                  criterion: { type: 'string' },
                  marks: { type: 'integer', minimum: 1 },
                  keywords: {
                    type: 'array',
                    items: { type: 'string' },
                  },
                },
              },
            },
            model_answer: { type: 'string' },
            examiner_notes: { type: 'string' },
          },
        },
      },
    },
    GeneratedFlashcard: {
      type: 'object',
      additionalProperties: false,
      required: ['front_markdown', 'back_markdown'],
      properties: {
        front_markdown: { type: 'string' },
        back_markdown: { type: 'string' },
      },
    },
  },
};

export const QUESTION_GRADE_JSON_SCHEMA: Record<string, unknown> = {
  type: 'object',
  additionalProperties: false,
  required: ['awarded_marks', 'grading_breakdown'],
  properties: {
    awarded_marks: { type: 'integer', minimum: 0 },
    grading_breakdown: {
      type: 'object',
      additionalProperties: false,
      required: [
        'point_results',
        'command_term_feedback',
        'missing_keywords',
        'model_answer',
      ],
      properties: {
        point_results: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['code', 'criterion', 'awarded', 'max_marks', 'feedback'],
            properties: {
              code: { type: 'string' },
              criterion: { type: 'string' },
              awarded: { type: 'integer', minimum: 0 },
              max_marks: { type: 'integer', minimum: 0 },
              feedback: { type: 'string' },
            },
          },
        },
        command_term_feedback: { type: 'string' },
        missing_keywords: {
          type: 'array',
          items: { type: 'string' },
        },
        model_answer: { type: 'string' },
      },
    },
  },
};

export const TUTOR_REPLY_JSON_SCHEMA: Record<string, unknown> = {
  type: 'object',
  additionalProperties: false,
  required: ['reply'],
  properties: {
    reply: {
      type: 'string',
      description: 'Concise Markdown/KaTeX IB examiner tutor response.',
    },
  },
};

export const CORE_REVIEW_JSON_SCHEMA: Record<string, unknown> = {
  type: 'object',
  additionalProperties: false,
  required: [
    'total_awarded',
    'total_max',
    'overall_summary',
    'criterion_results',
    'priority_actions',
  ],
  properties: {
    total_awarded: { type: 'integer', minimum: 0 },
    total_max: { type: 'integer', minimum: 1 },
    overall_summary: { type: 'string' },
    criterion_results: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'criterion',
          'awarded',
          'max_marks',
          'justification',
          'improvements',
        ],
        properties: {
          criterion: { type: 'string' },
          awarded: { type: 'integer', minimum: 0 },
          max_marks: { type: 'integer', minimum: 1 },
          justification: { type: 'string' },
          improvements: {
            type: 'array',
            minItems: 1,
            items: { type: 'string' },
          },
        },
      },
    },
    priority_actions: {
      type: 'array',
      minItems: 1,
      items: { type: 'string' },
    },
  },
};
