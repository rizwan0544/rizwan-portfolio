"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-foreground font-extrabold text-lg tracking-tight">
          Rizwan Akram
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
        >
          Let&apos;s Work Together
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Work Together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
