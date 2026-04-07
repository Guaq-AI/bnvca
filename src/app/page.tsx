"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { companyInfo, services } from "@/data/content";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen bg-background" ref={containerRef}>
      
      {/* Editorial Hero Section - Clean & Typographic */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-sans tracking-[0.4em] text-primary uppercase font-bold">
                ESTABLISHED {companyInfo.foundedYear}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-foreground mb-10"
            >
              Precision <br />
              <span className="text-foreground/10 italic font-light">in Practice.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80 font-sans max-w-2xl leading-relaxed mb-16 font-light"
            >
              {companyInfo.tagline} We deliver comprehensive financial, tax, and audit excellence tailored for ambitious enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <Link 
                href="/contact" 
                className="group relative px-10 py-5 bg-primary text-primary-foreground overflow-hidden flex items-center justify-center w-full sm:w-auto transition-all hover:bg-foreground hover:text-background"
              >
                <span className="relative font-sans text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-3">
                  Consult With Us
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="/about"
                className="group flex items-center gap-4 text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors font-bold"
              >
                <div className="h-12 w-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
                The Legacy
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Services Showcase */}
      <section className="py-40 relative bg-foreground/[0.02] border-t border-foreground/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-8">
                Our <span className="italic text-primary">Expertise</span>
              </h2>
              <p className="text-foreground/60 font-sans max-w-md text-lg font-light leading-relaxed">
                A multidisciplinary approach to resolving the most complex financial and regulatory challenges.
              </p>
            </motion.div>
            
            <Link href="/services" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-primary hover:text-foreground transition-colors group">
              View All Practices <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/5">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-background p-12 group hover:bg-foreground/[0.03] transition-colors duration-700 relative min-h-[400px] flex flex-col border border-transparent hover:border-foreground/5"
              >
                <div className="text-primary font-serif text-6xl mb-10 opacity-20 group-hover:opacity-100 transition-all duration-700">
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-serif text-foreground mb-6 group-hover:text-primary transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 font-sans mb-12 line-clamp-4 font-light leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  href={`/services#${service.id}`}
                  className="mt-auto text-[10px] font-sans uppercase tracking-[0.2em] text-foreground/40 group-hover:text-foreground flex items-center gap-3 transition-colors font-bold"
                >
                  Explore <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Image & Stats Section - Simplified */}
      <section className="py-40 relative overflow-hidden bg-primary">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-primary-foreground mb-12 leading-[1.1]">
                Decades of trust, built on <span className="italic font-light text-primary-foreground/60">uncompromising rigor.</span>
              </h2>
              <div className="grid grid-cols-2 gap-12 mt-16">
                <div>
                  <div className="text-6xl font-serif text-primary-foreground font-bold mb-3 tracking-tighter">35+</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary-foreground/60 font-bold">Years of Legacy</div>
                </div>
                <div>
                  <div className="text-6xl font-serif text-primary-foreground font-bold mb-3 tracking-tighter">10k+</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary-foreground/60 font-bold">Audits Completed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] w-full"
            >
              <div className="absolute -inset-4 border border-primary-foreground/20 z-20 pointer-events-none" />
              <Image 
                src="/team1.jpeg" 
                alt="Leadership" 
                fill 
                className="object-cover grayscale mix-blend-luminosity opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
