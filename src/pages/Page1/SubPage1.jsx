// src/pages/FirmAbout.jsx
import React from "react";

export default function FirmAbout() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Breadcrumb / meta */}
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 1 · The Firm
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Firm: Sovereign Corporate Identity
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            Ozzuno Capital Services Pvt. Ltd. as a sovereign construct of market
            architecture and asymmetric capital deployment.
          </p>
        </div>

        {/* Org chart block */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="flex-1 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                THE FIRM · ORG STRUCTURE
              </p>
              <h2 className="text-xl md:text-2xl font-semibold">
                Sovereign Corporate Identity Grid
              </h2>
              <p className="text-sm text-slate-600">
                The firm is structured as a tightly controlled command grid,
                with capital allocation, risk, and market strategy concentrated
                in a cerebral core while operational verticals execute with
                algorithmic precision.
              </p>
            </div>

            
          </div>
        </section>

        {/* Doctrine section */}
        <section className="rounded-3xl bg-slate-900 text-slate-50 p-7 md:p-9 shadow-md">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">
            THE OZZUNO DOCTRINE
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-serif">
            A Manifesto of Asymmetric Dominance
          </h2>

          <div className="mt-5 space-y-4 text-sm md:text-[15px] leading-relaxed text-slate-100/90">
            <p>
              Ozzuno Capital Services Pvt. Ltd. is not merely a financial
              intermediary; it is a Sovereign Construct of Market Architecture.
              Our existence is predicated on a singular, ruthless axiom:
              capital flows not to the deserving, but to the commanded.
            </p>
            <p>
              We operate at the bleeding edge of Indian capital markets,
              positioned at the convergence of regulatory rigidity, financial
              engineering, and market aggression. Our institutional philosophy
              is built upon{" "}
              <span className="font-semibold">
                Asymmetric Capital Deployment
              </span>
              —the belief that true economic value is extracted only when one
              possesses informational, structural, and execution-based
              advantages over the counterparty.
            </p>
            <p>
              We do not seek to participate in the economy; we seek to engineer
              its outcomes through forensic intellect and regulatory arbitrage.
              Ozzuno functions as the cerebral cortex of the corporate
              ecosystem, obliterating friction between ambition and
              capitalization.
            </p>
            <p>
              Whether orchestrating public listings via{" "}
              <span className="underline decoration-slate-500/70">
                IPO Consulting & Listing Services
              </span>
              , restructuring toxic liabilities through{" "}
              <span className="underline decoration-slate-500/70">
                Debt & Financial Consulting
              </span>
              , or navigating cross-border{" "}
              <span className="underline decoration-slate-500/70">
                M&amp;A
              </span>
              , we operate with the cold logic of an algorithm and the
              aggressive foresight of a market maker. We embed ourselves into
              the operational DNA of our clients, converting market
              participants into market leaders through{" "}
              <span className="underline decoration-slate-500/70">
                Business Consulting
              </span>{" "}
              and{" "}
              <span className="underline decoration-slate-500/70">
                Strategic Exit Services
              </span>
              .
            </p>
          </div>
        </section>

        {/* Global Nodes */}
        <section id="nodes" className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                GLOBAL STRATEGIC NODES
              </p>
              <h2 className="text-xl md:text-2xl font-semibold">
                Map of Domestic & International Operations
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Ozzuno&apos;s operating footprint is structured as a set of
                strategic liquidity and intelligence nodes, rather than simple
                branch locations.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 text-sm">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  DOMESTIC CORE
                </p>
                <p className="mt-2 text-sm font-semibold">India · Primary Grid</p>
                <p className="mt-1 text-xs text-slate-600">
                  Regulatory command center, deal origination hubs, and primary
                  capital markets interface.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  OFFSHORE LIQUIDITY
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Global Institutional Lines
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Direct connectivity to offshore lenders and funds for ECB,
                  trade finance, and structured credit.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  INTELLIGENCE & RESEARCH
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Distributed Research Nodes
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Sectoral deep-dive cells providing the informational asymmetry
                  that underpins every mandate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
