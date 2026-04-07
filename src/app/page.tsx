"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { companyInfo, services } from "@/data/content";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="flex flex-col min-h-screen bg-background" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 mb-12"
              >
                <div className="h-0.5 w-16 bg-primary" />
                <span className="text-[10px] font-sans tracking-[0.5em] text-primary uppercase font-bold">
                  ESTABLISHED {companyInfo.foundedYear}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-foreground mb-12"
              >
                Precision <br />
                <span className="text-primary italic font-light">in Practice.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-3xl text-foreground/70 font-sans max-w-2xl leading-relaxed mb-16 font-light"
              >
                {companyInfo.tagline} We provide unmatched excellence in Direct Tax, GST, Audit, and Regulatory Services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-10"
              >
                <Link href="/contact" className="btn-bezeled group">
                  <span className="flex items-center gap-3">
                    Consultation
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
                
                <Link 
                  href="/about"
                  className="group flex items-center gap-4 text-[10px] font-sans uppercase tracking-[0.4em] text-foreground/40 hover:text-primary transition-colors font-bold"
                >
                  <div className="h-14 w-14 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  Our Story
                </Link>
              </motion.div>
            </div>

            {/* Desktop Editorial Imagery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden lg:block lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-foreground/5 shadow-2xl">
                <Image 
                  src="/servicesexample1.png" 
                  alt="Architectural focus" 
                  fill 
                  className="object-cover grayscale sepia-[0.1] hover:scale-105 transition-transform duration-[5s]"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              
              <motion.div 
                style={{ y: y1 }}
                className="absolute -bottom-12 -left-12 bg-primary p-12 shadow-2xl z-30"
              >
                <div className="text-5xl font-serif text-white font-bold mb-2">35+</div>
                <div className="text-[10px] font-sans tracking-[0.4em] uppercase text-white/60 font-bold">Years of Excellence</div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Aesthetic Image Break */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] w-full"
          >
            <Image 
              src="/home1.png" 
              alt="Mumbai" 
              fill 
              className="object-cover grayscale brightness-110"
            />
            <div className="absolute inset-0 bg-background/20 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-6xl md:text-9xl font-serif italic opacity-80 tracking-tighter">Legacy of Rigor.</h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Services Showcase */}
      <section className="py-48 relative bg-foreground/[0.01] border-t border-foreground/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-serif text-foreground mb-8">
                Our <span className="italic text-primary">Expertise</span>
              </h2>
              <p className="text-foreground/60 font-sans max-w-md text-xl font-light leading-relaxed">
                A multidisciplinary approach to resolving the most complex financial and regulatory challenges.
              </p>
            </motion.div>
            
            <Link href="/services" className="btn-bezeled group !px-8 !py-3">
              <span className="flex items-center gap-3">
                All Practices
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/5">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-background p-14 group hover:bg-primary/[0.02] transition-colors duration-700 relative min-h-[450px] flex flex-col border border-transparent hover:border-primary/10"
              >
                <div className="text-primary font-serif text-7xl mb-12 opacity-20 group-hover:opacity-100 transition-all duration-700 tracking-tighter">
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-serif text-foreground mb-8 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base text-foreground/60 font-sans mb-12 line-clamp-4 font-light leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  href={`/services/${service.id}`}
                  className="mt-auto text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/30 group-hover:text-primary flex items-center gap-4 transition-all font-bold"
                >
                  Read Detailed Case Study <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Section - High Contrast Emerald */}
      <section className="py-48 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] -mr-[400px] -mt-[400px]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div className="space-y-6">
                <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-white/40 font-bold">LEGACY</div>
                <div className="text-8xl font-serif font-bold tracking-tighter">35+</div>
                <p className="text-xl font-sans text-white/60 leading-relaxed font-light italic">Years of delivering unmatched professional rigor.</p>
              </div>
              <div className="space-y-6">
                <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-white/40 font-bold">SCALE</div>
                <div className="text-8xl font-serif font-bold tracking-tighter">10k+</div>
                <p className="text-xl font-sans text-white/60 leading-relaxed font-light italic">Audits and statutory compliance reports completed.</p>
              </div>
              <div className="space-y-6">
                <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-white/40 font-bold">TRUST</div>
                <div className="text-8xl font-serif font-bold tracking-tighter">100%</div>
                <p className="text-xl font-sans text-white/60 leading-relaxed font-light italic">Adherence to the highest ethical and regulatory standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
