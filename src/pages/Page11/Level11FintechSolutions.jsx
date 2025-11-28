// src/pages/Level11FintechSolutions.jsx
import React from "react";

export default function Level11FintechSolutions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-violet-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-violet-100/70 blur-3xl opacity-70" />

        {/* header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 11 · Technology &amp; Innovation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Fintech Solutions
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Digital lending and investment platforms built on a unified
            franchise marketplace – one rail for loans, insurance and capital
            markets access.
          </p>
        </header>

        {/* main card */}
        <section className="relative grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)] items-start">
          {/* Left – explanation */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              DIGITAL MARKETPLACE ECOSYSTEM
            </p>
            <h2 className="mt-3 text-sm md:text-base font-semibold text-slate-900">
              Franchise-Scale Fintech Infrastructure
            </h2>
            <div className="mt-3 space-y-4 text-sm md:text-[15px] text-slate-700">
              <p>
                Our Financial Products via Franchise Model is anchored by a{" "}
                <span className="font-semibold">monolithic Digital Marketplace</span>.
                This platform aggregates APIs from multiple banks, NBFCs and
                insurance carriers into one cohesive operating layer.
              </p>
              <p>
                Partners receive a unified dashboard for{" "}
                <span className="font-semibold">
                  loan origination, insurance underwriting and investment
                  processing
                </span>
                . Every application, policy and order flows through the same
                orchestration engine, enabling true fintech-grade execution
                speed with institutional governance.
              </p>
              <p>
                The outcome is a network of digitally armed franchisees who
                dispense financial products with the velocity of a startup,
                while retaining the advisory depth and risk discipline of a
                traditional merchant bank.
              </p>
            </div>
          </div>

          {/* Right – flow / steps */}
          <div className="rounded-3xl bg-gradient-to-br from-violet-900 via-slate-900 to-slate-950 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-violet-300">
              PLATFORM FLOW · DIGITAL LENDING &amp; INVESTMENTS
            </p>
            <div className="mt-5 space-y-4 text-xs md:text-sm">
              {/* Step 1 */}
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-violet-500 flex items-center justify-center text-[11px] font-semibold">
                  1
                </div>
                <div>
                  <p className="font-semibold">API Aggregation Layer</p>
                  <p className="text-slate-200/80">
                    Banking, insurance, broking and fund platforms integrated
                    via secure APIs with unified authentication and logging.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-violet-500 flex items-center justify-center text-[11px] font-semibold">
                  2
                </div>
                <div>
                  <p className="font-semibold">Partner Command Console</p>
                  <p className="text-slate-200/80">
                    Franchise partners access one interface to originate digital
                    loans, issue policies and route investment orders.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-violet-500 flex items-center justify-center text-[11px] font-semibold">
                  3
                </div>
                <div>
                  <p className="font-semibold">Risk &amp; Pricing Engine</p>
                  <p className="text-slate-200/80">
                    Ozzuno Neural Core overlays eligibility checks, risk
                    scores, product selection and pricing recommendations in
                    real time.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-violet-500 flex items-center justify-center text-[11px] font-semibold">
                  4
                </div>
                <div>
                  <p className="font-semibold">
                    Settlement, Audit &amp; Governance
                  </p>
                  <p className="text-slate-200/80">
                    Immutable logs, maker-checker flows and compliance
                    workflows provide regulator-grade traceability for every
                    transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
