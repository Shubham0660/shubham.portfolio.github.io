/* ═══════════════════════════════════════════════════════════
   CORPORATE PROJECTS — Wealthy.in & BRANE work
   ═══════════════════════════════════════════════════════════
   TO ADD A NEW PROJECT:
   1. Copy one whole { ... } block below (including the comma after it)
   2. Paste it right before the closing "];" at the bottom
   3. Edit the text inside — that's it, nothing else to touch
   4. Save this file, upload to GitHub (same folder: data/), commit

   FIELDS:
   logo      — path to the company logo file (must be uploaded to repo root,
               or update the path if you organize logos into a folder)
   logoAlt   — text for screen readers / if image fails to load
   logoDark  — set to true ONLY if the logo is white/light colored and needs
               a dark chip behind it to stay visible (like BRANE's logo)
   subtitle  — short label next to the logo (e.g. "Growth & Retention")
   title     — the project's name (bold headline on the card)
   desc      — 1-2 sentence description of what you did
   metric    — the big hero number (e.g. "+55%")
   metricSub — small caption under the metric (e.g. "inactive users, one quarter")
   ═══════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Growth & Retention",
    title: "Partner Growth System",
    desc: "Diagnosed churn via 100+ partner interviews & Mixpanel cohorts. Built Poster Gallery, gamified onboarding & event tracking.",
    metric: "+55% WAU",
    metricSub: "inactive users, one quarter"
  },
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Acquisition",
    title: "Lead Funnel & Onboarding Redesign",
    desc: "Redesigned lead gen form logic, auto-assignment flows, vernacular support & personalised branding modules.",
    metric: "+90% CTL",
    metricSub: "click-to-lead · −₹4K CAC"
  },
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "0→1 Build",
    title: "CMS — Marketing Automation Tool",
    desc: "Owned PRD + Q1–Q3 roadmap. Shipped in-house comms platform: Email, WhatsApp, SMS & RCS APIs with segmentation.",
    metric: "4–6 hrs",
    metricSub: "saved weekly on campaign setup"
  },
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Analytics",
    title: "Data & Intelligence Layer",
    desc: "ARIMA lead forecasting, full-funnel dashboards, SQL activation tracker for sales leadership & GTV adoption reports.",
    metric: "400+",
    metricSub: "MFDs retained via insights"
  },
  {
    logo: "brane-logo.png",
    logoAlt: "BRANE Enterprises",
    logoDark: true,
    subtitle: "SaaS PM",
    title: "HRMS Product Development",
    desc: "Built Exit & Expense workflows from scratch, optimised Peer Review app flows, Superset dashboards tracking 85% of KPIs.",
    metric: "30%",
    metricSub: "process automation uplift"
  },
  {
    logo: "wealthy-logo.png",
    logoAlt: "Wealthy.in",
    logoDark: false,
    subtitle: "Activation",
    title: "Partner Learning Module",
    desc: "Directed 6 product interns to ship gamified learning flows — leaderboards, progress tracking, onboarding-fee policy.",
    metric: "85%",
    metricSub: "activation in 50 days"
  }

  /* ↓↓↓ PASTE YOUR NEXT PROJECT HERE, ABOVE THIS LINE ↓↓↓ */
];
