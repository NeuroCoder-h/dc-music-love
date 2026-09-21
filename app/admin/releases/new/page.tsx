export default function AdminCreateReleasePage() {
  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Releases</p>
      <h1 className="mt-3 text-3xl font-black text-white">Add release</h1>

      <form className="mt-8 space-y-4">
        <input placeholder="Release title" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
        <input placeholder="Artist" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
        <input placeholder="Release date" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
        <textarea placeholder="Description" rows={4} className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
        <button type="submit" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white">
          Save release
        </button>
      </form>
    </div>
  );
}
