import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="w-full bg-lavender py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="section-eyebrow">About Me</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Turning Requirements Into Reliable Products
          </h2>
          <p className="text-foreground/70 leading-relaxed text-lg">
            I&apos;m a Full-Stack Developer focused on building practical web applications,
            business systems and automation solutions. I work across backend, frontend, APIs,
            databases and integrations — using PHP, Laravel, React.js, Vue.js, and Node.js — to
            turn business requirements into reliable digital products.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
          >
            Let&apos;s Build Something
          </a>
        </Reveal>
      </div>
    </section>
  );
}
