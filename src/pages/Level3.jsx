// src/pages/LevelThreeCAG.jsx
import React, { useState } from "react";

const cagSections = [
  {
    id: "mna",
    levelLabel: "LEVEL 3: CORPORATE ADVISORY GROUP (CAG)",
    title: "Mergers, Acquisitions & Inorganic Growth",
    sectionLabel: "SECTION 3: CORPORATE ADVISORY GROUP (CAG)",
    sourceService: "M&A Services (Mergers & Acquisitions)",
    websiteName: "Mergers, Acquisitions & Inorganic Growth",
    intro:
      "Inorganic growth war room for acquisitions, mergers and market consolidation — from target scanning to post-merger integration.",
    narrative: [
      "We design conquest-led growth — scanning markets for strategic targets, validating fit and architecting acquisitions that expand market share, capabilities or vertical control.",
      "Our teams run forensic financial and operational due diligence to surface toxic assets, hidden liabilities and inflated valuations before capital is committed.",
      "We engineer deal structures — cash, stock or LBO — to keep the transaction EPS-accretive and tax-efficient, while locking in terms that favour the acquirer.",
      "Finally, we command transaction execution: term sheets, definitive agreements, NCLT/CCI approvals and culture integration so the merged entity actually functions as one organism.",
    ],
    matrixTitle: "The Inorganic Conquest Cycle™",
    matrixIntro:
      "8-phase execution matrix for buying or merging with another company.",
    matrixPhases: [
      "Phase 1 · Inorganic Strategy Definition — criteria and thesis for growth by acquisition.",
      "Phase 2 · Target Screening & Identification — mapping targets that fit the strategic mold.",
      "Phase 3 · Preliminary Approach — NDAs, information exchange and first-level interest checks.",
      "Phase 4 · Forensic Due Diligence — deep audit of financials, operations and risks.",
      "Phase 5 · Synergy Valuation & Pricing — quantifying combined value and setting price bands.",
      "Phase 6 · Deal Structuring — cash vs stock mix, leverage and tax design.",
      "Phase 7 · Regulatory Approval & Compliance — NCLT, CCI and other statutory clearances.",
      "Phase 8 · Post-Merger Integration — operational and cultural integration roadmap.",
    ],
    mandates: [
      "Cement & infrastructure major — horizontal competitor acquisition (~₹1,800 Cr), NCLT-approved and integrated.",
      "Global logistics firm — inbound cross-border merger (~$140 Mn), definitive agreements executed.",
      "Renewable energy producer — solar park asset purchase (600 MW portfolio), asset transfer completed.",
    ],
    statutory:
      "M&A transactions executed under Sections 230–240 of the Companies Act, 2013 with strict monitoring of CCI combination thresholds. We enforce Chinese Walls against insider trading; integration and synergy outcomes remain the client’s execution responsibility.",
    subPages: [
      { id: "inorganic-cycle", label: "The Inorganic Conquest Cycle™" },
      { id: "target-hostile", label: "Target Screening & Hostile Defense" },
    ],
  },
  {
    id: "divestiture",
    levelLabel: "LEVEL 3: CORPORATE ADVISORY GROUP (CAG)",
    title: "Strategic Divestiture & Exit Architecture",
    sectionLabel: "SECTION 3: CORPORATE ADVISORY GROUP (CAG)",
    sourceService: "Strategic Exit Services",
    websiteName: "Strategic Divestiture & Exit Architecture",
    intro:
      "High-velocity exits, carve-outs and liquidity events focused on maximizing value and delivering clean separation.",
    narrative: [
      "We engineer divestitures, not fire-sales — from designing the exit thesis to locking in premium valuation multiples.",
      "We build intrinsic valuation using DCF, precedents and comps to define a defensible valuation floor before negotiations begin.",
      "Information Memorandum and Virtual Data Room are constructed at forensic depth so institutional buyers can run diligence without friction.",
      "We identify and line up strategic buyers, PE funds and special-situation investors, running controlled auction processes to force competitive bidding.",
      "Negotiation is handled like a shield: price, indemnities, escrows and covenants are structured to protect the seller and ensure a clean handover.",
    ],
    matrixTitle: "The Liquidity Realization Pathway™",
    matrixIntro:
      "7-phase architecture for profitable sale or closure of a division/business.",
    matrixPhases: [
      "Phase 1 · Exit Readiness Assessment — commercial, operational and legal preparedness.",
      "Phase 2 · Intrinsic Valuation Modeling — DCF / precedents / comps to set valuation floor.",
      "Phase 3 · Documentation Architecture — IM, financial packs and supporting schedules.",
      "Phase 4 · Buyer Universe Mapping — strategic and financial buyers across geographies.",
      "Phase 5 · Competitive Auction Process — structured bids to pull up offer price.",
      "Phase 6 · Term Sheet Negotiation — economics plus protection on terms and indemnities.",
      "Phase 7 · Legal Closure & Handover — SPA, closing conditions and asset transfer.",
    ],
    mandates: [
      "Multi-specialty hospital chain — 100% strategic divestiture (~₹400 Cr), full cash exit to PE buyer.",
      "Enterprise SaaS platform — majority founder stake sale (~$55 Mn) to a NASDAQ-listed tech acquirer.",
      "Auto-ancillary unit — distressed asset liquidation (~₹150 Cr debt) via slump sale.",
    ],
    statutory:
      "Valuations aligned with International Valuation Standards (IVS); divestitures routed through NCLT where required. IMs are built on management representations; closure at target valuation is not guaranteed and always subject to definitive agreements and due diligence.",
    subPages: [
      { id: "liquidity-pathway", label: "The Liquidity Realization Pathway™" },
      { id: "intrinsic-valuation", label: "Intrinsic Valuation & Asset Scrubbing" },
    ],
  },
  {
    id: "deal-validation",
    levelLabel: "LEVEL 3: CORPORATE ADVISORY GROUP (CAG)",
    title: "Deal Validation & Commercial Diligence",
    sectionLabel: "SECTION 3: CORPORATE ADVISORY GROUP (CAG)",
    sourceService: "Deal Consulting Services",
    websiteName: "Deal Validation & Commercial Diligence",
    intro:
      "Forensic checkpoint for high-stakes deals — validating that a transaction is structurally sound, commercially viable and worth signing.",
    narrative: [
      "We run commercial viability stress-tests so that strategy, economics and market reality line up before you commit to a transaction.",
      "Forensic financial review hunts for revenue overstatement, hidden liabilities and toxic covenants that could infect your balance sheet.",
      "Legal and compliance diligence flags litigation, regulatory breaches and IP vulnerabilities through empanelled Tier-1 law firms.",
      "We re-engineer deal structure — cash, equity, earn-outs — to reallocate risk and maximize tax and economic efficiency.",
      "Commercial benefit analysis ensures that projected synergies and returns are grounded in numbers, not just pitch decks.",
    ],
    matrixTitle: "The Transaction Validation Firewall™",
    matrixIntro:
      "7-phase firewall to validate safety and profitability of a deal pre-signing.",
    matrixPhases: [
      "Phase 1 · Commercial Viability Stress-Test — alignment with strategy and P&L outcomes.",
      "Phase 2 · Financial Health Review — quality of earnings and balance sheet integrity.",
      "Phase 3 · Risk Quantification — mapping, scoring and pricing downside scenarios.",
      "Phase 4 · Legal & Compliance Red-Flagging — litigation, licensing and regulatory gaps.",
      "Phase 5 · Deal Structure Optimization — recoding economics to shift risk away from client.",
      "Phase 6 · Profitability Projection — forward-looking commercial impact modeling.",
      "Phase 7 · Definitive Agreement Vetting — final review of terms before execution.",
    ],
    mandates: [
      "Luxury hospitality group — buy-side commercial diligence (~₹350 Cr asset); deal aborted after toxic liabilities flagged.",
      "Steel manufacturer — JV structuring & validation (~₹6,000 Cr commitment); JV agreement executed.",
      "Venture capital fund — portfolio valuation & risk review (~₹1,200 Cr AUM); methodology certified.",
    ],
    statutory:
      "Opinions are based on information available at the time of assessment. We provide commercial, financial and risk structuring advisory; legal opinions are issued by empanelled firms. Future performance of the asset remains at the client’s risk.",
    subPages: [
      {
        id: "validation-firewall",
        label: "The Transaction Validation Firewall™",
      },
      {
        id: "commercial-stress-test",
        label: "Commercial Viability Stress-Test",
      },
    ],
  },
  {
    id: "transformation",
    levelLabel: "LEVEL 3: CORPORATE ADVISORY GROUP (CAG)",
    title: "Strategic Corporate Transformation",
    sectionLabel: "SECTION 3: CORPORATE ADVISORY GROUP (CAG)",
    sourceService: "Business Consulting Services",
    websiteName: "Strategic Corporate Transformation",
    intro:
      "Deep business engineering — strategy, operations, digital and ESG — to prevent obsolescence and enforce structural superiority.",
    narrative: [
      "We run macro-strategic realignment: redefining where the business plays, how it wins and how fast it must move.",
      "Digital and AI integration replaces analog workflows with data-driven operating systems for planning, pricing and supply chain.",
      "Performance improvement protocols attack cost, widen EBITDA and harden revenue quality through a P&L-centric operating lens.",
      "Operational process re-engineering removes bottlenecks and latency, while org restructuring makes the hierarchy agile and responsive.",
      "Change management and ESG alignment ensure people, processes and sustainability mandates all move in the same engineered direction.",
    ],
    matrixTitle: "The Corporate Darwinism Framework™",
    matrixIntro:
      "7-phase framework covering strategy, operations, digital and restructuring.",
    matrixPhases: [
      "Phase 1 · Operational Latency Diagnostic — identifying friction and bottlenecks in the value chain.",
      "Phase 2 · Strategic Blueprinting — defining long-term vectors and market posture.",
      "Phase 3 · Digital & AI Integration — embedding tech to automate and augment decision-making.",
      "Phase 4 · Organizational Hierarchy Restructuring — roles, spans and reporting redesign.",
      "Phase 5 · Change Management Deployment — training, communication and adoption protocols.",
      "Phase 6 · Sustainability & ESG Alignment — embedding responsible operational standards.",
      "Phase 7 · Performance Stabilization — monitoring EBITDA and cost metrics post-change.",
    ],
    mandates: [
      "Pan-India logistics fleet — process re-engineering; ~₹22 Cr annual cost rationalisation implemented and audited.",
      "Textile manufacturing group — turnaround and restructuring on ~₹600 Cr revenue base; EBITDA restored to ~18%.",
      "FMCG major — digital and AI supply chain transformation; measured efficiency velocity up ~300%.",
    ],
    statutory:
      "Advisory aligned with global governance norms and relevant industry statutes. Outcomes depend on execution fidelity; we do not indemnify macro shocks or failures arising from deviation from the agreed transformation roadmap.",
    subPages: [
      {
        id: "darwinism-framework",
        label: "The Corporate Darwinism Framework™",
      },
      {
        id: "latency-diagnostic",
        label: "Operational Latency Diagnostic",
      },
    ],
  },
];

export default function LevelThreeCAG() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Level 3 · Corporate Advisory Group (CAG)
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Corporate Advisory Group
          </h1>
          <p className="max-w-3xl text-sm md:text-base text-slate-600">
            Strategic advisory, deal-making and transformation — the CAG stack
            for inorganic growth, exits, deal validation and corporate
            engineering.
          </p>
        </header>

        {/* Cards */}
        <div className="space-y-8">
          {cagSections.map((sec) => (
            <section
              key={sec.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-start">
                {/* Left main text */}
                <div className="flex-1 space-y-3 md:space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    {sec.sourceService} · {sec.websiteName}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif text-neutral-900">
                    {sec.title}
                  </h2>
                  <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                    {sec.intro}
                  </p>

                  {/* Sub-pages */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sec.subPages.map((sp) => (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => setActiveSection(sec)}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs md:text-[13px] font-medium text-slate-700 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 transition"
                      >
                        {sp.label}
                      </button>
                    ))}
                  </div>

                  {/* Short bullet flavour */}
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {sec.narrative.slice(0, 3).map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-orange-500" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View full detail button */}
                  <button
                    type="button"
                    onClick={() => setActiveSection(sec)}
                    className="mt-4 inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    View full mandate detail
                    <span className="ml-1 text-base">↗</span>
                  </button>
                </div>

                {/* Right meta */}
                <aside className="w-full md:w-72 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 space-y-4 text-sm">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                      Representative Mandates
                    </p>
                    <ul className="space-y-1.5 text-slate-700">
                      {sec.mandates.map((m) => (
                        <li key={m}>• {m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                      Proprietary Matrix
                    </p>
                    <p className="text-slate-700">{sec.matrixTitle}</p>
                  </div>
                </aside>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  {activeSection.sectionLabel}
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-serif text-neutral-900">
                  {activeSection.title}
                </h2>
                <p className="mt-2 text-xs md:text-sm text-slate-500">
                  {activeSection.sourceService} · {activeSection.websiteName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveSection(null)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            {/* Modal body */}
            <div className="space-y-6 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              {/* Narrative */}
              <div className="space-y-3">
                {activeSection.narrative.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {/* Matrix */}
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {activeSection.matrixTitle}
                </h3>
                <p className="text-xs md:text-[13px] text-slate-500 mt-1">
                  {activeSection.matrixIntro}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {activeSection.matrixPhases.map((ph) => (
                    <li key={ph}>• {ph}</li>
                  ))}
                </ul>
              </div>

              {/* Mandates */}
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Representative Mandates
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {activeSection.mandates.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </div>

              {/* Statutory */}
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Statutory Adherence &amp; Risk Disclosure
                </h3>
                <p className="mt-2">{activeSection.statutory}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
