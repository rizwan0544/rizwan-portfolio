import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="section-eyebrow">What Clients Say</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground mb-10">
            Client Testimonials
          </h2>

          {testimonials.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border bg-soft p-6">
                  <p className="text-foreground/80 leading-relaxed">&quot;{t.quote}&quot;</p>
                  <p className="mt-4 font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-soft p-10">
              <p className="text-muted">
                Client testimonials will be added here as projects are completed and reviewed.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
