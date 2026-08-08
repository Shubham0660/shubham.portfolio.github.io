/* ═══════════════════════════════════════════════════════════
   AI PROJECTS · Certificate / Partner Recognition Pipeline
   Edit this file to change the card. index.html renders it.

   costs[].tone : "plain" | "red"   (red = the frustration card)
   pipeline[].icon : simpleicons slug + hex, or omit for plain
   ═══════════════════════════════════════════════════════════ */

(window.AI_FEATURES = window.AI_FEATURES || []).push({

  kicker: "From manual workflows to automated systems",
  title: "One-Click Partner Recognition Pipeline",

  lede: "Recognising 200+ partners monthly is a retention lever. Run by hand, it became <b>the most expensive recurring task in marketing</b>.",

  costs: [
    { k: "Recurring drag", v: "4 teams",            d: "BA, Content, Design, Campaign. Every cycle" },
    { k: "Cycle length",   v: "~3 days",            d: "Pull, design, generate, distribute. All manual" },
    { k: "Real cost",      v: "Creative bandwidth", d: "Campaign thinking traded for repetition", tone: "red" }
  ],

  pipelineLabel: "The pipeline I built",
  pipeline: [
    { name: "Database" },
    { name: "Gemini", icon: "googlegemini/8E75B2" },
    { name: "n8n",    icon: "n8n/EA4B71" },
    { name: "Sheets", icon: "googlesheets/34A853" },
    { name: "Drive",  icon: "googledrive/4285F4" },
    { name: "Email",  icon: "gmail/EA4335" }
  ],

  win: {
    k: "Cycle time",
    v: "3 days &rarr; 5 min",
    d: "Same output, every month, without a person in the loop"
  },

  build: {
    k: "Build cost",
    v: "2 days",
    d: "One-time setup against a permanent monthly cost"
  }

});
