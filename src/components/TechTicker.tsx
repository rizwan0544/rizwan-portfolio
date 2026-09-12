const tags = [
  "React",
  "Next.js",
  "Laravel",
  "Vue.js",
  "Node.js",
  "AI Automation",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "WhatsApp API",
  "n8n",
  "REST APIs",
];

export default function TechTicker() {
  const loop = [...tags, ...tags];

  return (
    <div className="relative w-full overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 z-10 bg-gradient-to-r from-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 z-10 bg-gradient-to-l from-soft to-transparent" />

      <div className="ticker-track flex w-max items-center gap-3" style={{ ["--ticker-duration" as string]: "26s" }}>
        {loop.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="rounded-full bg-white border border-border text-foreground/70 text-xs font-semibold px-4 py-2 whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
