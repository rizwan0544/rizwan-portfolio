import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Services I Provide</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            End-to-end development and automation solutions for modern businesses.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover rounded-2xl border border-border bg-white p-6"
            >
              <span className="h-11 w-11 rounded-xl bg-lavender text-primary flex items-center justify-center mb-4">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
