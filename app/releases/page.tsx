import Link from "next/link";
import { notFound } from "next/navigation";
import { releases } from "@/data/mock-data";

export default function ReleasesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Releases</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Fresh sounds from the roster</h1>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {releases.map((release) => (
          <article key={release.id} className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/70">
            <img src={release.cover} alt={release.title} className="h-72 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-200">{release.type}</p>
              <h2 className="mt-2 text-2xl font-bold text-white">{release.title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{release.artist}</p>
              <p className="mt-4 text-zinc-300">{release.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-zinc-400">{release.releaseDate}</span>
                <Link href={`/releases/${release.slug}`} className="text-brand-200 hover:text-white">
                  Listen →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
