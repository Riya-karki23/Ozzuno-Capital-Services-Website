// src/pages/Home.jsx

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import bgVideo from "../assets/home-bgimg.mp4";
import logoImg from "../assets/logo-img.png"; // 🔹 logo import

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lines = [
    "Ozzuno Capital",
    "Asymmetric capital deployment.",
    "A full-stack financial fortress.",
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
    <>
      <div ref={container} className="w-full">
        {/* HERO SECTION */}
        <div className="relative w-full h-screen">
          {/* BG VIDEO */}
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* 🔹 LOGO ON TOP OF VIDEO */}
          <div className="absolute top-0 left-38 z-20">
            <img
              src={logoImg}
              alt="Ozzuno logo"
              className="h-20 w-auto md:h-48"
            />
          </div>

          {/* HERO TEXT */}
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

       
      </div>
    </>
  );
}
