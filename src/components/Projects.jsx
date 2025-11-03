import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Dashboard Analytics',
    description: 'Visualisasi data interaktif dengan UI bersih dan responsif.',
    tags: ['React', 'Tailwind', 'API'],
    link: '#',
  },
  {
    title: 'E‑Commerce Minimal',
    description: 'Toko online modern dengan fokus pada pengalaman pengguna.',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    link: '#',
  },
  {
    title: 'Landing Page SaaS',
    description: 'Halaman pemasaran elegan dengan performa tinggi.',
    tags: ['Vite', 'SEO', 'A11y'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Proyek Terpilih</h2>
            <p className="mt-2 text-slate-600">Kumpulan karya terbaik yang menonjolkan kualitas dan detail.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-indigo-700 hover:text-indigo-800">Hubungi untuk kolaborasi →</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article key={idx} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-indigo-200/50 via-violet-200/50 to-fuchsia-200/50">
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                  <a href={p.link} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
