import type { CaArticle } from '../types';

// Current Affairs Briefing for Wednesday, 11 November 2026.
// The PIB items are grounded in Ministry of Education material for National
// Education Day and ISRO/NASA updates on NISAR science operations; other items
// are prepared from Down To Earth and Indian Express coverage of the week.

export const NEWS_2026_11_11: CaArticle[] = [
  {
    id: 'national-education-day-maulana-azad-2026',
    date: '2026-11-11',
    title: 'National Education Day Honours Maulana Azad as India Weighs the Next Phase of NEP 2020',
    category: 'Society & Culture',
    source: 'PIB',
    isPib: true,
    hook: 'Born 11 November 1888: the scholar-minister who built IITs and UGC before the phrase \u2018institution-building\u2019 existed.',
    overview:
      'National Education Day is observed today on the birth anniversary of Maulana Abul Kalam Azad, free India\u2019s first Education Minister and the architect of its earliest education institutions. The 2026 observance arrives as NEP 2020 implementation moves through its middle years \u2014 foundational-literacy missions, PARAKH-based assessment and the long march towards a 50% Gross Enrolment Ratio in higher education by 2035 \u2014 making Azad\u2019s triple mantra of access, quality and scientific temper a working agenda rather than a memorial phrase.',
    prelimsPoints: [
      'National Education Day is observed on 11 November, the birth anniversary of Maulana Abul Kalam Azad (1888-1958), independent India\u2019s first Minister of Education (1947-58); the observance began in 2008.',
      'Azad\u2019s institutional legacy includes the University Grants Commission (established 1953, statutory through the UGC Act, 1956), the first IIT at Kharagpur (1951) and stewardship of Jamia Millia Islamia, which he helped found in 1920 and later served as Chancellor.',
      'He was President of the Indian National Congress in 1923 \u2014 the youngest to hold the office at the time \u2014 edited the nationalist journals Al-Hilal and Al-Balagh, and was awarded the Bharat Ratna posthumously in 1992.',
      'NEP 2020 anchors: the 5+3+3+4 curricular stages, NIPUN Bharat for foundational literacy and numeracy, PARAKH as the national assessment centre, and a target of 50% GER in higher education by 2035.',
      'Article 21A (86th Amendment, 2002) makes free and compulsory education for ages 6-14 a fundamental right, operationalised by the Right to Education Act, 2009; education itself moved to the Concurrent List via the 42nd Amendment.',
    ],
    mainsPoints: [
      'Azad\u2019s vision \u2014 universal elementary education, adult literacy and a scientific temper \u2014 prefigures the modern policy trilogy of access, equity and quality; periodic learning assessments show the last two remain the binding gaps.',
      'NEP 2020 is a federal bargain: with education on the Concurrent List, instruments such as PARAKH, the Academic Bank of Credits and university governance reform test Centre-state coordination and the risk of standardisation versus autonomy.',
      'Equity is the differentiator: gender gaps in school enrolment have narrowed, but first-generation, socio-economically disadvantaged and rural learners still trail in transition rates and learning outcomes \u2014 scholarships and digital access are the corrective levers.',
      'Demand-side distortions persist: dependence on private coaching, the language-of-instruction debate and teacher shortages show that regulation and capacity-building must move together if the system is to absorb NEP\u2019s ambitions.',
    ],
    additionalPoints: [
      'The national akademis \u2014 Sangeet Natak (1953), Sahitya and Lalit Kala (1954) \u2014 were founded during Azad\u2019s tenure, reflecting his conception of education as culture, not mere schooling.',
      'AISHE data place higher-education GER in the high-20s; reaching 50% by 2035 implies a doubling of capacity, which Open and Distance Learning, digital universities and internationalisation are expected to supply.',
      'School-side delivery now runs through NISHTHA teacher training and PM SHRI exemplar schools, with Foundational Literacy and Numeracy tracking as the near-term scoreboard.',
    ],
    keyTerms: [
      { term: 'PARAKH', meaning: 'The national assessment centre under NCERT that sets norms for student assessment across boards and tracks learning outcomes.' },
      { term: 'Gross Enrolment Ratio', meaning: 'Enrolment in a level of education as a percentage of the corresponding age-group population \u2014 NEP 2020 targets 50% GER in higher education by 2035.' },
      { term: 'NIPUN Bharat', meaning: 'The National Initiative for Proficiency in Reading with Understanding and Numeracy, aiming at foundational literacy and numeracy by Grade 3.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to Maulana Abul Kalam Azad, consider the following statements: 1) He was independent India\u2019s first Minister of Education. 2) The University Grants Commission was established during his tenure. 3) He was the founder-editor of the newspaper Kesari. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 0,
        explanation:
          'Azad was the first Education Minister and the UGC (1953) was created during his tenure. Kesari was founded by Lokmanya Tilak, not Azad \u2014 Azad edited Al-Hilal and Al-Balagh.',
        gs: 'GS1',
      },
      {
        kind: 'mains',
        question:
          '"Maulana Azad built the institutions; NEP 2020 is rewriting their rules." Examine how the National Education Policy balances access, equity and quality \u2014 and where the federal structure complicates implementation. (150 words)',
        explanation:
          'Structure: open with Azad\u2019s institutional legacy (UGC, IITs, adult literacy); map NEP 2020\u2019s architecture (5+3+3+4, PARAKH, GER target); assess access-equity-quality trade-offs using learning-outcome evidence; bring in Concurrent List federalism and Centre-state friction; conclude with capacity-building and coaching dependence as the unresolved variables.',
        gs: 'GS2',
      },
    ],
    gsTags: ['GS1', 'GS2'],
    syllabusTags: ['Education', 'Social Justice', 'Governance'],
  },
  {
    id: 'ncr-winter-air-grap-2026',
    date: '2026-11-11',
    title: 'Winter Inversion Returns: CAQM Tightens GRAP as NCR Air Slips into the Very Poor Zone',
    category: 'Environment',
    source: 'Down To Earth',
    isPib: false,
    hook: 'A cold-air lid on a hot emission pot \u2014 November\u2019s inversion turns the same smoke into a health emergency.',
    overview:
      'Mid-November meteorology has done what it does every year: calm winds and a nocturnal temperature inversion have capped the National Capital Region, letting locally emitted dust, vehicles and industry \u2014 topped up by the season\u2019s last stubble-burning plumes \u2014 accumulate into the "very poor" band. The Commission for Air Quality Management has tightened Graded Response Action Plan curbs accordingly, restarting construction-dust restrictions, vehicle advisories and public-health measures across the airshed.',
    prelimsPoints: [
      'GRAP is a pre-notified ladder of measures under the Commission for Air Quality Management: Stage I for "poor" AQI 201-300, Stage II for "very poor" 301-400, Stage III for "severe" 401-450 and Stage IV for "severe+" above 450.',
      'CAQM is a statutory body under the Commission for Air Quality Management in NCR and Adjoining Areas Act, 2021, with overriding powers in the airshed; appeals against its decisions are barred from going to the NGT and other courts.',
      'The National Air Quality Index (launched 2015) grades air across six bands using eight pollutants; PM2.5 is the dominant winter pollutant in the Indo-Gangetic Plain.',
      'Temperature inversion \u2014 a warm air layer trapping cooler surface air \u2014 plus low wind speeds converts unchanged emissions into severe episodes; stubble-burning plumes and local dust, traffic and industry supply the load.',
      'The National Clean Air Programme (2019) targets up to 40% reduction in particulate levels in non-attainment cities by 2025-26 from the 2017 baseline, supported by Finance Commission air-quality grants.',
    ],
    mainsPoints: [
      'GRAP is symptomatic relief \u2014 it responds to pollution already present \u2014 so source-apportionment must drive year-round enforcement on vehicles, dust, industry and biomass burning rather than seasonal theatre.',
      'The airshed is the correct policy unit: pollution ignores state borders, and CAQM\u2019s experiment in suprastate coordination \u2014 enforcement cells, penalty powers, technical committees \u2014 is the institutional case study in Indian environmental federalism.',
      'Health economics argues for prevention: very-poor AQI days convert into measurable morbidity, mortality and productivity loss, yet the response remains emergency medicine instead of public-health primary prevention.',
      'Equity is the missing lens: construction halts and industrial closures hit daily-wage workers hardest, while exposure is highest for outdoor and informal workers \u2014 pollution control needs a just-transition design.',
    ],
    additionalPoints: [
      'The technology stack includes SAFAR-India forecasts, the Decision Support System for source attribution, anti-smog guns and drone surveillance of hotspots \u2014 forecasting capacity has outpaced enforcement capacity.',
      'CSIR-NEERI-certified green crackers and community celebration models reduce peak exposure during festivals, but enforcement of cracker rules remains the weak link.',
      'Punjab and Haryana\u2019s stubble management \u2014 machinery banks, bio-decomposer spraying and crop diversification away from paddy \u2014 is the structural fix at the upstream end of the airshed.',
    ],
    keyTerms: [
      { term: 'GRAP', meaning: 'Graded Response Action Plan \u2014 the stage-wise emergency framework that activates restrictions automatically as NCR air quality crosses AQI thresholds.' },
      { term: 'Temperature inversion', meaning: 'A winter condition where warm air overlays cooler surface air, suppressing vertical mixing and trapping pollutants near the ground.' },
      { term: 'Airshed', meaning: 'The shared atmospheric area over which pollutants disperse \u2014 the Delhi-NCR airshed spans multiple states, making suprastate coordination essential.' },
      { term: 'Non-attainment city', meaning: 'A city consistently failing national ambient air quality standards, targeted under NCAP with city-specific clean-air plans.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'Under the Graded Response Action Plan (GRAP) for the Delhi-NCR region, Stage III restrictions kick in when the Air Quality Index crosses:',
        options: ['200', '300', '400', '450'],
        answerIndex: 2,
        explanation:
          'Stage III of GRAP applies when AQI enters the "severe" band (401-450), i.e. when it crosses 400; Stage IV applies above 450.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          'GRAP treats the symptom while the disease lies in the year-round emission mix. Examine this statement with reference to the Delhi-NCR airshed and suggest an institutional design for airshed-level preventive governance. (150 words)',
        explanation:
          'Structure: contrast GRAP\u2019s reactive stage triggers with source-apportionment evidence (vehicles, dust, industry, biomass); evaluate CAQM\u2019s suprastate powers and enforcement gaps; add health and equity dimensions; propose preventive design \u2014 year-round source enforcement, financing linked to clean-air outcomes, citizen-facing dashboards, just-transition safeguards.',
        gs: 'GS3',
      },
    ],
    gsTags: ['GS3'],
    syllabusTags: ['Environment', 'Health', 'Urban Governance'],
  },
  {
    id: 'nisar-dual-band-sar-milestone-2026',
    date: '2026-11-11',
    title: 'NISAR Settles into Science Operations as the Flagship of India-US Earth Observation',
    category: 'Science & Tech',
    source: 'PIB',
    isPib: true,
    hook: 'Two radars, one satellite: NISAR reads Earth\u2019s pulse in L-band and S-band every 12 days.',
    overview:
      'The NASA-ISRO Synthetic Aperture Radar satellite \u2014 NISAR \u2014 has moved from launch-day triumph to steady science operations, beaming back data on forests, ice sheets, earthquakes and farmland at a cadence no single radar mission has matched. Launched in July 2025, the most sophisticated Earth-observation partnership between the two space agencies is now a working template for the deeper technology cooperation announced in recent India-US summits.',
    prelimsPoints: [
      'NISAR was launched on 30 July 2025 aboard GSLV-F16 from Sriharikota \u2014 the first large-scale joint hardware mission of NASA and ISRO.',
      'It is the first dual-frequency radar imaging satellite of its kind: NASA\u2019s L-band SAR (deeper penetration for forests and ice) and ISRO\u2019s S-band SAR (soil moisture and agriculture) share a 12-metre deployable mesh reflector.',
      'Flying in a near-polar sun-synchronous orbit at about 750 km, NISAR images nearly all of Earth\u2019s land and ice surfaces every 12 days, day or night and through cloud.',
      'Applications: ground deformation from earthquakes and volcanoes, glacier and ice-sheet dynamics, forest biomass, wetland and agricultural change, and disaster response.',
      'Cost-sharing design: NASA provided the L-band radar and reflector; ISRO built the spacecraft bus and S-band radar and provided the launch, with data to be shared openly for global science.',
    ],
    mainsPoints: [
      'SAR\u2019s all-weather, day-night imaging is a step-change for India\u2019s disaster management and crop forecasting, complementing the RISAT/EOS series and monsoon-season optical gaps.',
      'NISAR is a governance template for big science: joint build, shared operations and open data \u2014 a precedent for the iCET-to-TRUST upgrade in India-US critical and emerging technology cooperation.',
      'Open-data policy multiplies value: universities, startups and state disaster authorities can build applications on free SAR archives, echoing the National Geospatial Policy\u2019s liberalised data regime.',
      'The next frontier is analytics, not imagery: processing petabyte-scale radar data demands ground-segment investment, AI pipelines and trained workforce \u2014 a capacity question for ISRO and academia alike.',
    ],
    additionalPoints: [
      'NISAR sits in a busy ISRO manifest: Gaganyaan development flights and NavIC augmentation continue in parallel, while Shubhanshu Shukla\u2019s 2025 Axiom-4 mission to the ISS signalled the human-spaceflight side of international cooperation.',
      'For prelims, keep the mission map straight: NISAR (dual-band SAR Earth observation), Aditya-L1 (solar observatory at L1), XPoSat (X-ray polarimetry) and Gaganyaan (crewed flight programme).',
      'The mission\u2019s 12-day repeat cycle enables change detection \u2014 the same patch of ground compared across passes \u2014 which is what turns imagery into early warning.',
    ],
    keyTerms: [
      { term: 'Synthetic Aperture Radar', meaning: 'A radar imaging technique that synthesises a large antenna from platform motion, producing high-resolution images regardless of cloud or darkness.' },
      { term: 'Sun-synchronous orbit', meaning: 'A near-polar orbit precessing to cross each latitude at the same local solar time, ideal for consistent Earth observation.' },
      { term: 'Change detection', meaning: 'Comparing repeated observations of the same area to identify movement, subsidence, ice loss or crop change over time.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to the NISAR mission, consider the following statements: 1) It is a joint Earth-observation mission of NASA and ISRO. 2) It carries both L-band and S-band synthetic aperture radars. 3) It is designed to image nearly all of Earth\u2019s land and ice surfaces every 12 days. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 3,
        explanation:
          'All three are correct: NISAR is the NASA-ISRO dual-band (L-band and S-band) SAR mission in a near-polar sun-synchronous orbit with a 12-day repeat cycle over global land and ice.',
        gs: 'GS3',
      },
      {
        kind: 'mains',
        question:
          'Big-science partnerships like NISAR are as much about institutional learning as instrumentation. Discuss how such missions advance India\u2019s space capabilities and strategic technology diplomacy. (150 words)',
        explanation:
          'Structure: map NISAR\u2019s technical contributions (dual-band SAR, all-weather monitoring, disaster applications); extract the institutional lessons \u2014 cost-sharing, open data, joint operations; link to iCET/TRUST-era technology diplomacy and Global South data access; conclude with domestic capacity needs \u2014 ground segment, analytics, workforce.',
        gs: 'GS3',
      },
    ],
    gsTags: ['GS3'],
    syllabusTags: ['Science & Technology', 'Space', 'International Relations'],
  },
  {
    id: 'womens-reservation-delimitation-countdown-2026',
    date: '2026-11-11',
    title: 'With Census 2027 Preparations Advanced, the Women\u2019s Reservation Countdown Begins',
    category: 'Polity & Governance',
    source: 'Indian Express',
    isPib: false,
    hook: '33% seats are promised \u2014 but the fine print says: first the census, then delimitation, then the notification.',
    overview:
      'The Constitution\u2019s one-third reservation for women in the Lok Sabha and state assemblies remains law on paper but awaits its trigger: the next census and the delimitation that follows it. With Census 2027 preparations \u2014 including house-listing operations \u2014 having progressed through 2026, attention is shifting to how the sequencing of census, delimitation and notification will be managed, and to the parallel demands for sub-quotas within the women\u2019s reservation.',
    prelimsPoints: [
      'The Constitution (106th Amendment) Act, 2023 \u2014 the Nari Shakti Vandan Adhiniyam \u2014 reserves one-third of seats for women in the Lok Sabha, state Legislative Assemblies and the Delhi Assembly; it received presidential assent in September 2023.',
      'Commencement is conditional: the reservation takes effect after the next census is completed and a delimitation exercise is carried out, from such date as the Central Government may notify.',
      'The reservation runs for 15 years (extendable by Parliament); within seats reserved for SCs and STs, one-third will be for SC/ST women, and rotation of reserved seats follows delimitation.',
      'Delimitation is anchored in Articles 81, 82 and 170; the 84th Amendment (2001) froze the population basis for seat allocation until the first census taken after 2026 \u2014 making Census 2027 the constitutional trigger.',
      'Census 2027 will be India\u2019s first fully digital census, with a reference date of 1 March 2027 (1 October 2026 for snow-bound areas) and caste enumeration included.',
    ],
    mainsPoints: [
      'Descriptive representation matters: women hold under 15% of Lok Sabha seats, and comparative research links women\u2019s presence in legislatures to shifts in policy priorities \u2014 reservation is the instrument, outcomes the test.',
      'The amendment bundles three contentious reforms into one sequence \u2014 women\u2019s reservation, interstate seat reallocation on fresh population data (the north-south demographic divide), and possible OBC sub-quotas \u2014 making constitutional sequencing itself the political question.',
      'Local bodies offer both template and warning: over a million elected women representatives serve in panchayats under 73rd/74th Amendment reservations, but "sarpanch-pati" proxy rule shows quotas must be matched with agency-building.',
      'Administrative credibility is the hinge: a fully digital census with caste enumeration and a transparent delimitation methodology will determine whether the exercise strengthens or strains federal trust.',
    ],
    additionalPoints: [
      'Roughly 1.4 million elected women \u2014 about 46% of panchayat representatives \u2014 form the world\u2019s largest cohort of elected women, a proving ground for legislative reservation.',
      'The bill\u2019s long journey \u2014 first introduced in the Lok Sabha in 1996 and examined by the Geeta Mukherjee committee \u2014 is a standard case study in legislative persistence.',
      'Interim levers include party-level voluntary quotas, leadership training for women representatives and capacity programmes that build the candidate pipeline while the constitutional clock runs.',
    ],
    keyTerms: [
      { term: 'Nari Shakti Vandan Adhiniyam', meaning: 'The Constitution (106th Amendment) Act, 2023, reserving one-third of Lok Sabha and state assembly seats for women, effective after census and delimitation.' },
      { term: 'Delimitation', meaning: 'The redrawing of constituency boundaries and seat allocation based on census population figures, conducted under Articles 81-82 and a dedicated law.' },
      { term: 'Descriptive representation', meaning: 'The presence of members who share characteristics of the group they represent \u2014 the case for women\u2019s reservation in one phrase.' },
    ],
    practice: [
      {
        kind: 'prelims',
        question:
          'With reference to the Constitution (106th Amendment) Act, 2023, consider the following statements: 1) It reserves one-third of all seats for women in the Lok Sabha and the state Legislative Assemblies. 2) It provides that the reservation shall take effect after a census has been conducted and delimitation carried out. 3) It also reserves one-third of seats for women in the Rajya Sabha and state Legislative Councils. Which of the statements given above are correct?',
        options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
        answerIndex: 0,
        explanation:
          'The 106th Amendment covers the Lok Sabha, state assemblies and the Delhi assembly \u2014 not the Rajya Sabha or Legislative Councils \u2014 and its commencement is tied to a post-census delimitation.',
        gs: 'GS2',
      },
      {
        kind: 'mains',
        question:
          'Women\u2019s reservation, delimitation and caste enumeration now stand in one constitutional queue. Examine the sequencing challenge and its implications for federalism and representation. (150 words)',
        explanation:
          'Structure: lay out the 106th Amendment\u2019s conditional commencement; connect Census 2027\u2019s design (digital, caste enumeration) to delimitation under the post-2026 unfreeze; weigh the north-south seat-shift tension against women\u2019s representation gains; close with safeguards \u2014 transparent methodology, sub-quota debate, capacity-building for women legislators.',
        gs: 'GS2',
      },
    ],
    gsTags: ['GS2'],
    syllabusTags: ['Polity', 'Constitution', 'Social Justice'],
  },
];
