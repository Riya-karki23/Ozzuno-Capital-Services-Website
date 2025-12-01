import React from "react";

export default function Policy1() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            Terms of Engagement & Jurisdictional Mandate
          </h1>

          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Dictates the rules of engagement between the User and The Firm.
          </p>
        </div>

        {/* CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* SECTION 01 */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-emerald-600 pl-3 mb-3">
              01 — Preamble
            </h2>
            <p className="text-sm leading-relaxed">
              Access to the Ozzuno Capital digital domain constitutes irrevocable acceptance of
              these Terms of Engagement. These terms are legally binding under the Information
              Technology Act, 2000 and its amendments.
            </p>
          </section>

          {/* SECTION 02 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              02 — Section A: Limitation of Fiduciary Duty
            </h2>
            <p className="text-sm leading-relaxed">
              All content including tickers, valuation matrices, and whitepapers is informational
              only. Nothing on this platform constitutes a solicitation to buy or sell securities.
            </p>
          </section>

          {/* SECTION 03 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              03 — Section B: Force Majeure & Indemnification
            </h2>
            <p className="text-sm leading-relaxed">
              Users agree to indemnify and hold Ozzuno harmless against damages arising from
              reliance on hosted data. The Firm is not liable for failures caused by acts of God
              or market-halting events.
            </p>
          </section>

          {/* SECTION 04 */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              04 — Section C: Exclusive Jurisdiction
            </h2>
            <p className="text-sm leading-relaxed">
              All disputes shall fall under the exclusive jurisdiction of Courts in Mumbai,
              Maharashtra.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
