import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { colorAt } from "@/lib/colors";
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
          {solutions.map((item, i) => (
            <div key={item.title} className="card-hover rounded-2xl bg-white border border-border p-6">
              <span className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${colorAt(i + 3)}`}>
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
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
