import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.16),_transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Mission</h2>
          <p className="mt-4 text-slate-300">At Nexora AI, we believe every business — big or small — deserves automation that feels human. Our mission is to bring affordable, intelligent, and scalable AI agents that empower teams and boost productivity.</p>
        </div>

        {/* Team grid placeholders */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square rounded-xl border border-white/10 bg-white/[0.04]" />
          ))}
        </div>
      </div>
    </section>
  );
}
