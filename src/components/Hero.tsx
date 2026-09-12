import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-soft-blue pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="blob -top-16 -left-24 h-72 w-72" />
      <div className="blob bottom-0 -right-20 h-96 w-96" />
      <span className="confetti text-3xl top-24 left-10 hidden md:block">✦</span>
      <span className="confetti text-2xl bottom-16 left-1/3 hidden md:block">●</span>
      <span className="confetti text-3xl top-1/3 right-[8%] hidden md:block">✦</span>

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <p className="section-eyebrow mb-3">Hello, I Am</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-xl md:text-2xl font-bold text-navy">{profile.title}</h2>
          <p className="mt-2 text-muted">{profile.tagline}</p>
          <p className="mt-5 text-navy/70 max-w-xl leading-relaxed">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 hover:bg-accent-dark transition-colors"
            >
              Hire Me
            </a>
            <a
              href="#experience"
              className="text-sm font-bold text-primary underline underline-offset-4 hover:text-primary-dark"
            >
              See My Work
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute h-64 w-64 md:h-80 md:w-80 rounded-full bg-primary/15" />
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full ring-4 ring-white shadow-2xl overflow-hidden bg-white">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="288px"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -left-4 top-4 md:left-0 rounded-2xl bg-white px-4 py-3 shadow-xl flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <div>
              <p className="text-xs font-bold text-navy leading-none">Team Lead</p>
              <p className="text-[11px] text-muted">14Digital</p>
            </div>
          </div>

          <div className="absolute -right-2 bottom-6 md:right-0 rounded-2xl bg-white px-4 py-3 shadow-xl flex items-center gap-2">
            <span className="text-xl">💼</span>
            <div>
              <p className="text-xs font-bold text-navy leading-none">7+ Years</p>
              <p className="text-[11px] text-muted">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
