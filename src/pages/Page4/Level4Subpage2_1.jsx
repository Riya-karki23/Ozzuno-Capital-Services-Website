// src/pages/Level4Subpage2_1.jsx
import React from "react";

export default function Level4Subpage2_1() {
  const phases = [
    "Capital Needs Assessment: sizing and timing of the funding requirement.",
    "Fund Category Matching: selecting Cat I / II / III and strategy (VC, credit, hedge).",
    "Investment Document Drafting: PPM, contribution agreements, subscription deeds.",
    "Deal Structuring: equity, debt or hybrid instruments aligned with tax & risk.",
    "Regulatory Compliance Check: SEBI AIF regulation checks and filings.",
    "Commercial Negotiation: valuation, preferences, covenants and information rights.",
    "Capital Call & Deployment: drawdown management and fund inflow to the issuer.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 4 · Subpage 2-1
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Alternative Capital Conduit™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A conduit matrix connecting issuer capital requirements to AIF
            vehicles under a structured, compliant process.
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
                  <div className="h-6 w-6 rounded-full bg-violet-600 text-[11px] flex items-center justify-center text-white shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-violet-300 via-slate-300/60 to-transparent" />
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
