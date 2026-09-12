import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="w-full bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <p className="section-title-eyebrow">Academic Background</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl bg-navy-light border border-white/5 p-6 flex flex-wrap items-baseline justify-between gap-2"
            >
              <div>
                <h3 className="text-white font-semibold">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mt-1">
                  {edu.school} · {edu.location}
                </p>
              </div>
              <span className="text-sm text-accent-light">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
