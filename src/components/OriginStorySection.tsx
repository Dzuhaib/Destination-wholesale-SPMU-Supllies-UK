"use client";

import { useEffect, useState } from "react";

export default function OriginStorySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 lg:py-40 bg-white border-y border-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold block mb-6">
              Our Heritage
            </span>
            <h2 className="text-5xl lg:text-7xl text-[#171717] leading-tight font-display font-medium tracking-tight">
              Where it all <span className="italic font-light">began…</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-24">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-body text-[17px] text-[#171717] leading-relaxed font-semibold">
                We are an independent family run business Founded in 2023. Our CEO has worked in the industry for more than 10 years, is post graduate qualified and currently training up to level 7 in aesthetics.
              </p>
              <p className="font-body text-[16px] text-gray-500 leading-relaxed">
                It all started with a clinic and a dream, and a frustration about people being mis-sold or misinformed about the products! With a passion for products and science our CEO began the mission to change how products were distributed and sold in the UK, and so Destination was born! 
              </p>
              <p className="font-body text-[16px] text-gray-500 leading-relaxed">
                The main B2B powerhouse – products, logistics, & e-commerce, because when it comes to products, your clinic is the destination.
              </p>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-body text-[16px] text-gray-500 leading-relaxed">
                At Destination we believe in raising standards, promoting ethical practice, and championing the professionals who drive this industry forward. Destination as a company and brand, exists to help you thrive — with the support, recognition, and community you deserve.
              </p>
              <p className="font-body text-[16px] text-gray-500 leading-relaxed">
                Our goal is to unify & uplift professionals working across aesthetics, beauty, and PMU. We were built by industry experts who understand the challenges and opportunities you face, and we can help.
              </p>
              <div className="bg-[#FAF8F4] p-10 border border-gray-100 italic font-body text-[16px] text-[#171717] leading-relaxed">
                &ldquo;Our service not only offers the best products but educates practitioners on what the products are, how best to use and combines them to get the best outcome for the clients. We believe that education and support with choosing the right products is essential to providing the best and safest treatments possible.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
