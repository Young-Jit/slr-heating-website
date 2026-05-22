'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, List, X, Flame } from '@phosphor-icons/react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Guarantees', href: '#guarantees' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-navy text-cream-dark text-xs md:text-sm py-2 px-4 flex justify-between items-center">
        <span className="tracking-wide uppercase">
          Serving Hollywood, Valley Village & Greater LA
        </span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot inline-block" />
            <span className="text-green-400 font-medium">24/7 Emergency</span>
          </span>
          <a
            href="mailto:Ilanohaion85@gmail.com"
            className="hidden md:block hover:text-copper transition-colors"
          >
            Ilanohaion85@gmail.com
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-stone-200/80'
            : 'bg-white border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-copper flex items-center justify-center group-hover:bg-copper-light transition-colors">
                <Flame size={22} weight="fill" className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-navy text-lg tracking-tight">
                  SLR Heating
                </span>
                <br />
                <span className="text-copper text-xs tracking-widest uppercase font-semibold">
                  & Cooling
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate hover:text-navy transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:8188234006"
                className="hidden sm:flex items-center gap-2 text-navy font-semibold"
              >
                <Phone size={18} weight="fill" className="text-copper" />
                <span>(818) 823-4006</span>
              </a>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-copper hover:bg-copper-light text-white font-semibold rounded-full transition-all active:scale-[0.98]"
              >
                Free Estimate
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-navy"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-white border-t border-stone-100"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 text-slate hover:text-navy hover:bg-stone-50 rounded-xl transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:8188234006"
                  className="mt-2 flex items-center justify-center gap-2 py-3 bg-copper text-white font-semibold rounded-full"
                >
                  <Phone size={18} weight="fill" />
                  Call (818) 823-4006
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
