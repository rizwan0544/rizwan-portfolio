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
    <section id="contact" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="section-title-eyebrow">Get In Touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent">
                {profile.email}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-muted hover:text-accent">
                {profile.phone}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Location</h3>
              <p className="text-muted">{profile.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">LinkedIn</h3>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                {profile.linkedinLabel}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <input
              required
              className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-accent"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-accent"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="sm:col-span-2 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-accent"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              required
              rows={5}
              className="sm:col-span-2 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-accent"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="sm:col-span-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light transition-colors justify-self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
