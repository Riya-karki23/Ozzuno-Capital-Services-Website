// src/pages/LevelTwoIBD.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function LevelTwoIBD() {
  const sections = [
    {
      id: "ipo",
      level: "IPO Advisory & Capital Markets Origination",
      path: "/ibd/ipo",
      summary:
        "End-to-end IPO readiness, governance remediation, DRHP construction, and post-listing compliance.",
      tag: "IPO & Listing",
    },
    {
      id: "merchant",
      level: "Merchant Banking & Underwriting Operations",
      path: "/ibd/merchant-banking",
      summary:
        "Capital raising, issue management, underwriting syndicates, and large-scale transaction management.",
      tag: "Merchant Banking",
    },
    {
      id: "debt",
      level: "Debt Syndication & Structured Finance",
      path: "/ibd/debt-syndication",
      summary:
        "Strategic debt procurement, liability restructuring, and lender consortium engineering.",
      tag: "Debt & Liquidity",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* Top meta */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · Investment Banking Division (IBD)
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Investment Banking Division
          </h1>
          <p className="mt-2 max-w-3xl text-sm md:text-base text-slate-600">
            The heavy-lift engine for IPOs, capital markets origination, merchant
            banking, and debt syndication — where private enterprises are
            weaponized for sovereign-scale capital.
          </p>
        </header>

        {/* Pill strip */}
        <div className="flex flex-wrap gap-2 text-[11px] md:text-xs">
          {[
            "IPO Advisory & Capital Markets Origination",
            "Merchant Banking & Underwriting",
            "Debt Syndication & Structured Finance",
          ].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-slate-300/80 bg-white/70 px-3 py-1 text-slate-600 shadow-sm backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.6fr)] items-stretch">
          {/* Left: big explainer */}
          <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              SECTION 2 · INVESTMENT BANKING DIVISION
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              Heavy Financial Lifting & Public Market Sovereignty
            </h2>
            <p className="mt-4 text-sm md:text-[15px] text-slate-600 leading-relaxed">
              This division houses Ozzuno’s capital markets war room. IPO
              origination, merchant banking, underwriting, and debt syndication
              are executed as a unified command grid — from forensic governance
              clean-ups and DRHP drafting to underwriting, book building, and
              liability optimization for distressed or growth-stage enterprises.
            </p>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500">
                SOURCE SERVICES
              </p>
              <ul className="mt-2 text-xs md:text-sm text-slate-600 space-y-1">
                <li>• IPO Consulting &amp; Listing Services</li>
                <li>• Merchant Banking Services</li>
                <li>• Debt &amp; Financial Consulting Services</li>
              </ul>
            </div>
          </section>

          {/* Right: tiles */}
          <section className="space-y-4">
            {sections.map((sec, index) => (
              <Link
                key={sec.id}
                to={sec.path}
                className="group block rounded-2xl bg-slate-900 text-slate-50 p-5 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  opacity: 1,
                  animation: `fadeUp 0.4s ease-out ${index * 0.08}s both`,
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                  {sec.level}
                </p>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {sec.tag}
                  </h3>
                  <span className="text-[11px] rounded-full border border-slate-500 px-3 py-1 text-slate-200">
                    IBD · 0{index + 1}
                  </span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-slate-200/85">
                  {sec.summary}
                </p>
                <p className="mt-4 text-[11px] font-medium text-sky-300 group-hover:translate-x-1 transition-transform">
                  Open vertical →
                </p>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
