export default function AdminNewsPage() {
  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">News</p>
      <h1 className="mt-3 text-3xl font-black text-white">Story and content queue</h1>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Community</p>
          <h2 className="mt-2 text-xl font-bold text-white">Building a new wave of independent artists in DC</h2>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Events</p>
          <h2 className="mt-2 text-xl font-bold text-white">Inside our latest event production playbook</h2>
        </div>
      </div>
    </div>
  );
}
