import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold">Nexora AI</p>
          <p className="mt-1 text-sm">Agentic automation for voice, bookings, and records.</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
        <p className="text-sm">© 2025 Nexora AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
