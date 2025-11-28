// src/pages/IbdDebt.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function IbdDebt() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · Investment Banking Division
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Debt Syndication &amp; Structured Finance
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Debt syndication, capital restructuring, and liquidity engineering
            — turning the balance sheet into a weaponized funding platform.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: Debt &amp; Financial Consulting Services
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            3. DEBT SYNDICATION, CAPITAL RESTRUCTURING &amp; LIQUIDITY
            ENGINEERING
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              Capital is the lifeblood of the corporation, and its cost dictates
              survival. Our Debt &amp; Financial Consulting Services division
              functions as a sovereign treasury department for hire, dedicated
              to the aggressive management of loans and funding. We do not ask
              banks for money; we engineer capital injections.
            </p>
            <p>
              Our mandate includes{" "}
              <span className="font-semibold">
                Strategic Debt Procurement &amp; Interest Rate Arbitrage
              </span>
              . We leverage institutional relationships to source new credit
              lines, bypassing standard retail rates to secure better interest
              rates that significantly reduce the weighted average cost of
              capital (WACC).
            </p>
            <p>
              For entities burdened by toxic leverage, we execute{" "}
              <span className="font-semibold">Distressed Debt Restructuring</span>
              . We intervene to restructure old debt, negotiating with
              consortiums of lenders to elongate tenure, enforce moratoriums, or
              convert debt to equity, thereby reducing immediate pressure on
              cash flows and preventing insolvency.
            </p>
            <p>
              Our team assumes the role of the primary negotiator in{" "}
              <span className="font-semibold">
                Covenant &amp; Term Sheet Negotiation
              </span>
              . We scrutinize the fine print of facility agreements, aggressively
              negotiating loan terms to eliminate restrictive covenants that
              could strangle operational flexibility.
            </p>
            <p>
              We act as the bridge to liquidity, tasked with{" "}
              <span className="font-semibold">
                Lender &amp; Investor Identification
              </span>
              . We utilize our network to find suitable lenders or investors,
              matching the client&apos;s credit profile with the risk appetite of
              banks, NBFCs, or private credit funds.
            </p>
            <p>
              The foundation of this process is{" "}
              <span className="font-semibold">
                Financial Documentation Architecture
              </span>
              . We prepare Detailed Project Reports (DPR), Credit Appraisal
              Memos (CAM), and financial models required to substantiate the
              loan application, ensuring that all financial documents are
              constructed to meet credit committee standards.
            </p>
            <p>
              In summary, we empower businesses to weaponize their balance
              sheet, securing funding, restructuring liabilities, and locking in
              superior terms through sheer financial force.
            </p>
          </div>
        </section>

        {/* Sub-pages links */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/ibd/debt/liability-optimization"
              className="rounded-3xl bg-slate-900 text-slate-50 p-5 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                Proprietary Execution Matrix
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Liability Optimization Architecture™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-200/85">
                A control system for credit profile enhancement, rate
                arbitrage, restructuring, and covenant engineering.
              </p>
              <p className="mt-4 text-[11px] text-sky-300">Open architecture →</p>
            </Link>

            <Link
              to="/ibd/debt/distressed-debt-restructuring"
              className="rounded-3xl bg-white/90 border border-slate-200 text-slate-900 p-5 md:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sub-Page
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Distressed Debt Restructuring &amp; OTS
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Full-stack intervention for OTS, moratorium structuring, and
                turnaround of over-leveraged balance sheets.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore restructuring layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + risk */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Sugar &amp; Ethanol Corporation
                </h3>
                <p className="text-xs text-slate-500">
                  Debt Restructuring (One Time Settlement)
                </p>
                <p className="mt-1 text-xs">
                  Debt Exposure: ₹ 1,400 Crores · Status: Restructured with
                  2-Year Moratorium
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Real Estate Developer (Tier-1)
                </h3>
                <p className="text-xs text-slate-500">
                  Construction Finance Syndication
                </p>
                <p className="mt-1 text-xs">
                  Project Limits: ₹ 600 Crores · Status: Sanctioned &amp;
                  Disbursed
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Diamond Export House</h3>
                <p className="text-xs text-slate-500">
                  Working Capital Limit Enhancement
                </p>
                <p className="mt-1 text-xs">
                  Credit Limits: ₹ 250 Crores · Status: Rate Reduced by 150 bps
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 text-slate-50 shadow-xl p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-100/90">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span> Debt
                syndication is executed in compliance with RBI Master Directions
                on Lending and Basel III capital norms.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Ozzuno Capital acts as a strategic financial advisor and not as
                a lender. Interest rates, collateral requirements, and loan
                tenures are subject to the borrower&apos;s external credit rating
                and the internal credit policy of the banking consortium. We do
                not guarantee the sanction of credit limits. Success fees are
                payable upon issuance of the Sanction Letter, regardless of
                utilization.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
