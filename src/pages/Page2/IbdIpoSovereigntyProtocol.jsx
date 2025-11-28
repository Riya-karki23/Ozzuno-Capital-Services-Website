// src/pages/IbdIpoSovereigntyProtocol.jsx
import React from "react";

export default function IbdIpoSovereigntyProtocol() {
  const phases = [
    {
      title: "Phase 1 · Governance Diagnostic & Gap Analysis",
      body: "Forensic audit of the current corporate structure against SEBI and exchange listing norms.",
    },
    {
      title: "Phase 2 · Financial Restatement & Sanitization",
      body: "Conversion of financials to Ind AS, valuation solidification, and rectification of internal controls.",
    },
    {
      title: "Phase 3 · Capital Structure Optimization",
      body: "Engineering the equity split, promoter holding dilution, and pre-IPO placement strategy.",
    },
    {
      title: "Phase 4 · Regulatory Dossier Construction",
      body: "Drafting the Draft Red Herring Prospectus (DRHP) and filing with SEBI/Registrar of Companies.",
    },
    {
      title: "Phase 5 · Anchor Investor Mapping",
      body: "Identifying and securing institutional commitments prior to the public issue.",
    },
    {
      title: "Phase 6 · Roadshow & Book Building",
      body: "Marketing the issue to QIBs, HNIs, and retail investors to drive robust subscription.",
    },
    {
      title: "Phase 7 · Listing Day Synchronization",
      body: "Coordinating Registrar, bankers, and exchanges for the final bell ceremony and trading debut.",
    },
    {
      title: "Phase 8 · Post-Listing Compliance Regime",
      body: "Establishing permanent investor relations and disclosure infrastructure for ongoing compliance.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · IBD · IPO Advisory
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Public Markets Sovereignty Protocol™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Proprietary execution matrix covering the journey from IPO readiness
            to post-listing support — a phased control system for public
            markets domination.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            EXECUTION MATRIX · PHASE GRID
          </p>
          <div className="mt-6 space-y-5">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-slate-900 text-[11px] flex items-center justify-center text-slate-50 shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-slate-400/80 via-slate-300/60 to-transparent" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-sm md:text-base font-semibold">
                    {phase.title}
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-slate-600">
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
