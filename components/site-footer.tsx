import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-zinc-800 bg-zinc-950/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="text-2xl font-black text-white">DC Music Love</div>
          <p className="mt-4 max-w-xs text-sm text-zinc-400">
            Music company, artist development, and culture-driven experiences for the next generation.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><Link href="/artists">Artists</Link></li>
            <li><Link href="/releases">Releases</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/news">News</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Follow</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X / Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        © 2026 DC Music Love. All rights reserved.
      </div>
    </footer>
  );
}
