// src/pages/CagTransformation.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CagTransformation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 3 · Corporate Advisory Group
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Strategic Corporate Transformation
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Business engineering, digital transformation, and operational
            re-architecture for survival and dominance.
          </p>
          <p className="text-[11px] text-slate-500 uppercase tracking-[0.28em] mt-3">
            Source Service: Business Consulting Services
          </p>
        </header>

        <section className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            4. STRATEGIC CORPORATE TRANSFORMATION &amp; BUSINESS ENGINEERING
          </p>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              In an era of hyper-competition, passive management is a precursor
              to obsolescence. Our Business Consulting Services division
              intervenes in the operational core of the enterprise to enforce
              efficiency, scalability, and strategic dominance.
            </p>
            <p>
              We execute{" "}
              <span className="font-semibold">Macro-Strategic Realignment</span>
              , dissecting market position, identifying existential threats and
              asymmetric opportunities, and architecting a roadmap that sets the
              directional velocity of the organization.
            </p>
            <p>
              We drive{" "}
              <span className="font-semibold">
                Digital Transformation &amp; AI Integration
              </span>
              , replacing analog workflows with cybernetic operating models.
              Machine learning and predictive analytics are deployed to automate
              decisions and optimize resource allocation.
            </p>
            <p>
              Through{" "}
              <span className="font-semibold">
                Performance Improvement Protocols
              </span>
              , we conduct ruthless P&amp;L analysis, implementing cost
              rationalization and revenue maximization strategies to widen
              EBITDA margins.
            </p>
            <p>
              Our mandate includes{" "}
              <span className="font-semibold">
                Operational Process Re-engineering
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                Organizational Restructuring
              </span>
              : eliminating bottlenecks, redrawing hierarchies, and building
              agile, shock-resistant organizations.
            </p>
            <p>
              We deploy{" "}
              <span className="font-semibold">
                Change Management Architecture
              </span>{" "}
              to ensure human capital adapts to new systems and protocols, and
              enforce{" "}
              <span className="font-semibold">
                Sustainability &amp; ESG Compliance
              </span>{" "}
              not for optics, but for regulatory and long-term survivability.
            </p>
            <p>
              Finally, we prepare enterprises for{" "}
              <span className="font-semibold">
                M&amp;A and Private Equity Support
              </span>
              , ensuring they are structurally ready for capital injections or
              inorganic scale.
            </p>
          </div>
        </section>

        {/* Sub-pages */}
        <section className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            RELATED SUB-PAGES
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/cag/transformation/corporate-darwinism"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Proprietary Execution Matrix
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                The Corporate Darwinism Framework™
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Strategy, operations, digital, hierarchy, and ESG mapped into a
                single transformation stack.
              </p>
              <p className="mt-4 text-[11px] text-sky-600">
                Open framework →
              </p>
            </Link>

            <Link
              to="/cag/transformation/operational-latency"
              className="rounded-3xl bg-white shadow-md border border-slate-200 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Sub-Page
              </p>
              <h2 className="mt-2 text-lg md:text-xl font-semibold">
                Operational Latency Diagnostic
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Bottleneck and latency mapping across value chain and hierarchy.
              </p>
              <p className="mt-4 text-[11px] text-slate-700">
                Explore diagnostic layer →
              </p>
            </Link>
          </div>
        </section>

        {/* Mandates + risk */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              REPRESENTATIVE MANDATES
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="text-sm font-semibold">
                  Pan-India Logistics Fleet
                </h3>
                <p className="text-xs text-slate-500">
                  Operational Process Re-engineering
                </p>
                <p className="mt-1 text-xs">
                  Metric: ₹ 22 Crores/year cost rationalization · Status:
                  Implemented &amp; Audited
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Textile Manufacturing Group
                </h3>
                <p className="text-xs text-slate-500">
                  Corporate Turnaround &amp; Restructuring
                </p>
                <p className="mt-1 text-xs">
                  Revenue Base: ₹ 600 Crores · Status: EBITDA restored to +18%
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">FMCG Giant</h3>
                <p className="text-xs text-slate-500">
                  Digital Transformation &amp; AI Supply Chain Injection
                </p>
                <p className="mt-1 text-xs">
                  Scope: Nationwide distribution grid · Status: Efficiency +
                  300%
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-200 shadow-md p-7 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-600">
              STATUTORY ADHERENCE &amp; RISK DISCLOSURE
            </p>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-700">
              <p>
                <span className="font-semibold">Regulatory Mandate:</span>{" "}
                Advisory frameworks adhere to global corporate governance
                standards and sector-specific statutes.
              </p>
              <p>
                <span className="font-semibold">Fiduciary Disclaimer:</span>{" "}
                Projections assume ceteris paribus conditions. Outcomes depend
                on management execution; we do not indemnify against macro shocks
                or non-implementation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
