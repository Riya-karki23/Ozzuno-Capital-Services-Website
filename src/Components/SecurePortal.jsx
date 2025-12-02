// src/components/SecurePortal.jsx
import React, { useState } from "react";

export default function SecurePortal() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setMessage("");

    try {
      const formData = new FormData(e.target);

      // Web3Forms essentials
      formData.append("access_key", "ccf669d2-14ad-4433-8320-db330e106ab8");
      formData.append(
        "subject",
        "New Level 3 Whitepaper Access Request · Ozzuno Gated Intelligence"
      );
      formData.append("from_name", "Ozzuno Capital · Intelligence Desk");
      formData.append("redirect", ""); // no redirect – we handle in React

      // Extra meta (optional but useful in email)
      formData.append("portal_source", "Whitepapers Secure Download Portal");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setMessage(
          "Secure transfer protocol initialised. Our Intelligence Desk will validate your credentials before releasing dossiers."
        );
        e.target.reset();
      } else {
        console.error(json);
        setStatus("error");
        setMessage(
          "Transmission failed. If you believe you qualify for access, please try again or contact the Intelligence Desk."
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(
        "A network anomaly occurred while transmitting your credentials. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="secure-portal"
      className="mt-20 rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-900/70 via-black to-slate-900/90 p-8 md:p-10 shadow-[0_0_60px_rgba(248,113,113,0.25)]"
    >
      <p className="text-[11px] uppercase tracking-[0.32em] text-red-300 mb-3">
        Secure Download Portal
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-4">
        Level 3 Proprietary Intelligence · Access Restricted
      </h2>

      <p className="text-sm text-slate-200 mb-4">
        The intelligence contained in these dossiers is classified as{" "}
        <span className="font-semibold text-red-300">Level 3 Proprietary Data</span>.
        Access is restricted to verified corporate entities and accredited investors.
      </p>

      <p className="text-xs text-slate-400 mb-6">
        By requesting these documents, you consent to a{" "}
        <span className="text-slate-200 font-medium">
          forensic background check of your corporate standing
        </span>
        . Ozzuno Capital reserves the right to deny access to entities that do not
        meet our Strategic Relevance Criteria.
      </p>

      {/* Status banner */}
      {status && (
        <div
          className={`mb-5 rounded-lg border px-4 py-3 text-xs ${
            status === "success"
              ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-200"
              : "border-red-400/60 bg-red-500/10 text-red-200"
          }`}
        >
          {message}
        </div>
      )}

      <form
        className="grid gap-4 md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        {/* Corporate Identity */}
        <div className="md:col-span-1">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
            Corporate Identity (Company Name)
          </label>
          <input
            type="text"
            name="corporate_identity"
            required
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-red-400"
            placeholder="e.g. Ozzuno Capital Services Pvt. Ltd."
          />
        </div>

        {/* Designation */}
        <div className="md:col-span-1">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
            Designation (C-Suite Only)
          </label>
          <input
            type="text"
            name="designation"
            required
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-red-400"
            placeholder="e.g. Group CFO, Managing Director"
          />
        </div>

        {/* Work Email */}
        <div className="md:col-span-1">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
            Official E-Communication Node (Work Email)
          </label>
          <input
            type="email"
            name="work_email"
            required
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-red-400"
            placeholder="name@corporate-domain.com"
          />
        </div>

        {/* Mobile */}
        <div className="md:col-span-1">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
            Direct Line (Mobile)
          </label>
          <input
            type="tel"
            name="mobile"
            required
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-red-400"
            placeholder="+91 ..."
          />
        </div>

        {/* AUM / Turnover */}
        <div className="md:col-span-2">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
            AUM / Turnover (Eligibility Check)
          </label>
          <select
            name="aum_band"
            required
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-red-400"
          >
            <option value="">Select band</option>
            <option value="<10cr">&lt; 10 Cr</option>
            <option value="10-100cr">10 – 100 Cr</option>
            <option value=">500cr">&gt; 500 Cr</option>
            <option value="sovereign">Sovereign / Supra-national</option>
          </select>
        </div>

        {/* Optional: Notes / Which division they're interested in */}
        <div className="md:col-span-2">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
            Area of Interest / Division
          </label>
          <textarea
            name="interest_area"
            rows={3}
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-red-400"
            placeholder="e.g. Division I – Capital Markets & IPO Engineering; Division III – Strategic Warfare (M&A & Exit)"
          />
        </div>

        <div className="md:col-span-2 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[11px] text-slate-500 max-w-xl">
            Submission of this form does not guarantee access. All requests are
            evaluated by the Ozzuno Capital Intelligence Desk.
          </p>

          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 via-rose-500 to-purple-600 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition ${
              submitting ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {submitting ? "Transmitting…" : "Initiate Secure Transfer"}
          </button>
        </div>
      </form>
    </section>
  );
}
