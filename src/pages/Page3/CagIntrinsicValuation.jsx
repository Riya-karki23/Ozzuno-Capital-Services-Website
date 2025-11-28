// src/pages/CagIntrinsicValuation.jsx
import React from "react";

export default function CagIntrinsicValuation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · Strategic Exits
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Intrinsic Valuation &amp; Asset Scrubbing
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Hard valuation work and documentation scrubbing to withstand
            institutional buyer diligence.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            VALUATION &amp; DATA ROOM LAYER
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We construct enterprise valuations using multi-method triangulation
              — DCF, precedents, and trading comparables — to establish a
              defensible valuation floor.
            </p>
            <p>
              Every asset and liability is scrubbed: cleaning legal titles,
              removing stale receivables, clarifying contingent liabilities, and
              documenting operational metrics. The output is an institutional
              grade data room that can survive hostile Q&amp;A from bidders.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
