// src/pages/IbdProspectusDrafting.jsx
import React from "react";

export default function IbdProspectusDrafting() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · IBD · Merchant Banking
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Prospectus Drafting &amp; SEBI Filing
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Offer document architecture, regulatory filings, and disclosure
            orchestration under SEBI and SCRA frameworks.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            DOCUMENTATION &amp; FILING LAYER
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              Our documentation team constructs the narrative spine of every
              capital markets transaction. We are responsible for drafting the
              Red Herring Prospectus, offer documents, and ancillary filings
              that define the legal identity of the issue.
            </p>
            <p>
              Each disclosure is engineered to comply with the Securities
              Contracts (Regulation) Act, SEBI (Issue of Capital and Disclosure
              Requirements), and SEBI (Merchant Bankers) regulations.
              Disclosures are tested against materiality thresholds and legal
              challenge scenarios.
            </p>
            <p>
              We coordinate with legal counsel, statutory auditors, and issuer
              management to ensure that all risk factors, business overviews,
              financial information, and promoters&apos; background are presented
              in a manner that is both regulator-proof and institutionally
              investible.
            </p>
            <p>
              Final filings with SEBI and exchanges are executed through a
              controlled process, maintaining version hygiene, response
              management for regulator&apos;s queries, and tracking the approval
              pipeline.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
