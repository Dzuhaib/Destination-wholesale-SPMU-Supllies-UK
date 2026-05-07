"use client";

import { useEffect, useState } from "react";

const timeline = [
  {
    year: "2023",
    title: "The Genesis",
    desc: "Destination Wholesale was born from a passion for empowering aesthetic professionals with genuine, accessible products.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "Legacy",
    title: "Family-Led Integrity",
    desc: "A close-knit, family-operated company with shared values of integrity, quality, and clinical excellence.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "10+",
    title: "Decade of Expertise",
    desc: "Our leadership brings over a decade of hands-on industry knowledge, driving our mission and product curation.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "Mission",
    title: "Industry Evolution",
    desc: "We set out to combat misinformation, improve product distribution, and create a trusted supply chain for professionals.",
    image: "https://images.unsplash.com/photo-1570172619383-2ca050162231?auto=format&fit=crop&q=80&w=600"
  },
];

export default function StorySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 lg:py-40 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-[#a6549e] font-bold block mb-6">
            The Narrative
          </span>
          <h2 className="text-5xl lg:text-7xl text-[#171717] leading-tight font-display font-medium tracking-tight">
            A Story of <span className="italic font-light">Clinical Commitment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item, i) => (
            <div 
              key={i} 
              className={`group flex flex-col transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm mb-8">
                 <img 
                  src={item.image} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                  alt={item.title} 
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                 <div className="absolute top-6 left-6 text-white font-display text-4xl italic opacity-80">{item.year}</div>
              </div>
              <h3 className="font-body text-[14px] tracking-[0.2em] uppercase font-bold text-[#171717] mb-4">{item.title}</h3>
              <p className="font-body text-[14px] text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
