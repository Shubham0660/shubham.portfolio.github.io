(window.PROJECTS = window.PROJECTS || []).push({

  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "Conversion & Acquisition",
  modelTag: "B2B",
  title: "Raising Lead Qualification Rate to 60%",

  problem: "Paid acquisition filled the funnel faster than sales could work it. Without qualification, connect rate capped empanelment growth.",
  frameQ: "Which leads deserve the first call?",

  finCriticality: {
    value: "45%",
    desc: "high potential lead rate, flat"
  },

  task: "End-to-end ownership. Funnel diagnosis through form design, lead scoring logic, and segmented comms.",

  action: "Progressive-profiling form, ARN-based routing, thank-you engagement layer, segmented communication journeys, performance dashboard.",

  northCard: {
    value: "60%",
    name: "high potential lead rate",
    desc: "achieved in 60 days"
  },

  ctaPulse: true,

  banner: "project-leadfunnel/lf-banner.jpg",
  timeframe: "2025",

  context: "As <b>Wealthy.in</b> scaled partner acquisition through paid campaigns, the sales team couldn't keep pace. Every lead looked the same in the CRM, so sales prioritised by arrival order, not potential.",
  contextMore: "Acquisition cost locks in at empanelment. Recovery depends entirely on that partner's likelihood to transact. As sourcing scaled faster than qualification improved, CAC efficiency declined.",

  problemQ: "How do we help sales call the right leads first?",

  thesis: "Sales bandwidth is finite. Calling every lead in arrival order spends equal effort on a browser as on a licensed distributor ready to transact. Without <span class=\"hl\">precision qualification at form-fill</span>, connect rate becomes the ceiling.",

  evidence: [
    { value: "4 fields",  label: "Form captured only name, phone, email, OTP" },
    { value: "45%",       label: "High potential lead rate, flat despite scaling" },
    { value: "~100%",     label: "All leads competing for finite sales bandwidth" }
  ],

  cascade: {
    rows: [
      { t: "Lead quality stayed flat",    d: "More volume landed on the CRM, same priority mechanism." },
      { t: "Connect rate capped",         d: "Sales couldn't reach everyone. Best leads were lost." },
      { t: "CAC payback extended",        d: "Unqualified leads sunk cost without revenue to offset it." },
      { t: "Sales workload increased",    d: "Team compensated by calling more, reaching fewer qualified leads." }
    ],
    flat: { t: "Qualification signal", d: "Zero. Every lead looked the same to the assignment system." },
    note: "Acquisition scaled. Qualification stayed flat."
  },

  approachTitle: "Finding the lever",
  frameworkNote: "Funnel optimisation: where qualification broke, why, and which intervention moved connect rate most.",

  steps: [
    {
      title: "Trace the funnel constraint",
      body: "Empanelment flows from connect rate, which flows from assignment quality. Lead qualification, not volume, became the actual lever."
    },
    {
      title: "Phase the form to reduce friction",
      body: "One long form loses everyone. Capture contact first, then earn qualification data from those who continue.",
      imageCarousel: [
        { src: "project-leadfunnel/lf-form-identity.jpg", caption: "Capture identity first" },
        { src: "project-leadfunnel/lf-form-otp.jpg", caption: "Verify the contact" },
        { src: "project-leadfunnel/lf-form-qualification.jpg", caption: "ARN status: highest signal field" },
        { src: "project-leadfunnel/lf-form-profession.jpg", caption: "Profession for non-ARN leads" },
        { src: "project-leadfunnel/lf-lead-profile.jpg", caption: "Profile created, ready for routing" },
        { src: "project-leadfunnel/lf-thankyou-engagement.jpg", caption: "Engagement layer post-submit" },
        { src: "project-leadfunnel/lf-funnel-outcome.jpg", caption: "Higher quality pipeline" }
      ]
    },
    {
      title: "Auto-assign to priority queue",
      body: "Three form answers sort the funnel automatically. P0 leads hit the CRM first so day-one calls land on highest-conversion prospects."
    },
    {
      title: "Use thank-you page as intent sensor",
      body: "Optional resources keep the lead warm while every click feeds back into priority scoring. Self-declared intent before any sales call."
    },
    {
      title: "Route by qualification tier",
      body: "Licensed MFDs and curious CAs need opposite conversations. Comms split so credibility builds before the call."
    },
    {
      title: "Instrument the funnel",
      body: "Real-time visibility end to end: budget pacing, lead forecasting, source-level CAC, empanelment tracking."
    },
    {
      title: "Measure impact",
      body: "60% high potential lead rate in 60 days. Sales converted faster, CAC payback improved, efficiency compounded at scale."
    }
  ],

  northStar: {
    label: "North star metric",
    value: "60% high potential lead rate",
    desc: "Better qualification shortened time-to-conversion and improved CAC payback."
  },

  metrics: [
    { value: "+90%",  label: "Click-to-submission conversion via progressive phasing" },
    { value: "75%",   label: "Sales connect rate: 75 calls per 100 leads, 60 high potential" }
  ],

  shipped: [
    {
      group: "Product",
      items: [
        "Progressive-profiling form: identity → qualification → profession",
        "ARN-based lead routing and CRM auto-assignment logic"
      ]
    },
    {
      group: "Analytics & Insights",
      sideImage: "project-leadfunnel/lf-dashboard.jpg",
      items: [
        "Full-funnel dashboard tied to empanelment outcomes",
        "Budget pacing meter for real-time spend vs. target decisions",
        "ARIMA demand forecasting to predict lead volume ahead of budget"
      ]
    },
    {
      group: "Activation & Comms",
      sideImage: "project-leadfunnel/lf-comms-channels.jpg",
      items: [
        "Thank-you page engagement layer capturing behavioural intent",
        "Segmented communication journeys by qualification tier"
      ]
    }
  ],

  keyLearning: "The strongest qualification signal sat upstream of the product. By asking the right questions at form-fill in a structured, friction-free phased approach, every downstream system became more efficient. The lever wasn't more features. It was asking better questions earlier.",

  skills: ["Funnel Design", "Lead Scoring & Routing", "Progressive Profiling", "SQL", "Metabase", "ARIMA Forecasting", "Event Tracking", "CRM Workflow Design"],
  ways: ["Partnered with Sr. PM on routing logic", "Cross-functional with Sales & Marketing", "End-to-end ownership"],

  notionUrl: ""

});
