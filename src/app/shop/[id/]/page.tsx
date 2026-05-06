"use client";

import { use } from "react";
import { useCart } from "@/context/CartContext";
import { featuredProducts } from "@/components/FeaturedProducts";
import Link from "next/link";
import { Star, Shield, ShoppingBag, ChevronRight, CheckCircle, Truck, Award, Heart, Share2 } from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addItem } = useCart();

  const product = featuredProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="text-[#F2EDE6] mx-auto mb-6" />
          <h1 className="text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Product Not Found</h1>
          <Link href="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = featuredProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F4] border-b border-[#E0D8CE] py-6">
        <div className="container-custom">
          <div className="flex items-center gap-3 font-body text-[11px] tracking-[2px] uppercase text-[#8A8A8A] font-bold">
            <Link href="/" className="hover:text-[#a6549e] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#E0D8CE]" />
            <Link href="/shop" className="hover:text-[#a6549e] transition-colors">Shop</Link>
            <ChevronRight size={14} className="text-[#E0D8CE]" />
            <span className="text-[#1A1A1A]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32">
          {/* Product Image */}
          <div>
            <div className="relative aspect-square bg-[#FAF8F4] overflow-hidden rounded-sm group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 flex flex-col gap-4">
                {product.badge && (
                  <span className="bg-[#a6549e] text-white font-body text-[11px] px-5 py-2 font-bold tracking-[3px] uppercase shadow-xl">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="font-body text-[12px] tracking-[6px] uppercase text-[#a6549e] font-bold mb-6">
              Professional {product.category}
            </div>

            <h1 className="text-5xl lg:text-7xl text-[#1A1A1A] mb-8 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className={i < product.rating ? "text-[#a6549e] fill-[#a6549e]" : "text-[#E0D8CE]"} />
                ))}
              </div>
              <span className="font-body text-[14px] text-[#8A8A8A] font-semibold tracking-wide border-l border-[#E0D8CE] pl-4">
                {product.reviews} Practitioner Reviews
              </span>
            </div>

            <div className="flex items-baseline gap-6 mb-12 pb-12 border-b border-[#F2EDE6]">
              <span className="font-body text-5xl font-bold text-[#1A1A1A]">£{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="font-body text-2xl text-[#8A8A8A] line-through">£{product.originalPrice.toFixed(2)}</span>
              )}
              <span className="font-body text-[13px] text-[#8A8A8A] uppercase tracking-[3px] font-bold ml-auto">Excl. VAT</span>
            </div>

            <div className="mb-12">
               <p className="font-body text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
                {product.description} Sourced directly from manufacturers to ensure 100% authenticity and safety for professional clinical environments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {product.certs.map(cert => (
                   <div key={cert} className="flex items-center gap-3 font-body text-[13px] text-[#1A1A1A] font-bold tracking-wide uppercase">
                     <CheckCircle size={18} className="text-[#a6549e]" />
                     {cert} Certified
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <button
                onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                className="btn-primary flex-1 flex items-center justify-center gap-4 py-6 text-[15px] font-bold tracking-[3px] rounded-sm"
              >
                <ShoppingBag size={22} />
                ADD TO CLINIC ORDER
              </button>
              <div className="flex gap-4">
                <button className="w-20 h-20 border border-[#E0D8CE] flex items-center justify-center hover:bg-[#FAF8F4] transition-colors rounded-sm">
                  <Heart size={24} className="text-[#8A8A8A]" />
                </button>
                <button className="w-20 h-20 border border-[#E0D8CE] flex items-center justify-center hover:bg-[#FAF8F4] transition-colors rounded-sm">
                  <Share2 size={24} className="text-[#8A8A8A]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12 border-t border-[#F2EDE6]">
              {[
                { icon: Truck, label: "Fast Dispatch", sub: "UK Tracked Delivery" },
                { icon: Award, label: "Certified Supply", sub: "CE / FDA / UKCA" },
                { icon: Shield, label: "Secure Payments", sub: "Encrypted Checkout" },
              ].map((b) => (
                <div key={b.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FAF8F4] flex items-center justify-center rounded-full text-[#a6549e] shrink-0">
                    <b.icon size={24} />
                  </div>
                  <div>
                    <div className="font-body text-[14px] font-bold text-[#1A1A1A] mb-1">{b.label}</div>
                    <div className="font-body text-[11px] text-[#8A8A8A] uppercase tracking-wider font-bold">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
