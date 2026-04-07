"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
              Terms of <span className="text-primary/20 italic font-light">Service.</span>
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
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Agreement to Terms</h2>
                <p>
                  By accessing or using the B.N. Vaidya & Associates website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Professional Disclaimer</h2>
                <p>
                  The information provided on this website is for general informational purposes only and does not constitute professional advice. Engagement of our services is subject to a formal agreement.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of B.N. Vaidya & Associates and is protected by intellectual property laws.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Limitation of Liability</h2>
                <p>
                  B.N. Vaidya & Associates shall not be liable for any damages arising from the use or inability to use this website or its content.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-foreground tracking-tight">Governing Law</h2>
                <p>
                  These terms are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
