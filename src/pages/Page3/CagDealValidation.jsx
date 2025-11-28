// src/pages/CagDealValidation.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CagDealValidation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · Corporate Advisory Group
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Deal Validation &amp; Commercial Diligence
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Transaction validation, commercial diligence, and deal structuring
            architecture — preventing balance sheet contagion from bad deals.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: Deal Consulting Services
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            3. TRANSACTION VALIDATION, COMMERCIAL DILIGENCE &amp; DEAL STRUCTURING
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              In high-stakes transactions, a bad deal is not a simple error; it
              can necroticize an entire balance sheet. Our Deal Consulting
              Services division acts as the ultimate fail-safe — a forensic
              checkpoint before signatures.
            </p>
            <p>
              We run{" "}
              <span className="font-semibold">
                Commercial Viability &amp; Profitability Stress-Tests
              </span>
              , modeling synergies against harsh market realities to ensure
              strict alignment with strategic and profitability mandates.
            </p>
            <p>
              Through{" "}
              <span className="font-semibold">
                Forensic Financial &amp; Risk Review
              </span>
              , we tear apart financials, hunting off-balance sheet liabilities,
              revenue inflation, and hidden covenants, translating them into
              quantified risk.
            </p>
            <p>
              In parallel,{" "}
              <span className="font-semibold">
                Juridical &amp; Compliance Due Diligence
              </span>{" "}
              surfaces litigation exposure, regulatory non-compliance, and IP
              vulnerabilities, ensuring legal landmines are identified before
              closing.
            </p>
            <p>
              We then re-engineer the deal through{" "}
              <span className="font-semibold">
                Transaction Structuring &amp; Optimization
              </span>
              , manipulating mix of cash, equity, and earn-outs to shift risk
              away from the client and hard-code value protection.
            </p>
            <p>
              Finally,{" "}
              <span className="font-semibold">Commercial Benefit Analysis</span>{" "}
              tests whether projected benefits are real and mathematically
              defensible — turning deals into weapons of profitable growth, not
              sources of silent decay.
            </p>
          </div>
        </section>

        {/* Sub-pages */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/cag/deal-validation/transaction-firewall"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Proprietary Execution Matrix
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Transaction Validation Firewall™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Layered checks on commercial logic, financial health, risk, and
                structure before signing.
              </p>
              <p className="mt-4 text-[11px] text-sky-600">
                Open firewall →
              </p>
            </Link>

            <Link
              to="/cag/deal-validation/commercial-stress-test"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sub-Page
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Commercial Viability Stress-Test
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Deal-level profitability modeling and scenario analysis.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore stress-test layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + risk */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Luxury Hospitality Group
                </h3>
                <p className="text-xs text-slate-500">
                  Buy-Side Commercial Due Diligence
                </p>
                <p className="mt-1 text-xs">
                  Target Value: ₹ 350 Crores · Status: Deal Aborted (Toxic
                  Liabilities Flagged)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Steel Manufacturer</h3>
                <p className="text-xs text-slate-500">
                  Joint Venture Structuring &amp; Validation
                </p>
                <p className="mt-1 text-xs">
                  JV Commitment: ₹ 6,000 Crores · Status: JV Executed
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Venture Capital Fund</h3>
                <p className="text-xs text-slate-500">
                  Portfolio Valuation &amp; Risk Review
                </p>
                <p className="mt-1 text-xs">
                  AUM: ₹ 1,200 Crores · Status: Methodology Certified
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-sky-50 border border-sky-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-700">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Fairness opinions and commercial diligence reports are prepared
                based on data available at the time of assessment.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Advisory is limited to commercial, financial and risk
                structuring. Legal opinions are sourced from empaneled law
                firms. We do not warrant future performance; the client proceeds
                at their own risk based on the diligence findings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
