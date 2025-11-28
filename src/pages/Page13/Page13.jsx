import React from "react";

export default function Level13() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-emerald-100/70 blur-3xl opacity-70" />

        {/* HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 13 · Corporate Governance
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            The Compliance Iron-Dome
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Statutory adherence, ethics and sustainability – a governance shell
            built to survive hostile regulatory scrutiny.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mt-2">
            SECTION 13 · CORPORATE GOVERNANCE · STATUTORY ADHERENCE CHARTER
          </p>
        </header>

        {/* MAIN GRID */}
        <section className="relative grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] items-start">
          {/* LEFT – Statutory Adherence Charter */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              STATUTORY ADHERENCE CHARTER
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
              Presumption of Audit · Hyper-Compliance Culture
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              Our governance framework operates under a{" "}
              <span className="font-semibold">“Presumption of Audit”</span> – we
              conduct business as if a regulator is watching every move. The
              culture of hyper-compliance is jointly managed by Accounting &amp;
              Tax Services and the Risk Consulting wing.
            </p>

            <div className="mt-5 space-y-4 text-xs md:text-sm text-slate-700">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  SEBI COMPLIANCE MATRIX
                </p>
                <p className="mt-2">
                  Strict adherence to{" "}
                  <span className="font-semibold">
                    Insider Trading, Takeover and Merchant Banker regulations
                  </span>
                  . IPO and capital markets disclosures are constructed to be
                  materially accurate and legally defensible.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  RBI PRUDENTIAL NORMS
                </p>
                <p className="mt-2">
                  For Debt Syndication and NBFC advisory, we align with{" "}
                  <span className="font-semibold">
                    CAR, NPA provisioning and Fair Practices Code
                  </span>
                  , mirroring banking-grade prudential discipline.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  AML &amp; CFT GRID
                </p>
                <p className="mt-2">
                  Draconian screening protocols for all capital inflows –
                  whether Private Equity or AIF contributions – to prevent
                  illicit finance and systemic contagion risk.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Ethics + CSR / ESG */}
          <div className="space-y-6">
            {/* Code of Ethics */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300">
                CODE OF ETHICS
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">
                Zero-Tolerance Integrity Protocol
              </h2>
              <p className="mt-3 text-xs md:text-sm text-slate-200 leading-relaxed">
                Ozzuno enforces a{" "}
                <span className="font-semibold">binary ethical code</span>. Any
                deviation from the Integrity Protocol triggers immediate
                termination and potential legal prosecution. The institution’s
                sanctity overrides the profitability of any single
                transaction or individual.
              </p>
              <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-200">
                <li>• Conflicts of interest and related-party dealings.</li>
                <li>• Gifts, entertainment and benefit policies.</li>
                <li>
                  • Handling of UPSI and confidential data, especially within
                  the Unlisted Shares &amp; Grey Market desks.
                </li>
              </ul>
            </div>

            {/* CSR & ESG */}
            <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                CSR &amp; ESG FRAMEWORK
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
                Sustainability Mandates &amp; Social Capital
              </h2>
              <p className="mt-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                Sustainability is not merely advisory; it is an{" "}
                <span className="font-semibold">internal mandate</span>. ESG
                screens filter out ecologically destructive sectors from our own
                capital deployment. A dedicated CSR committee deploys profits
                into upliftment projects aligned with Schedule VII of the
                Companies Act, 2013.
              </p>
              <p className="mt-3 text-xs md:text-sm text-slate-600">
                Governance, ethics and sustainability form the{" "}
                <span className="font-semibold">
                  triple-locked shield of Ozzuno’s corporate architecture
                </span>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
