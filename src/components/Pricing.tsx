"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { pricingPlans } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Flexible Packages for Every Stage of Your Business
          </h2>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            Every project is scoped to your actual requirements &mdash; these are starting points,
            not fixed quotes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative rounded-2xl border bg-white p-8 h-full transition-shadow duration-300 ${
                  plan.highlighted
                    ? "border-primary shadow-xl shadow-primary/15 md:scale-105"
                    : "border-border hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-white text-[11px] font-bold px-3 py-1">
                    Most Popular
                  </span>
                )}

                <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-xs text-muted">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block text-center rounded-full px-5 py-3 text-sm font-bold transition-colors ${
                    plan.highlighted
                      ? "cta-glow bg-primary text-white hover:bg-primary-dark"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
