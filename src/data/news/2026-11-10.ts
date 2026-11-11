import type { CaArticle } from '../types';

// Current Affairs Briefing for Tuesday, 10 November 2026.
// The PIB item is grounded in Department of Science & Technology material for
// World Science Day for Peace and Development; other items are prepared from
// The Hindu, Indian Express and Business Standard coverage of the week.

export const NEWS_2026_11_10: CaArticle[] = [
  {
    id: 'world-science-day-peace-development-2026',
    date: '2026-11-10',
    title: 'World Science Day for Peace and Development Turns the Focus to Research for a Resilient Planet',
    category: 'Science & Tech',
    source: 'PIB',
    isPib: true,
    hook: 'Born of Budapest 1999, observed every 10 November: science as a public good, not a private weapon.',
    overview:
      'World Science Day for Peace and Development is being observed today, the UNESCO-proclaimed occasion that highlights science\u2019s role in peace, sustainability and public welfare. In India, the day lands amid an institutional reset: the Anusandhan National Research Foundation is consolidating research funding, national missions in quantum, semiconductors, space and the deep ocean are in delivery mode, and the debate on raising R&D intensity has moved from seminar rooms to budget documents.',
    prelimsPoints: [
      'World Science Day for Peace and Development is observed every 10 November; UNESCO proclaimed it in 2001, building on the 1999 World Conference on Science held at Budapest, to underline science\u2019s contribution to peace and development.',
      'India\u2019s civilian science establishment: Department of Science & Technology (1971), Department of Biotechnology (1986), and the Department of Scientific & Industrial Research housing CSIR (1942); ISRO (1969) and DRDO (1958) are the flagship mission agencies.',
      'The Anusandhan National Research Foundation (ANRF) Act, 2023 created an apex research-funding body that subsumed the Science and Engineering Research Board (SERB) and is designed to crowd in substantial non-government funding for universities.',
      'India\u2019s Gross Expenditure on R&D has hovered around 0.65% of GDP, well below the 2%+ norm of leading economies, with the private sector\u2019s share of research spending remaining comparatively low.',
      'Current mission stack: National Quantum Mission (\u20b96,003 crore, 2023), Deep Ocean Mission (Samudrayaan), National Supercomputing Mission, IndiaAI Mission and the India Semiconductor Mission.',
    ],
    mainsPoints: [
      'Science for peace and development is ultimately translational \u2014 vaccines, agri-tech, disaster early warning and frugal engineering are where Indian research has outsized South-South relevance.',
      'The binding constraint is institutional: university research is underfunded and grant administration slow, so ANRF\u2019s design \u2014 competitive grants, ease of doing science, industry co-funding \u2014 matters more than any single mission\u2019s budget.',
      'Emerging technologies demand anticipatory ethics: AI governance, gene editing and geoengineering carry dual-use risks, making the day\u2019s \u2018peace\u2019 framing a live regulatory question, not rhetoric.',
      'Inclusion is the multiplier: DST\u2019s Vigyan Jyoti and WISE-KIRAN programmes target women in research, and UNESCO\u2019s Open Science recommendation pushes data and publication sharing as a development right.',
    ],
    additionalPoints: [
      'Big-science cooperation is deepening \u2014 India is an associate member of CERN and the LIGO-India gravitational-wave detector (Hingoli, Maharashtra) was approved in 2023 as an international facility.',
      'Do not confuse observances: National Science Day is 28 February (Raman effect), National Technology Day is 11 May (Pokhran tests, 1998), while World Science Day is 10 November.',
      'India\u2019s science diplomacy now runs through ANRF and line ministries, but the private sector\u2019s share of R&D \u2014 still well below global norms \u2014 remains the metric to watch for the next decade.',
    ],
    keyTerms: [
      { term: 'ANRF', meaning: 'Anusandhan National Research Foundation \u2014 the apex research-funding body created by a 2023 Act, which absorbed SERB and channels public and private money into university research.' },
      { term: 'National Quantum Mission', meaning: 'The 2023 mission (\u20b96,003 crore) to build quantum computers, communication, sensing and materials capability over eight years.' },
      { term: 'Open Science', meaning: 'The UNESCO-endorsed practice of making scientific data, code and publications openly accessible to widen participation and accelerate discovery.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to the Anusandhan National Research Foundation (ANRF), consider the following statements: 1) It was established under the ANRF Act, 2023. 2) It subsumed the Science and Engineering Research Board (SERB). 3) Its mandate extends to the humanities and social sciences, not only the natural sciences. Which of the statements given above are correct?',
        options: ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
        answerIndex: 3,
        explanation:
          'The ANRF Act, 2023 created the foundation, dissolved SERB into it, and deliberately spans natural sciences, engineering, health, agriculture \u2014 as well as the humanities and social sciences.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          '"A 0.65% R&D-to-GDP ratio is a policy choice, not a resource constraint." Examine the structural weaknesses of India\u2019s research ecosystem and evaluate how the National Research Foundation model attempts to correct them. (150 words)',
        explanation:
          'Structure: open with the GERD benchmark and its composition (public-heavy, private-light); diagnose causes \u2014 university underfunding, grant friction, weak industry-academia links; assess ANRF\u2019s competitive-grant, co-funding and governance design; add inclusion and open-science angles; conclude with measurable outcomes \u2014 patents, PhD output, industry share of R&D.',
        gs: 'GS3',
      },
    ],
    gsTags: ['GS3'],
    syllabusTags: ['Science & Technology', 'Research & Development', 'Governance'],
  },
  {
    id: 'cop31-climate-summit-2026',
    date: '2026-11-10',
    title: 'COP31 Opens with Climate Finance Delivery and Adaptation at the Centre of the Agenda',
    category: 'International Relations',
    source: 'The Hindu',
    isPib: false,
    hook: 'From Baku\u2019s $300 billion to Bel\u00e9m\u2019s roadmap: COP31 is the accountability summit for promises made.',
    overview:
      'The 31st Conference of the Parties to the UNFCCC is meeting in Antalya this fortnight, with Australia presiding over the negotiations under the compromise brokered at COP30 in Bel\u00e9m. The agenda is dominated by credibility questions: how the New Collective Quantified Goal on climate finance translates from pledge to delivery, how the call to triple adaptation finance by 2035 is operationalised, and how the next round of 2035 emission targets restores momentum to the Paris ratchet.',
    prelimsPoints: [
      'The UNFCCC (1992, Rio) entered into force in 1994; its supreme decision-making body is the Conference of the Parties (COP), which meets annually \u2014 COP31 is the 2026 session hosted in Antalya (T\u00fcrkiye).',
      'COP29 in Baku (2024) set the New Collective Quantified Goal (NCQG): at least $300 billion a year for developing countries by 2035, with a wider call to scale climate finance to $1.3 trillion a year from all sources \u2014 the "Baku to Bel\u00e9m Roadmap".',
      'COP30 in Bel\u00e9m (2025) delivered a political package that included a call to triple adaptation finance for developing countries by 2035 and work on just transition pathways.',
      'Nationally Determined Contributions are five-yearly, self-differentiated pledges under the Paris Agreement (2015); the current round of 2035 targets is the ambition test after the first Global Stocktake found national plans far short of the 1.5\u00b0C pathway.',
      'India\u2019s anchors: the Panchamrit pledges (500 GW non-fossil capacity and a 45% cut in emissions intensity by 2030; net zero by 2070), Mission LiFE, the Carbon Credit Trading Scheme, and the CBDR\u2013RC principle as the bedrock of its negotiating position.',
    ],
    mainsPoints: [
      'Finance is the fulcrum of trust: developing countries face high adaptation needs with debt-stressed fiscal space, so whether NCQG flows arrive as grants, concessional loans or re-badged development aid will decide the regime\u2019s legitimacy.',
      'Adaptation has gained parity in language but not in money \u2014 the Global Goal on Adaptation and the tripling call need grant-heavy delivery, monitoring metrics and locally led implementation to move beyond declaration.',
      'The Paris architecture works by peer pressure, not penalties: compliance is facilitative, so domestic instruments \u2014 carbon markets, green hydrogen missions, energy storage and grid reform \u2014 are the true drivers of India\u2019s emissions trajectory.',
      'Coalition arithmetic shapes outcomes: G77+China, BASIC and Like-Minded Developing Countries press equity and finance, while island and least-developed states push ambition \u2014 India\u2019s diplomacy balances growth imperatives with Global South leadership.',
    ],
    additionalPoints: [
      'The Loss and Damage Fund, operationalised at COP28, and the Adaptation Fund and Green Climate Fund form the delivery stack; how much new money flows through them versus multilateral banks is a live institutional debate.',
      'Carbon markets are back in play: Article 6 rulebook work on bilateral trading and the centralised mechanism continues, with integrity of credits the recurring critique.',
      'India\u2019s domestic climate governance \u2014 state action plans, CCTS obligated entities and renewable auction pipelines \u2014 is the evidence base its negotiators cite when arguing implementation, not just ambition.',
    ],
    keyTerms: [
      { term: 'NCQG', meaning: 'New Collective Quantified Goal \u2014 the post-2025 climate finance goal agreed at Baku: at least $300 billion a year for developing countries by 2035, within a $1.3 trillion ambition.' },
      { term: 'CBDR\u2013RC', meaning: 'Common But Differentiated Responsibilities and Respective Capabilities \u2014 the equity principle that all states act on climate but with differentiated burdens.' },
      { term: 'Global Stocktake', meaning: 'The Paris Agreement\u2019s five-yearly assessment of collective progress; its first edition (COP28) concluded that current plans miss the 1.5\u00b0C pathway.' },
      { term: 'Adaptation finance', meaning: 'Funding for adjusting to climate impacts \u2014 resilient agriculture, early warning, coastal protection \u2014 historically grant-poor relative to mitigation finance.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to climate governance under the UNFCCC process, consider the following statements: 1) The New Collective Quantified Goal agreed at COP29 commits developed countries to mobilise at least $300 billion a year for developing countries by 2035. 2) The Paris Agreement provides for a Global Stocktake every five years. 3) The Loss and Damage Fund was operationalised at COP28 in Dubai. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 3,
        explanation:
          'All three are correct: the NCQG ($300 billion/year by 2035) was set at Baku (COP29), the Global Stocktake runs every five years under the Paris Agreement, and the Loss and Damage Fund was operationalised at COP28.',
        gs: 'GS2',
      },
      {
        kind: 'mains',
        question:
          'Climate summits are decided less in plenary halls than in finance ministries. Examine how the credibility of climate finance \u2014 its quantity, quality and delivery \u2014 shapes the viability of the multilateral climate regime. (150 words)',
        explanation:
          'Structure: anchor in CBDR\u2013RC and the finance-for-ambition bargain; contrast NCQG\u2019s headline with delivery realities (grants vs loans, MDB reform, private mobilisation); bring in adaptation parity and the L&D fund; close with India\u2019s position \u2014 implementation-first equity and domestic instruments as credibility.',
        gs: 'GS2',
      },
    ],
    gsTags: ['GS2', 'GS3'],
    syllabusTags: ['International Relations', 'Environment', 'Climate Change'],
  },
  {
    id: 'special-summary-revision-electoral-rolls-2026',
    date: '2026-11-10',
    title: 'Special Summary Revision Under Way as the Election Commission Prepares the 2027 Electoral Cycle',
    category: 'Polity & Governance',
    source: 'Indian Express',
    isPib: false,
    hook: 'Form 6 to Form 8: the quiet annual surgery that decides whose name survives on the voting list.',
    overview:
      'The Election Commission of India is in its annual Special Summary Revision cycle, with draft electoral rolls published against the 1 January qualifying date and the claims-and-objections window now open ahead of final publication in early January. With several large states headed into 2027 assembly elections, roll accuracy \u2014 and the procedural fairness of additions, deletions and corrections \u2014 is again the first mile of electoral integrity.',
    prelimsPoints: [
      'Article 324 vests the superintendence, direction and control of elections in the Election Commission of India; the Representation of the People Act, 1950 governs electoral rolls and the 1951 Act governs conduct of elections and disputes.',
      'The annual Special Summary Revision uses 1 January as the qualifying date: draft rolls appear in late October\u2013November, a claims-and-objections window follows, and final rolls are published in early January.',
      'Key forms: Form 6 for a new voter\u2019s inclusion, Form 7 for objections and deletions, Form 8 for corrections and shifting, and Form 6B for Aadhaar collection linkage.',
      'The Commission comprises the Chief Election Commissioner and two Election Commissioners, appointed under the 2023 law through a committee of the Prime Minister, the Leader of the Opposition in the Lok Sabha and a Union Cabinet Minister.',
      'The voting age was cut from 21 to 18 by the 61st Constitutional Amendment Act, 1988; the ECI\u2019s digital front-end now runs through ECINET, a single platform integrating voter services.',
    ],
    mainsPoints: [
      'Roll accuracy is the first principle of electoral integrity: deletion without due process risks disenfranchisement while stale rolls enable duplication \u2014 notice, hearing and appeal are the constitutional balance between purity and inclusion.',
      'The Special Intensive Revision debates of recent years raised separation-of-powers questions \u2014 how much documentation burden the ECI may impose before it collides with the universal adult franchise guaranteed by Article 326.',
      'Internal migration distorts rolls: seasonal workers, students and the urban floating population fall off lists; enrolment portability and migrant-inclusive design are the frontier reforms.',
      'Technology cuts both ways \u2014 ECINET, BLO apps and deduplication analytics raise efficiency, but error-correction design, data protection and last-mile digital literacy determine whether digitisation widens or narrows participation.',
    ],
    additionalPoints: [
      'Booth Level Officers \u2014 typically government or local-body employees \u2014 are the ground custodians of roll accuracy, and their workload is the practical constraint on revision quality.',
      'India\u2019s registered electorate is close to 97 crore, the largest in the world; even a small percentage error translates into crores of affected electors.',
      'Service voters (armed forces personnel and others) retain postal-ballot provisions, a category created precisely because roll revision assumes settled residence.',
    ],
    keyTerms: [
      { term: 'Special Summary Revision', meaning: 'The ECI\u2019s annual revision of electoral rolls to a 1 January qualifying date, via draft publication, claims-objections and final publication.' },
      { term: 'Booth Level Officer', meaning: 'The designated official responsible for a segment of the electoral roll at the booth level \u2014 verification, corrections and voter facilitation.' },
      { term: 'Qualifying date', meaning: 'The reference date for determining age and eligibility for enrolment \u2014 1 January in the annual revision cycle.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to electoral rolls in India, consider the following statements: 1) Article 324 vests the superintendence, direction and control of elections in the Election Commission of India. 2) Form 6 is used for the inclusion of a new voter\u2019s name in the electoral roll. 3) The qualifying date for registration in the annual Special Summary Revision is 1 January. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 3,
        explanation:
          'All three are correct: Article 324 vests election control in the ECI, Form 6 covers new registrations, and the annual Special Summary Revision uses 1 January as its qualifying date.',
        gs: 'GS2',
      },
      {
        kind: 'mains',
        question:
          'Electoral roll revision is where electoral integrity either begins or breaks. Discuss the tension between roll purity and universal franchise in the light of recent revision exercises, and suggest institutional safeguards. (150 words)',
        explanation:
          'Structure: frame Article 326 universal franchise against Article 324 administration; examine deletion-related disenfranchisement risks and documentation burdens on migrants; evaluate ECI\u2019s due-process toolkit (notice, claims-objections, appeals, BLO verification); conclude with safeguards \u2014 audited deletions, public dashboards, migrant-inclusive enrolment, data protection.',
        gs: 'GS2',
      },
    ],
    gsTags: ['GS2'],
    syllabusTags: ['Polity', 'Elections', 'Governance'],
  },
  {
    id: 'gst-collections-two-slab-stability-2026',
    date: '2026-11-10',
    title: 'GST Collections Hold Steady in the First Autumn of the Two-Slab Regime',
    category: 'Economy',
    source: 'Business Standard',
    isPib: false,
    hook: 'One number a month, read like a pulse: GST collections are the economy\u2019s fastest high-frequency vital sign.',
    overview:
      'Monthly GST collections have settled into a steady rhythm through the first festive season of the rationalised two-slab structure, with gross receipts running close to the \u20b92 lakh crore-a-month mark. For the GST Council, the data test a specific bet: that lower rates on mass-consumption goods would lift volumes, compliance and formalisation enough to offset the revenue given away in September 2025\u2019s rate rationalisation.',
    prelimsPoints: [
      'GST came into force on 1 July 2017 through the 101st Constitutional Amendment Act; the GST Council created under Article 279A decides rates, and the September 2025 rationalisation moved India to two principal slabs \u2014 5% and 18% \u2014 plus a 40% demerit rate.',
      'Gross GST collections crossed \u20b92 lakh crore in a single month for the first time in April 2024, and the all-time monthly high of \u20b92.37 lakh crore was recorded in April 2025.',
      'The compliance stack includes e-way bills for goods movement, e-invoicing for larger taxpayers (threshold progressively lowered to \u20b95 crore turnover) and GSTN-led data analytics on returns.',
      'GST is a destination-based consumption tax; receipts are apportioned between the Centre (CGST and IGST share) and the states (SGST and IGST settlement), with the Compensation Cess pool continuing as a transition arrangement.',
      'Petroleum crude, diesel, petrol, ATF and natural gas remain constitutionally within GST but are not yet levied, and alcohol for human consumption is outside GST altogether.',
    ],
    mainsPoints: [
      'Rate rationalisation is a Laffer-style wager: the revenue given away on essentials must be recovered through demand elasticity, compliance expansion and formalisation \u2014 the coming quarters\u2019 collections are the referendum.',
      'States\u2019 fiscal health is the federal fault line: GST is now their largest own-revenue source, so any persistent shortfall revives debates over compensation design, cess pooling and the Council\u2019s consensus mechanics.',
      'Enforcement has shifted from inspection to information \u2014 invoice matching, e-invoicing trails and AI-assisted anomaly flags reduce leakage with less friction, a governance model worth generalising.',
      'The unfinished agenda is structural: bringing petroleum products and real estate into GST, deepening e-invoicing to smaller units, and simplifying registration and returns for MSMEs.',
    ],
    additionalPoints: [
      'High-frequency indicators \u2014 GST receipts, e-way bills, toll and fuel volumes \u2014 now anchor the monthly economic narrative, compressing the lag between activity and policy response.',
      'GSTAT (GST Appellate Tribunal) operationalisation is the quiet dispute-resolution reform; faster appellate closure reduces locked-up working capital across the supply chain.',
      'The festive quarter is the seasonality stress test: lower durables rates interact with income-tax relief to shape the demand mix, making consumption data the Council\u2019s early warning system.',
    ],
    keyTerms: [
      { term: 'GST Council', meaning: 'The Article 279A body of Union and state finance ministers that decides GST rates and rules by a three-fourths weighted majority.' },
      { term: 'E-invoicing', meaning: 'Machine-readable invoice generation validated on the government portal, applied to taxpayers above the notified turnover threshold to curb evasion.' },
      { term: 'Compensation Cess', meaning: 'A cess on demerit and luxury goods that funded states\u2019 guaranteed 14% annual revenue growth for 2017-22 and continues in transition.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'Which one of the following statements about GST in India is correct?',
        options: [
          'Petrol and diesel are taxed under GST at the 18% slab',
          'Gross GST collections crossed \u20b92 lakh crore in a single month for the first time in April 2024',
          'Appeals from the GST Appellate Tribunal lie directly to the Supreme Court',
          'GST collections accrue entirely to the Central Government',
        ],
        answerIndex: 1,
        explanation:
          'GST collections first crossed \u20b92 lakh crore in a month in April 2024. Petrol and diesel remain outside the operative levy of GST; appeals flow through High Courts; receipts are shared between the Centre and states.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          'The GST 2.0 slab merger is easy to announce and hard to finance. Discuss the fiscal-federalism challenge embedded in the rationalisation and the options before the GST Council to restore revenue buoyancy. (150 words)',
        explanation:
          'Structure: explain the two-slab design and its revenue math; states\u2019 dependence on GST and the compensation legacy; measure the Laffer bet (volumes, compliance, formalisation); options \u2014 base widening (petroleum, real estate), e-invoicing deepening, cess redesign, Council consensus; conclude with growth-through-compliance as the durable answer.',
        gs: 'GS3',
      },
    ],
    gsTags: ['GS3'],
    syllabusTags: ['Economy', 'Taxation', 'Federalism'],
  },
];
