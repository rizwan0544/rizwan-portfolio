import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Career Path</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">Work Experience</h2>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-3 space-y-10">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="relative pl-8">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-navy">
                  {job.role} · <span className="text-primary">{job.company}</span>
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              {job.location && <p className="text-sm text-muted mb-3">{job.location}</p>}
              <ul className="mt-3 space-y-2 text-sm text-navy/70 leading-relaxed">
                {job.points.map((point, idx) => {
                  const [label, ...rest] = point.split(": ");
                  const description = rest.join(": ");
                  return (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        {description ? (
                          <>
                            <span className="font-semibold text-navy">{label}: </span>
                            {description}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
