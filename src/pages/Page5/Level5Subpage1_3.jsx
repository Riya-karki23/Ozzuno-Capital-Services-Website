// src/pages/Level5Subpage1_3.jsx
import React from "react";

export default function Level5Subpage1_3() {
  const steps = [
    "Invoice Pool Selection: identifying export / trade receivables suitable for discounting or factoring.",
    "Buyer & Country Risk Assessment: evaluating counterparty, jurisdiction and tenor risks.",
    "Structuring the Facility: deciding between recourse / non-recourse, single-invoice vs. revolving limits.",
    "Onboarding & Documentation: KYC, facility agreements, assignment of receivables and notifications.",
    "Discounting & Cash Release: converting approved invoices into instant liquidity.",
    "Collections & Reconciliation: managing payments from buyers and reconciling with the financier.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 5 · Subpage 1-3
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Global Invoice Discounting &amp; Factoring
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Unlocking instant working capital by monetizing export and trade
            receivables with global financiers.
          </p>
        </header>

        <section className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            LIQUIDITY RAIL · STRUCTURE
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
            <div className="space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We design international invoice discounting and factoring
                programs that convert future receivables into present cash. This
                ensures that production and operations are never stalled by
                delayed customer payments.
              </p>
              <p>
                Facilities are engineered around client risk appetite — recourse
                vs. non-recourse, insured vs. uninsured, single-invoice vs.
                pooled limits — so that credit risk, cost of funds and
                liquidity needs remain balanced.
              </p>
              <p>
                Our team coordinates with global factors, trade finance banks
                and insurers to align pricing, limits and documentation with the
                exporter&apos;s shipment cycles and buyer mix.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-sky-50 border border-sky-100 px-4 py-3"
                >
                  <span className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full bg-sky-600 text-[11px] text-white font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-xs md:text-sm text-slate-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
