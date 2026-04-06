"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <Image
            src="/services1.png"
            alt="BNVCA Services"
            fill
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
            priority
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-sans tracking-[0.3em] text-primary uppercase">
                Practice Areas
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[0.9] tracking-tight text-white mb-8">
              Expertise & <span className="italic text-zinc-500">Excellence.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-sans max-w-2xl leading-relaxed">
              Comprehensive financial and regulatory solutions, delivered with uncompromising precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center`}>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2 lg:col-start-8' : ''}`}
                  >
                    <div className="text-primary font-serif text-7xl mb-8 opacity-20">
                      0{index + 1}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-zinc-400 font-sans mb-10 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:col-start-7'}`}
                  >
                    <div className="bg-zinc-950 border border-white/5 p-10 md:p-12 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                      <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-zinc-500 mb-10">Offerings</h3>
                      <ul className="space-y-6">
                        {service.offerings.map((offering, i) => (
                          <li key={i} className="flex items-start text-zinc-300 font-sans">
                            <span className="text-primary mr-4 mt-1 text-xs">◆</span>
                            <span className="text-lg">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
