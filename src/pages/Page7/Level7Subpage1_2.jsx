// src/pages/Level7Subpage1_2.jsx
import React from "react";

export default function Level7Subpage1_2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 7 · Subpage 1-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Transfer Pricing &amp; International Tax
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            BEPS-aligned transfer pricing structures and multi-jurisdictional
            tax optimization for global groups.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          {/* TP architecture */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              TRANSFER PRICING ARCHITECTURE
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We design transfer pricing policies that balance commercial
                reality with regulatory expectations across group entities.
                Functional, asset and risk (FAR) analyses underpin pricing of
                inter-company transactions.
              </p>
              <p>
                Documentation is built to withstand tax-authority scrutiny —
                local files, master file and CbCR alignment where applicable —
                ensuring that intra-group margins are defensible.
              </p>
              <p>
                Advance pricing mechanisms and safe-harbour evaluations are
                leveraged wherever suitable to reduce litigation risk.
              </p>
            </div>
          </div>

          {/* International tax */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-900">
              INTERNATIONAL TAX &amp; STRUCTURING
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Cross-border Structuring:</span>{" "}
                Evaluating holding company jurisdictions, treaty benefits and
                POEM / PE risks before capital deployment.
              </p>
              <p>
                <span className="font-semibold">Withholding &amp; Credits:</span>{" "}
                Managing withholding tax positions and foreign tax credits to
                avoid double taxation.
              </p>
              <p>
                <span className="font-semibold">Regulatory Alignment:</span> 
                Ensuring compliance with Indian rules, OECD BEPS guidance and
                local foreign tax rules in key markets.
              </p>
              <p>
                <span className="font-semibold">Controversy Support:</span>{" "}
                Assisting in audits, MAP and dispute resolution related to
                transfer pricing and cross-border tax issues.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
