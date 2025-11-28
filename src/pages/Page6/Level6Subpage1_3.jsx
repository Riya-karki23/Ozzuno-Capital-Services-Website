// src/pages/Level6Subpage1_3.jsx
import React from "react";

export default function Level6Subpage1_3() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 6 · Subpage 1-3
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Valuation &amp; Compliance Checks
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Fair market value determination and statutory compliance for
            off-market equity transfers.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          {/* Valuation card */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              VALUATION FRAMEWORK
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We treat price in unlisted markets as an output of structured
                valuation, not negotiation alone. Independent FMV assessments
                are conducted using DCF, comparable company multiples and,
                where relevant, recent primary round pricing.
              </p>
              <p>
                These valuations form the basis for pricing discussions,
                internal approvals and documentation, ensuring that both buyer
                and seller can justify consideration before auditors and
                regulators.
              </p>
            </div>
          </div>

          {/* Compliance card */}
          <div className="rounded-3xl bg-indigo-50 border border-indigo-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-indigo-900">
              STATUTORY &amp; DOCUMENTATION LAYER
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Income Tax Compliance:</span>{" "}
                FMV is aligned with Section 56(2)(x) of the Income Tax Act, 1961
                to mitigate adverse tax consequences.
              </p>
              <p>
                <span className="font-semibold">SEBI &amp; Company Law:</span>{" "}
                Pre-IPO shares are mapped to lock-in rules, shareholder
                agreements and ROFR/ROFO provisions before closing.
              </p>
              <p>
                <span className="font-semibold">Documentation:</span> We curate
                SPAs, share transfer forms, board/shareholder resolutions and
                depository instructions so the transaction trail withstands
                future diligence.
              </p>
              <p>
                <span className="font-semibold">Disclosure &amp; Audit Trail:</span>{" "}
                A complete file — valuation reports, consents and transaction
                records — is maintained for internal audit, statutory audit and
                potential future investors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
