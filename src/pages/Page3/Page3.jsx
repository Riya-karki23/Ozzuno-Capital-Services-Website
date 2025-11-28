// src/pages/LevelThreeCAG.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function LevelThreeCAG() {
  const sections = [
    {
      id: "mna",
      label: "Mergers, Acquisitions & Inorganic Growth",
      tag: "M&A Syndication",
      path: "/cag/inorganic-growth",
      summary:
        "Targeted acquisitions, mergers, and inorganic expansion programs designed as conquest engines.",
    },
    {
      id: "divestiture",
      label: "Strategic Divestiture & Exit Architecture",
      tag: "Strategic Exits",
      path: "/cag/divestiture",
      summary:
        "High-velocity divestitures, carve-outs, and liquidity events engineered for superior exit multiples.",
    },
    {
      id: "transformation",
      label: "Strategic Corporate Transformation",
      tag: "Business Engineering",
      path: "/cag/transformation",
      summary:
        "Macro-strategic realignment, digital transformation, and operational re-engineering.",
    },
    {
      id: "deal-validation",
      label: "Deal Validation & Commercial Diligence",
      tag: "Validation Firewall",
      path: "/cag/deal-validation",
      summary:
        "Commercial, financial, and legal stress-tests to prevent value-destructive transactions.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · Corporate Advisory Group (CAG)
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Corporate Advisory Group
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            The strategic consulting, deals, and restructuring command center —
            where M&A, exits, transformations, and deal validation are executed
            as controlled corporate warfare.
          </p>
        </header>

        {/* Section meta */}
        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            SECTION 3 · CORPORATE ADVISORY GROUP (CAG)
          </p>
          <p className="mt-3 text-sm md:text-[15px] text-slate-700">
            This section houses strategic consulting, deals, and restructuring —
            from inorganic growth and divestitures to corporate transformation
            and deal validation.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 text-xs md:text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-700">Source Services</p>
              <ul className="mt-1 space-y-1">
                <li>• M&amp;A Services (Mergers &amp; Acquisitions)</li>
                <li>• Strategic Exit Services</li>
                <li>• Deal Consulting Services</li>
                <li>• Business Consulting Services</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-700">
                Website Display Names
              </p>
              <ul className="mt-1 space-y-1">
                <li>• Mergers, Acquisitions &amp; Inorganic Growth</li>
                <li>• Strategic Divestiture &amp; Exit Architecture</li>
                <li>• Deal Validation &amp; Commercial Diligence</li>
                <li>• Strategic Corporate Transformation</li>
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
              CAG · 4 SUBPAGES
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((sec, index) => (
              <Link
                key={sec.id}
                to={sec.path}
                className="group relative rounded-3xl bg-white shadow-md border border-slate-200 
                           p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl 
                           hover:border-sky-200"
              >
                {/* subtle gradient edge to make it feel like a “module” */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-3xl bg-gradient-to-b from-sky-500 via-cyan-500 to-emerald-500" />

                <div className="pl-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {sec.label}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {sec.tag}
                    </h3>
                   
                  </div>

                  <p className="mt-3 text-xs md:text-sm text-slate-600">
                    {sec.summary}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px]">
                    <span className="text-sky-600 font-medium group-hover:translate-x-1 transition-transform">
                     View Page →
                    </span>
                    <span className="text-slate-400">
                      Detail view · {index === 0 ? "Inorganic Growth" : index === 1 ? "Exits" : index === 2 ? "Transformation" : "Validation"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
