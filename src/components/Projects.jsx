import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'MediLink Clinic',
    summary: 'Automated appointment scheduling & reminders for patient workflows.',
    tag: 'Healthcare',
  },
  {
    name: 'ShopEasy Retail',
    summary: 'AI receptionist and sales follow‑up to boost in‑store conversions.',
    tag: 'Retail',
  },
  {
    name: 'BrightCall Agency',
    summary: 'Voice AI for customer support with call summaries and ticketing.',
    tag: 'Support',
  },
  {
    name: 'FinCore Finance',
    summary: 'Automated data entry and record management with audit trails.',
    tag: 'Finance',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-12 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.18),_transparent_60%)] blur-2xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.18),_transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Trusted by Businesses</h2>
          <p className="mt-3 text-slate-300">See how we’ve automated operations for small and mid‑sized teams.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{p.tag}</span>
                <div className="size-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 opacity-80" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.summary}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
                See Case Study <ArrowRight className="h-4 w-4" />
              </button>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.2),_transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
