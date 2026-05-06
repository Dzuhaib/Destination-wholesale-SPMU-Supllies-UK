"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";

export default function CartPage() {
  const { items, updateQty, removeItem, total, count, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 border-2 border-[#E0D8CE] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={36} className="text-[#E0D8CE]" />
          </div>
          <h1 className="text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your Cart is Empty</h1>
          <p className="font-body text-[14px] text-[#8A8A8A] mb-8">Browse our professional-grade products and add items to your cart.</p>
          <Link href="/shop"><button className="btn-primary relative z-10">Continue Shopping</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="bg-white border-b border-[#E0D8CE]">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 font-body text-[12px] text-[#8A8A8A]">
            <Link href="/" className="hover:text-[#a6549e]">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A1A] font-medium">Cart ({count})</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <h1 className="text-4xl text-[#1A1A1A] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white border border-[#E0D8CE] rounded-sm p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c48bbd]/40 to-[#a6549e]/20 flex items-center justify-center rounded-sm shrink-0">
                  <ShoppingBag size={24} className="text-[#843a7a]" />
                </div>
                <div className="flex-1">
                  <Link href={`/shop/${item.id}`}>
                    <h3 className="font-body text-[15px] font-semibold text-[#1A1A1A] hover:text-[#a6549e] transition-colors mb-1">{item.name}</h3>
                  </Link>
                  <p className="font-body text-[13px] text-[#8A8A8A]">£{item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center border border-[#E0D8CE] rounded-sm">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#a6549e]"><Minus size={14} /></button>
                  <span className="w-10 h-10 flex items-center justify-center font-body text-[14px] font-semibold border-x border-[#E0D8CE]">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#a6549e]"><Plus size={14} /></button>
                </div>
                <div className="font-body text-[17px] font-bold text-[#1A1A1A] min-w-[80px] text-right">£{(item.price * item.qty).toFixed(2)}</div>
                <button onClick={() => removeItem(item.id)} className="text-[#8A8A8A] hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
              </div>
            ))}
            <button onClick={clearCart} className="font-body text-[12px] text-[#8A8A8A] hover:text-red-500 underline">Clear Cart</button>
          </div>

          <div>
            <div className="bg-white border border-[#E0D8CE] rounded-sm p-8 sticky top-28">
              <h2 className="font-body text-[11px] tracking-[2px] uppercase text-[#8A8A8A] font-semibold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body text-[14px]"><span className="text-[#4A4A4A]">Subtotal ({count} items)</span><span className="font-semibold">£{total.toFixed(2)}</span></div>
                <div className="flex justify-between font-body text-[14px]"><span className="text-[#4A4A4A]">Delivery</span><span className="text-[#a6549e]">At checkout</span></div>
              </div>
              <div className="border-t border-[#E0D8CE] pt-4 mb-6">
                <div className="flex justify-between"><span className="font-body text-[16px] font-semibold">Total</span><span className="font-body text-[22px] font-bold">£{total.toFixed(2)}</span></div>
                <p className="font-body text-[11px] text-[#8A8A8A] text-right mt-1">VAT included</p>
              </div>
              <Link href="/checkout"><button className="btn-primary w-full flex items-center justify-center gap-2 relative z-10 py-4">Checkout <ArrowRight size={15} /></button></Link>
              <div className="mt-8 pt-6 border-t border-[#E0D8CE] space-y-3">
                {["Secure checkout", "Genuine certified products", "UK registered business"].map((t) => (
                  <div key={t} className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#a6549e]" /><span className="font-body text-[11px] text-[#8A8A8A]">{t}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
