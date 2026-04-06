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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-background" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Image Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <Image
            src="/home1.png"
            alt="Mumbai Skyline / Architecture"
            fill
            className="object-cover opacity-30 mix-blend-luminosity grayscale"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-sans tracking-[0.3em] text-primary uppercase">
                Est. {companyInfo.foundedYear}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[8rem] font-serif leading-[0.9] tracking-tight text-white mb-8"
            >
              Precision <br />
              <span className="text-zinc-500 italic">in Practice.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-zinc-400 font-sans max-w-2xl leading-relaxed mb-12"
            >
              {companyInfo.tagline} We deliver comprehensive financial, tax, and audit excellence tailored for ambitious enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden flex items-center justify-center w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative font-sans text-sm uppercase tracking-widest font-medium flex items-center gap-2">
                  Consult With Us
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="/about"
                className="group flex items-center gap-3 text-sm font-sans uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
                Discover our legacy
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Services Showcase */}
      <section className="py-32 relative bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Our <span className="italic text-primary">Expertise</span>
              </h2>
              <p className="text-zinc-400 font-sans max-w-md">
                A multidisciplinary approach to resolving the most complex financial and regulatory challenges.
              </p>
            </motion.div>
            
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-white transition-colors">
              View All Practices <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-500 relative"
              >
                <div className="text-primary font-serif text-5xl mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform origin-left">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 font-sans mb-12 line-clamp-3">
                  {service.shortDescription}
                </p>
                <Link 
                  href={`/services#${service.id}`}
                  className="absolute bottom-10 left-10 text-xs font-sans uppercase tracking-widest text-white/50 group-hover:text-white flex items-center gap-2 transition-colors"
                >
                  Explore <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Image & Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('/about1.png')] opacity-10 mix-blend-multiply bg-cover bg-center" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-8 leading-tight">
                Decades of trust, built on <span className="italic">uncompromising rigor.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-5xl font-serif text-primary-foreground font-bold mb-2">35+</div>
                  <div className="text-sm font-sans uppercase tracking-widest text-primary-foreground/70">Years of Legacy</div>
                </div>
                <div>
                  <div className="text-5xl font-serif text-primary-foreground font-bold mb-2">10k+</div>
                  <div className="text-sm font-sans uppercase tracking-widest text-primary-foreground/70">Audits Completed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] w-full"
            >
              <div className="absolute inset-4 border border-white/30 z-20" />
              <Image 
                src="/team1.jpeg" 
                alt="Partners at BNVCA" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
