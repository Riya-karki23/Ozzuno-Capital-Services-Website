// src/pages/CagCorporateDarwinism.jsx
import React from "react";

export default function CagCorporateDarwinism() {
  const phases = [
    "Operational Latency Diagnostic: mapping bottlenecks in workflows and hierarchy.",
    "Strategic Blueprinting: defining long-term direction and growth vectors.",
    "Digital & AI Integration: embedding technology stacks into core functions.",
    "Organizational Hierarchy Restructuring: redesigning roles and reporting lines.",
    "Change Management Deployment: training and transition protocols.",
    "Sustainability & ESG Alignment: integrating responsible operating frameworks.",
    "Performance Stabilization: monitoring EBITDA and cost metrics post-change.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · Transformation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Corporate Darwinism Framework™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A structured framework for transforming strategy, operations, and
            organization to survive and dominate.
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
                  <div className="h-6 w-6 rounded-full bg-amber-500 text-[11px] flex items-center justify-center text-white shadow-sm">
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
