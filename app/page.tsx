import { Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Guarantees from './components/Guarantees';
import ServiceArea from './components/ServiceArea';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCallButton from './components/MobileCallButton';
import SubmissionToast from './components/SubmissionToast';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <Guarantees />
        <CTA />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileCallButton />
      <Suspense fallback={null}>
        <SubmissionToast />
      </Suspense>
    </>
  );
}
