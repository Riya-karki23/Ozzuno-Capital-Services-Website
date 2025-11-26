// src/pages/CaseStudies.jsx
import React from "react";

import img1 from "../assets/card1.avif";
import img2 from "../assets/card2.avif";
import img3 from "../assets/card3.avif";


const CASES = [
  {
    image: img1,
    title: "Solar Power Producer (IPP): External Commercial Borrowing",
    body: `We executed a $65 million ECB raise for an Independent Power Producer. The mandate included end-to-end lender mapping, FEMA compliance, LRN generation and secure repatriation of funds into India.`,
  },
  {
    image: img2,
    title: "Textile Exporter: International Factoring Facility",
    body: `Ozzuno structured a $20 million revolving international factoring line for a major textile exporter, unlocking instant liquidity and stabilizing working capital under global trade finance norms.`,
  },
  {
    image: img3,
    title: "IT Services Firm: US Market Expansion Growth Funding",
    body: `We secured $15 million of strategic growth capital for a technology client expanding into the United States, backed by a global strategic investor through our cross-border funding architecture.`,
  },
];



export default function CaseStudies() {
  return (
    <section className="bg-[#fbf1e6] py-16 md:py-20">
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
          {CASES.map((item) => (
            <article key={item.title} className="group flex flex-col">
              {/* Image */}
              <div className="w-full mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-[0.95rem] text-neutral-700 leading-relaxed mb-6">
                {item.body}
              </p>

              {/* Learn more */}
              <button
                type="button"
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-orange-500 transition-colors"
              >
                <span>Learn more</span>
                <span className="transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
