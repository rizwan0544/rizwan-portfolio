"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import { colorAt } from "@/lib/colors";
import { profile, heroTech, heroTechCard, heroHighlights } from "@/lib/data";

const floatingBadges = heroTechCard.slice(0, 4);
const badgePositions = [
  "top-[20%] -left-12",
  "top-[6%] right-2",
  "bottom-[30%] -right-14",
  "bottom-[4%] -left-16",
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-soft pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="section-eyebrow mb-4">{profile.role}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15]">
              Building Modern Web Solutions &amp; AI-Powered Automations
            </h1>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              I help businesses build scalable web applications, CRM systems, business platforms
              and AI-powered automations that simplify operations and improve productivity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.03 }}
                  className="rounded-full bg-white border border-border text-foreground/70 text-xs font-medium px-3 py-1.5"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="cta-glow rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-7 py-3 text-sm font-bold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>

          <div className="relative mx-auto md:mx-0 md:ml-auto w-full max-w-sm min-h-[460px]">
            <div className="absolute inset-8 rounded-full bg-primary/30 blur-3xl glow-pulse pointer-events-none" />

            <motion.div
              className="absolute -top-4 left-0 md:-left-4 z-20 rounded-2xl glass shadow-lg px-4 py-3 max-w-[190px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-bold text-foreground leading-snug">
                Turning Ideas into Digital Solutions
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-4/5 w-full rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="384px"
                className="object-cover object-left"
                priority
              />
            </motion.div>

            {floatingBadges.map((tech, i) => (
              <motion.div
                key={tech.name}
                className={`absolute hidden lg:flex z-20 items-center gap-1.5 rounded-xl glass shadow-md px-2.5 py-1.5 ${badgePositions[i]}`}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              >
                <span className={`h-5 w-5 shrink-0 rounded-md flex items-center justify-center ${colorAt(i)}`}>
                  <Icon name={tech.icon} className="h-3 w-3" />
                </span>
                <span className="text-[10px] font-semibold text-foreground/80 whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}

            <motion.div
              className="absolute bottom-6 -right-2 sm:-right-6 lg:-right-16 xl:-right-24 z-20 bg-white rounded-2xl shadow-xl border border-border p-4 w-48 sm:w-52"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <p className="text-xs font-bold text-foreground/60 mb-3">Technologies I Use</p>
              <div className="grid grid-cols-2 gap-2">
                {heroTechCard.slice(0, 6).map((tech, i) => (
                  <div key={tech.name} className="flex items-center gap-1.5">
                    <span className={`h-6 w-6 shrink-0 rounded-md flex items-center justify-center ${colorAt(i)}`}>
                      <Icon name={tech.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[11px] font-semibold text-foreground/80 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {heroHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover flex items-center gap-3 rounded-xl bg-white border border-border p-4"
            >
              <span className={`h-9 w-9 shrink-0 rounded-lg flex items-center justify-center ${colorAt(i)}`}>
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
