// Shared data contracts for the History IAS Academy platform.
// All data agents MUST follow these exact shapes.

export type GeoLayerId =
  | 'places'
  | 'rivers'
  | 'mountains'
  | 'straits'
  | 'ports'
  | 'dams'
  | 'unesco'
  | 'ecology';

export interface GeoLayerMeta {
  id: GeoLayerId;
  label: string;
  short: string;
  color: string; // hex used for globe dots/lines
  description: string;
  syllabus: string;
}

export interface GeoBase {
  id: string; // kebab-case, stable
  name: string;
  layer: GeoLayerId;
  country?: string;
  region?: string; // state/sea/continent context
  whyInNews: string; // 1-2 sentences, exam-relevant, why it is in news 2025-26
  examFacts: string[]; // 3-5 crisp facts (numbers, treaties, tributaries, years)
  syllabusTags: string[]; // e.g. "Prelims", "GS1 Geography", "GS2 IR", "GS3 Environment"
  sourceHint?: string; // e.g. "PIB", "The Hindu", "Survey of India"
}

/** A point location on the globe. */
export interface GeoPoint extends GeoBase {
  layer: Exclude<GeoLayerId, 'rivers'>;
  lat: number; // decimal degrees, south negative
  lng: number; // decimal degrees, west negative
  /** Optional real-world footprint radius in km, for nicer visuals */
  sizeKm?: number;
}

/** A river rendered as a polyline through [lat, lng] vertices, source -> mouth. */
export interface GeoRiver extends GeoBase {
  layer: 'rivers';
  path: Array<[number, number]>; // 8-20 vertices, ordered source to mouth
  lengthKm?: number;
  origin?: string;
  outfall?: string;
}

/** Union used by the globe. */
export type GeoEntry = GeoPoint | GeoRiver;

export function isRiver(entry: GeoEntry): entry is GeoRiver {
  return entry.layer === 'rivers';
}

/* ---------------- Current affairs contracts ---------------- */

export type CaCategory =
  | 'Polity & Governance'
  | 'Economy'
  | 'International Relations'
  | 'Environment'
  | 'Science & Tech'
  | 'Defence & Security'
  | 'Society & Culture'
  | 'Agriculture';

export interface CaPracticeQuestion {
  /** "prelims" = objective MCQ, "mains" = descriptive question */
  kind: 'prelims' | 'mains';
  question: string;
  /** MCQ options (prelims only) */
  options?: string[];
  /** index of correct option (prelims only) */
  answerIndex?: number;
  /** explanation for prelims / pointer structure for mains */
  explanation: string;
  /** e.g. "GS2", "GS3", "Essay" */
  gs?: string;
}

export interface CaArticle {
  id: string; // kebab-case, stable
  date: string; // ISO date "2026-10-11"
  title: string;
  category: CaCategory;
  source: string; // "PIB", "The Hindu", "Indian Express", "Down To Earth"...
  isPib: boolean; // true when sourced from PIB analysis
  hook: string; // one-line memory hook for fast revision
  overview: string; // 2-4 sentence plain-language summary
  prelimsPoints: string[]; // 3-6 crisp factual bullets
  mainsPoints: string[]; // 3-6 analytical bullets
  additionalPoints: string[]; // 2-5 context/extra-angle bullets
  keyTerms: Array<{ term: string; meaning: string }>;
  practice: CaPracticeQuestion[]; // 1-3 questions
  gsTags: string[]; // e.g. ["GS2", "GS3"]
  syllabusTags: string[]; // e.g. ["Governance", "Welfare Schemes"]
}

/* ---------------- Commerce contracts (fee matrix as supplied by the academy) ---------------- */

export interface CourseItem {
  id: string;
  name: string;
  kind: 'course' | 'membership' | 'test-series' | 'book' | 'webinar';
  mode?: string; // e.g. "Offline (Classroom)", "Online", "Hybrid"
  blurb: string;
  price: string; // formatted fee, e.g. "₹1,00,300", or "Contact Admissions Desk"
  period?: string; // e.g. "one-time · 2-year validity"
  highlights: string[];
  badge?: string;
}

export const COURSE_CATALOG: CourseItem[] = [
  {
    id: 'upsc-cse-comprehensive',
    name: 'UPSC CSE Comprehensive Programme',
    kind: 'course',
    mode: 'Offline (Classroom) & Online',
    blurb:
      'Complete Civil Services preparation for IAS and IPS — Prelims, Mains and Interview — taught by the Delhi-based faculty team with total study materials and batch-wise mentoring.',
    price: 'Fee on enquiry',
    period: 'session-wise batches',
    highlights: [
      'Prelims, Mains and Interview stages covered in one arc',
      'Delhi-based faculty team for core GS subjects',
      'Total study materials with app-based digital notes',
      'One-on-one mentoring and doubt-clearing sessions',
    ],
    badge: 'Flagship',
  },
  {
    id: 'uppsc-state-pcs',
    name: 'UPPSC / State PCS Batches',
    kind: 'course',
    mode: 'Offline & Online',
    blurb:
      'Dedicated Provincial Civil Services preparation for UPPSC and other State PCS examinations — syllabus-mapped classes, answer writing and state-specific current affairs.',
    price: 'Fee on enquiry',
    period: 'session-wise batches',
    highlights: [
      'UPPSC-focused GS classes with state-specific content',
      'Answer writing practice with evaluation',
      'Prelims and mains integrated timetable',
      'App-based digital tests between classes',
    ],
  },
  {
    id: 'law-judiciary',
    name: 'PCS Judiciary & CLAT',
    kind: 'course',
    mode: 'Offline & Online',
    blurb:
      'The law track: PCS Judiciary preparation for aspiring civil judges and CLAT coaching for law entrances, taught as dedicated batches with their own test series.',
    price: 'Fee on enquiry',
    period: 'batch-wise schedules',
    highlights: [
      'PCS Judiciary: bare-act discipline plus mains answer writing',
      'CLAT: legal reasoning, comprehension and current awareness',
      'Dedicated law test series',
      'Evening batches that suit college schedules',
    ],
  },
  {
    id: 'higher-education-entrance',
    name: 'Higher Education & Entrance',
    kind: 'course',
    mode: 'Offline & Online',
    blurb:
      'Entrance preparation beyond civil services: UGC NET/JRF for academia, CUET for undergraduate and postgraduate admissions, CTET for teachers and CHS entrance for BHU school admission.',
    price: 'Fee on enquiry',
    period: 'exam-cycle batches',
    highlights: [
      'UGC NET/JRF paper pattern drills',
      'CUET (UG & PG) subject-wise modules',
      'CTET child-development and pedagogy coaching',
      'CHS entrance batches for BHU aspirants',
    ],
  },
  {
    id: 'defence-nda-cds',
    name: 'NDA & CDS Defence Training',
    kind: 'course',
    mode: 'Offline & Online',
    blurb:
      'Specialized training for the National Defence Academy and Combined Defence Services examinations, with special guidance from Brigadier Vijay Sagar Dheman for defence aspirants.',
    price: 'Fee on enquiry',
    period: 'batch-wise schedules',
    highlights: [
      'Mathematics and GAT preparation for NDA',
      'CDS English, GK and Elementary Maths modules',
      'SSB-oriented guidance from Brigadier Vijay Sagar Dheman',
      'Physical-fitness and personality development focus',
    ],
    badge: 'Defence edge',
  },
  {
    id: 'one-day-govt-exams',
    name: 'SSC, Banking & Railways',
    kind: 'course',
    mode: 'Offline & Online',
    blurb:
      'One-day government examination batches for SSC, Banking and Railways — speed, accuracy and a daily app-test rhythm that keeps scores climbing.',
    price: 'Fee on enquiry',
    period: 'batch-wise schedules',
    highlights: [
      'Quantitative aptitude, reasoning and English drills',
      'Daily app-based practice tests',
      'Exam-day strategy and mock cycles',
      'Batch timings that suit working aspirants',
    ],
  },
  {
    id: 'foundation-classes-9-12',
    name: 'Foundation Courses (Classes 9–12)',
    kind: 'course',
    mode: 'Offline (Classroom)',
    blurb:
      'Early-advantage foundation courses for school students — NCERT-first learning that later becomes civil services, entrance and one-day exam strength.',
    price: 'Fee on enquiry',
    period: 'academic-year batches',
    highlights: [
      'NCERT-first coverage across subjects',
      'School syllabus supported alongside',
      'Reading, writing and reasoning habits built early',
      'A clear runway into civil services preparation',
    ],
  },
  {
    id: 'gs-score-test-series',
    name: 'GS SCORE Offline Test Series',
    kind: 'test-series',
    mode: 'Offline',
    blurb:
      'The GS SCORE offline test series conducted at the campus — exam-hall simulation with periodic performance evaluations and mentoring after every test.',
    price: 'Fee on enquiry',
    period: 'series-wise enrolment',
    highlights: [
      'UPSC-pattern GS papers under exam timing',
      'Evaluated copies with written feedback',
      'Performance evaluation and rank positioning',
      'Post-test mentoring conversation',
    ],
  },
];
