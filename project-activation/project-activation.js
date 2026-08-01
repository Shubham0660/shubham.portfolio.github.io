/* ═══════════════════════════════════════════════════════════
   PROJECT · Activation, the hidden bottleneck behind rising CAC
   Lives in its own folder: project-activation/
   Images use the "project-activation/" prefix because the browser
   resolves paths against index.html, not against this script.
   ═══════════════════════════════════════════════════════════ */

(window.PROJECTS = window.PROJECTS || []).push({

  /* ─── CARD, STAR pattern ─── */
  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "Growth Strategy",
  modelTag: "B2B",
  title: "Activation: The Hidden Bottleneck Behind Rising CAC",

  problem: "Acquisition scaled 2× YoY. Only 55% of empanelled partners reached first transaction within D45.",
  frameQ: "Why does acquisition scale but activation stay flat?",

  finCriticality: {
    value: "~45%",
    desc: "of acquired partners never activate. CAC sunk, payback period stretched."
  },

  task: "End-to-end ownership. Funnel diagnosis through SQL cohorts, Mixpanel events and 80+ partner interviews. Delivery orchestrated across 5 functions.",

  action: "Segmented one funnel into two: certification track for Non-ARN, client acquisition stack for ARN. Rebuilt reporting, ownership and incentives per cohort.",

  northCard: {
    value: "55% → 75%",
    name: "first transaction, D45",
    desc: "+2 active partners per 100 leads. Compounds at scale."
  },

  ctaPulse: true,

  /* ─── MODAL ─── */
  banner: "",
  timeframe: "2026",

  context: "As <b>Wealthy.in</b> expanded partner acquisition through performance marketing, referral programmes and offline sales, the acquisition engine was no longer the limiting factor. The business was successfully bringing more MFDs into the ecosystem, but growth after empanelment failed to scale at the same pace.",
  contextMore: "Acquisition cost is incurred much earlier than revenue generation. Scaling acquisition without improving activation compounds inefficiency as the business grows.",
  businessModel: "Marketing, referrals and sales bring partners in &rarr; Partner completes empanelment, acquisition cost locks in &rarr; Partner executes first transaction &rarr; Revenue begins, CAC recovery starts",

  problemQ: "The bottleneck had shifted. The challenge was no longer acquiring partners, it was activating them.",

  thesis: "Every partner carries an acquisition cost the moment they empanel, but revenue only starts at their first transaction. As acquisition scaled and activation stayed flat, inactive partners silently increased the burden carried by active ones, extending the <span class=\"hl\">payback period</span> of every marketing investment.",

  evidence: [
    { value: "2×",  label: "Acquisition investment scaled YoY across digital and offline" },
    { value: "9%",  label: "Lead to empanelment conversion rate" },
    { value: "55%", label: "First transaction within D45, against a 75% target" }
  ],

  cascade: {
    rows: [
      { t: "CAC recovery slowed",        d: "Marketing budgets kept scaling. Every rupee got less efficient." },
      { t: "Revenue realisation delayed", d: "Payback window pushed further out on every cohort." },
      { t: "Sales load increased",        d: "Teams compensated for inactive cohorts." },
      { t: "Ops workload increased",      d: "More effort, no proportional business output." }
    ],
    flat: { t: "Activation", d: "Flat at 55% through the entire period." },
    note: "Every cost line moved up. Activation stayed flat."
  },

  approachTitle: "Finding the constraint",
  frameworkNote: "Treated as a funnel optimisation problem, not a product one. Where partners stalled, why, and which intervention moved the business most.",

  steps: [
    {
      title: "Instrument the funnel",
      body: "Activation broken into discrete events, each stage measured independently: stage-to-stage conversion, drop-off, funnel velocity, conversion window, time-to-activation.",
      image: "project-activation/act-funnel-kpis.jpg",
      caption: "Funnel snapshot: acquisition investment against conversion and activation rates"
    },
    {
      title: "Quantify the leak",
      body: "Indexed to 100 leads: only 9 empanel, barely half of those activate. Each inactive partner raises the acquisition burden carried by the active ones.",
      image: "project-activation/act-funnel-indexed.jpg",
      caption: "Funnel indexed to 100 leads, current performance against the D45 target"
    },
    {
      title: "Test the hypotheses",
      body: "Numbers showed where the funnel leaked. Interviews showed why. Five hypotheses tested against cohort data, then validated through 80+ partner conversations.",
      hypotheses: [
        { q: "Does faster RM engagement increase activation?",        m: "SQL cohorts · touchpoint data" },
        { q: "Are finance-background partners more likely to activate?", m: "Cohort split · CRM profile" },
        { q: "Do existing MFDs activate faster than new entrants?",   m: "Cohort split · time-to-activation" },
        { q: "Does certification delay reduce first transaction?",    m: "Funnel velocity · Mixpanel" },
        { q: "Which stage contributes the highest abandonment?",      m: "Stage-to-stage drop-off" }
      ],
      concerns: [
        { who: "Diagnosis · where it actually broke", wide: true, items: [
          "Activation wasn't breaking inside one product flow. It was breaking <b>across organisational handoffs</b>.",
          "Non-ARN and ARN partners stalled at the <b>same stage for entirely different reasons</b>."
        ]}
      ]    },
    {
      title: "Diagnosis · one funnel, two problems",
      body: "Partners failed for different reasons. One shared journey meant optimising for averages and ignoring the actual barrier. Not a screen problem, a system problem.",
      image: "project-activation/act-diagnosis.jpg",
      caption: "Two cohorts, same funnel stage, entirely different blockers"
    },
    {
      title: "Segment into two funnels",
      body: "Segmentation over standardisation. Two journeys, each built around what that cohort was actually blocked on.",
      concerns: [
        { who: "Non-ARN Partners · blocked on certification", items: [
          "Pain: <b>“I haven't cleared my ARN yet.”</b>",
          "Needs: confidence, structured guidance, exam preparation, habit formation, community",
          "Business objective: <b>increase certification completion</b>",
          "Primary intervention: <b>training ecosystem</b>"
        ]},
        { who: "ARN Partners · blocked on client acquisition", items: [
          "Pain: <b>“I have the license. Now where do I find customers?”</b>",
          "Needs: marketing support, personal branding, sales enablement, product education",
          "Business objective: <b>increase first transaction</b>",
          "Primary intervention: <b>Website Builder, marketing enablement, partner resources</b>"
        ]}
      ]
    },
    {
      title: "Execute across functions",
      body: "Not solvable by Product alone. Coordinated execution across five functions.",
      solutions: [
        { title: "Product-Led Growth",
          desc: "Partners lacked confidence selling financial products. Introduced in-app learning playlists, contextual educational resources, the Partner Website Builder, and improved feature discoverability. Reduced product learning friction while improving business readiness." },
        { title: "Technology & Operations",
          desc: "Activation reporting lacked ownership and visibility. Migrated the Non-ARN workflow from spreadsheets into CRM, built live activation dashboards, and introduced onboarding ownership per empanelment. Created operational visibility with real accountability." },
        { title: "Partner Enablement",
          desc: "Training was generic and disconnected from activation outcomes. Designed structured learning journeys, split tracks for ARN and Non-ARN cohorts, created a 30-day activation plan, and built WhatsApp learning communities. Improved confidence while accelerating readiness." },
        { title: "Marketing & Incentives",
          desc: "Existing incentives rewarded long-term outcomes but failed to motivate early activation. Redesigned refund incentives, introduced lifecycle nudges, personalised communication by funnel stage, and segmented activation journeys. Increased motivation during the highest drop-off period." }
      ]
    }
  ],

  northStar: {
    label: "North star metric",
    value: "55% → 75% first transaction within D45",
    desc: "Every 20 points of activation recovers 2 additional active partners per 100 leads, compounding significantly at scale and pulling CAC recovery forward."
  },

  metrics: [
    { value: "80+",  label: "Partner interviews across activation stages" },
    { value: "2",    label: "Segmented activation journeys replacing one generic funnel" },
    { value: "5",    label: "Functions aligned: Product, Marketing, Sales, Ops, Enablement" }
  ],

  keyLearning: "Acquisition problems often look like marketing problems. Activation problems often look like product problems. In reality, sustainable growth comes from understanding where business systems break, not just where user interfaces break. The most impactful decisions here came not from shipping more features, but from combining quantitative analytics, qualitative research and cross-functional execution to improve the entire activation system.",

  skills: ["Funnel Optimization", "Product Analytics", "Root Cause Analysis", "Cohort Segmentation", "Time-to-Activation Analysis", "SQL", "Mixpanel", "Metabase", "Python", "Figma", "GTM Strategy", "Growth Strategy"],
  ways: ["End-to-End Ownership", "Product Discovery", "Prioritisation", "Cross-functional Leadership across 9 teams", "Stakeholder Management", "Metrics Tracking"],

  notionUrl: ""
});
