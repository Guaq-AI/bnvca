import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { companyInfo } from "@/data/content";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="down">
              <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Get in Touch
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Have questions or need expert financial advice? We're here to help. 
                Reach out to us via the form or our contact details.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4">
                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">Our Office</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {companyInfo.contact.address.line1}<br />
                          {companyInfo.contact.address.line2}<br />
                          {companyInfo.contact.address.line3}<br />
                          {companyInfo.contact.address.city} - {companyInfo.contact.address.pincode}
                        </p>
                        <a 
                          href={companyInfo.contact.googleMapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                        >
                          View on Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4">
                        <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">Phone</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">{companyInfo.contact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">Email</h3>
                        {companyInfo.contact.emails.map((email, i) => (
                          <p key={i} className="text-zinc-600 dark:text-zinc-400">{email}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4">
                        <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">Office Hours</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Monday - Friday: 10:00 AM - 6:00 PM</p>
                        <p className="text-zinc-600 dark:text-zinc-400">Saturday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <div className="p-8 lg:p-12 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">Send us a Message</h2>
                  <ConsultationForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed (Optional but nice) */}
      <section className="h-[400px] w-full bg-zinc-200 dark:bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-700">
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
