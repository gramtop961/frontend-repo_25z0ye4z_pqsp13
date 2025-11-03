export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} VibeTailwind. Semua hak dilindungi.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-900">Syarat Layanan</a>
            <a href="#" className="hover:text-slate-900">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
