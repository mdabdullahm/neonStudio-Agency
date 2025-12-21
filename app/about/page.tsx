// app/about/page.jsx
"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  if (!t) return null;

  // আমাদের ভ্যালুস ডাটা (স্ট্যাটিক)
  const values = [
    { title: "Innovation", desc: "We constantly push boundaries to create unique digital experiences.", icon: "🚀" },
    { title: "Quality", desc: "We never compromise on quality. Every pixel matters to us.", icon: "💎" },
    { title: "Integrity", desc: "We believe in honest communication and transparent processes.", icon: "🤝" },
    { title: "Passion", desc: "We love what we do, and that passion reflects in our work.", icon: "🔥" },
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      
      {/* === ১. হিরো হেডার === */}
      <section className="container mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.nav.about}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Neon Studio</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.about.desc}
          </p>
        </motion.div>
      </section>


      {/* === ২. আমাদের গল্প (Story Section) === */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ইমেজ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="Team working" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
          </motion.div>

          {/* টেক্সট */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{t.about.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2024, Neon Studio started with a simple mission: to help brands shine in the digital world. We combine creativity with technology to build websites and apps that not only look good but also perform exceptionally.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team consists of designers, developers, and strategists who are passionate about crafting digital solutions. Whether you are a startup or an established enterprise, we are here to help you grow.
            </p>
          </motion.div>

        </div>
      </section>


      {/* === ৩. আমাদের ভ্যালুস (Values Grid) === */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          <p className="text-gray-500 mt-2">What drives us every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}