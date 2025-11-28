// src/pages/CagTransactionFirewall.jsx
import React from "react";

export default function CagTransactionFirewall() {
  const phases = [
    "Commercial Viability Stress-Test: alignment with strategy and goals.",
    "Financial Health Review: auditing counterparty financials.",
    "Risk Quantification: measuring downside in scenarios.",
    "Legal & Compliance Red-Flagging: surfacing legal issues and liabilities.",
    "Deal Structure Optimization: re-framing price, mix and protections.",
    "Profitability Projection: modeling future commercial benefits.",
    "Definitive Agreement Vetting: reviewing contract before execution.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · Deal Validation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Transaction Validation Firewall™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A layered firewall ensuring that only structurally sound, commercially
            viable deals get signed.
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
                  <div className="h-6 w-6 rounded-full bg-rose-500 text-[11px] flex items-center justify-center text-white shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-rose-300 via-slate-300/60 to-transparent" />
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
