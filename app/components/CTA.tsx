'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Star } from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 md:py-28 bg-copper relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} weight="fill" className="text-white" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Comfort Is Guaranteed —{' '}
            <br className="hidden md:block" />
            Or Your Money Back
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of Hollywood homeowners who trust SLR for all their
            heating and cooling needs. Get your free estimate today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-light text-white font-bold rounded-full transition-all active:scale-[0.98] text-lg"
            >
              Get My Free Estimate
              <ArrowRight size={20} weight="bold" />
            </a>
            <a
              href="tel:8188234006"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold rounded-full transition-all text-lg"
            >
              <Phone size={20} weight="fill" />
              (818) 823-4006
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
