// src/pages/Level10Login.jsx
import React from "react";

export default function Level10Login() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-100 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row gap-10 md:items-center">
        {/* Left: copy */}
        <div className="flex-1 space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300">
            Level 10 · Client Access
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-white">
            [SECURE] UHNWI Portal
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-xl">
            Encrypted interface for ultra-high-net-worth clients and family
            offices to monitor mandates, exposures, performance and risk in
            real time.
          </p>
          <p className="text-[11px] text-slate-400 max-w-md">
            Multi-factor authentication is mandatory. Access is restricted to
            whitelisted devices and jurisdictions in accordance with the
            onboarding mandate.
          </p>
        </div>

        {/* Right: login card */}
        <div className="flex-1 max-w-md ml-auto">
          <div className="relative rounded-3xl bg-slate-900/80 border border-emerald-500/40 shadow-2xl p-7 md:p-8 backdrop-blur-lg">
            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/30 blur-3xl" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-200">
              AUTHENTICATE SESSION
            </p>
            <form className="mt-5 space-y-4 text-sm relative">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Client ID / Family Office Code
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm bg-slate-950/70 text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="UHNWI-XXXX or SFO-XXXX"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm bg-slate-950/70 text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  One-Time Passcode (OTP)
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm bg-slate-950/70 text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="6-digit OTP"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-slate-500 bg-slate-900 text-emerald-500 focus:ring-0"
                  />
                  <span>Trust this device (as per mandate)</span>
                </label>
                <button type="button" className="hover:text-emerald-300">
                  Resend OTP
                </button>
              </div>
              <button
                type="button"
                className="mt-2 w-full inline-flex items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold bg-emerald-500 text-slate-950 shadow-sm hover:bg-emerald-400 transition-colors"
              >
                Sign in securely →
              </button>
            </form>
            <p className="mt-4 text-[11px] text-slate-400">
              For access issues, contact your assigned Wealth Architect through
              registered channels only.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
