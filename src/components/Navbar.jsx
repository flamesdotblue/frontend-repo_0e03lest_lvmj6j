import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[92%] max-w-7xl rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 p-1 shadow">
              <Rocket className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg tracking-tight">Nexora AI</span>
          </a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#cta" className="hover:text-white">Get Started</a>
          </div>
          <div className="hidden md:block">
            <a href="#cta" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Book a Demo</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
