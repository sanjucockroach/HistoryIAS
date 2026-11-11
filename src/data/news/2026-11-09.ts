import type { CaArticle } from '../types';

// Current Affairs Briefing for Monday, 9 November 2026.
// PIB items are grounded in Department of Justice / NALSA releases for
// National Legal Services Day and Agriculture Ministry rabi-season advisories;
// other items are prepared from The Hindu and Indian Express coverage of the week.

export const NEWS_2026_11_09: CaArticle[] = [
  {
    id: 'national-legal-services-day-nalsa-2026',
    date: '2026-11-09',
    title: 'National Legal Services Day: NALSA Marks Another Year of Free Legal Aid and Mega Lok Adalats',
    category: 'Polity & Governance',
    source: 'PIB',
    isPib: true,
    hook: '9 November 1995: the Legal Services Authorities Act came alive \u2014 and every Lok Adalat award since has carried the force of a decree.',
    overview:
      'National Legal Services Day is observed across the country today, marking the day the Legal Services Authorities Act, 1987 came into force in 1995. The National Legal Services Authority (NALSA) is using the occasion to flag its nationwide network of Lok Adalats, legal-aid clinics and pro bono panels \u2014 the machinery built to deliver on Article 39A\u2019s promise that the operation of the legal system promotes justice on a basis of equal opportunity.',
    prelimsPoints: [
      'National Legal Services Day is observed every 9 November to commemorate the enforcement of the Legal Services Authorities Act, 1987, which came into force on 9 November 1995.',
      'Article 39A, inserted by the 42nd Constitutional Amendment Act, 1976, directs the State to provide free legal aid and ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.',
      'NALSA, constituted under the 1987 Act, works under the Chief Justice of India as Patron-in-Chief; State Legal Services Authorities are headed by the respective High Court Chief Justices and District Legal Services Authorities by District Judges.',
      'Lok Adalats have statutory status: their awards are deemed decrees of a civil court, are final and binding, and no appeal lies against them \u2014 Permanent Lok Adalats for public utility services can even decide disputes on merits, with pecuniary jurisdiction up to \u20b91 crore.',
      'Free legal aid is a right for specified categories \u2014 women, children, SC/ST members, persons with disabilities, industrial workmen, persons in custody and those below the notified income threshold.',
    ],
    mainsPoints: [
      'Lok Adalats decongest courts \u2014 where pending cases run into crores \u2014 through consensual, cost-free and final resolution; yet the no-appeal design raises a fairness question when parties feel institutional pressure to settle.',
      'Access to justice is part of the Article 21 guarantee: Hussainara Khatoon (1979) tied free legal aid to speedy trial, and Anita Kushwaha (2016) identified affordable access, timely justice and effective adjudication as its pillars \u2014 undertrial-heavy prisons show the gap between right and remedy.',
      'The quality of aid matters as much as its availability: empanelled lawyer incentives, Paralegal Volunteers, Tele-Law connectivity and the Nyaya Bandhu pro bono architecture determine whether legal aid is meaningful or merely formal.',
      'Legal services extend beyond litigation \u2014 mediation, victim compensation, pre-litigation counselling and legal literacy in schools \u2014 building the culture of rights that the Preamble\u2019s promise of social, economic and political justice presumes.',
    ],
    additionalPoints: [
      'NALSA organises National Lok Adalats at periodic intervals, disposing of lakhs of pending and pre-litigation matters in a single day; e-Lok Adalats and virtual hearing modes have widened reach since the pandemic.',
      'The Mediation Act, 2023 created a Mediation Council and institutionalised pre-litigation mediation, adding a formal rung to the ADR ladder alongside Lok Adalats and arbitration.',
      'District Legal Services Authorities also run jail legal-aid clinics, de-addiction and rehabilitation drives and victim compensation schemes \u2014 the \u2018legal services\u2019 idea is deliberately broader than court work.',
    ],
    keyTerms: [
      { term: 'Lok Adalat', meaning: 'A statutory forum under the Legal Services Authorities Act where disputes are settled by compromise; its award is a deemed decree with no appeal.' },
      { term: 'Permanent Lok Adalat', meaning: 'A standing Lok Adalat for public utility services (transport, electricity, insurance, etc.) which, failing settlement, may decide the dispute on merits up to \u20b91 crore.' },
      { term: 'Tele-Law', meaning: 'A legal-aid delivery model that connects rural citizens with panel lawyers through CSCs and video conferencing, extending NALSA\u2019s reach to remote areas.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to Lok Adalats, consider the following statements: 1) The award of a Lok Adalat is deemed to be a decree of a civil court. 2) A party aggrieved by a Lok Adalat award may appeal against it before the High Court. 3) A Permanent Lok Adalat, if the parties fail to reach a settlement, may decide a public utility services dispute on merits. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 2,
        explanation:
          'Lok Adalat awards are deemed decrees and no appeal lies against them (statement 2 is wrong). Permanent Lok Adalats for public utility services may decide the dispute on merits if settlement fails, and that award is final and binding.',
        gs: 'GS2',
      },
      {
        kind: 'mains',
        question:
          '"Access to justice is the heart of the constitutional promise of equality." In light of National Legal Services Day, examine how Lok Adalats and legal services institutions bridge the gap between right and remedy, and where they fall short. (150 words)',
        explanation:
          'Structure: open with Article 39A and Article 21 case law; map the NALSA-DSLSA delivery stack (Lok Adalats, legal-aid clinics, Tele-Law); evaluate strengths (cost, speed, volume) against limits (consent quality, aid quality, awareness); conclude with judicial-reform links \u2014 case pendency, undertrials, ADR institutionalisation.',
        gs: 'GS2',
      },
    ],
    gsTags: ['GS2'],
    syllabusTags: ['Governance', 'Judiciary', 'Access to Justice'],
  },
  {
    id: 'rabi-sowing-oilseeds-self-sufficiency-2026',
    date: '2026-11-09',
    title: 'Rabi Season Gathers Pace as the Push for Oilseed Self-Sufficiency Intensifies',
    category: 'Agriculture',
    source: 'PIB',
    isPib: true,
    hook: 'As wheat and mustard rows go into the field, the edible-oil import bill is the autumn question every year.',
    overview:
      'With the rabi window open, sowing of wheat, pulses and oilseeds is picking up across states, and the Agriculture Ministry\u2019s seasonal advisories are again leaning on seed minikits, cluster demonstrations and mission-mode support. The policy subtext is edible-oil self-sufficiency: India imports over half of its vegetable-oil requirement, and the rabi oilseed basket \u2014 led by mustard \u2014 is where the government is concentrating its diversification push.',
    prelimsPoints: [
      'Rabi crops are sown from October to December and harvested in spring; the major rabi basket is wheat, gram (chana), mustard, barley and peas, grown largely on residual soil moisture and irrigation.',
      'India is the world\u2019s largest importer of vegetable oils, meeting over half of domestic edible-oil demand through imports \u2014 mainly palm oil from Indonesia and Malaysia, and soybean and sunflower oils from South America and the Black Sea region.',
      'The National Mission on Edible Oils \u2013 Oil Palm (NMEO-OP), launched in 2021 with an outlay of \u20b911,040 crore, targets additional oil palm area with special focus on the North-East and Andaman & Nicobar Islands; NMEO-Oilseeds (2024) carries a \u20b910,880 crore outlay to expand oilseed production.',
      'Rapeseed-mustard is the principal rabi oilseed, with Rajasthan the largest producer; the National Food Security Mission\u2019s oilseeds and pulses components support area expansion through free seed minikits and demonstrations of newer high-yielding varieties.',
      'Wheat is the flagship rabi cereal: procurement at MSP into the Food Corporation\u2019s buffer stabilises prices, and terminal heat during March grain-filling is the best-known climate risk to output.',
    ],
    mainsPoints: [
      'Edible-oil import dependence is a strategic food-security exposure: global price spikes, export restrictions by supplier countries and freight shocks transmit quickly to Indian kitchen budgets, so domestic oilseed missions are trade-policy instruments as much as farm programmes.',
      'Oil palm expansion carries ecological trade-offs \u2014 high water demand and biodiversity concerns in ecologically fragile North-East and island landscapes \u2014 so zoning, sustainability safeguards and smallholder models are essential to the mission\u2019s credibility.',
      'Rabi wheat is temperature-sensitive: repeated terminal-heat episodes have pushed ICAR\u2019s varietal pipeline toward heat-tolerant wheat, timely sowing advisories and contingency planning \u2014 climate adaptation embedded in the sowing calendar itself.',
      'MSP-led incentives skew the rabi basket towards the rice-wheat belt, straining groundwater; diversification into pulses and oilseeds succeeds only when backed by assured procurement, remunerative prices and storage, not announcements alone.',
    ],
    additionalPoints: [
      'Agri-stack digital crop survey and DBT-linked input delivery are improving sowing-data fidelity \u2014 policy is now planned on parcel-level data rather than decade-old assumptions.',
      'Duty adjustments on refined edible oils have been used repeatedly as a price-management lever, illustrating the trade-off between consumer inflation and processor/farmer margins.',
      'e-NAM, FPO aggregation and warehouse-based credit (Negotiable Warehouse Receipts) shape how rabi producers convert harvest into price \u2014 market reform is the silent half of the sowing story.',
    ],
    keyTerms: [
      { term: 'Rabi season', meaning: 'The winter cropping season (sown October\u2013December, harvested April\u2013June), dependent on residual moisture and irrigation; distinct from kharif (monsoon) crops.' },
      { term: 'NMEO-OP', meaning: 'National Mission on Edible Oils \u2013 Oil Palm, a 2021 Central scheme promoting oil palm cultivation and processing to cut edible-oil import dependence.' },
      { term: 'Terminal heat stress', meaning: 'Rising temperatures during the grain-filling stage that shrink wheat yields; a recurring climate risk to the rabi harvest.' },
      { term: 'Minimum Support Price', meaning: 'The announced procurement price at which government agencies buy notified crops, anchoring farmer income expectations.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to the National Mission on Edible Oils \u2013 Oil Palm (NMEO-OP), which of the following statements is/are correct? 1) It was launched in 2021 with a special focus on the North-Eastern states and the Andaman & Nicobar Islands. 2) It replaces the Minimum Support Price mechanism for all oilseeds. 3) It aims to expand domestic oil palm cultivation to reduce import dependence on edible oils.',
        options: ['1 and 3 only', '2 only', '1 and 2 only', '1, 2 and 3'],
        answerIndex: 0,
        explanation:
          'NMEO-OP (2021) focuses on the North-East and A&N Islands and seeks import substitution through oil palm expansion; it does not replace MSP \u2014 MSP operations for oilseeds continue under separate mechanisms.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          'India imports over half of its edible-oil requirement despite decades of missions. Examine the structural reasons for this dependence and evaluate whether the current oilseed and oil-palm missions can deliver self-sufficiency without ecological costs. (150 words)',
        explanation:
          'Structure: begin with demand-supply arithmetic and import dependence; diagnose constraints \u2014 rainfed acreage, low yields, price volatility versus MSP-guaranteed cereals; assess NMEO-OP/NMEO-Oilseeds design (area, varieties, processing); weigh ecological risks of oil palm; conclude with diversification plus procurement and storage as the enabling conditions.',
        gs: 'GS3',
      },
    ],
    gsTags: ['GS3'],
    syllabusTags: ['Agriculture', 'Food Security', 'Economy'],
  },
  {
    id: 'malabar-naval-exercise-2026',
    date: '2026-11-09',
    title: 'Malabar 2026 Puts the Four Quad Navies Through Advanced Maritime Combat Drills',
    category: 'Defence & Security',
    source: 'The Hindu',
    isPib: false,
    hook: 'From a 1992 India\u2013US bilateral to the flagship drill of four Indo-Pacific navies \u2014 Malabar is three decades of naval convergence.',
    overview:
      'The latest edition of Exercise Malabar is under way, bringing together the Indian Navy, the US Navy, the Japan Maritime Self-Defense Force and the Royal Australian Navy for high-end maritime warfare training. Across harbour and sea phases, the four navies are rehearsing anti-submarine warfare, air defence, live weapon firings and complex manoeuvres \u2014 drills that have quietly become the operational glue of the Indo-Pacific\u2019s like-minded maritime coalition.',
    prelimsPoints: [
      'Malabar began in 1992 as a bilateral India\u2013US naval exercise; Japan became a permanent participant in 2015 and Australia rejoined in 2020, completing the present quadrilateral format.',
      'Participating forces: Indian Navy, US Navy, Japan Maritime Self-Defense Force (JMSDF) and Royal Australian Navy (RAN); hosting rotates among the four navies year to year.',
      'The exercise spans harbour and sea phases, covering anti-submarine warfare, air defence exercises, gunnery and missile firings, underway replenishment and interoperable communications.',
      'Malabar is not formally a Quad (Quadrilateral Security Dialogue) activity \u2014 the Quad is a diplomatic grouping revived in 2017; the naval exercise predates it and is framed as a maritime, not alliance, format.',
      'Complementary Indian exercises: Varuna with France, Konkan with the UK, SIMBEX with Singapore, Indra with Russia and the multilateral MILAN hosted at Visakhapatnam.',
    ],
    mainsPoints: [
      'High-end interoperability among the four navies strengthens deterrence and disaster-response reach in the Indo-Pacific, yet India\u2019s insistence that Malabar remains outside formal alliance structures preserves its strategic autonomy.',
      'The anti-submarine warfare focus reflects the undersea domain\u2019s centrality \u2014 quiet submarines, seabed infrastructure and long-range patrol aircraft (like the P-8I) define an arena of competition that rarely makes headlines.',
      'Foundational agreements (LEMOA, COMCASA, BECA) convert exercise familiarity into operational leverage: logistics sharing, encrypted communications and geospatial exchange are the quiet deliverables of repeated drills.',
      'Sustained participation tests India\u2019s blue-water depth \u2014 carrier group operations, indigenous escorts and fleet support \u2014 making indigenised shipbuilding and maintenance the long-run constraint on exercise diplomacy.',
    ],
    additionalPoints: [
      'The 2020 edition, held in the Bay of Bengal and Arabian Sea soon after the Galwan standoff, marked Australia\u2019s return and signalled the exercise\u2019s new strategic weight.',
      'MILAN\u2019s expanding invitation list shows India\u2019s port-call diplomacy across the Indian Ocean, while Malabar remains the capability deepener among close partners.',
      'The Information Fusion Centre \u2013 Indian Ocean Region (IFC-IOR) at Gurugram, with international liaison officers, complements exercises by feeding shared maritime domain awareness.',
    ],
    keyTerms: [
      { term: 'Malabar', meaning: 'The annual high-end naval exercise of India, the USA, Japan and Australia, rotating among the four host navies since its 1992 beginning.' },
      { term: 'LEMOA', meaning: 'The Logistics Exchange Memorandum of Agreement (2016) allowing India and the USA to use each other\u2019s bases for replenishment and support.' },
      { term: 'IFC-IOR', meaning: 'India\u2019s Information Fusion Centre for the Indian Ocean Region, which fuses shipping, fishing and security data with partner navies\u2019 liaison officers.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to Exercise Malabar, consider the following statements: 1) It began in 1992 as a bilateral naval exercise between India and the United States. 2) Japan became a permanent participant of the exercise in 2015. 3) Australia rejoined the exercise in 2020, completing the present quadrilateral format. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 3,
        explanation:
          'All three are correct: Malabar began as an India\u2013US bilateral in 1992, Japan became a permanent participant in 2015, and Australia\u2019s 2020 return created today\u2019s four-navy format.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          'Naval exercises like Malabar demonstrate alignment without alliance. Discuss how such formats advance India\u2019s Indo-Pacific objectives while preserving strategic autonomy. (150 words)',
        explanation:
          'Structure: define the alignment-without-alliance dilemma; show how interoperability, logistics agreements and domain awareness build capability; contrast with treaty alliances; add the China factor and Quad\u2019s diplomatic versus military separation; conclude with capacity constraints and indigenous defence industry as the binding variables.',
        gs: 'GS2',
      },
    ],
    gsTags: ['GS2', 'GS3'],
    syllabusTags: ['Defence & Security', 'International Relations'],
  },
  {
    id: 'upi-cross-border-linkages-2026',
    date: '2026-11-09',
    title: 'UPI\u2019s Border-Crossing Year: Payment Linkages Deepen from Singapore to the Gulf',
    category: 'Economy',
    source: 'Indian Express',
    isPib: false,
    hook: 'A QR code born in India now rings up billing in Singapore malls \u2014 digital public infrastructure travels light.',
    overview:
      'Unified Payments Interface volumes keep setting records at home while the bigger story of 2026 is abroad: NPCI International\u2019s web of acceptance and remittance linkages \u2014 from Singapore\u2019s PayNow to the UAE, Nepal, Bhutan, Sri Lanka, Mauritius and France \u2014 has turned UPI into India\u2019s most exported piece of digital public infrastructure. Cross-border payments are becoming the newest arena of economic diplomacy, with cheaper remittances and tourist-facing acceptance as the twin dividends.',
    prelimsPoints: [
      'UPI, launched in 2016 and operated by the National Payments Corporation of India (NPCI, set up under RBI and Indian Banks\u2019 Association guidance), is a real-time, mobile-based payment rail that now accounts for the dominant share of India\u2019s retail digital payments.',
      'NPCI International Payments Ltd (NIPL), incorporated in 2020, drives UPI and RuPay acceptance abroad; live arrangements include the PayNow\u2013UPI linkage with Singapore (2023), and UPI acceptance in the UAE, Bhutan, Nepal, Sri Lanka, Mauritius and France.',
      'Cross-border models differ: person-to-person remittance linkages (like PayNow\u2013UPI) move money between wallets/accounts, while merchant acceptance lets Indian travellers scan-and-pay at foreign QR terminals.',
      'NPCI\u2019s other rails include RuPay, IMPS, AePS, NACH and NETC (FASTag); product extensions cover UPI Lite for offline small-value payments, UPI 123Pay for feature phones, AutoPay and credit lines on UPI.',
      'The digital rupee (e\u20b9) pilot is an RBI central-bank liability and is distinct from UPI, which moves money between bank accounts over an interoperable switch.',
    ],
    mainsPoints: [
      'Remittances are the development dividend: linkage-based corridors cut cost and time, advancing the SDG 10.c target of remittance costs below 3% \u2014 relevant for a country receiving the world\u2019s largest remittance inflows.',
      'Digital public infrastructure is now foreign policy: UPI, Aadhaar-based design, DigiLocker and Account Aggregator are offered as open, interoperable public goods, echoing how India placed DPI on the G20 agenda.',
      'Concentration risk is the governance flip side: one non-profit operator\u2019s dominance of retail payments, zero-MDR economics and data localisation rules shape the sustainability debate around the world\u2019s largest real-time payment system.',
      'Payment interoperability is geoeconomics \u2014 linkages with ASEAN and Gulf fintech rails quietly compete with global card networks and correspondent banking, giving middle powers a new instrument of monetary statecraft.',
    ],
    additionalPoints: [
      'Tourist-facing UPI: international numbers and wallets can be onboarded through partner arrangements, making scan-and-pay usable without an Indian SIM or account.',
      'Nepal and Bhutan were early adopters of RuPay/UPI acceptance, tying neighbourhood-first policy to fintech infrastructure.',
      'Watch the settlement layer: local-currency settlement through special rupee vostro accounts and cross-border CBDC experiments (Project mBridge-style corridors) sit one layer beneath the UPI brand.',
    ],
    keyTerms: [
      { term: 'UPI', meaning: 'Unified Payments Interface \u2014 NPCI\u2019s instant, interoperable, mobile-first payment system that moves money between bank accounts in real time.' },
      { term: 'NIPL', meaning: 'NPCI International Payments Ltd, the 2020 subsidiary that expands UPI and RuPay acceptance and builds bilateral payment linkages abroad.' },
      { term: 'Digital Public Infrastructure', meaning: 'Open, interoperable, population-scale digital rails (identity, payments, data sharing) built as public goods and offered to other countries.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to the Unified Payments Interface (UPI), consider the following statements: 1) UPI is operated by the National Payments Corporation of India, set up under the guidance of the RBI and the Indian Banks\u2019 Association. 2) The PayNow\u2013UPI linkage connects India\u2019s UPI with Singapore\u2019s PayNow system. 3) The digital rupee pilot is an initiative of the National Payments Corporation of India. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 0,
        explanation:
          'Statements 1 and 2 are correct. The digital rupee (e\u20b9) is the RBI\u2019s central bank digital currency pilot, not an NPCI initiative.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          'Cross-border payment linkages are becoming an instrument of economic diplomacy. Discuss the strategic and developmental significance of UPI\u2019s international expansion, along with the governance risks of digital payment concentration. (150 words)',
        explanation:
          'Structure: map UPI\u2019s two cross-border models (remittance linkage, merchant acceptance); quantify the development case via remittance-cost targets; frame DPI diplomacy (G20, Global South); then governance risks \u2014 single-operator concentration, zero-MDR sustainability, fraud and data protection; conclude with interoperable, multi-rail design as the hedge.',
        gs: 'GS3',
      },
    ],
    gsTags: ['GS3'],
    syllabusTags: ['Economy', 'Digital Economy', 'International Relations'],
  },
];
