import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="section-title-eyebrow">My Skills</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-navy-light border border-white/5 p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 text-slate-300 text-xs px-3 py-1.5 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
