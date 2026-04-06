import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { team } from "@/data/content";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="down">
              <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Our Leadership
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Meet the experts behind B.N. Vaidya & Associates. A team dedicated to 
                precision, integrity, and your financial success.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="space-y-32">
            {team.map((member, index) => (
              <div key={member.name} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-2xl group">
                        <Image
                          src={`/team${index + 1}.jpeg`}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                            >
                              <Briefcase className="h-6 w-6" />
                            </a>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={0.3}>
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                            {member.name}
                          </h2>
                          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            {member.role}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center px-4 py-2 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                            <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                            {member.experience} Experience
                          </div>
                          <div className="flex items-center px-4 py-2 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                            <Award className="h-4 w-4 mr-2 text-blue-500" />
                            {member.specialization}
                          </div>
                        </div>

                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                          "{member.bio}"
                        </p>

                        <div className="space-y-4 pt-4">
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center">
                            <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                            Key Expertise
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {member.expertise.map((item, i) => (
                              <div key={i} className="flex items-center p-3 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-100 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
