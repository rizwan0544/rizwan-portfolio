import Reveal from "@/components/Reveal";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Technology &amp; Expertise</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Tools I Use to Build Reliable Products
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group) => (
            <div key={group.category} className="rounded-2xl border border-border bg-soft p-6">
              <h3 className="font-bold text-foreground mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white border border-border text-foreground/80 text-xs font-semibold px-3 py-1.5"
                  >
                    {item}
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
