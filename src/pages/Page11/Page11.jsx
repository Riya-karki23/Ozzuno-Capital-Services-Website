// src/pages/Level11.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level11() {
  const tiles = [
    {
      id: "1",
      title: "The Digital Foundry",
      tag: "Ozzuno Neural Core & Algorithmic Stack",
      path: "/level11/digital-foundry",
      summary:
        "Proprietary algorithmic infrastructure, cloud-native microservices and the Ozzuno Neural Core powering capital markets execution.",
      pills: ["Neural Core", "Microservices", "ML Models"],
    },
    {
      id: "2",
      title: "Cyber-Sovereignty",
      tag: "Zero-Trust Architecture & Cyber Grid",
      path: "/level11/cyber-sovereignty",
      summary:
        "Military-grade cybersecurity, zero-trust architecture and AI-driven compliance shaping a sovereign data perimeter.",
      pills: ["Zero-Trust", "Blockchain", "AI Surveillance"],
    },
    {
      id: "3",
      title: "Fintech Solutions",
      tag: "Digital Lending & Investment Platforms",
      path: "/level11/fintech-solutions",
      summary:
        "Unified digital marketplace for loans, insurance and investments – fintech execution with merchant banking depth.",
      pills: ["Digital Lending", "Investment Rails", "Franchise Grid"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-indigo-100/70 blur-3xl opacity-70" />

        {/* HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 11 · Technology &amp; Innovation
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Technology &amp; Innovation
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            The Digital Foundry, cyber-sovereign infrastructure and fintech
            rails that turn Ozzuno into a full-stack technology institution.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mt-2">
            SECTION 11 · TECHNOLOGY &amp; INNOVATION
          </p>
        </header>

        {/* grid of 3 tiles */}
        <section className="relative grid gap-6 md:grid-cols-3">
          {tiles.map((item, idx) => (
            <Link
              key={item.id}
              to={item.path}
              className={`group relative overflow-hidden rounded-3xl border shadow-md p-6 md:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
              ${
                idx === 0
                  ? "bg-gradient-to-br from-white via-slate-50 to-indigo-50 border-slate-200"
                  : idx === 1
                  ? "bg-gradient-to-br from-white via-slate-50 to-sky-50 border-slate-200"
                  : "bg-gradient-to-br from-white via-slate-50 to-violet-50 border-slate-200"
              }`}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-indigo-100/60 blur-3xl" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 relative">
                {item.tag}
              </p>
              <div className="mt-3 flex items-baseline justify-between gap-3 relative">
                <h2 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h2>
                <span className="text-[11px] rounded-full border border-slate-300 px-3 py-1 text-slate-600 bg-white/80">
                  {item.id}
                </span>
              </div>
              <p className="mt-3 text-xs md:text-sm text-slate-600 relative">
                {item.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600 relative">
                {item.pills.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full bg-white/80 border border-slate-200 px-3 py-1"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-indigo-700 group-hover:translate-x-1 transition-transform relative">
                Enter module →
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
