// src/pages/Home.jsx

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import bgVideo from "../assets/home-bgimg.mp4";
import bgImage from "../assets/bg-image.jpg";
import sideVideo from "../assets/left-video.mp4";
import  exploreBg from "../assets/explore-img.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      {/* <section className="section1 relative h-screen w-full overflow-hidden">
       
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

       <div className="section1-overlay absolute inset-0" />

        <div className="relative z-10 h-full flex items-end">
          <div className="w-full flex flex-col md:flex-row items-end px-6 md:px-16 pb-8 md:pb-12 gap-10 md:gap-16">
            <div className="md:w-1/2 max-w-2xl">
              <h1 className="section1-heading text-3xl md:text-4xl font-bold leading-snug text-white">
  A sovereign construct of market architecture,
  operating at the bleeding edge of Indian capital markets.
</h1>

            </div>

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
      </section> */}













    </div>
  );
}
