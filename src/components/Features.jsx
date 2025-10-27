import React from 'react';
import { Phone, Calendar, Database, Megaphone, Bot, Shield } from 'lucide-react';

const features = [
  {
    icon: <Phone className="h-6 w-6 text-indigo-400" />,
    title: 'Autonomous Voice Calling',
    desc: 'AI agents that call leads, qualify prospects, follow up, and route to humans when needed.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-sky-400" />,
    title: 'Appointment Booking',
    desc: 'Real-time calendar coordination with confirmation messages and rescheduling flows.'
  },
  {
    icon: <Database className="h-6 w-6 text-fuchsia-400" />,
    title: 'Records & CRM Sync',
    desc: 'Every interaction is logged with transcripts, outcomes, and synced to your CRM.'
  },
  {
    icon: <Megaphone className="h-6 w-6 text-orange-400" />,
    title: 'Sales Pitch Optimization',
    desc: 'Dynamic scripts tailored to customer intent and your brand tone for higher conversion.'
  },
  {
    icon: <Bot className="h-6 w-6 text-emerald-400" />,
    title: 'Multi‑Channel Automation',
    desc: 'Voice, SMS, and email follow-ups work together for a cohesive automated funnel.'
  },
  {
    icon: <Shield className="h-6 w-6 text-rose-400" />,
    title: 'Secure & Compliant',
    desc: 'Data encryption, audit logs, and privacy controls keep you covered.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.18),_transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Everything your AI team needs</h2>
          <p className="mt-3 text-slate-300">Plug-and-play AI systems to automate your customer engagement, scheduling, and records — all in one place.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.2),_transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
