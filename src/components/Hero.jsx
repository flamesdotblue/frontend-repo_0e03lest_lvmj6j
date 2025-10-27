import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background accent gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute left-20 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.2),_transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 md:grid-cols-2 md:gap-6 md:pt-28">
        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            Next‑gen Autonomous AI for Business
          </div>
          <h1 className="mt-5 font-[800] leading-tight tracking-tight text-white" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
            <span className="text-4xl sm:text-5xl md:text-6xl">Nexora AI</span>
            <br />
            <span className="text-3xl text-slate-300 sm:text-4xl md:text-5xl">Agentic automation that sells, books, and supports — 24/7</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Launch your own AI voice agents that call leads, book appointments, maintain records, and deliver persuasive sales pitches — fully autonomous and on brand.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]">
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore Features
            </a>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative z-0 aspect-[4/3] w-full md:aspect-square">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-black/20 backdrop-blur">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
