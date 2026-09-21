import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/mock-data";

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = news.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">{article.category}</p>
        <h1 className="mt-3 text-4xl font-black text-white">{article.title}</h1>
        <p className="mt-6 text-lg text-zinc-300">{article.content}</p>

        <div className="mt-8">
          <Link href="/news" className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white">
            Back to news
          </Link>
        </div>
      </div>
    </div>
  );
}
