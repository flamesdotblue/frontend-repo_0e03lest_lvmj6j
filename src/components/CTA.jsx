import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Nexora AI Demo Request');
    const body = encodeURIComponent(`Hi Nexora team,\n\nI would like a demo. My email is ${email}.\n\nThanks!`);
    window.location.href = `mailto:omprakash7463@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="cta" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.18),_transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Deploy your first AI agent in days, not months.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">Share your use case, and we’ll spin up a fully branded voice agent tailored to your business.</p>
        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <div className="flex items-center gap-2 px-3 text-slate-300">
            <Mail className="h-5 w-5" />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-12 w-full bg-transparent text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button type="submit" className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
