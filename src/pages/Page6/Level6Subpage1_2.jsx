// src/pages/Level6Subpage1_2.jsx
import React from "react";

export default function Level6Subpage1_2() {
  const bullets = [
    "Two-Way Quotes: indicative bid–ask spreads for key unlisted and pre-IPO names, sourced from qualified counterparties.",
    "Block Order Handling: execution of larger ticket sizes with minimal market signalling and controlled information flow.",
    "Order Routing: matching buy and sell interest, sequencing fills and managing partial executions.",
    "Risk Filters: eligibility checks, position limits and exposure controls aligned with investor profile.",
    "Execution Reporting: clear deal tickets summarizing price, size, counterparty type and settlement date.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 6 · Subpage 1-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Trading Desk (Live Quotes)
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Quote discovery, order routing and execution protocols for unlisted,
            pre-IPO and ESOP equity blocks.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              LIVE QUOTE FRAMEWORK
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                Our trading desk operates as a controlled grey-market exchange
                layer — aggregating interest from family offices, UHNIs and
                institutional desks into a structured order book.
              </p>
              <p>
                Quotes are curated, verified and filtered for seriousness before
                being shown to counterparties, ensuring clean execution without
                noise from speculative or unserious enquiries.
              </p>
              <p>
                The focus is on execution certainty, confidentiality and
                settlement safety rather than high-frequency price ticks.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-indigo-50/80 border border-indigo-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-indigo-900">
              DESK CONTROLS &amp; REPORTING
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
