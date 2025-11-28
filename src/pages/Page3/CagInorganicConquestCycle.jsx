// src/pages/CagInorganicConquestCycle.jsx
import React from "react";

export default function CagInorganicConquestCycle() {
  const phases = [
    "Inorganic Strategy Definition: criteria for growth via acquisition.",
    "Target Screening & Identification: locating companies that fit the strategic mold.",
    "Preliminary Approach: initiating contact and signing NDAs.",
    "Forensic Due Diligence: deep-dive audit of value, financials, and risks.",
    "Synergy Valuation & Pricing: calculating combined value and deal price.",
    "Deal Structuring: deciding cash vs. stock mix and tax implications.",
    "Regulatory Approval & Compliance: managing NCLT, CCI, and other approvals.",
    "Post-Merger Integration: unifying operations and cultures post-close.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · M&amp;A
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Inorganic Conquest Cycle™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A proprietary, phase-driven matrix for executing mergers and
            acquisitions as a controlled conquest program.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            EXECUTION MATRIX · PHASE GRID
          </p>
          <div className="mt-6 space-y-5">
            {phases.map((text, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-sky-600 text-[11px] flex items-center justify-center text-white shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-sky-300 via-slate-300/60 to-transparent" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-slate-700">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
