/* ═══════════════════════════════════════════════════════════
   PROJECT · Communication Management System
   Lives in its own folder: project-cms/
   ═══════════════════════════════════════════════════════════ */

(window.PROJECTS = window.PROJECTS || []).push({

  /* ─── CARD, STAR pattern ─── */
  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "0→1 Platform Build",
  modelTag: "Internal Tool",
  title: "Building the In-House Communication Engine",

  problem: "Every campaign ran on manual CSV uploads and third-party tools. Customer data sat outside the company, and setup took 15 minutes per send.",
  frameQ: "Why are we renting infrastructure that touches every customer we have?",

  finCriticality: {
    value: "15 min",
    desc: "per campaign, manual setup"
  },

  task: "Orchestrated requirements end to end alongside a Senior PM. Owned PRDs, Q1 roadmap, wireframes and delivery across 6 channels.",

  action: "Built an in-house platform with dynamic segmentation, multi-provider failover, subscription compliance, and cost visibility.",

  northCard: {
    value: "4 min",
    name: "campaign creation time",
    desc: "down from 15 min"
  },

  ctaPulse: true,

  /* ─── MODAL ─── */
  banner: "",
  timeframe: "2025",

  context: "<b>Wealthy.in</b> runs lifecycle communication across six channels: Email, WhatsApp, SMS, Push, In-app banners and RCS. Every product launch, activation nudge and retention campaign moves through this layer.",
  contextMore: "Third-party tools meant customer data left our systems, per-message costs were opaque, and every new requirement waited on someone else's roadmap.",

  problemQ: "Campaign execution was manual, fragmented, and dependent on infrastructure we did not control.",

  thesis: "Communication is not a peripheral tool, it is the surface every customer touches. Renting it meant <span class=\"hl\">customer data left our systems</span>, costs stayed opaque, and every new capability waited on an external roadmap. Building in-house made data security, cost visibility and channel expansion our own decisions.",

  evidence: [
    { value: "15 min", label: "Per campaign, from brief to scheduled send" },
    { value: "CSV",    label: "Static uploads were the only segmentation method" },
    { value: "1",      label: "Provider per channel. No fallback if it failed" }
  ],

  cascade: {
    rows: [
      { t: "Data left our systems",     d: "Customer PII sat with third-party vendors." },
      { t: "Costs were opaque",         d: "No visibility into spend by channel or provider." },
      { t: "Delivery had no safety net", d: "One provider outage meant a failed campaign." },
      { t: "Compliance risk grew",      d: "No category-level unsubscribe or preference control." }
    ],
    flat: { t: "Roadmap control", d: "Zero. Every new capability waited on an external vendor." },
    note: "The tool worked. The dependency did not."
  },

  approachTitle: "Building the system",
  frameworkNote: "Scoped as a platform build, not a feature. Data ownership, delivery reliability, compliance and cost visibility as first-class requirements.",

  steps: [
    {
      title: "Move segmentation from static to dynamic",
      body: "CSV uploads were replaced with query-based audience building, so segments stay live against the database instead of going stale the moment they are exported."
    },
    {
      title: "Add multi-provider fallback",
      body: "Onboarded 3+ providers per channel with automatic failover. If one provider's API or service degrades, delivery reroutes without manual intervention."
    },
    {
      title: "Build the subscription and preference layer",
      body: "Category-level unsubscribe across offers, newsletters, product updates, webinars and feature promotions. Transactional sends stay separate for compliance.",
      concerns: [
        { who: "Compliance · what we control", items: [
          "Six subscription categories, each independently managed",
          "Transactional communication <b>never blocked</b> by marketing opt-out",
          "Status checked at send time, not at list build"
        ]},
        { who: "User control · preference centre", items: [
          "Self-serve preference management inside the partner app profile",
          "Users choose <b>what they receive</b>, not just whether they receive",
          "Reduces full unsubscribes by offering a middle option"
        ]}
      ]
    },
    {
      title: "Expand channel coverage",
      body: "Integrated RCS alongside Email, WhatsApp, SMS, Push and in-app banners, giving lifecycle campaigns a richer surface without a new vendor contract."
    },
    {
      title: "Cut campaign setup time",
      body: "Auto-populated variable fields and auto-selected campaign categories based on template and data context. Setup dropped from 15 minutes to 4.",
      concerns: [
        { who: "Reliability guardrails", wide: true, items: [
          "Publish blocked until validation passes, so broken campaigns never schedule",
          "Failure alerts fire at scheduled send time, not hours later",
          "Full delivery logs for every campaign, queryable after the fact"
        ]}
      ]
    },
    {
      title: "Instrument cost and campaign visibility",
      body: "Two dashboards: one for finance, one for marketing. Spend became traceable and campaign mix became a decision input rather than a monthly report.",
      concerns: [
        { who: "Cost dashboard · finance view", items: [
          "Spend split by channel: Email, WhatsApp, SMS, RCS",
          "Segregated by provider for <b>billing reconciliation</b>",
          "Makes per-message economics visible before scale, not after"
        ]},
        { who: "Campaign dashboard · marketing view", items: [
          "Volume by channel and by objective: launch, acquisition, activation, retention",
          "Split by audience: partner side vs client side",
          "Surfaces <b>which lifecycle stage is over or under-served</b>"
        ]}
      ]
    },
    {
      title: "Ship supporting infrastructure",
      body: "Added an in-house link shortener, removing another external dependency and bringing click attribution into the same system as the send."
    }
  ],

  northStar: {
    label: "North star metric",
    value: "Campaign creation: 15 min → 4 min",
    desc: "Roughly 4 to 6 hours returned to the team every week, with delivery reliability and cost visibility gained rather than traded away."
  },

  metrics: [
    { value: "4–6 hrs", label: "Returned to the team weekly on campaign setup" },
    { value: "6",       label: "Channels: Email, WhatsApp, SMS, Push, In-app, RCS" },
    { value: "3+",      label: "Providers per channel with automatic failover" }
  ],

  shipped: [
    { group: "Platform", items: [
      "Query-based dynamic audience segmentation, replacing CSV uploads",
      "Multi-provider fallback architecture across all channels",
      "RCS integration alongside five existing channels"
    ]},
    { group: "Compliance & Preference", items: [
      "Category-level subscription management across six content types",
      "Self-serve preference centre in the partner app",
      "Send-time status checks separating transactional from marketing"
    ]},
    { group: "Analytics & Operations", items: [
      "Cost dashboard: spend by channel and by provider",
      "Campaign dashboard: volume by objective and audience",
      "In-house link shortener with native click attribution",
      "Validation gates, failure alerting and delivery logs"
    ]}
  ],

  keyLearning: "The pitch for an internal tool is rarely the feature list. It is the dependency you remove. Framing this as data ownership, delivery reliability and cost control rather than campaign convenience is what moved it from a nice-to-have to a funded roadmap. Efficiency gains followed, but they were the outcome of the argument, not the argument itself.",

  skills: ["Product Requirements", "Roadmapping", "API Integration", "Platform Architecture", "Wireframing", "Compliance Design", "Dashboard Design", "Vendor Evaluation"],
  ways: ["Requirement orchestration with Sr. PM", "Worked directly with engineering", "Cross-functional with Marketing, Finance & Compliance", "Delivery ownership"],

  notionUrl: ""
});
