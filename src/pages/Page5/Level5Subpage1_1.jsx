// src/pages/Level5Subpage1_1.jsx
import React from "react";

export default function Level5Subpage1_1() {
  const phases = [
    "Global Opportunity Scanning: identifying foreign lenders, investors and liquidity lines (ECB, trade credit, growth funding).",
    "Regulatory Feasibility (FEMA / RBI): validating eligibility, end-use, all-in cost ceilings and route feasibility.",
    "Lender / Investor Mapping: matching company profile with global banks, funds and trade finance institutions.",
    "Structuring & Negotiation: engineering pricing, tenors, covenants and security structures for loans or equity.",
    "Invoice Validation (for discounting): verifying export invoices and buyer risk to qualify for instant cash.",
    "Compliance & Approval: preparing documentation and securing regulatory approvals and banking clearances.",
    "Fund Repatriation & Onward Deployment: bringing capital into India through authorized channels and deploying to business use.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 5 · Subpage 1-1
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Cross-Border Liquidity Bridge™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A unified execution matrix for foreign loans, global invoice
            discounting and international growth funding.
          </p>
        </header>

        <section className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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
