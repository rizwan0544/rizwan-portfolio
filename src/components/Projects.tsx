import Image from "next/image";
import Reveal from "@/components/Reveal";
import CodePreview from "@/components/CodePreview";
import TechTicker from "@/components/TechTicker";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Selected Projects</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Some of the web applications, business platforms and digital solutions I&apos;ve worked on.
          </h2>
        </Reveal>

        <Reveal className="mb-14">
          <CodePreview />
        </Reveal>

        <Reveal className="mb-10">
          <TechTicker />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.08}>
              <div className="group card-hover rounded-2xl bg-white border border-border overflow-hidden flex flex-col h-full transition-shadow hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative h-44 w-full bg-lavender overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark transition-transform duration-500 group-hover:scale-105">
                      <span className="text-white font-extrabold text-xl text-center px-4">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-foreground text-lg">{project.name}</h3>
                  <p className="text-sm text-muted mt-2 flex-1">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-lavender text-primary text-[11px] font-semibold px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-primary text-primary text-sm font-bold px-5 py-2.5 hover:bg-primary hover:text-white transition-colors"
                  >
                    View Live Site
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
