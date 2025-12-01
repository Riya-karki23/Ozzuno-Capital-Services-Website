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
                {/* in values ko baad mein real numbers se replace kar dena */}
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
                  <Link to="/policy/termsOfEngagement" className="hover:text-sky-300 transition-colors">
                    TERMS OF ENGAGEMENT
                  </Link>
                </li>
                <li>
                   <Link to="/policy/dataSovereignty" className="hover:text-sky-300 transition-colors">
                     DATA SOVEREIGNTY
                  </Link>
                </li>
                <li>
                  <Link to="/policy/riskDisclosure" className="hover:text-sky-300 transition-colors">
                    RISK DISCLOSURE DOCUMENT (RDD) 
                  </Link>
                </li>
                <li>
                  <Link to="/policy/AMLCharter" className="hover:text-sky-300 transition-colors">
                    AML & CFT CHARTER 
                  </Link>
                </li>
                <li>
                  <Link to="/policy/VigilMechanism" className="hover:text-sky-300 transition-colors">
                   VIGIL MECHANISM & WHISTLEBLOWER POLICY
                  </Link>
                </li>
                <li>
                  <Link to="/policy/CookieProtocol" className="hover:text-sky-300 transition-colors">
                   DIGITAL SURVEILLANCE & COOKIE PROTOCOL 
                  </Link>
                </li>
                <li>
                  <Link to="/policy/LimitationOfLiability" className="hover:text-sky-300 transition-colors">
                   DISCLAIMER & LIMITATION OF LIABILITY 
                  </Link>
                </li>
                <li>
                  <Link to="/policy/IntellectualSovereignty" className="hover:text-sky-300 transition-colors">
                    IP SOVEREIGNTY
                  </Link>
                </li>
                <li>
                  <Link to="/policy/NonRefundMandate" className="hover:text-sky-300 transition-colors">
                    NO-REFUND MANDATE
                  </Link>
                </li>
                <li>
                  <Link to="/policy/ThirdPartyProtocol" className="hover:text-sky-300 transition-colors">
                    EXTERNAL LINKAGE & THIRD-PARTY ASSOCIATION PROTOCOL 
                  </Link>
                </li>
                 <li>
                  <Link to="/policy/DigitalConductDirective" className="hover:text-sky-300 transition-colors">
                     DIGITAL CONDUCT & PROHIBITED USAGE DIRECTIVE 
                  </Link>
                </li>
                 <li>
                  <Link to="/policy/EthicalSourcingManifesto" className="hover:text-sky-300 transition-colors">
                    MODERN SLAVERY & ETHICAL SOURCING MANIFESTO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 – Status + Brand */}
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
                  className="h-24 w-auto object-contain"
                />
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300">
                  A Sovereign Financial Entity
                </p>
              </div>

              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                BUSINESS ADDRESS: OFFICE NUMBER 1201 & 1301,  FLOOR  12TH AND 13TH KAMDHENU 23 WEST, KOPARKHAIRANE, NAVI MUMBAI 400708 MAHARASHTRA, INDIA
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Email: <span className="text-slate-200"> info@ozzuno.com</span>
                <br />
                Phone(India): <span className="text-slate-200"> 02246181327</span><br/>
                Phone(USA): <span className="text-slate-200"> +1 336 502 6793</span>
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
