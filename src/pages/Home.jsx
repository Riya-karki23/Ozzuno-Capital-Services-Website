// src/pages/Home.jsx

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import bgVideo from "../assets/home-bgimg.mp4";
import bgImage from "../assets/bg-image.jpg";
import sideVideo from "../assets/left-video.mp4";
import  exploreBg from "../assets/explore-img.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from "./Cards";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
const lines = [
  "Ozzuno Capital",
  "Asymmetric capital deployment.",
  "A full-stack financial fortress."
];




  const [visibleLines, setVisibleLines] = useState([]);
  const container = useRef(null);

  // HERO TEXT REVEAL
  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, i * 900);
    });
  }, []);

  // SCROLL ANIMATIONS
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // full overlay bg image → peach
      gsap.fromTo(
        ".section1-overlay",
        { backgroundColor: "rgba(0,0,0,0)" },
        {
          backgroundColor: "#fed7c2",
          scrollTrigger: {
            trigger: ".section1",
            start: "top 20%", 
            end: "top 30%",
            scrub: true,
          },
        }
      );

      gsap.to(".section1-heading", {
        color: "#4b2c26",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });

      // right side $7 tn block appear from bottom
      gsap.from(".section1-stat", {
        opacity: 0,
        y: 80,
        scrollTrigger: {
          trigger: ".section1",
          start: "top 75%",
          end: "top 45%",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="w-full">
      {/* HERO SECTION */}
      <div className="relative  w-full  h-[calc(100vh-72px)] mt-[72px]">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6">
          {lines.map((text, index) => (
            <h1
              key={index}
              className={`text-white font-semibold 
                ${index === 1 ? "text-5xl" : "text-4xl"}
                mb-4 transition-all duration-700
                ${
                  visibleLines.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              {text}
            </h1>
          ))}
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="section1 relative h-screen w-full overflow-hidden">
        {/* background image */}
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay jo scroll pe peach ho jaega */}
        <div className="section1-overlay absolute inset-0" />

        {/* bottom content row */}
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full flex flex-col md:flex-row items-end px-6 md:px-16 pb-8 md:pb-12 gap-10 md:gap-16">
            {/* LEFT TEXT – bilkul bottom pe */}
            <div className="md:w-1/2 max-w-2xl">
              <h1 className="section1-heading text-3xl md:text-4xl font-bold leading-snug text-white">
  A sovereign construct of market architecture,
  operating at the bleeding edge of Indian capital markets.
</h1>

            </div>

            {/* RIGHT $7 tn BLOCK */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="section1-stat text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-4">
                  <span className="text-[5rem] md:text-[3rem] font-bold leading-none text-[#f97316]">
                    ₹1,000
                  </span>
                  <span className="text-4xl md:text-4xl font-semibold leading-none text-[#f97316]">
                     Cr+
                  </span>
                </div>
                <p className="mt-4 text-lg md:text-md font-medium text-[#4b2c26]">
                  Assets under advisory and structured mandates<br />
  across IPOs, debt, M&A and private capital.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>



{/* SECTION 2 */}
      <section className="min-h-screen flex items-center bg-[#fdfaf6] text-neutral-900">
  {/* INNER CONTAINER (left/right white margin jaisa look) */}
  <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row gap-10 px-6 lg:px-10 py-16">

    {/* LEFT: VIDEO */}
    <div className="md:w-1/2 overflow-hidden">
      <div className="aspect-4/3 w-full overflow-hidden">
        <video
          src={sideVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT: CONTENT */}
    <div className="md:w-1/2 flex items-center">
      <div className="space-y-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
          The Firm · Ozzuno Doctrine
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Sovereign construct of market architecture
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-xl leading-relaxed">
          Ozzuno Capital is not a conventional intermediary; it functions as a
  sovereign construct of market architecture. We sit at the convergence of
  regulation, financial engineering and market aggression, deploying
  asymmetric capital so that our clients don’t just participate in the
  economy — they engineer its outcomes.
        </p>

        {/* BUTTON with HORIZONTAL orange hover */}
        <button
          type="button"
          className="
            relative inline-flex items-center gap-2
            px-8 py-3 rounded-md border border-neutral-900
            text-xs font-semibold tracking-[0.25em] uppercase
            overflow-hidden group
          "
        >
          {/* background layer – left to right fill */}
          <span
            className="
              absolute inset-0 bg-orange-500
              origin-left scale-x-0
              transition-transform duration-300 ease-out
              group-hover:scale-x-100
            "
          />

          {/* text + arrow above bg */}
          <span className="relative z-10">Learn more</span>
          <span
            className="
              relative z-10 text-base
              transition-transform duration-200 ease-out
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>
    </div>
  </div>
</section>


{/* SECTION 3*/}

 <section
  className="
    relative
    min-h-[60vh] md:min-h-[70vh]
    flex items-center
    overflow-hidden
  "
>
  {/* BLURRED BACKGROUND IMAGE + DARK OVERLAY */}
  <div className="absolute inset-0">
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${exploreBg})`,
        filter: "blur(3px)",          // 👈 blur
        transform: "scale(1.05)",     // edges hide karne ke liye
      }}
    />
    <div className="absolute inset-0 bg-black/45" /> {/* 👈 thoda black tint */}
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12">
    <h2 className="
        text-left
        text-2xl md:text-5xl lg:text-6xl
        font-serif font-semibold
        leading-tight
        text-white
        max-w-3xl
      "
    >
       Explore how we create and protect corporate value
    </h2>
    <p className="mt-4 text-base md:text-lg text-neutral-100 max-w-2xl">
  From IPO origination and debt syndication to M&A, private equity, AIFs,
  cross-border liquidity and unlisted securities, Ozzuno operates as a
  full-stack financial fortress for the corporate ecosystem.
</p>

  </div>
</section>



<Cards/>



{/* SECTION 4*/}


   <section className="min-h-screen flex items-center bg-[#fdfaf6] text-neutral-900">
  {/* INNER CONTAINER (left/right white margin jaisa look) */}
  <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 lg:px-10 py-16">

    {/* LEFT: VIDEO */}
    <div className="md:w-1/2 flex items-right">
      <div className="space-y-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
          Representative Mandates
        </p>

        <h1 className="text-3xl md:text-3xl font-semibold leading-tight">
           Transaction history across sectors and capital structures
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-xl leading-relaxed">
           Our mandates span mainboard IPOs, debt restructuring, cross-border ECBs,
  private equity syndication and unlisted blocks. From specialty chemicals
  and infrastructure to healthcare, fintech and energy, we are embedded in
  the capital decisions that redefine balance sheets and market positions.
        </p>

        {/* BUTTON with HORIZONTAL orange hover */}
        <button
          type="button"
          className="
            relative inline-flex items-center gap-2
            px-8 py-3 rounded-md border border-neutral-900
            text-xs font-semibold tracking-[0.25em] uppercase
            overflow-hidden group
          "
        >
          {/* background layer – left to right fill */}
          <span
            className="
              absolute inset-0 bg-orange-500
              origin-left scale-x-0
              transition-transform duration-300 ease-out
              group-hover:scale-x-100
            "
          />

          {/* text + arrow above bg */}
          <span className="relative z-10">Learn more</span>
          <span
            className="
              relative z-10 text-base
              transition-transform duration-200 ease-out
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>
    </div>

    {/* RIGHT: CONTENT */}
    

     <div className="md:w-1/2 overflow-hidden">
      <div className="aspect-4/3 w-full overflow-hidden">
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>




    </div>
  );
}
