import Link from "next/link";
import { artists, events, news, releases } from "@/data/mock-data";

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Artists</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">The voices we champion</h1>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {artists.map((artist) => (
          <article key={artist.id} className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/70">
            <img src={artist.image} alt={artist.name} className="h-72 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-white">{artist.name}</h2>
                <span className="rounded-full bg-brand-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-100">
                  {artist.status}
                </span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-400">{artist.genre}</p>
              <p className="mt-4 text-zinc-300">{artist.bio}</p>
              <Link href={`/artists/${artist.slug}`} className="mt-5 inline-flex text-brand-200 hover:text-white">
                View profile →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
