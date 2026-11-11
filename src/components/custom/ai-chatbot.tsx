'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, utils } from 'animejs';
import { MessageCircle, Send, X } from 'lucide-react';

import { BRAND } from '@/data/site';
import { CHAT_STARTERS, matchIntent } from '@/data/chatbot';
import { prefersReducedMotion } from '@/components/custom/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatMessage {
  id: number;
  role: 'bot' | 'user';
  text: string;
  ctaHref?: string;
}

const WELCOME = `Namaste! I am the ${BRAND.name} assistant. I can brief you on courses, campuses, timings, the academy app, test series and mentoring — all answered right here on your device. For admissions and fee schedules, our desk replies fastest on WhatsApp.`;

const FALLBACK_TEXT = `I answer from the academy's own published information — courses, campuses, timings, the app, test series and mentoring. For anything more specific, our admissions team replies fastest on WhatsApp.`;

/** wa.me deep link with a prefilled message, optionally quoting the user's question. */
function whatsappHref(lastQuestion: string): string {
  let text = `Hi ${BRAND.name}! I was chatting with your website assistant and would like to know more.`;
  if (lastQuestion) text += ` My question: "${lastQuestion}"`;
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const idRef = useRef(0);
  const fallbackCountRef = useRef(0);
  const typingTimerRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  /* Floating crest button pops in whenever it (re)mounts. */
  useLayoutEffect(() => {
    if (open || !fabRef.current || prefersReducedMotion()) return;
    animate(fabRef.current, {
      opacity: [0, 1],
      scale: [0.55, 1],
      duration: 560,
      ease: 'outBack(1.7)',
    });
  }, [open]);

  /* Panel springs open from its bottom-right origin. */
  useEffect(() => {
    if (!open || !panelRef.current || prefersReducedMotion()) return;
    utils.set(panelRef.current, { transformOrigin: '100% 100%' });
    animate(panelRef.current, {
      opacity: [0, 1],
      scale: [0.93, 1],
      y: [18, 0],
      duration: 380,
      ease: 'outCubic',
    });
  }, [open]);

  /* Newest bubble glides in; also runs for the typing indicator. */
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const last = scrollRef.current?.lastElementChild as HTMLElement | null;
    if (last) {
      animate(last, {
        opacity: [0, 1],
        y: [10, 0],
        scale: [0.98, 1],
        duration: 300,
        ease: 'outQuad',
      });
    }
  }, [messages.length, typing]);

  /* Keep the transcript pinned to the newest message. */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  /* Escape closes the panel; focus moves to the input on open. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    inputRef.current?.focus();
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  /* Clear any pending "thinking" timer on unmount. */
  useEffect(() => {
    return () => {
      if (typingTimerRef.current !== null) window.clearTimeout(typingTimerRef.current);
    };
  }, []);

  const openPanel = () => {
    setOpen(true);
    if (messages.length === 0) {
      const id = ++idRef.current;
      setMessages([{ id, role: 'bot', text: WELCOME }]);
    }
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;

    const userId = ++idRef.current;
    setMessages((prev) => [...prev, { id: userId, role: 'user', text }]);
    setInput('');
    setTyping(true);

    /* Fully local resolution — matchIntent never touches the network. */
    typingTimerRef.current = window.setTimeout(() => {
      const intent = matchIntent(text);
      const priorFallbacks = fallbackCountRef.current;
      fallbackCountRef.current = intent ? 0 : priorFallbacks + 1;
      const showCta =
        !intent || intent.action === 'whatsapp' || priorFallbacks >= 2;

      const botId = ++idRef.current;
      setMessages((prev) => [
        ...prev,
        {
          id: botId,
          role: 'bot',
          text: intent ? intent.answer : FALLBACK_TEXT,
          ctaHref: showCta ? whatsappHref(text) : undefined,
        },
      ]);
      setTyping(false);
    }, 400);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={openPanel}
          ref={fabRef}
          aria-label="Open the History IAS assistant"
          aria-expanded={open}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-primary shadow-lg ring-2 ring-gold/40 transition-transform duration-150 hover:scale-105"
        >
          <Image
            src="/brand/logo.png"
            alt="History IAS Academy assistant"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
        </button>
      )}

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="History IAS assistant chat"
          className="fixed bottom-[5.5rem] right-5 z-40 flex h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
            <Image
              src="/brand/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full ring-1 ring-white/30"
            />
            <div className="min-w-0 flex-1">
              <p className="font-serif text-[15px] font-semibold leading-tight">
                History IAS Assistant
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground/70">
                Instant answers · runs locally
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-md p-1.5 transition-colors duration-150 hover:bg-primary-foreground/10"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            aria-live="polite"
            className="scroll-slim flex-1 space-y-3 overflow-y-auto p-3"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === 'user'
                    ? 'ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-primary px-3 py-2 text-[13px] leading-relaxed text-primary-foreground'
                    : 'max-w-[85%] rounded-lg rounded-tl-sm border border-border bg-muted px-3 py-2 text-[13px] leading-relaxed text-foreground'
                }
              >
                <p className="whitespace-pre-line">{message.text}</p>
                {message.ctaHref && (
                  <a
                    href={message.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-3 py-2 text-[12.5px] font-medium text-secondary-foreground transition-opacity duration-150 hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Continue on WhatsApp
                  </a>
                )}
              </div>
            ))}

            {typing && (
              <div
                role="status"
                aria-label="Assistant is typing"
                className="max-w-[85%] rounded-lg rounded-tl-sm border border-border bg-muted px-3 py-2"
              >
                <span className="flex items-center gap-1">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: `${dot * 150}ms` }}
                    />
                  ))}
                </span>
              </div>
            )}
          </div>

          {/* Quick replies (first exchanges only) */}
          {messages.length <= 3 && (
            <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-2">
              {CHAT_STARTERS.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  onClick={() => send(starter)}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-[11.5px] text-foreground transition-colors duration-150 hover:bg-muted"
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          {/* Composer */}
          <form
            className="flex gap-2 border-t border-border p-3"
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
          >
            <Input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about courses, campuses, timings…"
              aria-label="Message the assistant"
              className="h-9 flex-1 text-[13px]"
            />
            <Button
              type="submit"
              size="icon"
              aria-label="Send message"
              disabled={!input.trim() || typing}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
