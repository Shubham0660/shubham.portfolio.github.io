/* ══ CASE STUDIES DATA ══
   Each item renders as a card in the #rowCases swipe row.
   Click opens the modal with full detail.
   ─────────────────────────────────────────────────────────── */

var CASE_ITEMS = [

  /* ── 1. Spotify Social Features ── */
  {
    tag: 'Case Study',
    subtitle: 'Social & Discovery',
    title: 'Social Features on Spotify',
    problem: 'Users had no way to share music or discover what friends were listening to — Spotify lacked the social layer that drives stickiness and word-of-mouth growth.',
    metric: '3 Features Prioritised',
    metricSub: 'Mingle · Nostalgia Tracks · Green Snap',
    cardContext: 'Market research, persona mapping, RICE prioritisation, GTM strategy',
    cardAction: 'End-to-end product case study: discovery to launch plan',
    ownership: ['User Research', 'Feature Prioritisation', 'GTM Strategy', 'North Star Metrics'],

    /* modal */
    banner: null,
    context: 'Spotify is the world\'s leading audio streaming platform with 600M+ users and a library of 100M+ songs. Despite its scale, users lacked tools to share music with friends, discover what peers were listening to, or map personal memories to songs.',
    heroQ: 'How do you make music social without turning Spotify into another social network?',
    heroQSub: 'The goal: deepen engagement and word-of-mouth by letting users share their listening experience — without adding noise.',

    evidence: [
      { value: '35%', label: 'of listening happens during free time, ripe for sharing' },
      { value: '5 hrs', label: 'average listening per month per user' },
      { value: 'Gen Z', label: 'primary target: age 16-38, highly social, trend-driven' }
    ],

    initiatives: [
      {
        tag: 'Must Have',
        t: 'Spotify Mingle',
        d: 'Follow friends from contacts, share songs you think they\'ll love, discover trending tracks in your circle. Turns passive listening into a shared experience and drives re-engagement through social curiosity.',
        meta: 'Positions Spotify ahead of new social entrants. Emotional sharing = higher retention.'
      },
      {
        tag: 'Important',
        t: 'Green Snap',
        d: '"Capture the Moment: Share Your Song Vibes Instantly." Shoot a short video paired with the song currently playing. Share with specific connections on Spotify. Daily snap sharing becomes an emotional ritual for Gen Z.',
        meta: 'New UGC layer. Deepens platform interaction, drives discovery through personal stories.'
      },
      {
        tag: 'Lower Priority',
        t: 'Nostalgia Tracks',
        d: 'Save songs with memories — attach photos, notes, and moments to a personal track. Creates deeply personal playlists that keep users invested. Requires a distinct development strategy, so prioritised after real-time social features launch.',
        meta: 'High emotional value, longer user sessions, ad targeting potential.'
      }
    ],
    initiativesTitle: 'Features Designed',

    metrics: [
      { value: 'Mingle', label: 'No. of songs shared per day' },
      { value: 'Green Snap', label: 'Avg. snaps shared per day' },
      { value: 'Nostalgia', label: 'No. of memory tracks created' }
    ],

    skills: ['Market Research', 'Persona Mapping', 'RICE Prioritisation', 'GTM Strategy', 'North Star Metrics', 'Feature Design'],
    ways: ['User-centric thinking', 'Data-backed prioritisation', 'Social product strategy']
  },

  /* ── 2. EMotorad Smartwatch ── */
  {
    tag: 'Case Study',
    subtitle: 'Product Strategy',
    title: 'EM JivitPulse Smartwatch',
    problem: 'E-bike riders lacked a smartwatch built for their specific needs — battery monitoring, GPS navigation, and safety alerts. Existing wearables (Apple Watch, Garmin) were generic and overpriced for the segment.',
    metric: '$299 Product Launch Plan',
    metricSub: 'RICE-prioritised · PVP Competitive Analysis',
    cardContext: 'Market entry decision, competitive analysis, persona mapping, feature prioritisation, tech spec, business case',
    cardAction: 'Full product strategy case study for EMotorad',
    ownership: ['Market Research', 'Competitive Analysis', 'Feature Prioritisation', 'Business Case', 'Tech Spec'],

    /* modal */
    banner: null,
    context: 'EMotorad is one of India\'s leading e-bike manufacturers. As the global e-bike market grows from $18.58B (2021) to $52.36B (2028) and India\'s from $1.02B to $2.75B, a companion smartwatch designed specifically for e-bike riders represented a clear product extension opportunity.',
    heroQ: 'Is it worth entering the smartwatch market for e-bike riders, and what would the product look like?',
    heroQSub: 'Decision: enter through product development to grow market share in a rapidly expanding industry.',

    evidence: [
      { value: '$52.4B', label: 'Global e-bike market by 2028' },
      { value: '$299', label: 'Target launch price (INR 26,000)' },
      { value: 'RICE #1', label: 'Battery Management top-scored feature' }
    ],

    initiatives: [
      {
        tag: 'RICE: 900',
        t: 'Battery Management',
        d: 'Real-time battery % display, range estimator, low-battery alerts sent to watch before commute ends. The single most-feared pain point: running out of charge mid-commute.',
        meta: '1000 reach, Impact 3, 90% confidence, 3-month effort'
      },
      {
        tag: 'RICE: 720',
        t: 'Fitness Integration',
        d: 'Heart rate, SpO2, calorie tracking, route history. Sync with Google Fit and Apple Health. Serves recreational riders tracking health metrics on rides.',
        meta: '900 reach, Impact 2, 80% confidence, 2-month effort'
      },
      {
        tag: 'RICE: 680',
        t: 'Nearby Shops Finder',
        d: 'Find nearest charging points, cycle shops, pharmacies en route. Solves the commuter\'s anxiety of being stranded without support nearby.',
        meta: '800 reach, Impact 2, 85% confidence, 2-month effort'
      },
      {
        tag: 'RICE: 675',
        t: 'GPS Navigation',
        d: 'Turn-by-turn navigation optimised for bike lanes, with e-bike-specific routing. Real-time e-bike metrics overlay: speed, range, assist level.',
        meta: '1000 reach, Impact 3, 90% confidence, 4-month effort'
      },
      {
        tag: 'RICE: 665',
        t: 'Call & Music Management',
        d: 'Receive calls and control music without touching the phone. Especially valuable for commuters and delivery riders.',
        meta: '700 reach, Impact 1, 95% confidence, 1-month effort'
      }
    ],
    initiativesTitle: 'Features Prioritised (RICE)',
    initiativesNote: 'Competitive gap: Apple Watch, Garmin, Samsung all score 0 on real-time e-bike metrics. EM JivitPulse is purpose-built to fill this gap.',

    northStar: {
      label: 'Product Name',
      value: 'EM JivitPulse',
      desc: '"Jivit" means alive/lively in Sanskrit. Pulse reflects health monitoring and vitality. A smartwatch that keeps riders alive, connected, and in motion.'
    },

    skills: ['Market Sizing', 'PVP Competitive Analysis', 'RICE Prioritisation', 'Persona Design', 'Tech Specification', 'Business Case', 'Pricing Strategy'],
    ways: ['First-principles thinking', 'Market entry decision-making', 'Hardware-software product strategy']
  }

];
