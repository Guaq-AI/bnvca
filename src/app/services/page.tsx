import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { services } from "@/data/content";
import { CheckCircle2, ShieldCheck, Briefcase, Scale } from "lucide-react";

const icons = {
  "direct-tax-gst": ShieldCheck,
  "audit-assurance": Briefcase,
  "regulatory-services": Scale,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="down">
              <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Our Services
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Comprehensive financial and regulatory solutions tailored to your business needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = icons[service.id as keyof typeof icons] || Briefcase;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                      <div className="p-8 border border-zinc-100 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/50">
                        <Icon className="h-12 w-12 text-blue-600 mb-6" />
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                          {service.shortDescription}
                        </p>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {service.offerings.map((offering, i) => (
                          <div key={i} className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-700 dark:text-zinc-300">{offering}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Need a customized solution?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              Our experts are ready to help you navigate your specific financial challenges.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              Schedule a Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
