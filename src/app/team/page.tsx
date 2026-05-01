"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/data/content";
import { Briefcase, Check, Building2, Award } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Basic Hero - Professional Focus */}
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
                OUR PROFESSIONALS
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] tracking-tighter text-foreground mb-12">
              Deep-seated <span className="text-primary italic">Expertise.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-sans max-w-3xl leading-relaxed font-light">
              Meet the dedicated professionals at B.N. Vaidya & Associates. Built on a foundation of integrity and precision for nearly four decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members List */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-64">
            {team.map((member, index) => (
              <div key={member.name} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start`}>
                  
                  {/* Image Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2 lg:col-start-8' : ''}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden group border border-foreground/5 p-4 bg-foreground/[0.01]">
                      <div className="absolute inset-0 bg-primary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={`/team${index + 1}.jpeg`}
                          alt={member.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                          priority={index === 0}
                        />
                      </div>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute bottom-10 right-10 z-30 p-5 bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all shadow-2xl"
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
                    className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:col-start-6'} pt-12`}
                  >
                    <div className="mb-12">
                      <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-6 tracking-tight">
                        {member.name}
                      </h2>
                      <div className="flex items-center gap-6">
                        <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary font-bold">
                          {member.experience} EXP.
                        </p>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-16">
                      <p className="text-xl md:text-2xl text-foreground/70 font-sans leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>

                    {/* Additional Details Grid */}
                    <div className="grid grid-cols-1 gap-12">
                      
                      {/* Trade Bodies / Previous Experience Section */}
                      {(member.tradeBodies || member.previousExperience) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="bg-foreground/[0.02] border border-foreground/5 p-8 md:p-12"
                        >
                          <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-8 font-bold flex items-center gap-3">
                            {member.tradeBodies ? <Building2 className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                            {member.tradeBodies ? "ASSOCIATION WITH TRADE BODIES" : "PREVIOUS PROFESSIONAL EXPERIENCE"}
                          </h3>
                          <p className="text-lg text-foreground/60 font-sans leading-relaxed font-light">
                            {member.tradeBodies || member.previousExperience}
                          </p>
                        </motion.div>
                      )}

                      {/* Subject Expertise / Milestones */}
                      {member.subjectExpertise && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="space-y-10"
                        >
                          <div>
                            <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-8 font-bold flex items-center gap-3">
                              <Award className="h-3 w-3" /> SUBJECT MATTER EXPERTISE & CONTRIBUTIONS
                            </h3>
                            <p className="text-foreground/50 font-sans italic mb-8">{member.subjectExpertise.context}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                              {member.subjectExpertise.points.map((point, i) => (
                                <div key={i} className="flex items-start gap-4 group/point">
                                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0 opacity-40 group-hover/point:opacity-100 transition-opacity" />
                                  <span className="text-base text-foreground/70 font-sans leading-relaxed">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Key Expertise Block */}
                      <div className="pt-8 border-t border-foreground/5">
                        <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/30 mb-8 font-bold">CORE FOCUS AREAS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                          {member.expertise.map((item, i) => (
                            <div key={i} className="flex items-center text-foreground/70 font-sans group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-4 group-hover/item:bg-primary transition-colors" />
                              <span className="text-lg font-serif">{item}</span>
                            </div>
                          ))}
                        </div>
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
