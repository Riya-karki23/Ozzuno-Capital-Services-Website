// src/pages/Level5Subpage1_2.jsx
import React from "react";

export default function Level5Subpage1_2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 5 · Subpage 1-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            ECB Syndication &amp; Foreign Debt Architecture
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Designing, syndicating and hedging external commercial borrowings
            for Indian corporates under FEMA and RBI frameworks.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          {/* Architecture */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              ECB ARCHITECTURE
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We structure ECB facilities that align end-use, tenor and pricing
                with RBI&apos;s Master Directions and the client&apos;s balance
                sheet strategy. This begins with eligibility checks, sector caps
                and route feasibility (automatic vs. approval).
              </p>
              <p>
                Once feasibility is validated, we run a global RFP-style process
                with international banks and funds, negotiating all-in costs,
                security packages, covenants and amortization profiles to
                deliver competitive foreign currency debt.
              </p>
              <p>
                We then manage the full regulatory workflow — obtaining LRN,
                filing mandatory returns, and coordinating with AD banks to
                ensure clean inflow and on-going compliance across the life of
                the loan.
              </p>
            </div>
          </div>

          {/* Risk & Hedging */}
          <div className="rounded-3xl bg-sky-50 border border-sky-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-900">
              RISK, HEDGING &amp; DOCUMENTATION
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Forex &amp; Rate Risk:</span>{" "}
                We design hedging strategies (forwards, swaps, options) to
                protect against currency and interest rate volatility, aligning
                hedge tenor with cash flow visibility.
              </p>
              <p>
                <span className="font-semibold">Documentation:</span> We work
                with international counsel to finalize facility agreements under
                English or applicable law, ensuring alignment between loan docs,
                security documents and Indian regulatory requirements.
              </p>
              <p>
                <span className="font-semibold">Monitoring:</span> Post-drawdown,
                we coordinate compliance filings, interest and principal
                schedules, and track covenant performance so that the ECB
                remains fully aligned with regulatory and commercial parameters.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
