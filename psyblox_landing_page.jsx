import React from "react";
import { Mail, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function PsybloxLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5f2] via-[#f4ece9] to-[#f0e7e3] text-[#1c1b1b] antialiased">
      <head>
        <link rel="icon" type="image/png" href="/psyblox-logo.png" />
        <title>Psyblox — Play, Connect, Grow</title>
      </head>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3">
          <img
            src="/psyblox-logo.png"
            alt="Psyblox Logo"
            className="h-12 w-auto object-contain"
          />
        </motion.div>

        <nav className="hidden md:flex gap-6 items-center text-[#474747]">
          <a className="hover:text-[#c69c6d] transition-colors" href="#pricing">Harga</a>
          <a className="hover:text-[#c69c6d] transition-colors" href="#testimonials">Testimoni</a>
          <a className="hover:text-[#c69c6d] transition-colors" href="#community">Komunitas</a>
          <button className="ml-4 inline-flex items-center gap-2 bg-[#1c1b1b] text-[#faf5f2] hover:bg-[#c69c6d] px-4 py-2 rounded-lg transition-colors">Masuk</button>
        </nav>
        <button className="md:hidden p-2 bg-[#1c1b1b]/10 rounded-lg">☰</button>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="text-center py-12">
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1c1b1b]">
            Play, Connect, and Grow — with <span className="text-[#c69c6d]">Psyblox</span>
          </motion.h2>

          <p className="mt-4 text-[#3b3b3b] max-w-2xl mx-auto">
            Fokus utama kami adalah menghadirkan layanan pendampingan bermain Roblox dan marketplace aman untuk transaksi Robux dan item digital, disertai pengalaman komunitas yang hangat dan terpercaya.
          </p>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold text-[#1c1b1b] text-center">Daftar Harga Robux & Premium</h3>
          <p className="text-[#3b3b3b] mt-2 text-center">Pilih paket sesuai kebutuhanmu — cepat, aman, dan terpercaya.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceList.map((item) => (
              <div key={item.title} className="bg-[#fff] border border-[#1c1b1b]/10 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="font-semibold text-[#1c1b1b] text-lg">{item.title}</div>
                <div className="text-[#c69c6d] text-2xl font-bold mt-2">{item.price}</div>
                <p className="text-sm text-[#3b3b3b] mt-3">{item.desc}</p>
                <button className="mt-4 w-full bg-[#1c1b1b] hover:bg-[#c69c6d] text-[#faf5f2] py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Tambahkan ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-12 bg-[#fff] rounded-3xl shadow-inner">
          <h3 className="text-2xl font-bold text-center text-[#1c1b1b]">Apa Kata Mereka?</h3>
          <p className="text-center text-[#3b3b3b] mt-2">Testimoni dari pengguna yang telah merasakan pengalaman positif di Psyblox.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-[#faf5f2] border border-[#c69c6d]/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#c69c6d] rounded-full flex items-center justify-center text-[#faf5f2] font-bold">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[#1c1b1b]">{t.name}</div>
                    <div className="text-xs text-[#777]">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#3b3b3b] italic">“{t.quote}”</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-[#c69c6d]' : 'text-[#ccc]'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNITY CTA */}
        <section id="community" className="py-12 text-center">
          <h3 className="text-2xl font-bold text-[#1c1b1b]">Bergabunglah dengan Komunitas</h3>
          <p className="text-[#3b3b3b] mt-2">Gabung Discord kami, ikuti event, dan temukan teman bermain yang sefrekuensi.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#discord" className="bg-[#1c1b1b] hover:bg-[#c69c6d] text-[#faf5f2] px-5 py-3 rounded-lg transition-colors">Masuk Discord</a>
            <a href="#events" className="border border-[#1c1b1b]/20 hover:border-[#c69c6d] px-5 py-3 rounded-lg text-[#1c1b1b] hover:text-[#c69c6d] transition-colors">Lihat Event</a>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-[#1c1b1b]/10 py-8 text-[#474747]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-[#1c1b1b]">Psyblox</div>
            <div className="text-xs text-[#777]">© {new Date().getFullYear()} Psyblox — Play, Connect, Grow</div>
          </div>

          <div className="flex items-center gap-4">
            <a className="flex items-center gap-2 text-[#474747] hover:text-[#c69c6d] transition-colors" href="mailto:psyblox2408@gmail.com"><Mail className="w-4 h-4"/> Contact</a>
            <a className="text-[#474747] hover:text-[#c69c6d] transition-colors" href="#privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const priceList = [
  { title: "80 Robux", price: "Rp15.000", desc: "Paket kecil untuk top-up cepat dan mudah." },
  { title: "160 Robux", price: "Rp30.000", desc: "Pilihan populer untuk pemain reguler." },
  { title: "360 Robux", price: "Rp57.000", desc: "Ideal untuk upgrade avatar atau gamepass." },
  { title: "1000 Robux", price: "Rp145.000", desc: "Paket besar untuk pengalaman bebas berkreasi." },
  { title: "2500 Robux", price: "Rp345.000", desc: "Pilihan premium untuk pembelian item besar." },
  { title: "5000 Robux", price: "Rp680.000", desc: "Top-up maksimal dengan keamanan terjamin." }
];

const testimonials = [
  { initials: "AK", name: "Alya K.", role: "Pelanggan Setia", quote: "Pelayanannya cepat dan aman, adminnya juga super ramah!", rating: 5 },
  { initials: "RN", name: "Reno N.", role: "Pembeli Robux", quote: "Transaksi lancar banget, gak nyangka prosesnya cuma 5 menit!", rating: 5 },
  { initials: "VF", name: "Vira F.", role: "Member Komunitas", quote: "Suka banget main bareng pendampingnya, jadi makin semangat explore Roblox!", rating: 5 }
];
