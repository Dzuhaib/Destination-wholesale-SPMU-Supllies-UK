"use client";

import { useEffect, useState } from "react";

export default function WelcomeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 lg:py-40 bg-white overflow-hidden border-b border-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold block mb-8">
                Introduction
              </span>
              <h2 className="text-5xl lg:text-7xl text-[#171717] leading-tight mb-12 font-display font-medium tracking-tight">
                Destination <span className="italic font-light">Wholesale.</span>
              </h2>
              <div className="w-20 h-px bg-[#a6549e] mb-12" />
              <p className="font-body text-[20px] md:text-[24px] text-[#171717] leading-relaxed font-medium italic">
                Your Trusted Aesthetics, Cosmetic, Beauty and SPMU/ SMP Supplier
              </p>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="font-body text-[18px] text-gray-700 leading-relaxed">
                Welcome to Destination Wholesale, part of the Destination Collective Group. Our purpose is to unite, elevate and empower beauty and aesthetics professionals through community, education, collaboration, and cutting-edge industry support.
              </p>
              <p className="font-body text-[16px] text-gray-600 leading-relaxed">
                Destination Wholesale is a reliable e-commerce store for Aesthetic Professionals, aestheticians, beauty therapists, medics, SPMU and tattoo professionals to buy the most popular products on the market. We also offer bespoke support and packages to training academies offering regulated qualifications Nationwide.
              </p>
              <p className="font-body text-[16px] text-gray-600 leading-relaxed">
                We pride ourselves on providing only the best products at the best rates to industry professionals. All our products are genuine, sourced direct from the manufacturer and where required have the required CE, UKCA, EU Rep, KFDA or FDA compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
