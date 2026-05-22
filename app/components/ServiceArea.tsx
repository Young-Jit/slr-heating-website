'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, ArrowRight } from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1] as const;

const areas = [
  'Hollywood',
  'Valley Village',
  'North Hollywood',
  'Studio City',
  'Burbank',
  'Glendale',
  'Sherman Oaks',
  'Encino',
  'Toluca Lake',
  'Pasadena',
  'Los Feliz',
  'Silver Lake',
  'West Hollywood',
  'Santa Clarita',
  'Van Nuys',
  'Tarzana',
];

export default function ServiceArea() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 md:py-28 bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-copper text-sm font-semibold tracking-widest uppercase">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Serving{' '}
              <span className="font-[family-name:var(--font-serif)] italic text-copper">
                Los Angeles
              </span>{' '}
              &amp; Surrounding Areas
            </h2>
            <p className="text-slate-light text-lg mb-8 leading-relaxed">
              Based in Valley Village, we provide fast HVAC service across the
              San Fernando Valley, Hollywood, and Greater Los Angeles. Same-day
              dispatch available to all service areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-copper hover:bg-copper-light text-white font-semibold rounded-full transition-all active:scale-[0.98]"
              >
                Get Free Estimate
                <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="tel:8188234006"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-navy/15 hover:border-navy/30 text-navy font-semibold rounded-full transition-all"
              >
                <Phone size={18} weight="fill" className="text-copper" />
                (818) 823-4006
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="grid grid-cols-2 gap-2">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.04, ease }}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-stone-200 rounded-xl hover:border-copper/30 transition-colors"
                >
                  <MapPin
                    size={16}
                    weight="fill"
                    className="text-copper shrink-0"
                  />
                  <span className="text-slate text-sm font-medium">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
