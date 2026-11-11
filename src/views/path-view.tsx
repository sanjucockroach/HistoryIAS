'use client';

import { BadgeCheck, GraduationCap, Landmark, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/lib/store';
import { COURSE_CATALOG } from '@/data/types';
import { BRAND } from '@/data/site';
import { AddToListButton } from '@/components/custom/cart-drawer';

export function PathView() {
  const { setView } = useApp();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
        Courses and fee structure
      </p>
      <h1 className="mt-3 max-w-2xl font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
        One academy, every examination — from Class 9 foundation to the interview board
      </h1>
      <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
        Every programme is taught by the Delhi-based faculty team across the
        Durgakund and Lanka campuses, with regular mock tests, app-based digital
        material and one-on-one mentoring built into the batch rhythm.
      </p>

      {/* Programme cards */}
      <section aria-label="Programmes" className="mt-12">
        <ol className="grid gap-6 lg:grid-cols-2">
          {COURSE_CATALOG.map((c, i) => (
            <li
              key={c.id}
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-[12px] font-medium text-primary-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {c.mode}
                  </span>
                </div>
                {c.badge && (
                  <span className="rounded-full bg-gold/15 px-3 py-1 font-mono text-[11px] tracking-wide text-gold-ink">
                    {c.badge}
                  </span>
                )}
              </div>
              <h2 className="mt-4 font-serif text-xl font-semibold">{c.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[13.5px] leading-snug">
                    <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <p>
                  <span className="text-[15px] font-medium">{c.price}</span>
                  <span className="ml-1.5 font-mono text-[11px] text-muted-foreground">
                    {c.period}
                  </span>
                </p>
                <AddToListButton id={c.id} label="Add to list" />
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Fee policy */}
      <section className="mt-14 rounded-xl border border-border bg-muted/60 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 font-serif text-xl font-semibold">
          <Wallet className="h-5 w-5 text-gold-ink" aria-hidden />
          How fees work here
        </h2>
        <div className="mt-4 grid gap-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
          <div>
            <p className="font-medium text-foreground">Fee on enquiry</p>
            <p className="mt-1.5">
              Fee structures are programme-specific and shared transparently by
              the admissions desk — call, WhatsApp or visit either campus for
              the exact schedule.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Testing built in</p>
            <p className="mt-1.5">
              Regular mock tests, including the GS SCORE offline test series,
              and periodic performance evaluations are part of every
              programme&apos;s rhythm — not an add-on.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Batch plans mapped same day</p>
            <p className="mt-1.5">
              Share your goal, stage and preferred timing at the desk; a batch
              plan at Durgakund or Lanka is mapped for you the same day. Call
              {` ${BRAND.phone}`} (8 AM – 9 PM).
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => setView('contact')}>Book a counselling visit</Button>
          <Button variant="outline" onClick={() => setView('news')}>
            Sample the teaching in today&apos;s briefing
          </Button>
        </div>
      </section>

      {/* Examination coverage strip */}
      <section className="mt-10 rounded-xl border border-border bg-primary p-6 text-primary-foreground sm:p-8">
        <div className="flex items-center gap-2.5">
          <Landmark className="h-5 w-5 text-gold" aria-hidden />
          <h2 className="font-serif text-xl font-semibold">
            Every examination, two campuses
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-foreground/85">
          Dedicated batches cover civil services, judiciary, law and academic
          entrances, teaching eligibility, defence and one-day government
          examinations — offline at Durgakund or Lanka, or online.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {['UPSC CSE', 'UPPSC', 'State PCS', 'Judiciary', 'CLAT', 'UGC NET/JRF', 'CUET', 'CTET', 'NDA', 'CDS', 'SSC', 'Banking', 'Railways'].map((e) => (
            <li
              key={e}
              className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 font-mono text-[12px] tracking-wide"
            >
              {e}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button variant="secondary" onClick={() => setView('contact')}>
            Ask about a batch
          </Button>
        </div>
      </section>
    </div>
  );
}
