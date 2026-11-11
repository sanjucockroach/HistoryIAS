'use client';

import { useState } from 'react';
import { Clock, MapPin, Phone, Send, MessageCircle, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { BRAND } from '@/data/site';
import { Reveal } from '@/components/custom/reveal';

export function ContactView() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error('Please add your name and a short message.');
      return;
    }
    setSending(true);
    // Local, honest handling: the admissions desk reads enquiries on call/WhatsApp.
    setTimeout(() => {
      setSending(false);
      setName('');
      setGoal('');
      setMessage('');
      toast.success('Noted locally. The admissions desk follows up on your call or WhatsApp message.', {
        description: `For faster response, reach ${BRAND.phone} between 8 AM and 9 PM.`,
      });
    }, 600);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal y={16}>
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">Contact</p>
        <h1 className="mt-3 max-w-2xl font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
          Reach the academy in Varanasi
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {BRAND.landmark}
        </p>
      </Reveal>

      {/* Campus cards with maps */}
      <section aria-label="Campuses" className="mt-10">
        <Reveal group gap={150} className="grid gap-6 lg:grid-cols-2">
          {BRAND.campuses.map((campus) => (
          <article
            key={campus.id}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
                  <MapPin className="h-4.5 w-4.5 text-gold-ink" aria-hidden />
                  {campus.name}
                </h2>
                <span className="rounded-full bg-secondary/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-secondary">
                  {campus.role}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {campus.addressLine1}
                <br />
                {campus.addressLine2}
                {campus.addressLine3 ? (
                  <>
                    <br />
                    {campus.addressLine3}
                  </>
                ) : null}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href={`tel:${campus.phone.replace(/\s/g, '')}`}
                  className="rounded-sm font-medium hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {campus.phone}
                </a>
                <span className="font-mono text-[11px] text-muted-foreground">· {campus.phoneNote}</span>
              </p>
            </div>
            <iframe
              title={`Google Map — ${campus.name}, History IAS Academy, Varanasi`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(campus.mapQuery)}&output=embed`}
              className="mt-auto h-56 w-full border-t border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </article>
        ))}
        </Reveal>
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal y={18}>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="c-name">Your name</Label>
              <Input
                id="c-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="As written on your ID"
                autoComplete="name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="c-goal">Which programme are you asking about?</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger id="c-goal" className="w-full">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upsc-cse">UPSC CSE (IAS / IPS)</SelectItem>
                  <SelectItem value="uppsc-pcs">UPPSC / State PCS</SelectItem>
                  <SelectItem value="judiciary-clat">PCS Judiciary / CLAT</SelectItem>
                  <SelectItem value="entrance">UGC NET/JRF · CUET · CTET · CHS</SelectItem>
                  <SelectItem value="defence">NDA / CDS (Defence)</SelectItem>
                  <SelectItem value="one-day">SSC / Banking / Railways</SelectItem>
                  <SelectItem value="foundation">Foundation (Classes 9–12)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-msg">Message</Label>
            <Textarea
              id="c-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell the admissions desk about your goal, current stage and preferred campus"
              rows={5}
              required
            />
          </div>
          <Button type="submit" size="lg" disabled={sending} className="h-11">
            <Send className="mr-1.5 h-4 w-4" aria-hidden />
            {sending ? 'Saving note locally' : 'Send to the academy'}
          </Button>
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">
            This preview stores your note on this device only, no data leaves your browser.
            For admissions and fee schedules, call or WhatsApp {BRAND.phone}, or visit
            either campus between 8 AM and 9 PM.
          </p>
        </form>
        </Reveal>

        <Reveal group gap={110} className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Clock className="h-4.5 w-4.5 text-gold-ink" aria-hidden />
              Operational hours
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {BRAND.hours}
              <br />
              Batch-wise timetables are shared at the time of admission.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Phone className="h-4.5 w-4.5 text-gold-ink" aria-hidden />
              Admissions desk
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  WhatsApp: {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href={`tel:${BRAND.phoneAlt.replace(/\s/g, '')}`}
                  className="rounded-sm hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {BRAND.phoneAlt}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
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
                <Facebook className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
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
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Star className="h-4.5 w-4.5 text-gold-ink" aria-hidden />
              Student rating
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-serif text-2xl font-semibold text-foreground">
                {BRAND.rating.score}
              </span>{' '}
              out of 5, averaged across more than {BRAND.rating.count} student
              reviews.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Send className="h-4.5 w-4.5 text-gold" aria-hidden />
              Fee counselling
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
              Fee structures are programme-specific and shared transparently on
              enquiry. Bring your academic details and preferred timing to
              either campus; a batch plan is mapped for you the same day.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
