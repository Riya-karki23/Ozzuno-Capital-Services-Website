import React from "react";

export default function Policy6() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            6. DIGITAL SURVEILLANCE & COOKIE PROTOCOL
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Make the cookie policy sound like a surveillance operation.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* SECTION 1 */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-purple-500 pl-3 mb-3">
              USE OF BEACON TECHNOLOGY
            </h2>
            <p className="text-sm leading-relaxed">
              This domain utilizes persistent cookies, pixel tags, and web beacons to map the User’s 
              cognitive journey through our service offerings. This is not optional.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              ANALYTICS & SESSION RECORDING
            </h2>
            <p className="text-sm leading-relaxed">
              We employ session replay technology to analyze User interaction patterns. This data is 
              fed into our Neural Core to optimize the delivery of financial intelligence. By continuing 
              to browse, you explicitly consent to this surveillance for the purpose of 
              "Service Optimization and Fraud Prevention."
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
