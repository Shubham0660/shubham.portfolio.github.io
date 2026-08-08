/* ═══════════════════════════════════════════════════════════
   AI PROJECTS · Partner Recognition Pipeline
   Edit this file to change the banner. index.html renders it.

   metrics[].icon : "team" | "clock" | "money"
   metrics[].tone : "violet" | "amber" | "red"
   steps[].icon   : simpleicons "slug/hex", or "db" for the
                    built-in database mark
   ═══════════════════════════════════════════════════════════ */

(window.AI_FEATURES = window.AI_FEATURES || []).push({

  kicker: "From manual workflows to automated systems",
  titleA: "One-Click Partner",
  titleB: "Recognition Pipeline",
  lede: "Automated monthly end-to-end recognition, from <b>data to delivery</b>.",

  callout: {
    note:  "Every month.",
    value: "200+",
    label: "Partner certificates generated per cycle"
  },

  metrics: [
    {
      icon: "team", tone: "violet",
      k: "Recurring drag", v: "4 Teams",
      d: "BA, Content, Design, Campaign Manager"
    },
    {
      icon: "clock", tone: "amber",
      k: "Cycle length", v: "~3 Days",
      d: "Pull, design, generate, distribute. All manual"
    },
    {
      icon: "money", tone: "red",
      k: "Real cost", v: "~22 Hours / Month",
      breakdown: [
        { t: "4 hrs",  d: "Data collection from POCs" },
        { t: "16 hrs", d: "Certificate creation (200+)" },
        { t: "2 hrs",  d: "Email distribution" }
      ]
    }
  ],

  stepsLabel: "What I built",
  steps: [
    { icon: "db",                  name: "Data from DB" },
    { icon: "googlegemini/5B2BD9", name: "Design update via Gemini" },
    { icon: "n8n/EA4B71",          name: "Certificate creation via n8n" },
    { icon: "googlesheets/34A853", name: "Compiled on Sheets" },
    { icon: "googledrive/4285F4",  name: "Stored in Drive" },
    { icon: "gmail/EA4335",        name: "Direct email distribution" }
  ],

  footer: {
    line: "End-to-end automation. Trigger once, done.",
    chips: [
      { k: "Cycle time", v: "3 days &rarr; 5 min", tone: "win" },
      { k: "Build cost", v: "2 days, one-time" }
    ]
  }

});
