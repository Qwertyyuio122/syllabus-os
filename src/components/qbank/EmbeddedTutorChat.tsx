'use client';

import * as React from 'react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { MarkdownMath } from '@/components/notes/MarkdownMath';
import { Button } from '@/components/ui/button';
import type { QuestionAttemptRow, TutorMessage } from '@/types/database';

interface EmbeddedTutorChatProps {
  attempt: QuestionAttemptRow;
  onAttemptUpdated?: (nextAttempt: QuestionAttemptRow) => void;
}

const QUICK_PROMPTS = [
  'Explain where I lost marks',
  'How does the command term apply here?',
  'Walk me through the full-mark answer step by step',
];

export function EmbeddedTutorChat({
  attempt,
  onAttemptUpdated,
}: EmbeddedTutorChatProps) {
  const [messages, setMessages] = React.useState<TutorMessage[]>(
    attempt.tutor_messages ?? [],
  );
  const [input, setInput] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    setMessages(attempt.tutor_messages ?? []);
  }, [attempt.id, attempt.tutor_messages]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || sending) return;

    setIsOpen(true);
    setError(null);
    setSending(true);

    const optimisticUserMsg: TutorMessage = {
      role: 'user',
      content: trimmed,
      created_at: new Date().toISOString(),
    };

    const previousMessages = messages;
    setMessages([...previousMessages, optimisticUserMsg]);
    setInput('');

    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attemptId: attempt.id,
          message: trimmed,
        }),
      });

      const payload = (await res.json()) as {
        error?: string;
        reply?: string;
        tutor_messages?: TutorMessage[];
        attempt?: QuestionAttemptRow;
      };

      if (!res.ok) {
        throw new Error(payload.error || 'Tutor request failed');
      }

      if (payload.attempt) {
        setMessages(payload.attempt.tutor_messages ?? []);
        onAttemptUpdated?.(payload.attempt);
      } else if (Array.isArray(payload.tutor_messages)) {
        setMessages(payload.tutor_messages);
        onAttemptUpdated?.({
          ...attempt,
          tutor_messages: payload.tutor_messages,
        });
      } else if (payload.reply) {
        const nextMessages: TutorMessage[] = [
          ...previousMessages,
          optimisticUserMsg,
          {
            role: 'assistant',
            content: payload.reply,
            created_at: new Date().toISOString(),
          },
        ];
        setMessages(nextMessages);
        onAttemptUpdated?.({
          ...attempt,
          tutor_messages: nextMessages,
        });
      }
    } catch (err) {
      setMessages(previousMessages);
      setInput(trimmed);
      setError(
        err instanceof Error
          ? err.message
          : 'Could not reach IB Tutor. Please try again.',
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="glass-panel mt-4 rounded-2xl">
      <div className="flex items-center justify-between px-4 py-2.5">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F] hover:opacity-80 cursor-pointer dark:text-[#F5F5F7]"
        >
          <MessageSquare className="h-3.5 w-3.5 text-[#6E6E73] dark:text-[#98989D]" />
          <span>Embedded IB Tutor</span>
          {messages.length > 0 && (
            <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]">
              {messages.length}
            </span>
          )}
        </button>

        {!isOpen && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsOpen(true)}
            className="h-7 px-2 text-xs"
          >
            Ask follow-up
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="border-t border-black/[0.06] px-4 py-3 dark:border-white/[0.08]">
          {/* Quick starter prompts when empty */}
          {messages.length === 0 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={sending}
                  onClick={() => void sendMessage(prompt)}
                  className="glass-pill rounded-full px-3 py-1 text-xs text-[#6E6E73] transition-colors hover:bg-white/95 hover:text-[#1D1D1F] cursor-pointer disabled:opacity-50 dark:text-[#98989D] dark:hover:bg-white/[0.12] dark:hover:text-[#F5F5F7]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Message history */}
          {messages.length > 0 && (
            <div className="mb-3 max-h-72 space-y-2.5 overflow-y-auto pr-1">
              {messages.map((msg, idx) => (
                <div
                  key={`${msg.created_at}-${idx}`}
                  className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'glass-panel ml-6 text-[#1D1D1F] dark:text-[#F5F5F7]'
                      : 'glass-surface mr-4 text-[#1D1D1F] dark:text-[#F5F5F7]'
                  }`}
                >
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#6E6E73] dark:text-[#98989D]">
                    {msg.role === 'user' ? 'You' : 'IB Examiner Tutor'}
                  </div>
                  <MarkdownMath content={msg.content} />
                </div>
              ))}
              {sending && (
                <div className="glass-surface mr-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs text-[#6E6E73] dark:text-[#98989D]">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Reviewing your answer against the markscheme…</span>
                </div>
              )}
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="mb-2.5 rounded-xl border border-[#E6D0D0] bg-[#FAF2F2]/90 px-3 py-2 text-xs text-[#9B3B3B] dark:border-[#4A2E2E] dark:bg-[#291F1F]/90 dark:text-[#E59898]"
            >
              {error}
            </div>
          )}

          {/* Input form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={sending}
              placeholder="Ask why a mark was missed or request a worked step…"
              aria-label="Ask IB Tutor a follow-up question"
              className="glass-pill h-8 flex-1 rounded-xl px-3 text-xs text-[#1D1D1F] placeholder:text-[#6E6E73] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 disabled:opacity-50 dark:text-[#F5F5F7] dark:placeholder:text-[#98989D] dark:focus:ring-[#F5F5F7]/20"
            />
            <Button
              type="submit"
              size="sm"
              variant="primary"
              disabled={sending || !input.trim()}
            >
              {sending ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Send className="h-3.5 w-3.5" />
              )}
              <span>Send</span>
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
