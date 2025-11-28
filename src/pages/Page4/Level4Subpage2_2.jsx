// src/pages/Level4Subpage2_2.jsx
import React from "react";

export default function Level4Subpage2_2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 4 · Subpage 2-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Category I, II, III Fund Matching
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Matching issuer use-cases and risk profiles with the appropriate AIF
            category and strategy.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            FUND MAPPING LAYER
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                Category I AIF
              </h2>
              <p className="mt-2 text-xs">
                Venture capital, SME, infrastructure, social impact. Ideal for
                early and growth-stage companies seeking equity-like risk
                capital.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                Category II AIF
              </h2>
              <p className="mt-2 text-xs">
                Private credit, structured credit, PE-style buyouts without
                leverage limits at the fund level. Suitable for mature
                businesses and credit-backed structures.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                Category III AIF
              </h2>
              <p className="mt-2 text-xs">
                Hedge / trading strategies, public market long-short, complex
                derivatives. Relevant where the issuer’s story aligns with
                listed securities and sophisticated strategies.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs md:text-sm text-slate-700 space-y-3">
            <p>
              We map the client&apos;s capital need, risk tolerance, and timeline
              to the right category and specific fund mandates, ensuring that
              expectations on liquidity, risk and control are aligned from day
              zero.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
