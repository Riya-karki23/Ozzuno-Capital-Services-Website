// src/pages/IbdGovernanceDiagnostic.jsx
import React from "react";

export default function IbdGovernanceDiagnostic() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · IBD · IPO Advisory
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Governance Diagnostic &amp; Forensic Clean-up
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Forensic audit of the issuer&apos;s corporate structure, internal
            controls, and historical financials to achieve SEBI-compliant IPO
            readiness.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            FORENSIC GOVERNANCE LAYER
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We initiate every IPO mandate with a brutal governance diagnostic.
              The objective is not to cosmetically patch compliance gaps, but to
              reconstruct the issuer&apos;s internal architecture to the standard
              of a listed sovereign-grade institution.
            </p>
            <p>
              This involves a forensic-level audit of the organizational
              hierarchy, board composition, related party transactions, and
              internal control frameworks. Legacy practices that cannot survive
              SEBI and exchange scrutiny are systematically dismantled and
              replaced with hardened governance protocols.
            </p>
            <p>
              Parallelly, we execute{" "}
              <span className="font-semibold">
                Financial Remediation &amp; Statutory Clean-up
              </span>{" "}
              of historical accounts. Financial statements are re-cast to align
              with Ind AS/IFRS, contingent liabilities are surfaced and
              rationalized, and any aggressive or non-compliant accounting
              treatments are neutralized.
            </p>
            <p>
              The output of this exercise becomes the backbone of the Draft Red
              Herring Prospectus (DRHP), creating a disclosure stack that
              survives hostile interrogation from regulators, exchanges, and
              institutional investors alike.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
