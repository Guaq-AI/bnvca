"use client";

import { motion } from "framer-motion";
import { companyInfo, firmHistory } from "@/data/content";

export default function AboutPage() {
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
                OUR LEGACY
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-foreground mb-12">
              Built on <span className="text-foreground/20 italic font-light">Integrity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-sans max-w-3xl leading-relaxed font-light">
              {companyInfo.tagline} We believe that Chartered Accountancy is more than just numbers—it's about building lasting relationships based on trust and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-10">
                Our <span className="italic text-primary">Mission</span>
              </h2>
              <div className="text-lg text-foreground/60 font-sans leading-relaxed space-y-8 font-light">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  {companyInfo.description}
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
              <div className="bg-foreground/[0.02] p-12 md:p-20 border border-foreground/5">
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-16 font-bold">CORE PRINCIPLES</h3>
                <ul className="space-y-12">
                  {[
                    "Uncompromising Integrity",
                    "Precision in Practice",
                    "Client-Centric Approach",
                    "Deep Industry Expertise"
                  ].map((value, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="text-primary font-serif italic text-2xl mr-8 opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                      <span className="text-3xl md:text-4xl font-serif text-foreground/80 group-hover:text-primary transition-colors tracking-tight">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 bg-foreground/[0.01] border-t border-foreground/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-foreground">
              The <span className="italic text-primary">Journey</span>
            </h2>
            <p className="text-foreground/40 font-sans mt-6 uppercase tracking-[0.3em] text-[10px] font-bold">SINCE {firmHistory.founded}</p>
          </motion.div>
          
          <div className="max-w-5xl">
            {firmHistory.milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:gap-24 pb-20 border-b border-foreground/5 last:border-0 last:pb-0 mb-20 last:mb-0 group"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="text-6xl md:text-7xl font-serif text-foreground opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-700 tracking-tighter">
                    {milestone.year}
                  </span>
                </div>
                <div className="md:w-3/4 flex items-center">
                  <p className="text-xl md:text-2xl font-sans text-foreground/60 leading-relaxed group-hover:text-foreground transition-colors font-light">
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
