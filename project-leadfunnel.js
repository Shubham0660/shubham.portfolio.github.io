(window.PROJECTS = window.PROJECTS || []).push({

  /* ─────────────────────────────────────────
     CARD LAYER · STAR PATTERN
     ───────────────────────────────────────── */
  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "Conversion & Acquisition",
  title: "Raising Lead Qualification Rate to 60%",

  problem: "Paid acquisition filled the funnel faster than sales could work it. Without qualification, connect rate capped empanelment growth and extended CAC payback.",
  ownership: ["Owned end to end", "Cross functional with Sales & Marketing"],

  metric: "45% → 60%",
  metricSub: "lead qualification rate · 60 days",

  /* ─────────────────────────────────────────
     MODAL LAYER · NARRATIVE STRUCTURE
     ───────────────────────────────────────── */
  banner: "",                            /* add "banner-leadfunnel.png" once ready */
  timeframe: "2025",

  context: "<b>Wealthy.in</b> acquires MFD partners through paid campaigns on Google, Meta, and app stores. Every lead routes through a single in-house form to the CRM, where sales converts them into empanelled partners.",
  contextMore: "Acquisition cost locks in the moment a partner empanels. Recovery depends entirely on that partner's likelihood to transact. As sourcing scaled faster than qualification improved, CAC efficiency declined.",

  problemQ: "Which leads deserve the first call?",
  
  thesis: "Sales bandwidth is finite. Calling every lead in arrival order spends equal effort on a browser as on a licensed distributor ready to transact. Without <span class=\"hl\">precision qualification at form-fill</span>, connect rate becomes the ceiling on empanelment growth.",

  evidence: [
    { value: "4 fields",  label: "Form captured only name, phone, email, OTP" },
    { value: "45%",       label: "High-potential lead rate, flat despite scaling acquisition" },
    { value: "~100%",     label: "All leads competing for finite sales bandwidth" }
  ],

  cascade: {
    rows: [
      { t: "Lead quality stayed flat",    d: "More volume landed on the CRM, same priority mechanism." },
      { t: "Connect rate capped",         d: "Sales couldn't reach everyone. Best leads were lost in noise." },
      { t: "CAC payback extended",        d: "Unqualified leads sunk cost without revenue to offset it." },
      { t: "Sales workload increased",    d: "Team compensated by calling more, reaching fewer qualified leads." }
    ],
    flat: { t: "Qualification signal", d: "Zero. Every lead looked the same to the assignment system." },
    note: "Acquisition scaled. Qualification stayed flat."
  },

  approachTitle: "Finding the lever",
  frameworkNote: "Treated as a funnel optimisation problem. Where qualification broke, why, and which intervention moved connect rate and empanelment most.",

  steps: [
    {
      title: "Trace the funnel constraint",
      body: "Empanelment flows from connect rate, which flows from assignment quality. Lead qualification, not volume, became the actual lever."
    },
    {
      title: "Phase the form to reduce friction",
      body: "One long form loses everyone. Phasing it secures contact details first, then earns qualification data from those who continue.",
      substeps: [
        { phase: 1, t: "Capture identity", d: "Name, phone, email, OTP verified before any qualifying question" },
        { phase: 2, t: "Ask: ARN holder?", d: "Highest-signal field. Every practising MFD holds one—doubles as verification." },
        { phase: 3, t: "If not, capture profession", d: "Banker, CA, loan advisor, etc. Separates finance-adjacent from cold." }
      ]
    },
    {
      title: "Auto-assign to priority queue",
      body: "Three form answers sort the funnel automatically. P0 leads hit the CRM first so day-one calls go to highest-conversion prospects.",
      segments: [
        { tier: "P0 · Licensed, ready now", items: [
          "Holds ARN, already distributing",
          "Evaluating Wealthy against competitors",
          "Shortest path to first transaction"
        ]},
        { tier: "P1 · Finance-adjacent", items: [
          "CA, banker, loan advisor, retired finance professional",
          "Credibility and client base already exist",
          "Needs the category explained, not product compared"
        ]}
      ]
    },
    {
      title: "Use thank-you page as intent sensor",
      body: "The gap between form submission and the sales call was dead air. Optional resources on the thank-you page keep the lead warm while every click feeds back into priority scoring. Self-declared intent before any sales call."
    },
    {
      title: "User-based communication journey",
      body: "Licensed MFDs and curious CAs need opposite conversations. Comms routes split so <b>credibility builds before the call</b>, not during it.",
      commsTracks: [
        { segment: "P0 · Existing MFDs", approach: "Comparison-led messaging: payouts, product range, platform depth", channels: ["email", "whatsapp", "sms", "push", "in-app"] },
        { segment: "P1 · New entrants", approach: "Category-led messaging: what distribution is, earning potential, path to ARN", channels: ["email", "whatsapp", "sms", "push", "in-app"] }
      ]
    },
    {
      title: "Lead Analysis Dashboard",
      body: "Real-time funnel visibility end to end, with budget pacing and demand forecasting to inform spend allocation."
    }
  ],

  northStar: {
    label: "North star metric",
    value: "60% lead qualification rate",
    desc: "Achieved in 60 days. Better qualification meant sales bandwidth landed on leads far likelier to empanel, shortening time-to-conversion and CAC payback."
  },

  metrics: [
    { value: "+90%",  label: "Click-to-submission conversion via progressive phasing" },
    { value: "75%",   label: "Sales connect rate: 75 calls per 100 leads, 60 high-potential" }
  ],

  shipped: [
    { group: "Product", items: [
      "Progressive-profiling form: identity → qualification → profession",
      "ARN-based lead routing and CRM auto-assignment logic"
    ]},
    { group: "Analytics & Insights", items: [
      "Full-funnel dashboard tied to empanelment outcomes",
      "Budget pacing meter for real-time spend vs. target decisions",
      "ARIMA demand forecasting to predict lead volume ahead of budget"
    ]},
    { group: "Activation & Comms", items: [
      "Thank-you page engagement layer capturing behavioural intent",
      "Segmented communication journeys by qualification tier"
    ]}
  ],

  keyLearning: "The strongest qualification signal sat upstream of the product. By asking the right questions at form-fill—not in a long survey, but in a structured, friction-free phased approach—every subsequent system (CRM routing, sales prioritisation, comms messaging) became more efficient. The lever wasn't more features or more data. It was asking better questions earlier.",

  skills: ["Funnel Design", "Lead Scoring & Routing", "Progressive Profiling", "SQL", "Metabase", "ARIMA Forecasting", "Event Tracking", "CRM Workflow Design"],
  ways: ["Partnered with Sr. PM on routing logic", "Cross-functional with Sales & Marketing", "End-to-end ownership"],

  notionUrl: ""

});
