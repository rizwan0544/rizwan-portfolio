import { profile, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-navy py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white font-extrabold text-lg">
          Rizwan<span className="text-accent">.</span>
        </p>
        <ul className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-white/60 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm">
          LinkedIn
        </a>
      </div>
      <p className="text-center text-xs text-white/40 mt-8">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
