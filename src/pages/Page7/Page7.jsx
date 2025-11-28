// src/pages/Level7.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level7() {
  const tiles = [
    {
      id: "assurance-tax",
      label: "Forensic Assurance & Global Taxation",
      tag: "Assurance, Tax & Audit",
      path: "/level7/page1",
      summary:
        "Statutory audit, forensic assurance and global tax architecture under a single fiscal shield.",
      badge: "L7 · 01",
    },
    {
      id: "erm",
      label: "Enterprise Risk Management (ERM)",
      tag: "Enterprise Risk & Cyber",
      path: "/level7/page2",
      summary:
        "Panoramic risk scanning, threat neutralization and cybersecurity protocols for corporate resilience.",
      badge: "L7 · 02",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-emerald-100/60 blur-3xl opacity-70" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 7 · Assurance, Tax &amp; Risk
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Assurance, Tax &amp; Risk
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            Forensic assurance, tax architecture and enterprise risk management
            designed as a single defensive shield for the balance sheet.
          </p>
        </header>

        {/* Section meta */}
        <section className="relative rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                SECTION 7 · ASSURANCE, TAX &amp; RISK
              </p>
              <p className="text-sm md:text-[15px] text-slate-700">
                This section houses compliance, audit, tax strategy and
                enterprise risk management — from forensic assurance and global
                taxation to cyber and operational risk.
              </p>
            </div>
            <div className="text-xs md:text-sm text-slate-600 space-y-2">
              <div>
                <p className="font-semibold text-slate-700">
                  Core Service Families
                </p>
                <p>Accounting &amp; Tax Services</p>
                <p>Risk Consulting Services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tiles */}
        <section className="grid gap-6 md:grid-cols-2">
          {tiles.map((t) => (
            <Link
              key={t.id}
              to={t.path}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50 border border-slate-200 shadow-md p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/40 blur-2xl" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 relative">
                {t.label}
              </p>
              <div className="mt-3 flex items-baseline justify-between gap-3 relative">
                <h2 className="text-lg md:text-xl font-semibold">{t.tag}</h2>
                <span className="text-[11px] rounded-full border border-slate-300 px-3 py-1 text-slate-600 bg-white/80">
                  {t.badge}
                </span>
              </div>
              <p className="mt-3 text-xs md:text-sm text-slate-600 relative">
                {t.summary}
              </p>
              <p className="mt-4 text-[11px] text-emerald-700 group-hover:translate-x-1 transition-transform relative">
                Open vertical →
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
