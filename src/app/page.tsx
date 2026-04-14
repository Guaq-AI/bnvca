"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companyInfo, services } from "@/data/content";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Basic Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 border-b border-foreground/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 mb-10"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-[10px] font-sans tracking-[0.5em] text-primary uppercase font-bold">
                ESTABLISHED {companyInfo.foundedYear}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif leading-[1.1] text-foreground mb-10 tracking-tight"
            >
              Expertise in <span className="text-primary italic">Taxation, Audit & Advisory.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-foreground/70 font-sans max-w-2xl leading-relaxed mb-12 font-light"
            >
              {companyInfo.tagline} Trusted financial advisors serving businesses and individuals for nearly four decades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <Link href="/contact" className="btn-bezeled group">
                <span className="flex items-center gap-3">
                  Schedule a Consultation
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/services" className="text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/40 hover:text-primary transition-colors font-bold flex items-center gap-3">
                View All Services <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merged About Section */}
      <section className="py-32 relative bg-foreground/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-10">
                About the <span className="italic text-primary">Firm</span>
              </h2>
              <p className="text-xl text-foreground/70 font-sans leading-relaxed font-light mb-8">
                {companyInfo.description}
              </p>
              
              {/* Office Address Focus */}
              <div className="mt-16 p-8 border border-foreground/5 bg-background shadow-sm max-w-lg">
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-6 font-bold flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> Our Office
                </h3>
                <address className="not-italic text-lg text-foreground/80 font-sans leading-relaxed mb-6 font-light">
                  {companyInfo.contact.address.line1}, {companyInfo.contact.address.line2}<br />
                  {companyInfo.contact.address.line3}<br />
                  {companyInfo.contact.address.city} - {companyInfo.contact.address.pincode}
                </address>
                <a 
                  href={companyInfo.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-primary hover:gap-5 transition-all"
                >
                  Locate on Google Maps <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:pl-12"
            >
              <div className="bg-foreground/[0.03] p-10 md:p-12 border border-foreground/5">
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-12 font-bold text-center">CORE PRINCIPLES</h3>
                <ul className="space-y-10">
                  {[
                    "Uncompromising Integrity",
                    "Precision in Practice",
                    "Client-Centric Approach",
                    "Deep Industry Expertise"
                  ].map((value, i) => (
                    <li key={i} className="flex items-center group">
                      <span className="text-primary font-serif italic text-2xl mr-6 opacity-30">0{i+1}</span>
                      <span className="text-2xl font-serif text-foreground/80">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 border-t border-foreground/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Our <span className="italic text-primary">Expertise</span>
            </h2>
            <p className="text-foreground/60 font-sans max-w-2xl text-lg font-light">
              Providing comprehensive financial and regulatory solutions with professional gravity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-foreground/[0.02] p-10 border border-foreground/5 hover:border-primary/20 transition-all flex flex-col min-h-[350px]"
              >
                <div className="text-primary/20 font-serif text-5xl mb-8">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 font-sans mb-10 flex-grow font-light leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  href={`/services/${service.id}`}
                  className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary flex items-center gap-3 font-bold hover:gap-5 transition-all"
                >
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
