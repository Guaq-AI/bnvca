"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companyInfo, firmHistory } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Editorial Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <Image
            src="/about1.png"
            alt="BNVCA Office"
            fill
            className="object-cover opacity-20 mix-blend-luminosity grayscale"
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
                Our Legacy
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[0.9] tracking-tight text-white mb-8">
              Built on <span className="italic text-zinc-500">Integrity.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-sans max-w-2xl leading-relaxed">
              {companyInfo.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Editorial Layout */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                Our <span className="italic text-primary">Mission</span>
              </h2>
              <div className="text-lg text-zinc-400 font-sans leading-relaxed space-y-6">
                <p>{companyInfo.description}</p>
                <p>
                  For nearly four decades, B.N. Vaidya & Associates has been a cornerstone of financial 
                  clarity for our clients. We believe that Chartered Accountancy is more than just 
                  numbers—it's about building lasting relationships based on trust and precision.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7 relative"
            >
              <div className="absolute -inset-8 border border-white/5 z-0" />
              <div className="bg-zinc-950 p-10 md:p-16 relative z-10">
                <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-primary mb-12">Core Principles</h3>
                <ul className="space-y-8">
                  {[
                    "Uncompromising Integrity",
                    "Precision in Practice",
                    "Client-Centric Approach",
                    "Deep Industry Expertise"
                  ].map((value, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="text-primary font-serif italic text-xl mr-6 opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                      <span className="text-2xl font-serif text-white group-hover:text-primary transition-colors">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              The <span className="italic text-primary">Journey</span>
            </h2>
            <p className="text-zinc-500 font-sans mt-4 uppercase tracking-widest text-sm">Since {firmHistory.founded}</p>
          </motion.div>
          
          <div className="max-w-4xl">
            {firmHistory.milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 pb-16 border-b border-white/5 last:border-0 last:pb-0 mb-16 last:mb-0 group"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="text-5xl font-serif text-white opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
                    {milestone.year}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-xl font-sans text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
