"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, Award, Zap, Heart, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 lg:py-40 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Refined Asymmetrical Image Composition */}
          <div className={`relative transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
              <img 
                src="https://images.unsplash.com/photo-1570172619383-2ca050162231?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale-[30%] transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" 
                alt="Clinical Mastery" 
              />
              {/* Floating Badge */}
              <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-md p-8 border border-gray-100 shadow-2xl animate-soft-fade delay-500">
                 <div className="flex flex-col items-center text-center">
                    <Award size={32} className="text-[#a6549e] mb-4" />
                    <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-300 font-bold mb-1">Clinic Approved</span>
                    <span className="font-body text-[14px] text-[#171717] font-bold">Industry Standard</span>
                 </div>
              </div>
            </div>
            {/* Subtle frame accent */}
            <div className="absolute -inset-8 border border-gray-50 -z-10 translate-x-8 translate-y-8" />
          </div>

          {/* Right: Elegant Content Layout */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-px bg-[#a6549e]" />
               <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold">
                 Our Clinical Philosophy
               </span>
            </div>

            <h2 className="text-6xl lg:text-8xl text-[#171717] leading-tight mb-12 font-display font-medium tracking-tight">
              Elevating the <span className="italic font-light">Practitioner.</span>
            </h2>
            
            <div className="space-y-12 max-w-xl">
              <p className="font-body text-[17px] text-gray-500 leading-relaxed">
                Destination Wholesale is a dedicated enterprise within the Destination Collective Group, 
                purpose-built to bridge the gap between world-class product manufacturing 
                and the specialized requirements of elite UK clinics.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-12 border-t border-gray-100">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <CheckCircle size={18} className="text-[#a6549e]" />
                       <span className="font-body text-[13px] font-bold text-[#171717] uppercase tracking-widest">Genuine Sourcing</span>
                    </div>
                    <p className="font-body text-[13px] text-gray-400 leading-relaxed">Every product in our inventory is sourced directly from certified global manufacturers.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <CheckCircle size={18} className="text-[#a6549e]" />
                       <span className="font-body text-[13px] font-bold text-[#171717] uppercase tracking-widest">Direct Wholesale</span>
                    </div>
                    <p className="font-body text-[13px] text-gray-400 leading-relaxed">Competitive B2B pricing models designed to support your clinic&apos;s growth and sustainability.</p>
                 </div>
              </div>

              <div className="pt-12">
                 <Link href="/about" className="btn-outline">
                    Explore Our full Story
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
