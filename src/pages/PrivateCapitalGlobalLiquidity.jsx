// src/pages/PrivateCapitalGlobalLiquidity.jsx
import React from "react";

export default function PrivateCapitalGlobalLiquidity() {
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
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500" />

        {/* Header */}
        <header className="space-y-3 pt-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Private Capital, AIFs &amp; Global Liquidity
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Private Equity, AIF Advisory, Cross-Border Capital &amp; Unlisted
            Markets
          </h1>
          <p className="text-sm md:text-base text-slate-700 max-w-3xl">
            We mobilize institutional capital, alternative funds, foreign
            liquidity and grey-market ownership to engineer asymmetric growth.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Private Equity
            </span>
            <span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              AIF Advisory
            </span>
            <span className="inline-flex items-center rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
              Cross-Border Capital
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              Unlisted &amp; Pre-IPO
            </span>
          </div>
        </header>

        {/* Private Equity */}
        <section
          className="
            space-y-4
            bg-slate-50/70 rounded-2xl border border-slate-100
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            1. Institutional Private Equity Syndication &amp; Value Engineering
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Our Private Equity Services division bridges scalable corporations
            with institutional wealth. We architect strategic equity placements,
            negotiating stake sales that balance capital influx with promoter
            control, and recalibrate management and governance to institutional
            standards.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We then engineer liquidity events and exit mechanisms — secondary
            sales, strategic buyouts or IPOs — to deliver target IRRs for all
            stakeholders.
          </p>
        </section>

        {/* AIF Advisory */}
        <section
          className="
            space-y-4
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            2. Alternative Investment Fund (AIF) Structuring &amp; Advisory
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We operate in the highly regulated AIF ecosystem, matching
            corporates with non-traditional capital across Category I, II &amp;
            III funds. We structure transactions, draft investment documents and
            negotiate commercial terms under the SEBI (AIF) Regulations,
            providing a compliant conduit to sophisticated pools of capital.
          </p>
        </section>

        {/* Cross-Border Capital / ECB */}
        <section
          className="
            space-y-4
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            3. Cross-Border Capital Markets, ECB &amp; Global Liquidity Protocols
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Our Overseas Investments &amp; Capital Services division erases
            borders to access global liquidity. We structure External Commercial
            Borrowings (ECB), global trade finance and international growth
            funding under FEMA and RBI Master Directions, arbitraging interest
            rates and unlocking foreign currency credit lines.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We also engineer global invoice discounting and factoring structures
            to convert receivables into instant liquidity, ensuring working
            capital velocity is never a constraint on growth.
          </p>
        </section>

        {/* Unlisted & Pre-IPO */}
        <section
          className="
            space-y-4
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            4. Unlisted Securities Intermediation &amp; Pre-IPO Equity Arbitrage
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Operating in the unlisted and pre-IPO corridors, we provide access
            to off-market equity blocks, ESOP liquidity and secondary exits for
            sophisticated investors. Our proprietary trading and valuation
            frameworks convert subjective grey-market pricing into empirical
            value, under full regulatory and tax compliance.
          </p>
        </section>
      </div>
    </main>
  );
}
