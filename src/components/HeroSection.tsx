"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { ArrowRight, ChevronRight, Syringe, Sparkles, Pen, Package, Boxes } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Aesthetic and SPMU supplies for professionals",
    subtitle: "Premium Distribution",
    desc: "Providing uncompromised quality and certified medical-grade supplies for the UK's leading aesthetic practitioners and clinic owners.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1600",
    cta: "Explore Our Clinical Range",
    href: "/shop"
  },
  {
    title: "Wholesale aesthetic supplies in the UK",
    subtitle: "Direct Wholesale Access",
    desc: "Your primary source for genuine fillers, skin boosters, and SPMU products with rapid dispatch and professional verification.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1600",
    cta: "Access Wholesale Pricing",
    href: "/shop"
  }
];

const heroCategories = [
  { id: "aesthetics", icon: Syringe, label: "Aesthetics", href: "/shop?category=Aesthetics", count: "124 ITEMS" },
  { id: "skin", icon: Sparkles, label: "Skin", href: "/shop?category=Skin", count: "89 ITEMS" },
  { id: "spmu", icon: Pen, label: "SPMU", href: "/shop?category=SPMU", count: "56 ITEMS" },
  { id: "kits", icon: Package, label: "Starter Kits", href: "/shop?category=Starter Kits", count: "12 ITEMS" },
  { id: "consumables", icon: Boxes, label: "Consumables", href: "/shop?category=Consumables", count: "210 ITEMS" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen bg-white" />;

  return (
    <section className="relative bg-white pt-32 pb-20">
      <div className="container-custom py-10 md:py-20">
        
        {/* Main Hero Container - Full Width again */}
        <div className="relative h-[600px] md:h-[750px] w-full rounded-sm overflow-hidden bg-[#171717] group">
          
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            loop={true}
            className="h-full w-full absolute inset-0 z-0"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="relative h-full w-full">
                {/* Background with slight zoom effect */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={slide.image} 
                    className="h-full w-full object-cover transition-transform duration-[10000ms] ease-linear scale-110 active:scale-100"
                    alt={slide.title} 
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-24 w-full lg:w-2/3">
                  <div className="max-w-3xl drop-shadow-lg">
                    <div className="flex items-center gap-4 mb-10 animate-soft-fade">
                      <div className="w-12 h-px bg-white" />
                      <span className="font-body text-[11px] tracking-[0.5em] uppercase text-white font-bold drop-shadow-md">
                        {slide.subtitle}
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-7xl lg:text-7xl text-white leading-[1.05] mb-10 animate-soft-fade delay-200 font-display font-medium tracking-tight drop-shadow-md">
                      {slide.title}
                    </h1>

                    <p className="font-body text-[16px] md:text-[20px] text-white/90 leading-relaxed mb-16 max-w-xl animate-soft-fade delay-400 font-medium drop-shadow-md">
                      {slide.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-soft-fade delay-600">
                      <Link 
                        href={slide.href} 
                        className="group/btn relative inline-flex items-center gap-6 bg-white text-[#171717] px-10 py-6 overflow-hidden transition-all duration-500 rounded-sm"
                      >
                        <span className="relative z-10 font-body text-[12px] tracking-[0.3em] uppercase font-bold">{slide.cta}</span>
                        <ArrowRight size={18} className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-2" />
                        <div className="absolute inset-0 bg-[#a6549e] translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Side Solid Categories Slider */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-80 z-20 border-l border-gray-100 bg-white">
             <div className="h-full flex flex-col pt-10">
                <div className="px-10 mb-8 flex items-center justify-between">
                  <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[#171717] font-bold opacity-80">
                    Disciplines
                  </span>
                  <div className="w-8 h-px bg-[#a6549e]" />
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <Swiper
                    modules={[Autoplay]}
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={0}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    className="h-[550px] w-full"
                  >
                    {heroCategories.map((cat, idx) => (
                      <SwiperSlide key={idx}>
                        <Link 
                          href={cat.href}
                          className="group/cat flex items-center gap-6 px-10 h-full hover:bg-gray-50 transition-all duration-500 cursor-pointer border-b border-gray-50 last:border-0"
                        >
                          <div className="w-14 h-14 rounded-full bg-[#fdf4fc] flex items-center justify-center shrink-0 group-hover/cat:scale-110 transition-transform duration-500">
                            <cat.icon size={22} className="text-[#a6549e] transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-display text-[16px] text-[#171717] font-medium tracking-wide mb-1 group-hover/cat:translate-x-2 group-hover/cat:text-[#a6549e] transition-all duration-500">
                              {cat.label}
                            </h4>
                            <span className="font-body text-[8px] tracking-[0.2em] uppercase text-gray-400 font-bold group-hover/cat:text-[#171717] group-hover/cat:translate-x-2 transition-all duration-500 block">
                              Explore
                            </span>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
             </div>
          </div>
        </div>

        {/* Custom Pagination below slider */}
        <div className="flex items-center justify-between mt-12">
            <div className="custom-pagination flex gap-4 !w-auto" />
            <div className="hidden md:flex items-center gap-4">
              <span className="font-body text-[11px] tracking-[0.4em] uppercase text-gray-300 font-bold">UK Registered B2B Clinical Supplier</span>
            </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 50px;
          height: 3px;
          border-radius: 0;
          background: #E5E5E5;
          opacity: 1;
          transition: all 0.5s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #a6549e;
          width: 80px;
        }
      `}</style>
    </section>
  );
}
