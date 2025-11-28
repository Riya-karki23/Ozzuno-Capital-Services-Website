import React from "react";

export default function Level16() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-cyan-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-cyan-100/70 blur-3xl opacity-70" />

        {/* HEADER */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 16 · Contact &amp; Global Nodes
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Strategic Command Centers
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Headquarters, regional desks and secure digital rails for sensitive
            document exchange.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mt-2">
            SECTION 16 · CONTACT &amp; GLOBAL NODES
          </p>
        </header>

        {/* MAP / OVERVIEW CARD */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            GLOBAL GRID OVERVIEW
          </p>
          <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
            Central Command &amp; International Nodes
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            Ozzuno operates as a distributed command network. Mumbai forms the
            primary war room, supported by policy, technology and offshore
            liquidity nodes across key global capitals.
          </p>
          <p className="mt-3 text-xs md:text-sm text-slate-600">
            <span className="font-semibold">Visual Cue:</span> World map with
            illuminated nodes – Mumbai, Delhi, Bangalore, Dubai and London –
            linked along capital flow corridors.
          </p>
        </section>

        {/* GRID: HQ + Regional Nodes + Data Vault + International Nodes */}
        <section
          className="
            relative 
            grid gap-8 
            lg:grid-cols-2 
            auto-rows-fr 
            items-stretch
          "
        >
          {/* CENTRAL COMMAND · MUMBAI */}
          <div className="h-full rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              CENTRAL COMMAND · MUMBAI
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
              Headquarters &amp; War Room
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-700 leading-relaxed">
              Based in India’s financial nerve center, the Mumbai facility
              houses core{" "}
              <span className="font-semibold">
                Merchant Banking and IPO Listing
              </span>{" "}
              teams – the control tower for domestic capital markets.
            </p>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-700">
              <li>
                • <span className="font-semibold">Access Protocol:</span> By
                appointment only, with biometric verification and NDA execution
                at entry.
              </li>
              <li>
                • <span className="font-semibold">Secure Document Drop:</span>{" "}
                Grade-4 vault facility for physical submission of securities,
                share certificates and instruments related to Unlisted Shares.
              </li>
            </ul>
          </div>

          {/* REGIONAL STRATEGIC DESKS */}
          <div className="h-full rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REGIONAL STRATEGIC DESKS
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
              Delhi · Bangalore · Domestic Vectors
            </h2>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">
                  Delhi · Policy Liaison Node
                </p>
                <p>
                  Manages government relations, regulatory advocacy with
                  ministries and Competition Commission of India (CCI) liaison
                  for M&amp;A approvals.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Bangalore · Tech-Fin Node
                </p>
                <p>
                  Focused on{" "}
                  <span className="font-semibold">
                    venture capital, start-up advisory and digital
                    transformation
                  </span>
                  , bridging Ozzuno with the technology ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* THE DATA VAULT · SECURED DIGITAL UPLOAD */}
          <div className="h-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">
              THE DATA VAULT · SECURED DIGITAL UPLOAD
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">
              AES-256 Encrypted Transmission Rail
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-200 leading-relaxed">
              A hardened digital corridor for uploading{" "}
              <span className="font-semibold">
                due diligence reports, KYC documents and financial statements
              </span>{" "}
              related to audit and assurance.
            </p>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-200">
              <li>
                • <span className="font-semibold">Encryption:</span> AES-256
                end-to-end with automatic metadata scrubbing and quarantine
                before internal access.
              </li>
              <li>
                • <span className="font-semibold">Whistleblower Portal:</span>{" "}
                Anonymous channel routed directly to the Ombudsman for reporting
                ethical breaches or malfeasance.
              </li>
            </ul>
          </div>

          {/* INTERNATIONAL LIQUIDITY NODES */}
          <div className="h-full rounded-3xl bg-slate-900 text-slate-100 border border-slate-800 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">
              INTERNATIONAL LIQUIDITY NODES
            </p>
            <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">
              Dubai &amp; London · Offshore Capital Corridors
            </h2>
            <p className="mt-3 text-xs md:text-sm text-slate-200 leading-relaxed">
              Liaison offices in{" "}
              <span className="font-semibold">Dubai and London</span> operate in
              a representative capacity – critical waypoints in our global
              liquidity architecture.
            </p>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-200">
              <li>
                • Facilitation of{" "}
                <span className="font-semibold">
                  Cross-Border Capital and ECB syndications
                </span>
                .
              </li>
              <li>
                • Support for Overseas Direct Investment (ODI) and outbound /
                inbound capital structuring.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
