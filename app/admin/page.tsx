export default function AdminPage() {
  const stats = [
    { label: "Artists", value: "18" },
    { label: "Releases", value: "42" },
    { label: "Events", value: "12" },
    { label: "Subscribers", value: "4.8k" },
  ];

  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Overview</p>
      <h1 className="mt-3 text-4xl font-black text-white">Admin dashboard</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
            <p className="text-sm text-zinc-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
          <h2 className="text-xl font-bold text-white">Featured artist pipeline</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>• Ava Rhyne — campaign update in review</li>
            <li>• Kairo Vale — new release scheduled</li>
            <li>• The Velvet Echo — media assets uploaded</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
          <h2 className="text-xl font-bold text-white">Upcoming live moments</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>• DC Sound Session — Sep 28</li>
            <li>• Night Pulse Festival — Oct 18</li>
            <li>• Artist mixer — Nov 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
