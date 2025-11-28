// src/pages/Level6Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level6Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <div className="pointer-events-none absolute inset-x-16 -top-10 h-52 rounded-full bg-indigo-100/70 blur-3xl opacity-70" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 6 · Unlisted Securities &amp; Grey Market
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Unlisted Securities &amp; Pre-IPO Arbitrage
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Intermediation, liquidity and leverage solutions in unlisted,
            pre-IPO and grey-market equity.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-2">
            Source Service: Unlisted &amp; Pre-IPO Shares Services
          </p>
        </header>

        {/* Main narrative card – your full content */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. UNLISTED SECURITIES INTERMEDIATION &amp; PRE-IPO EQUITY ARBITRAGE
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              Operating within the opaque and illiquid corridors of the
              Over-the-Counter (OTC) markets, our Unlisted &amp; Pre-IPO
              Services division provides sophisticated investors with privileged
              access to off-market equity before value is diluted by public
              discovery. We facilitate the acquisition and liquidation of
              high-alpha assets in an ecosystem typically restricted to
              institutional power players. This is not retail trading; this is
              the strategic accumulation of ownership in the shadow banking
              system.
            </p>
            <p>
              Our <span className="font-semibold">Proprietary Trading Infrastructure</span> serves as a
              liquidity engine for unlisted, pre-IPO, and ESOP (Employee Stock
              Ownership Plan) securities. We bridge the gap between fragmented
              sellers and institutional buyers, creating a secure,
              settlement-guaranteed environment for the transfer of ownership in
              companies that are on the cusp of exponential valuation shifts.
            </p>
            <p>
              We provide{" "}
              <span className="font-semibold">
                Institutional Investment Guidance
              </span>{" "}
              that transcends simple stock picking. Our analysts dissect cap
              tables, growth vectors, and sector dynamics of upcoming
              enterprises, identifying undervalued assets with private
              equity–grade rigor. Capital is allocated into entities with robust
              fundamentals that have yet to undergo the price discovery of a
              public exchange.
            </p>
            <p>
              Beyond facilitation, we offer{" "}
              <span className="font-semibold">
                Transaction Financing &amp; Leverage Solutions
              </span>
              . Recognizing that high-value pre-IPO blocks require significant
              capital, we engineer funding mechanisms and loan structures that
              allow investors to leverage positions via debt-syndicated
              acquisition models — amplifying return on equity (ROE).
            </p>
            <p>
              This is supported by a rigorous{" "}
              <span className="font-semibold">
                Valuation &amp; Compliance Framework
              </span>
              . In unlisted markets, price is subjective; we make it empirical.
              Independent valuation assessments using DCF and comparable company
              analysis validate pricing, while documentation is curated to
              legitimize off-market transfers in strict adherence with Section
              56(2) of the Income Tax Act and other statutes governing fair
              market value.
            </p>
            <p>
              Our{" "}
              <span className="font-semibold">
                Client Assistance &amp; Deal Execution
              </span>{" "}
              team manages transactions from term sheet to share certificate
              transfer. We navigate ROFR clauses, shareholder agreements and
              lock-in periods, acting as central counterparty to deliver
              settlement with zero operational friction.
            </p>
            <p>
              In essence, we democratize access to the venture stage, allowing
              investors to trade in the exclusive domain of pre-public equity
              with the safety, valuation rigor and support typically reserved
              for sovereign wealth funds.
            </p>
          </div>
        </section>

        {/* 3 Sub-page cards (click → subpages) */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            GREY MARKET SUB-PAGES
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Subpage 1-1 */}
            <Link
              to="/level6/subpage1-1"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 6 · Subpage 1-1
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The Grey Market Liquidity Engine™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Execution matrix for safe, compliant and fully-settled trading
                of off-market unlisted and pre-IPO equity.
              </p>
              <p className="mt-4 text-[11px] text-indigo-700 group-hover:translate-x-1 transition-transform">
                View execution matrix →
              </p>
            </Link>

            {/* Subpage 1-2 */}
            <Link
              to="/level6/subpage1-2"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 6 · Subpage 1-2
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The Trading Desk (Live Quotes)
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Quote discovery, two-way pricing and order execution protocols
                for unlisted and pre-IPO blocks.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Enter live desk →
              </p>
            </Link>

            {/* Subpage 1-3 */}
            <Link
              to="/level6/subpage1-3"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 6 · Subpage 1-3
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                Valuation &amp; Compliance Checks
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                FMV determination, documentation and regulatory alignment for
                safe off-market share transfers.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Explore valuation layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + statutory */}
        <section className="relative grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          {/* Mandates */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">Ed-Tech Leader</h3>
                <p className="text-xs text-slate-500">
                  Employee Stock Option (ESOP) Liquidation Block
                </p>
                <p className="mt-1 text-xs">
                  Transaction Value: ₹ 85 Crores · Status: 100% Block Placement
                  with Family Offices
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">National Retail Chain</h3>
                <p className="text-xs text-slate-500">
                  Strategic Pre-IPO Equity Acquisition
                </p>
                <p className="mt-1 text-xs">
                  Deal Size: ₹ 150 Crores · Executed at 15% Discount to Grey
                  Market Price
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Aerospace &amp; Defence Startup
                </h3>
                <p className="text-xs text-slate-500">
                  Series-C Secondary Exit
                </p>
                <p className="mt-1 text-xs">
                  Volume: 2.5 Lakh Shares · Status: Cleared &amp; Settled (T+1)
                </p>
              </div>
            </div>
          </div>

          {/* Statutory */}
          <div className="rounded-3xl bg-indigo-50 border border-indigo-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-indigo-900">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Transactions are governed by Section 56(2)(x) of the Income Tax
                Act, 1961, for Fair Market Value (FMV) determination, and by
                applicable SEBI regulations on pre-IPO and lock-in conditions.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Investments in unlisted securities are highly illiquid and lack
                a public price discovery mechanism. Pre-IPO shares may be
                subject to post-listing lock-ins. Ozzuno Capital acts as an
                intermediary and does not warrant listing timelines or exit
                valuations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
