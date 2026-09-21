import Link from "next/link";
import { events } from "@/data/mock-data";

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Events</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Live experiences that move culture</h1>
      </div>

      <div className="mt-10 space-y-6">
        {events.map((event) => (
          <article key={event.id} className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-200">{event.date}</p>
                <h2 className="mt-2 text-3xl font-bold text-white">{event.title}</h2>
                <p className="mt-2 text-zinc-400">{event.venue}</p>
              </div>
              <Link href={`/events/${event.slug}`} className="inline-flex rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white">
                Get tickets
              </Link>
            </div>
            <p className="mt-5 max-w-3xl text-zinc-300">{event.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
