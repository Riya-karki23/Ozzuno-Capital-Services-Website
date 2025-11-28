// src/pages/Level7Page2.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level7Page2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-emerald-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <div className="pointer-events-none absolute inset-x-16 -top-10 h-52 rounded-full bg-emerald-100/70 blur-3xl opacity-70" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 7 · Assurance, Tax &amp; Risk
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Enterprise Risk Management (ERM)
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Threat vector identification, mitigation and remediation across
            financial, legal, operational and cyber domains.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-2">
            Source Service: Risk Consulting Services
          </p>
        </header>

        {/* Main narrative card */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. ENTERPRISE RISK MANAGEMENT (ERM) &amp; THREAT VECTOR NEUTRALIZATION
          </p>

          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              In a volatile global economy, ignorance is a liability. Our Risk
              Consulting Services division provides a panoramic surveillance
              system designed to{" "}
              <span className="font-semibold">find risks and avoid losses</span>{" "}
              before they manifest as catastrophic failures. We do not offer
              suggestions; we provide a comprehensive{" "}
              <span className="font-semibold">
                Risk Identification &amp; Mitigation Matrix
              </span>
              .
            </p>
            <p>
              We audit the enterprise across four critical dimensions. First, a{" "}
              <span className="font-semibold">Financial Risk Assessment</span>{" "}
              stress-tests liquidity ratios and credit exposure to identify
              vulnerabilities in the capital structure. Second, a{" "}
              <span className="font-semibold">
                Legal &amp; Regulatory Risk Audit
              </span>{" "}
              scans for contractual breaches and litigious exposure that could
              bleed the company’s resources.
            </p>
            <p>
              Third, we analyze{" "}
              <span className="font-semibold">Operational Risk Architecture</span>,
              dissecting supply chains, workflows and human capital dependencies
              to locate single points of failure that threaten continuity.
              Fourth, we deploy{" "}
              <span className="font-semibold">
                Cybersecurity &amp; InfoSec Protocols
              </span>
              , assessing the digital perimeter for vulnerabilities and
              “cybersecurity” threats that could trigger data breaches or
              ransomware paralysis.
            </p>
            <p>
              This is overlaid with a{" "}
              <span className="font-semibold">Statutory Compliance Shield</span>,
              ensuring immunity against regulatory penalties and government
              sanctions.
            </p>
            <p>
              Our value proposition lies in{" "}
              <span className="font-semibold">
                Solution Deployment &amp; Remediation
              </span>
              . We do not just identify the rot; we excise it — implementing
              internal controls, disaster recovery plans and automated
              compliance monitoring systems. Risk management becomes a proactive
              strategic asset instead of a passive checkbox.
            </p>
            <p>
              In short, we identify the financial, legal and cyber threats
              lurking in your operations and provide definitive solutions to{" "}
              <span className="font-semibold">
                avoid losses or disruptions
              </span>
              , ensuring the continuity of your empire.
            </p>
          </div>
        </section>

        {/* Sub-page cards (Threat Neutralization + Cyber & InfoSec) */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            ERM SUB-PAGES
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/level7/subpage2-1"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 7 · Subpage 2-1
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The Threat Neutralization Protocol™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Enterprise risk scanning, stress-testing and remediation matrix
                for finance, legal and operations.
              </p>
              <p className="mt-4 text-[11px] text-emerald-700 group-hover:translate-x-1 transition-transform">
                View protocol →
              </p>
            </Link>

            <Link
              to="/level7/subpage2-2"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 7 · Subpage 2-2
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                Cybersecurity &amp; InfoSec Audits
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                CERT-In aligned cyber audits, penetration testing and InfoSec
                hardening for digital resilience.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Open cyber layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + Statutory */}
        <section className="relative grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          {/* Mandates */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Scheduled Co-operative Bank
                </h3>
                <p className="text-xs text-slate-500">
                  Cybersecurity &amp; InfoSec Audit
                </p>
                <p className="mt-1 text-xs">
                  Asset Liability: ₹ 12,000 Crores · Status: ISO 27001
                  Certification Achieved
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Pharma Exporter (API)</h3>
                <p className="text-xs text-slate-500">
                  Regulatory Compliance Audit (USFDA / EMA)
                </p>
                <p className="mt-1 text-xs">
                  Facility Scope: 3 Manufacturing Units · Status: Compliance
                  Shield Implemented
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Petrochemical Plant</h3>
                <p className="text-xs text-slate-500">
                  Operational Hazard &amp; Safety Risk Assessment
                </p>
                <p className="mt-1 text-xs">Coverage: End-to-End Plant Ops</p>
              </div>
            </div>
          </div>

          {/* Statutory */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-900">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Frameworks aligned with COSO ERM, ISO 31000 and CERT-In
                guidelines for cybersecurity.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                We deploy mitigation protocols but do not act as an insurer.
                Black-swan events and Force Majeure cannot be fully eliminated.
                Clients are responsible for maintaining active insurance
                coverage for residual risks.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
