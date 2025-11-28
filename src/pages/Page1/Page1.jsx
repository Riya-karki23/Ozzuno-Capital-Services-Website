// src/pages/LevelOneFirm.jsx
import React from "react";
import { Link } from "react-router-dom"; // if not using router, replace with <a>

export default function LevelOneFirm() {
  const tiles = [
    {
      label: "About · Doctrine & Identity",
      title: "The Ozzuno Doctrine",
      desc: "Ozzuno as a sovereign construct of market architecture and asymmetric capital deployment.",
      to: "/subpage1",
      tag: "About Us",
    },
    {
      label: "Board · Governance",
      title: "The Apex Council",
      desc: "Meritocratic Oligarchy governing capital allocation, risk, and strategic warfare.",
      to: "/subpage2",
      tag: "Board of Directors",
    },
    {
      label: "History · Milestones",
      title: "Chronology of Hegemony",
      desc: "From inception licenses to totalized hegemony across consulting, markets, and private capital.",
      to: "/subpage3",
      tag: "Firm History",
    },
    {
      label: "Global Nodes",
      title: "Strategic Operating Grid",
      desc: "Domestic and international nodes forming the Ozzuno liquidity and intelligence network.",
      to: "/subpage4",
      tag: "Global Presence",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        {/* Top meta */}
        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
          Level 1 · The Firm
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif">
          Corporate Identity
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-600">
          The sovereign corporate construct, governance spine, and historical
          evolution of Ozzuno Capital Services Pvt. Ltd.
        </p>

        {/* Pill strip */}
        <div className="mt-6 flex flex-wrap gap-2 text-[11px] md:text-xs">
          <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-600">
            The Ozzuno Doctrine
          </span>
          <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-600">
            Apex Council · Board
          </span>
          <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-600">
            Chronology of Milestones
          </span>
          <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-600">
            Global Strategic Nodes
          </span>
        </div>

        {/* MAIN BLOCK + CARDS STACKED */}
        <div className="mt-10 space-y-10">
          {/* Top: Doctrine / identity card */}
          <section className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9">
            {/* Soft gradient accent on left edge */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-500 via-cyan-500 to-emerald-500" />

            <div className="space-y-4">
              <p className="text-[11px] tracking-[0.28em] uppercase text-slate-500">
                THE FIRM · SOVEREIGN CORPORATE IDENTITY
              </p>
              <h2 className="text-2xl md:text-3xl font-serif">
                The Ozzuno Doctrine:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500">
                  A Manifesto of Asymmetric Dominance
                </span>
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Ozzuno is engineered as a Sovereign Construct of Market
                Architecture — designed not to merely participate in markets,
                but to command capital flows through informational and
                structural advantage.
              </p>
              <p className="text-xs md:text-sm text-slate-500 max-w-xl">
                This section codifies the doctrine, identity stack, and
                institutional posture of Ozzuno Capital Services Pvt. Ltd.
              </p>
            </div>
          </section>

          {/* Cards: full-width, responsive grid below */}
          <section>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-sm md:text-base font-medium text-slate-700">
                Explore the Firm
              </h3>
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                CORE STRUCTURE · 4 SECTIONS
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {tiles.map((tile) => (
                <Link
                  key={tile.title}
                  to={tile.to}
                  className="group relative block rounded-2xl bg-slate-900 text-slate-50 p-5 md:p-6 
                             overflow-hidden shadow-sm border border-slate-800
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  {/* subtle gradient wash */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-emerald-500/15 opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex flex-col h-full">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                      {tile.label}
                    </p>

                    <div className="mt-3 flex items-start justify-between gap-2">
                      <h4 className="text-base md:text-lg font-semibold leading-snug">
                        {tile.title}
                      </h4>
                      <span className="text-[10px] rounded-full border border-slate-500/80 px-2.5 py-1 text-slate-100 whitespace-nowrap">
                        {tile.tag}
                      </span>
                    </div>

                    <p className="mt-2 text-xs md:text-sm text-slate-200/80">
                      {tile.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-sky-300">
                      <span className="font-medium group-hover:translate-x-1 transition-transform">
                        Open section →
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Level 1 · Detail View
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Horizontal line for section separation */}
          <div className="pt-6">
            <div className="border-t border-slate-200" />
          </div>
        </div>
      </div>
    </main>
  );
}
