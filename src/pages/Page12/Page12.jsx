// src/pages/Level12.jsx
import React from "react";

export default function Level12() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft background glow */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-sky-100/70 blur-3xl opacity-70" />

        {/* HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 12 · Investor Relations
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Investor Relations
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Radical transparency, performance visibility and high-trust
            communication for sophisticated capital allocators.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mt-2">
            SECTION 12 · INVESTOR RELATIONS · STAKEHOLDER REPORTING REGIME
          </p>
        </header>

        {/* MAIN LAYOUT */}
        <section className="relative grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-stretch">
          {/* LEFT – Performance Metrics & Capital Velocity */}
          <div className="h-full">
            <div className="h-full rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                PERFORMANCE METRICS &amp; CAPITAL VELOCITY
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
                Radical Transparency Dashboard
              </h2>
              <p className="mt-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                We maintain a regime of{" "}
                <span className="font-semibold">Radical Transparency</span>,
                treating Investor Relations as an institutional-grade reporting
                console – not a marketing brochure. Stakeholders see a clear,
                empirical view of the firm&apos;s operational health through a
                triad of key performance indicators:
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {/* KPI 1 */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    AUA TRAJECTORY
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Assets Under Advisory (AUA)
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-slate-700">
                    Real-time graphical representation of the compounding of{" "}
                    <span className="font-semibold">
                      client assets across Wealth and Private Equity verticals
                    </span>
                    , illustrating the scale and persistence of entrusted
                    capital.
                  </p>
                </div>

                {/* KPI 2 */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    CAPITAL VELOCITY
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Capital Deployment Velocity
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-slate-700">
                    Metrics tracking how efficiently{" "}
                    <span className="font-semibold">
                      idle capital converts into yield-generating assets
                    </span>{" "}
                    through Debt Syndication and AIF deployment – from sanction
                    to disbursement.
                  </p>
                </div>

                {/* KPI 3 */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 md:col-span-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    EXECUTION RIGOR
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Transaction Closure Ratios
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-slate-700">
                    Statistical validation of execution capability in{" "}
                    <span className="font-semibold">
                      M&amp;A and Strategic Exit mandates
                    </span>
                    , clearly separating closed transactions from the
                    theoretical opportunity pipeline.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs md:text-sm text-slate-600">
                All metrics are designed to withstand the scrutiny of{" "}
                <span className="font-semibold">
                  institutional investors, family offices and rating agencies
                </span>
                , giving a precise read on growth, risk and realized outcomes.
              </p>
            </div>
          </div>

          {/* RIGHT – Chairman + Press / Disclosure */}
          <div className="h-full flex flex-col space-y-6">
            {/* Chairman’s Communiqué */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sky-300">
                THE CHAIRMAN&apos;S COMMUNIQUÉ
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">
                Annual Strategic Decree
              </h2>
              <p className="mt-3 text-xs md:text-sm text-slate-200 leading-relaxed">
                Once a year, the Executive Chairman issues a{" "}
                <span className="font-semibold">“State of the Firm”</span>{" "}
                address – a long-form strategic decree that:
              </p>
              <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-200">
                <li>
                  • Frames the{" "}
                  <span className="font-semibold">
                    macroeconomic and geopolitical thesis
                  </span>{" "}
                  guiding Ozzuno’s positioning.
                </li>
                <li>
                  • Interprets{" "}
                  <span className="font-semibold">
                    monetary policy shifts and regulatory changes
                  </span>{" "}
                  in global and domestic markets.
                </li>
                <li>
                  • Outlines the{" "}
                  <span className="font-semibold">
                    forward-looking strategic response
                  </span>{" "}
                  across capital markets, private equity and risk architecture.
                </li>
              </ul>
              <p className="mt-4 text-xs md:text-sm text-slate-300">
                The communiqué creates a direct, unfiltered line between apex
                leadership and stakeholders, ensuring that{" "}
                <span className="font-semibold">
                  intent, risk appetite and growth vectors
                </span>{" "}
                are explicitly articulated.
              </p>
            </div>

            {/* Press Room + Disclosure Standards */}
            <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                PRESS ROOM &amp; DISCLOSURE STANDARDS
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
                Transaction Tombstones &amp; Governance Signals
              </h2>

              <div className="mt-3 space-y-4 text-sm md:text-[15px] text-slate-700">
                <p>
                  Even as a private entity, Ozzuno follows a{" "}
                  <span className="font-semibold">
                    voluntary disclosure code that exceeds statutory minimums
                  </span>
                  . Stakeholders receive structured visibility into both
                  performance and risk.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      RISK &amp; COMPLIANCE UPDATES
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-slate-700">
                      Quarterly communication on{" "}
                      <span className="font-semibold">
                        Risk Management Frameworks and compliance audits
                      </span>
                      , detailing risk exposure, mitigations and governance
                      health.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      TRANSACTION TOMBSTONES
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-slate-700">
                      Published tombstones for{" "}
                      <span className="font-semibold">
                        IPO listings, Merchant Banking mandates and landmark
                        deals
                      </span>
                      , serving as verifiable proof of execution capability and
                      market dominance.
                    </p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600">
                  Press releases, deal closures and key appointments are routed
                  through a curated{" "}
                  <span className="font-semibold">Press Room</span>, ensuring
                  that public communication remains consistent with{" "}
                  <span className="font-semibold">
                    internal risk and disclosure standards
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
