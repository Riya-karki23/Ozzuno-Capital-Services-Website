// src/pages/Level5Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level5Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <div className="pointer-events-none absolute inset-x-16 -top-10 h-52 rounded-full bg-sky-100/70 blur-3xl opacity-70" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 5 · Global Markets &amp; Treasury
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Cross-Border Capital, ECB &amp; Trade Finance
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Cross-border capital markets access, ECB syndication, global invoice
            discounting and growth funding under a unified treasury protocol.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-2">
            Source Service: Overseas Investments &amp; Capital Services
          </p>
        </header>

        {/* Main narrative card */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. CROSS-BORDER CAPITAL MARKETS, ECB &amp; GLOBAL LIQUIDITY PROTOCOLS
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We erase national borders to access superior liquidity and
              competitive cost of capital in global markets. Our Overseas
              Investments &amp; Capital Services division specializes in
              navigating FEMA and international banking protocols to facilitate{" "}
              <span className="font-semibold">External Commercial Borrowings</span>{" "}
              (ECB) for Indian corporates.
            </p>
            <p>
              We enable companies to{" "}
              <span className="font-semibold">
                take loans from foreign lenders
              </span>{" "}
              by exploiting interest rate arbitrage between domestic benchmarks
              and global curves (SOFR, LIBOR successors), securing debt at
              competitive rates. Our team manages end-to-end{" "}
              <span className="font-semibold">
                regulatory approvals and compliance
              </span>{" "}
              — all paperwork, RBI filings, and approvals required to legitimize
              foreign debt inflows.
            </p>
            <p>
              In parallel, we accelerate working capital velocity via{" "}
              <span className="font-semibold">
                Global Invoice Discounting &amp; Factoring
              </span>
              . We unblock cash trapped in supply chains by selling or
              discounting export invoices with global financiers, converting
              receivables into instant liquidity and ensuring operations are not
              strangled by cash flow delays.
            </p>
            <p>
              For longer-term expansion, we execute{" "}
              <span className="font-semibold">
                International Growth Funding Syndication
              </span>
              , connecting domestic enterprises with global investors for
              cross-border expansion mandates.
            </p>
            <p>
              Across all these flows, we act as the central interface for{" "}
              <span className="font-semibold">
                lender liaison &amp; cross-border legalities
              </span>
              — negotiating facility agreements under international law,
              scrutinizing cross-border regulations, and ensuring funds are
              raised smoothly, safely, and compliantly.
            </p>
            <p>
              In short, we open the floodgates of global finance, allowing
              companies to raise foreign loans, liquidate receivables instantly,
              and secure international growth capital without being entangled in
              regulatory wires.
            </p>
          </div>
        </section>

        {/* Sub-page cards */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to="/level5/subpage1-1"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 5 · Subpage 1-1
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The Cross-Border Liquidity Bridge™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Phase-wise matrix connecting ECB, invoice discounting and growth
                funding into a single cross-border liquidity rail.
              </p>
              <p className="mt-4 text-[11px] text-sky-700 group-hover:translate-x-1 transition-transform">
                Open matrix →
              </p>
            </Link>

            <Link
              to="/level5/subpage1-2"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 5 · Subpage 1-2
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                ECB Syndication &amp; Foreign Debt Architecture
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Detailed architecture for sourcing, structuring and hedging
                external commercial borrowings.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                View ECB layer →
              </p>
            </Link>

            <Link
              to="/level5/subpage1-3"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 5 · Subpage 1-3
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                Global Invoice Discounting &amp; Factoring
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Structures for converting export receivables into instant cash
                through global financiers.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Explore liquidity rail →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + Statutory */}
        <section className="relative grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          {/* Mandates */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Solar Power Producer (IPP)
                </h3>
                <p className="text-xs text-slate-500">
                  External Commercial Borrowing (ECB)
                </p>
                <p className="mt-1 text-xs">
                  Debt Raise: $65 Million · Status: LRN Generated &amp; Funds
                  Repatriated
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Textile Exporter</h3>
                <p className="text-xs text-slate-500">
                  International Factoring Facility
                </p>
                <p className="mt-1 text-xs">
                  Revolving Limit: $20 Million · Status: Active Liquidity Line
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">IT Services Firm</h3>
                <p className="text-xs text-slate-500">
                  US Market Expansion Growth Funding
                </p>
                <p className="mt-1 text-xs">
                  Capital Injection: $15 Million · Status: Funded by Global
                  Strategic Investor
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory card */}
          <div className="rounded-3xl bg-sky-50 border border-sky-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-900">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Cross-border transactions are executed in strict compliance with
                FEMA, 1999 and RBI Master Directions on ECB and Trade Credit.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Clients acknowledge inherent foreign exchange volatility risk.
                Hedging is mandated but Ozzuno Capital is not liable for losses
                arising from currency movement or sovereign risk in the
                lender&apos;s jurisdiction. All repatriation is subject to
                banking channel clearances.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
