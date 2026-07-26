/* ═══════════════════════════════════════════════════════════
   PROJECT · Partner Website Builder
   ═══════════════════════════════════════════════════════════
   This file holds ONE project. Edit freely, nothing else breaks.

   CARD fields (the 5 second scan):
     logo, logoAlt, logoDark, subtitle, title,
     problem    → one sentence on what was broken
     ownership  → array of short scope chips
     metric     → the hero number
     metricSub  → the qualifier that makes it believable

   MODAL fields (the 2 minute read):
     banner, timeframe, context, problemFull, insight,
     metrics [{value,label}], quant [], qual [],
     shipped [{group, items[]}], skills [], ways [], notionUrl
   ═══════════════════════════════════════════════════════════ */

(window.PROJECTS = window.PROJECTS || []).push({

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
  banner: "",                    /* e.g. "banner-branding.png". Empty = dark title block */
  timeframe: "[TIMEFRAME]",

  context: "Wealthy partners are independent MFDs who bring their own client base. Their income depends entirely on acquiring and converting clients themselves.",

  problemFull: "Partners consistently named client acquisition as their biggest blocker, but the failure was happening earlier than the pitch. Most MFDs had no digital presence at all, nothing a prospective client could look up, verify, or trust. Onboarding drop offs traced back to low partner visibility and weak perceived credibility.",

  insight: "Partners weren't losing clients during the pitch. They were losing them before it, at the point where a prospect looks you up and finds nothing. The trust gap sat upstream of the conversation.",

  metrics: [
    { value: "[X]",       label: "[primary impact metric]" },
    { value: "[X]",       label: "[adoption metric]" },
    { value: "5+ / 20+",  label: "Templates and themes shipped" }
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

  notionUrl: ""   /* public notion.site link only. Leave empty to hide the button. */
});
