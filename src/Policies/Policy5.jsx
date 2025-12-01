import React from "react";

export default function Policy5() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            5. VIGIL MECHANISM & WHISTLEBLOWER POLICY
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            This shows you police your own staff, adding to the corporate weight.
          </p>
        </div>

        {/* CONTENT (SCROLLABLE) */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* OBJECTIVE */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 mb-3">
              OBJECTIVE
            </h2>
            <p className="text-sm leading-relaxed">
              To provide a secure, encrypted channel for the reporting of genuine concerns regarding 
              financial malfeasance, insider trading, or ethical deviations within the Ozzuno ecosystem.
            </p>
          </section>

          {/* DISCLOSURE REGIME */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              THE PROTECTED DISCLOSURE REGIME
            </h2>
            <p className="text-sm leading-relaxed">
              Whistleblowers are granted "Protected Status" against retaliation. All disclosures must 
              be submitted directly to the Chairman of the Audit Committee via the encrypted "Ombudsman 
              Portal." Frivolous complaints filed with malicious intent will invoke legal defamation 
              proceedings against the complainant.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
