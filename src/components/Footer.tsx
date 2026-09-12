import { profile, footerLinks, footerTech } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground py-12">
      <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-extrabold text-lg mb-3">{profile.name}</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm">
            LinkedIn
          </a>
        </div>

        <div>
          <h5 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3">Navigation</h5>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/70 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3">Technology</h5>
          <ul className="flex flex-wrap gap-2">
            {footerTech.map((tech) => (
              <li key={tech} className="text-xs text-white/70 bg-white/10 rounded-md px-2 py-1">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-white/40 mt-10">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
