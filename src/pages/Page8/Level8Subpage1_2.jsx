// src/pages/Level8Subpage1_2.jsx
import React from "react";

export default function Level8Subpage1_2() {
  const clusters = [
    {
      name: "Psychographic Profiling",
      points: [
        "Defining consumer archetypes based on values, aspirations and risk appetite.",
        "Mapping attitudes towards price, brand, convenience and innovation.",
      ],
    },
    {
      name: "Behavioral Analytics",
      points: [
        "Studying journey data, conversion funnels and repeat behavior.",
        "Identifying triggers, friction points and abandonment patterns.",
      ],
    },
    {
      name: "Neuro-Linguistic Triggers",
      points: [
        "Testing messaging, positioning and visual cues for response intensity.",
        "Linking communication styles to purchase intent uplift.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-violet-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Level 8 · Subpage 1-2
          </p>
          <h1 className="text-3xl md:text-4xl font-serif">
            Consumer Psychographics &amp; Behavior
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Decoding the hidden motivations, preferences and triggers that drive
            demand.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          {/* Narrative card */}
          <div className="rounded-3xl bg-white/95 border border-slate-200 shadow-md p-7 md:p-8 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              PSYCHOGRAPHIC INTELLIGENCE
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              <p>
                We move beyond basic demographics into the mental architecture
                of your customer base — beliefs, fears, aspirations and
                subconscious biases that steer decisions.
              </p>
              <p>
                By combining survey data, digital behavior and transactional
                history, we construct rich psychographic maps that explain
                <span className="font-semibold"> why</span> customers behave the
                way they do, not just{" "}
                <span className="font-semibold">what</span> they buy.
              </p>
              <p>
                These insights feed into product design, pricing, brand
                language, channel strategy and loyalty programs — ensuring that
                every interaction is engineered for resonance.
              </p>
            </div>
          </div>

          {/* Cluster cards */}
          <div className="space-y-4">
            {clusters.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl bg-violet-50 border border-violet-100 shadow-sm p-5"
              >
                <h3 className="text-xs md:text-sm font-semibold text-violet-900 tracking-wide">
                  {c.name}
                </h3>
                <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-700">
                  {c.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
