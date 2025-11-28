// src/pages/FirmHistory.jsx
import React from "react";

export default function FirmHistory() {
  const epochs = [
    {
      label: "Epoch I",
      title: "The Inception Phase",
      detail:
        "Establishment of foundational regulatory licenses and construction of the initial proprietary trading desk. Acquisition of Merchant Banking capabilities and set-up of the Unlisted Securities framework.",
    },
    {
      label: "Epoch II",
      title: "The Consolidation Phase",
      detail:
        "Aggregation of the first ₹1,000 Crores in Assets Under Advisory (AUA) and operationalization of the Debt Syndication node, marking the transition from boutique to systemic financial entity.",
    },
    {
      label: "Epoch III",
      title: "The Expansion Phase",
      detail:
        "Activation of the Global Liquidity Bridge with direct credit lines from offshore institutional lenders for ECB and Trade Finance, and integration of AIF Advisory into the core service matrix.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 1 · The Firm
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Chronology of Milestones · Evolution of Hegemony
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            A staged progression from regulatory inception to totalized
            hegemony across consulting, capital markets, private equity, and
            risk architecture.
          </p>
        </header>

        {/* Timeline */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            STRATEGIC EPOCHS
          </p>

          <div className="mt-6 space-y-6">
            {epochs.map((epoch, idx) => (
              <div key={epoch.label} className="flex gap-4">
                {/* Timeline marker */}
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-slate-900" />
                  {idx !== epochs.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-gradient-to-b from-slate-400/80 via-slate-300/60 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {epoch.label}
                  </p>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {epoch.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">{epoch.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Current Epoch */}
          <div className="mt-8 rounded-2xl bg-slate-900 text-slate-50 p-6 md:p-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">
              CURRENT EPOCH
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-serif">
              Totalized Hegemony
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-slate-100/90">
              Ozzuno now functions as a full-stack financial fortress where
              consulting, capital markets, private equity, and risk architecture
              are fused into a single monolithic service grid. Every mandate is
              executed across this integrated stack, converting fragmented
              financial requirements into orchestrated, outcome-engineered
              capital strategies.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
