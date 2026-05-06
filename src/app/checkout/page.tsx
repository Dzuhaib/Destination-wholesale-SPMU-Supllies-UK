"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CreditCard, ShieldCheck, ChevronRight, CheckCircle, Lock } from "lucide-react";

export default function CheckoutPage() {
  const { items, total, count, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", postcode: "", notes: "" });

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 bg-[#a6549e]/10 border-2 border-[#a6549e] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#a6549e]" />
          </div>
          <h1 className="text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Order Confirmed</h1>
          <p className="font-body text-[14px] text-[#8A8A8A] mb-2">Thank you for your order!</p>
          <p className="font-body text-[13px] text-[#8A8A8A] mb-8">A confirmation email will be sent to your inbox. Our team will verify your professional credentials before dispatch.</p>
          <Link href="/shop"><button className="btn-primary relative z-10">Continue Shopping</button></Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <div className="text-center"><h1 className="text-3xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>No items to checkout</h1><Link href="/shop"><button className="btn-primary relative z-10">Shop Now</button></Link></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="bg-white border-b border-[#E0D8CE]">
        <div className="container-custom py-4 flex items-center gap-2 font-body text-[12px] text-[#8A8A8A]">
          <Link href="/" className="hover:text-[#a6549e]">Home</Link><ChevronRight size={12} /><Link href="/cart" className="hover:text-[#a6549e]">Cart</Link><ChevronRight size={12} /><span className="text-[#1A1A1A] font-medium">Checkout</span>
        </div>
      </div>

      <div className="container-custom py-12">
        <h1 className="text-4xl text-[#1A1A1A] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping */}
              <div className="bg-white border border-[#E0D8CE] rounded-sm p-8">
                <h2 className="font-body text-[11px] tracking-[2px] uppercase text-[#8A8A8A] font-semibold mb-6">Shipping Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { k: "name", label: "Full Name", type: "text", full: true },
                    { k: "email", label: "Email", type: "email", full: false },
                    { k: "phone", label: "Phone", type: "tel", full: false },
                    { k: "address", label: "Address", type: "text", full: true },
                    { k: "city", label: "City", type: "text", full: false },
                    { k: "postcode", label: "Postcode", type: "text", full: false },
                  ].map((f) => (
                    <div key={f.k} className={f.full ? "sm:col-span-2" : ""}>
                      <label className="block font-body text-[12px] text-[#4A4A4A] mb-1.5">{f.label}</label>
                      <input type={f.type} required value={form[f.k as keyof typeof form]} onChange={(e) => update(f.k, e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#E0D8CE] font-body text-[14px] focus:outline-none focus:border-[#a6549e] transition-colors rounded-sm" />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block font-body text-[12px] text-[#4A4A4A] mb-1.5">Order Notes (optional)</label>
                    <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3}
                      className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#E0D8CE] font-body text-[14px] focus:outline-none focus:border-[#a6549e] transition-colors rounded-sm resize-none" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white border border-[#E0D8CE] rounded-sm p-8">
                <h2 className="font-body text-[11px] tracking-[2px] uppercase text-[#8A8A8A] font-semibold mb-6">Payment</h2>
                <div className="border border-[#a6549e] bg-[#a6549e]/05 rounded-sm p-6 flex items-center gap-4 mb-4">
                  <CreditCard size={24} className="text-[#a6549e]" />
                  <div>
                    <div className="font-body text-[14px] font-semibold text-[#1A1A1A]">PayPal Checkout</div>
                    <div className="font-body text-[12px] text-[#8A8A8A]">Securely pay via PayPal or credit/debit card</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#8A8A8A]"><Lock size={12} /><span className="font-body text-[11px]">Your payment info is encrypted and secure</span></div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white border border-[#E0D8CE] rounded-sm p-8 sticky top-28">
                <h2 className="font-body text-[11px] tracking-[2px] uppercase text-[#8A8A8A] font-semibold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between font-body text-[13px]">
                      <span className="text-[#4A4A4A]">{item.name} × {item.qty}</span>
                      <span className="font-semibold">£{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#E0D8CE] pt-4 mb-6">
                  <div className="flex justify-between"><span className="font-body text-[16px] font-semibold">Total</span><span className="font-body text-[22px] font-bold">£{total.toFixed(2)}</span></div>
                </div>
                <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 relative z-10">
                  <Lock size={14} /> Place Order
                </button>
                <div className="mt-6 pt-4 border-t border-[#E0D8CE] space-y-2">
                  {["SSL Encrypted", "Professional verification", "UK registered company"].map((t) => (
                    <div key={t} className="flex items-center gap-2"><ShieldCheck size={13} className="text-[#a6549e]" /><span className="font-body text-[11px] text-[#8A8A8A]">{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
