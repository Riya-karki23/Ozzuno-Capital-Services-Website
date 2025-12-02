// src/components/ContactPopup.jsx
import { useEffect, useState } from "react";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sirf first time auto-open (localStorage flag)
  useEffect(() => {
    const seen = localStorage.getItem("ozzunoContactSeen");
    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("ozzunoContactSeen", "yes");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    localStorage.setItem("ozzunoContactSeen", "yes");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        closePopup();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* FLOATING CONTACT ICON (BOTTOM-RIGHT, CHATBOT KE BAGAL ME) */}
      <button
        onClick={openPopup}
        className={`
          fixed 
          bottom-4 right-[4.8rem] 
          md:bottom-6 md:right-[5.3rem]
          z-40
          w-12 h-12
          rounded-full
          bg-slate-950/95
          border border-sky-400/70
          shadow-[0_10px_30px_rgba(0,0,0,0.55)]
          flex items-center justify-center
          text-sky-200
          transition-all duration-200
          hover:bg-sky-500/15 hover:border-sky-300 hover:text-sky-100
          ${
            open
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          }
        `}
        aria-label="Contact Ozzuno"
      >
        {/* inner blue gradient pill */}
        <div className="w-8 h-8 rounded-full hover:cursor-pointer bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 flex items-center justify-center text-[28px] shadow-[0_0_14px_rgba(56,189,248,0.8)]">
          ✉︎
        </div>
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 pointer-events-none">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/30 pointer-events-auto"
            onClick={closePopup}
          />

          {/* Card */}
          <div
            className="
              pointer-events-auto
              w-full max-w-md
              rounded-2xl
              border border-white/12
              bg-slate-950/95
              text-white
              shadow-[0_22px_60px_rgba(15,23,42,0.9)]
              backdrop-blur-2xl
              px-5 py-5 sm:px-6 sm:py-6
              relative
              overflow-hidden
            "
          >
            {/* top accent bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />

            {/* glows */}
            <div className="pointer-events-none absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

            {/* Close button */}
            <button
              type="button"
              onClick={closePopup}
              className="absolute  hover:cursor-pointer right-3 top-3 inline-flex h-9 w-9  items-center justify-center rounded-full bg-slate-900/80 text-slate-300 text-xs hover:bg-slate-800 hover:text-white border border-white/10 transition"
            >
              ✕
            </button>

            <div className="relative space-y-4">
              {/* Heading */}
              <div className="space-y-1 pr-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  Quick Contact
                </p>
                <h2 className="text-sm sm:text-[16px] font-semibold">
                  Share your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
                    mandate
                  </span>
                  .
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-3 text-xs" onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value="ccf669d2-14ad-4433-8320-db330e106ab8"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Ozzuno - New Contact Form Submission"
                />

                <div className="space-y-1">
                  <label className="block text-[11px] font-medium text-slate-200">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 transition"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-medium text-slate-200">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 transition"
                    placeholder="Fund / Family Office / Company"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-medium text-slate-200">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 transition resize-none"
                    placeholder="Short brief on your requirement."
                  />
                </div>

                <div className="flex items-center justify-between pt-1 gap-3">
                  <p className="text-[9px] text-slate-400 max-w-[60%]">
                    No spam. Your details stay private.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      inline-flex items-center justify-center
                      rounded-full
                      bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500
                      px-4 py-1.5
                      text-[11px] font-semibold
                      text-slate-950
                      shadow-md shadow-cyan-400/35
                      hover:brightness-110
                      transition
                      whitespace-nowrap
                      disabled:opacity-70 disabled:cursor-not-allowed
                    "
                  >
                    {submitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
