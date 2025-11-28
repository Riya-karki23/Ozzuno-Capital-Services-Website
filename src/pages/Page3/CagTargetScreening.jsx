// src/pages/CagTargetScreening.jsx
import React from "react";

export default function CagTargetScreening() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · M&amp;A
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Target Screening &amp; Hostile Defense
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Strategic screening of acquisition targets and defense architecture
            against hostile or predatory approaches.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            SCREENING &amp; DEFENSE LAYER
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We build a dynamic universe of potential targets structured around
              strategic fit, sectoral adjacency, and synergy density. Each
              candidate is scored on operational architecture, balance sheet
              strength, and cultural compatibility with the acquirer.
            </p>
            <p>
              Parallelly, we implement hostile defense protocols for clients at
              risk of unsolicited bids. This includes poison-pill style
              structuring, staggered boards, shareholder communication strategy,
              and alliance-building with friendly capital to repel predatory
              takeovers.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
