export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Contact</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Book, partner, or collaborate</h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-zinc-300">
            <p>Email: hello@dcmusiclove.com</p>
            <p>Phone: +1 (202) 555-0134</p>
            <p>Location: Washington, DC</p>
          </div>

          <form className="space-y-4">
            <input placeholder="Name" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
            <input placeholder="Email" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
            <textarea placeholder="Project details" rows={5} className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500" />
            <button type="submit" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
