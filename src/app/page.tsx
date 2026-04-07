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
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="flex flex-col min-h-screen bg-background" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        
        {/* Floating Aesthetic Elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] right-[5%] w-64 h-96 border border-primary/10 pointer-events-none hidden lg:block"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] left-[2%] w-48 h-48 rounded-full border border-primary/5 pointer-events-none hidden lg:block"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
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
                <span className="text-primary/20 italic font-light">in Practice.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-3xl text-foreground/70 font-sans max-w-2xl leading-relaxed mb-16 font-light"
              >
                {companyInfo.tagline} A multidisciplinary firm dedicated to financial clarity and regulatory excellence.
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

            {/* Desktop-only Editorial Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden lg:block lg:col-span-4 relative aspect-[3/4] border border-foreground/5 p-6 bg-foreground/[0.01]"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/home1.png')] opacity-[0.07] grayscale mix-blend-multiply pointer-events-none" />
              <div className="relative w-full h-full border border-primary/10 overflow-hidden">
                <Image 
                  src="/servicesexample1.png" 
                  alt="Architectural detail" 
                  fill 
                  className="object-cover grayscale opacity-40 hover:scale-110 transition-transform duration-[3s] ease-linear"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-8 border border-foreground/5 shadow-2xl">
                <div className="text-4xl font-serif text-primary font-bold mb-1">35+</div>
                <div className="text-[8px] font-sans tracking-[0.3em] uppercase text-foreground/40 font-bold">Years of Trust</div>
              </div>
            </motion.div>

          </div>
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
              <p className="text-foreground/50 font-sans max-w-md text-xl font-light leading-relaxed">
                Navigating complex financial landscapes with precision and unmatched professional rigor.
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
                <div className="text-primary font-serif text-7xl mb-12 opacity-10 group-hover:opacity-100 transition-all duration-700 tracking-tighter">
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-serif text-foreground mb-8 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base text-foreground/50 font-sans mb-12 line-clamp-4 font-light leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  href={`/services#${service.id}`}
                  className="mt-auto text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/30 group-hover:text-primary flex items-center gap-4 transition-all font-bold"
                >
                  Learn More <div className="h-px w-0 group-hover:w-8 bg-primary transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust Section - Clean Typography */}
      <section className="py-48 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] -mr-[400px] -mt-[400px]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif mb-16 leading-tight tracking-tight"
            >
              Decades of trust, built on <span className="italic opacity-50 font-light">uncompromising rigor.</span>
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-16 border-t border-white/10">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold mb-4 tracking-tighter">35+</div>
                <div className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-50 font-bold">Years of Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-serif font-bold mb-4 tracking-tighter">10k+</div>
                <div className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-50 font-bold">Audits Completed</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-6xl font-serif font-bold mb-4 tracking-tighter">100%</div>
                <div className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-50 font-bold">Client Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
