'use client';

import Image from 'next/image';
import { BadgeCheck, Landmark, ScrollText, GraduationCap, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/lib/store';
import { BRAND, ABOUT_FEATURES, LEADERSHIP } from '@/data/site';

export function AboutView() {
  const { setView } = useApp();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
            About the academy
          </p>
          <h1 className="mt-3 font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
            Nearly two decades of IAS, PCS and UPSC teaching in Varanasi
          </h1>
          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-muted-foreground">
            <p>
              History IAS Academy was established in {BRAND.establishedNote} with one
              promise written on its crest: {BRAND.crestMotto}. Managed under Rudra
              Raj and taught by a Delhi-based faculty team, the academy runs
              comprehensive programmes for UPSC CSE, UPPSC and State PCS, judiciary,
              entrance, defence and one-day government examinations — so that
              preparation is a timetable, not a slogan.
            </p>
            <p>
              The academy is built for real schedules. Offline classrooms run at the
              Durgakund and Lanka campuses, online classes and digital tests travel on
              the History IAS Academy app, and the quiet study environment near BHU
              keeps long hours productive. Mock tests, evaluations and one-on-one
              mentoring carry every batch from foundation to the interview board.
            </p>
          </div>

          <div className="rule-ring mt-10 border-t pt-8">
            <h2 className="font-serif text-xl font-semibold">What the campus features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {ABOUT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure strip */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src="/brand/smart-classroom.png"
                alt="Air-conditioned smart classroom at History IAS Academy: whiteboard and projector on a deep navy wall, tiered desks"
                width={864}
                height={1152}
                className="h-56 w-full object-cover object-top"
              />
              <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Air-conditioned smart classrooms · both campuses
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src="/brand/study-hall.png"
                alt="Quiet study hall at History IAS Academy near BHU: long reading desks with lamps and bookshelves"
                width={1152}
                height={864}
                className="h-56 w-full object-cover"
              />
              <figcaption className="border-t border-border p-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Quiet study environment near BHU
              </figcaption>
            </figure>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <ScrollText className="h-5 w-5 text-gold" aria-hidden />
            <blockquote className="mt-3 font-serif text-[17px] italic leading-relaxed">
              {BRAND.mission}
            </blockquote>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
              {BRAND.tagline} · {BRAND.legalName}
            </figcaption>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-lg font-semibold">At a glance</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ['Established', BRAND.establishedNote],
                ['Campuses', 'Durgakund (Bhelupur) & Lanka BHU Road'],
                ['Learning', 'Hybrid — offline + History IAS Academy app'],
                ['Testing', 'Regular mocks · GS SCORE offline series'],
                ['Mentoring', 'One-on-one & doubt-clearing sessions'],
                ['Rating', `${BRAND.rating.score}/5 from ${BRAND.rating.count} students`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start justify-between gap-4 border-b border-border pb-2.5 last:border-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="max-w-[60%] text-right leading-snug text-foreground/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      {/* Mentorship panel: the academy's own leadership claim */}
      <section
        aria-labelledby="leadership-heading"
        className="mt-16 rounded-xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5">
          <GraduationCap className="h-5 w-5 text-gold-ink" aria-hidden />
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
            {LEADERSHIP.role}
          </p>
        </div>
        <h2 id="leadership-heading" className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
          {LEADERSHIP.title}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Mentor board card */}
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full ring-1 ring-gold/60"
              aria-hidden
            >
              <span className="font-serif text-4xl font-semibold text-gold">
                {LEADERSHIP.monogram}
              </span>
            </div>
            <p className="mt-5 font-serif text-xl font-semibold leading-snug">
              The Mentor Board
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/80">
              Managed under Rudra Raj and taught by a Delhi-based faculty team,
              with Brigadier Vijay Sagar Dheman guiding defence aspirants.
            </p>
            <p className="mt-4 border-t border-primary-foreground/20 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/60">
              {LEADERSHIP.academy}
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Inside the classroom
            </h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {LEADERSHIP.method.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  <span>{m}</span>
                </li>
              ))}
            </ul>

            <figure className="mt-7 border-l-2 border-gold pl-4">
              <Quote className="h-4 w-4 text-gold-ink" aria-hidden />
              <blockquote className="mt-1.5 font-serif text-[16.5px] italic leading-relaxed text-foreground/90">
                &ldquo;{LEADERSHIP.tribute}&rdquo;
              </blockquote>
              <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {LEADERSHIP.tributeBy}
              </figcaption>
            </figure>

            <p className="mt-6 font-mono text-[10.5px] leading-relaxed text-muted-foreground/80">
              {LEADERSHIP.sourceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Public values, taught as practice */}
      <section className="mt-16 rounded-xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <Landmark className="h-5 w-5 text-gold-ink" aria-hidden />
          <h2 className="font-serif text-xl font-semibold">
            Key public values in public administration
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Taught explicitly in class because the Mains and Interview test whether you can
          practise them, not recite them.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {[
            'Impartiality',
            'Justice',
            'Honesty',
            'Fairness',
            'Probity',
            'Continuity',
            'Confidentiality',
            'Accountability',
            'Transparency',
            'Responsiveness',
          ].map((v) => (
            <li
              key={v}
              className="rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[12px] tracking-wide text-foreground/80"
            >
              {v}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button onClick={() => setView('path')}>Explore courses &amp; fees</Button>
          <Button variant="outline" onClick={() => setView('news')}>
            See a day of classes in the briefing
          </Button>
        </div>
      </section>
    </div>
  );
}
