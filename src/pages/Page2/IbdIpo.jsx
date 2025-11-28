// src/pages/IbdIpo.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function IbdIpo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 2 · Investment Banking Division
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            IPO Advisory &amp; Capital Markets Origination
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Capital Markets Origination &amp; Initial Public Offering (IPO)
            syndication — transforming private enterprises into public
            institutions of indefinite sovereign value.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: IPO Consulting &amp; Listing Services
          </p>
        </header>

        {/* Main doctrine card */}
        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. CAPITAL MARKETS ORIGINATION &amp; IPO SYNDICATION
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We do not merely assist in the listing of securities; we architect
              the fundamental metamorphosis of a private enterprise into a
              public institution of indefinite sovereign value. Our IPO
              Consulting &amp; Listing Services division operates as a monolithic
              entity dedicated to the rigorous orchestration of the "going
              public" lifecycle. This is not a simple administrative process; it
              is a high-stakes financial war requiring the deployment of
              forensic accounting, regulatory arbitrage, and strategic investor
              relations.
            </p>
            <p>
              Our primary mandate involves the granular assessment of{" "}
              <span className="font-semibold">
                IPO Readiness &amp; Governance Architecture
              </span>
              . We initiate a forensic-level audit of the issuer&apos;s
              organizational hierarchy, enforcing a draconian restructuring of
              internal controls to meet the exacting standards of SEBI and
              global exchanges. This involves complete{" "}
              <span className="font-semibold">
                Financial Remediation &amp; Statutory Clean-up
              </span>{" "}
              of historical accounts. We do not simply compile reports; we
              reconstruct financial narratives.
            </p>
            <p>
              We align historical financial statements with Ind AS/IFRS
              convergence standards, rigorously stress-testing valuations
              against market volatility, and preparing the Draft Red Herring
              Prospectus (DRHP) with a level of detail that withstands the most
              hostile regulatory scrutiny.
            </p>
            <p>
              Our scope of work encompasses absolute{" "}
              <span className="font-semibold">
                Risk Mitigation &amp; Due Diligence
              </span>{" "}
              protocols. We deploy a multi-layered compliance shield,
              identifying latent liabilities in legal, environmental, and
              operational domains before they can impact the issuer&apos;s
              valuation. We execute deep-dive due diligence to ensure that every
              material fact is substantiated, ensuring total adherence to the
              SEBI (Issue of Capital and Disclosure Requirements) Regulations.
            </p>
            <p>
              Simultaneously, our fiscal engineering team constructs
              sophisticated{" "}
              <span className="font-semibold">Taxation Structures</span>. We
              analyze the implications of capital gains, corporate
              restructuring, and promoter holding dilution to optimize the
              fiscal efficiency of the post-listing entity, ensuring that wealth
              is preserved against the erosion of statutory levies.
            </p>
            <p>
              Our engagement is defined by{" "}
              <span className="font-semibold">
                End-to-End Project Orchestration
              </span>
              . We assume fiduciary responsibility for the entire transaction
              lifecycle, managing the labyrinthine coordination between merchant
              bankers, legal counsels, registrars, and underwriters. We dictate
              the critical path timelines, ensuring that the rigorous demands of
              the roadshow and book-building process are met with military
              precision.
            </p>
            <p>
              Finally, our obligation extends beyond the listing bell through{" "}
              <span className="font-semibold">
                Post-IPO Compliance &amp; Reporting
              </span>
              . We act as custodians of continuing disclosure, managing the
              relentless stream of quarterly reporting, insider trading
              regulations, and corporate governance filings required to maintain
              the entity&apos;s standing in the public markets. In summary, we
              do not just list shares; we engineer the financial infrastructure
              necessary for a company to dominate the capital markets.
            </p>
          </div>
        </section>

        {/* Links to subpages */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/ibd/ipo/sovereignty-protocol"
              className="rounded-3xl bg-slate-900 text-slate-50 p-5 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                Proprietary Execution Matrix
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Public Markets Sovereignty Protocol™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-200/85">
                Phase-wise grid from IPO readiness and governance diagnostics to
                listing day synchronization and post-listing compliance regime.
              </p>
              <p className="mt-4 text-[11px] text-sky-300">Open protocol →</p>
            </Link>

            <Link
              to="/ibd/ipo/governance-diagnostic"
              className="rounded-3xl bg-white/90 border border-slate-200 text-slate-900 p-5 md:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sub-Page
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Governance Diagnostic &amp; Forensic Clean-up
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Forensic audit of corporate structure, internal controls, and
                historical financials to meet SEBI and global exchange norms.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore diagnostic layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Representative mandates + statutory */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Specialty Chemical Conglomerate
                </h3>
                <p className="text-xs text-slate-500">
                  Mainboard IPO Origination &amp; Lead Management
                </p>
                <p className="mt-1 text-xs">
                  Issue Size: ₹ 1,250 Crores · Outcome: Oversubscribed 48x (QIB
                  Tranche)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Automotive Component Manufacturer
                </h3>
                <p className="text-xs text-slate-500">
                  Pre-IPO Governance &amp; Financial Restructuring
                </p>
                <p className="mt-1 text-xs">
                  Enterprise Value: ₹ 850 Crores · Outcome: DRHP Filed &amp;
                  Approved by SEBI
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Fintech Platform (SaaS)
                </h3>
                <p className="text-xs text-slate-500">
                  SME to Mainboard Migration Strategy
                </p>
                <p className="mt-1 text-xs">
                  Market Cap: ₹ 420 Crores · Outcome: Successful Migration &amp;
                  Liquidity Event
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
                <span className="font-semibold">Regulatory Mandate:</span> All
                advisory services are executed in strict conformity with the
                SEBI (Issue of Capital and Disclosure Requirements)
                Regulations, 2018, and the Companies Act, 2013.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Ozzuno Capital acts as a strategic process architect. While we
                ensure rigorous compliance with SEBI norms, the ultimate
                subscription of the issue is subject to systemic market
                volatility. Valuation parameters are derived using
                IBBI-registered valuer standards; however, listing gains are not
                guaranteed. The issuer retains liability for all material
                disclosures made in the Draft Red Herring Prospectus (DRHP).
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
