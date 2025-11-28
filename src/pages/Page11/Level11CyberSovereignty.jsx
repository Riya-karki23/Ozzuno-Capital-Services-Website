// src/pages/Level11CyberSovereignty.jsx
import React from "react";

export default function Level11CyberSovereignty() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-sky-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <div className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-sky-100/70 blur-3xl opacity-70" />

        {/* header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 11 · Technology &amp; Innovation
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Cyber-Sovereignty
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Zero-trust architecture, blockchain settlement and AI-driven
            compliance – a military-grade cyber grid for financial data.
          </p>
        </header>

        {/* intro */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            CYBER-SOVEREIGNTY &amp; DATA FORTIFICATION
          </p>
          <p className="text-sm md:text-[15px] text-slate-700 max-w-3xl">
            In an era of digital warfare and state-sponsored espionage, our
            technology stack is designed for{" "}
            <span className="font-semibold">cyber-sovereignty</span> – not just
            protection, but control over every byte of sensitive data.
          </p>
        </section>

        {/* 3 cards */}
        <section className="grid gap-6 md:grid-cols-3">
          {/* Blockchain Settlement Layer */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-5 md:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              BLOCKCHAIN SETTLEMENT LAYER
            </p>
            <h2 className="mt-2 text-sm md:text-base font-semibold text-slate-900">
              Immutable Ownership Rails
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-700">
              We pilot distributed ledger technology (DLT) for{" "}
              <span className="font-semibold">
                unlisted share transfers and Private Equity cap tables
              </span>
              , ensuring tamper-proof, transparent ownership records and
              audit-ready settlement trails.
            </p>
          </div>

          {/* Zero-Trust Architecture */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-5 md:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              ZERO-TRUST ARCHITECTURE
            </p>
            <h2 className="mt-2 text-sm md:text-base font-semibold text-slate-900">
              Compartmentalized Access Control
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-700">
              The internal network operates on{" "}
              <span className="font-semibold">Zero-Trust</span>. Access to
              sensitive data – M&amp;A due diligence, exit valuations and risk
              models – is governed by{" "}
              <span className="font-semibold">
                biometric authentication and strict role-based access
              </span>
              . No operator views the entire data lake.
            </p>
          </div>

          {/* AI-Driven Compliance Sentinel */}
          <div className="rounded-3xl bg-slate-900 text-slate-100 border border-slate-800 shadow-md p-5 md:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-sky-300">
              AI-DRIVEN COMPLIANCE SENTINEL
            </p>
            <h2 className="mt-2 text-sm md:text-base font-semibold text-white">
              Real-Time Regulatory Guardian
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-200">
              Automated surveillance algorithms scan every transaction in
              real-time against{" "}
              <span className="font-semibold">
                SEBI regulations and Insider Trading norms
              </span>
              , raising alerts, blocking suspicious flows and preserving
              unassailable corporate governance.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
