// src/pages/HomeHero.jsx
import React from "react";
import heroBg from "../assets/web-bg.jpg";
import logoImg from "../assets/logo-img.png";

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
                <li>CIN: UXXXX0MH20XXPTC0XXXX</li>
                <li>SEBI Reg. (Cat-I Merchant Banker): INM0000XXXX</li>
                <li>SEBI Reg. (Research Analyst): INH0000XXXX</li>
                <li>ISO 27001:2013 – Information Security</li>
                <li>ISO 9001:2015 – Quality Management</li>
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
                  <a href="#" className="hover:text-sky-300 transition-colors">
                    Privacy Policy (DPDP Act Compliant)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-300 transition-colors">
                    Whistleblower Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-300 transition-colors">
                    KYC &amp; AML Norms
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 – Status + Brand */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Status
              </p>
              <h4 className="mt-2 text-sm font-semibold">
                Ozzuno Capital Services Pvt. Ltd.
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
                Kamdhenu 23 West, 13th Floor, Office No 1301, Koparkhairane,
                Navi Mumbai, Maharashtra, India
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Email: <span className="text-slate-200">ankit@ozzuno.com</span>
                <br />
                Phone: <span className="text-slate-200">+91-9004951331</span>
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
