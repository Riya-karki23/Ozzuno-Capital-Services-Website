import React from "react";

export default function Policy10() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            10. EXTERNAL LINKAGE & THIRD-PARTY ASSOCIATION PROTOCOL
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Replace "Hyperlinking Policy" with this. It distances you from liability.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* CLAUSE 1 */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-3">
              CLAUSE 1: THE "ARM'S LENGTH" DISCLAIMER
            </h2>
            <p className="text-sm leading-relaxed">
              This domain may contain "outbound nodes" (hyperlinks) connecting to third-party 
              regulatory bodies (SEBI, RBI), exchanges (NSE, BSE), or payment gateways. The 
              existence of such nodes does not constitute an Endorsement, Warranty, or Fiduciary 
              Alliance with these external entities.
            </p>
          </section>

          {/* CLAUSE 2 */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CLAUSE 2: LIABILITY FIREWALL
            </h2>
            <p className="text-sm leading-relaxed">
              Once the User traverses an outbound node, they exit the Ozzuno Secure Domain. We 
              expressly disclaim all liability for the data hygiene, malware exposure, or privacy 
              violations encountered on third-party infrastructure. The User proceeds at their 
              own peril.
            </p>
          </section>

          {/* CLAUSE 3 */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CLAUSE 3: INBOUND LINKING PROHIBITION
            </h2>
            <p className="text-sm leading-relaxed">
              No third-party entity is permitted to establish a "Deep Link" or "Backlink" to this 
              domain without the express, written consent of the Ozzuno Board of Directors. 
              Unauthorized linking will be treated as "Cyber Trespass."
            </p>
          </section>

          {/* SHAPE? */}
          <p className="text-xs text-slate-400 italic mt-4">
            Shape
          </p>

        </div>
      </div>
    </div>
  );
}
