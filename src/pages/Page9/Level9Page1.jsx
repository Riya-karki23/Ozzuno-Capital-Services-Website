// src/pages/Level9Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level9Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-amber-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <div className="pointer-events-none absolute inset-x-16 -top-10 h-52 rounded-full bg-amber-100/70 blur-3xl opacity-70" />

        {/* FULL-WIDTH HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 9 · Partner Ecosystem &amp; Franchise
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Financial Distribution &amp; Franchise Grid
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Syndicated financial distribution and franchise ecosystem
            infrastructure, built as a high-velocity B2B2C network.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-2">
            Source Service: Financial Products via Franchise Model
          </p>
        </header>

        {/* Main narrative */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. SYNDICATED FINANCIAL DISTRIBUTION &amp; FRANCHISE ECOSYSTEM INFRASTRUCTURE
          </p>

          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              We have engineered a monolithic B2B2C distribution grid that
              allows our partners to weaponize their reach through a{" "}
              <span className="font-semibold">Financial Franchise Model</span>.
              This is not a simple partnership; it is the deputization of
              entities into a high-velocity financial sales machinery. We grant
              franchisees access to an exhaustive, institutional-grade inventory
              of financial instruments, transforming them into localized
              financial powerhouses.
            </p>
            <p>
              At the core of this ecosystem is our{" "}
              <span className="font-semibold">
                Credit Syndication &amp; Liquidity Injection
              </span>{" "}
              capability. Partners distribute a diverse spectrum of debt
              products — secured Home Loans, Loans Against Property (LAP),
              unsecured Business Loans and liquid Gold Loans. We provide the
              underwriting framework and banking relationships; the partner
              provides the distribution channel.
            </p>
            <p>
              Simultaneously, we integrate a comprehensive{" "}
              <span className="font-semibold">
                Risk Transfer &amp; Insurance Suite
              </span>
              . Partners can underwrite client risks via Life and General
              Insurance products using our carrier networks.
            </p>
            <p>
              This is complemented by our{" "}
              <span className="font-semibold">
                Broking &amp; Investment Architecture
              </span>
              , which opens the gateway to capital markets. Franchisees
              facilitate stock trading, manage Demat accounts and distribute
              mutual fund units, democratizing equity participation.{" "}
            </p>
            <p>
              We elevate this further with{" "}
              <span className="font-semibold">Wealth Management Products</span>,
              including sophisticated investment portfolios and research support
              once reserved for private banking.
            </p>
            <p>
              The linchpin is our{" "}
              <span className="font-semibold">Unified Digital Marketplace</span>.
              All products — loans, policies and investments — converge on a
              single algorithmic platform where every transaction can be
              accessed, processed and tracked. This digital infrastructure acts
              as the central nervous system of the franchise.
            </p>
            <p>
              In short, we enable partners to offer a totalized suite of
              financial solutions under one dominant brand umbrella, creating a
              scalable, robust and relentlessly profitable capital distribution
              network.
            </p>
          </div>
        </section>

        {/* Subpages / portal / login */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            PARTNER GRID MODULES
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* B2B2C Distribution Grid */}
            <Link
              to="/level9/subpage1-1"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Subpage · 9-1-1
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The B2B2C Distribution Grid™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Execution matrix for partner qualification, territory mapping,
                digital integration and payout governance.
              </p>
              <p className="mt-4 text-[11px] text-amber-700 group-hover:translate-x-1 transition-transform">
                View execution matrix →
              </p>
            </Link>

            {/* Partner Application Portal */}
            <Link
              to="/level9/subpage1-2"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Subpage · 9-1-2
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                Partner Application Portal
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Digital onboarding rail for prospective franchise partners —
                KYC, profiling and eligibility screening.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Open application flow →
              </p>
            </Link>

            {/* Secure Partner Dashboard (login) */}
            <Link
              to="/level9/login"
              className="group rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-700 border border-slate-900/60 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-amber-200">
                Login · Partner Access
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold text-white">
                Secure Partner Dashboard
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-200">
                Encrypted dashboard for live leads, applications, portfolio
                metrics and commission tracking.
              </p>
              <p className="mt-4 text-[11px] text-amber-200 group-hover:translate-x-1 transition-transform">
                Go to dashboard →
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
                  Master Franchise (Western Zone)
                </h3>
                <p className="text-xs text-slate-500">
                  Secured Credit Disbursement Portfolio
                </p>
                <p className="mt-1 text-xs">
                  AUM: ₹ 450 Crores · Status: Active (NPA &lt; 0.5%)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Corporate Insurance Partner
                </h3>
                <p className="text-xs text-slate-500">
                  Risk Underwriting Volume – General &amp; Life
                </p>
                <p className="mt-1 text-xs">
                  GWP: ₹ 65 Crores · Status: Renewal Rate 92%
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Wealth Distribution Network
                </h3>
                <p className="text-xs text-slate-500">
                  Mutual Fund &amp; Equity SIP Book
                </p>
                <p className="mt-1 text-xs">
                  Monthly Flow: ₹ 25 Crores / Month · Status: Scaling
                  Aggressively
                </p>
              </div>
            </div>
          </div>

          {/* Statutory */}
          <div className="rounded-3xl bg-amber-50 border border-amber-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-900">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Solicitation of financial products is conducted through licenses
                under AMFI (Mutual Funds), IRDAI (Insurance) and RBI (Lending)
                held by partners and network institutions.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Franchise partners operate as independent entities under the
                Ozzuno compliance umbrella. Credit decisions remain at the sole
                discretion of lenders. Investment products are subject to market
                risks; past performance is not indicative of future returns.
                Ozzuno Capital acts as a distributor, not a risk underwriter.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
