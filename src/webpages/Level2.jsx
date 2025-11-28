// src/pages/Capabilities.jsx
import React from "react";

import img1 from "../assets/card1.avif";
import img2 from "../assets/card2.avif";
import img3 from "../assets/card3.avif";

const items = [
  {
    title: "IPO Advisory & Capital Markets Origination",
    description:
      "End-to-end IPO and listing orchestration — from governance diagnostics and financial clean-up to DRHP drafting, book building and post-listing compliance.",
    image: img1,
    bullets: [
      "Public Markets Sovereignty Protocol™ — Phases 1–8 from readiness to post-listing regime",
      "Governance diagnostic, financial restatement (Ind AS / IFRS) and statutory clean-up",
      "DRHP drafting, SEBI / ROC engagement and regulatory dossier construction",
      "Anchor investor mapping, roadshow & book building, listing day and post-IPO reporting",
    ],
    href: "/capabilities/capital-markets",
    subLabel: " The Public Markets Sovereignty Protocol™",
  },
  {
    title: "Merchant Banking & Underwriting Operations",
    description:
      "Full-stack merchant banking desk for IPOs, QIPs, rights issues, open offers, buybacks and large public transactions under SEBI and SCRA regimes.",
    image: img2,
    bullets: [
      "Capital Governance Model™ — fundraising, issue management and large transactions",
      "Capital requirement analysis and instrument selection (IPO / QIP / Rights / Private)",
      "Regulatory feasibility, due diligence certificates and offer document filing",
      "Underwriting syndicate mobilisation, issue marketing, allotment & reconciliation",
    ],
    href: "/capabilities/merchant-banking",
    subLabel: " The Capital Governance Model™",
  },
  {
    title: "Debt Syndication & Structured Finance",
    description:
      "Sovereign-style treasury for hire — strategic debt procurement, distressed restructuring and covenant engineering to weaponise the liability side.",
    image: img3,
    bullets: [
      "Liability Optimization Architecture™ — credit enhancement, funding and restructuring",
      "Strategic debt procurement & interest-rate arbitrage across banks, NBFCs and funds",
      "Distressed debt restructuring / OTS, tenure re-engineering and cash-flow relief",
      "Covenant & term-sheet negotiation, DPR / CAM / model packs and sanction to disbursement",
    ],
    href: "/capabilities/debt-structured-finance",
    subLabel: " The Liability Optimization Architecture™",
  },
];

export default function Level2IBD() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-14 md:space-y-20">
        {/* LEVEL 2 HEADER */}
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Level 2 · Investment Banking Division (IBD)
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-neutral-900">
            Investment Banking Division
          </h2>
          <p className="max-w-3xl text-sm md:text-base text-neutral-600">
            The IBD stack for IPOs, capital market transactions and liability-side
            engineering — built to move private enterprises into sovereign-grade
            public market platforms.
          </p>
        </header>

        {items.map((item) => (
          <article
            key={item.title}
            className="
              group
              flex flex-col md:flex-row
              items-start md:items-center
              gap-6 md:gap-12
            "
          >
            {/* LEFT IMAGE */}
            <div className="w-full md:w-[420px] md:shrink-0 overflow-hidden rounded-2xl h-[260px] md:h-82">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
  />
</div>


            {/* TEXT + ARROW + CTA */}
            <div className="flex-1 w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-1">
                  {item.subLabel}
                </p>

                <h3
                  className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-serif font-semibold
                    text-neutral-900
                    transition-colors duration-200
                    group-hover:text-orange-500
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed md:leading-8 max-w-3xl">
                  {item.description}
                </p>

                <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
                  {item.bullets.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-orange-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                
              </div>

              {/* ARROW */}
              <div className="md:self-stretch flex items-center md:pr-6">
                <span className="text-4xl sm:text-5xl md:text-7xl text-orange-500 inline-block transition-transform duration-200 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
