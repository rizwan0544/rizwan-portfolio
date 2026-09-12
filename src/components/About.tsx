import { profile, achievements, languages, interests } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="section-title-eyebrow">About Me</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
            Turning Ideas Into Scalable Products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
            <p>{profile.summary}</p>
            <dl className="grid sm:grid-cols-2 gap-4 mt-6 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>{profile.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Phone</dt>
                <dd>{profile.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    {profile.linkedinLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Languages</dt>
                <dd>{languages.map((l) => `${l.name} (${l.level})`).join(", ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Interests</dt>
                <dd>{interests.map((i) => i.name).join(", ")}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Key Achievements</h3>
            {achievements.map((a) => (
              <div key={a.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-foreground">{a.title}</p>
                <p className="text-sm text-muted mt-1">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
