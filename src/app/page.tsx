import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { companyInfo, services } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "B.N. Vaidya & Associates",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vaidya Bhavan, 92 Atmaram Merchant Road",
      "addressLocality": "Mumbai",
      "postalCode": "400002",
      "addressCountry": "IN"
    },
    "telephone": "+91 22 2208 7849",
    "email": "office@bnvca.co.in",
    "url": "https://bnvca.co.in",
    "openingHours": "Mo-Fr 10:00-18:00"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="down" delay={0.1}>
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                Established {companyInfo.foundedYear}
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                {companyInfo.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
                {companyInfo.tagline}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Get a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Our Services
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Summary of Services */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <ScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Expertise across direct taxes, audit, and regulatory compliance tailored to your business needs.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={0.1 * (index + 1)} direction="up">
                <div className="p-8 h-full border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2">
                    {service.offerings.slice(0, 3).map((offering, i) => (
                      <li key={i} className="flex items-start text-sm text-zinc-500 dark:text-zinc-500">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/services#${service.id}`}
                    className="inline-flex items-center mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container px-4 mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to secure your financial future?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Partner with a firm that values integrity and precision. Let's discuss how we can support your growth.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-10 bg-white text-zinc-900 hover:bg-zinc-100">
                Contact Us Today
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
