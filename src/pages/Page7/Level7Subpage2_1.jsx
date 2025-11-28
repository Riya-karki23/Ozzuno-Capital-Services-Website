// src/pages/Level7Subpage2_1.jsx
import React from "react";

export default function Level7Subpage2_1() {
  const phases = [
    "Enterprise Risk Scanning: holistic review of business model, geographies and value chain.",
    "Financial & Liquidity Stress Testing: mapping leverage, covenants and cash-flow resilience.",
    "Legal & Compliance Audit: identifying regulatory gaps, litigation hotspots and contract exposures.",
    "Operational Vulnerability Assessment: pinpointing single points of failure across plants, people and processes.",
    "Cybersecurity Penetration Testing: probing digital infrastructure for exploitable weaknesses.",
    "Solution Engineering: designing specific remediation plans, controls and playbooks.",
    "Control Implementation & Monitoring: deploying fixes and tracking risk metrics over time.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 7 · Subpage 2-1
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Threat Neutralization Protocol™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A stepwise protocol to identify, prioritize and neutralize enterprise
            risk vectors.
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
                  <div className="h-6 w-6 rounded-full bg-emerald-600 text-[11px] flex items-center justify-center text-white shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-emerald-300 via-slate-300/60 to-transparent" />
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
