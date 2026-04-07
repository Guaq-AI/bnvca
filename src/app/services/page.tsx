"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Editorial Hero - Typographic Focus */}
      <section className="relative pt-40 pb-24 border-b border-foreground/5">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-sans tracking-[0.4em] text-primary uppercase font-bold">
                PRACTICE AREAS
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-foreground mb-12">
              Expertise & <span className="text-foreground/20 italic font-light">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-sans max-w-3xl leading-relaxed font-light">
              Comprehensive financial and regulatory solutions, delivered with uncompromising precision and deep domain knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Clean Editorial Layout */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-48">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-48">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start`}>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2 lg:col-start-8' : ''}`}
                  >
                    <div className="text-primary font-serif text-8xl mb-10 opacity-10 tracking-tighter">
                      0{index + 1}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-10 tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-xl text-foreground/60 font-sans mb-12 leading-relaxed font-light">
                      {service.shortDescription}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:col-start-7'}`}
                  >
                    <div className="bg-foreground/[0.02] border border-foreground/5 p-12 md:p-16 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />
                      <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/30 mb-12 font-bold">PRACTICE OFFERINGS</h3>
                      <ul className="space-y-8">
                        {service.offerings.map((offering, i) => (
                          <li key={i} className="flex items-start text-foreground/80 font-sans group/item">
                            <span className="text-primary mr-6 mt-2 text-[8px] opacity-40 group-hover/item:opacity-100 transition-opacity">◆</span>
                            <span className="text-xl md:text-2xl font-serif tracking-tight">{offering}</span>
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
