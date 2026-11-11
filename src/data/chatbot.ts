import { BRAND } from './site';

/* ---------------- Local intent bank (zero network calls) ---------------- */

export interface ChatIntent {
  id: string;
  patterns: string[];
  answer: string;
  action?: 'whatsapp';
}

export const CHAT_STARTERS: string[] = [
  'Courses offered',
  'Fee structure',
  'Campus locations',
  'Batch timings',
  'NDA & CDS coaching',
  'Talk to admissions',
];

const PRIMARY_CAMPUS = BRAND.campuses[0];
const LANKA_CAMPUS = BRAND.campuses[1];

/**
 * Joins a campus's address lines from BRAND, dropping any third-party
 * institute landmark so the assistant never names another coaching brand.
 */
function campusAddress(campus: (typeof BRAND.campuses)[number]): string {
  return [campus.addressLine1, campus.addressLine2, campus.addressLine3]
    .filter((line) => line.length > 0)
    .join(' ')
    .replace(/Opposite [^,]*,\s*/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const CHAT_INTENTS: Array<ChatIntent> = [
  {
    id: 'greeting',
    patterns: [
      'hello',
      'hi',
      'hii',
      'hey',
      'namaste',
      'namaskar',
      'greetings',
      'good morning',
      'good afternoon',
      'good evening',
      'who are you',
      'what are you',
    ],
    answer: `Namaste, and welcome to ${BRAND.name}! Ask me about courses, campuses, batch timings, fees, the academy app, test series or mentoring — every answer comes from the academy's own published information, right here on your device. For anything personal to your preparation, our admissions desk is one message away on WhatsApp.`,
  },
  {
    id: 'courses',
    patterns: [
      'courses offered',
      'course',
      'courses',
      'programme',
      'programmes',
      'program',
      'programs',
      'what do you offer',
      'what do you teach',
      'which exams',
      'exams covered',
      'classes offered',
    ],
    answer: `${BRAND.name} runs the full arc under one roof: UPSC CSE (IAS and IPS), UPPSC and State PCS, PCS Judiciary and CLAT, UGC NET/JRF, CUET (UG and PG), CTET, CHS entrance, NDA and CDS defence training, SSC, Banking and Railways batches, and foundation courses for Classes 9 to 12. Every programme pairs classroom teaching with regular mock tests and app-based digital tests and notes. Ask about any programme by name and I will brief you on it.`,
  },
  {
    id: 'fees',
    patterns: [
      'fee structure',
      'fees structure',
      'fee',
      'fees',
      'price',
      'prices',
      'cost',
      'costs',
      'how much',
      'payment',
      'instalment',
      'installment',
      'discount',
      'scholarship',
    ],
    answer: `Fee structures are programme-specific and shared transparently on enquiry, so you only ever pay for the batch plan that fits you. Call ${BRAND.phone} (${BRAND.hours}) or visit either campus for the exact fee schedule of your programme. Our desk also shares fee details fastest on WhatsApp.`,
    action: 'whatsapp',
  },
  {
    id: 'campuses',
    patterns: [
      'campus locations',
      'campus',
      'campuses',
      'location',
      'locations',
      'where are you',
      'where is the academy',
      'address',
      'addresses',
      'branch',
      'branches',
      'how to reach',
      'directions',
      'durgakund',
      'lanka',
      'bhelupur',
      'bhu road',
    ],
    answer: `We teach at two campuses in ${BRAND.city}. The ${PRIMARY_CAMPUS.name} (${PRIMARY_CAMPUS.role}) sits at ${campusAddress(PRIMARY_CAMPUS)} — near the Petrol Pump on Durgakund Road — with helpline ${PRIMARY_CAMPUS.phone}. The ${LANKA_CAMPUS.name} (${LANKA_CAMPUS.role}) is at ${campusAddress(LANKA_CAMPUS)}, helpline ${LANKA_CAMPUS.phone}. Both offer a quiet study environment with free parking for students.`,
  },
  {
    id: 'timings',
    patterns: [
      'batch timings',
      'class timings',
      'timing',
      'timings',
      'class time',
      'hours',
      'opening hours',
      'open',
      'opens',
      'what time',
      'schedule',
      'when are classes',
      'closed',
      'sunday',
    ],
    answer: `The academy operates ${BRAND.hours}, and batch-wise timetables are shared at the time of admission. Multiple slots through the day keep the schedule workable for college students and working aspirants alike. For the current batch calendar, the admissions desk can confirm the slot that fits your routine.`,
  },
  {
    id: 'contact',
    patterns: [
      'contact number',
      'phone number',
      'mobile number',
      'whatsapp number',
      'contact',
      'phone',
      'number',
      'call',
      'mobile',
      'whatsapp',
      'email',
      'helpline',
    ],
    answer: `Our admissions helplines are ${BRAND.phone} and ${BRAND.phoneAlt}, answered ${BRAND.hours}. The primary number doubles as our WhatsApp line, so you can message whenever it suits you and the desk will reply. You can also walk in at either campus — ask me for the campus locations if you need directions.`,
  },
  {
    id: 'admission',
    patterns: [
      'talk to admissions',
      'admission process',
      'take admission',
      'how to join',
      'new batch',
      'admission',
      'admissions',
      'enrol',
      'enroll',
      'enrolment',
      'enrollment',
      'join',
      'register',
      'registration',
      'apply',
      'seat',
      'seats',
    ],
    answer: `Admissions are open across all programmes, and the desk maps your batch plan the same day you visit. Call ${BRAND.phone} or drop in at the ${PRIMARY_CAMPUS.name} (${PRIMARY_CAMPUS.role}) — the ${LANKA_CAMPUS.name} works just as well. Our team replies fastest on WhatsApp.`,
    action: 'whatsapp',
  },
  {
    id: 'upsc',
    patterns: [
      'upsc cse',
      'civil services exam',
      'ias officer',
      'ips officer',
      'civil service',
      'civil services',
      'upsc exam',
      'upsc',
      'cse',
      'ias',
      'ips',
      'prelims',
      'mains',
      'optional',
    ],
    answer: `UPSC CSE — the examination for the IAS and IPS — is our flagship programme, taught as one continuous arc from Prelims to Mains to the board. A Delhi-based faculty team handles the core subjects, and regular mock tests with periodic performance evaluations keep your preparation measured. You can prepare offline at our ${BRAND.city} campuses or online through the ${BRAND.app.name}.`,
  },
  {
    id: 'uppsc',
    patterns: [
      'state services',
      'state pcs',
      'up pcs',
      'pcs exam',
      'uppsc',
      'uppcs',
      'pcs',
      'bpsc',
      'mppsc',
      'ro aro',
    ],
    answer: `UPPSC and other State PCS examinations run as dedicated batches that mirror the UPSC arc — Prelims, Mains and interview readiness — tuned to the state syllabus. State-specific sections, answer writing and current affairs get separate attention, backed by the same mock-test and evaluation cycle. Offline batches run at both ${BRAND.city} campuses, with online support on the ${BRAND.app.name}.`,
  },
  {
    id: 'judiciary',
    patterns: [
      'judiciary',
      'judicial',
      'pcs j',
      'clat',
      'law',
      'judge',
      'legal',
      'llb',
    ],
    answer: `PCS Judiciary and CLAT preparation run as dedicated law tracks with their own schedule and test series. Teaching stays plain and exam-focused — bare acts and case reading for judiciary mains, comprehension and legal reasoning for CLAT — so the syllabus never turns into confusion. Doubt-clearing sessions run the same week the doubt appears.`,
  },
  {
    id: 'entrance',
    patterns: [
      'entrance exam',
      'entrance exams',
      'school entrance',
      'ugc net',
      'entrance',
      'net',
      'jrf',
      'ugc',
      'cuet',
      'ctet',
      'chs',
      'bhu',
    ],
    answer: `Beyond civil services, dedicated batches prepare UGC NET/JRF, CUET (UG and PG), CTET and CHS entrance candidates, each with its own classes and test series. The same discipline applies — structured syllabus coverage, digital tests and notes on the ${BRAND.app.name}, and periodic performance evaluations. Tell me which exam you are targeting and the admissions desk will map the current batch for you.`,
  },
  {
    id: 'defence',
    patterns: [
      'armed forces',
      'air force',
      'defence exam',
      'ssb interview',
      'ssb preparation',
      'nda & cds',
      'nda and cds',
      'nda',
      'cds',
      'defence',
      'defense',
      'ssb',
      'navy',
      'military',
      'ota',
      'ima',
    ],
    answer: `NDA and CDS aspirants train in dedicated defence batches under special guidance from Brigadier Vijay Sagar Dheman, alongside the regular faculty team. Preparation covers the written papers and the SSB mindset — what the board actually demands — so written and interview readiness grow together. Classroom seats are available at both ${BRAND.city} campuses, with app-based support for revision between sessions.`,
  },
  {
    id: 'ssc-banking',
    patterns: [
      'one day exam',
      'bank po',
      'bank clerk',
      'ssc',
      'banking',
      'bank',
      'railways',
      'railway',
      'rrb',
      'cgl',
      'chsl',
      'mts',
      'ibps',
    ],
    answer: `SSC, Banking and Railways aspirants train in focused one-day exam batches that drill speed and accuracy question by question. App-based daily tests on the ${BRAND.app.name} run alongside the offline mock cycle, keeping your pace honest between classes. Slots through the day make the batches workable alongside college or a job.`,
  },
  {
    id: 'foundation',
    patterns: [
      'foundation classes',
      'foundation',
      'class 9',
      'class 10',
      'class 11',
      'class 12',
      'classes 9',
      '9 to 12',
      '9 12',
      '9th',
      '10th',
      '11th',
      '12th',
      'school students',
      'school student',
      'school',
    ],
    answer: `Foundation courses for Classes 9 to 12 build the NCERT base early, so civil services, entrance and one-day exam preparation later begins with an advantage. School syllabus and competitive orientation move together under the same testing discipline and periodic performance evaluations as senior batches. Classes run at both ${BRAND.city} campuses.`,
  },
  {
    id: 'app',
    patterns: [
      'online classes',
      'mobile app',
      'google play',
      'play store',
      'playstore',
      'digital tests',
      'study material',
      'online batch',
      'app',
      'apps',
      'online',
      'digital',
      'notes',
      'recorded',
      'hybrid',
    ],
    answer: `The ${BRAND.app.name} on Google Play carries digital tests and notes, so classroom and online students revise from the same material bank. Online and hybrid students attend their live classes and keep preparation moving through the app between sessions. Search for ${BRAND.app.name} on the Play Store, or ask our desk for the direct install link on WhatsApp.`,
  },
  {
    id: 'tests',
    patterns: [
      'mock test',
      'mock tests',
      'practice test',
      'practice tests',
      'test series',
      'gs score',
      'mock',
      'mocks',
      'test',
      'tests',
      'evaluation',
      'evaluations',
    ],
    answer: `Testing is continuous at the academy: regular mock tests, including the GS SCORE offline test series, are followed by periodic performance evaluations that show exactly where the marks leak. Digital tests on the ${BRAND.app.name} keep daily practice running between classroom mocks. The evaluation feedback feeds straight into your one-on-one mentoring plan.`,
  },
  {
    id: 'mentoring',
    patterns: [
      'doubt clearing',
      'one on one',
      'personal attention',
      'mentoring',
      'mentorship',
      'mentor',
      'doubt',
      'doubts',
      'guidance',
    ],
    answer: `Every enrolled student receives one-on-one mentoring and dedicated doubt-clearing sessions — a doubt is resolved the same week it appears. Mentors read your mock-test evaluations and adjust the plan, whether that means more answer-writing practice, a lighter revision load or a strategy reset. It is the same discipline that has guided ${BRAND.city} aspirants since ${BRAND.established}.`,
  },
  {
    id: 'facilities',
    patterns: [
      'study environment',
      'air conditioned',
      'ac classrooms',
      'facilities',
      'infrastructure',
      'amenities',
      'facility',
      'parking',
      'classroom',
      'classrooms',
      'seating',
      'ac',
    ],
    answer: `Both campuses offer air-conditioned classrooms, a dedicated student seating area and free parking, so long study days stay comfortable. The ${LANKA_CAMPUS.name} adds a quiet study environment near BHU, ideal for deep work between classes. Everything is arranged so you can sit down and study the moment you arrive.`,
  },
  {
    id: 'rating',
    patterns: [
      'google review',
      'google reviews',
      'star rating',
      'is it good',
      'rating',
      'ratings',
      'review',
      'reviews',
      'feedback',
      'ranked',
      'stars',
      'reputation',
    ],
    answer: `${BRAND.name} is rated ${BRAND.rating.score} out of ${BRAND.rating.outOf} by more than ${BRAND.rating.count} students. Teaching since ${BRAND.establishedNote} from ${BRAND.city}, the academy pairs a Delhi-based faculty team with app-backed preparation and a continuous mock-test cycle. You are welcome to visit either campus and see a batch before you decide.`,
  },
  {
    id: 'faculty',
    patterns: [
      'who manages',
      'who runs',
      'who teaches',
      'rudra raj',
      'teaching staff',
      'faculty',
      'teacher',
      'teachers',
      'leadership',
      'director',
      'management',
      'brigadier',
      'staff',
      'team',
    ],
    answer: `The academy is managed under Rudra Raj, with day-to-day academic tracking at both campuses. Core civil services subjects are taught by a Delhi-based faculty team, and NDA and CDS batches receive special guidance from Brigadier Vijay Sagar Dheman. The academy runs ${BRAND.hours}, so you can meet the team at either campus on any working day.`,
  },
];

const MATCH_THRESHOLD = 1;
const PHRASE_WEIGHT = 4;
const LONG_WORD_WEIGHT = 2;

/** Lowercase, strip punctuation (keeping `&`), collapse whitespace. */
function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9&\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Deterministic local matcher — no network, no APIs.
 * Phrase hits weigh most; longer single keywords weigh more than short ones;
 * the best-scoring intent above a small threshold wins (ties go to the
 * earlier intent in the bank).
 */
export function matchIntent(input: string): ChatIntent | null {
  const text = normalize(input);
  if (!text) return null;
  const padded = ` ${text} `;

  let best: ChatIntent | null = null;
  let bestScore = 0;

  for (const intent of CHAT_INTENTS) {
    let score = 0;
    for (const pattern of intent.patterns) {
      if (!padded.includes(` ${pattern} `)) continue;
      score += pattern.includes(' ')
        ? PHRASE_WEIGHT
        : pattern.length >= 6
          ? LONG_WORD_WEIGHT
          : 1;
    }
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }

  return bestScore >= MATCH_THRESHOLD ? best : null;
}
