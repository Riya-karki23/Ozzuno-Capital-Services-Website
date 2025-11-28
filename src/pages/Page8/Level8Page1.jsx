// src/pages/Level8Page1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Level8Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-violet-50 text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <div className="pointer-events-none absolute inset-x-16 -top-10 h-52 rounded-full bg-violet-100/70 blur-3xl opacity-70" />

        {/* Header */}
        <header className="relative space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 8 · The Intelligence Directorate
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Market Intelligence &amp; Predictive Analytics
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Empirical market intelligence, data analytics and strategic
            foresight for high-stakes corporate decisions.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-2">
            Source Service: Research &amp; Analysis Services
          </p>
        </header>

        {/* Main narrative */}
        <section className="relative rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            1. EMPIRICAL MARKET INTELLIGENCE, DATA ANALYTICS &amp; STRATEGIC FORESIGHT
          </p>

          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              In the modern economy, data is the only currency that matters.
              Without it, a corporation is blind, navigating a minefield of
              volatility. Our Research &amp; Analysis Services division functions
              as your external intelligence agency, harvesting and synthesizing
              vast datasets to provide the empirical bedrock for high-stakes
              corporate decision-making. We do not guess; we measure.
            </p>
            <p>
              Our <span className="font-semibold">Market Research &amp; Segmentation</span>{" "}
              protocols involve deep-dive forensic analysis of industry
              verticals — dissecting supply chain dynamics, competitive
              saturation and emerging macroeconomic vectors to pinpoint where
              opportunity actually resides.
            </p>
            <p>
              We delve into the psychology of the market via{" "}
              <span className="font-semibold">Consumer Behavior Analysis</span>.
              Using psychographic profiling and behavioral economics, we decode
              the neuro-linguistic triggers that drive purchasing decisions,
              allowing you to anticipate what the market prefers before the
              market itself is aware.
            </p>
            <p>
              This is reinforced by{" "}
              <span className="font-semibold">
                Technology Research &amp; Trend Forecasting
              </span>
              . We monitor disruptive technology curves and industrial
              developments, ensuring your business model does not become
              collateral damage to an unseen innovation wave.
            </p>
            <p>
              Raw data is distilled into{" "}
              <span className="font-semibold">Strategic Insights</span>. We
              translate abstract numbers into battlefield-ready corporate
              strategy — guiding expansion, pricing, product and capital
              allocation with mathematical precision.
            </p>
            <p>
              Through integrated{" "}
              <span className="font-semibold">Analytics Solutions</span>, we
              embed business intelligence tooling into operational workflows so
              that governance becomes truly evidence-based. Every decision is
              validated by our algorithms.
            </p>
            <p>
              In essence, we provide the data-based insights critical for
              survival — helping companies understand granular market realities,
              hidden customer desires and the inevitable trends that define the
              future.
            </p>
          </div>
        </section>

        {/* Sub-page cards (2) */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            INTELLIGENCE SUB-PAGES
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Empirical Intelligence Vector */}
            <Link
              to="/level8/subpage1-1"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-violet-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 8 · Subpage 1-1
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                The Empirical Intelligence Vector™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Matrix for data harvesting, analytics and strategic insight
                generation across markets and consumers.
              </p>
              <p className="mt-4 text-[11px] text-violet-700 group-hover:translate-x-1 transition-transform">
                View execution matrix →
              </p>
            </Link>

            {/* Consumer Psychographics */}
            <Link
              to="/level8/subpage1-2"
              className="group rounded-3xl bg-gradient-to-br from-white via-slate-50 to-violet-50 border border-slate-200 shadow-md p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Level 8 · Subpage 1-2
              </p>
              <h2 className="mt-2 text-sm md:text-lg font-semibold">
                Consumer Psychographics &amp; Behavior
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Psychographic segmentation and behavior modeling to decode the
                hidden triggers behind demand.
              </p>
              <p className="mt-4 text-[11px] text-slate-700 group-hover:translate-x-1 transition-transform">
                Open consumer layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Research Vault */}
        <section className="relative space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            THE RESEARCH VAULT
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Macro-Economic Outlooks",
                desc: "Top-down views on growth, inflation, rates and liquidity cycles.",
              },
              {
                title: "Sectoral Whitepapers",
                desc: "Deep-dive theses on industries, value pools and disruption vectors.",
              },
              {
                title: "Regulatory Gazettes",
                desc: "Curated regulatory updates with impact mapping for businesses.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/95 border border-slate-200 shadow-md p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <h3 className="text-sm md:text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-3 py-2 text-[11px] font-medium bg-violet-600 text-white shadow-sm group-hover:bg-violet-700 transition-colors"
                >
                  Download dossier →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Statutory */}
        <section className="relative rounded-3xl bg-violet-50 border border-violet-100 shadow-md p-7 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-violet-900">
            STATUTORY ADHERENCE &amp; RISK DISCLOSURE
          </p>
          <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
            <p>
              <span className="font-semibold">Regulatory Mandate:</span>{" "}
              Research reports are prepared in the spirit of SEBI (Research
              Analysts) Regulations, 2014.
            </p>
            <p>
              <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
              Intelligence outputs are intended for institutional strategic
              planning and do not constitute retail investment advice unless
              explicitly stated. Data integrity is maintained via ISO 27001
              standards, but third-party data sources may carry inherent
              inaccuracies.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
