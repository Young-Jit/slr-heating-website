'use client';

import { Phone } from '@phosphor-icons/react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:8188234006"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3.5 bg-copper hover:bg-copper-light text-white font-bold rounded-full shadow-lg shadow-copper/30 transition-all active:scale-[0.98]"
      aria-label="Call SLR Heating & Cooling"
    >
      <Phone size={20} weight="fill" />
      <span>Call Now</span>
    </a>
  );
}
