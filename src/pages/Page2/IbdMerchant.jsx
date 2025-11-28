// src/pages/IbdMerchant.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function IbdMerchant() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · Investment Banking Division
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Merchant Banking &amp; Underwriting Operations
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Capital markets underwriting, transaction management, and issuance
            architecture for sovereign-scale fundraising programs.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: Merchant Banking Services
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            2. MERCHANT BANKING, CAPITAL MARKETS UNDERWRITING &amp;
            TRANSACTION MANAGEMENT
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We stand as the gatekeepers of the capital markets. Our Merchant
              Banking Services division is responsible for the orchestration of
              "big financial activities," operating at the intersection of
              regulatory compliance and massive capital mobilization. We are the
              architects of fundraising, mandated to assist corporations in{" "}
              <span className="font-semibold">
                Capital Syndication &amp; Securities Issuance
              </span>
              .
            </p>
            <p>
              Whether the requirement is for a seamless Initial Public Offering
              (IPO), a Qualified Institutions Placement (QIP), or a preferential
              private placement, we structure the issuance to align with the
              risk appetite of institutional investors and the strategic needs
              of the issuer.
            </p>
            <p>
              Our scope extends to the{" "}
              <span className="font-semibold">
                Management of Large-Scale Financial Transactions
              </span>
              . We do not merely advise; we execute. We act as lead managers for
              buybacks, delisting offers, and open offers under the SEBI (SAST)
              Regulations. We facilitate raising money from investors or banks
              by structuring complex debt and equity instruments that provide
              liquidity while preserving promoter control.
            </p>
            <p>
              This involves relentless engagement with the regulatory framework.
              We are responsible for{" "}
              <span className="font-semibold">
                Regulatory Documentation &amp; Prospectus Filing
              </span>
              . We draft the Red Herring Prospectus, file due diligence
              certificates with SEBI, and ensure that every disclosure meets the
              stringent standards of the Securities Contracts (Regulation) Act.
            </p>
            <p>
              Furthermore, we provide the strategic interface for underwriting
              and syndicate management, coordinating with a consortium of
              bankers to guarantee the subscription of the issue. In essence, we
              provide the heavy artillery for corporate finance, helping
              companies raise sovereign-scale capital, issue securities with
              legal immunity, plan their public market debut, and manage the
              financial transactions that define their legacy.
            </p>
          </div>
        </section>

        {/* Sub-pages links */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/ibd/merchant/capital-governance-model"
              className="rounded-3xl bg-slate-900 text-slate-50 p-5 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                Proprietary Execution Matrix
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Capital Governance Model™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-200/85">
                A phase-based framework for fundraising, instrument selection,
                underwriting, and end-to-end issue management.
              </p>
              <p className="mt-4 text-[11px] text-sky-300">Open model →</p>
            </Link>

            <Link
              to="/ibd/merchant/prospectus-drafting"
              className="rounded-3xl bg-white/90 border border-slate-200 text-slate-900 p-5 md:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sub-Page
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Prospectus Drafting &amp; SEBI Filing
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Offer document architecture, statutory disclosures, and filing
                workflow under SEBI and SCRA regimes.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore documentation layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + risk block */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Public Sector Undertaking (PSU)
                </h3>
                <p className="text-xs text-slate-500">
                  Open Offer Management (Takeover Code)
                </p>
                <p className="mt-1 text-xs">
                  Offer Size: ₹ 750 Crores · Status: Fully Tendered &amp;
                  Subscribed
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Listed Infrastructure Developer
                </h3>
                <p className="text-xs text-slate-500">
                  Rights Issue Lead Management
                </p>
                <p className="mt-1 text-xs">
                  Capital Raise: ₹ 500 Crores · Status: Capital Deployed for
                  Debt Reduction
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Commercial Bank</h3>
                <p className="text-xs text-slate-500">
                  Qualified Institutions Placement (QIP)
                </p>
                <p className="mt-1 text-xs">
                  Issue Size: ₹ 2,500 Crores · Status: Successfully Listed on
                  NSE/BSE
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 text-slate-50 shadow-xl p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-100/90">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Services are rendered in adherence to the SEBI (Merchant
                Bankers) Regulations, 1992 and the Securities Contracts
                (Regulation) Act, 1956.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span> As
                process advisors, we ensure that all disclosures in offer
                documents are validated for material accuracy through
                independent due diligence. However, Ozzuno Capital assumes no
                financial liability for the undersubscription of an issue. Any
                underwriting obligation is limited strictly to the specific
                terms of the Underwriting Agreement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
