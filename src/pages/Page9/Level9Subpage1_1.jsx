// src/pages/Level9Subpage1_1.jsx
import React from "react";

export default function Level9Subpage1_1() {
  const phases = [
    "Partner Qualification & Vetting: strict selection, due diligence and profiling of prospective franchisees.",
    "Territory Mapping & Allocation: exclusive zones defined to maximize penetration and avoid channel conflict.",
    "Digital Marketplace Integration: provisioning access to the unified platform for loans, insurance and investments.",
    "Product Training & Certification: structured learning and certification on partner product suites.",
    "Lead Generation Synchronization: marketing assets and campaigns driving inquiries directly into partner funnels.",
    "Application Processing & Underwriting: centralized loan / policy processing under standard credit and risk policies.",
    "Commission Settlement & Review: automated payouts, MIS and performance reviews across the portfolio.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-amber-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* FULL-WIDTH HEADER */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 9 · Subpage 1-1
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The B2B2C Distribution Grid™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Execution matrix for setting up and operating the financial
            franchise network.
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
                  <div className="h-6 w-6 rounded-full bg-amber-600 text-[11px] flex items-center justify-center text-white shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-amber-300 via-slate-300/60 to-transparent" />
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
