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
      
      {/* Editorial Hero Section - Clean & High Contrast */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-5xl">
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
              className="text-xl md:text-3xl text-foreground/70 font-sans max-w-3xl leading-relaxed mb-16 font-light"
            >
              {companyInfo.tagline} A premier multidisciplinary firm providing unmatched excellence in Direct Tax, GST, Audit, and Regulatory Services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-10"
            >
              <Link href="/contact" className="btn-bezeled group">
                <span className="flex items-center gap-3">
                  Consult With Us
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
        </div>
      </section>

      {/* Editorial Services Showcase */}
      <section className="py-40 relative bg-foreground/[0.01] border-t border-foreground/5">
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
                <div className="text-primary font-serif text-7xl mb-12 opacity-10 group-hover:opacity-100 transition-all duration-700 tracking-tighter">
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
                  Read More <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Section - Refined Accents */}
      <section className="py-48 relative overflow-hidden bg-foreground/[0.02] border-t border-foreground/5">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div className="space-y-8 group">
                <div className="h-0.5 w-12 bg-primary/30 group-hover:w-20 transition-all duration-700" />
                <div>
                  <div className="text-8xl font-serif font-bold tracking-tighter text-foreground">35+</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-primary font-bold mt-4">YEARS OF LEGACY</div>
                </div>
                <p className="text-lg font-sans text-foreground/50 leading-relaxed font-light italic">
                  Built on a foundation of integrity and expert financial consultation since 1987.
                </p>
              </div>
              
              <div className="space-y-8 group">
                <div className="h-0.5 w-12 bg-primary/30 group-hover:w-20 transition-all duration-700" />
                <div>
                  <div className="text-8xl font-serif font-bold tracking-tighter text-foreground">10k+</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-primary font-bold mt-4">AUDITS COMPLETED</div>
                </div>
                <p className="text-lg font-sans text-foreground/50 leading-relaxed font-light italic">
                  Rigorous independent assessments providing transparency and building stakeholder trust.
                </p>
              </div>

              <div className="space-y-8 group">
                <div className="h-0.5 w-12 bg-primary/30 group-hover:w-20 transition-all duration-700" />
                <div>
                  <div className="text-8xl font-serif font-bold tracking-tighter text-foreground">100%</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.4em] text-primary font-bold mt-4">CLIENT INTEGRITY</div>
                </div>
                <p className="text-lg font-sans text-foreground/50 leading-relaxed font-light italic">
                  Unwavering commitment to the highest ethical and regulatory standards in every practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
