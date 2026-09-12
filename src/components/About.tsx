import { achievements, languages, interests, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <span className="confetti text-2xl top-10 left-1/4">●</span>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Testimonials From My Work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">Key Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl bg-soft p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center text-2xl">
                🏅
              </div>
              <h3 className="font-bold text-navy text-lg">{a.title}</h3>
              <p className="text-sm text-muted mt-2">{a.description}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-bold text-navy mb-1">Location</h4>
            <p className="text-sm text-muted">{profile.location}</p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-1">Languages</h4>
            <p className="text-sm text-muted">
              {languages.map((l) => `${l.name} (${l.level})`).join(", ")}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-1">Interests</h4>
            <p className="text-sm text-muted">{interests.map((i) => i.name).join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
