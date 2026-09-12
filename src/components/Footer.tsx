import { profile, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-navy border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white font-bold text-lg">
          Rizwan<span className="text-accent">.</span>
        </p>
        <ul className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-400 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-sm">
          LinkedIn
        </a>
      </div>
      <p className="text-center text-xs text-slate-500 mt-8">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
