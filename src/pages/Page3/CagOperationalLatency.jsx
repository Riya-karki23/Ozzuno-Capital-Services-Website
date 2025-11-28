// src/pages/CagOperationalLatency.jsx
import React from "react";

export default function CagOperationalLatency() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · CAG · Transformation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Operational Latency Diagnostic
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Deep diagnostic on time-loss, bottlenecks, and structural drag
            across the value chain.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            DIAGNOSTIC LAYER
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We instrument the enterprise with time and flow analytics —
              process mapping, queue time analysis, and throughput tracking —
              to identify where capital, decisions, and work get stuck.
            </p>
            <p>
              The output is a latency map that becomes the foundation for
              process re-engineering, automation, and restructuring decisions, so
              that transformation is targeted at real friction points instead of
              cosmetic changes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
