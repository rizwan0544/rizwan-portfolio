import { expertise } from "@/lib/data";

const icons: Record<string, string> = {
  server: "🖥️",
  layout: "🎨",
  plug: "🔌",
  database: "🗄️",
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="blob top-10 -left-32 h-72 w-72" />
      <span className="confetti text-2xl top-10 right-10">✦</span>

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center mb-14">
          <p className="section-eyebrow">My Expertise</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">
            Provide Wide Range of <br className="hidden md:block" /> Digital Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-soft p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-white shadow flex items-center justify-center text-2xl mb-4">
                {icons[item.icon]}
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
