// src/pages/Level4Page2.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level4Page2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 4 · Private Capital &amp; Alternatives
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            AIF Structuring &amp; Advisory
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Category I, II &amp; III Alternative Investment Fund capital matching
            and regulatory structuring.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: AIF Advisory
          </p>
        </header>

        {/* Main narrative */}
        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            2. ALTERNATIVE INVESTMENT FUND (AIF) STRUCTURING &amp; ADVISORY
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We navigate the exclusive and highly regulated domain of
              Alternative Investment Funds (AIFs), connecting corporations with
              non-traditional investors who operate outside the conventional
              banking system. Our AIF Advisory division mobilizes capital
              through Category I, II, and III AIF structures.
            </p>
            <p>
              We begin with{" "}
              <span className="font-semibold">
                Capital Matching &amp; Regulatory Alignment
              </span>
              . We find the right AIF for the company by aligning the fund’s
              investment thesis — venture capital, private credit, hedge — with
              the client’s capital needs and risk profile.
            </p>
            <p>
              Our core work lies in{" "}
              <span className="font-semibold">
                Transaction Structuring &amp; Documentation Architecture
              </span>
              . We manage drafting and vetting of investment documents —
              Private Placement Memorandum (PPM), Contribution Agreements,
              Subscription Deeds — and structure instruments (equity, debt,
              hybrid) to satisfy both issuer and fund requirements.
            </p>
            <p>
              We then lead{" "}
              <span className="font-semibold">
                Commercial Negotiation &amp; Compliance Management
              </span>
              — valuation caps, liquidation preferences, information rights,
              anti-dilution, and downside protections are negotiated with an eye
              to long-term alignment.
            </p>
            <p>
              Throughout, we ensure strict adherence to SEBI (AIF) Regulations,
              constructing deals that can endure regulatory scrutiny while
              unlocking access to sophisticated private capital.
            </p>
          </div>
        </section>

        {/* Sub-page links */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/level4/subpage2-1"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 4 · Subpage 2-1
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Alternative Capital Conduit™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                A phase-wise conduit connecting corporate capital needs with
                AIFs under a strict regulatory shell.
              </p>
              <p className="mt-4 text-[11px] text-sky-600">
                Open conduit matrix →
              </p>
            </Link>

            <Link
              to="/level4/subpage2-2"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 4 · Subpage 2-2
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Category I, II, III Fund Matching
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Mapping use-cases and risk profiles to the right AIF categories
                and strategies.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore fund-matching layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates & statutory */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">Real Estate Yield Fund</h3>
                <p className="text-xs text-slate-500">
                  Category II AIF Setup &amp; Fundraising
                </p>
                <p className="mt-1 text-xs">
                  Corpus: ₹ 600 Crores · Status: Green Shoe Option Exercised
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Venture Debt Fund</h3>
                <p className="text-xs text-slate-500">
                  Deployment Strategy &amp; Advisory
                </p>
                <p className="mt-1 text-xs">
                  Deployment Size: ₹ 300 Crores · Status: Active Portfolio
                  Construction
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Single Family Office</h3>
                <p className="text-xs text-slate-500">
                  Structured Credit Investment
                </p>
                <p className="mt-1 text-xs">
                  Ticket Size: ₹ 75 Crores · Status: Deployed via Cat-II AIF
                  Vehicle
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-violet-50 border border-violet-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-violet-800">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Advisory is governed by SEBI (Alternative Investment Funds)
                Regulations, 2012 and applicable circulars.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Private placements target sophisticated investors (₹1 Cr+
                minimum). The PPM is the definitive risk document. Returns are
                market-linked and principal may be at risk. Ozzuno Capital acts
                as an arranger, not as the fund manager.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
