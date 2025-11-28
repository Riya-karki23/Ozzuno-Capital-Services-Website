import React from "react";

export default function Level15() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-amber-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-amber-100/70 blur-3xl opacity-70" />

        {/* HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 15 · Human Capital
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            The Selection Crucible
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            A league of extraordinary intellects – from The Forge to Partner
            Track and the extended diaspora.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mt-2">
            SECTION 15 · HUMAN CAPITAL · TALENT ARCHITECTURE
          </p>
        </header>

        {/* TALENT PHILOSOPHY */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            TALENT ACQUISITION PHILOSOPHY
          </p>
          <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
            We Do Not Recruit · We Select
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            Ozzuno’s Human Capital mandate is to assemble a{" "}
            <span className="font-semibold">
              “League of Extraordinary Intellects”
            </span>
            . We favour operatives seeking{" "}
            <span className="font-semibold">professional conquest</span> over
            conventional work-life balance. Acceptance rates for the Analyst
            Program are statistically lower than premier global schools.
          </p>
          <p className="mt-3 text-xs md:text-sm text-slate-700">
            Teams are built around specialists – CAs, CFAs, CSs, MBAs – capable
            of executing complex M&amp;A and IPO mandates under extreme
            pressure with forensic attention to detail.
          </p>
        </section>

        {/* OPERATIONAL HIERARCHY */}
        <section className="relative grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-stretch">
          {/* Left – ladder / timeline */}
          <div className="h-full">
            <div className="h-full rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                OPERATIONAL HIERARCHY
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
                From The Forge to Partner Track
              </h2>

              <div className="mt-5 space-y-5">
                {/* Analyst Program */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/90 text-white text-xs font-semibold shadow-sm border border-amber-200">
                    A
                  </div>
                  <div className="space-y-1 text-xs md:text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">
                      The Analyst Program · “The Forge”
                    </p>
                    <p>
                      A 24-month, high-intensity induction for fresh graduates
                      designed to dismantle cognitive bias and rebuild the
                      recruit as a{" "}
                      <span className="font-semibold">financial tactician</span>{" "}
                      across financial modelling, research &amp; analysis and
                      due diligence.
                    </p>
                  </div>
                </div>

                {/* Associate */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/90 text-white text-[11px] font-semibold shadow-sm border border-amber-200">
                    AS
                  </div>
                  <div className="space-y-1 text-xs md:text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">
                      The Associate Vector
                    </p>
                    <p>
                      Mid-career professionals with proven transaction track
                      records. Associates manage{" "}
                      <span className="font-semibold">
                        live deal flow in Debt Syndication and Private Equity
                      </span>
                      , serving as the primary interface between client and
                      deal-room.
                    </p>
                  </div>
                </div>

                {/* Partner */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/90 text-white text-xs font-semibold shadow-sm border border-amber-200">
                    P
                  </div>
                  <div className="space-y-1 text-xs md:text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">
                      Partner Track
                    </p>
                    <p>
                      Reserved for originators who consistently close{" "}
                      <span className="font-semibold">
                        sovereign-scale mandates
                      </span>
                      . Partners hold equity and own the P&amp;L of divisions
                      such as Merchant Banking or Cross-Border Capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Alumni / Diaspora card */}
          <div className="h-full">
            <div className="h-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-amber-300">
                THE DIASPORA · ALUMNI NETWORK
              </p>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">
                Extended Influence Grid
              </h2>
              <p className="mt-3 text-xs md:text-sm text-slate-200 leading-relaxed">
                Former Ozzuno operatives who graduate into C-Suite positions
                across global corporations form{" "}
                <span className="font-semibold">The Diaspora</span>. They remain
                part of our long-range influence network – strategic assets
                across boardrooms, sovereign funds and corporate treasuries.
              </p>
              <p className="mt-3 text-xs md:text-sm text-slate-300">
                We maintain a{" "}
                <span className="font-semibold">
                  lifelong relationship with alumni
                </span>
                , leveraging their presence to expand deal intelligence, capital
                access and geopolitical reach.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
