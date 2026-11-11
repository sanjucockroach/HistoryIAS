'use client';

import { useApp, VIEWS } from '@/lib/store';
import { Phone, MapPin, Clock, Instagram, Facebook, Smartphone } from 'lucide-react';
import { BRAND } from '@/data/site';

/** Fixed founding-to-present year span: avoids a server/client Date mismatch
 *  at year boundaries (server UTC vs visitor timezone). */
const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  const { setView } = useApp();

  return (
    <footer className="mt-auto border-t border-border bg-card/60">
      {/* Public values strip: the civic values the syllabus itself teaches */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
          {['Impartiality', 'Justice', 'Honesty', 'Fairness', 'Probity', 'Accountability', 'Transparency'].map(
            (v) => (
              <span key={v} className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {v}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <p className="font-serif text-lg font-semibold leading-snug">
            {BRAND.name}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {BRAND.crestMotto} · Since {BRAND.established}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {BRAND.tagline}. Established in {BRAND.establishedNote} at Durgakund,
            Varanasi, the academy prepares aspirants for UPSC CSE, State PCS,
            judiciary, entrance, defence and one-day government examinations
            across its Durgakund and Lanka BHU Road campuses.
          </p>
          <a
            href={BRAND.app.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-sm font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            <Smartphone className="h-3.5 w-3.5" aria-hidden />
            {BRAND.app.name} · Google Play
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {VIEWS.map((v) => (
              <li key={v.id}>
                <button
                  className="rounded-sm text-left hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                  onClick={() => setView(v.id)}
                >
                  {v.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Reach the academy
          </p>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>
                <span className="font-medium text-foreground/85">Durgakund Campus:</span>{' '}
                {BRAND.addressLine1} {BRAND.addressLine2} {BRAND.addressLine3}
                <br />
                <span className="font-medium text-foreground/85">Lanka Center:</span> First
                Floor, Lanka BHU Road, Ravidas Gate Chauraha, Varanasi – 221005
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span className="flex flex-wrap gap-x-3 gap-y-1">
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {BRAND.phone}
                </a>
                <a
                  href={`tel:${BRAND.phoneAlt.replace(/\s/g, '')}`}
                  className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {BRAND.phoneAlt}
                </a>
                <a
                  href={`tel:${BRAND.campuses[1].phone.replace(/\s/g, '')}`}
                  className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {BRAND.campuses[1].phone} (Lanka)
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              <span>{BRAND.hours}</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0" aria-hidden />
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              >
                {BRAND.social.instagramLabel}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4 shrink-0" aria-hidden />
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              >
                {BRAND.social.facebookLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-center font-mono text-[11px] text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <span>
            Copyright {COPYRIGHT_YEAR} {BRAND.legalName}. All rights reserved.
          </span>
          <span>{BRAND.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
