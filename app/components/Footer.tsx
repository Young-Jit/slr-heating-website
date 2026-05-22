'use client';

import { Flame, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-copper flex items-center justify-center">
                <Flame size={22} weight="fill" className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white text-lg tracking-tight">
                  SLR Heating
                </span>
                <br />
                <span className="text-copper text-xs tracking-widest uppercase font-semibold">
                  & Cooling
                </span>
              </div>
            </a>
            <p className="text-cream-dark/50 text-sm leading-relaxed">
              Hollywood&apos;s most trusted HVAC experts. Licensed, insured, and
              committed to your comfort. Serving the Greater LA area.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'AC Repair',
                'Furnace & Heater Repair',
                'HVAC Installation',
                'AC Maintenance',
                'Fireplace Cleaning',
                'Duct & Vent Cleaning',
                'Emergency Service',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-cream-dark/50 hover:text-copper transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Area</h4>
            <ul className="space-y-2">
              {[
                'Hollywood, CA',
                'Valley Village, CA',
                'North Hollywood, CA',
                'Burbank, CA',
                'Glendale, CA',
                'Studio City, CA',
                'Sherman Oaks, CA',
                'Pasadena, CA',
              ].map((area) => (
                <li key={area}>
                  <span className="text-cream-dark/50 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8188234006"
                  className="flex items-center gap-2 text-cream-dark/50 hover:text-copper transition-colors text-sm"
                >
                  <Phone size={16} weight="fill" className="text-copper" />
                  (818) 823-4006
                </a>
              </li>
              <li>
                <a
                  href="mailto:Ilanohaion85@gmail.com"
                  className="flex items-center gap-2 text-cream-dark/50 hover:text-copper transition-colors text-sm"
                >
                  <EnvelopeSimple size={16} weight="fill" className="text-copper" />
                  Ilanohaion85@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-cream-dark/50 text-sm">
                  <MapPin size={16} weight="fill" className="text-copper" />
                  Valley Village, CA 91607
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white font-semibold text-sm">Hours</p>
              <p className="text-cream-dark/50 text-sm mt-1">Mon–Sat: 7am – 8pm</p>
              <p className="text-cream-dark/50 text-sm">Emergency: 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-cream-dark/30 text-sm">
            &copy; {new Date().getFullYear()} SLR Heating & Cooling. All rights
            reserved.
          </p>
          <p className="text-cream-dark/30 text-xs">
            Licensed & Insured · Certified HVAC Technicians · Serving Los
            Angeles County
          </p>
        </div>
      </div>
    </footer>
  );
}
