// src/pages/Level11DigitalFoundry.jsx
import React from "react";

export default function Level11DigitalFoundry() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-indigo-100/70 blur-3xl opacity-70" />

        {/* header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 11 · Technology &amp; Innovation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Digital Foundry
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Ozzuno Neural Core &amp; algorithmic stack – proprietary
            infrastructure for millisecond capital markets execution.
          </p>
        </header>

        {/* content */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            11. TECHNOLOGY &amp; INNOVATION · PROPRIETARY ALGORITHMIC INFRASTRUCTURE
          </p>

          <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] items-start">
            {/* left */}
            <div className="space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                Ozzuno Capital Services is, in essence, a{" "}
                <span className="font-semibold">
                  technology company disguised as a financial institution
                </span>
                . Our operations are powered by the{" "}
                <span className="font-semibold">Ozzuno Neural Core</span>, a
                proprietary algorithmic stack that processes market data with
                millisecond latency.
              </p>
              <p>
                We have moved beyond legacy financial systems to a{" "}
                <span className="font-semibold">
                  cloud-native microservices architecture
                </span>
                . This infrastructure allows us to execute complex Merchant
                Banking mandates and IPO management tasks with automated
                precision – from order orchestration to compliance logging.
              </p>
              <p>
                Predictive machine learning models ingest datasets harvested by
                our Research &amp; Analysis wing, identifying{" "}
                <span className="font-semibold">
                  liquidity fractals and pricing inefficiencies
                </span>{" "}
                in grey and public markets before they become visible to
                conventional participants.
              </p>
            </div>

            {/* right snapshot card */}
            <div className="rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-lg p-5 md:p-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-indigo-300">
                OZZUNO NEURAL CORE · STACK SNAPSHOT
              </p>
              <ul className="mt-4 space-y-2 text-xs md:text-sm">
                <li>
                  • Cloud-native microservices with event-driven messaging for
                  real-time market ingestion.
                </li>
                <li>
                  • Low-latency pricing engines scanning order books and grey
                  market quotes.
                </li>
                <li>
                  • ML models for anomaly detection, liquidity mapping and
                  spread optimization.
                </li>
                <li>
                  • Integrated with Merchant Banking &amp; IPO workflows for
                  automated allocation, alerting and reporting.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
