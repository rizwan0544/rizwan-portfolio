import Reveal from "@/components/Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="w-full bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">How I Work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            A Simple, Transparent Process
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item) => (
            <div key={item.step} className="card-hover rounded-2xl bg-white border border-border p-6">
              <span className="text-3xl font-extrabold text-primary/25">{item.step}</span>
              <h3 className="font-bold text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
