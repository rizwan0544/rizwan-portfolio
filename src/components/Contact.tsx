"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { profile, projectTypes } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: projectTypes[0], message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", projectType: projectTypes[0], message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Whether you need a custom web application, CRM system, business automation or AI
            integration, let&apos;s discuss your requirements.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-lg bg-white border border-border text-primary flex items-center justify-center">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-bold text-foreground text-sm">Email</h5>
                <a href={`mailto:${profile.email}`} className="text-muted text-sm hover:text-primary">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-lg bg-white border border-border text-primary flex items-center justify-center">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-bold text-foreground text-sm">Location</h5>
                <p className="text-muted text-sm">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 shrink-0 rounded-lg bg-white border border-border text-primary flex items-center justify-center">
                <Icon name="clock" className="h-5 w-5" />
              </span>
              <div>
                <h5 className="font-bold text-foreground text-sm">Availability</h5>
                <p className="text-muted text-sm">{profile.availability}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white rounded-2xl border border-border p-8 grid sm:grid-cols-2 gap-4">
            <input
              required
              className="rounded-xl border border-border bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              className="rounded-xl border border-border bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <select
              className="sm:col-span-2 rounded-xl border border-border bg-soft px-4 py-3 text-sm outline-none focus:border-primary text-foreground/80"
              value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <textarea
              required
              rows={5}
              className="sm:col-span-2 rounded-xl border border-border bg-soft px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="sm:col-span-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors justify-self-start disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="sm:col-span-2 text-sm text-primary font-semibold">
                Thanks! Your message has been sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="sm:col-span-2 text-sm text-red-600 font-semibold">
                Something went wrong. Please try again or email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
