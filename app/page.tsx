import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { artists, events, news, releases } from "@/data/mock-data";

export default function HomePage() {
  const featuredArtist = artists[0];
  const latestRelease = releases[0];
  const nextEvent = events[0];

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
              DC Music Love
            </p>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl">
              Where sound meets culture.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              We build careers, shape experiences, and amplify voices through artist development,
              music releases, live events, and culture-first storytelling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/artists"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
              >
                Meet the artists
              </Link>
              <Link
                href="/releases"
                className="rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
              >
                Explore releases
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-zinc-300">
              <div>
                <div className="text-3xl font-black text-white">18+</div>
                <div>featured artists</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">42</div>
                <div>release moments</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">12</div>
                <div>live events yearly</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-4 shadow-glow">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-500 via-brand-700 to-zinc-900 p-6">
              <div className="mb-8 flex items-center justify-between text-sm text-zinc-200">
                <span className="rounded-full bg-white/10 px-3 py-1">Featured artist</span>
                <span className="text-brand-100">Now touring</span>
              </div>

              <img
                src={featuredArtist.image}
                alt={featuredArtist.name}
                className="h-72 w-full rounded-2xl object-cover"
              />

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">{featuredArtist.genre}</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">{featuredArtist.name}</h2>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {featuredArtist.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Latest drop" title="Fresh music and stories" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {releases.slice(0, 3).map((release) => (
            <article key={release.id} className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70">
              <img src={release.cover} alt={release.title} className="h-64 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-200">{release.type}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{release.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{release.artist}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-zinc-300">
                  <span>{release.releaseDate}</span>
                  <Link href={`/releases/${release.slug}`} className="text-brand-200 hover:text-white">
                    Listen now →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6">
            <SectionHeading eyebrow="Spotlight" title="Next event" />
            <div className="mt-8 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">{nextEvent.date}</p>
              <h3 className="mt-3 text-3xl font-bold text-white">{nextEvent.title}</h3>
              <p className="mt-3 text-zinc-300">{nextEvent.venue}</p>
              <p className="mt-5 text-zinc-400">{nextEvent.description}</p>
              <Link
                href={`/events/${nextEvent.slug}`}
                className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-600"
              >
                Get tickets
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6">
            <SectionHeading eyebrow="Latest news" title="Culture + updates" />
            <div className="mt-8 space-y-5">
              {news.slice(0, 3).map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.excerpt}</p>
                  <Link href={`/news/${item.slug}`} className="mt-3 inline-block text-sm text-brand-200 hover:text-white">
                    Read story →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
