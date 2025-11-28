// src/pages/CagCommercialStressTest.jsx
import React from "react";

export default function CagCommercialStressTest() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · Deal Validation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Commercial Viability Stress-Test
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Stress-testing the underlying commercial logic and profitability of a
            transaction before commitment.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            COMMERCIAL ANALYSIS LAYER
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We reconstruct the deal&apos;s business case from first principles —
              revenue drivers, unit economics, cost synergies, and market
              elasticity.
            </p>
            <p>
              Scenario analysis is run under best, base, and worst cases to
              understand break-even thresholds and downside containment. Only
              deals that survive this stress environment move to signature
              stage.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
