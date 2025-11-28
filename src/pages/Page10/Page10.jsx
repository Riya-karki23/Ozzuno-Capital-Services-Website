// src/pages/Level10.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level10() {
  const tile = {
    label: "Asset Management & Wealth",
    tag: "Intergenerational Capital Architecture",
    path: "/level10/page1",
    summary:
      "Closed-loop asset management constructs for UHNWIs and family offices, built around wealth preservation and structural alpha.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-emerald-100/70 blur-3xl opacity-70" />

        {/* FULL-WIDTH HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 10 · Asset Management &amp; Wealth
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Asset Management &amp; Wealth
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            Intergenerational capital architecture for UHNWIs and family
            offices, engineered for preservation first and structural alpha
            second.
          </p>
        </header>

        {/* Section meta */}
        <section className="relative rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            SECTION 10 · ASSET MANAGEMENT &amp; WEALTH
          </p>
          <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
            <p className="text-sm md:text-[15px] text-slate-700 max-w-xl">
              This section houses intergenerational wealth constructs, portfolio
              engineering and fiduciary capital stewardship for elite clients.
            </p>
            <div className="text-xs md:text-sm text-slate-600 space-y-1">
              <p className="font-semibold text-slate-700">
                Source Service:
              </p>
              <p>Asset Management &amp; Wealth Products</p>
              <p className="font-semibold text-slate-700 mt-2">
                Website Display Name:
              </p>
              <p>Wealth Preservation Protocol</p>
            </div>
          </div>
        </section>

        {/* Tile */}
        <section className="grid gap-6 md:grid-cols-1">
          <Link
            to={tile.path}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50 border border-slate-200 shadow-md p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/60 blur-2xl" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 relative">
              The Wealth Preservation Protocol
            </p>
            <div className="mt-3 flex items-baseline justify-between gap-3 relative">
              <h2 className="text-lg md:text-xl font-semibold">{tile.tag}</h2>
             
            </div>
            <p className="mt-3 text-xs md:text-sm text-slate-600 relative">
              {tile.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600 relative">
              <span className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1">
                UHNWI &amp; SFO Only
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1">
                Structural Arbitrage
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1">
                Intergenerational Wealth
              </span>
            </div>
            <p className="mt-4 text-[11px] text-emerald-700 group-hover:translate-x-1 transition-transform relative">
              Enter wealth architecture →
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
