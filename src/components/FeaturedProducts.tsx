"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const featuredProducts = [
  {
    id: "revolax-deep",
    name: "Revolax Deep with Lidocaine",
    category: "Aesthetics",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    description: "Industry leading filler for deep-tissue enhancement and contouring.",
    badge: "Bestseller",
    certs: ["CE", "UKCA"],
    rating: 5,
    reviews: 124
  },
  {
    id: "profhilo-skin",
    name: "Profhilo H+L 2ml",
    category: "Skin",
    price: 78.00,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-pure bio-remodelling treatment for intensive hydration and skin quality.",
    badge: "Premium",
    certs: ["CE", "FDA"],
    rating: 5,
    reviews: 89
  },
  {
    id: "tina-davies-ink",
    name: "Tina Davies I Love Ink Set",
    category: "SPMU",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1595152248441-c3a882b35a9a?auto=format&fit=crop&q=80&w=800",
    description: "The professional's choice for SPMU pigments and microblading artistry.",
    badge: "Professional",
    certs: ["EU REP"],
    rating: 5,
    reviews: 56
  },
  {
    id: "foundation-filler-kit",
    name: "Foundation Dermal Filler Kit",
    category: "Starter Kits",
    price: 195.00,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive clinical bundle designed for starting aesthetic practices.",
    badge: "Special Offer",
    certs: ["UKCA"],
    rating: 4,
    reviews: 32
  },
  {
    id: "clinell-wipes-bulk",
    name: "Clinell Universal Wipes",
    category: "Consumables",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    description: "NHS-grade multi-purpose clinical disinfection for all professional health spaces.",
    badge: "Bulk Buy",
    certs: ["CE"],
    rating: 5,
    reviews: 210
  },
  {
    id: "juvederm-ultra-3",
    name: "Juvederm Ultra 3",
    category: "Aesthetics",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1570172619383-2ca050162231?auto=format&fit=crop&q=80&w=800",
    description: "Versatile hyaluronic acid filler for medium to deep facial folds.",
    badge: "New",
    certs: ["CE", "FDA"],
    rating: 5,
    reviews: 45
  },
  {
    id: "dermapen-4-needles",
    name: "Dermapen 4 Replacement Tips",
    category: "Skin",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    description: "Sterile replacement tips for Dermapen 4 micro-needling device.",
    badge: "Essential",
    certs: ["CE"],
    rating: 5,
    reviews: 78
  },
  {
    id: "perma-blend-lip-set",
    name: "Perma Blend Lip Set",
    category: "SPMU",
    price: 140.00,
    image: "https://images.unsplash.com/photo-1595152248441-c3a882b35a9a?auto=format&fit=crop&q=80&w=800",
    description: "High-concentration lip pigments for long-lasting SPMU results.",
    badge: "Trending",
    certs: ["KFDA"],
    rating: 5,
    reviews: 34
  }
];

export function ProductCard({ product }: { product: typeof featuredProducts[0] }) {
  const { addItem } = useCart();

  return (
    <div className="product-card-minimal group bg-white border border-gray-100 p-6 flex flex-col h-full rounded-sm hover:shadow-2xl transition-all duration-700">
      <Link href={`/shop/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-8 rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-[#a6549e] text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
            {product.badge}
          </div>
        )}
      </Link>
      
      <div className="flex flex-col flex-grow">
        <div className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold mb-4">{product.category}</div>
        <Link href={`/shop/${product.id}`}>
          <h3 className="text-2xl text-[#171717] leading-tight hover:text-[#a6549e] transition-colors mb-4 font-display font-medium tracking-tight">{product.name}</h3>
        </Link>
        <p className="font-body text-[13px] text-gray-400 line-clamp-2 leading-relaxed mb-8">{product.description}</p>
        
        <div className="mt-auto flex flex-col gap-6">
           <div className="flex items-baseline justify-between">
              <span className="font-body text-[20px] font-bold text-[#171717]">£{product.price.toFixed(2)}</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-gray-300 font-bold">Excl. VAT</span>
           </div>
           <button
             onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
             className="w-full bg-[#171717] text-white py-4 font-body text-[11px] tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-3 hover:bg-[#a6549e] transition-all rounded-sm shadow-lg group-hover:shadow-[#a6549e]/20"
           >
             <ShoppingBag size={16} />
             Add to Order
           </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-40 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold mb-6 block">
              Curated Supplies
            </span>
            <h2 className="text-6xl lg:text-8xl text-[#171717] leading-tight font-display font-medium tracking-tight">
              Elite Clinical <span className="italic font-light">Inventory.</span>
            </h2>
          </div>
          <Link href="/shop" className="group flex items-center gap-4 font-body text-[12px] tracking-[0.3em] uppercase font-bold text-[#171717] hover:text-[#a6549e] transition-all">
            Browse Full Shop <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 4).map((product, i) => (
            <div 
              key={product.id}
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
