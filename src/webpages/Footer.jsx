// src/pages/HomeHero.jsx
import React from "react";
import logoImg from "../assets/logo-img.png";
import { Link } from "react-router-dom";

export default function HomeHero() {
  const year = new Date().getFullYear();

  return (
    <div>
      {/* GLOBAL FOOTER – THE ANCHOR */}
      <footer className="bg-[#050816] text-slate-200 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-8">
          {/* 4-column grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 – Identity */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Identity
              </p>
              <h4 className="mt-2 text-sm font-semibold">
                Regulatory &amp; Certification Grid
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                <li>CIN: U70200MH2025PTC457739</li>
                <li>REGISTERED NAME: OZZUNO ADVISORY SERVICES PRIVATE LIMITED</li>
                <li>PAN: AAECO8881E</li>
                <li>TAN: MUMO11398C</li>
                <li>GSTIN: AA271125191018A</li>
              </ul>
            </div>

            {/* Col 2 – Legal */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Legal
              </p>
              <h4 className="mt-2 text-sm font-semibold">
                Risk &amp; Performance Disclaimer
              </h4>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                Past performance is not indicative of future results. Investments
                are subject to market risks. Please read all offer documents and
                risk disclosure statements carefully before investing. Nothing on
                this website constitutes an offer or solicitation to the public.
              </p>
            </div>

            {/* Col 3 – Policies */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Policies
              </p>
              <h4 className="mt-2 text-sm font-semibold">
                Governance &amp; Data Framework
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                <li>
                  <Link to="/policy/termsOfEngagement" className="footer-link">
                    TERMS OF ENGAGEMENT
                  </Link>
                </li>
                <li>
                  <Link to="/policy/dataSovereignty" className="footer-link">
                    DATA SOVEREIGNTY
                  </Link>
                </li>
                <li>
                  <Link to="/policy/riskDisclosure" className="footer-link">
                    RISK DISCLOSURE DOCUMENT (RDD)
                  </Link>
                </li>
                <li>
                  <Link to="/policy/AMLCharter" className="footer-link">
                    AML & CFT CHARTER
                  </Link>
                </li>
                <li>
                  <Link to="/policy/VigilMechanism" className="footer-link">
                    VIGIL MECHANISM & WHISTLEBLOWER POLICY
                  </Link>
                </li>
                <li>
                  <Link to="/policy/CookieProtocol" className="footer-link">
                    DIGITAL SURVEILLANCE & COOKIE PROTOCOL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy/LimitationOfLiability"
                    className="footer-link"
                  >
                    DISCLAIMER & LIMITATION OF LIABILITY
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy/IntellectualSovereignty"
                    className="footer-link"
                  >
                    IP SOVEREIGNTY
                  </Link>
                </li>
                <li>
                  <Link to="/policy/NonRefundMandate" className="footer-link">
                    NO-REFUND MANDATE
                  </Link>
                </li>
                <li>
                  <Link to="/policy/ThirdPartyProtocol" className="footer-link">
                    EXTERNAL LINKAGE & THIRD-PARTY ASSOCIATION PROTOCOL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy/DigitalConductDirective"
                    className="footer-link"
                  >
                    DIGITAL CONDUCT & PROHIBITED USAGE DIRECTIVE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy/EthicalSourcingManifesto"
                    className="footer-link"
                  >
                    MODERN SLAVERY & ETHICAL SOURCING MANIFESTO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 – Brand + Compact Contact */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Status
              </p>
              <h4 className="mt-2 text-sm font-semibold">
                Ozzuno Advisory Services Pvt. Ltd.
              </h4>

              <div className="mt-3 flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="Ozzuno Capital"
                  className="h-16 w-auto object-contain"
                />
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300">
                  A Sovereign Financial Entity
                </p>
              </div>

              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                OFFICE 1201 &amp; 1301, 12TH &amp; 13TH FLOOR, KAMDHENU 23 WEST,
                KOPARKHAIRANE, NAVI MUMBAI 400708, MAHARASHTRA, INDIA
              </p>

              {/* General Contact */}
              <div className="mt-3 text-xs text-slate-300 space-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  General Contact
                </p>
                <p>
                  Phone: 022-4618-1327
                  <br />
                  Mobile: +91-750-625-8455
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@ozzuno.com"
                    className="text-slate-200 underline-offset-2 hover:underline"
                  >
                    info@ozzuno.com
                  </a>
                </p>
              </div>

              {/* Career / Media (compact row) */}
              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                <div>
                  <p className="uppercase tracking-[0.15em] text-slate-400">
                    Career
                  </p>
                  <p className="mt-1">
                    <a
                      href="mailto:careers@ozzuno.com"
                      className="text-slate-200 underline-offset-2 hover:underline"
                    >
                      careers@ozzuno.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.15em] text-slate-400">
                    Media
                  </p>
                  <p className="mt-1">
                    <a
                      href="mailto:marketing@ozzuno.com"
                      className="text-slate-200 underline-offset-2 hover:underline"
                    >
                      marketing@ozzuno.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Regulatory Offices (shortened) */}
              <div className="mt-3 text-[11px] text-slate-400 space-y-1">
                <p className="uppercase tracking-[0.15em]">Regulatory Offices</p>
                <p>
                  <span className="text-slate-200 font-semibold">SEBI:</span>{" "}
                  Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra(East), Mumbai - 400051

                </p>
                <p>
                  <span className="text-slate-200 font-semibold">RBI:</span>{" "}
                  Central Office Building, Shahid Bhagat Singh Marg, Fort, Mumbai - 400001 

                </p>
              </div>
            </div>
          </div>

          {/* Regulatory strip – officers moved out of main grid for better alignment */}
          <div className="border-t border-white/10 pt-5 grid gap-6 md:grid-cols-2 text-[10px] md:text-[11px] text-slate-400">
            {/* Principal Officer */}
            <div>
              <p className="uppercase tracking-[0.18em]">
                Principal Officer
              </p>
              <p className="mt-1 leading-relaxed">
                Mr. Sundaram Kanje – Non-Individual Investment Advisor
                <br />
                Mr. Prakash – Non-Individual Investment Advisor (PMS)
                <br />
                Email:{" "}
                <a
                  href="mailto:principal.officer@ozzuno.com"
                  className="text-slate-200 underline-offset-2 hover:underline"
                >
                  principal.officer@ozzuno.com
                </a>
                <br />
                Contact No: 022-4618-1327
              </p>
            </div>

            {/* Compliance & Grievance Officer */}
            <div>
              <p className="uppercase tracking-[0.18em]">
                Compliance &amp; Grievance Officer
              </p>
              <p className="mt-1 leading-relaxed">
                Ms. Naina Pardeshi
                <br />
                Email (Compliance):{" "}
                <a
                  href="mailto:compliance@ozzuno.com"
                  className="text-slate-200 underline-offset-2 hover:underline"
                >
                  compliance@ozzuno.com
                </a>
                <br />
                Email (Investor Grievance):{" "}
                <a
                  href="mailto:investor.grievance@ozzuno.com"
                  className="text-slate-200 underline-offset-2 hover:underline"
                >
                  investor.grievance@ozzuno.com
                </a>
                <br />
                Contact No: 022-4618-1327
              </p>
            </div>
          </div>

          {/* bottom bar */}
          <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] md:text-xs text-slate-500">
              © {year} Ozzuno Capital Services Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-[11px] md:text-xs text-slate-400">
              <span>Ozzuno Capital · Strategic Financial Architecture</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
