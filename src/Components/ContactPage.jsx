// src/pages/Contact.jsx
import { useState } from "react";

export default function ContactPage() {
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

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setMessage("Your mandate has been received. We’ll reach out shortly.");
        e.target.reset();
      } else {
        console.error(json);
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-50 flex items-start justify-center">
      <div className="w-full max-w-xl px-4 sm:px-6 pt-24 pb-12">
        {/* Heading */}
        <header className="mb-6">
         
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
             Contact with Ozzuno
          </h1>
         
        </header>

        {/* Card */}
        <div className="rounded-2xl border border-white/12 bg-slate-950/95 shadow-[0_18px_50px_rgba(15,23,42,0.9)] backdrop-blur-2xl px-5 py-5 sm:px-6 sm:py-6 relative overflow-hidden">
          {/* thin top line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />

          {/* subtle glow */}
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl" />

          <div className="relative space-y-4">
            {/* Status message */}
            {status && (
              <div
                className={`mb-2 rounded-lg border px-3 py-2 text-[11px] ${
                  status === "success"
                    ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-100"
                    : "border-red-400/70 bg-red-500/10 text-red-100"
                }`}
              >
                {message}
              </div>
            )}

            {/* Small title inside card */}
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Mandate intake
              </p>
              <h2 className="text-sm font-semibold">
                Share your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
                  brief
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
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-3 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 transition"
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
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-3 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 transition"
                  placeholder="Fund / Family Office / Company"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-200">
                  Mandate Summary <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={8}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 transition resize-none"
                  placeholder="Short, clear brief on your requirement."
                />
              </div>

              <div className="flex items-center justify-between pt-1 gap-3">
                <p className="text-[9px] text-slate-400 max-w-[60%]">
                  No spam. Your details route directly to the mandate desk.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500
                    px-5 py-1.5
                    text-[11px] font-semibold
                    text-slate-950
                    shadow-md shadow-cyan-400/35
                    hover:brightness-110
                    transition
                    whitespace-nowrap
                    disabled:opacity-70 disabled:cursor-not-allowed
                  "
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
