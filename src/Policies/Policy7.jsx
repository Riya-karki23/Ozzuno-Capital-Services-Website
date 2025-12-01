import React from "react";

export default function Policy7() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            7. DISCLAIMER & LIMITATION OF LIABILITY
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            The final shield.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* AS-IS CLAUSE */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-3">
              THE "AS-IS" CLAUSE
            </h2>
            <p className="text-sm leading-relaxed">
              All intelligence, reports, and data provided on this site are delivered on an 
              "As-Is" and "As-Available" basis. Ozzuno Capital expressly disclaims all warranties, 
              express or implied, including warranties of merchantability and fitness for a 
              particular strategic purpose.
            </p>
          </section>

          {/* DAMAGES CLAUSE */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              EXCLUSION OF CONSEQUENTIAL DAMAGES
            </h2>
            <p className="text-sm leading-relaxed">
              Under no legal theory—whether in tort, contract, or strict liability—shall 
              Ozzuno Capital be liable for any direct, indirect, special, incidental, or 
              consequential damages (including lost profits or loss of data) arising out of 
              the use or inability to use the Firm’s digital infrastructure, even if the Firm 
              has been advised of the possibility of such damages.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
