// src/components/CookieBanner.jsx
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // 1500ms = 1.5 second delay, chahe to 2000 kar sakti ho
      const timer = setTimeout(() => {
        setVisible(true);
      },3000);

      // cleanup
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-3 sm:px-6 sm:pb-6 pointer-events-none">
      <div
        className="
          pointer-events-auto
          w-full max-w-3xl
          rounded-3xl
          border border-white/12
          bg-slate-950/95
          text-white
          shadow-[0_18px_55px_rgba(15,23,42,0.95)]
          backdrop-blur-2xl
          px-4 py-4 sm:px-6 sm:py-5
          relative
          overflow-hidden
        "
      >
        {/* top accent bar */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />

        {/* subtle gradient wash */}
        <div className="pointer-events-none absolute -right-10 -bottom-16 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {/* Icon + heading */}
          <div className="flex gap-3 items-start sm:items-center w-full sm:w-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 shrink-0">
              <span className="text-lg">🍪</span>
            </div>
            <div className="space-y-1 text-sm sm:text-[13px] leading-relaxed">
              <p className="font-semibold text-slate-50 tracking-tight">
                Your privacy, with minimal storage.
              </p>
              <p className="text-slate-300">
                We only remember basic preferences on this device. No ads, no
                cross-site tracking, and no selling of your data.
              </p>
              <p className="text-[11px] text-slate-500">
                Your choice will be saved locally so we don&apos;t ask you again.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-col gap-2 sm:ml-4 sm:min-w-[150px] sm:items-stretch sm:self-stretch">
            <button
              onClick={handleAccept} // ✅ Accept All = accepted
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-slate-600/80
                bg-slate-950/70
                px-4 py-1.5
                text-xs sm:text-[11px]
                font-medium
                text-slate-100
                hover:bg-slate-900
                hover:border-slate-400
                transition
                whitespace-nowrap
                hover:cursor-pointer
              "
            >
              Accept All
            </button>
            <button
              onClick={handleReject} // ✅ Reject All = rejected
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500
                px-4 py-1.5
                text-xs sm:text-[11px]
                font-semibold
                text-slate-950
                shadow-md shadow-cyan-400/35
                hover:brightness-110
                transition
                whitespace-nowrap
                hover:cursor-pointer
              "
            >
              Reject All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
