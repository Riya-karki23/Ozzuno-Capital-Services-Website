// src/pages/HomeHero.jsx
import React from "react";
import heroBg from "../assets/web-bg.jpg"; 
import logoImg from "../assets/logo-img.png";

export default function HomeHero() {
  return (
    <div>
    <section
  className="
    relative
    min-h-[50vh] md:min-h-[80vh]
    w-full
    flex items-center
    bg-cover bg-center bg-no-repeat
  "
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* soft white gradient so text readable */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

  {/* muted slanted strip at bottom */}
  <div
    className="
      absolute
      bottom-0 left-0
      h-32 md:h-40
      w-[20%] md:w-[53%]
      bg-[#9f9b99]
    "
    style={{
      clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
    }}
  />

  {/* content */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-0">
    <div className="max-w-xl space-y-4">
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-700">
        Ozzuno Capital · Capabilities
      </p>

      <p className="text-xl md:text-2xl font-semibold text-black">
        We unite expertise and tech
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-none text-black">
        so you can
      </h1>

      <p className="text-2xl md:text-3xl text-black mt-2">
        outthink, outpace and outperform
      </p>

      {/* supporting paragraph */}
      <p className="mt-4 text-sm md:text-base text-neutral-800 max-w-md">
        From capital markets and structured debt to private equity, AIFs and
        cross-border liquidity, Ozzuno operates as the cerebral cortex of your
        financial architecture—engineering outcomes, not just executing mandates.
      </p>

      <button className="mt-8 inline-flex items-center gap-4 bg-black text-white px-6 md:px-8 py-3 md:py-3.5 rounded-4xl text-base md:text-lg font-semibold tracking-wide">
        See how
        <span className="text-xl md:text-2xl leading-none">›</span>
      </button>

     
    </div>
  </div>
</section>


 <footer className="bg-[#050816] text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        {/* top row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-start md:items-center">
          {/* brand + tagline */}
          <div>
            
              <img
                src={logoImg}
                alt="logo"
                className="h-32 w-auto md:h-42"  // yahan size control karo
              />
            
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xs">
              Kamdhenu 23 West, 13th Floor, Office No 1301, Koparkhairane, Navi Mumbai, Maharashtra, India
            </p>
          </div>

          {/* links */}
          <div className="flex flex-wrap gap-8 text-sm md:text-base">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-200">Company</h3>
              <button className="block text-left hover:text-white">
                About
              </button>
              <button className="block text-left hover:text-white">
                Services
              </button>
              <button className="block text-left hover:text-white">
                Careers
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-200">Resources</h3>
              <button className="block text-left hover:text-white">
                Insights
              </button>
              <button className="block text-left hover:text-white">
                Case studies
              </button>
              <button className="block text-left hover:text-white">
                Support
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-200">Contact</h3>
              <p className="text-gray-400 text-sm">
                ankit@ozzuno.com
                <br />
                +91-9004951331
              </p>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs md:text-sm">
            <button className="hover:text-white">Privacy</button>
            <span className="h-3 w-px bg-gray-600" />
            <button className="hover:text-white">Terms</button>
          </div>
        </div>
      </div>
    </footer>
 
</div>

  );
}
