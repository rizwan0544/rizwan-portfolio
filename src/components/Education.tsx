import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <span className="confetti text-2xl top-10 right-1/4">✦</span>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Academic Background</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl bg-soft p-6 flex flex-wrap items-baseline justify-between gap-2 shadow-sm"
            >
              <div>
                <h3 className="text-navy font-bold">{edu.degree}</h3>
                <p className="text-muted text-sm mt-1">
                  {edu.school} · {edu.location}
                </p>
              </div>
              <span className="rounded-full bg-primary/10 text-primary text-sm font-semibold px-3 py-1">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
