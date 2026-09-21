export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">404</p>
      <h1 className="mt-4 text-4xl font-black text-white">This page could not be found.</h1>
      <p className="mt-4 text-zinc-400">The resource you are looking for may have moved or no longer exists.</p>
    </div>
  );
}
