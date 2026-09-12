import Image from "next/image";
import Icon from "@/components/Icon";
import { profile, heroTech, heroTechCard, heroHighlights } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-soft pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow mb-4">{profile.role}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15]">
              Building Modern Web Solutions &amp; AI-Powered Automations
            </h1>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              I help businesses build scalable web applications, CRM systems, business platforms
              and AI-powered automations that simplify operations and improve productivity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white border border-border text-foreground/70 text-xs font-medium px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
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
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-3xl overflow-hidden bg-white shadow-xl border border-border">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-8 md:-bottom-10 bg-white rounded-2xl shadow-xl border border-border p-4 w-56">
              <p className="text-xs font-bold text-foreground/60 mb-2">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {heroTechCard.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-lavender text-primary text-[11px] font-semibold px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {heroHighlights.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl bg-white border border-border p-4"
            >
              <span className="h-9 w-9 shrink-0 rounded-lg bg-lavender text-primary flex items-center justify-center">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
