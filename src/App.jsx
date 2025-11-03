import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Harga yang sederhana</h2>
              <p className="mt-3 text-slate-600">Mulai gratis, upgrade kapan saja sesuai kebutuhan Anda.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Gratis", "Pro", "Bisnis"].map((tier, i) => (
                <div key={tier} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-medium text-indigo-600">{tier}</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight">{i === 0 ? 'Rp0' : i === 1 ? 'Rp99k' : 'Rp199k'}/bln</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li>Akses semua komponen dasar</li>
                    <li>Update rutin</li>
                    <li>Dukungan komunitas</li>
                  </ul>
                  <button className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Pilih Paket</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
