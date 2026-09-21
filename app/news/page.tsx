import Link from "next/link";
import { news } from "@/data/mock-data";

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">News</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Stories from the culture desk</h1>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {news.map((item) => (
          <article key={item.id} className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-200">{item.category}</p>
            <h2 className="mt-3 text-2xl font-bold text-white">{item.title}</h2>
            <p className="mt-4 text-zinc-300">{item.excerpt}</p>
            <Link href={`/news/${item.slug}`} className="mt-5 inline-block text-brand-200 hover:text-white">
              Read the story →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
