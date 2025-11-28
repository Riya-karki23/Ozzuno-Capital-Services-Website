// src/pages/CagDivestiture.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CagDivestiture() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · Corporate Advisory Group
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Strategic Divestiture &amp; Exit Architecture
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Strategic divestitures, corporate carve-outs, and liquidity events
            executed with surgical precision to maximize exit value.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: Strategic Exit Services
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            2. STRATEGIC DIVESTITURE, CORPORATE CARVE-OUTS &amp; LIQUIDITY EVENTS
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              When strategy demands severance of a corporate limb to preserve
              the whole, or liquidation of an asset to realize shareholder
              value, we execute exits with surgical precision. Our Strategic
              Exit Services division does not merely sell businesses; we
              engineer high-velocity divestitures and complex carve-outs
              designed to maximize exit multiples.
            </p>
            <p>
              We begin with{" "}
              <span className="font-semibold">
                Determination of Intrinsic Enterprise Value
              </span>
              . Beyond book value, we deploy DCF, precedent transactions, and
              comparable multiples to establish an irrefutable valuation floor
              that anchors aggressive negotiations.
            </p>
            <p>
              Preparation is exhaustive: we build a fortified{" "}
              <span className="font-semibold">
                Information Memorandum &amp; Virtual Data Room
              </span>
              . Every financial statement, contract, and operational metric is
              sanitized and structured to withstand hostile due diligence from
              institutional buyers.
            </p>
            <p>
              Simultaneously, we run{" "}
              <span className="font-semibold">
                Counterparty Identification &amp; Target Screening
              </span>
              . We hunt buyers — strategic acquirers, private equity sponsors,
              distressed asset funds — and create competitive auction dynamics
              that force premium pricing.
            </p>
            <p>
              At the core lies{" "}
              <span className="font-semibold">
                Commercial Negotiation &amp; Deal Structuring
              </span>
              . We negotiate price, indemnities, escrow mechanisms, and closing
              conditions to ensure the best-selling price is not aspirational
              but contractual.
            </p>
            <p>
              We manage legal, financial, and transactional compliance,
              including Share Purchase Agreements (SPA) and closing mechanics,
              to deliver clean, profitable exits without lingering legal wounds
              or undervalued assets.
            </p>
          </div>
        </section>

        {/* Sub-pages */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/cag/divestiture/liquidity-pathway"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Proprietary Execution Matrix
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Liquidity Realization Pathway™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Exit readiness, intrinsic valuation modeling, auction processes,
                and legal closure for divestitures and carve-outs.
              </p>
              <p className="mt-4 text-[11px] text-sky-600">Open pathway →</p>
            </Link>

            <Link
              to="/cag/divestiture/intrinsic-valuation"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sub-Page
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Intrinsic Valuation &amp; Asset Scrubbing
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Deep valuation work and documentation scrubbing for buyers’
                forensic due diligence.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore valuation layer →
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
                  Multi-Specialty Hospital Chain
                </h3>
                <p className="text-xs text-slate-500">
                  100% Strategic Divestiture
                </p>
                <p className="mt-1 text-xs">
                  Exit Valuation: ₹ 400 Crores · Status: Full Cash Exit to PE
                  Buyer
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Enterprise SaaS Platform
                </h3>
                <p className="text-xs text-slate-500">
                  Founder Stake Sale (Majority)
                </p>
                <p className="mt-1 text-xs">
                  Deal Value: $55 Million · Status: Acquired by NASDAQ Listed
                  Tech Firm
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Auto-Ancillary Unit</h3>
                <p className="text-xs text-slate-500">
                  Distressed Asset Liquidation
                </p>
                <p className="mt-1 text-xs">
                  Debt Liability: ₹ 150 Crores · Status: Settled via Slump Sale
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-800">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Business valuations are performed in line with International
                Valuation Standards (IVS). Divestitures are subject to NCLT
                approvals where applicable.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span> The
                IM is based on management representations. Ozzuno acts as a
                sell-side advisor and does not guarantee closure at target
                valuation. All negotiations are subject to definitive agreements
                and successful due diligence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
