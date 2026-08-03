/* ═══════════════════════════════════════════════════════════
   PROJECT · Communication Management System
   Uses the alternate modal layout: heroQ, quadrant,
   staggered initiative cards, clock impact visual.
   ═══════════════════════════════════════════════════════════ */

(window.PROJECTS = window.PROJECTS || []).push({

  /* ─── CARD ─── */
  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "Product Improvement",
  modelTag: "Internal Platform",
  companyRole: "Assistant Manager, Product Marketing",
  companyDates: "Sep 2024 – Present",
  title: "Improving the In-House Communication Engine",

  problem: "Six channels, one platform, and a campaign flow that leaked time at every step: static lists, single-provider delivery, no cost visibility.",
  frameQ: "Why are we renting infrastructure that touches every customer we have?",

  finCriticality: {
    value: "15 min",
    desc: "per campaign, manual setup"
  },

  task: "Orchestrated requirements alongside a Senior PM. Owned PRDs, Q1 roadmap, wireframes and delivery across 6 channels.",

  action: "Seven shipped improvements: dynamic segmentation, provider failover, subscription compliance, RCS, setup automation, cost visibility, link shortener.",

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
  contextMore: "The platform already existed. The work was making it dependable, compliant and cheap enough to scale on, without handing customer data to an external vendor to get there.",

  /* hero framing question, replaces the standard thesis block */
  heroQ: "Why are we renting infrastructure that <em>touches every customer we have?</em>",
  heroQSub: "The platform worked. But static lists went stale on export, a single provider outage killed a send, and nobody could answer what a campaign actually cost. Each gap was survivable alone. Together they capped how fast we could ship communication.",

  evidence: [
    { value: "15 min", label: "Per campaign, brief to scheduled send" },
    { value: "CSV",    label: "Static uploads, the only segmentation method" },
    { value: "1",      label: "Provider per channel, no fallback on failure" }
  ],

  /* 2×2 consequence grid, replaces the cascade rows */
  quadrant: [
    { icon: "shield", t: "Data exposure",    d: "Customer PII moved through vendor systems on every send." },
    { icon: "coin",   t: "Opaque spend",     d: "No view of cost by channel or by provider. Billing was a monthly surprise." },
    { icon: "link",   t: "No safety net",    d: "One provider degrading meant the campaign simply failed." },
    { icon: "doc",    t: "Compliance gap",   d: "No category-level opt-out. Marketing and transactional shared one switch." }
  ],
  quadrantNote: "The tool worked. The dependency did not.",

  /* staggered shaded initiative cards */
  initiativesTitle: "What I shipped",
  initiativesNote: "Seven improvements. Each one removed a dependency or a manual step.",

  initiatives: [
    {
      tag: "Segmentation",
      t: "Static lists became live audiences",
      d: "A CSV goes stale the moment it is exported. Query-based audiences resolve against the database at send time instead.",
      meta: "No more export-then-hope"
    },
    {
      tag: "Reliability",
      t: "Failover across every channel",
      d: "3+ providers per channel with automatic rerouting. One provider degrading mid-send no longer kills the campaign.",
      meta: "Single points of failure removed on all six channels"
    },
    {
      tag: "Compliance",
      t: "Opt-out moved into the send path",
      d: "Six content categories, each independently managed. Status is checked at send time, not at list build, so consent can never go stale. Transactional stays structurally separate.",
      meta: "Compliance enforced by the system, not by process"
    },
    {
      tag: "User control",
      t: "A preference centre, not just an unsubscribe",
      d: "Live in the partner app profile. Users pick <b>what</b> they receive, not only whether. The middle option is what keeps a list healthy.",
      meta: "Fewer full opt-outs by offering granularity"
    },
    {
      tag: "Channel expansion",
      t: "RCS, the sixth channel",
      d: "Added alongside Email, WhatsApp, SMS, Push and in-app. Same authoring flow, same abstraction, no new vendor contract.",
      meta: "Shipped without touching how campaigns are built"
    },
    {
      tag: "Speed & quality",
      t: "Setup automated, failures caught early",
      d: "Variable fields auto-populate and category auto-selects from template context. Publish blocks until validation passes, and alerts fire at scheduled send time rather than hours later.",
      meta: "15 min → 4 min, with fewer broken sends"
    },
    {
      tag: "Visibility",
      t: "Two dashboards, two audiences",
      d: "Finance sees spend by channel, split by provider, for billing reconciliation. Marketing sees volume by objective and by audience, partner side against client side.",
      meta: "Per-message economics visible before scale, not after"
    }
  ],

  initiativesDisclaimer: "Screens are not shown in full. This is an internal platform and its interface is restricted to the operating team.",
  blurShot: "project-cms/cms-ui-blur.jpg",

  /* clock impact visual */
  clock: {
    fromMins: 15, fromLabel: "15 min", fromCap: "Before",
    toMins: 4,    toLabel: "4 min",    toCap: "After",
    gainValue: "4–6 hrs",
    gainLabel: "returned to the team, every single week",
    gainSub: "Compounding across every campaign, every launch, every lifecycle nudge"
  },

  northStar: {
    label: "North star metric",
    value: "Campaign creation: 15 min → 4 min",
    desc: "Delivery reliability, compliance control and cost visibility were gained alongside the time saving, not traded against it."
  },

  metrics: [
    { value: "6",   label: "Channels: Email, WhatsApp, SMS, Push, In-app, RCS" },
    { value: "3+",  label: "Providers per channel with automatic failover" },
    { value: "6",   label: "Subscription categories under user control" }
  ],

  keyLearning: "The pitch for an internal tool is rarely the feature list, it is the dependency it removes. Framing this around data ownership, delivery reliability and cost control rather than campaign convenience is what moved it from a nice-to-have onto a funded roadmap. The efficiency gain followed as an outcome, but it was never the argument.",

  skills: ["Product Requirements", "Roadmapping", "API Integration", "Platform Architecture", "Wireframing", "Compliance Design", "Dashboard Design", "Vendor Evaluation"],
  ways: ["Requirement orchestration with Sr. PM", "Worked directly with engineering", "Cross-functional with Marketing, Finance & Compliance", "Delivery ownership"],

  notionUrl: ""
});
