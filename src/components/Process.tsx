"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="w-full bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">How I Work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            A Simple, Transparent Process
          </h2>
        </Reveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-[38px] left-[12.5%] right-[12.5%] h-0.5 bg-border">
            <motion.div
              className="h-full bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.35 }}
              className="relative"
            >
              <div className="card-hover relative z-10 rounded-2xl bg-white border border-border p-6">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.35 + 0.1 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary mb-3"
                >
                  {item.step}
                </motion.span>
                <h3 className="font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
