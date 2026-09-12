import { experience } from "@/lib/data";

export default function Companies() {
  return (
    <section className="relative w-full bg-primary py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="confetti text-3xl top-10 left-10 !text-accent">✦</span>
      <span className="confetti text-2xl bottom-10 right-16 !text-white">●</span>

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center mb-14">
          <p className="text-accent uppercase tracking-widest text-xs font-bold">Career Journey</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Companies I&apos;ve Worked With
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="rounded-2xl bg-white p-6 shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-navy text-lg">{job.company}</h3>
                <span className="rounded-full bg-soft text-primary text-xs font-bold px-3 py-1">
                  {job.period}
                </span>
              </div>
              <p className="text-primary font-semibold text-sm mt-1">{job.role}</p>
              {job.location && <p className="text-muted text-xs mt-1">{job.location}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
