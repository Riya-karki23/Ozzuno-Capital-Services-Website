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
      "Text from IPO Advisory & Capital Markets Origination section.",
    image: img1,
  },
  {
    title: "Debt Syndication & Structured Finance",
    description:
      "Text from Debt Syndication, Capital Restructuring & Liquidity Engineering",
    image: img2,
  },
  {
    title: "M&A, Restructuring & Strategic Exits",
    description:
      "Text from Inorganic Growth Architecture + Strategic Divestiture & Exit Architecture",
    image: img3,
  },
  {
    title: "Private Capital, AIFs & Global Liquidity",
    description:
      "Combine Private Equity / AIF / Cross-Border Capital snippets",
    image: img4,
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
            <div className="w-full md:w-[420px] md:shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* TEXT + ARROW */}
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
