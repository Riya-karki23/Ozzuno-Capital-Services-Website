import React, { useEffect, useState, useRef } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [awaitingEmail, setAwaitingEmail] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi, I’m your assistant. Do you want to know about us, our services, or want us to contact you?",
      showSuggestions: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto open after page load
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const suggestions = [
    { label: "About Ozzuno", text: "Tell me about Ozzuno." },
    { label: "Our services", text: "What services do you offer?" },
    { label: "Contact us", text: "I want to contact you." },
  ];

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  const appendMessage = (text, sender = "bot", extra = {}) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender,
        text,
        ...extra,
      },
    ]);
  };

  const botReply = (userText) => {
    const t = userText.toLowerCase();

    // contact us flow
    if (
      t.includes("contact") ||
      t.includes("reach") ||
      t.includes("email you") ||
      t.includes("call me")
    ) {
      appendMessage(
        "Sure, please enter your email address and we’ll contact you soon.",
        "bot"
      );
      setAwaitingEmail(true);
      return;
    }

    if (t.includes("about") || t.includes("ozzuno")) {
      appendMessage(
        "Ozzuno Capital is positioned as a sovereign construct of market architecture, focused on asymmetric capital deployment across consulting, markets and private capital.",
        "bot"
      );
    } else if (t.includes("service")) {
      appendMessage(
        "We operate across three primary verticals: (1) Strategic advisory & investment banking, (2) Public & private capital markets execution, and (3) Private capital, special situations and structured products.",
        "bot"
      );
    } else if (t.includes("council") || t.includes("board")) {
      appendMessage(
        "The Apex Council is the governing layer handling capital allocation, risk architecture and strategic direction of the firm.",
        "bot"
      );
    } else if (t.includes("nodes") || t.includes("global")) {
      appendMessage(
        "Global nodes are our strategic operating points — combining deal origination, capital flows and intelligence networks across regions.",
        "bot"
      );
    } else {
      appendMessage(
        "I’ve noted your query. Broadly, Ozzuno operates as a full-stack financial fortress spanning advisory, markets and private capital.",
        "bot"
      );
    }
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    appendMessage(text, "user");
    setInput("");

    // if we are waiting for email, treat this message as email
    if (awaitingEmail) {
      const isEmail = /\S+@\S+\.\S+/.test(text);
      if (isEmail) {
        appendMessage(
          `Thank you. We’ll contact you soon at ${text}.`,
          "bot"
        );
      } else {
        appendMessage(
          "This doesn’t look like a valid email. Please enter a valid email address (e.g. name@example.com).",
          "bot"
        );
        return;
      }
      setAwaitingEmail(false);
      return;
    }

    setTimeout(() => botReply(text), 500);
  };

  const handleSuggestionClick = (text) => {
    appendMessage(text, "user");
    setTimeout(() => botReply(text), 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* MAIN CHAT PANEL */}
      <div
        className={`
          fixed right-4 md:right-6 bottom-0 z-50
          w-[360px] max-w-[95vw] h-[440px]
          bg-slate-950/95 text-slate-100 rounded-t-3xl
          border border-slate-800/80 shadow-[0_20px_70px_rgba(15,23,42,0.85)]
          flex flex-col backdrop-blur-xl
          transition-all duration-200 origin-bottom
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
              : "opacity-0 translate-y-4 pointer-events-none scale-95"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-sm font-bold shadow-lg">
                Ω
              </div>
              {/* online dot */}
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-slate-950 shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide">
                Ozzuno Assistant
              </span>
              <span className="text-[10px] text-slate-400">
                Chat with us anytime!
              </span>
            </div>
          </div>
          <button
            onClick={closeChat}
            className="text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-full w-7 h-7 flex items-center justify-center text-base"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div
          className="
            flex-1 px-3 py-3 space-y-2
            overflow-y-auto no-scrollbar
            bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
          "
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`max-w-[80%] text-[11px] leading-relaxed px-3 py-2.5 rounded-2xl
                ${
                  m.sender === "bot"
                    ? "bg-slate-900/90 border border-slate-700/80 text-slate-100 self-start"
                    : "bg-gradient-to-r from-sky-500 to-emerald-500 text-white self-end rounded-br-md ml-auto shadow-md"
                }
              `}
            >
              <div>{m.text}</div>

              {m.sender === "bot" && m.showSuggestions && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {suggestions.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleSuggestionClick(s.text)}
                      className="text-[10px] border border-slate-600/70 rounded-full px-2.5 py-1 bg-slate-900/80 text-slate-100 hover:bg-sky-600/80 hover:border-sky-500 transition-colors"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-3 py-2.5 border-t border-slate-800 bg-slate-950">
          {awaitingEmail && (
            <p className="text-[10px] text-slate-400 px-1 mb-1">
              Enter your email address below. We&apos;ll reach out to you soon.
            </p>
          )}
          <div className="flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-full px-2 py-1.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                awaitingEmail ? "Enter your email address..." : "Type a message..."
              }
              className="flex-1 text-xs px-2 py-1.5 bg-transparent border-none text-slate-100 placeholder:text-slate-500 outline-none focus:ring-0"
            />
            <button
              onClick={handleSend}
              className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white hover:brightness-110 whitespace-nowrap"
            >
              Send →
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING ICON (when closed) */}
      <button
        onClick={openChat}
        className={`
          fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40
          w-14 h-14 rounded-full
          bg-gradient-to-br from-emerald-400 to-sky-500
          shadow-[0_12px_35px_rgba(0,0,0,0.45)]
          flex items-center justify-center text-2xl text-white
          transition-all duration-200
          ${
            isOpen
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          }
        `}
        aria-label="Open chat"
      >
        <span className="animate-pulse text-[22px]">💬</span>
      </button>
    </>
  );
}
