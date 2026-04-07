"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/content";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Schema for AI/Google ingestion
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "AccountingService",
      "name": "B.N. Vaidya & Associates",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vaidya Bhavan, 92 Atmaram Merchant Road",
        "addressLocality": "Mumbai",
        "postalCode": "400002",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Editorial Header */}
      <section className="relative pt-40 pb-20 border-b border-foreground/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/services" 
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-12 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              All Practices
            </Link>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif leading-[0.85] tracking-tighter text-foreground mb-12">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "italic text-primary/40 font-light" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-xl md:text-3xl text-foreground/70 font-sans max-w-4xl leading-relaxed font-light">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            {/* Offerings Column */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-12 font-bold">DETAILED OFFERINGS</h3>
                <ul className="space-y-8">
                  {service.offerings.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mr-6 mt-1 opacity-30 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="text-xl font-serif text-foreground/80 leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study Column */}
            {service.caseStudy && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="bg-foreground/[0.02] border border-foreground/5 p-12 md:p-20 shadow-2xl shadow-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/10 -mr-4 -mt-4" />
                  
                  <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-12 font-bold">CASE STUDY</h3>
                  <h4 className="text-4xl md:text-5xl font-serif text-foreground mb-12 tracking-tight leading-tight italic">
                    {service.caseStudy.title}
                  </h4>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-foreground/5 pt-8">
                      <div className="md:col-span-3 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30">Context</div>
                      <div className="md:col-span-9 text-lg font-sans text-foreground/70 font-light leading-relaxed">{service.caseStudy.context}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-foreground/5 pt-8">
                      <div className="md:col-span-3 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30">Challenge</div>
                      <div className="md:col-span-9 text-lg font-sans text-foreground/70 font-light leading-relaxed">{service.caseStudy.challenge}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-foreground/5 pt-8">
                      <div className="md:col-span-3 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30">Solution</div>
                      <div className="md:col-span-9 text-lg font-sans text-foreground/70 font-light leading-relaxed">{service.caseStudy.solution}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-primary/20 pt-8">
                      <div className="md:col-span-3 text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Outcome</div>
                      <div className="md:col-span-9 text-xl md:text-2xl font-serif text-foreground leading-relaxed italic">{service.caseStudy.outcome}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* CTA Section - Fixed Centering */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-16 tracking-tight italic text-white">
            Ready to solve your <br className="hidden md:block" /> financial complexity?
          </h2>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-bezeled !bg-white !text-primary !border-white group">
              <span className="flex items-center gap-3">
                Schedule Consultation
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
