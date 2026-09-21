export default function AdminArtistsPage() {
  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Artists</p>
      <h1 className="mt-3 text-3xl font-black text-white">Artist management</h1>

      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
        <table className="min-w-full text-left text-sm text-zinc-300">
          <thead className="bg-zinc-950/80 text-zinc-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Genre</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-zinc-800">
              <td className="px-4 py-3">Ava Rhyne</td>
              <td className="px-4 py-3">R&B / Soul</td>
              <td className="px-4 py-3">On tour</td>
            </tr>
            <tr className="border-t border-zinc-800">
              <td className="px-4 py-3">Kairo Vale</td>
              <td className="px-4 py-3">Hip-Hop / Alternative</td>
              <td className="px-4 py-3">New single</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
