import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/admin" },
  { label: "Artists", href: "/admin/artists" },
  { label: "Releases", href: "/admin/releases" },
  { label: "Events", href: "/admin/events" },
  { label: "News", href: "/admin/news" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-5">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Dashboard</p>
            <h1 className="mt-2 text-2xl font-black text-white">DC Music Love</h1>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-transparent px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div>{children}</div>
      </div>
    </div>
  );
}
