export default function AdminReleasesPage() {
  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Releases</p>
      <h1 className="mt-3 text-3xl font-black text-white">Release calendar</h1>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">June 12, 2026</p>
          <h2 className="mt-2 text-xl font-bold text-white">Midnight Bloom</h2>
          <p className="mt-2 text-sm text-zinc-300">Ava Rhyne • Single</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">May 2, 2026</p>
          <h2 className="mt-2 text-xl font-bold text-white">Afterglow City</h2>
          <p className="mt-2 text-sm text-zinc-300">Kairo Vale • EP</p>
        </div>
      </div>
    </div>
  );
}
