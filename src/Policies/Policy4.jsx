import React from "react";

export default function Policy4() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            4. AML & CFT (ANTI-MONEY LAUNDERING) CHARTER
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            This implies you have police-like powers to freeze assets.
          </p>
        </div>

        {/* CONTENT SCROLL */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* SECTION : MANDATE */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-indigo-500 pl-3 mb-3">
              STATUTORY MANDATE
            </h2>
            <p className="text-sm leading-relaxed">
              Ozzuno Capital adheres strictly to the Prevention of Money Laundering Act (PMLA), 2002 
              and the guidelines issued by the Financial Intelligence Unit (FIU-IND).
            </p>
          </section>

          {/* PROTOCOL 1 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PROTOCOL 1: SOURCE OF FUNDS VERIFICATION
            </h2>
            <p className="text-sm leading-relaxed">
              The Firm reserves the right to demand forensic proof of the "Source of Funds" for any 
              transaction exceeding statutory thresholds. Failure to provide such evidence will result 
              in the immediate freezing of the engagement and the filing of a Suspicious Transaction 
              Report (STR) with the relevant authorities.
            </p>
          </section>

          {/* PROTOCOL 2 */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PROTOCOL 2: POLITICALLY EXPOSED PERSONS (PEPS)
            </h2>
            <p className="text-sm leading-relaxed">
              Enhanced Due Diligence (EDD) protocols are automatically triggered for Users identified 
              as PEPs or their close associates. We reserve the right to decline mandates where the 
              Ultimate Beneficial Owner (UBO) structure is opaque or domiciled in non-compliant 
              jurisdictions (FATF Blacklist).
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
