// src/pages/IbdLiabilityOptimization.jsx
import React from "react";

export default function IbdLiabilityOptimization() {
  const phases = [
    {
      title: "Phase 1 · Credit Profile Enhancement",
      body: "Preparing the company’s financial and compliance posture to appear attractive to lenders.",
    },
    {
      title: "Phase 2 · Financial Documentation",
      body: "Compiling DPRs, CAMs, and financial models to support loan proposals.",
    },
    {
      title: "Phase 3 · Lender Consortium Identification",
      body: "Identifying suitable banks, NBFCs, and private credit funds aligned with the risk profile.",
    },
    {
      title: "Phase 4 · Rate Arbitrage & Negotiation",
      body: "Negotiating aggressively for better interest rates and superior pricing structures.",
    },
    {
      title: "Phase 5 · Debt Restructuring (If Applicable)",
      body: "Re-engineering old debt to reduce cash flow pressure via tenure elongation, moratoriums, or conversion.",
    },
    {
      title: "Phase 6 · Covenant Structuring",
      body: "Negotiating terms and covenants to maximize operational flexibility and minimize restrictions.",
    },
    {
      title: "Phase 7 · Sanction & Disbursement",
      body: "Managing sanction letters, final documentation, and drawdown/disbursement workflows.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · IBD · Debt Syndication
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Liability Optimization Architecture™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A structured matrix for managing loans, restructuring liabilities,
            and engineering funding under optimal terms.
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
