"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Syringe, Sparkles, Pen, Package, Boxes, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "aesthetics", icon: Syringe, label: "Aesthetics", href: "/shop?category=Aesthetics", count: "124 ITEMS" },
  { id: "skin", icon: Sparkles, label: "Skin", href: "/shop?category=Skin", count: "89 ITEMS" },
  { id: "spmu", icon: Pen, label: "SPMU", href: "/shop?category=SPMU", count: "56 ITEMS" },
  { id: "kits", icon: Package, label: "Starter Kits", href: "/shop?category=Starter Kits", count: "12 ITEMS" },
  { id: "consumables", icon: Boxes, label: "Consumables", href: "/shop?category=Consumables", count: "210 ITEMS" },
];

export default function CategoriesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-40 bg-white border-t border-gray-50">
      <div className="container-custom">
        <div className="text-center mb-24">
          <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold block mb-6">
            Clinic Essentials
          </span>
          <h2 className="text-5xl lg:text-7xl text-[#171717] leading-tight font-display font-medium tracking-tight">
            Shop by Clinical <span className="italic font-light">Discipline.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((cat, i) => (
            <Link 
              key={cat.id} 
              href={cat.href}
              className={`group bg-white border border-gray-100 p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:border-transparent hover:-translate-y-3 rounded-sm ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-10 relative">
                 <div className="absolute inset-0 bg-[#fdf4fc] rounded-full scale-150 group-hover:scale-[1.8] transition-transform duration-500" />
                 <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="relative z-10 text-[#a6549e] group-hover:text-[#843a7a] transition-colors duration-300"
                 >
                    <cat.icon size={42} strokeWidth={1.5} />
                 </motion.div>
              </div>

              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold mb-4">
                {cat.count}
              </span>
              
              <h3 className="font-display text-2xl font-medium text-[#171717] mb-8 tracking-wide group-hover:text-[#a6549e] transition-colors">
                {cat.label}
              </h3>

              <div className="mt-auto flex items-center gap-2 text-[#171717] font-body text-[11px] tracking-[0.2em] uppercase font-bold opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:text-[#a6549e]">
                Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
