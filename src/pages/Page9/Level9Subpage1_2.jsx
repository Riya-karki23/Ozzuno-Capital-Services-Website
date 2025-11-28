// src/pages/Level9Subpage1_2.jsx
import React from "react";

export default function Level9Subpage1_2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-amber-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        {/* FULL-WIDTH HEADER */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 9 · Subpage 1-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Partner Application Portal
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Digital onboarding interface for prospective franchise partners.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          {/* Form side */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              APPLY AS A FRANCHISE PARTNER
            </p>
            <form className="mt-5 space-y-4 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Legal Entity Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50"
                  placeholder="ABC Finserve Pvt. Ltd."
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Mobile / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50"
                    placeholder="+91 ..."
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    City / Territory
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50"
                    placeholder="e.g. Pune, West Zone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Existing Business Profile
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50"
                  placeholder="Briefly describe your current distribution / financial services business."
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold bg-amber-600 text-white shadow-sm hover:bg-amber-700 transition-colors"
              >
                Submit application →
              </button>
            </form>
          </div>

          {/* Info side */}
          <div className="rounded-3xl bg-amber-50 border border-amber-100 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-900">
              APPLICATION STAGES
            </p>
            <ol className="mt-4 space-y-3 text-xs md:text-sm text-slate-700 list-decimal list-inside">
              <li>Initial application submission &amp; document upload.</li>
              <li>Eligibility screening and compliance checks.</li>
              <li>Interview / discussion with franchise acquisition team.</li>
              <li>Territory allocation and business plan alignment.</li>
              <li>Agreement execution and digital platform activation.</li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
