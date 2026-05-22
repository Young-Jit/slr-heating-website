'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, GoogleLogo, Globe } from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1];

const reviews = [
  {
    name: 'Magdiel M.',
    platform: 'Google',
    rating: 5,
    text: 'Very prompt, identified the AC problem quickly. Amiable technician with reasonable cost. Highly recommend SLR for any HVAC needs.',
  },
  {
    name: 'Sugar S.',
    platform: 'Google',
    text: 'Installed a programmable thermostat and calibrated our HVAC system. Already noticing improved energy efficiency. Great work!',
    rating: 5,
  },
  {
    name: 'Mike O.',
    platform: 'Google',
    rating: 5,
    text: 'Excellent service from start to finish. Professional, thorough, and the pricing was exactly what they quoted. No surprises at all.',
  },
  {
    name: 'Verified Customer',
    platform: 'Yelp',
    rating: 5,
    text: 'Ilan was friendly and nice. Incredible communication and response time. Responded at 10pm and arrived at 10am the next day. Knowledgeable and polite.',
  },
  {
    name: 'Verified Customer',
    platform: 'Yelp',
    rating: 5,
    text: 'We worked with Ilan to have our fireplace, dryer vent and HVAC system cleaned. He was thorough, professional, and reasonably priced.',
  },
  {
    name: 'Verified Customer',
    platform: 'Directorii',
    rating: 5,
    text: 'The owner, Ilan is thoughtful about troubleshooting and finding the best solution. I have used this company for both my air/heating systems and my fireplace.',
  },
];

const stats = [
  { value: '5.0', label: 'Google Rating', sub: '90 reviews' },
  { value: '4.9', label: 'Yelp Rating', sub: '58 reviews' },
  { value: '179+', label: 'Total Reviews', sub: 'Across all platforms' },
  { value: '94', label: 'BuildZoom Score', sub: 'Top 24% in California' },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <span className="text-copper text-sm font-semibold tracking-widest uppercase">
            Real Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3">
            Your{' '}
            <span className="font-[family-name:var(--font-serif)] italic text-copper">
              Neighbors
            </span>{' '}
            Trust Us
          </h2>
          <p className="text-slate-light mt-4 max-w-2xl mx-auto text-lg">
            Don&apos;t take our word for it — here&apos;s what real customers across Google, Yelp, and Directorii have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-copper stat-enter">
                {stat.value}
              </p>
              <p className="text-navy font-semibold text-sm mt-1">{stat.label}</p>
              <p className="text-slate-light text-xs mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={`${review.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    weight="fill"
                    className="text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                <span className="text-navy font-semibold text-sm">
                  {review.name}
                </span>
                <span className="flex items-center gap-1 text-slate-light text-xs">
                  {review.platform === 'Google' && (
                    <GoogleLogo size={14} weight="bold" />
                  )}
                  {review.platform === 'Yelp' && (
                    <Globe size={14} weight="bold" />
                  )}
                  {review.platform === 'Directorii' && (
                    <Globe size={14} weight="bold" />
                  )}
                  {review.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.google.com/maps/place/SLR+Heating+and+Cooling/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-navy rounded-full transition-all text-sm font-medium"
          >
            <GoogleLogo size={18} weight="bold" />
            Read All Google Reviews
          </a>
          <a
            href="https://www.yelp.com/biz/slr-heating-and-cooling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-navy rounded-full transition-all text-sm font-medium"
          >
            <Globe size={18} weight="bold" />
            Read All Yelp Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}
