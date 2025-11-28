// src/pages/Level7Subpage2_2.jsx
import React from "react";

export default function Level7Subpage2_2() {
  const bullets = [
    "Cyber Maturity Assessment: benchmarking current controls against CERT-In and ISO 27001 practices.",
    "Vulnerability Assessment & Penetration Testing (VAPT): probing networks, applications and endpoints.",
    "Identity & Access Governance: reviewing user access, privilege escalation and segregation of duties.",
    "Data Protection & Backup: evaluating backup regimes, DR plans and ransomware recovery readiness.",
    "Policy & Awareness Framework: drafting InfoSec policies and conducting employee training.",
    "Remediation Roadmap: prioritized list of fixes with timelines, owners and KPI tracking.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 7 · Subpage 2-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Cybersecurity &amp; InfoSec Audits
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            CERT-In aligned cybersecurity and information security audits for
            digital risk hardening.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              CYBER RISK ASSESSMENT
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We map your digital estate — infrastructure, applications and
                data flows — to identify exposure points that could be exploited
                by threat actors.
              </p>
              <p>
                Testing is conducted in controlled conditions, simulating real
                attack patterns while preserving system stability and data
                integrity.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-900">
              CONTROLS &amp; REMEDIATION
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
