import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { colorAt } from "@/lib/colors";
import { whyWorkWithMe } from "@/lib/data";

export default function WhyWorkWithMe() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">Why Work With Me</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Why Work With Me?
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMe.map((item, i) => (
            <div key={item.title} className="card-hover rounded-2xl border border-border bg-soft p-6">
              <span className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${colorAt(i + 6)}`}>
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
