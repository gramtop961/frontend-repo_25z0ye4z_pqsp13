export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Dibangun dengan Tailwind CSS
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Bangun tampilan modern dengan cepat dan konsisten
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Komponen yang elegan, responsif, dan siap produksi agar Anda fokus pada ide dan pengalaman pengguna.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800">
                Jelajahi Fitur
              </a>
              <a href="#" className="inline-flex justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Lihat Dokumentasi
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Desain Bersih</p>
                <p>Konsisten dan mudah disesuaikan.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Siap Responsif</p>
                <p>Tampil sempurna di semua perangkat.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 ring-1 ring-inset ring-slate-200" />
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
