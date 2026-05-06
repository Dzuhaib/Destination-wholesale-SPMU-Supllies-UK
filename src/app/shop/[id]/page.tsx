"use client";

import { use } from "react";
import { useCart } from "@/context/CartContext";
import { featuredProducts } from "@/components/FeaturedProducts";
import Link from "next/link";
import { Star, Shield, ShoppingBag, ChevronRight, CheckCircle, Truck, Award, ArrowLeft } from "lucide-react";

const cardBgs = [
  "from-[#c48bbd]/40 to-[#a6549e]/20",
  "from-[#1A1A1A] to-[#2C2C2C]",
  "from-[#a6549e]/15 to-[#c48bbd]/30",
  "from-[#2C2C2C] to-[#1A1A1A]",
  "from-[#F2EDE6] to-[#c48bbd]/50",
  "from-[#1A1A1A] to-[#a6549e]/20",
  "from-[#c48bbd]/30 to-[#a6549e]/10",
  "from-[#2C2C2C] to-[#3A3A3A]",
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addItem } = useCart();

  const product = featuredProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={48} className="text-[#E0D8CE] mx-auto mb-4" />
          <h1 className="text-3xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Product Not Found</h1>
          <Link href="/shop" className="btn-primary inline-block relative z-10">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const idx = featuredProducts.indexOf(product);
  const bg = cardBgs[idx % cardBgs.length];
  const isDark = bg.includes("1A1A1A") || bg.includes("2C2C2C");
  const related = featuredProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E0D8CE]">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 font-body text-[12px] text-[#8A8A8A]">
            <Link href="/" className="hover:text-[#a6549e] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/shop" className="hover:text-[#a6549e] transition-colors">Shop</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div>
            <div className={`relative aspect-square bg-gradient-to-br ${bg} flex items-center justify-center rounded-sm overflow-hidden border border-[#E0D8CE]`}>
              {/* Cert badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.certs.map((c) => (
                  <span key={c} className="bg-white/90 text-[#1A1A1A] font-body text-[10px] px-2 py-1 font-bold tracking-wide rounded-sm">
                    {c}
                  </span>
                ))}
              </div>
              {product.badge && (
                <span className={`absolute top-4 right-4 font-body text-[11px] font-bold px-3 py-1.5 rounded-sm ${
                  product.badge === "Sale" ? "bg-red-500 text-white" : "bg-[#a6549e] text-white"
                }`}>
                  {product.badge}
                </span>
              )}
              <div className="w-28 h-28 rounded-full border-2 border-white/20 flex items-center justify-center">
                <ShoppingBag size={48} className={isDark ? "text-[#a6549e]" : "text-[#843a7a]"} />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="font-body text-[11px] tracking-[3px] uppercase text-[#a6549e] font-medium mb-2">
              {product.category}
            </div>

            <h1 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < product.rating ? "text-[#a6549e] fill-[#a6549e]" : "text-[#E0D8CE]"} />
                ))}
              </div>
              <span className="font-body text-[13px] text-[#8A8A8A]">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-body text-3xl font-bold text-[#1A1A1A]">£{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="font-body text-lg text-[#8A8A8A] line-through">£{product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-500 text-white font-body text-[11px] font-bold px-2 py-1 rounded-sm">
                  SAVE £{(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <div className="theme-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

            {/* Description */}
            <p className="font-body text-[15px] text-[#4A4A4A] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Certifications */}
            <div className="flex items-center gap-3 mb-8">
              <Shield size={16} className="text-[#a6549e]" />
              <span className="font-body text-[13px] text-[#4A4A4A]">Certifications: </span>
              <div className="flex gap-2">
                {product.certs.map((cert) => (
                  <span key={cert} className="border border-[#a6549e]/40 text-[#a6549e] px-3 py-1 font-body text-[11px] tracking-wider font-semibold rounded-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: "" })}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 py-4 px-10 text-[13px] relative z-10 mb-6"
            >
              <ShoppingBag size={16} />
              Add to Cart — £{product.price.toFixed(2)}
            </button>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E0D8CE]">
              {[
                { icon: Truck, label: "Fast UK Delivery", sub: "Same day dispatch" },
                { icon: Award, label: "Genuine Products", sub: "Direct from manufacturer" },
                { icon: Shield, label: "Certified", sub: product.certs.join(", ") + " approved" },
              ].map((b) => (
                <div key={b.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 border border-[#E0D8CE] flex items-center justify-center shrink-0 rounded-sm">
                    <b.icon size={16} className="text-[#a6549e]" />
                  </div>
                  <div>
                    <div className="font-body text-[12px] font-semibold text-[#1A1A1A]">{b.label}</div>
                    <div className="font-body text-[11px] text-[#8A8A8A]">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              You May Also Like
            </h2>
            <Link href="/shop" className="font-body text-[12px] text-[#a6549e] tracking-widest uppercase hover:text-[#843a7a] transition-colors flex items-center gap-1">
              View All <ArrowLeft size={12} className="rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rp, i) => {
              const rBg = cardBgs[(featuredProducts.indexOf(rp)) % cardBgs.length];
              const rDark = rBg.includes("1A1A1A") || rBg.includes("2C2C2C");
              return (
                <Link key={rp.id} href={`/shop/${rp.id}`}>
                  <div className="product-card bg-white border border-[#E0D8CE] rounded-sm overflow-hidden group">
                    <div className={`h-40 bg-gradient-to-br ${rBg} flex items-center justify-center`}>
                      <ShoppingBag size={22} className={rDark ? "text-[#a6549e]" : "text-[#843a7a]"} />
                    </div>
                    <div className="p-4">
                      <div className="font-body text-[10px] tracking-[2px] uppercase text-[#a6549e] mb-1">{rp.category}</div>
                      <h3 className="font-body text-[13px] font-semibold text-[#1A1A1A] group-hover:text-[#a6549e] transition-colors mb-2">{rp.name}</h3>
                      <span className="font-body text-[15px] font-bold text-[#1A1A1A]">£{rp.price.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
