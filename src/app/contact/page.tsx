"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/content";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Editorial Hero - Typographic Focus */}
      <section className="relative pt-48 pb-24 border-b border-foreground/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-0.5 w-16 bg-primary" />
              <span className="text-[10px] font-sans tracking-[0.5em] text-primary uppercase font-bold">
                CONNECT
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-foreground mb-12">
              Let's <span className="text-primary/20 italic font-light">Talk.</span>
            </h1>
            <p className="text-xl md:text-3xl text-foreground/70 font-sans max-w-3xl leading-relaxed font-light">
              Have questions or need expert financial advice? Reach out to schedule a confidential consultation with our senior partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            {/* Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-24"
            >
              <div>
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-10 font-bold">OFFICE</h3>
                <div className="flex items-start text-foreground/70 font-sans text-xl leading-relaxed group">
                  <MapPin className="h-6 w-6 text-primary mr-8 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <p className="font-light">
                    {companyInfo.contact.address.line1}<br />
                    {companyInfo.contact.address.line2}<br />
                    {companyInfo.contact.address.line3}<br />
                    {companyInfo.contact.address.city} - {companyInfo.contact.address.pincode}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-10 font-bold">DIRECT LINES</h3>
                <div className="space-y-12">
                  <div className="flex items-center text-foreground/70 font-sans text-xl group">
                    <Phone className="h-6 w-6 text-primary mr-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <p className="font-light">{companyInfo.contact.phone}</p>
                  </div>
                  <div className="flex items-start text-foreground/70 font-sans text-xl group">
                    <Mail className="h-6 w-6 text-primary mr-8 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <div className="font-light space-y-2">
                      {companyInfo.contact.emails.map((email, i) => (
                        <p key={i}>{email}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary mb-10 font-bold">BUSINESS HOURS</h3>
                <div className="flex items-start text-foreground/70 font-sans text-xl group">
                  <Clock className="h-6 w-6 text-primary mr-8 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="font-light">
                    <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-foreground/[0.02] border border-foreground/5 p-12 md:p-20 shadow-2xl shadow-primary/5">
                <h2 className="text-5xl font-serif text-foreground mb-16 tracking-tight leading-none">Send an <span className="italic text-primary">Inquiry</span></h2>
                <ConsultationForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Embed - Exact Pin for Vaidya Bhavan */}
      <section className="h-[600px] w-full bg-foreground/[0.05] grayscale contrast-[0.8] brightness-[1.1] hover:grayscale-0 transition-all duration-1000 border-t border-foreground/5 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.847582522438!2d72.8249574!3d18.9514261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf006680430f%3A0x1a2fde1ac7bb05e8!2sVaidya%20Bhavan!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Vaidya Bhavan Office Location"
        ></iframe>
      </section>

    </div>
  );
}
