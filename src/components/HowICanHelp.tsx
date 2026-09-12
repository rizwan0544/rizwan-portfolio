import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { helpBlocks } from "@/lib/data";

export default function HowICanHelp() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center mb-14">
          <p className="section-eyebrow">How I Can Help</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            How I Can Help Your Business
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpBlocks.map((block) => (
            <div key={block.title} className="card-hover rounded-2xl border border-border bg-soft p-6 text-center">
              <span className="mx-auto h-12 w-12 rounded-xl bg-white border border-border text-primary flex items-center justify-center mb-4">
                <Icon name={block.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-foreground mb-2">{block.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
