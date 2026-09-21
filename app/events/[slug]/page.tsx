import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/data/mock-data";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">{event.date}</p>
        <h1 className="mt-3 text-4xl font-black text-white">{event.title}</h1>
        <p className="mt-3 text-xl text-zinc-300">{event.venue}</p>
        <p className="mt-6 text-lg text-zinc-300">{event.description}</p>

        <div className="mt-8 flex gap-4">
          <Link href="/events" className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white">
            Back to events
          </Link>
          <Link href="/contact" className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white">
            Reserve a spot
          </Link>
        </div>
      </div>
    </div>
  );
}
