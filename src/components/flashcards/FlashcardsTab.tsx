'use client';

import * as React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCw,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { MarkdownMath } from '@/components/notes/MarkdownMath';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { FlashcardRow, SyllabusTopicRow } from '@/types/database';

interface FlashcardsTabProps {
  userId: string;
  flashcards: FlashcardRow[];
  topics: SyllabusTopicRow[];
  onFlashcardsChange: (nextFlashcards: FlashcardRow[]) => void;
}

export function FlashcardsTab({
  userId,
  flashcards,
  topics,
  onFlashcardsChange,
}: FlashcardsTabProps) {
  const [topicFilter, setTopicFilter] = React.useState<string>('all');
  const [hideMastered, setHideMastered] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [savingId, setSavingId] = React.useState<string | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const topicMap = React.useMemo(() => {
    const map: Record<string, SyllabusTopicRow> = {};
    for (const t of topics) map[t.id] = t;
    return map;
  }, [topics]);

  const availableTopics = React.useMemo(() => {
    const usedIds = new Set(
      flashcards.map((f) => f.topic_id).filter(Boolean) as string[],
    );
    return topics
      .filter((t) => usedIds.has(t.id))
      .sort((a, b) => a.sort_order - b.sort_order);
  }, [flashcards, topics]);

  const filteredCards = React.useMemo(() => {
    return flashcards.filter((card) => {
      if (topicFilter !== 'all' && card.topic_id !== topicFilter) return false;
      if (hideMastered && card.mastered) return false;
      return true;
    });
  }, [flashcards, topicFilter, hideMastered]);

  React.useEffect(() => {
    setCurrentIndex(0);
    setFlipped(false);
  }, [topicFilter, hideMastered]);

  React.useEffect(() => {
    if (currentIndex >= filteredCards.length && filteredCards.length > 0) {
      setCurrentIndex(filteredCards.length - 1);
    }
  }, [currentIndex, filteredCards.length]);

  const currentCard = filteredCards[currentIndex] ?? null;

  const toggleMastered = React.useCallback(
    async (card: FlashcardRow) => {
      if (savingId) return;
      setErrorMsg(null);
      const nextMastered = !card.mastered;
      const previous = flashcards;

      onFlashcardsChange(
        flashcards.map((c) =>
          c.id === card.id ? { ...c, mastered: nextMastered } : c,
        ),
      );
      setSavingId(card.id);

      try {
        const supabase = createClient();
        const { error } = await supabase
          .from('flashcards')
          .update({ mastered: nextMastered })
          .eq('id', card.id)
          .eq('user_id', userId);

        if (error) {
          throw error;
        }
      } catch (err) {
        onFlashcardsChange(previous);
        setErrorMsg(
          err instanceof Error
            ? err.message
            : 'Could not update flashcard status.',
        );
      } finally {
        setSavingId(null);
      }
    },
    [flashcards, onFlashcardsChange, savingId, userId],
  );

  const goPrev = React.useCallback(() => {
    if (filteredCards.length === 0) return;
    setFlipped(false);
    setCurrentIndex((idx) =>
      idx > 0 ? idx - 1 : filteredCards.length - 1,
    );
  }, [filteredCards.length]);

  const goNext = React.useCallback(() => {
    if (filteredCards.length === 0) return;
    setFlipped(false);
    setCurrentIndex((idx) =>
      idx < filteredCards.length - 1 ? idx + 1 : 0,
    );
  }, [filteredCards.length]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        target?.isContentEditable ||
        target?.getAttribute('role') === 'combobox'
      ) {
        return;
      }

      if (e.code === 'Space') {
        if (filteredCards.length === 0) return;
        e.preventDefault();
        setFlipped((v) => !v);
      } else if (e.key === 'ArrowLeft') {
        if (filteredCards.length === 0) return;
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        if (filteredCards.length === 0) return;
        e.preventDefault();
        goNext();
      } else if (e.key.toLowerCase() === 'm' && currentCard) {
        e.preventDefault();
        void toggleMastered(currentCard);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCard, filteredCards.length, goNext, goPrev, toggleMastered]);

  const masteredTotal = flashcards.filter((c) => c.mastered).length;
  const masteredFiltered = filteredCards.filter((c) => c.mastered).length;
  const deckProgressPct =
    filteredCards.length > 0
      ? Math.round(((currentIndex + 1) / filteredCards.length) * 100)
      : 0;

  return (
    <div className="space-y-5">
      {/* Filter & Deck Stats */}
      <div className="glass-surface flex flex-col gap-3 rounded-2xl p-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="w-56">
            <Select value={topicFilter} onValueChange={setTopicFilter}>
              <SelectTrigger aria-label="Filter flashcards by topic">
                <SelectValue placeholder="All topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All topics</SelectItem>
                {availableTopics.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.code} · {t.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            size="sm"
            variant={hideMastered ? 'primary' : 'outline'}
            onClick={() => setHideMastered((v) => !v)}
          >
            <span>{hideMastered ? 'Showing Unmastered' : 'Hide Mastered'}</span>
          </Button>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-[#6E6E73] dark:text-[#98989D]">
          <span>
            {masteredTotal} / {flashcards.length} mastered overall
          </span>
        </div>
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="rounded-xl border border-[#E6D0D0] bg-[#FAF2F2]/90 px-3.5 py-2.5 text-xs text-[#9B3B3B] dark:border-[#4A2E2E] dark:bg-[#291F1F]/90 dark:text-[#E59898]"
        >
          {errorMsg}
        </div>
      )}

      {currentCard ? (
        <div className="mx-auto max-w-2xl space-y-4">
          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between font-mono text-xs tabular-nums text-[#6E6E73] dark:text-[#98989D]">
              <span>
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
              <span>
                {masteredFiltered} mastered in view
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
              <div
                className="h-full rounded-full bg-[#1D1D1F] transition-all duration-200 dark:bg-[#F5F5F7]"
                style={{ width: `${deckProgressPct}%` }}
              />
            </div>
          </div>

          {/* Interactive 3D Glass Flip Card */}
          <div
            role="button"
            tabIndex={0}
            aria-label={
              flipped
                ? 'Flashcard back showing answer. Click or press Space to flip to prompt.'
                : 'Flashcard front showing prompt. Click or press Space to flip to answer.'
            }
            onClick={() => setFlipped((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                setFlipped((v) => !v);
              }
            }}
            data-testid="flashcard-surface"
            className="flashcard-scene block w-full cursor-pointer rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25"
          >
            <div
              className="flashcard-rotator relative grid min-h-[290px]"
              data-flipped={flipped ? 'true' : 'false'}
            >
              {/* Front Face: Prompt */}
              <div
                aria-hidden={flipped}
                className={`flashcard-face glass-panel glass-interactive relative col-start-1 row-start-1 flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-[visibility] delay-[260ms] duration-0 motion-reduce:delay-0 ${
                  flipped ? 'invisible pointer-events-none' : 'visible'
                }`}
              >
                <div
                  aria-hidden="true"
                  className="flashcard-sheen pointer-events-none absolute inset-0"
                />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono uppercase">
                      Prompt
                    </Badge>
                    {currentCard.topic_id && topicMap[currentCard.topic_id] && (
                      <Badge variant="subtle" className="font-mono">
                        {topicMap[currentCard.topic_id].code}
                      </Badge>
                    )}
                  </div>
                  {currentCard.mastered && (
                    <Badge variant="success" className="font-mono">
                      Mastered
                    </Badge>
                  )}
                </div>

                <div className="relative z-10 my-6 text-base leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <MarkdownMath content={currentCard.front_markdown} />
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E6E73] dark:text-[#98989D]">
                  <span>Click card or press Space to flip</span>
                  <span className="font-mono">← / → navigate · M mastered</span>
                </div>
              </div>

              {/* Back Face: Answer */}
              <div
                aria-hidden={!flipped}
                className={`flashcard-face flashcard-face-back glass-panel glass-interactive relative col-start-1 row-start-1 flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-[visibility] delay-[260ms] duration-0 motion-reduce:delay-0 ${
                  flipped ? 'visible' : 'invisible pointer-events-none'
                }`}
              >
                <div
                  aria-hidden="true"
                  className="flashcard-sheen pointer-events-none absolute inset-0"
                />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="font-mono uppercase">
                      Answer
                    </Badge>
                    {currentCard.topic_id && topicMap[currentCard.topic_id] && (
                      <Badge variant="subtle" className="font-mono">
                        {topicMap[currentCard.topic_id].code}
                      </Badge>
                    )}
                  </div>
                  {currentCard.mastered && (
                    <Badge variant="success" className="font-mono">
                      Mastered
                    </Badge>
                  )}
                </div>

                <div className="relative z-10 my-6 text-base leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <MarkdownMath content={currentCard.back_markdown} />
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E6E73] dark:text-[#98989D]">
                  <span>Click card or press Space to flip</span>
                  <span className="font-mono">← / → navigate · M mastered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={goPrev}>
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Previous</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onKeyDown={(e) => {
                  if (e.code === 'Space') e.preventDefault();
                }}
                onClick={() => setFlipped((v) => !v)}
              >
                <RotateCw className="h-3.5 w-3.5" />
                <span>{flipped ? 'Show Prompt' : 'Flip Card'}</span>
              </Button>
              <Button variant="outline" size="sm" onClick={goNext}>
                <span>Next</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            <Button
              variant={currentCard.mastered ? 'primary' : 'outline'}
              size="sm"
              disabled={savingId === currentCard.id}
              onClick={() => void toggleMastered(currentCard)}
            >
              <Check className="h-3.5 w-3.5" />
              <span>
                {currentCard.mastered ? 'Mastered' : 'Mark Mastered'}
              </span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-[#E6E6E4] px-6 py-10 text-center dark:border-[#2E2E2E]">
          <p className="text-sm font-medium text-[#37352F] dark:text-[#EBEBEB]">
            {flashcards.length === 0
              ? 'No flashcards yet for this subject.'
              : 'No flashcards match your current filter.'}
          </p>
          <p className="mt-1 text-xs text-[#787774] dark:text-[#9B9A97]">
            {hideMastered
              ? 'All flashcards in this filter are mastered. Toggle "Showing Unmastered" to review them again.'
              : 'Generate study suites from Classroom Materials to add active-recall flashcards.'}
          </p>
        </div>
      )}
    </div>
  );
}
