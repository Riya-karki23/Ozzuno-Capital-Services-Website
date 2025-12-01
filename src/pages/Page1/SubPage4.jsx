// src/pages/FirmGlobalNodes.jsx
import React from "react";

export default function FirmGlobalNodes() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Top meta */}
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 1 · The Firm
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Global Strategic Nodes
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Map of domestic and international operations, structured as
            liquidity, intelligence, and execution nodes across jurisdictions.
          </p>
        </header>

        {/* Map / visual placeholder */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                OPERATING GRID
              </p>
              <h2 className="text-xl md:text-2xl font-semibold">
                Sovereign Operating Topology
              </h2>
              <p className="text-sm text-slate-600">
                Ozzuno&apos;s presence is not defined by offices, but by
                strategic nodes—each calibrated for capital deployment,
                regulatory navigation, and information extraction. Domestic and
                offshore locations are wired into a single, integrated decision
                engine.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>Domestic core for regulatory command and origination.</li>
                <li>Offshore nodes for liquidity, leverage, and structuring.</li>
                <li>Distributed research cells for informational asymmetry.</li>
              </ul>
            </div>

           
          </div>
        </section>

        {/* Node categories */}
        <section className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            NODE CATEGORIES
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                DOMESTIC CORE
              </p>
              <h3 className="mt-2 text-lg font-semibold">India · Primary Grid</h3>
              <p className="mt-2 text-sm text-slate-600">
                Headquarters and principal regulatory interface. Houses deal
                origination desks, Merchant Banking unit, and core balance sheet
                command.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                OFFSHORE LIQUIDITY BRIDGE
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Global Institutional Lines
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Connectivity to offshore lenders and funds powering ECB, trade
                finance, and structured credit mandates for Indian enterprises.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                INTELLIGENCE & RESEARCH NODES
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Sectoral Deep-Dive Cells
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Distributed analyst clusters generating proprietary sector
                theses, credit views, and M&amp;A screens that underpin capital
                deployment decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Optional table-style summary */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-9">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            NODE REGISTER · SNAPSHOT
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-4">Node Type</th>
                  <th className="py-2 pr-4">Jurisdiction</th>
                  <th className="py-2 pr-4">Primary Function</th>
                  <th className="py-2 pr-4">Mandate Examples</th>
                </tr>
              </thead>
              <tbody className="align-top text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium">Domestic Core</td>
                  <td className="py-3 pr-4">India</td>
                  <td className="py-3 pr-4">
                    Regulatory interface, origination, and execution.
                  </td>
                  <td className="py-3 pr-4">
                    IPO mandates, listed equity placements, domestic debt
                    syndication.
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium">Offshore Liquidity</td>
                  <td className="py-3 pr-4">
                    Select global financial centers
                  </td>
                  <td className="py-3 pr-4">
                    Credit lines, leverage, and structured products.
                  </td>
                  <td className="py-3 pr-4">
                    ECB facilities, trade finance programs, structured credit
                    for promoter financing.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    Intelligence Nodes
                  </td>
                  <td className="py-3 pr-4">Distributed / Hybrid</td>
                  <td className="py-3 pr-4">
                    Research, sector intelligence, and counterparty analysis.
                  </td>
                  <td className="py-3 pr-4">
                    Sectoral M&amp;A screens, credit heatmaps, risk early-warning
                    systems.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
