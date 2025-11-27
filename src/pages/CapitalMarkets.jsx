// src/pages/CapitalMarkets.jsx
import React from "react";

export default function CapitalMarkets() {
  return (
    <main className="bg-linear-to-b from-sky-50 via-slate-50 to-white text-slate-900 py-16 px-4">
      <div
        className="
          max-w-7xl mx-auto space-y-12
          bg-white/95 border border-slate-200
          rounded-3xl shadow-sm
          px-4 md:px-8 lg:px-10 py-8 md:py-10
          relative overflow-hidden
        "
      >
        {/* subtle gradient accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-400" />

        {/* Header */}
        <header className="space-y-3 pt-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Investment Banking Division (IBD)
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            IPO Advisory &amp; Capital Markets Origination
          </h1>
          <p className="text-sm md:text-base text-slate-700 max-w-3xl">
            We architect the fundamental metamorphosis of a private enterprise
            into a public institution of indefinite sovereign value.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              IPO Syndication
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              DRHP &amp; SEBI Interface
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              Post-Listing Governance
            </span>
          </div>
        </header>

        {/* 1. CAPITAL MARKETS ORIGINATION & IPO SYNDICATION */}
        <section
          className="
            space-y-4
            bg-slate-50/60 rounded-2xl border border-slate-100
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            1. Capital Markets Origination &amp; Initial Public Offering (IPO)
            Syndication
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We do not merely assist in the listing of securities; we architect
            the fundamental metamorphosis of a private enterprise into a public
            institution of indefinite sovereign value. Our IPO Consulting &amp;
            Listing Services division operates as a monolithic entity dedicated
            to the rigorous orchestration of the &quot;going public&quot;
            lifecycle. This is not a simple administrative process; it is a
            high-stakes financial war requiring the deployment of forensic
            accounting, regulatory arbitrage, and strategic investor relations.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Our primary mandate involves the granular assessment of IPO
            Readiness and Governance Architecture. We initiate a forensic-level
            audit of the issuer&apos;s organizational hierarchy, enforcing a
            draconian restructuring of internal controls to meet the exacting
            standards of the Securities and Exchange Board of India (SEBI) and
            global exchanges. This involves the complete Financial Remediation
            and Statutory Clean-up of historical accounts. We do not simply
            compile reports; we reconstruct financial narratives.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We align historical financial statements with Ind AS/IFRS
            convergence standards, rigorously stress-testing valuations against
            market volatility, and preparing the Draft Red Herring Prospectus
            (DRHP) with a level of detail that withstands the most hostile
            regulatory scrutiny.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Furthermore, our scope of work encompasses absolute Risk Mitigation
            &amp; Due Diligence protocols. We deploy a multi-layered compliance
            shield, identifying latent liabilities in legal, environmental, and
            operational domains before they can impact the issuer&apos;s
            valuation. We execute deep-dive due diligence to ensure that every
            material fact is substantiated, ensuring total adherence to the SEBI
            (Issue of Capital and Disclosure Requirements) Regulations.
            Simultaneously, our fiscal engineering team constructs sophisticated
            Taxation Structures, optimizing the fiscal efficiency of the
            post-listing entity.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            Our engagement is defined by End-to-End Project Orchestration. We
            assume fiduciary responsibility for the entire transaction
            lifecycle, managing the labyrinthine coordination between merchant
            bankers, legal counsels, registrars, and underwriters. Finally, our
            obligation extends beyond the listing bell through Post-IPO
            Compliance &amp; Reporting. In summary, we do not just list shares;
            we engineer the financial infrastructure necessary for a company to
            dominate the capital markets.
          </p>
        </section>

        {/* Public Markets Sovereignty Protocol */}
        <section
          className="
            space-y-4
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <div className="flex items-center gap-2">
            <h3 className="text-lg md:text-xl font-semibold">
              The Public Markets Sovereignty Protocol™
            </h3>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Execution Matrix
            </span>
          </div>

          <p className="text-sm md:text-base text-slate-800">
            This proprietary execution matrix covers the journey from IPO
            readiness to post-listing support.
          </p>
          <ol className="space-y-1.5 text-sm md:text-base text-slate-800 list-decimal list-inside">
            <li>
              <span className="font-medium">
                Governance Diagnostic &amp; Gap Analysis —
              </span>{" "}
              forensic audit of current corporate structure against SEBI / Exchange
              listing norms.
            </li>
            <li>
              <span className="font-medium">
                Financial Restatement &amp; Sanitization —
              </span>{" "}
              conversion of financials to Ind AS, valuation solidification, and
              internal control rectification.
            </li>
            <li>
              <span className="font-medium">
                Capital Structure Optimization —
              </span>{" "}
              engineering the equity split, promoter holding dilution, and pre-IPO
              placement strategy.
            </li>
            <li>
              <span className="font-medium">
                Regulatory Dossier Construction —
              </span>{" "}
              drafting the DRHP and filing with SEBI/ROC.
            </li>
            <li>
              <span className="font-medium">Anchor Investor Mapping —</span>{" "}
              identifying and securing institutional commitments prior to the
              public issue.
            </li>
            <li>
              <span className="font-medium">
                Roadshow &amp; Book Building —
              </span>{" "}
              marketing the issue to QIBs, HNIs, and retail investors to drive
              subscription.
            </li>
            <li>
              <span className="font-medium">Listing Day Synchronization —</span>{" "}
              managing Registrar, Bankers, and Exchanges for the final bell
              ceremony.
            </li>
            <li>
              <span className="font-medium">
                Post-Listing Compliance Regime —
              </span>{" "}
              establishing the permanent investor relations and reporting
              infrastructure.
            </li>
          </ol>
        </section>

        {/* Representative mandates */}
        <section
          className="
            space-y-3
            rounded-2xl border border-slate-100 bg-white
            px-4 md:px-6 py-5 md:py-6
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <h3 className="text-lg md:text-xl font-semibold">
            Representative Mandates
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-slate-800">
            <li>
              <span className="font-medium">
                Specialty Chemical Conglomerate:
              </span>{" "}
              Mainboard IPO origination &amp; lead management — Issue size ₹
              1,250 Crores; oversubscribed 48x (QIB tranche).
            </li>
            <li>
              <span className="font-medium">
                Automotive Component Manufacturer:
              </span>{" "}
              Pre-IPO governance &amp; financial restructuring — DRHP filed &amp;
              approved by SEBI.
            </li>
            <li>
              <span className="font-medium">Fintech Platform (SaaS):</span> SME
              to Mainboard migration strategy — successful migration &amp;
              liquidity event.
            </li>
          </ul>
        </section>

        {/* Statutory adherence */}
        <section
          className="
            space-y-3 border-t border-slate-200 pt-6
          "
        >
          <h3 className="text-lg md:text-xl font-semibold">
            Statutory Adherence &amp; Risk Disclosure
          </h3>
          <p className="text-sm md:text-base text-slate-800">
            <span className="font-medium">Regulatory Mandate:</span> All
            advisory services are executed in strict conformity with the
            Securities and Exchange Board of India (Issue of Capital and
            Disclosure Requirements) Regulations, 2018, and the Companies Act,
            2013.
          </p>
          <p className="text-sm md:text-base text-slate-800">
            <span className="font-medium">Fiduciary Disclaimer:</span> Ozzuno
            Capital acts as a strategic process architect. While we ensure
            rigorous compliance with SEBI norms, the ultimate subscription of
            the issue is subject to systemic market volatility. Listing gains
            are not guaranteed; the issuer retains liability for all material
            disclosures made in the DRHP.
          </p>
        </section>

        {/* Merchant Banking – summary block */}
        <section
          className="
            space-y-4 border-t border-slate-200 pt-8
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            Merchant Banking, Capital Markets Underwriting &amp; Transaction
            Management
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We stand as the gatekeepers of the capital markets. Our Merchant
            Banking Services division orchestrates large-scale financial
            transactions at the intersection of regulatory compliance and
            massive capital mobilization — from IPOs, QIPs and preferential
            issues to buybacks, delistings and open offers.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            We structure issuances, manage offer documentation, coordinate
            underwriting syndicates and oversee end-to-end issue management and
            allotment, ensuring capital-raising exercises are executed with
            institutional precision.
          </p>
        </section>
      </div>
    </main>
  );
}
