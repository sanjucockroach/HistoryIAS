'use client';

import {
  ArrowRight,
  Map,
  Quote,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useApp } from '@/lib/store';
import { Reveal } from '@/components/custom/reveal';
import { BRAND, TESTIMONIALS, FAQS, LEARN_PILLARS, WHY_CHOOSE, AUDIENCES } from '@/data/site';

export function HomeView() {
  const { setView } = useApp();

  return (
    <div>
      {/* Hero: centred editorial statement, no crest, no stat table */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 text-center sm:px-6 sm:pt-20 lg:pt-24">
        <Reveal delay={60} y={14}>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
            UPSC · UPPSC &amp; State PCS · Judiciary · Defence · Varanasi
          </p>
        </Reveal>
        <Reveal delay={180} y={24}>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold leading-[1.08]">
            Your Pathway to IAS, PCS, and UPSC Success.
          </h1>
        </Reveal>
        <Reveal delay={320}>
          <p className="mx-auto mt-5 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
            Coaching for UPSC CSE, UPPSC and State PCS, judiciary, entrance and
            defence examinations — taught since April 2007 from the Durgakund and
            Lanka BHU Road campuses in Varanasi, by a Delhi-based faculty team,
            with hybrid learning on the History IAS Academy app.
          </p>
        </Reveal>
        <Reveal delay={470} y={14}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-11" onClick={() => setView('news')}>
              Read today&apos;s briefing
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
            </Button>
            <Button size="lg" variant="outline" className="h-11" onClick={() => setView('atlas')}>
              <Map className="mr-1.5 h-4 w-4" aria-hidden />
              Explore the 3D geo atlas
            </Button>
          </div>
        </Reveal>
        <Reveal delay={640} y={12}>
          <p className="mx-auto mt-8 max-w-xl font-serif text-[15px] italic leading-relaxed text-foreground/70">
            &ldquo;Become an IAS.&rdquo; — the promise written on our crest.
            <span className="mt-1 block font-mono text-[11px] not-italic tracking-wide text-muted-foreground">
              HISTORY IAS ACADEMY · SINCE 2007
            </span>
          </p>
        </Reveal>
      </section>

      {/* The History IAS method */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
              The History IAS method
            </h2>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Officer-disciplined, exam-honest, app-backed
            </p>
          </div>
          <Reveal group gap={110} className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                word: 'Guide',
                line: 'Managed under Rudra Raj and taught by a Delhi-based faculty team, every batch follows a planned academic calendar across the Durgakund and Lanka campuses.',
              },
              {
                word: 'Blend',
                line: 'Attend offline in Varanasi or study online through the History IAS Academy app — digital tests and notes keep preparation continuous between classes.',
              },
              {
                word: 'Test',
                line: 'Regular mock tests, including the GS SCORE offline test series, with periodic performance evaluations that show exactly where the marks leak.',
              },
              {
                word: 'Mentor',
                line: 'One-on-one mentoring and doubt-clearing sessions for every aspirant, with special defence guidance from Brigadier Vijay Sagar Dheman for NDA and CDS.',
              },
            ].map((item, i) => (
              <div key={item.word} className={i > 0 ? 'lg:border-l lg:border-border lg:pl-10' : ''}>
                <p className="font-serif text-xl font-semibold text-primary dark:text-primary">
                  {item.word}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What you'll learn: zig-zag editorial list */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="max-w-xl font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold leading-tight">
            What you learn here, in the order it matters
          </h2>
        </Reveal>
        <Reveal group gap={90} className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {LEARN_PILLARS.map((p, i) => (
            <article key={p.title} className="flex gap-4">
              <p.icon
                className={`mt-0.5 h-5 w-5 shrink-0 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}
                aria-hidden
              />
              <div>
                <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Ten value props: a genuine ranked sequence */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold leading-tight">
              Ten reasons aspirants choose History IAS Academy
            </h2>
          </Reveal>
          <Reveal group gap={70} as="ol" className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {WHY_CHOOSE.map((b, i) => (
              <li key={b} className="flex items-baseline gap-4 border-b border-white/10 pb-4">
                <span className="font-mono text-[12px] text-primary-foreground/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] leading-snug">{b}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="max-w-xs font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold leading-tight">
              Whom the academy is for
            </h2>
          </Reveal>
          <Reveal group gap={45} as="ul" className="flex flex-wrap gap-2.5">
            {AUDIENCES.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card px-4 py-2 text-[13.5px] leading-none text-foreground/85"
              >
                {a}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Voices from the classroom: enrolled aspirants, horizontal scroll */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
              In their own words
            </h2>
            <p className="text-sm text-muted-foreground">
              Aspirants across our classroom, online and hybrid batches
            </p>
          </Reveal>
        </div>
        <Reveal
          group
          gap={130}
          className="scroll-slim flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="w-[320px] shrink-0 snap-start rounded-xl border border-border bg-background p-5"
            >
              <Quote className="h-4 w-4 text-gold" aria-hidden />
              <blockquote className="mt-3 text-[13.5px] leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-[11px] font-medium text-primary-foreground"
                  aria-hidden
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block font-mono text-[11px] tracking-wide text-muted-foreground">
                    {t.service}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
            Questions aspirants ask before joining
          </h2>
        </Reveal>
        <Reveal group gap={70} className="mt-8">
          <Accordion type="single" collapsible>
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-[15px] font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Reveal y={16}>
            <Trophy className="mx-auto h-5 w-5 text-gold" aria-hidden />
            <h2 className="mx-auto mt-4 max-w-xl font-serif text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-tight">
              Become an IAS — begin at Durgakund or Lanka.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Visit either campus, or call and WhatsApp +91 81880 10990 between
              8 AM and 9 PM, any day of the week.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="h-11" onClick={() => setView('path')}>
                See courses &amp; fees
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
              </Button>
              <Button size="lg" variant="outline" className="h-11" onClick={() => setView('contact')}>
                Talk to admissions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
