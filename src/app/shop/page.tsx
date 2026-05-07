"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Star, SlidersHorizontal, X, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { featuredProducts } from "@/components/FeaturedProducts";

const allCategories = ["All", "Aesthetics", "Skin", "SPMU", "Starter Kits", "Consumables"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under £50", min: 0, max: 50 },
  { label: "£50 – £150", min: 50, max: 150 },
  { label: "£150 – £300", min: 150, max: 300 },
  { label: "Over £300", min: 300, max: Infinity },
];

export function ShopCard({ product }: { product: typeof featuredProducts[0] }) {
  const { addItem } = useCart();
  
  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden group hover:shadow-2xl transition-all duration-700 flex flex-col h-full">
      <Link href={`/shop/${product.id}`} className="relative aspect-[4/5] overflow-hidden block bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
           {product.badge && (
            <span className="bg-[#a6549e] text-white font-body text-[9px] px-3 py-1 font-bold tracking-widest rounded-sm uppercase">
              {product.badge}
            </span>
          )}
          <div className="flex gap-1">
            {product.certs?.map(c => (
              <span key={c} className="bg-white/90 text-[#171717] font-body text-[8px] px-2 py-0.5 font-bold tracking-widest rounded-sm uppercase border border-gray-100">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold mb-4">{product.category}</div>
        <Link href={`/shop/${product.id}`}>
          <h2 className="text-2xl text-[#171717] leading-tight hover:text-[#a6549e] transition-colors mb-4 font-display font-medium tracking-tight">{product.name}</h2>
        </Link>
        
        <div className="flex items-center gap-1 mb-8">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} size={12} className={j < (product.rating || 5) ? "text-[#a6549e] fill-[#a6549e]" : "text-gray-100"} />
            ))}
          </div>
          <span className="font-body text-[11px] text-gray-400 ml-2">({product.reviews || 0})</span>
        </div>

        <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-body text-[20px] font-bold text-[#171717]">£{product.price.toFixed(2)}</span>
            <span className="font-body text-[9px] tracking-widest uppercase text-gray-300 font-bold">Excl. VAT</span>
          </div>
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
            className="w-12 h-12 bg-[#171717] text-white flex items-center justify-center hover:bg-[#a6549e] transition-all rounded-sm shadow-lg"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = featuredProducts.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const priceMatch = p.price >= activePriceRange.min && p.price < activePriceRange.max;
    return catMatch && priceMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return (b.rating || 5) - (a.rating || 5);
    return 0;
  });

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#171717] pt-48 pb-20 lg:pt-64 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="bg" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold block mb-6 animate-soft-fade">
            Professional Inventory
          </span>
          <h1 className="text-6xl lg:text-8xl text-white mb-8 font-display font-medium tracking-tight animate-soft-fade delay-200">
            Clinical <span className="italic font-light opacity-60">Collections.</span>
          </h1>
          <div className="w-20 h-px bg-[#a6549e] mx-auto animate-soft-fade delay-400" />
        </div>
      </div>

      <div className="container-custom py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Sidebar filters */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-32">
              <h3 className="font-body text-[11px] tracking-[0.4em] uppercase text-[#171717] font-bold mb-8 border-b border-gray-100 pb-4">Discipline</h3>
              <div className="flex flex-col gap-2 mb-16">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-6 py-4 font-body text-[13px] tracking-widest uppercase transition-all rounded-sm ${
                      activeCategory === cat
                        ? "bg-[#171717] text-white font-bold"
                        : "text-gray-400 hover:bg-gray-50 hover:text-[#a6549e]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="font-body text-[11px] tracking-[0.4em] uppercase text-[#171717] font-bold mb-8 border-b border-gray-100 pb-4">Investment</h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`w-full text-left px-6 py-4 font-body text-[13px] tracking-widest uppercase transition-all rounded-sm ${
                      activePriceRange.label === range.label
                        ? "bg-[#171717] text-white font-bold"
                        : "text-gray-400 hover:bg-gray-50 hover:text-[#a6549e]"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 pb-8 border-b border-gray-50 gap-6">
              <span className="font-body text-[13px] text-gray-400 tracking-wider">
                Exhibiting <span className="text-[#171717] font-bold">{sorted.length}</span> professional results
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 border border-[#171717] px-6 py-3 font-body text-[11px] uppercase tracking-widest font-bold rounded-sm"
                >
                  <SlidersHorizontal size={14} /> Refine
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-100 px-6 py-3 font-body text-[11px] tracking-widest uppercase font-bold text-[#171717] focus:outline-none focus:border-[#a6549e] rounded-sm appearance-none cursor-pointer"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Professional Rating</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sorted.map((product) => (
                <ShopCard key={product.id} product={product} />
              ))}
            </div>

            {sorted.length === 0 && (
              <div className="text-center py-20 lg:py-40 border border-gray-50 rounded-sm">
                <ShoppingBag size={64} className="text-gray-50 mx-auto mb-8" />
                <h3 className="text-3xl text-[#171717] mb-4 font-display">No Results Found</h3>
                <p className="font-body text-[15px] text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">Adjust your clinical filters to explore more professional products.</p>
                <button onClick={() => { setActiveCategory("All"); setActivePriceRange(priceRanges[0]); }} className="btn-primary">
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-[#171717]/80 backdrop-blur-md animate-soft-fade" onClick={() => setFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-10 shadow-2xl animate-soft-fade">
             <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-display font-medium">Refine Search</h3>
              <button onClick={() => setFiltersOpen(false)} className="text-[#171717] hover:text-[#a6549e] transition-colors"><X size={24} /></button>
            </div>
            <div className="space-y-12">
              <div>
                <h4 className="font-body text-[10px] tracking-[0.4em] uppercase text-[#a6549e] font-bold mb-6">Discipline</h4>
                <div className="flex flex-col gap-2">
                   {allCategories.map((cat) => (
                    <button key={cat} onClick={() => { setActiveCategory(cat); setFiltersOpen(false); }}
                      className={`text-left px-6 py-4 font-body text-[12px] tracking-widest uppercase border rounded-sm transition-all ${activeCategory === cat ? "bg-[#171717] text-white border-[#171717] font-bold" : "bg-white border-gray-100 text-gray-400"}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
