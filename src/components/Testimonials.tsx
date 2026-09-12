"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="testimonials" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Client Feedback</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            What Clients Say About Working With Me
          </h2>
        </Reveal>

        <div
          className="relative rounded-3xl bg-soft border border-border p-8 md:p-12 min-h-[260px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 text-primary fill-primary" />
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </p>
                <p className="mt-6 font-bold text-foreground">{testimonials[index].name}</p>
                <p className="text-sm text-muted">{testimonials[index].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
