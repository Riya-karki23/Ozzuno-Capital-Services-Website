// src/pages/Level4Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level4Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 4 · Private Capital &amp; Alternatives
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Private Equity Syndication
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Institutional private equity syndication &amp; value engineering for
            high-growth enterprises.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: Private Equity
          </p>
        </header>

        {/* Main narrative */}
        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. INSTITUTIONAL PRIVATE EQUITY SYNDICATION &amp; VALUE ENGINEERING
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We facilitate the massive injection of transformative capital into
              high-growth enterprises. Our Private Equity Services division
              operates as the bridge between scalable corporations and the
              reservoirs of institutional wealth held by Private Equity (PE)
              firms. We do not merely find investors; we architect a fundamental
              shift in ownership structure to unlock the large amounts of money
              required for exponential scaling.
            </p>
            <p>
              Our mandate begins with{" "}
              <span className="font-semibold">
                Strategic Equity Placement
              </span>
              . We negotiate the sale of a significant ownership stake in the
              company, structuring the transaction to balance capital inflow
              with the preservation of promoter influence. Equity dilution is
              engineered so that it is mathematically justified by the projected
              acceleration in Enterprise Value (EV).
            </p>
            <p>
              Once capital is deployed, we drive{" "}
              <span className="font-semibold">
                Operational Recalibration &amp; Management Professionalization
              </span>
              . PE investors demand governance and performance, not just growth.
              We restructure leadership hierarchies, implement rigorous KPI
              tracking, and enforce governance standards aligned with global
              institutional expectations.
            </p>
            <p>
              The infused capital is then weaponized for{" "}
              <span className="font-semibold">
                Expansion &amp; Restructuring
              </span>
              — market penetration, capacity expansion, and strategic
              acquisitions that convert capital inflow into dominance.
            </p>
            <p>
              Finally, we engineer the{" "}
              <span className="font-semibold">
                Liquidity Event &amp; Exit Mechanism
              </span>
              . Private equity is temporary; the objective is always a
              profitable exit. We prepare the company for secondary sales,
              strategic buyouts, or IPOs, managing investor relationships across
              the lifecycle so that stake sales deliver target IRRs.
            </p>
            <p>
              In short, we weaponize institutional capital to force growth,
              restructure operations for efficiency, and engineer lucrative exits
              for all stakeholders.
            </p>
          </div>
        </section>

        {/* Sub-page links */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/level4/subpage1-1"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 4 · Subpage 1-1
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Institutional Equity Injection Mechanism™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Phase-wise mechanism for aligning thesis, modeling, negotiation,
                deployment, and exit with institutional PE investors.
              </p>
              <p className="mt-4 text-[11px] text-sky-600">
                Open execution matrix →
              </p>
            </Link>

            <Link
              to="/level4/subpage1-2"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 4 · Subpage 1-2
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Stake Dilution &amp; Management Professionalization
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Governance upgrades, KPI regimes, and ownership recalibration
                after institutional capital entry.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore governance layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates & statutory */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Consumer Electronics Brand
                </h3>
                <p className="text-xs text-slate-500">
                  Series B Growth Capital Syndication
                </p>
                <p className="mt-1 text-xs">
                  Capital Raise: $30 Million · Status: Closed with Tier-1 Global
                  PE Fund
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Super-Specialty Hospital</h3>
                <p className="text-xs text-slate-500">
                  Private Equity Buyout (Secondary Sale)
                </p>
                <p className="mt-1 text-xs">
                  Enterprise Value: ₹ 750 Crores · Status: Promoter Exit
                  Facilitated
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Agri-Tech Enterprise</h3>
                <p className="text-xs text-slate-500">
                  Strategic Investment &amp; Structuring
                </p>
                <p className="mt-1 text-xs">
                  Stake Dilution: 18% Equity · Status: Funded &amp; Board
                  Reconstituted
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-sky-50 border border-sky-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-800">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Foreign investment is managed under the Foreign Exchange
                Management (Non-debt Instruments) Rules, 2019 and other
                applicable RBI/SEBI norms.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Ozzuno Capital facilitates the capital-raising process but does
                not guarantee valuation or closure of a funding round. All
                investors are subject to AML and KYC checks. Shareholders’
                Agreements are binding; governance disputes post-investment fall
                outside our liability.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
