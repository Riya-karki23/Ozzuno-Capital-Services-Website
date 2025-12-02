// src/pages/WhitepapersPage.jsx
import React, { useState } from "react";
import { whitepaperDivisions } from "../../data/Whitepapers";
import WhitepaperCard from "../../Components/WhitePaperCard";
import SecurePortal from "../../Components/SecurePortal";
import { Link } from "react-router-dom";

export default function WhitepapersPage() {
  // sirf ek division ek time pe open – chaho to null se sab band
  const [openDivisionId, setOpenDivisionId] = useState(null);

  const toggleDivision = (id) => {
    setOpenDivisionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-200">
            Ozzuno Capital
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-300">Gated Intelligence</span>
        </div>

        {/* Hero */}
        <header className="mb-12">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-50 mb-4">
            Gated Intelligence for{" "}
            <span className="text-emerald-300">
              Capital Sovereignty & Strategic Warfare
            </span>
          </h1>

          <p className="text-sm md:text-[15px] text-slate-300 max-w-3xl">
            These dossiers are engineered to expose critical blind spots in conventional
            capital market thinking. Access is selectively granted to leaders operating
            at sovereign and institutional scale.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("secure-portal");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center rounded-full bg-emerald-500/90 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black hover:bg-emerald-400"
            >
              Submit Business Card to Unlock
            </button>
            <p className="text-[11px] text-slate-500">
              First select a Division to view its classified dossiers.
            </p>
          </div>
        </header>

        {/* Divisions – accordion style */}
        <main className="space-y-6">
          {whitepaperDivisions.map((division) => {
            const isOpen = openDivisionId === division.id;
            const total = division.items.length;

            return (
              <section
                key={division.id}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                {/* Division header (clickable) */}
                <button
                  type="button"
                  onClick={() => toggleDivision(division.id)}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 hover:bg-white/5 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                      {division.id.toUpperCase()}
                    </p>
                    <h2 className="text-base md:text-lg font-semibold text-slate-50 mt-1">
                      {division.label}
                    </h2>
                    <p className="hidden md:block text-xs text-slate-400 mt-1">
                      {division.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-3 py-1 rounded-full border border-emerald-400/50 text-emerald-300 bg-black/40">
                      {total} dossiers
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[11px] text-slate-200 transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▸
                    </span>
                  </div>
                </button>

                {/* Small description for mobile when closed */}
                {!isOpen && (
                  <div className="md:hidden px-5 pb-3 text-[11px] text-slate-400">
                    {division.description}
                  </div>
                )}

                {/* Collapsible body */}
                {isOpen && (
                  <div className="border-t border-white/10">
                    <div className="px-5 md:px-6 py-4 md:py-6">
                      <p className="text-xs md:text-sm text-slate-300 mb-4 max-w-2xl">
                        {division.description}
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        {division.items.map((wp) => (
                          <WhitepaperCard key={wp.id} wp={wp} />
                        ))}
                      </div>

                      <p className="mt-4 text-[11px] text-slate-500">
                        To receive any dossier in full, initiate a request via the{" "}
                        <button
                          type="button"
                          onClick={() => {
                            const el = document.getElementById("secure-portal");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="underline underline-offset-4 decoration-emerald-400 hover:text-emerald-300"
                        >
                          Secure Download Portal
                        </button>
                        .
                      </p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </main>

        {/* Gated Portal */}
        <SecurePortal />
      </div>
    </div>
  );
}
