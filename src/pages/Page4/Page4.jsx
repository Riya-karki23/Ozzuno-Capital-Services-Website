// src/pages/Level4.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level4() {
  const tiles = [
    {
      id: "pe",
      label: "Private Equity Syndication",
      tag: "Institutional Private Capital",
      path: "/level4/page1",
      summary:
        "Institutional private equity for high-growth enterprises — stake dilution, governance professionalization and engineered exits.",
    },
    {
      id: "aif",
      label: "AIF Structuring & Advisory",
      tag: "Alternative Investment Funds",
      path: "/level4/page2",
      summary:
        "Category I / II / III AIF capital conduits, regulatory alignment and structuring for sophisticated investors.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 4 · Private Capital & Alternatives
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Private Capital & Alternatives
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            Institutional private equity, AIF advisory, and alternative capital
            conduits that weaponize off-balance-sheet capital for exponential
            growth.
          </p>
        </header>

        {/* Section meta */}
        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            SECTION 4 · PRIVATE CAPITAL & ALTERNATIVES
          </p>
          <p className="mt-3 text-sm md:text-[15px] text-slate-700 max-w-3xl">
            This section houses institutional investment and fund advisory —
            from private equity syndication to AIF structuring and deployment.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 text-xs md:text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-700">Source Services</p>
              <ul className="mt-1 space-y-1">
                <li>• Private Equity</li>
                <li>• AIF (Alternative Investment Fund) Advisory</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-700">
                Website Display Names
              </p>
              <ul className="mt-1 space-y-1">
                <li>• Private Equity Syndication</li>
                <li>• AIF Structuring &amp; Advisory</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tiles */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-sm md:text-base font-medium text-slate-700">
              
            </h2>
            <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
             
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tiles.map((t, index) => (
              <Link
                key={t.id}
                to={t.path}
                className="group relative rounded-3xl bg-white shadow-md border border-slate-200 
                           p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl 
                           hover:border-sky-200"
                style={{
                  opacity: 1,
                  animation: `fadeUp 0.4s ease-out ${index * 0.08}s both`,
                }}
              >
                {/* Gradient spine on the left */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-3xl bg-gradient-to-b from-sky-500 via-cyan-500 to-emerald-500" />

                <div className="pl-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {t.label}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h2 className="text-lg md:text-xl font-semibold">
                      {t.tag}
                    </h2>
                    
                  </div>

                  <p className="mt-3 text-xs md:text-sm text-slate-600">
                    {t.summary}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px]">
                    <span className="text-sky-600 font-medium group-hover:translate-x-1 transition-transform">
                     view more →
                    </span>
                    <span className="text-slate-400">
                      Detail view · {index === 0 ? "Private Equity" : "AIF"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Horizontal divider for page separation */}
          <div className="pt-8">
            <div className="border-t border-slate-200" />
          </div>
        </section>
      </div>
    </main>
  );
}
