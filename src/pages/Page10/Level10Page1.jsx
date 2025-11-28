// src/pages/Level10Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level10Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <div className="pointer-events-none absolute inset-x-16 -top-10 h-52 rounded-full bg-emerald-100/70 blur-3xl opacity-70" />

        {/* FULL-WIDTH HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 10 · Asset Management &amp; Wealth
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Wealth Preservation Protocol
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Intergenerational capital architecture and portfolio engineering for
            UHNWIs and family offices, built on preservation, structural alpha
            and fiduciary discipline.
          </p>
        </header>

        {/* Main narrative card */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          {/* Wealth Preservation Protocol */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              10. ASSET MANAGEMENT &amp; WEALTH · THE WEALTH PRESERVATION PROTOCOL
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We do not “manage money”; we construct{" "}
                <span className="font-semibold">
                  Fortresses of Intergenerational Wealth
                </span>
                . Our Asset Management division is separated from retail
                participation and restricted to a closed loop of Ultra-High-Net-Worth
                Individuals (UHNWIs) and Single Family Offices (SFOs) who demand
                more than market returns — they demand{" "}
                <span className="font-semibold">Capital Sovereignty</span>.
              </p>
              <p>
                Our primary mandate is the preservation of purchasing power
                against the erosive forces of inflation, taxation and currency
                debasement. In a regime where traditional “60/40” constructs are
                obsolete, we deploy{" "}
                <span className="font-semibold">
                  Alpha Generation through Structural Arbitrage
                </span>
                , rejecting passive “buy and hold” in favour of active,
                algorithmic capital rotation.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />

          {/* Portfolio Engineering Strategy */}
          <div>
            <h2 className="text-sm md:text-base font-semibold text-slate-900 tracking-wide">
              PORTFOLIO ENGINEERING STRATEGY
            </h2>
            <p className="mt-2 text-sm md:text-[15px] text-slate-700">
              Our investment philosophy is rigorously quantitative, using a
              multi-asset allocation framework diversified across non-correlated
              vectors:
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {/* High-Conviction Equity */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  HIGH-CONVICTION EQUITY VECTOR
                </p>
                <p className="mt-2 text-xs md:text-sm text-slate-700">
                  Concentrated portfolios targeting firms with monopolistic
                  dominance and wide economic moats. We leverage the{" "}
                  <span className="font-semibold">
                    Research &amp; Analysis Services
                  </span>{" "}
                  stack to identify undervalued securities with a high margin of
                  safety.
                </p>
              </div>

              {/* Structured Yield Architecture */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  STRUCTURED YIELD ARCHITECTURE
                </p>
                <p className="mt-2 text-xs md:text-sm text-slate-700">
                  Access to sophisticated fixed-income instruments — private
                  debt, securitized debt instruments (SDIs) and market-linked
                  debentures (MLDs). Secured by tangible collateral and
                  delivered via our{" "}
                  <span className="font-semibold">
                    Financial Products via Franchise Model
                  </span>
                  , targeting yields superior to sovereign curves.
                </p>
              </div>

              {/* Alternative Asset Silo */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  ALTERNATIVE ASSET SILO
                </p>
                <p className="mt-2 text-xs md:text-sm text-slate-700">
                  High-alpha domain with direct access to{" "}
                  <span className="font-semibold">
                    Unlisted &amp; Pre-IPO Shares
                  </span>{" "}
                  and curated{" "}
                  <span className="font-semibold">Alternative Investment Funds</span>{" "}
                  (AIFs) — venture, distressed assets and real estate yields —
                  capturing value ahead of public discovery.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />

          {/* Fiduciary obligation */}
          <div>
            <h2 className="text-sm md:text-base font-semibold text-slate-900 tracking-wide">
              THE FIDUCIARY OBLIGATION
            </h2>
            <div className="mt-3 space-y-4 text-sm md:text-[15px] text-slate-700">
              <p>
                We operate under a strict{" "}
                <span className="font-semibold">fiduciary standard</span>.
                Every construct is stress-tested against the client’s risk
                tolerance, liquidity horizon and succession architecture. We do
                not distribute third-party products for commissions; we{" "}
                <span className="font-semibold">
                  curate solutions purely around long-term wealth preservation
                </span>
                .
              </p>
              <p>
                Our Wealth Products desk provides{" "}
                <span className="font-semibold">
                  continuous monitoring and rebalancing
                </span>{" "}
                so portfolios stay aligned with evolving macro conditions.
                Through integrated{" "}
                <span className="font-semibold">Tax Consulting Services</span>,
                gains are tax-optimized to prevent erosion through inefficient
                structuring.
              </p>
            </div>
          </div>
        </section>

        {/* Client login card */}
        <section className="relative grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              CLIENT ACCESS
            </p>
            <h2 className="mt-2 text-sm md:text-base font-semibold text-slate-900">
              The Wealth Preservation Protocol: Client Experience
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-700">
              UHNWI and Family Office clients receive encrypted digital access
              to mandates, consolidated reporting, risk analytics and
              multi-jurisdictional exposure maps via the secure portal.
            </p>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-slate-700">
              <li>• Consolidated multi-asset and multi-currency reporting</li>
              <li>• Drawdown / distribution schedules and liquidity ladders</li>
              <li>• Risk dashboards and stress-test visualizations</li>
              <li>• Controlled multi-user access for family office teams</li>
            </ul>
          </div>

          <Link
            to="/level10/login"
            className="group rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-700 border border-slate-900/60 shadow-md p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-200">
              Client Login · [SECURE] UHNWI Portal
            </p>
            <h2 className="mt-3 text-sm md:text-lg font-semibold text-white">
              [SECURE] UHNWI Portal
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-200 max-w-md">
              Zero-knowledge encrypted gateway for mandates, positions,
              performance, risk analytics and privileged communication with the
              Asset Management desk.
            </p>
            <p className="mt-5 text-[11px] text-emerald-200 group-hover:translate-x-1 transition-transform">
              Proceed to secure login →
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
