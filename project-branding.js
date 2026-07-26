/* ═══════════════════════════════════════════════════════════
   PROJECT · Custom Website Builder for MFDs
   ═══════════════════════════════════════════════════════════ */

(window.PROJECTS = window.PROJECTS || []).push({

  /* ─── CARD ─── */
  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "Activation",
  title: "Custom Website Builder for MFDs",

  problem: "Client acquisition dropped 19% YoY in Q2 2025. Nine out of ten partners named the same root cause: no credible digital presence to show when reaching out to potential investors.",
  ownership: ["Owned end to end", "Cross functional with UX & Content"],

  metric: "4,000+",
  metricSub: "client activations in first 7 days · 9,000+ leads",

  /* ─── MODAL ─── */
  banner: "banner-website-builder.jpg",
  timeframe: "Q3 2025",

  context: "Wealthy.in is a digital platform that enables financial advisors to sell stocks, mutual funds, insurance, SIF and debentures in one place through goal based planning, with advisors bringing their own client base and selling via the Wealthy client app.",
  contextMore: "It follows a B2B2C model. Wealthy does not own the end client relationship, the advisor does. That makes the advisor's own credibility the real gate on revenue.",
  businessModel: "Wealthy onboards wealth advisors &rarr; Advisors onboard their own client base &rarr; Advisors sell financial products via the platform &rarr; Platform earns on a transaction based model",

  problemQ: "How do you strengthen partners by equipping them to acquire a client base?",
  thesis: "A partner who can't acquire clients never activates. And an unactivated partner is a fully borne cost with zero return.",

  evidence: [
    { value: "−19% YoY", label: "Client acquisition drop, Q2 2025" },
    { value: "9 in 10",  label: "Partners named the same root cause" }
  ],

  problemFull: "In financial advisory, trust precedes everything. Before a client believes in the product, they need to believe in the person selling it. Partners were reaching out to prospects with nothing credible to point them to, so the funnel was leaking before the first conversation even started.",

  frameworkNote: "Structured using the CIRCLES method: identify users, report their needs, cut through with prioritisation, then list solutions.",

  steps: [
    {
      title: "Identify the users",
      body: "Two distinct personas sat on either side of the same broken moment, each needing something different from it.",
      personas: [
        { name: "Partner · Wealth Advisor", desc: "Needs to look credible and reach region specific audiences in their own language" },
        { name: "Client · Individual Investor", desc: "Needs to verify who this advisor is before sharing personal details" }
      ]
    },
    {
      title: "Report customer needs",
      body: "Mapped pain points separately for both personas, plus a third lens for the product marketing team who had no visibility into partner level performance.",
      image: "cs-painpoints.jpg",
      caption: "Persona wise pain points across partner, client and tracking level"
    },
    {
      title: "Cut through prioritisation",
      body: "Scored every initiative on RICE to separate genuine trust blockers from nice to have engagement features. Advisor credentials scored highest at 198, confirming that identity, not engagement tooling, was the real gate.",
      image: "cs-rice.jpg",
      caption: "RICE prioritisation across six candidate initiatives"
    },
    {
      title: "List solutions",
      body: "Shipped as one personalised partner page, with each element mapped to a specific pain point rather than added as decoration.",
      solutions: [
        { title: "Vernacular language support",
          desc: "Language toggle on the page so partners in Tier 2 and Tier 3 markets can present in the language their client actually thinks in. Removes the relatability gap that generic English pages created." },
        { title: "Advisor identity block",
          desc: "Name, photo, logo, tagline and AMFI Registration Number surfaced upfront. Turns an anonymous link into a verifiable professional, which was the single highest RICE scoring fix." },
        { title: "Products offered",
          desc: "Makes the advisor's actual scope visible, so a client knows what they can be helped with before the first call rather than after." },
        { title: "Goals we help you plan for",
          desc: "Frames the conversation around retirement, education and marriage instead of products. Matches how clients think about money and how Wealthy's goal based planning works." },
        { title: "Financial calculators",
          desc: "A low commitment reason to engage before handing over contact details. Nudges intent without asking for anything." },
        { title: "Lead generation form with tracking",
          desc: "Captures client details and attributes every click, signup and transaction back to the partner. Gave partners self serve visibility and gave the team funnel data that never existed before." }
      ]
    }
  ],

  liveUrl: "https://www.wealthy.in/partners/shubh31019/?lang=en",
  liveLabel: "A real partner website built with the feature",

  beforeAfter: "cs-before-after.jpg",
  beforeAfterCap: "Generic signup page versus a branded partner page",

  northStar: {
    label: "North star metric",
    value: "4,000+ client activations in 7 days",
    desc: "Generated 9,000+ leads in Q3 2025, within the first week of launch."
  },

  metrics: [
    { value: "67%",  label: "Adoption across active partners" },
    { value: "85%",  label: "Adoption among newly onboarded ARN partners" },
    { value: "+37%", label: "Lead growth since branding launch" }
  ],

  skills: ["Competitor Analysis", "Funnel Drop Analysis", "User Research", "Figma", "GTM"],
  ways: ["Cross functional with UX & Content", "Stakeholder Alignment", "Delivery Ownership"],

  notionUrl: ""
});
