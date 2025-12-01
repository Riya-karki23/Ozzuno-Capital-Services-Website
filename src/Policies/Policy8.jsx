import React from "react";

export default function Policy8() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            8. INTELLECTUAL PROPERTY SOVEREIGNTY & COPYRIGHT ENFORCEMENT
          </h1>
          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Replace "Copyright Policy" with this. It turns your content into a restricted asset.
          </p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* ARTICLE I */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-indigo-600 pl-3 mb-3">
              ARTICLE I: PROPRIETARY DOMINION
            </h2>
            <p className="text-sm leading-relaxed">
              All distinct content, including but not limited to the "Ozzuno Neural Core," 
              "The Architecture of Dominion," Valuation Matrices, Algorithmic Scripts, and 
              Corporate Insignia displayed on this domain are the Exclusive Intellectual 
              Property (IP) of Ozzuno Capital Services Pvt. Ltd. This content is protected 
              under the Copyright Act, 1957, the Trade Marks Act, 1999, and international 
              WIPO conventions.
            </p>
          </section>

          {/* ARTICLE II */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              ARTICLE II: PROHIBITION OF DERIVATIVE WORKS
            </h2>
            <p className="text-sm leading-relaxed">
              The User is strictly prohibited from engaging in "Data Scraping," "Framing," or 
              the creation of "Derivative Works" based on the firm’s proprietary intelligence. 
              Any unauthorized reproduction, dissemination, or monetization of this material 
              will invoke immediate Injunctive Relief and claims for Punitive Damages in the 
              High Court of Judicature.
            </p>
          </section>

          {/* ARTICLE III */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              ARTICLE III: DIGITAL RIGHTS MANAGEMENT (DRM)
            </h2>
            <p className="text-sm leading-relaxed">
              We employ active DRM protocols to monitor the unauthorized distribution of our 
              Whitepapers and Research Reports. Each downloaded document is embedded with a 
              unique Forensic Watermark traceable to the User’s IP address.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
