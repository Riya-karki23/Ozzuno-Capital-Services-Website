import React from "react";

export default function Policy3() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">
      
      {/* DOCUMENT WRAPPER */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER BAND */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            RISK DISCLOSURE DOCUMENT (RDD)
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            This is the "Scare Document." It ensures no one can sue you if they lose money.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* WARNING */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-3">
              WARNING: SYSTEMIC VOLATILITY & CAPITAL EROSION
            </h2>
            <p className="text-sm leading-relaxed">
              Investments in Capital Markets, Unlisted Securities, and Alternative Investment
              Funds (AIFs) are subject to Systemic Market Risks which may result in the partial
              or total erosion of the Principal Capital.
            </p>
          </section>

          {/* CLAUSE 1 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CLAUSE 1: ILLIQUIDITY OF UNLISTED ASSETS
            </h2>
            <p className="text-sm leading-relaxed">
              The User acknowledges that "Unlisted" or "Pre-IPO" securities lack a centralized
              discovery mechanism. Liquidity is theoretically non-existent until a formal Listing
              Event occurs. The Firm provides no warranty regarding the timeline, valuation, or
              certainty of such an event.
            </p>
          </section>

          {/* CLAUSE 2 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CLAUSE 2: NO GUARANTEE OF RETURNS
            </h2>
            <p className="text-sm leading-relaxed">
              Past performance metrics, deal tombstones, and AUA trajectories displayed on this
              site are historical artifacts and not predictive indicators. The Firm explicitly
              disclaims any guarantee of fixed returns, capital protection, or dividend
              consistency.
            </p>
          </section>

          {/* CLAUSE 3 */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CLAUSE 3: REGULATORY FLUX
            </h2>
            <p className="text-sm leading-relaxed">
              The valuation of assets may be materially impacted by retrospective taxation
              amendments, changes in SEBI regulations, or geopolitical instability. The User
              assumes full liability for these macro-environmental variables.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
