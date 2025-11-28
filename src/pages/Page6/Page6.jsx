// src/pages/Level6.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level6() {
  const tile = {
    label: "Unlisted Securities & Pre-IPO Arbitrage",
    tag: "Unlisted & Grey Market",
    path: "/level6/page1",
    summary:
      "Unlisted equity intermediation, pre-IPO arbitrage, and grey-market liquidity under a controlled compliance shell.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-indigo-100/60 blur-3xl opacity-70" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 6 · Unlisted Securities & Grey Market
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Unlisted Securities & Grey Market
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            Trading, pre-IPO blocks and grey-market liquidity for sophisticated
            investors operating beyond the exchange screen.
          </p>
        </header>

        {/* Section meta */}
        <section className="relative rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                SECTION 6 · UNLISTED SECURITIES & GREY MARKET
              </p>
              <p className="text-sm md:text-[15px] text-slate-700">
                This section houses unlisted share dealing, pre-IPO blocks, ESOP
                liquidity and grey-market facilitation under a valuation and
                compliance framework.
              </p>
            </div>
            <div className="text-xs md:text-sm text-slate-600 space-y-2">
              <div>
                <p className="font-semibold text-slate-700">
                  Source Service
                </p>
                <p>Unlisted &amp; Pre-IPO Shares Services</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mt-2">
                  Website Display Name
                </p>
                <p>Unlisted Securities &amp; Pre-IPO Arbitrage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main tile */}
        <section className="grid gap-6 md:grid-cols-1">
          <Link
            to={tile.path}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50 border border-slate-200 shadow-md p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-200/40 blur-2xl" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 relative">
              Unlisted Securities &amp; Pre-IPO Arbitrage
            </p>
            <div className="mt-3 flex items-baseline justify-between gap-3 relative">
              <h2 className="text-lg md:text-xl font-semibold">{tile.tag}</h2>
              
            </div>
            <p className="mt-3 text-xs md:text-sm text-slate-600 relative">
              {tile.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-600 relative">
              <span className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1">
                Pre-IPO Blocks
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1">
                ESOP Liquidity
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1">
                Grey Market Arbitrage
              </span>
            </div>
            <p className="mt-4 text-[11px] text-indigo-700 group-hover:translate-x-1 transition-transform relative">
              Enter grey-market desk →
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
