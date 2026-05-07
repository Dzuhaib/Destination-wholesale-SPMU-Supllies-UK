"use client";

import { use } from "react";
import { useCart } from "@/context/CartContext";
import { featuredProducts, ProductCard } from "@/components/FeaturedProducts";
import Link from "next/link";
import { Star, Shield, ShoppingBag, ChevronRight, Truck, Award, ArrowRight } from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addItem } = useCart();

  const product = featuredProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center border-t border-gray-50">
        <div className="text-center">
          <ShoppingBag size={48} className="text-gray-100 mx-auto mb-8" />
          <h1 className="text-4xl text-[#171717] mb-8 font-display">Product Not Found</h1>
          <Link href="/shop" className="btn-primary">Return to Directory</Link>
        </div>
      </div>
    );
  }

  const related = featuredProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-50 pt-48 lg:pt-64 pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3 font-body text-[10px] tracking-widest uppercase font-bold text-gray-400">
            <Link href="/" className="hover:text-[#a6549e] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/shop" className="hover:text-[#a6549e] transition-colors">Shop</Link>
            <ChevronRight size={10} />
            <span className="text-[#171717]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-100 group">
               <img 
                 src={product.image} 
                 className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" 
                 alt={product.name} 
               />
              
              {/* Cert badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                {product.badge && (
                  <span className="bg-[#a6549e] text-white font-body text-[10px] px-4 py-1.5 font-bold tracking-widest rounded-sm uppercase shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold mb-4">
              {product.category}
            </div>

            <h1 className="text-4xl lg:text-6xl text-[#171717] mb-6 font-display font-medium tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < product.rating ? "text-[#a6549e] fill-[#a6549e]" : "text-gray-100"} />
                ))}
              </div>
              <span className="font-body text-[11px] font-bold text-gray-400 ml-2 uppercase tracking-widest">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-10 pb-10 border-b border-gray-50 flex-wrap">
              <span className="font-body text-4xl font-bold text-[#171717]">£{product.price.toFixed(2)}</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-gray-300 font-bold">Excl. VAT</span>
              {product.originalPrice && (
                <span className="font-body text-xl text-gray-300 line-through ml-2 sm:ml-4">£{product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <p className="font-body text-[15px] text-gray-500 leading-relaxed mb-12">
              {product.description}
            </p>

            {/* Certifications */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-[#a6549e]" />
                <span className="font-body text-[10px] tracking-widest uppercase font-bold text-gray-400">Clinical Certs: </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.certs.map((cert) => (
                  <span key={cert} className="border border-gray-200 text-[#171717] px-3 py-1 font-body text-[10px] tracking-widest font-bold rounded-sm uppercase bg-gray-50">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="w-full bg-[#171717] text-white py-5 font-body text-[12px] tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-3 hover:bg-[#a6549e] transition-all rounded-sm shadow-lg mb-12 group"
            >
              <ShoppingBag size={18} className="group-hover:-translate-y-1 transition-transform" />
              Add to Requisition
            </button>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              {[
                { icon: Truck, label: "Fast UK Delivery", sub: "Same day dispatch" },
                { icon: Award, label: "Genuine Products", sub: "Direct from manufacturer" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-4 p-4 border border-gray-50 rounded-sm bg-gray-50/50">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 rounded-sm shadow-sm">
                    <b.icon size={18} className="text-[#a6549e]" />
                  </div>
                  <div>
                    <div className="font-body text-[11px] uppercase tracking-widest font-bold text-[#171717] mb-1">{b.label}</div>
                    <div className="font-body text-[10px] text-gray-400">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 lg:mt-32 pt-16 lg:pt-20 border-t border-gray-50">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <h2 className="text-4xl lg:text-5xl text-[#171717] font-display font-medium tracking-tight">
              Complementary <span className="italic font-light">Supplies.</span>
            </h2>
            <Link href="/shop" className="font-body text-[11px] text-[#a6549e] font-bold tracking-[0.3em] uppercase hover:text-[#171717] transition-colors flex items-center gap-2">
              Browse Full Catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {related.map((rp) => (
               <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
