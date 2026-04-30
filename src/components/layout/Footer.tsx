import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { companyInfo } from "@/data/content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/[0.02] border-t border-foreground/5 pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-12 h-12 overflow-hidden border border-foreground/5 bg-white p-1">
                <Image
                  src="/logo.jpeg"
                  alt="B. N. Vaidya & Associates Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl leading-none text-foreground tracking-wide uppercase text-primary">
                  B. N. Vaidya & Associates
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Est. {companyInfo.foundedYear}
                </span>
              </div>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed font-sans max-w-sm">
              Chartered Accountants providing excellence in Direct Tax, GST, Audit, and Regulatory Services since {companyInfo.foundedYear}.
            </p>
          </div>

          {/* Nav Cols */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-serif text-lg text-foreground mb-6 tracking-wide italic">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-xs uppercase tracking-widest font-medium text-foreground/50 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out">
                      <ArrowRight className="h-3 w-3 mr-1" />
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-serif text-lg text-foreground mb-6 tracking-wide italic">Office</h3>
            <ul className="space-y-4 text-sm text-foreground/60 font-sans leading-relaxed">
              <li className="flex flex-col gap-2">
                <p>
                  {companyInfo.contact.address.line1}, {companyInfo.contact.address.line2}<br />
                  {companyInfo.contact.address.line3}<br />
                  {companyInfo.contact.address.city} - {companyInfo.contact.address.pincode}
                </p>
                <a 
                  href={companyInfo.contact.googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary flex items-center gap-2 hover:underline font-bold text-xs uppercase tracking-widest mt-2"
                >
                  <MapPin className="h-3 w-3" />
                  View on Google Maps
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{companyInfo.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.contact.emails[0]}`} className="hover:text-primary transition-colors">{companyInfo.contact.emails[0]}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-foreground/40 font-sans tracking-[0.2em] uppercase">
            © {currentYear} B. N. Vaidya & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
