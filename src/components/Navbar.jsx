import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white shadow">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">VibeTailwind</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Fitur</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Harga</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">Tentang</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Star size={16} />
              Demo
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90">
              Mulai
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
