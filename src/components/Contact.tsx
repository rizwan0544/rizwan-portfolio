"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative w-full bg-soft-blue py-20 md:py-28 overflow-hidden">
      <span className="confetti text-2xl top-10 right-16">✦</span>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">
            Any Questions? Feel Free <br className="hidden md:block" /> to Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-primary p-8 space-y-6">
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-full bg-white/15 flex items-center justify-center">📍</span>
              <div>
                <h5 className="text-white font-bold text-sm">Location</h5>
                <p className="text-white/80 text-sm mt-1">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-full bg-white/15 flex items-center justify-center">✉️</span>
              <div>
                <h5 className="text-white font-bold text-sm">Email</h5>
                <a href={`mailto:${profile.email}`} className="text-white/80 text-sm mt-1 block hover:text-white">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-full bg-white/15 flex items-center justify-center">📞</span>
              <div>
                <h5 className="text-white font-bold text-sm">Phone</h5>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-white/80 text-sm mt-1 block hover:text-white">
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-full bg-white/15 flex items-center justify-center">🔗</span>
              <div>
                <h5 className="text-white font-bold text-sm">LinkedIn</h5>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 text-sm mt-1 block hover:text-white break-all"
                >
                  {profile.linkedinLabel}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white p-8 grid sm:grid-cols-2 gap-4">
            <input
              required
              className="rounded-xl border border-black/10 bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              className="rounded-xl border border-black/10 bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="sm:col-span-2 rounded-xl border border-black/10 bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              required
              rows={5}
              className="sm:col-span-2 rounded-xl border border-black/10 bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="sm:col-span-2 rounded-full bg-accent px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 hover:bg-accent-dark transition-colors justify-self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
