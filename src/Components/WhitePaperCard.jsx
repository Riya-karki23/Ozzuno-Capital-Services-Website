// src/components/WhitepaperCard.jsx
import React from "react";

export default function WhitepaperCard({ wp }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-emerald-400/70 transition-all duration-300">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-600/10 pointer-events-none transition-opacity duration-300" />

      <div className="relative flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300">
          {wp.code}
        </span>
        <span className="text-[10px] px-2 py-1 rounded-full border border-emerald-400/50 text-emerald-300/90 bg-black/40">
          Level 3 · Classified
        </span>
      </div>

      <h3 className="relative text-lg md:text-xl font-semibold text-slate-50 group-hover:text-white leading-snug">
        {wp.title}
      </h3>

      <p className="relative mt-3 text-sm text-slate-300 leading-relaxed line-clamp-4">
        {wp.summary}
      </p>

      {wp.audience && (
        <p className="relative mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Designed for:{" "}
          <span className="text-slate-200 normal-case tracking-normal text-xs">
            {wp.audience}
          </span>
        </p>
      )}

      <div className="relative mt-4 flex justify-between items-center">
        <span className="text-[10px] text-slate-500">
          Full dossier available on verified request.
        </span>
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("secure-portal");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-[11px] font-semibold tracking-wide uppercase border-b border-transparent group-hover:border-emerald-400 text-emerald-300"
        >
          Request Access
        </button>
      </div>
    </div>
  );
}
