import { Shield, Sparkles, Layers, Settings } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Aman & Andal',
    desc: 'Praktik terbaik untuk aksesibilitas, performa, dan kualitas produksi.'
  },
  {
    icon: Sparkles,
    title: 'Estetika Modern',
    desc: 'Tipografi rapi, ruang lega, dan warna gradasi yang menawan.'
  },
  {
    icon: Layers,
    title: 'Terstruktur',
    desc: 'Komponen kecil dengan tanggung jawab tunggal untuk pemeliharaan yang mudah.'
  },
  {
    icon: Settings,
    title: 'Mudah Disesuaikan',
    desc: 'Sesuaikan gaya dengan utilitas Tailwind tanpa menulis CSS berulang.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Semua yang Anda butuhkan</h2>
          <p className="mt-3 text-slate-600">Koleksi blok siap pakai untuk mempercepat proses pembuatan antarmuka.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
