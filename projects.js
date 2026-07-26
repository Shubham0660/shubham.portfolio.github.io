/* ═══════════════════════════════════════════════════════════
   CORPORATE PROJECTS
   ═══════════════════════════════════════════════════════════
   TWO LAYERS PER PROJECT:

   CARD (the 5 second scan) uses:
     logo, logoAlt, logoDark, subtitle, title,
     problem      → one sentence on what was broken
     ownership    → array of short scope chips
     metric       → the hero number
     metricSub    → the qualifier that makes it believable

   MODAL (the 2 minute read) additionally uses:
     banner       → image path. Omit for a dark title-block fallback
     timeframe    → e.g. "Q3 2025"
     context      → one line on what the business is
     problemFull  → longer version, 2 to 3 lines
     insight      → the pulled-out quote. Your differentiator
     metrics      → [{value, label}] impact strip
     quant / qual → arrays, the approach columns
     shipped      → [{group, items:[]}] grouped by function
     skills       → hard skill chips
     ways         → how-you-worked chips
     notionUrl    → only where a real page exists. Omit otherwise.

   TO ADD A PROJECT: copy a whole { } block, paste above the closing ];
   ═══════════════════════════════════════════════════════════ */

const PROJECTS = [

  /* ─────────── FULLY BUILT EXAMPLE ─────────── */
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Product Led Growth",
    title: "Partner Website Builder",

    problem: "Partners named client acquisition as their top blocker, but the real failure sat earlier: most MFDs had no digital presence a prospect could look up or trust.",
    ownership: ["Owned end to end", "Cross functional with UX & Content"],

    metric: "[METRIC]",
    metricSub: "[qualifier, e.g. partners published in 60 days]",

    /* ── modal ── */
    banner: "",                      /* add e.g. "banner-branding.png" once ready */
    timeframe: "[TIMEFRAME]",
    context: "Wealthy partners are independent MFDs who bring their own client base. Their income depends entirely on acquiring and converting clients themselves.",
    problemFull: "Partners consistently named client acquisition as their biggest blocker, but the failure was happening earlier than the pitch. Most MFDs had no digital presence at all, nothing a prospective client could look up, verify, or trust. Onboarding drop offs traced back to low partner visibility and weak perceived credibility.",
    insight: "Partners weren't losing clients during the pitch. They were losing them before it, at the point where a prospect looks you up and finds nothing. The trust gap sat upstream of the conversation.",

    metrics: [
      { value: "[X]",  label: "[primary impact metric]" },
      { value: "[X]",  label: "[adoption metric]" },
      { value: "5+ / 20+", label: "Templates and themes shipped" }
    ],

    quant: [
      "Traced onboarding drop off points to visibility and trust signals",
      "[add any funnel or cohort analysis you ran]"
    ],
    qual: [
      "Partner interviews surfacing client acquisition as the top blocker",
      "Competitor scan of what credible MFD presence looks like"
    ],

    shipped: [
      { group: "Product", items: [
        "Website builder with 5+ templates and 20+ themes",
        "Personalised to each partner's business details, carrying Wealthy's brand as a trust layer"
      ]},
      { group: "Design", items: [
        "Collaborated with UX and Content on Figma web and app designs"
      ]},
      { group: "Localisation", items: [
        "Vernacular support so partners could present in their client's language"
      ]}
    ],

    skills: ["Product Requirements", "User Research", "Funnel Analysis", "GTM", "Figma"],
    ways: ["Cross functional with UX & Content", "Stakeholder Alignment", "Delivery Ownership"],

    notionUrl: ""    /* paste your public notion.site link here */
  },

  /* ─────────── SCAFFOLDED, FILL AS YOU GO ─────────── */
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Growth & Retention",
    title: "Partner Growth System",
    problem: "Partners were being acquired faster than they were activating, so every inactive partner effectively doubled the cost of acquiring an active one.",
    ownership: ["Owned end to end", "Led 6 interns"],
    metric: "+55% WAU",
    metricSub: "inactive users, one quarter",

    timeframe: "[TIMEFRAME]",
    context: "Wealthy.in is a B2B2C wealth tech platform. Advisors onboard their own client base and transact on-platform, so Wealthy earns per transaction.",
    problemFull: "Empanelment cost is locked in the moment a partner converts. Recovery depends entirely on that partner activating. As sourcing scaled, activation stayed flat while every cost line moved up.",
    insight: "The best window to activate a partner is the first 7 days. After that, intent decays fast. The intervention window is narrow and front loaded, not evenly spread across the funnel.",
    metrics: [
      { value: "60%",  label: "ARN funnel activation, by Q2 2026" },
      { value: "+50%", label: "Non ARN sub funnel activation" },
      { value: "9 mo", label: "Payback period, cost per active partner" }
    ],
    quant: [
      "RM touchpoints cross tabbed against days to activation",
      "Cohort split by prior industry background",
      "Cohort split: existing licensed MFDs vs new entrants"
    ],
    qual: [
      "80+ partner interviews across every funnel stage",
      "RM conversations mapping where accountability actually ended"
    ],
    shipped: [
      { group: "People & Training", items: [
        "Structured Partner Training Module, purpose split by ARN and Non ARN",
        "Reframed onboarding as a 30 day plan rather than a checklist",
        "WhatsApp community cohorts for Tier 2 and Tier 3 partners"
      ]},
      { group: "Tech & Operations", items: [
        "Migrated the Non ARN funnel off spreadsheets into the CRM",
        "Built a live funnel dashboard inside the CRM",
        "Introduced a dedicated Onboarding Specialist per empanelment"
      ]},
      { group: "Incentive Design", items: [
        "Tied partner activation into RM incentive structure",
        "Re-engineered the fee refund milestone to a nearer, tangible closure point"
      ]}
    ],
    skills: ["User Research", "Cohort Analysis", "SQL", "Mixpanel", "Funnel Design", "GTM"],
    ways: ["Led 6 product interns", "Cross functional with Sales & Ops", "Stakeholder Alignment"],
    notionUrl: ""
  },

  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Acquisition",
    title: "Lead Funnel & Onboarding Redesign",
    problem: "[One sentence on what was broken in the funnel]",
    ownership: ["[scope]", "[scope]"],
    metric: "+90% CTL",
    metricSub: "click-to-lead · −₹4K CAC",
    timeframe: "[TIMEFRAME]",
    context: "[one line]",
    problemFull: "[2 to 3 lines]",
    insight: "",
    metrics: [
      { value: "+90%", label: "Click to lead conversion" },
      { value: "−₹4K", label: "CAC reduction" },
      { value: "9,700", label: "Client leads generated" }
    ],
    quant: ["[analysis you ran]"],
    qual: ["[research you did]"],
    shipped: [
      { group: "Product", items: [
        "Redesigned lead gen form logic and auto-assignment flows",
        "Vernacular support and personalised branding modules"
      ]}
    ],
    skills: ["Funnel Analysis", "SQL", "Experimentation"],
    ways: ["[how you worked]"],
    notionUrl: ""
  },

  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "0→1 Build",
    title: "CMS — Marketing Automation Tool",
    problem: "[One sentence on the manual process that was breaking]",
    ownership: ["Owned PRD", "Owned Q1–Q3 roadmap"],
    metric: "4–6 hrs",
    metricSub: "saved weekly on campaign setup",
    timeframe: "[TIMEFRAME]",
    context: "[one line]",
    problemFull: "[2 to 3 lines]",
    insight: "",
    metrics: [
      { value: "4–6 hrs", label: "Saved weekly on campaign setup" },
      { value: "4", label: "Channels integrated: Email, WhatsApp, SMS, RCS" }
    ],
    quant: ["[analysis]"],
    qual: ["[research]"],
    shipped: [
      { group: "Product", items: [
        "Owned PRD and the Q1 to Q3 roadmap",
        "Shipped in-house comms platform with scheduling and dynamic segmentation"
      ]}
    ],
    skills: ["Product Requirements", "API Integration", "Roadmapping"],
    ways: ["Worked directly with engineering", "Delivery Ownership"],
    notionUrl: ""
  },

  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Analytics",
    title: "Data & Intelligence Layer",
    problem: "[One sentence on the decision-making gap]",
    ownership: ["[scope]"],
    metric: "400+",
    metricSub: "MFDs retained via insights",
    timeframe: "[TIMEFRAME]",
    context: "[one line]",
    problemFull: "[2 to 3 lines]",
    insight: "",
    metrics: [
      { value: "400+", label: "MFDs retained via adoption insights" }
    ],
    quant: ["ARIMA based lead forecasting model", "Full funnel dashboards, click to empanelment"],
    qual: ["[research]"],
    shipped: [
      { group: "Data", items: [
        "SQL driven activation dashboard for sales leadership",
        "GTV and usage reports flagging adoption decline"
      ]}
    ],
    skills: ["SQL", "ARIMA", "Power BI", "Metabase"],
    ways: ["[how you worked]"],
    notionUrl: ""
  },

  {
    logo: "brane-logo.png",
    logoAlt: "BRANE Enterprises",
    logoDark: true,
    subtitle: "SaaS PM",
    title: "HRMS Product Development",
    problem: "[One sentence on the process gap]",
    ownership: ["[scope]"],
    metric: "30%",
    metricSub: "process automation uplift",
    timeframe: "Jul 2023 – Aug 2024",
    context: "[one line]",
    problemFull: "[2 to 3 lines]",
    insight: "",
    metrics: [
      { value: "30%", label: "Process automation increase" },
      { value: "35%", label: "Reduction in 'Not a Bug' reports" },
      { value: "15%", label: "Renewal rate improvement" }
    ],
    quant: ["Apache Superset dashboards tracking 85% of user flows and KPIs"],
    qual: ["User research and interviews driving workflow design"],
    shipped: [
      { group: "Product", items: [
        "Built Exit and Expense workflows from scratch",
        "Optimised Peer Review application user flows"
      ]}
    ],
    skills: ["User Research", "Product Requirements", "Apache Superset", "SQL"],
    ways: ["Cross functional with UI, QA and GTM"],
    notionUrl: ""
  }

  /* ↓↓↓ PASTE YOUR NEXT PROJECT ABOVE THIS LINE ↓↓↓ */
];
