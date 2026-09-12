"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { colorAt } from "@/lib/colors";
import { services } from "@/lib/data";

export default function Services() {
  const [paused, setPaused] = useState(false);
  const loop = [...services, ...services];

  return (
    <section id="services" className="w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Services I Provide</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            End-to-end development and automation solutions for modern businesses.
          </h2>
        </Reveal>
      </div>

      <div
        className={`relative ${paused ? "marquee-paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        <div
          className="marquee-track flex w-max gap-6 px-6"
          style={{ ["--marquee-duration" as string]: "48s" }}
        >
          {loop.map((service, i) => (
            <div
              key={`${service.title}-${i}`}
              className="group w-72 sm:w-80 shrink-0 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              <span
                className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1 ${colorAt(i)}`}
              >
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
