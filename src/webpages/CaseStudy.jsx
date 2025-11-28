// src/pages/CaseStudies.jsx
import React, { useState } from "react";

import img1 from "../assets/card1.avif";
import img2 from "../assets/card2.avif";
import img3 from "../assets/card3.avif";

const CASES = [
  {
    image: img1,
    title: "Solar Power Producer (IPP): External Commercial Borrowing",
    body: `We executed a $65 million ECB raise for an Independent Power Producer. The mandate included end-to-end lender mapping, FEMA compliance, LRN generation and secure repatriation of funds into India.`,
    details: [
      "Mandate: Structure and syndicate a USD-denominated External Commercial Borrowing (ECB) facility for long-term project finance.",
      "Challenge: Balance forex risk, regulatory timelines and lender appetite for a renewable IPP operating under PPAs.",
      "Solution: Designed a multi-tranche ECB structure benchmarked to SOFR, coordinated FEMA/RBI approvals and obtained LRN with full covenant alignment to project cash flows.",
      "Outcome: $65 million raised at a competitive blended cost of capital, fully repatriated into India with a ring-fenced repayment waterfall.",
    ],
  },
  {
    image: img2,
    title: "Textile Exporter: International Factoring Facility",
    body: `Ozzuno structured a $20 million revolving international factoring line for a major textile exporter, unlocking instant liquidity and stabilizing working capital under global trade finance norms.`,
    details: [
      "Mandate: Unlock working capital against export receivables without increasing on-balance-sheet leverage.",
      "Challenge: Long collection cycles from overseas buyers and seasonal order volatility creating cash flow gaps.",
      "Solution: Arranged a $20 million non-recourse international factoring facility with a global trade finance institution, backed by confirmed export invoices.",
      "Outcome: Instant liquidity on shipment, stabilized working capital cycle and improved ability to accept larger export orders.",
    ],
  },
  {
    image: img3,
    title: "IT Services Firm: US Market Expansion Growth Funding",
    body: `We secured $15 million of strategic growth capital for a technology client expanding into the United States, backed by a global strategic investor through our cross-border funding architecture.`,
    details: [
      "Mandate: Raise strategic growth capital to fund US market entry, onshore sales build-out and delivery capability.",
      "Challenge: Align investor thesis with a services-heavy business model and variable-margin project pipeline.",
      "Solution: Positioned the company as a platform play, structured a minority equity round with performance-linked milestones and governance upgrades for US clients.",
      "Outcome: $15 million raised from a global strategic investor, US GTM roadmap funded and revenue scale-up supported without loss of promoter control.",
    ],
  },
];

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#f7f6f4] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm text-neutral-600 mb-2">Case studies</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900">
            Real transactions. Real capital at work.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {CASES.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={item.title}
                className="group flex flex-col bg-white/60 rounded-2xl border border-orange-100/60 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="w-full mb-5 rounded-t-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Text */}
                <div className="px-4 pb-4 md:px-5 md:pb-5 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[0.95rem] text-neutral-700 leading-relaxed mb-4">
                    {item.body}
                  </p>

                  {/* Learn more toggle */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-orange-500 transition-colors"
                  >
                    <span>{isOpen ? "Hide details" : "Learn more"}</span>
                    <span
                      className={`transition-transform duration-150 ${
                        isOpen ? "translate-x-0 rotate-90" : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-orange-100 space-y-2">
                      <ul className="space-y-1.5 text-xs md:text-[0.9rem] text-neutral-800">
                        {item.details.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-[0.3rem] h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
