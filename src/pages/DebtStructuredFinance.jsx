// src/pages/DebtStructuredFinance.jsx
import React from "react";

export default function DebtStructuredFinance() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-white text-slate-900 py-16 px-4">
      <div
        className="
          max-w-7xl mx-auto space-y-12
          bg-white/95 border border-slate-200
          rounded-3xl shadow-sm
          px-4 md:px-8 lg:px-10 py-8 md:py-10
          relative overflow-hidden
        "
      >
        {/* top accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400" />

        {/* Header */}
        <header className="space-y-3 pt-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Debt Syndication &amp; Structured Finance
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Debt Syndication, Capital Restructuring &amp; Liquidity Engineering
          </h1>
          <p className="text-sm md:text-base text-slate-700 max-w-3xl">
            We function as a sovereign treasury department for hire, engineering
            capital injections and weaponizing the balance sheet.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              Debt Syndication
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              Restructuring &amp; OTS
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Liquidity Engineering
            </span>
          </div>
        </header>

        {/* Core narrative */}
        <section
          className="
            space-y-4
            bg-slate-50/70 rounded-2xl border border-slate-100
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Capital is the lifeblood of the corporation, and its cost dictates
            survival. Our Debt &amp; Financial Consulting Services division is
            dedicated to the aggressive management of loans and funding. We do
            not ask banks for money; we engineer capital injections.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Our mandate includes Strategic Debt Procurement &amp; Interest Rate
            Arbitrage. We leverage our institutional relationships to source new
            credit lines, bypassing standard retail rates to secure better
            interest rates that significantly reduce the weighted average cost
            of capital (WACC).
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            For entities burdened by toxic leverage, we execute Distressed Debt
            Restructuring. We intervene to restructure old debt, negotiating
            with consortiums of lenders to elongate tenure, enforce moratoriums,
            or convert debt to equity, thereby reducing immediate pressure on
            cash flows and preventing insolvency.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We assume the role of primary negotiator in Covenant &amp; Term
            Sheet Negotiation, scrutinizing the fine print of facility
            agreements and eliminating restrictive covenants that could strangle
            operational flexibility.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We act as the bridge to liquidity through Lender &amp; Investor
            Identification, matching the client’s credit profile with the risk
            appetite of banks, NBFCs and private credit funds. At the core is
            Financial Documentation Architecture: Detailed Project Reports,
            Credit Appraisal Memos and financial models that meet the exacting
            standards of credit committees.
          </p>
        </section>

        {/* Liability Optimization Architecture */}
        <section
          className="
            space-y-4
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              The Liability Optimization Architecture™
            </h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Execution Matrix
            </span>
          </div>

          <p className="text-sm md:text-base text-slate-800">
            This matrix manages loans, restructuring and funding across the
            entire liability stack.
          </p>
          <ol className="space-y-1.5 text-sm md:text-base text-slate-800 list-decimal list-inside">
            <li>
              Credit Profile Enhancement – Preparing the company to look
              attractive to lenders.
            </li>
            <li>
              Financial Documentation – Compiling DPRs, CAMs and financial
              models.
            </li>
            <li>
              Lender Consortium Identification – Finding suitable banks and
              investors.
            </li>
            <li>
              Rate Arbitrage &amp; Negotiation – Fighting for better interest
              rates.
            </li>
            <li>
              Debt Restructuring – Re-engineering old debt to reduce cash-flow
              pressure.
            </li>
            <li>
              Covenant Structuring – Negotiating the terms and conditions of the
              loan.
            </li>
            <li>
              Sanction &amp; Disbursement – Managing final approval and fund
              release.
            </li>
          </ol>
        </section>

        {/* Mandates */}
        <section
          className="
            space-y-3
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h3 className="text-lg md:text-xl font-semibold">
            Representative Mandates
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-slate-800">
            <li>
              <span className="font-medium">
                Sugar &amp; Ethanol Corporation:
              </span>{" "}
              Debt restructuring (One Time Settlement) — ₹ 1,400 Crores exposure
              with 2-year moratorium.
            </li>
            <li>
              <span className="font-medium">
                Real Estate Developer (Tier-1):
              </span>{" "}
              Construction finance syndication — project limits of ₹ 600 Crores,
              sanctioned &amp; disbursed.
            </li>
            <li>
              <span className="font-medium">Diamond Export House:</span>{" "}
              Working capital enhancement — ₹ 250 Crores credit limits; rate
              reduced by 150 bps.
            </li>
          </ul>
        </section>

        {/* Statutory */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h3 className="text-lg md:text-xl font-semibold">
            Statutory Adherence &amp; Risk Disclosure
          </h3>
          <p className="text-sm md:text-base text-slate-800">
            <span className="font-medium">Regulatory Mandate:</span> Debt
            syndication is executed in compliance with RBI Master Directions on
            Lending and Basel III capital norms.
          </p>
          <p className="text-sm md:text-base text-slate-800">
            <span className="font-medium">Fiduciary Disclaimer:</span> Ozzuno
            Capital acts as a strategic financial advisor and not as a lender.
            Interest rates, collateral requirements and loan tenures are subject
            to the borrower&apos;s external credit rating and internal credit
            policies of the banking consortium. Sanction of facilities is not
            guaranteed.
          </p>
        </section>
      </div>
    </main>
  );
}
