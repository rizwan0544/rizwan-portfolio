import Reveal from "@/components/Reveal";
import { solutions } from "@/lib/data";

export default function Solutions() {
  return (
    <section id="solutions" className="w-full bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Solutions for Your Business</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Practical solutions to real business problems
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div key={item.title} className="card-hover rounded-2xl bg-white border border-border p-6">
              <h3 className="font-bold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                <span className="font-semibold text-foreground/80">Problem: </span>
                {item.problem}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                <span className="font-semibold text-primary">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
