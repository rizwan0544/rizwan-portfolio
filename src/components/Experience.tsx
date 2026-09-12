import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <p className="section-title-eyebrow">Career Path</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-3 space-y-10">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="relative pl-8">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              {job.location && (
                <p className="text-sm text-muted mb-3">{job.location}</p>
              )}
              <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
                {job.points.map((point, idx) => {
                  const [label, ...rest] = point.split(": ");
                  const description = rest.join(": ");
                  return (
                    <li key={idx} className="flex gap-2">
                      <span className="text-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        {description ? (
                          <>
                            <span className="font-semibold text-foreground">{label}: </span>
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
