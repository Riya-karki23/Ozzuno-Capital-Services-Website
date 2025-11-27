// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-slate-900 py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Page Header */}
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            About Ozzuno Capital
          </p>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              The Ozzuno Doctrine:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500">
                A Manifesto of Asymmetric Dominance
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Ozzuno Capital Services Pvt. Ltd. operates as a sovereign construct
              of market architecture, unifying capital markets, private capital,
              and risk architecture into a single strategic grid.
            </p>
          </div>

          {/* subtle divider */}
          <div className="h-px w-20 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full" />
        </section>

        {/* Doctrine */}
        <section
          className="
            space-y-4 text-sm md:text-base leading-relaxed text-slate-800
            bg-white/80 rounded-2xl border border-slate-200
            shadow-sm px-6 md:px-8 py-6 md:py-7
            transition-all duration-300
            hover:shadow-md hover:-translate-y-1
          "
        >
          <p>
            Ozzuno Capital Services Pvt. Ltd. is not merely a financial
            intermediary; it is a Sovereign Construct of Market Architecture.
            Our existence is predicated on a singular, ruthless axiom: Capital
            flows not to the deserving, but to the commanded. We operate at the
            bleeding edge of the Indian capital markets, positioned
            strategically at the convergence of regulatory rigidity, financial
            engineering, and market aggression.
          </p>
          <p>
            Our institutional philosophy is built upon the concept of
            &quot;Asymmetric Capital Deployment&quot;—the unwavering belief that
            true economic value is extracted only when one possesses an
            informational, structural, and execution-based advantage over the
            counterparty. We do not seek to participate in the economy; we seek
            to engineer its outcomes through the rigorous application of
            forensic intellect and regulatory arbitrage.
          </p>
          <p>
            We function as the Cerebral Cortex of the Corporate Ecosystem. In
            an environment characterized by volatility, regulatory flux, and
            competitive saturation, Ozzuno stands as the immutable bedrock of
            order. Our mandate is to obliterate the friction between ambition
            and capitalization. Whether orchestrating the public listing of a
            conglomerate via our IPO Consulting &amp; Listing Services 1,
            restructuring toxic debt liabilities through Debt &amp; Financial
            Consulting 2, or navigating the opaque corridors of cross-border
            M&amp;A3, Ozzuno operates with the cold logic of an algorithm and
            the aggressive foresight of a market maker.
          </p>
          <p>
            We reject the service-provider paradigm; we embed ourselves into the
            operational DNA of our clients, transforming them from market
            participants into market leaders through Business Consulting
            Services 4 and Strategic Exit Services 5.
          </p>
        </section>

        {/* Board of Directors */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
              The Apex Council
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mt-1">
              Board of Directors
            </p>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-slate-800 max-w-3xl">
            Our governance structure is modeled on a Meritocratic Oligarchy. The
            Board does not merely oversee; it dictates the strategic vectors of
            the firm with absolute authority. The hierarchy is rigid, ensuring
            that decision-making velocity is maintained without compromising on
            fiduciary diligence.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div
              className="
                rounded-2xl border border-slate-200 bg-white p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <h3 className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                The Executive Chairman
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-800">
                The custodian of the firm&apos;s sovereign vision and the final
                arbiter on all capital allocation decisions. This office holds
                the veto power over any mandate that does not align with the
                firm’s risk-adjusted return thresholds.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                rounded-2xl border border-slate-200 bg-white p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <h3 className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                Director of Strategic Warfare
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-800">
                The architect of inorganic growth, responsible for the systemic
                absorption of market competitors and the execution of Strategic
                Exit Services 6. This role demands a synthesis of legal acumen
                and financial ruthlessness.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                rounded-2xl border border-slate-200 bg-white p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <h3 className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                Chief Risk Officer (CRO)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-800">
                The sentinel of the balance sheet, empowered with autonomous
                authority to audit and halt any transaction that exceeds the
                firm’s Enterprise Risk Management (ERM) parameters.
              </p>
            </div>
          </div>
        </section>

        {/* Chronology */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
              Chronology of Milestones
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mt-1">
              The Evolution of Hegemony
            </p>
          </div>

          <div className="space-y-5 text-sm md:text-base leading-relaxed text-slate-800">
            {/* Epoch I */}
            <div
              className="
                border-l-2 border-sky-400 pl-4
                relative
                transition-all duration-300
                hover:border-sky-500
              "
            >
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sky-400" />
              <h3 className="text-sm font-semibold text-sky-700">
                Epoch I — The Inception Phase
              </h3>
              <p className="mt-2">
                Establishment of the foundational regulatory licenses and the
                construction of the initial proprietary trading desk. This phase
                involved the rigorous acquisition of Merchant Banking
                capabilities 7 and the setting up of the Unlisted Securities
                framework 8.
              </p>
            </div>

            {/* Epoch II */}
            <div
              className="
                border-l-2 border-sky-400 pl-4
                relative
                transition-all duration-300
                hover:border-sky-500
              "
            >
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sky-400" />
              <h3 className="text-sm font-semibold text-sky-700">
                Epoch II — The Consolidation Phase
              </h3>
              <p className="mt-2">
                Aggregation of the first ₹1,000 Crores in Assets Under Advisory
                (AUA) and the operationalization of the Debt Syndication node 9.
                This era marked our transition from a boutique firm to a
                systemic financial entity.
              </p>
            </div>

            {/* Epoch III */}
            <div
              className="
                border-l-2 border-sky-400 pl-4
                relative
                transition-all duration-300
                hover:border-sky-500
              "
            >
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sky-400" />
              <h3 className="text-sm font-semibold text-sky-700">
                Epoch III — The Expansion Phase
              </h3>
              <p className="mt-2">
                Activation of the Global Liquidity Bridge, establishing direct
                credit lines with offshore institutional lenders for ECB and
                Trade Finance 10. We successfully integrated AIF Advisory 11
                into our core service matrix.
              </p>
            </div>

            {/* Current Epoch */}
            <div
              className="
                border-l-2 border-emerald-400 pl-4
                relative
                transition-all duration-300
                hover:border-emerald-500
              "
            >
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-emerald-400" />
              <h3 className="text-sm font-semibold text-emerald-700">
                Current Epoch — Totalized Hegemony
              </h3>
              <p className="mt-2">
                The complete integration of consulting, capital markets, private
                equity, and risk architecture into a singular, monolithic
                service delivery grid. We now operate as a full-stack financial
                fortress.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
