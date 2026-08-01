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
  timeframe: "2025",

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

  trustPoints: [
    "<b>CAC recovery slowed</b> while marketing budgets kept scaling, making every rupee less efficient.",
    "<b>Revenue realisation was delayed</b>, pushing the payback window further out on every cohort.",
    "<b>Sales teams compensated</b> for inactive cohorts, and operational workload rose without proportional business output.",
    "Every cost line moved up. <b>Activation stayed flat.</b>"
  ],

  approachTitle: "Finding the constraint",
  frameworkNote: "Rather than assuming activation was a product issue, I approached it as a funnel optimisation problem: where partners stalled, why they stalled, and which intervention would produce the highest business impact.",

  steps: [
    {
      title: "Map the funnel into measurable events",
      body: "Instead of measuring activation as one KPI, the journey was broken into discrete events and every stage evaluated independently: stage-to-stage conversion, drop-off rates, funnel velocity, conversion window, time-to-activation, and the leading indicators of successful activation.",
      image: "project-activation/act-funnel-kpis.jpg",
      caption: "Funnel snapshot: acquisition investment against conversion and activation rates"
    },
    {
      title: "Quantify the leak",
      body: "Indexed to 100 leads, the compounding effect becomes visible. Only 9 empanel, and just over half of those activate. Every inactive empanelled partner increases the acquisition burden carried by the active ones.",
      image: "project-activation/act-funnel-indexed.jpg",
      caption: "Funnel indexed to 100 leads, current performance against the D45 target"
    },
    {
      title: "Test hypotheses against data and interviews",
      body: "Built activation cohorts in SQL, analysed behavioural events in Mixpanel, monitored operational KPIs in Metabase, prepared segmented datasets in Python and spreadsheet models, then validated every trend against CRM data. Numbers explained where the funnel leaked. Interviews explained why.",
      concerns: [
        { who: "Quantitative · hypotheses tested", items: [
          "Does <b>faster RM engagement</b> increase activation?",
          "Are <b>finance-background partners</b> more likely to activate?",
          "Do <b>existing MFDs</b> activate faster than new entrants?",
          "Does <b>certification delay</b> reduce first transaction?",
          "Which funnel stage contributes the <b>highest abandonment</b>?"
        ]},
        { who: "Qualitative · research conducted", items: [
          "<b>80+ partner interviews</b> across multiple activation stages",
          "Discussions with <b>Relationship Managers</b> on where accountability ended",
          "<b>Shadowing onboarding workflows</b> end to end",
          "Reviewing <b>certification journeys</b> and their failure points",
          "Understanding <b>operational ownership</b> after empanelment"
        ]},
        { who: "Diagnosis · where it actually broke", wide: true, items: [
          "Activation wasn't breaking inside one product flow. It was breaking <b>across multiple organisational handoffs</b>.",
          "Non-ARN and ARN partners stalled at the <b>same funnel stage for completely different reasons</b>."
        ]}
      ]
    },
    {
      title: "Diagnosis: one funnel, multiple problems",
      body: "Partners failed for fundamentally different reasons. Treating every partner with the same activation journey meant optimising for averages while ignoring individual barriers. The solution wasn't improving one screen, it was redesigning the activation system.",
      image: "project-activation/act-diagnosis.jpg",
      caption: "Two cohorts, same funnel stage, entirely different blockers"
    },
    {
      title: "The framework: two funnels, two different problems",
      body: "The data suggested segmentation rather than standardisation. Instead of building one activation journey, we built multiple journeys optimised for what each cohort was actually blocked on.",
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
      title: "Orchestrate across four functions",
      body: "Activation could not be solved by Product alone. It required coordinated execution across Product, Marketing, Sales, Operations and Enablement.",
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
