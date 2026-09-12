import { profile, footerLinks, footerTech } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground pt-14 pb-8 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 pr-4">
            <p className="text-white font-extrabold text-xl mb-3">{profile.name}</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-5">{profile.tagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-primary hover:bg-white/5 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-primary hover:bg-white/5 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Navigation</h5>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Get in Touch</h5>
            <ul className="space-y-2.5 text-sm text-white/70 mb-5">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors break-all">
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
              <li className="inline-flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {profile.availability}
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {footerTech.map((tech) => (
                <span key={tech} className="text-xs text-white/70 bg-white/10 rounded-md px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
