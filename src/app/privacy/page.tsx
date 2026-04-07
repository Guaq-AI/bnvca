"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
                LEGAL
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-foreground mb-12">
              Privacy <span className="text-primary/20 italic font-light">Policy.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-neutral prose-xl prose-invert dark:prose-invert">
            <div className="space-y-16 text-foreground/70 font-sans font-light leading-relaxed">
              <p className="text-2xl font-serif italic text-foreground/40 mb-20">
                Last Updated: April 7, 2026
              </p>
              
              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Introduction</h2>
                <p>
                  B.N. Vaidya & Associates ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, email address, phone number, and business details when you submit an inquiry through our consultation form or contact us directly.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">How We Use Your Information</h2>
                <p>
                  Your information is used solely to respond to your inquiries, provide requested professional services, and maintain our business relationship. We do not sell or share your data with third parties for marketing purposes.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. However, please be aware that no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at office@bnvca.co.in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
