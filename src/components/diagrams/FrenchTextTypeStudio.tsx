'use client';

import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Languages,
  MapPin,
  MessageSquareQuote,
  Sparkles,
} from 'lucide-react';
import type {
  FrenchTextSection,
  FrenchTextTypeItem,
  FrenchTextTypeStudioSpec,
} from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface FrenchTextTypeStudioProps {
  spec: FrenchTextTypeStudioSpec;
}

export function FrenchTextTypeStudio({ spec }: FrenchTextTypeStudioProps) {
  const [selectedTypeId, setSelectedTypeId] = useState<string>(
    spec.textTypes[0]?.id ?? '',
  );
  const [registerMode, setRegisterMode] = useState<'soutenu' | 'courant'>(
    'soutenu',
  );
  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    spec.textTypes[0]?.sections[0]?.id ?? '',
  );

  const activeType: FrenchTextTypeItem | undefined = useMemo(
    () =>
      spec.textTypes.find((t) => t.id === selectedTypeId) ?? spec.textTypes[0],
    [spec.textTypes, selectedTypeId],
  );

  const activeSection: FrenchTextSection | undefined = useMemo(() => {
    if (!activeType) return undefined;
    return (
      activeType.sections.find((s) => s.id === selectedSectionId) ??
      activeType.sections[0]
    );
  }, [activeType, selectedSectionId]);

  if (!activeType) return null;

  const handleSelectType = (tt: FrenchTextTypeItem) => {
    setSelectedTypeId(tt.id);
    setSelectedSectionId(tt.sections[0]?.id ?? '');
  };

  return (
    <div>
      {/* Top Bar: Theme Pill + Paper 1 Text Type Switcher + Register Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Types de texte">
          <span className="glass-pill mr-1 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-sky-700 dark:text-sky-300">
            <Languages className="h-3 w-3" aria-hidden="true" />
            {spec.themeLabel}
          </span>
          {spec.textTypes.map((tt) => {
            const active = tt.id === activeType.id;
            return (
              <button
                key={tt.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleSelectType(tt)}
                className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all ${
                  active
                    ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                    : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
                }`}
              >
                {tt.nameFr}
              </button>
            );
          })}
        </div>

        {/* Courant vs Soutenu Register Toggle */}
        <div
          role="group"
          aria-label="Registre de langue"
          className="glass-surface inline-flex items-center rounded-full p-0.5"
        >
          <button
            type="button"
            aria-pressed={registerMode === 'courant'}
            onClick={() => setRegisterMode('courant')}
            className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
              registerMode === 'courant'
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
            }`}
          >
            Courant
          </button>
          <button
            type="button"
            aria-pressed={registerMode === 'soutenu'}
            onClick={() => setRegisterMode('soutenu')}
            className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
              registerMode === 'soutenu'
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
            }`}
          >
            Soutenu
          </button>
        </div>
      </div>

      {/* Text Type Contextual Metadata */}
      <div className="grid grid-cols-2 gap-2 border-b border-black/[0.06] bg-white/20 px-4 py-2.5 sm:grid-cols-4 dark:border-white/[0.08] dark:bg-white/[0.015]">
        <div>
          <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
            Format
          </div>
          <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {activeType.nameEn}
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
            Registre attendu
          </div>
          <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {activeType.register}
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
            Destinataire
          </div>
          <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {activeType.audience}
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
            Longueur (Paper 1 SL)
          </div>
          <div className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-300">
            {activeType.wordTarget}
          </div>
        </div>
      </div>

      {/* Main Split: Clickable Document Blueprint + Structural Pin Inspector */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr]">
        {/* Interactive French Exemplar Blueprint */}
        <div className="space-y-2.5 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
          <div className="text-xs text-[#6E6E73] dark:text-[#98989D]">
            <MarkdownMath
              content={`**Objectif :** ${activeType.purpose} · Click any numbered convention pin below to inspect IB Paper 1 criteria.`}
              className="text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]"
            />
          </div>

          <div className="glass-surface divide-y divide-black/[0.06] overflow-hidden rounded-2xl dark:divide-white/[0.08]">
            {activeType.sections.map((section, idx) => {
              const isSelected = section.id === activeSection?.id;
              const displayedFrench =
                registerMode === 'courant' && section.frenchSemiFormal
                  ? section.frenchSemiFormal
                  : section.frenchFormal;
              const usingFallbackFormal =
                registerMode === 'courant' && !section.frenchSemiFormal;

              return (
                <div
                  key={section.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedSectionId(section.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSectionId(section.id);
                    }
                  }}
                  className={`block w-full cursor-pointer px-4 py-3.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500/40 ${
                    isSelected
                      ? 'bg-sky-500/[0.08] dark:bg-sky-400/[0.1]'
                      : 'hover:bg-black/[0.025] dark:hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10.5px] font-bold ${
                          isSelected
                            ? 'bg-sky-600 text-white dark:bg-sky-400 dark:text-[#0F172A]'
                            : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="font-mono text-[11px] font-semibold tracking-wide text-sky-700 uppercase dark:text-sky-300">
                        {section.roleLabel}
                      </span>
                    </span>
                    <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]">
                      {registerMode === 'courant' && !usingFallbackFormal
                        ? 'Registre courant'
                        : 'Registre soutenu'}
                    </span>
                  </div>
                  <MarkdownMath
                    content={displayedFrench}
                    className="mt-2 font-serif text-[14.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Convention Inspector + Oral Individuel Link + Markscheme Tips */}
        <div className="space-y-3.5 bg-white/25 p-5 dark:bg-white/[0.015]">
          {activeSection && (
            <div className="glass-surface rounded-2xl border-l-[3px] border-l-sky-600 p-4 dark:border-l-sky-400">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-sky-700 uppercase dark:text-sky-300">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                Convention Pin · {activeSection.roleLabel}
              </div>
              <MarkdownMath
                content={activeSection.conventionNote}
                className="mt-1.5 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
              />
            </div>
          )}

          <div className="glass-surface rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              IB Paper 1 Examiner Checklist (Critères A, B &amp; C)
            </div>
            <ul className="space-y-1.5">
              {activeType.markschemeTips.map((tip, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                >
                  <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <MarkdownMath
                    content={tip}
                    className="text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                </li>
              ))}
            </ul>
          </div>

          {activeType.oralLinkPrompt && (
            <div className="glass-surface rounded-2xl border-l-[3px] border-l-amber-600 p-4 dark:border-l-amber-400">
              <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-300">
                <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
                Oral Individuel (IO) Cultural Link
              </div>
              <MarkdownMath
                content={activeType.oralLinkPrompt}
                className="text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FrenchTextTypeStudio;
