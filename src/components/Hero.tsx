import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-navy pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <p className="section-title-eyebrow mb-4">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Hi, I&apos;m {profile.name}
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-accent-light">
            {profile.title}
          </h2>
          <p className="mt-2 text-slate-400">{profile.tagline}</p>
          <p className="mt-6 text-slate-300 max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
            >
              Hire Me
            </a>
            <a
              href={profile.resumeFile}
              download
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full ring-4 ring-accent/30 overflow-hidden bg-slate-800">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="288px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
