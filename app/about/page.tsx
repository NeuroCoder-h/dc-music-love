export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">About</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Music business with heart and vision</h1>
        <p className="mt-6 text-lg text-zinc-300">
          DC Music Love exists to help artists, audiences, and communities connect through music that feels personal,
          intentional, and deeply culture-driven. We merge creative strategy, live events, and artist development into a
          single ecosystem built for lasting impact.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Artist development", "Creative guidance and career strategy for emerging and established artists."],
            ["Event production", "Premium live experiences designed to feel immersive and unforgettable."],
            ["Culture storytelling", "Narratives and campaigns that connect music to audience identity and community."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
