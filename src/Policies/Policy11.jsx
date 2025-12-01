import React from "react";

export default function Policy11() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            11. DIGITAL CONDUCT & PROHIBITED USAGE DIRECTIVE
          </h1>

          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Replace "Acceptable Use Policy" with this. It sounds like a penal code.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* DIRECTIVE I */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-red-600 pl-3 mb-3">
              DIRECTIVE I: SYSTEM INTEGRITY
            </h2>
            <p className="text-sm leading-relaxed">
              The User is strictly prohibited from deploying automated bots, spiders, or 
              "Distributed Denial of Service" (DDoS) vectors against the Ozzuno infrastructure. 
              Any attempt to probe, scan, or test the vulnerability of our Neural Core will be 
              interpreted as a Hostile Cyber Act under the Information Technology Act, 2000.
            </p>
          </section>

          {/* DIRECTIVE II */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              DIRECTIVE II: CONTENT SANITIZATION
            </h2>
            <p className="text-sm leading-relaxed">
              Users authorized to access the "Partner Portal" or "Data Room" are prohibited from 
              uploading files containing malicious payloads, logic bombs, or unverified executables.
            </p>
          </section>

          {/* DIRECTIVE III */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              DIRECTIVE III: ZERO-TOLERANCE ENFORCEMENT
            </h2>
            <p className="text-sm leading-relaxed">
              Violation of this directive will result in the immediate Blacklisting of the User’s 
              digital fingerprint, the forfeiture of all access privileges, and the initiation of 
              criminal proceedings with the Cyber Crime Cell.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
