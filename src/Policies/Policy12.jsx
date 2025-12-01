import React from "react";

export default function Policy12() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            12. MODERN SLAVERY & ETHICAL SOURCING MANIFESTO
          </h1>

          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Common on global corporate sites (ESG Compliance). It adds massive institutional weight.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* DECLARATION */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-emerald-600 pl-3 mb-3">
              DECLARATION OF HUMAN DIGNITY
            </h2>
            <p className="text-sm leading-relaxed">
              Ozzuno Capital Services Pvt. Ltd. enforces a Zero-Tolerance stance against modern 
              slavery, human trafficking, and forced labor within its supply chain and client 
              ecosystem. We align our operations with the UK Modern Slavery Act, 2015 and 
              relevant UN Human Rights Conventions.
            </p>
          </section>

          {/* SUPPLIER & CLIENT DUE DILIGENCE */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              SUPPLIER & CLIENT DUE DILIGENCE
            </h2>
            <p className="text-sm leading-relaxed">
              We refuse to deploy capital or provide advisory services to entities flagged for 
              labor violations. All vendors and downstream partners are subject to mandatory 
              Ethical Audits. We reserve the right to unilaterally terminate engagements where 
              the counterparty fails to demonstrate a clean human rights track record.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
