// src/pages/IbdCapitalGovernanceModel.jsx
import React from "react";

export default function IbdCapitalGovernanceModel() {
  const phases = [
    {
      title: "Phase 1 · Capital Requirement Analysis",
      body: "Determining the quantum and type of funds required for the issuer’s strategic plan.",
    },
    {
      title: "Phase 2 · Instrument Selection",
      body: "Choosing between IPO, private placement, QIP, or rights issue to match investor appetite.",
    },
    {
      title: "Phase 3 · Regulatory Feasibility Study",
      body: "Ensuring the proposed issue structure complies with all SEBI and exchange norms.",
    },
    {
      title: "Phase 4 · Due Diligence Certificate Issuance",
      body: "Formal validation of company disclosures through lead manager due diligence.",
    },
    {
      title: "Phase 5 · Offer Document Filing",
      body: "Managing the drafting and submission of prospectuses and offer documents with regulators.",
    },
    {
      title: "Phase 6 · Underwriting Syndicate Mobilization",
      body: "Securing banking partners and capital market intermediaries to guarantee the issue.",
    },
    {
      title: "Phase 7 · Issue Management & Marketing",
      body: "Overseeing the fundraising campaign, investor outreach, and subscription tracking.",
    },
    {
      title: "Phase 8 · Allotment & Reconciliation",
      body: "Finalizing the share allocation, reconciliation, and post-issue reporting.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · IBD · Merchant Banking
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Capital Governance Model™
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A proprietary matrix governing fundraising design, regulatory
            validation, underwriting syndication, and full-stack issue
            management.
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            EXECUTION MATRIX · PHASE GRID
          </p>
          <div className="mt-6 space-y-5">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-slate-900 text-[11px] flex items-center justify-center text-slate-50 shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== phases.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-slate-400/80 via-slate-300/60 to-transparent" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-sm md:text-base font-semibold">
                    {phase.title}
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-slate-600">
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
