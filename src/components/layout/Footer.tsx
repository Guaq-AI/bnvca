import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative large B */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        B
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 border border-primary/50 rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl leading-none text-white tracking-wide uppercase">
                  BNVCA
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 mt-1">
                  Est. 1987
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans max-w-sm">
              We provide unmatched excellence in Direct Tax, GST, Audit, and Regulatory Services. 
              Navigating financial complexity with precision and integrity.
            </p>
          </div>

          {/* Nav Cols */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center group">
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
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Mumbai Office</h3>
            <ul className="space-y-4 text-sm text-zinc-400 font-sans leading-relaxed">
              <li>
                Vaidya Bhavan, 92 Atmaram Merchant Road,<br />
                Mumbai, Maharashtra 400002, India
              </li>
              <li>
                <a href="tel:+912222087849" className="hover:text-primary transition-colors">+91 22 2208 7849</a>
              </li>
              <li>
                <a href="mailto:office@bnvca.co.in" className="hover:text-primary transition-colors">office@bnvca.co.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-600 font-sans tracking-wide uppercase">
            © {currentYear} BNVCA. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-zinc-600 hover:text-white transition-colors tracking-wide uppercase">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-zinc-600 hover:text-white transition-colors tracking-wide uppercase">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
