// src/pages/Level5.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level5() {
  const tiles = [
    {
      id: "gm-core",
      label: "Cross-Border Capital, ECB & Trade Finance",
      tag: "Global Markets & Treasury",
      path: "/level5/page1",
      summary:
        "Foreign currency loans, invoice discounting, and growth funding orchestrated under a single cross-border treasury grid.",
      badge: "L5 · 01",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft glow bg */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-64 rounded-full bg-sky-100/60 blur-3xl opacity-60" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 5 · Global Markets & Treasury
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Global Markets &amp; Treasury
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            Cross-border capital, foreign currency debt, and global liquidity
            structures that connect Indian balance sheets to international
            markets.
          </p>
        </header>

        {/* Section meta card */}
        <section className="relative rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                SECTION 5 · GLOBAL MARKETS &amp; TREASURY
              </p>
              <p className="text-sm md:text-[15px] text-slate-700">
                This section houses all cross-border and foreign currency
                services — from ECB and trade credit to global invoice
                discounting and international growth funding.
              </p>
            </div>
            <div className="text-xs md:text-sm text-slate-600 space-y-2">
              <div>
                <p className="font-semibold text-slate-700">Source Service</p>
                <p>Overseas Investments &amp; Capital Services</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mt-2">
                  Website Display Name
                </p>
                <p>Cross-Border Capital, ECB &amp; Trade Finance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main tile – full width, strong CTA */}
        <section className="relative mt-4">
          {tiles.map((t) => (
            <Link
              key={t.id}
              to={t.path}
              className="group relative block w-full overflow-hidden rounded-3xl 
                         bg-gradient-to-br from-white via-slate-50 to-sky-50 
                         border border-slate-200 shadow-md 
                         p-6 md:p-8 transition-all duration-300 
                         hover:-translate-y-1 hover:shadow-2xl hover:border-sky-300 
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />

              <div className="relative space-y-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  {t.label}
                </p>

                <div className="mt-1 flex items-baseline justify-between gap-3">
                  <h2 className="text-lg md:text-xl font-semibold">
                    {t.tag}
                  </h2>
                  
                </div>

                <p className="mt-2 text-xs md:text-sm text-slate-600">
                  {t.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600">
                  <span className="inline-flex items-center rounded-full bg-white/90 border border-slate-200 px-3 py-1">
                    ECB Syndication
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 border border-slate-200 px-3 py-1">
                    Global Invoice Discounting
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 border border-slate-200 px-3 py-1">
                    Cross-Border Growth Funding
                  </span>
                </div>
              </div>

              {/* Full-width highlighted CTA row */}
              <div className="relative mt-6 -mx-6 md:-mx-8 border-t border-sky-100">
                <div className="px-6 md:px-8 py-3 bg-sky-50/70 group-hover:bg-sky-100/80 transition-colors flex items-center justify-between text-[11px]">
                  <p className="font-semibold text-sky-800 tracking-wide group-hover:translate-x-0.5 transition-transform">
                    Open global liquidity stack →
                  </p>
                  
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
