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
  initiativesNote: "Seven improvements, sequenced so each one removed a dependency or a manual step.",

  initiatives: [
    {
      tag: "Segmentation",
      t: "Static lists → live query-based audiences",
      d: "CSV uploads go stale the moment they are exported. Replaced them with query-based audience building, so a segment resolves against the database at send time rather than at build time.",
      meta: "Removed the export-then-hope workflow"
    },
    {
      tag: "Reliability",
      t: "Multi-provider failover across every channel",
      d: "Onboarded 3+ providers per channel with automatic rerouting. If one provider's API or service degrades mid-send, delivery continues on the next without anyone waking up to fix it.",
      meta: "Single points of failure removed on all 6 channels"
    },
    {
      tag: "Compliance",
      t: "Category-level subscription control",
      d: "Six independently managed content categories: offers, newsletters, product updates, webinars, feature promotions, transactional. Status is checked at send time, not at list build, so opt-outs can never go stale. Transactional is structurally separated and never blocked by a marketing opt-out.",
      meta: "Compliance enforced in the send path, not in process"
    },
    {
      tag: "User control",
      t: "Self-serve preference centre",
      d: "Surfaced inside the partner app profile. Users choose <b>what</b> they receive, not just whether. Giving people a middle option between everything and nothing is what keeps a list healthy.",
      meta: "Full unsubscribes reduced by offering granularity"
    },
    {
      tag: "Channel expansion",
      t: "RCS added as the sixth channel",
      d: "Integrated alongside Email, WhatsApp, SMS, Push and in-app banners, giving lifecycle campaigns a richer surface with no new vendor contract and no change to how campaigns are authored.",
      meta: "Built on the same abstraction as existing channels"
    },
    {
      tag: "Speed & quality",
      t: "Setup automation and reliability guardrails",
      d: "Variable fields auto-populate and campaign category auto-selects from template and data context. Publish is blocked until validation passes, failure alerts fire at scheduled send time rather than hours later, and every campaign writes a queryable delivery log.",
      meta: "Setup 15 min → 4 min, with fewer broken sends"
    },
    {
      tag: "Visibility",
      t: "Cost and campaign dashboards",
      d: "Two views for two audiences. Finance sees spend split by channel and segregated by provider for billing reconciliation. Marketing sees volume by objective — launch, acquisition, activation, retention — and by audience, partner side against client side.",
      meta: "Per-message economics visible before scale, not after"
    }
  ],

  initiativesDisclaimer: "Screens are not shown. This is an internal platform and its interface is restricted to the operating team.",

  /* clock impact visual */
  clock: {
    fromMins: 15, fromLabel: "15 min", fromCap: "Before",
    toMins: 4,    toLabel: "4 min",    toCap: "After",
    gain: "Roughly <b>4 to 6 hours</b> returned to the team every week"
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
