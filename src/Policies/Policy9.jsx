import React from "react";

export default function Policy9() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            9. FEE REMITTANCE & NON-REFUNDABLE RETAINER MANDATE
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Replace "Refund Policy" with this. It ensures you never have to give money back.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* SECTION A */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-600 pl-3 mb-3">
              SECTION A: THE RETAINER PRINCIPLE
            </h2>
            <p className="text-sm leading-relaxed">
              All professional fees, including "Engagement Retainers," "Mobilization Advances," 
              and "Advisory Levies," are deemed Earned Upon Receipt. These funds are allocated 
              immediately to the deployment of human capital and intellectual resources.
            </p>
          </section>

          {/* SECTION B */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              SECTION B: NO-REFUND STATUTE
            </h2>
            <p className="text-sm leading-relaxed">
              Ozzuno Capital operates under a strict "No-Refund / No-Reversal" policy. The User 
              acknowledges that Strategic Advisory and Investment Banking services are qualitative 
              and effort-based. The termination of a mandate by the Client, regardless of the stage 
              of execution, does not absolve the Client of their obligation to settle all accrued fees.
            </p>
          </section>

          {/* SECTION C */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              SECTION C: FORCE MAJEURE EXCEPTIONS
            </h2>
            <p className="text-sm leading-relaxed">
              No refunds shall be processed due to service interruptions caused by sovereign 
              policy shifts, regulatory moratoriums, or systemic market halts (e.g., SEBI 
              halting trading). The Firm’s obligation is limited to the "Best Effort" 
              execution of the mandate.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
