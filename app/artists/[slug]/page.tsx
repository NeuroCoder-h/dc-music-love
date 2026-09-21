import Link from "next/link";
import { notFound } from "next/navigation";
import { artists } from "@/data/mock-data";

export default function ArtistProfilePage({ params }: { params: { slug: string } }) {
  const artist = artists.find((item) => item.slug === params.slug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <img src={artist.image} alt={artist.name} className="h-[520px] w-full rounded-[2rem] object-cover" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">{artist.genre}</p>
          <h1 className="mt-3 text-4xl font-black text-white">{artist.name}</h1>
          <div className="mt-4 inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200">
            {artist.status}
          </div>
          <p className="mt-6 text-lg text-zinc-300">{artist.bio}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/artists" className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white">
              Back to artists
            </Link>
            <Link href="/contact" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white">
              Book this artist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
