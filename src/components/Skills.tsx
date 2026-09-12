import { profile, skillGroups, topSkills } from "@/lib/data";

function CircleStat({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-6 flex flex-col items-center text-center">
      <div
        className="relative h-24 w-24 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(var(--primary) ${percent * 3.6}deg, #ece9ff 0deg)`,
        }}
      >
        <div className="h-[72px] w-[72px] rounded-full bg-white flex items-center justify-center">
          <span className="font-extrabold text-navy">{percent}%</span>
        </div>
      </div>
      <h5 className="mt-4 text-sm font-semibold text-navy">{name}</h5>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-soft-blue py-20 md:py-28 overflow-hidden">
      <div className="blob top-1/3 -right-24 h-80 w-80" />

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <p className="section-eyebrow">My Skills</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">
            Beautiful & Unique <br /> Digital Experiences
          </h2>
          <p className="mt-4 text-navy/70 leading-relaxed">
            Backed by {topSkills.length > 0 ? "7+ years" : ""} of hands-on experience building
            production web applications end to end — from database design to polished,
            responsive user interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skillGroups.flatMap((g) => g.skills).slice(0, 14).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white text-navy/80 text-xs font-medium px-3 py-1.5 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href={profile.resumeFile}
            download
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 hover:bg-accent-dark transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {topSkills.map((skill) => (
            <CircleStat key={skill.name} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  );
}
