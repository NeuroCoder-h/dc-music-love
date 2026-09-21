import Link from "next/link";
import { notFound } from "next/navigation";
import { releases } from "@/data/mock-data";

export default function ReleaseDetailPage({ params }: { params: { slug: string } }) {
  const release = releases.find((item) => item.slug === params.slug);

  if (!release) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <img src={release.cover} alt={release.title} className="h-[520px] w-full rounded-[2rem] object-cover" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">{release.type}</p>
          <h1 className="mt-3 text-4xl font-black text-white">{release.title}</h1>
          <p className="mt-3 text-xl text-zinc-300">by {release.artist}</p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-400">{release.releaseDate}</p>
          <p className="mt-6 text-lg text-zinc-300">{release.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/releases" className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white">
              Back to releases
            </Link>
            <Link href={`/artists/${release.artistSlug}`} className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white">
              View artist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
