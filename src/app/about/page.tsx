import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { companyInfo, firmHistory } from "@/data/content";
import { CheckCircle2, History, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="down">
              <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                About Our Firm
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {companyInfo.tagline}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Description */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative p-8 border border-zinc-100 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/50">
                <Target className="h-12 w-12 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Our Mission</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {companyInfo.description}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Built on Integrity</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  For nearly four decades, B.N. Vaidya & Associates has been a cornerstone of financial 
                  clarity for our clients. We believe that Chartered Accountancy is more than just 
                  numbers—it's about building lasting relationships based on trust and precision.
                </p>
                <ul className="space-y-4">
                  {[
                    "Uncompromising Integrity",
                    "Precision in Practice",
                    "Client-Centric Approach",
                    "Deep Industry Expertise"
                  ].map((value, i) => (
                    <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up" className="text-center mb-16">
              <History className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                Our Journey Since {firmHistory.founded}
              </h2>
            </ScrollReveal>
            
            <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 md:ml-0 md:left-1/2">
              {firmHistory.milestones.map((milestone, index) => (
                <div key={index} className="mb-12 relative">
                  <ScrollReveal 
                    direction={index % 2 === 0 ? "right" : "left"}
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:text-right"}`}
                  >
                    <div className="absolute top-0 -left-[9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-950" 
                         style={index % 2 === 0 ? { left: '-9px' } : { right: '-9px' }} />
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                      <span className="text-blue-600 font-bold text-xl mb-2 block">{milestone.year}</span>
                      <p className="text-zinc-700 dark:text-zinc-300">{milestone.event}</p>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
