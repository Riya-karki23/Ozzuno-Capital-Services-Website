// src/components/CookieBanner.jsx
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
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
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
      {/* Card */}
      <div
        className="
          pointer-events-auto
          max-w-xl w-full
          rounded-2xl
          border border-white/15
          bg-slate-900/95
          text-white
          shadow-[0_18px_45px_rgba(0,0,0,0.55)]
          backdrop-blur-xl
          px-4 py-4 sm:px-6 sm:py-5
          flex flex-col sm:flex-row sm:items-center
          gap-3 sm:gap-4
        "
      >
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-white/10 shrink-0">
          <span className="text-lg">🍪</span>
        </div>

        {/* Text */}
        <div className="space-y-1 text-sm sm:text-[13px] leading-relaxed">
          <p className="font-medium text-slate-50">
            We use minimal cookies.
          </p>
          <p className="text-slate-300">
            We only store what&apos;s needed to remember your preferences. No
            personal tracking or profiling. See our{" "}
            <a
              href="/cookies"
              className="underline underline-offset-2 text-sky-300 hover:text-sky-200"
            >
              Cookie Policy
            </a>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex sm:flex-col gap-2 sm:ml-4 sm:items-stretch sm:self-stretch">
          <button
            onClick={handleReject}
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-slate-500/70
              bg-slate-900/60
              px-3.5 py-1.5
              text-xs sm:text-[11px]
              font-medium
              text-slate-100
              hover:bg-slate-800
              transition
              whitespace-nowrap
            "
          >
            Reject all
          </button>
          <button
            onClick={handleAccept}
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500
              px-3.5 py-1.5
              text-xs sm:text-[11px]
              font-semibold
              text-slate-950
              shadow-md shadow-cyan-500/30
              hover:brightness-110
              transition
              whitespace-nowrap
            "
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
