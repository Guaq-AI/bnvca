"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/content";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Editorial Hero */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-sans tracking-[0.3em] text-primary uppercase">
                Connect
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[0.9] tracking-tight text-white mb-8">
              Let's <span className="italic text-zinc-500">Talk.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-sans max-w-2xl leading-relaxed">
              Have questions or need expert financial advice? We're here to help. Reach out to us to schedule a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-16"
            >
              <div>
                <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-zinc-500 mb-8">Mumbai Headquarters</h3>
                <div className="flex items-start text-zinc-300 font-sans text-lg leading-relaxed group">
                  <MapPin className="h-5 w-5 text-primary mr-4 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <p>
                    {companyInfo.contact.address.line1}<br />
                    {companyInfo.contact.address.line2}<br />
                    {companyInfo.contact.address.line3}<br />
                    {companyInfo.contact.address.city} - {companyInfo.contact.address.pincode}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-zinc-500 mb-8">Direct Lines</h3>
                <div className="space-y-6">
                  <div className="flex items-center text-zinc-300 font-sans text-lg group">
                    <Phone className="h-5 w-5 text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <p>{companyInfo.contact.phone}</p>
                  </div>
                  <div className="flex items-center text-zinc-300 font-sans text-lg group">
                    <Mail className="h-5 w-5 text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div>
                      {companyInfo.contact.emails.map((email, i) => (
                        <p key={i}>{email}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-zinc-500 mb-8">Business Hours</h3>
                <div className="flex items-start text-zinc-300 font-sans text-lg group">
                  <Clock className="h-5 w-5 text-primary mr-4 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <p className="mb-2">Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-zinc-500">Saturday: By Appointment</p>
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
              <div className="bg-zinc-950 border border-white/5 p-10 md:p-16">
                <h2 className="text-3xl font-serif text-white mb-10">Send a Message</h2>
                <ConsultationForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[500px] w-full bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-1000 border-t border-white/5">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.847582522438!2d72.8266447759639!3d18.93816595628643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e700000001%3A0x8f8f8f8f8f8f8f8f!2sVaidya%20Bhavan!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>

    </div>
  );
}
