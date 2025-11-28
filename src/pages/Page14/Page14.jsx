import React from "react";

export default function Level14() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-rose-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-rose-100/70 blur-3xl opacity-70" />

        {/* HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 14 · Legal &amp; Grievance Redressal
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Adjudication Protocols
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Internal ombudsman, regulatory disclosures and tightly drafted
            terms of engagement for high-stakes mandates.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mt-2">
            SECTION 14 · LEGAL &amp; GRIEVANCE REDRESSAL
          </p>
        </header>

        {/* TOP GRID: Ombudsman + Regulatory Disclosures */}
        <section className="relative grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-start">
          {/* LEFT – Ombudsman */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              THE OMBUDSMAN &amp; DISPUTE RESOLUTION
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
              Internal Adjudication Tribunal
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              An internal{" "}
              <span className="font-semibold">Adjudication Tribunal</span>,
              headed by a designated Ombudsman, resolves stakeholder grievances
              around financial products and advisory mandates with{" "}
              <span className="font-semibold">judicial impartiality</span>.
            </p>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-slate-700">
              <li>• Investigative powers to call for evidence and submissions.</li>
              <li>• Structured hearings and documented findings.</li>
              <li>
                • Binding resolutions where applicable, minimizing the need for
                external litigation.
              </li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-slate-600">
              The framework protects both{" "}
              <span className="font-semibold">
                client rights and institutional reputation
              </span>
              , ensuring disputes are handled within a disciplined, evidence-led
              process.
            </p>
          </div>

          {/* RIGHT – Regulatory Disclosures */}
          <div className="space-y-6">
            {/* Regulatory Disclosures */}
            <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                REGULATORY DISCLOSURES &amp; DISCLAIMERS
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
                Risk Acknowledgement &amp; Data Sovereignty
              </h2>

              <div className="mt-3 space-y-3 text-xs md:text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-[12px] tracking-wide text-slate-800">
                    Risk Acknowledgement
                  </p>
                  <p>
                    Clients in Unlisted Shares or Private Equity sign a{" "}
                    <span className="font-semibold">
                      Risk Disclosure Document (RDD)
                    </span>{" "}
                    outlining liquidity constraints, valuation volatility and
                    regulatory uncertainty in non-public markets.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[12px] tracking-wide text-slate-800">
                    Data Sovereignty Statement
                  </p>
                  <p>
                    Compliance with the{" "}
                    <span className="font-semibold">DPDP Act, 2023</span> – client
                    and audit data is domiciled on secure Indian servers, never
                    monetized for third-party marketing.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[12px] tracking-wide text-slate-800">
                    Limitation of Liability
                  </p>
                  <p>
                    Fiduciary liability is limited to the{" "}
                    <span className="font-semibold">mandate letter</span>. We do
                    not indemnify against Force Majeure, sovereign policy shifts
                    or systemic market crashes. Deal opinions are advisory –
                    not insurance against commercial loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL-WIDTH – Terms of Engagement */}
        <section>
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose-300">
              TERMS OF ENGAGEMENT
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">
              Jurisdiction &amp; Contract Architecture
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-200 leading-relaxed">
              Engagement contracts are drafted by Tier-1 legal counsel.
              Indemnification, jurisdiction and termination rights are{" "}
              <span className="font-semibold">non-negotiable</span>.
            </p>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-200">
              <li>
                • Exclusive jurisdiction of{" "}
                <span className="font-semibold">Mumbai courts</span> for all
                legal relationships.
              </li>
              <li>
                • Right to terminate mandates on breach of KYC/AML or
                mis-representation by the client.
              </li>
              <li>
                • Engagement governed strictly by the{" "}
                <span className="font-semibold">
                  scope, risk and deliverables
                </span>{" "}
                defined in the signed mandate.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
