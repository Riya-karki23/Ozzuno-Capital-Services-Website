// src/pages/Capabilities.jsx
import React from "react";

import img1 from "../assets/card1.avif";
import img2 from "../assets/card2.avif";
import img3 from "../assets/card3.avif";
import img4 from "../assets/card4.avif";

const items = [
  {
    title: "Capital Markets & IPOs",
    description:
      "IPO advisory, governance readiness, DRHP construction and full-stack listing orchestration.",
    image: img1,
    bullets: [
      "IPO Consulting & Listing Services",
      "IPO readiness & governance architecture",
      "DRHP drafting & regulatory engagement",
      "Post-IPO compliance & reporting regime",
    ],
    href: "/capabilities/capital-markets",
  },
  {
    title: "Debt Syndication & Structured Finance",
    description:
      "Strategic debt procurement, restructuring toxic leverage and liability optimization.",
    image: img2,
    bullets: [
      "Debt syndication & capital restructuring",
      "Interest rate arbitrage & covenant negotiation",
      "Lender & investor identification",
      "Liability Optimization Architecture™",
    ],
    href: "/capabilities/debt-structured-finance",
  },
  {
    title: "M&A, Restructuring & Strategic Exits",
    description:
      "Inorganic growth, divestitures and commercial diligence for high-stakes transactions.",
    image: img3,
    bullets: [
      "Mergers & acquisitions syndication",
      "Strategic divestiture & carve-outs",
      "Deal validation & commercial diligence",
      "Strategic corporate transformation",
    ],
    href: "/capabilities/ma-strategic-exits",
  },
  {
    title: "Private Capital, AIFs & Global Liquidity",
    description:
      "Private equity, AIF advisory, cross-border capital and unlisted/pre-IPO strategies.",
    image: img4,
    bullets: [
      "Institutional private equity syndication",
      "AIF structuring & advisory",
      "ECB, trade finance & global liquidity",
      "Unlisted & pre-IPO equity arbitrage",
    ],
    href: "/capabilities/private-capital-global-liquidity",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-14 md:space-y-20">
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
            <div className="w-full md:w-[420px] md:shrink-0 overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* TEXT + ARROW + CTA */}
            <div className="flex-1 w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1">
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
