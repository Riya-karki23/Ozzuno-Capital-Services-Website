// src/pages/Level7Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level7Page1() {
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
            Forensic Assurance &amp; Global Taxation
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Fiscal compliance architecture, forensic assurance and global
            taxation strategy wrapped into a single integrity shield.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-2">
            Source Service: Accounting &amp; Tax Services
          </p>
        </header>

        {/* Main narrative card */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. FISCAL COMPLIANCE ARCHITECTURE, FORENSIC ASSURANCE &amp; GLOBAL TAXATION STRATEGY
          </p>

          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              In an environment of draconian regulatory oversight and relentless
              statutory flux, financial management is not merely an
              administrative function; it is the first line of defense against
              corporate erosion. Our Accounting &amp; Tax Services division
              operates as an impregnable fortress of fiscal integrity, ensuring
              that your enterprise’s books are not just balanced, but
              bulletproof. We do not simply “check” financial statements; we
              execute{" "}
              <span className="font-semibold">
                Statutory Audit &amp; Forensic Assurance
              </span>{" "}
              protocols that border on the inquisitorial.
            </p>
            <p>
              Our auditors deploy rigorous stress-testing methodologies to
              dissect your financial assertions, validating the veracity of
              every ledger entry against the strictest interpretations of Ind AS
              and IFRS. We scrutinize internal controls to identify microscopic
              fractures in financial governance before they manifest as material
              misstatements or fraud risks.
            </p>
            <p>
              Our approach to{" "}
              <span className="font-semibold">Strategic Tax Consulting</span> is
              equally aggressive. Tax is treated not as a passive liability, but
              as a variable to be engineered. We construct complex,
              multi-jurisdictional tax architectures designed to legally minimize
              fiscal hemorrhage — optimizing effective tax rates through
              legitimate deduction strategies and transfer pricing mechanisms.
            </p>
            <p>
              This extends to{" "}
              <span className="font-semibold">Business &amp; Transaction Advisory</span>{" "}
              for high-stakes capital events such as IPOs, mergers and
              acquisitions. We model the financial implications of every deal
              structure, ensuring tax consequences do not cannibalize
              commercial benefits.
            </p>
            <p>
              We also offer a totalized{" "}
              <span className="font-semibold">Financial Outsourcing Solution</span>.
              We assume command of your financial backend — accounts payable /
              receivable, payroll and statutory filings — so leadership can
              detach from compliance tedium while we maintain a relentless vigil
              over regulatory standing.
            </p>
            <p>
              With{" "}
              <span className="font-semibold">
                Global and Domestic Support infrastructure
              </span>
              , we service both Indian entities and international conglomerates,
              harmonizing GST mandates, cross-border reporting and multi-GAAP
              alignment. In summation, we provide a shield of absolute financial
              compliance — proper accounting, strategic tax planning, and the
              rigorous audit defense required to survive in a hostile regulatory
              climate.
            </p>
          </div>
        </section>

        {/* Sub-page cards (Fiscal Integrity + TP/International Tax) */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            ASSURANCE &amp; TAX SUB-PAGES
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Fiscal Integrity Shield */}
            <Link
              to="/level7/subpage1-1"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 7 · Subpage 1-1
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The Fiscal Integrity Shield™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Execution matrix for forensic ledger scrutiny, internal control
                stress-testing and strategic tax architecture.
              </p>
              <p className="mt-4 text-[11px] text-emerald-700 group-hover:translate-x-1 transition-transform">
                View execution matrix →
              </p>
            </Link>

            {/* Transfer Pricing & International Tax */}
            <Link
              to="/level7/subpage1-2"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 7 · Subpage 1-2
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                Transfer Pricing &amp; International Tax
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Structures for BEPS-aligned transfer pricing, cross-border tax
                planning and multi-jurisdictional compliance.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Open tax layer →
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
                  Global MNC Subsidiary
                </h3>
                <p className="text-xs text-slate-500">
                  Transfer Pricing Study &amp; Forensic Audit
                </p>
                <p className="mt-1 text-xs">
                  Turnover Scrutinized: ₹ 3,200 Crores · Status: Zero
                  Non-Compliance Observations
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Infrastructure Developer
                </h3>
                <p className="text-xs text-slate-500">
                  Statutory Audit &amp; Internal Control Review
                </p>
                <p className="mt-1 text-xs">
                  Asset Base: ₹ 1,500 Crores · Status: Fraud Risk Matrix
                  Nullified
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">IT Services Exporter</h3>
                <p className="text-xs text-slate-500">
                  Virtual CFO &amp; Outsourced Compliance
                </p>
                <p className="mt-1 text-xs">
                  Geography: India, USA, UAE, Singapore · Status: Ongoing
                  Multi-Jurisdictional Retainer
                </p>
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
                Engagements are aligned with Standards on Auditing (SAs) issued
                by ICAI and the Ind AS framework.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Tax optimization strategies operate strictly within the Income
                Tax Act, 1961 and GST Acts. Clients retain primary
                responsibility for the veracity of source documents; Ozzuno
                Capital bears no liability for penalties arising from concealed
                facts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
