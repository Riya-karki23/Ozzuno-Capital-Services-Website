// src/pages/Level9Login.jsx
import React from "react";

export default function Level9Login() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black text-slate-100 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row gap-10 md:items-center">
        {/* Left info */}
        <div className="flex-1 space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300">
            Level 9 · Partner Access
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-white">
            Secure Partner Dashboard
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-xl">
            Encrypted access to live leads, applications, disbursements,
            insurance policies, investment flows and commission statements —
            consolidated in one command console.
          </p>
        </div>

        {/* Right login card */}
        <div className="flex-1 max-w-md ml-auto">
          <div className="rounded-3xl bg-slate-900/70 border border-slate-700 shadow-2xl p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">
              PARTNER LOGIN
            </p>
            <form className="mt-5 space-y-4 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Partner ID / Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-600 px-3 py-2 text-sm bg-slate-950/70 text-slate-100 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="partner@domain.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-xl border border-slate-600 px-3 py-2 text-sm bg-slate-950/70 text-slate-100 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-slate-500 bg-slate-900 text-amber-500 focus:ring-0"
                  />
                  <span>Remember device</span>
                </label>
                <button type="button" className="hover:text-amber-300">
                  Forgot password?
                </button>
              </div>
              <button
                type="button"
                className="mt-2 w-full inline-flex items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold bg-amber-500 text-slate-900 shadow-sm hover:bg-amber-400 transition-colors"
              >
                Sign in →
              </button>
            </form>
            <p className="mt-4 text-[11px] text-slate-400">
              New partner? Apply via{" "}
              <span className="text-amber-300">Partner Application Portal</span>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
