"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Destination Wholesale has completely transformed how I source my aesthetics products. Sourced with integrity, delivered with precision.",
    name: "Dr. Roxy L.",
    role: "Aesthetic Doctor",
  },
  {
    text: "The clinical standards here are unmatched. As a practitioner, I need to trust my supply chain completely. Destination ticks every box.",
    name: "James M.",
    role: "Aesthetic Nurse Practitioner",
  },
  {
    text: "A family-run business with the professional scale of a global enterprise. Their support is as refined as their product range.",
    name: "Jennifer S.",
    role: "SPMU Specialist",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-20">
            <div className="max-w-xs shrink-0">
               <span className="font-body text-[10px] tracking-[0.5em] uppercase text-[#a6549e] mb-6 block font-bold">
                Professional Voice
              </span>
              <h2 className="text-4xl lg:text-5xl text-[#171717] leading-tight font-display font-medium tracking-tight">
                Trust <span className="italic font-light text-gray-200">Refined.</span>
              </h2>
            </div>

            <div className="flex-1">
               <div className="relative min-h-[220px] flex flex-col justify-center">
                  <p key={current} className="text-2xl md:text-3xl lg:text-4xl text-[#171717] leading-[1.2] mb-10 animate-soft-fade font-display italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-px bg-[#a6549e]" />
                    <div>
                      <div className="font-body text-[12px] font-bold text-[#171717] uppercase tracking-[0.2em]">{testimonials[current].name}</div>
                      <div className="font-body text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">{testimonials[current].role}</div>
                    </div>
                  </div>
               </div>

               <div className="flex gap-2 mt-12">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrent(i)}
                      className={`h-[2px] transition-all duration-1000 ${i === current ? 'w-12 bg-[#a6549e]' : 'w-3 bg-gray-100 hover:bg-gray-200'}`}
                    />
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
