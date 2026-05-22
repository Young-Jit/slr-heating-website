'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Snowflake,
  Flame,
  Wrench,
  Fan,
  Fire,
  Wind,
  Warning,
  CalendarCheck,
} from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1];

const services = [
  {
    icon: Snowflake,
    title: 'AC Repair',
    description:
      'Blowing warm air or not turning on? We diagnose and fix any AC issue fast — from refrigerant leaks to compressor failures. Parts on every truck for same-day repairs.',
    tag: 'Most Requested',
  },
  {
    icon: Flame,
    title: 'Furnace & Heater Repair',
    description:
      'A broken furnace can be dangerous. Our technicians restore your heat quickly and safely — gas and electric systems, with a safety inspection included.',
    tag: '24/7 Available',
  },
  {
    icon: Wrench,
    title: 'HVAC Installation',
    description:
      'Old system costing you more every month? A properly installed system can cut energy bills by up to 30%. Free in-home assessment and energy-efficient options.',
    tag: 'Save Up to 30%',
  },
  {
    icon: Fan,
    title: 'AC Maintenance',
    description:
      'Annual tune-ups extend equipment life, prevent breakdowns, and keep your system running at peak efficiency year-round.',
    tag: null,
  },
  {
    icon: Fire,
    title: 'Fireplace Cleaning',
    description:
      'Professional fireplace and chimney cleaning to ensure safe operation. Remove creosote buildup and improve draft performance.',
    tag: null,
  },
  {
    icon: Wind,
    title: 'Duct & Dryer Vent Cleaning',
    description:
      'Improve air quality and reduce fire risk with professional duct and dryer vent cleaning. Thorough inspection and debris removal.',
    tag: null,
  },
  {
    icon: CalendarCheck,
    title: 'Annual Maintenance Plans',
    description:
      'Priority scheduling, discounted repairs, and annual tune-ups to keep your system running reliably. Prevent costly breakdowns before they happen.',
    tag: null,
  },
  {
    icon: Warning,
    title: 'Emergency Service',
    description:
      'HVAC emergencies don\'t wait — neither do we. Available 24/7 for urgent heating and cooling issues. Fast dispatch, any time, any day.',
    tag: '24/7',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-20 md:py-28 bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <span className="text-copper text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3">
            What Can We{' '}
            <span className="font-[family-name:var(--font-serif)] italic text-copper">
              Fix
            </span>{' '}
            For You Today?
          </h2>
          <p className="text-slate-light mt-4 max-w-2xl mx-auto text-lg">
            From emergency repairs to full system installations — we handle
            every HVAC need with certified expertise and guaranteed results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group relative bg-white border border-stone-200 rounded-2xl p-6 hover:border-copper/30 hover:shadow-md transition-all duration-300"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-copper/10 text-copper border border-copper/20">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/15 transition-colors">
                <service.icon size={24} weight="duotone" className="text-copper" />
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
            <p className="text-navy font-semibold">
              AC or Heater Not Working? Don&apos;t Wait.
            </p>
            <a
              href="tel:8188234006"
              className="inline-flex items-center gap-2 px-6 py-3 bg-copper hover:bg-copper-light text-white font-semibold rounded-full transition-all active:scale-[0.98]"
            >
              Call (818) 823-4006
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
