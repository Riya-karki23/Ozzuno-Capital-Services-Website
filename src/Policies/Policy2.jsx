import React from "react";

export default function Policy2() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 
                    flex justify-center items-center px-4">

      {/* DOCUMENT BOX */}
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl 
                      shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      border border-slate-300 overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-8 py-5 border-b border-slate-300 bg-slate-50">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-slate-800">
            2. DATA SOVEREIGNTY & PRIVACY ARCHITECTURE
          </h1>

          <p className="text-xs md:text-sm text-slate-500 text-center italic mt-1">
            Replace "Privacy Policy" with this. It turns data protection into a security protocol.
          </p>
        </div>

        {/* CONTENT SCROLL */}
        <div className="px-8 py-6 overflow-y-auto text-slate-800">

          {/* ARTICLE I */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-emerald-600 pl-3 mb-3">
              ARTICLE I: DATA DOMICILE & COMPLIANCE
            </h2>
            <p className="text-sm leading-relaxed">
              Ozzuno Capital operates a sovereign data infrastructure compliant with 
              the Digital Personal Data Protection (DPDP) Act, 2023. We do not "share" data; 
              we quarantine it. All Client Personally Identifiable Information (PII) and 
              Sensitive Personal Data or Information (SPDI) is encrypted using AES-256 
              military-grade standards and domiciled exclusively within Tier-4 Data Centers 
              located within the territorial borders of India.
            </p>
          </section>

          {/* ARTICLE II */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              ARTICLE II: FORENSIC DATA COLLECTION
            </h2>
            <p className="text-sm leading-relaxed">
              By navigating this domain, the User consents to the algorithmic harvesting 
              of metadata, including but not limited to IP triangulation, device 
              fingerprinting, and behavioral heuristics. This data is utilized solely 
              for the Firm’s proprietary Risk Threat Modeling and KYC Verification protocols.
            </p>
          </section>

          {/* ARTICLE III */}
          <section className="mb-2">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-1 mb-2">
              ARTICLE III: THE "ZERO-LEAK" GUARANTEE
            </h2>
            <p className="text-sm leading-relaxed">
              We maintain a "Zero-Trust" internal architecture. Access to User data is 
              restricted to authorized Partners via biometric authentication. We expressly 
              disclaim liability for data breaches resulting from the User’s failure to 
              maintain the hygiene of their own cybersecurity perimeter.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
