'use client';

import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Clock,
  Expand,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { enhanceDiagramSpec } from './diagram-enhancer';
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
          className="flex flex-col items-center justify-center gap-2 px-6 py-8 text-center"
        >
          <AlertTriangle
            className="h-5 w-5 text-[#6E6E73] dark:text-[#98989D]"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            {this.props.title
              ? `Unable to render "${this.props.title}"`
              : 'Unable to render interactive diagram'}
          </p>
          <p className="max-w-md text-xs text-[#6E6E73] dark:text-[#98989D]">
            The generated diagram specification contained unexpected geometry or
            formatting.
          </p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false });
              this.props.onRetry();
            }}
            className="glass-pill mt-1 inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
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
  const [expanded, setExpanded] = useState(false);

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
      <div role="alert" className="glass-surface my-6 rounded-2xl p-5">
        <div className="flex items-start gap-2.5">
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-[#6E6E73] dark:text-[#98989D]"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {rawObj?.title ?? 'Interactive diagram unavailable'}
            </p>
            <p className="mt-1 text-xs text-[#6E6E73] dark:text-[#98989D]">
              This diagram specification failed schema validation and was safely
              skipped so your study note stays readable.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const validSpec = enhanceDiagramSpec(parsed.data);
  const meta = DIAGRAM_META[validSpec.type];
  const TypeIcon = meta.Icon;
  const instanceKey = `${validSpec.id}-${resetCount}`;

  return (
    <>
      <figure className="glass-panel my-6 overflow-hidden rounded-2xl">
        {/* Card Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-black/[0.06] bg-white/40 px-5 py-3.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wide text-[#6E6E73] uppercase dark:text-[#98989D]">
                <TypeIcon className="h-3 w-3" aria-hidden="true" />
                {meta.label}
              </span>
            </div>
            <h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              {validSpec.title}
            </h3>
            <figcaption className="mt-0.5 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
              {validSpec.caption}
            </figcaption>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-label={`Expand ${validSpec.title}`}
              className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-[#6E6E73] transition-colors hover:bg-white/95 hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:text-[#98989D] dark:hover:bg-white/[0.12] dark:hover:text-[#F5F5F7]"
            >
              <Expand className="h-3 w-3" aria-hidden="true" />
              <span>Expand</span>
            </button>
            <button
              type="button"
              onClick={() => setResetCount((c) => c + 1)}
              aria-label={`Reset ${validSpec.title}`}
              className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-[#6E6E73] transition-colors hover:bg-white/95 hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:text-[#98989D] dark:hover:bg-white/[0.12] dark:hover:text-[#F5F5F7]"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              <span>Reset</span>
            </button>
          </div>
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

      {/* Fullscreen Focus Modal */}
      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="max-h-[92vh] w-[95vw] max-w-6xl overflow-y-auto p-0">
          <DialogHeader className="border-b border-black/[0.06] px-6 py-4 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wide text-[#6E6E73] uppercase dark:text-[#98989D]">
                <TypeIcon className="h-3 w-3" aria-hidden="true" />
                {meta.label}
              </span>
            </div>
            <DialogTitle className="mt-1">{validSpec.title}</DialogTitle>
            <DialogDescription>{validSpec.caption}</DialogDescription>
          </DialogHeader>
          <div className="p-2 sm:p-4">
            <DiagramErrorBoundary
              resetKey={`modal-${instanceKey}`}
              title={validSpec.title}
              onRetry={() => setResetCount((c) => c + 1)}
            >
              {renderValidatedPlayer(validSpec)}
            </DiagramErrorBoundary>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InteractiveDiagramPlayer;
