import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Mari Bekerja Sama</h2>
          <p className="mt-3 text-slate-600">Terbuka untuk freelance, proyek jangka panjang, atau kolaborasi produk.</p>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Nama Anda" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="email@domain.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Ceritakan kebutuhan Anda" />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:opacity-90">
                Kirim
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-center gap-4 text-slate-600">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"><Mail size={16}/> Email</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"><Github size={16}/> GitHub</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"><Linkedin size={16}/> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
