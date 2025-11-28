// src/pages/FirmBoard.jsx
import React from "react";

export default function FirmBoard() {
  const roles = [
    {
      title: "Executive Chairman",
      subtitle: "Custodian of Sovereign Vision",
      body: "Final arbiter on all capital allocation decisions. Holds veto power over any mandate that does not meet the firm’s risk-adjusted return thresholds.",
    },
    {
      title: "Director of Strategic Warfare",
      subtitle: "M&A & Restructuring",
      body: "Architect of inorganic growth, responsible for absorption of competitors, strategic exits, and balance-sheet warfare combining legal acumen with financial ruthlessness.",
    },
    {
      title: "Chief Risk Officer (CRO)",
      subtitle: "Sentinel of the Balance Sheet",
      body: "Empowered with autonomous authority to audit, stress-test, and halt any transaction that breaches Enterprise Risk Management (ERM) parameters.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 1 · The Firm
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            The Apex Council · Board of Directors
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            A meritocratic oligarchy governing Ozzuno’s strategic vectors with
            absolute authority and uncompromising fiduciary discipline.
          </p>
        </header>

        {/* Governance philosophy */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9 space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            GOVERNANCE PHILOSOPHY
          </p>
          <h2 className="text-xl md:text-2xl font-semibold">
            Meritocratic Oligarchy · High-Velocity Decisions
          </h2>
          <p className="text-sm text-slate-600">
            The Board does not merely supervise; it dictates strategic vectors
            with surgical clarity. The hierarchy is intentionally rigid to
            preserve decision-making velocity, while control layers ensure that
            fiduciary and regulatory standards remain non-negotiable.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
            <li>Concentrated authority with explicit accountability trails.</li>
            <li>
              Separation of vision (Chairman), aggression (Strategic Warfare),
              and constraint (CRO).
            </li>
            <li>
              Hard-coded alignment to risk-adjusted return thresholds across
              every mandate.
            </li>
          </ul>
        </section>

        {/* Role cards */}
        <section className="space-y-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            BOARD ROLES
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl bg-slate-900 text-slate-50 p-5 md:p-6 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="text-xs text-sky-300 font-medium uppercase tracking-[0.18em]">
                    {role.subtitle}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-slate-100/85">
                    {role.body}
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
