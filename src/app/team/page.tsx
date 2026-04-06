"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/data/content";
import { Briefcase } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <Image
            src="/team1.jpeg"
            alt="BNVCA Leadership"
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
                The Partners
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[0.9] tracking-tight text-white mb-8">
              Leadership & <span className="italic text-zinc-500">Vision.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-sans max-w-2xl leading-relaxed">
              Meet the experts behind B.N. Vaidya & Associates. A team dedicated to precision, integrity, and your financial success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members List */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-40">
            {team.map((member, index) => (
              <div key={member.name} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start`}>
                  
                  {/* Image Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2 lg:col-start-8' : ''}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700" />
                      <Image
                        src={`/team${index + 1}.jpeg`}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-20" />
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute bottom-6 right-6 z-30 p-4 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                        >
                          <Briefcase className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:col-start-7'} pt-8`}
                  >
                    <div className="mb-12">
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                        {member.name}
                      </h2>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-sans uppercase tracking-[0.2em] text-primary">
                          {member.role}
                        </p>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                        <p className="text-sm font-sans text-zinc-500">
                          {member.experience} Exp.
                        </p>
                      </div>
                    </div>

                    <p className="text-2xl font-serif text-zinc-400 italic leading-relaxed mb-12">
                      "{member.bio}"
                    </p>

                    <div className="bg-zinc-950 border border-white/5 p-8">
                      <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-zinc-500 mb-8">Key Expertise</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        {member.expertise.map((item, i) => (
                          <div key={i} className="flex items-start text-zinc-300 font-sans">
                            <span className="text-primary mr-3 text-xs mt-1.5">◆</span>
                            <span className="text-base">{item}</span>
                          </div>
                        ))}
                      </div>
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
