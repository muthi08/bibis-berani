import { motion } from "framer-motion";
import { Shield, BookOpen, HeartHandshake, Mail, Hand, MessageSquareWarning, Users, Smartphone, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@assets/logo_sd_bibis_1782278696623.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 text-primary font-bold text-xl tracking-tight">
          <img
            src={schoolLogo}
            alt="Logo SD Bibis Kasihan"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <span>BIBIS BERANI</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <button onClick={() => scrollTo('beranda')} className="hover:text-primary transition-colors">Beranda</button>
          <button onClick={() => scrollTo('edukasi')} className="hover:text-primary transition-colors">Edukasi</button>
          <button onClick={() => scrollTo('video')} className="hover:text-primary transition-colors">Video</button>
          <button onClick={() => scrollTo('pengaduan')} className="hover:text-primary transition-colors">Pengaduan</button>
          <button onClick={() => scrollTo('kontak')} className="hover:text-primary transition-colors">Kontak</button>
        </div>
        <Button onClick={() => scrollTo('pengaduan')} size="sm" className="bg-destructive hover:bg-destructive/90 text-white rounded-full shadow-sm font-semibold">
          Lapor Sekarang
        </Button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-green-400/10 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-100 text-sm font-medium text-primary mb-6">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Ruang Aman Digital Sekolah</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              BIBIS BERANI
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
            Bersama Hindari Bullying, Saling Menghargai dan Peduli.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo('edukasi')}
              className="w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Pelajari Bullying
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollTo('pengaduan')}
              className="w-full sm:w-auto text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50 transition-all text-gray-700"
            >
              <Shield className="mr-2 w-5 h-5 text-secondary" />
              Laporkan Sekarang
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Edukasi() {
  return (
    <section id="edukasi" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Memahami Bullying</h2>
            <p className="text-lg text-gray-600">Mari kita kenali apa itu bullying agar kita bisa bersama-sama menghentikannya.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apa Itu Bullying?</h3>
              <p className="text-gray-600 leading-relaxed">
                Perilaku agresif yang dilakukan berulang kali dengan niat untuk menyakiti, mengintimidasi, atau mengucilkan seseorang baik secara fisik, verbal, maupun sosial.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-rose-50/50 p-8 rounded-3xl border border-rose-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-rose-500 mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dampak Bullying</h3>
              <p className="text-gray-600 leading-relaxed">
                Meninggalkan luka psikologis seperti kecemasan, depresi, rendah diri, trauma, penurunan prestasi akademik, hingga dalam kasus parah memicu niat menyakiti diri sendiri.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-green-50/50 p-8 rounded-3xl border border-green-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-secondary mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cara Mencegah</h3>
              <p className="text-gray-600 leading-relaxed">
                Berani angkat bicara, dukung korban, laporkan ke guru, bangun rasa empati, dan gunakan media sosial dengan bijak. Kamu bisa membuat perbedaan.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JenisBullying() {
  const types = [
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Bullying Fisik",
      desc: "Memukul, menendang, mendorong, atau merusak barang milik orang lain.",
      color: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: <MessageSquareWarning className="w-8 h-8" />,
      title: "Bullying Verbal",
      desc: "Mengejek, menghina, mengancam, atau menyebarkan gosip jahat.",
      color: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bullying Sosial",
      desc: "Mengucilkan, mengabaikan, menyebarkan rumor, atau memanipulasi pertemanan.",
      color: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cyberbullying",
      desc: "Pelecehan melalui media sosial, pesan teks, email, atau platform online lainnya.",
      color: "bg-teal-50",
      iconColor: "text-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kenali Jenisnya</h2>
            <p className="text-lg text-gray-600">Bullying tidak selalu tentang pukulan fisik. Kenali bentuk-bentuk lainnya.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className={`${type.color} p-8 rounded-3xl transition-transform hover:-translate-y-1`}
              >
                <div className={`${type.iconColor} mb-6`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {type.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoEdukasi() {
  return (
    <section id="video" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Edukasi</h2>
            <p className="text-lg text-gray-600">Tonton video berikut untuk memahami lebih lanjut tentang bullying dan cara mencegahnya.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "https://www.youtube.com/embed/jQRceqm-dBI",
              "https://www.youtube.com/embed/JJaqpZa34Eo",
              "https://www.youtube.com/embed/rzRQ7HfRzG8",
              "https://www.youtube.com/embed/5CfLW5aEBAw",
              "https://www.youtube.com/embed/jmUwUbNnn2I",
              "https://www.youtube.com/embed/SPxtYsSdBJg",
              "https://www.youtube.com/embed/rRFKxtMd--E",
              "https://www.youtube.com/embed/CfccgOShfmE",
              "https://www.youtube.com/embed/86_uuX77hsc",
              "https://www.youtube.com/embed/kMQzcsaRtyk",
              "https://www.youtube.com/embed/am3sGO12f6Q"
            ].map((url, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 aspect-video relative group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={url}
                  title={`Video Edukasi Bullying ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pengaduan() {
  return (
    <section id="pengaduan" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Laporkan Bullying</h2>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
              <Shield className="w-5 h-5" />
              Identitas pelapor akan dirahasiakan dan laporan dapat dikirim secara anonim.
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-2 rounded-3xl shadow-xl border border-blue-100">
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[500px] border-2 border-dashed border-gray-200 relative overflow-hidden">
              <Shield className="w-16 h-16 text-primary mb-4 opacity-50" />
              {/* <h3 className="text-2xl font-bold text-gray-800 mb-2">Form Pengaduan Bullying</h3> */}
              {/* <p className="text-gray-500 max-w-md mx-auto mb-6">
                Ini adalah placeholder untuk Google Form sekolah. Hubungi guru BK untuk mendapatkan link form pengaduan resmi sekolah.
              </p> */}
              {/* <Button disabled variant="secondary" className="opacity-50 cursor-not-allowed">
                Form Belum Tersedia
              </Button> */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfQb-8VelYuz4YmFtaCKywDNhLTo4N8puiksI6orfsP5VdPDQ/viewform?embedded=true"
                width="100%"
                height="600"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
              Loading…
              </iframe>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center mt-6 text-gray-500 font-medium">
            Semua laporan akan ditangani secara rahasia oleh Guru Bimbingan Konseling (BK).
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Kontak() {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Butuh Bantuan?</h2>
            <p className="text-xl text-primary font-medium">Jangan ragu untuk meminta bantuan. Kamu tidak sendirian.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-white border-2 border-gray-100 p-8 rounded-3xl flex items-start gap-6 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guru BK</h3>
                <p className="text-gray-600">
                  Kunjungi ruang Bimbingan Konseling di SD Negeri Bibis saat jam istirahat untuk bercerita secara langsung.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white border-2 border-gray-100 p-8 rounded-3xl flex items-start gap-6 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-green-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kirim Pesan ke Sekolah</h3>
                <p className="text-gray-600 mb-4">
                  Kirimkan pesan ke Whatsapp sekolah jika kamu merasa lebih nyaman secara tertulis.
                </p>
                <a href="https://wa.me/6288985425509" className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors">
                  Chat WhatsApp <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            {/* <Shield className="w-6 h-6 text-secondary" /> */}
            <img
              src={schoolLogo}
              alt="Logo SD Bibis Kasihan"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <span>BIBIS BERANI</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <button onClick={() => scrollTo('beranda')} className="hover:text-white transition-colors">Beranda</button>
            <button onClick={() => scrollTo('edukasi')} className="hover:text-white transition-colors">Edukasi</button>
            <button onClick={() => scrollTo('pengaduan')} className="hover:text-white transition-colors">Pengaduan</button>
            <button onClick={() => scrollTo('kontak')} className="hover:text-white transition-colors">Kontak</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="mt-4 pt-4 text-center text-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <p>5827+4W2, Bibis, Bangunjiwo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2025 BIBIS BERANI. Bersama Hindari Bullying, Saling Menghargai dan Peduli.</p>
          <div className="flex items-center gap-1 text-slate-500">
            Dibuat dengan <Heart className="w-4 h-4 text-rose-500 mx-1" /> untuk Sekolah yang Aman
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Edukasi />
      <JenisBullying />
      <VideoEdukasi />
      <Pengaduan />
      <Kontak />
      <Footer />
    </div>
  );
}
