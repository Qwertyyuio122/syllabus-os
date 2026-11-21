'use client';

import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Clock,
  GitBranch,
  LineChart,
  MapPin,
  RotateCcw,
  Table2,
} from 'lucide-react';
import {
  PlayableDiagramSpecSchema,
  type PlayableDiagramSpec,
} from '@/types/diagrams';
import { LabeledAnatomyExplorer } from './LabeledAnatomyExplorer';
import { StepMechanismPlayer } from './StepMechanismPlayer';
import { InteractiveFunctionGraph } from './InteractiveFunctionGraph';
import { ConceptComparisonMatrix } from './ConceptComparisonMatrix';
import { TimelineCausalityExplorer } from './TimelineCausalityExplorer';

export interface InteractiveDiagramPlayerProps {
  spec: PlayableDiagramSpec;
}

interface DiagramErrorBoundaryProps {
  resetKey: string;
  title?: string;
  onRetry: () => void;
  children: React.ReactNode;
}

interface DiagramErrorBoundaryState {
  hasError: boolean;
}

class DiagramErrorBoundary extends React.Component<
  DiagramErrorBoundaryProps,
  DiagramErrorBoundaryState
> {
  constructor(props: DiagramErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): DiagramErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: DiagramErrorBoundaryProps): void {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex flex-col items-center justify-center gap-2 bg-[#FBFBFA] px-6 py-8 text-center dark:bg-[#202020]"
        >
          <AlertTriangle
            className="h-5 w-5 text-[#787774] dark:text-[#9B9A97]"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-[#37352F] dark:text-[#EBEBEB]">
            {this.props.title
              ? `Unable to render "${this.props.title}"`
              : 'Unable to render interactive diagram'}
          </p>
          <p className="max-w-md text-xs text-[#787774] dark:text-[#9B9A97]">
            The generated diagram specification contained unexpected geometry or
            formatting.
          </p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false });
              this.props.onRetry();
            }}
            className="mt-1 inline-flex h-7 cursor-pointer items-center gap-1.5 rounded border border-[#E6E6E4] bg-white px-2.5 text-xs font-medium text-[#37352F] transition-colors hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
          >
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const DIAGRAM_META: Record<
  PlayableDiagramSpec['type'],
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  labeled_explorer: { label: 'Anatomy Explorer', Icon: MapPin },
  step_mechanism: { label: 'Step Mechanism', Icon: GitBranch },
  function_graph: { label: 'Function Graph', Icon: LineChart },
  comparison_matrix: { label: 'Comparison Matrix', Icon: Table2 },
  timeline_causality: { label: 'Timeline & Causality', Icon: Clock },
};

function renderValidatedPlayer(spec: PlayableDiagramSpec): React.ReactElement {
  switch (spec.type) {
    case 'labeled_explorer':
      return <LabeledAnatomyExplorer spec={spec} />;
    case 'step_mechanism':
      return <StepMechanismPlayer spec={spec} />;
    case 'function_graph':
      return <InteractiveFunctionGraph spec={spec} />;
    case 'comparison_matrix':
      return <ConceptComparisonMatrix spec={spec} />;
    case 'timeline_causality':
      return <TimelineCausalityExplorer spec={spec} />;
  }
}

export function InteractiveDiagramPlayer({
  spec,
}: InteractiveDiagramPlayerProps) {
  const [resetCount, setResetCount] = useState(0);

  const parsed = useMemo(
    () => PlayableDiagramSpecSchema.safeParse(spec),
    [spec],
  );

  if (!parsed.success) {
    const rawObj =
      spec && typeof spec === 'object'
        ? (spec as Partial<PlayableDiagramSpec>)
        : undefined;
    return (
      <div
        role="alert"
        className="my-5 rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] p-5 dark:border-[#2E2E2E] dark:bg-[#202020]"
      >
        <div className="flex items-start gap-2.5">
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-[#787774] dark:text-[#9B9A97]"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
              {rawObj?.title ?? 'Interactive diagram unavailable'}
            </p>
            <p className="mt-1 text-xs text-[#787774] dark:text-[#9B9A97]">
              This diagram specification failed schema validation and was safely
              skipped so your study note stays readable.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const validSpec = parsed.data;
  const meta = DIAGRAM_META[validSpec.type];
  const TypeIcon = meta.Icon;
  const instanceKey = `${validSpec.id}-${resetCount}`;

  return (
    <figure className="my-5 overflow-hidden rounded-lg border border-[#E6E6E4] bg-white dark:border-[#2E2E2E] dark:bg-[#191919]">
      {/* Card Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E6E6E4] bg-white px-4 py-3 dark:border-[#2E2E2E] dark:bg-[#191919]">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-[#787774] uppercase dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97]">
              <TypeIcon className="h-3 w-3" aria-hidden="true" />
              {meta.label}
            </span>
          </div>
          <h3 className="mt-1.5 text-[15px] font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
            {validSpec.title}
          </h3>
          <figcaption className="mt-0.5 text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
            {validSpec.caption}
          </figcaption>
        </div>

        <button
          type="button"
          onClick={() => setResetCount((c) => c + 1)}
          aria-label={`Reset ${validSpec.title}`}
          className="inline-flex h-7 shrink-0 cursor-pointer items-center gap-1.5 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-2.5 text-xs font-medium text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB] dark:focus-visible:ring-[#EBEBEB]/30"
        >
          <RotateCcw className="h-3 w-3" aria-hidden="true" />
          Reset
        </button>
      </div>

      {/* Player Body wrapped in ErrorBoundary */}
      <DiagramErrorBoundary
        resetKey={instanceKey}
        title={validSpec.title}
        onRetry={() => setResetCount((c) => c + 1)}
      >
        <div key={instanceKey}>{renderValidatedPlayer(validSpec)}</div>
      </DiagramErrorBoundary>
    </figure>
  );
}

export default InteractiveDiagramPlayer;
