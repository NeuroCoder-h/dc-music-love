import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Artists", href: "/artists" },
  { label: "Releases", href: "/releases" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-lg font-black text-white">
            DC
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white">DC Music Love</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">Amplifying culture</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="hidden rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 sm:inline-flex"
          >
            Admin
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Book us
          </Link>
        </div>
      </div>
    </header>
  );
}
