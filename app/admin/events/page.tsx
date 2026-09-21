export default function AdminEventsPage() {
  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Events</p>
      <h1 className="mt-3 text-3xl font-black text-white">Live event management</h1>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Sep 28, 2026</p>
          <h2 className="mt-2 text-xl font-bold text-white">DC Sound Session</h2>
          <p className="mt-2 text-sm text-zinc-300">The Atlas Hall • Tickets open</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Oct 18, 2026</p>
          <h2 className="mt-2 text-xl font-bold text-white">Night Pulse Festival</h2>
          <p className="mt-2 text-sm text-zinc-300">Union Stage • Production stage</p>
        </div>
      </div>
    </div>
  );
}
