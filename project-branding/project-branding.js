/* ═══════════════════════════════════════════════════════════
   PROJECT · Custom Website Builder for MFDs
   Lives in its own folder: project-branding/
   Images below are referenced with the "project-branding/" prefix.
   wealthy-logo.png is the exception, shared across every project card.
   ═══════════════════════════════════════════════════════════ */

(window.PROJECTS = window.PROJECTS || []).push({

  /* ─── CARD, STAR pattern ─── */
  logo: "wealthy-logo.png",
  logoAlt: "Wealthy.in",
  logoDark: false,
  subtitle: "Client Acquisition",
  modelTag: "B2B2C",
  title: "Custom Website Builder for MFDs",

  /* Situation */
  problem: "9 in 10 MFDs cite client acquisition, not product knowledge, as their scaling blocker.",
  frameQ: "How to look credible to prospective clients?",

  /* Situation, the stakes */
  finCriticality: {
    value: "20%",
    desc: "partner churn. No credibility to land high-value clients."
  },

  /* Task */
  task: "End-to-end ownership. Competitor research, funnel drop analysis, CIRCLES framework. Shipped with Tech and UX.",

  /* Action, tightened for the card. Full detail lives in the modal's solutions list. */
  action: "RICE-prioritised, then shipped personalised partner pages: verified identity, AMFI credentials, product offerings, vernacular support and built-in lead tracking.",

  /* Result, on the card */
  ctaPulse: true,

  northCard: {
    value: "4,000+",
    name: "activations in 7 days",
    desc: "9,000+ leads in a single quarter."
  },

  /* ─── MODAL ─── */
  banner: "project-branding/banner-website-builder.jpg",
  timeframe: "Q3 2025",

  context: "<b>Wealthy.in</b> is a digital platform that enables financial advisors to sell products such as stocks, mutual funds, insurance, SIF and debentures in one place through goal based planning. It follows a <b>B2B2C</b> business model, where advisors bring their own client base and sell products via the Wealthy client app.",
  contextMore: "Wealthy does not own the end client relationship, the advisor does. That makes the advisor's own credibility the real gate on platform revenue.",
  businessModel: "Wealthy onboards wealth advisors &rarr; Advisors onboard their own client base &rarr; Advisors sell financial products via the platform &rarr; Platform earns on a transaction based model",

  problemQ: "How do you strengthen partners by equipping them to acquire a client base?",

  thesis: "A partner who can't activate clients into investing becomes an unactivated MFD on Wealthy. That partner is a fully borne cost with zero return, which directly stretches the <span class=\"hl\">payback period</span>.",

  evidence: [
    { value: "−19% YoY", label: "Client Activation drop, Q2 2025" },
    { value: "9 in 10",  label: "Partners named the same root cause" },
    { value: "70%",      label: "Advisors sit below ₹50 Cr AUM, too small to justify their own website" }
  ],

  /* condensed to points instead of one long paragraph */
  trustPoints: [
    "In financial advisory, <b>trust precedes everything</b>. Partners were reaching out to prospects with nothing credible to point them to.",
    "Personal trust from an advisor's own network <b>only scales so far</b>. 9 in 10 partners hit this wall the moment they tried to grow past people who already knew them.",
    "Building credibility independently wasn't realistic either: <b>70% of MFDs manage under ₹50 Cr</b> in AUM, well below what it takes to justify a personal website.",
    "The existing onboarding page offered <b>no visual credibility</b> of its own, so partners had no way to make acquisition any easier for themselves."
  ],

  approachTitle: "Approach",
  frameworkNote: "Structured on the CIRCLES method: surfaced real pain points, validated them with research, prioritised ruthlessly, then rebuilt the page with an analytical layer partners could use to follow up on leads.",

  /* Identify + Report merged into one step, no repeated persona framing */
  steps: [
    {
      title: "Identify users, report their needs",
      body: "Two personas sat on either side of the same broken moment. Mapped their concerns directly, then added a third lens for the product marketing team who had no partner level visibility into the funnel at all.",
      concerns: [
        { who: "Partner · Wealth Advisor", items: [
          "Cannot serve <b>region specific audiences</b> without vernacular language support",
          "Struggles to make the <b>first connection</b> when the client's contact details aren't available",
          "No way to display personal identity: name, logo, tagline, ARN credentials or product scope",
          "No <b>owned page</b> worth sharing on social channels for personal branding",
          "No clarity on <b>what happens after</b> a client submits the signup form"
        ]},
        { who: "Client · Individual Investor", items: [
          "Signup form gives <b>no context</b> on what Wealthy is or why it's different",
          "No visibility into the advisor's <b>AUM, AMFI credentials or products offered</b>",
          "Nothing to build <b>trust before</b> handing over personal details",
          "No engagement tools like calculators to explore before committing",
          "No thank you page or guidance on what to expect post submission"
        ]},
        { who: "Tracking gap · Product marketing", wide: true, items: [
          "No way to attribute <b>link shares per partner</b>, so partner level performance was invisible",
          "No count of how many clients <b>landed on the form versus signed up</b>, so drop off could not be diagnosed or improved"
        ]}
      ]
    },
    {
      title: "Cut through prioritisation",
      body: "Scored every initiative on RICE to separate real trust blockers from nice-to-have tooling. Advisor credentials led at 198, the real gate on conversion. Vernacular support matched it on impact but cost more effort, so it was sequenced, not dropped.",
      image: "project-branding/cs-rice.jpg",
      caption: "RICE scoring across the six prioritised partner and client concerns"
    },
    {
      title: "List solutions",
      body: "Shipped as one personalised partner page, with every element traced back to a specific concern rather than added as decoration.",
      solutions: [
        { title: "Vernacular language support",
          desc: "Language toggle on the page so partners in Tier 2 and Tier 3 markets present in the language their client actually thinks in. Closes the relatability gap that a generic English page created." },
        { title: "Advisor identity block",
          desc: "Name, photo, logo, tagline and AMFI Registration Number surfaced upfront. Converts an anonymous link into a verifiable professional, the highest RICE scoring fix at 198." },
        { title: "Products offered",
          desc: "Makes the advisor's actual scope visible, so a client knows what they can be helped with before the first call instead of discovering it after." },
        { title: "Goals we help you plan for",
          desc: "Frames the conversation around retirement, education and marriage rather than products. Matches how clients think about money and mirrors Wealthy's goal based planning model." },
        { title: "Financial calculators",
          desc: "A low commitment reason to engage before handing over contact details. Builds intent without asking for anything in return." },
        { title: "Lead capture with partner level tracking and reminders",
          desc: "Captures client details, attributes every click, signup and transaction back to the partner, and reminds partners to follow up. Gave partners self serve visibility and closed the team's funnel attribution gap." }
      ]
    }
  ],

  liveUrl: "https://www.wealthy.in/partners/shubh31019/?lang=en",
  liveLabel: "A live partner page built with the feature",
  liveDomain: "wealthy.in/partners/shubh31019",
  livePreview: "project-branding/cs-live-preview.jpg",

  beforeAfter: "project-branding/cs-before-after.jpg",
  beforeAfterCap: "Generic signup page versus a branded partner page",

  northStar: {
    label: "North star metric",
    value: "4,000+ client activations in 7 days",
    desc: "Generated 9,000+ leads in Q3 2025, within the first week of launch."
  },

  metrics: [
    { value: "67%",      label: "Feature adoption across active partners" },
    { value: "85%",      label: "Feature adoption among newly onboarded ARN partners" },
    { value: "−10 days", label: "Faster business activation for partners using the feature, shortening payback period" }
  ],

  skills: ["Competitor Analysis", "Funnel Drop Analysis", "User Research", "Figma", "GTM"],
  ways: ["Cross functional with UX & Content", "Stakeholder Alignment", "Delivery Ownership"],

  notionUrl: ""
});
