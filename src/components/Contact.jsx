import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [showThanks, setShowThanks] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Nexora AI Contact Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:omprakash7463@gmail.com?subject=${subject}&body=${body}`;
    setShowThanks(true);
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.16),_transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s Talk About Your Automation Needs</h2>
          <p className="mt-3 text-slate-300">Tell us about your goals and we’ll design an AI agent tailored to your workflow.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="name" value={form.name} onChange={onChange} required placeholder="Name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none" />
          <input name="email" value={form.email} onChange={onChange} required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none" />
          <input name="company" value={form.company} onChange={onChange} placeholder="Company Name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none sm:col-span-2" />
          <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Message" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none sm:col-span-2" />
          <div className="sm:col-span-2 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">Send Message</button>
          </div>
        </form>

        {showThanks && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" role="dialog" aria-modal="true">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 text-center">
              <h3 className="text-xl font-semibold text-white">Thank you!</h3>
              <p className="mt-2 text-slate-300">Your message has been prepared in your email app. We’ll get back to you shortly.</p>
              <button onClick={() => setShowThanks(false)} className="mt-6 rounded-lg bg-white px-4 py-2 font-semibold text-slate-900">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
