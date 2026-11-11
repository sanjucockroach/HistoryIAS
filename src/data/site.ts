import {
  BookOpenCheck,
  Compass,
  Landmark,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ---------------- Brand identity (client-supplied corporate details) ---------------- */

export const BRAND = {
  shortName: 'History IAS',
  name: 'History IAS Academy',
  legalName: 'History IAS Academy',
  established: 2007,
  establishedNote: 'April 2007',
  crestMotto: 'Become an IAS',
  tagline: 'Your Pathway to IAS, PCS, and UPSC Success',
  mission:
    'Guiding IAS, PCS and UPSC aspirants from Varanasi since 2007, with classroom discipline and app-backed preparation.',
  city: 'Varanasi',
  state: 'Uttar Pradesh',
  /** Primary admission helplines: call & WhatsApp. */
  phone: '+91 81880 10990',
  phoneAlt: '+91 95592 45904',
  whatsapp: 'https://wa.me/918188010990',
  whatsappNumber: '918188010990',
  hours: '8:00 AM – 9:00 PM, all days',
  rating: { score: '4.8', outOf: '5', count: '100+' },
  /** Main campus details (footer + contact default). */
  addressLine1: 'V Tower, 2nd Floor, Opposite Aakash Coaching (near Petrol Pump),',
  addressLine2: 'Durgakund Road / Kabir Nagar Road, Padampuri Colony, Bhelupur,',
  addressLine3: 'Varanasi, Uttar Pradesh 221005',
  landmark:
    'Two campuses in Varanasi — Durgakund (Bhelupur) and Lanka BHU Road — in a quiet study environment near BHU, with free parking.',
  social: {
    instagram: 'https://www.instagram.com/historyiasacademy',
    instagramLabel: 'History IAS Academy on Instagram',
    facebook: 'https://www.facebook.com/historyiasacademy',
    facebookLabel: 'History IAS Academy on Facebook',
  },
  app: {
    name: 'History IAS Academy app',
    storeUrl: 'https://play.google.com/store/search?q=History%20IAS%20Academy&c=apps',
    blurb: 'Digital tests and notes for online and hybrid students.',
  },
  /** Campuses as supplied by the academy. */
  campuses: [
    {
      id: 'durgakund',
      name: 'Durgakund Campus',
      role: 'Primary admissions campus',
      addressLine1: 'V Tower, 2nd Floor, Opposite Aakash Coaching (near Petrol Pump),',
      addressLine2: 'Durgakund Road / Kabir Nagar Road, Padampuri Colony, Bhelupur,',
      addressLine3: 'Varanasi, Uttar Pradesh 221005',
      phone: '+91 81880 10990',
      phoneNote: 'Call & WhatsApp (primary admissions)',
      mapQuery: 'History IAS Academy, Durgakund Road, Bhelupur, Varanasi, Uttar Pradesh 221005',
    },
    {
      id: 'lanka',
      name: 'Lanka Center',
      role: 'Near BHU · Ravidas Gate',
      addressLine1: 'First Floor, Lanka BHU Road, Ravidas Gate Chauraha,',
      addressLine2: 'Varanasi, Uttar Pradesh 221005',
      addressLine3: '',
      phone: '+91 96166 89110',
      phoneNote: 'Lanka center helpline',
      mapQuery: 'Lanka BHU Road, Ravidas Gate Chauraha, Varanasi, Uttar Pradesh 221005',
    },
  ] as Array<{
    id: string;
    name: string;
    role: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    phone: string;
    phoneNote: string;
    mapQuery: string;
  }>,
} as const;

/* ---------------- Learn pillars (the History IAS teaching order) ---------------- */

export const LEARN_PILLARS: Array<{ title: string; line: string; icon: LucideIcon }> = [
  {
    title: 'Civil services foundation',
    line:
      'UPSC CSE and UPPSC / State PCS taught as one continuous arc — prelims, mains and interview — so advanced topics always sit on a base you actually own.',
    icon: Compass,
  },
  {
    title: 'Tested like the real exam',
    line:
      'Regular mock tests, including the GS SCORE offline test series, with periodic performance evaluations that tell you exactly where the marks leak.',
    icon: BookOpenCheck,
  },
  {
    title: 'Hybrid by design',
    line:
      'Attend offline in Varanasi or study online through the History IAS Academy app — digital tests, notes and recorded support travel with you.',
    icon: Landmark,
  },
  {
    title: 'Defence and judiciary tracks',
    line:
      'NDA and CDS aspirants train under special guidance from Brigadier Vijay Sagar Dheman, while PCS Judiciary and CLAT batches run as dedicated law tracks.',
    icon: ShieldCheck,
  },
];

/* ---------------- Why choose us (client-supplied value props) ---------------- */

export const WHY_CHOOSE: string[] = [
  'Teaching since April 2007 — nearly two decades of IAS, PCS and UPSC mentoring in Varanasi',
  'Hybrid learning: offline classrooms plus online classes on the History IAS Academy app with digital tests and notes',
  'Regular mock tests, including the GS SCORE offline test series, with periodic performance evaluations',
  'One-on-one mentoring and dedicated doubt-clearing sessions',
  'Special guidance from Brigadier Vijay Sagar Dheman for NDA and CDS defence aspirants',
  'Air-conditioned classrooms and a quiet study environment near BHU',
  'Student seating area and free parking at the campus',
  'Rated 4.8 out of 5 by more than 100 students',
  'Two convenient campuses: Durgakund (Bhelupur) and Lanka BHU Road',
  'One roof from foundation to final: Classes 9–12 foundations up to the UPSC interview board',
];

/* ---------------- Audiences (client-supplied segments + exams) ---------------- */

export const AUDIENCES: string[] = [
  'UPSC CSE aspirants — IAS & IPS',
  'UPPSC and State PCS aspirants',
  'PCS Judiciary and CLAT aspirants',
  'UGC NET/JRF candidates',
  'CUET (UG & PG) candidates',
  'CTET and CHS entrance candidates',
  'NDA and CDS defence aspirants',
  'SSC, Banking and Railways aspirants',
  'Foundation students from Classes 9 to 12',
];

/* ---------------- Voices from the classroom (enrolled aspirants) ---------------- */

export interface Testimonial {
  name: string;
  service: string;
  initials: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'A. Singh',
    service: 'UPSC CSE · Classroom batch',
    initials: 'AS',
    quote:
      'The Delhi-based faculty teach the way the papers are actually set. Weekly mocks and the performance reviews told me precisely which GS papers were leaking marks.',
  },
  {
    name: 'S. Yadav',
    service: 'UPPSC · Offline batch',
    initials: 'SY',
    quote:
      'I shifted from self-study to the UPPSC batch and the difference is structure. One-on-one mentoring fixed my answer writing in a way YouTube never could.',
  },
  {
    name: 'R. Verma',
    service: 'PCS Judiciary · Evening batch',
    initials: 'RV',
    quote:
      'The judiciary batch keeps law plain and exam-focused. Doubt-clearing sessions run the same week the doubt appears, and the app notes carry my revision.',
  },
  {
    name: 'K. Patel',
    service: 'NDA · Defence track',
    initials: 'KP',
    quote:
      'Brigadier Vijay Sagar Dheman sir takes our defence sessions — hearing what the SSB actually demands changed how I prepared for everything, written and interview.',
  },
  {
    name: 'M. Gupta',
    service: 'SSC & Banking · One-day exams batch',
    initials: 'MG',
    quote:
      'App-based daily tests plus the offline mock cycle keep my speed honest. The Durgakund campus near the petrol pump is easy to reach after work.',
  },
  {
    name: 'N. Rai',
    service: 'CUET (PG) · Entrance batch',
    initials: 'NR',
    quote:
      'As a BHU student I use the Lanka center, five minutes from campus. Quiet study environment, AC classrooms and faculty who actually track my progress.',
  },
];

/* ---------------- FAQs (programmes and facilities as supplied by the academy) ---------------- */

export const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Which courses does History IAS Academy offer?',
    a: 'Comprehensive UPSC CSE coaching (IAS/IPS Prelims, Mains and Interview), UPPSC / State PCS batches, PCS Judiciary and CLAT preparation, UGC NET/JRF, CUET (UG & PG), CTET and CHS entrance coaching, NDA and CDS defence training, SSC, Banking and Railways batches, and foundation courses for Classes 9 to 12.',
  },
  {
    q: 'Where are the campuses located?',
    a: 'Two campuses in Varanasi: the Durgakund Campus at V Tower, 2nd Floor, opposite Aakash Coaching (near Petrol Pump), Durgakund Road, Padampuri Colony, Bhelupur; and the Lanka Center on the First Floor, Lanka BHU Road, at Ravidas Gate Chauraha.',
  },
  {
    q: 'What are the academy timings?',
    a: 'The academy operates 8:00 AM to 9:00 PM, all days. Batch-wise timetables are shared at the time of admission.',
  },
  {
    q: 'Is there an app for online learning?',
    a: 'Yes. The History IAS Academy app on Google Play carries digital tests and notes, so classroom and online students revise from the same material bank.',
  },
  {
    q: 'How does testing and mentoring work?',
    a: 'Regular mock tests — including the GS SCORE offline test series — are followed by periodic performance evaluations, doubt-clearing sessions and one-on-one mentoring for every enrolled student.',
  },
  {
    q: 'Who guides the defence aspirants?',
    a: 'NDA and CDS batches receive special guidance from Brigadier Vijay Sagar Dheman, alongside the regular Delhi-based faculty team.',
  },
  {
    q: 'What are the fees?',
    a: 'Fee structures are programme-specific and shared transparently on enquiry. Call or WhatsApp +91 81880 10990 (8 AM to 9 PM) or visit either campus for the exact schedule and batch plan.',
  },
  {
    q: 'Do you coach school students?',
    a: 'Yes. Foundation courses for Classes 9 to 12 build the NCERT base early, so civil services, entrance and one-day exam preparation starts with an advantage.',
  },
  {
    q: 'Which entrance exams besides UPSC are covered?',
    a: 'UGC NET/JRF, CUET (UG and PG), CTET and CHS entrance examinations all run as dedicated batches with their own test series.',
  },
  {
    q: 'How do I enrol?',
    a: 'Call or WhatsApp +91 81880 10990 or +91 95592 45904 between 8 AM and 9 PM, or visit the Durgakund Campus (Bhelupur) or the Lanka Center (BHU Road). The admissions desk maps your batch plan the same day.',
  },
];

/* ---------------- Leadership / mentorship ---------------- */

/**
 * Leadership framework as published by the academy: managed under Rudra Raj,
 * taught by a Delhi-based faculty team, with special guidance from
 * Brigadier Vijay Sagar Dheman for NDA and CDS (defence) aspirants.
 */
export const LEADERSHIP = {
  heading: 'Key leadership & mentors',
  title: 'Managed under Rudra Raj, mentored by a Delhi-based faculty team',
  role: 'Key leadership & mentors',
  academy: 'History IAS Academy',
  monogram: 'HA',
  signatureLine: 'Your Pathway to IAS, PCS, and UPSC Success',
  /** Mentorship features, each traced to the academy's programme sheet. */
  method: [
    'Managed under Rudra Raj, with day-to-day academic tracking at both campuses',
    'A Delhi-based faculty team teaches the core civil services subjects',
    'Special guidance from Brigadier Vijay Sagar Dheman for NDA and CDS aspirants',
    'Regular mock tests, including the GS SCORE offline test series',
    'Periodic performance evaluations with one-on-one mentoring',
    'Doubt-clearing sessions and app-based digital tests and notes',
  ],
  tribute: 'Become an IAS — the promise written on our crest.',
  tributeBy: 'The History IAS Academy crest',
  sourceNote:
    'Leadership, programmes and facilities as published by History IAS Academy, Varanasi. Batch allotments and fee structures are shared at the admissions desk.',
} as const;

export const ABOUT_FEATURES: string[] = [
  'Air-conditioned classrooms at both campuses',
  'Dedicated student seating area and free parking',
  'Quiet study environment near BHU',
  'Hybrid learning on the History IAS Academy app — digital tests and notes',
  'Regular mock tests including the GS SCORE offline test series',
  'One-on-one mentoring and doubt-clearing sessions',
];
