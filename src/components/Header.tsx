"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, ChevronDown, Phone, User, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";

const menuData = [
  {
    label: "Aesthetics",
    href: "/shop?category=Aesthetics",
    children: [
      { label: "Dermal Fillers", href: "/shop?category=Aesthetics&sub=fillers" },
      { label: "Skin Boosters", href: "/shop?category=Aesthetics&sub=boosters" },
      { label: "Polynucleotides", href: "/shop?category=Aesthetics&sub=poly" },
      { label: "Fat Dissolvers", href: "/shop?category=Aesthetics&sub=fat" },
      { label: "PDO Threads", href: "/shop?category=Aesthetics&sub=threads" },
    ],
  },
  {
    label: "Skin",
    href: "/shop?category=Skin",
    children: [
      { label: "Skin Needling", href: "/shop?category=Skin&sub=needling" },
      { label: "Dermaplane", href: "/shop?category=Skin&sub=dermaplane" },
      { label: "Mesotherapy", href: "/shop?category=Skin&sub=meso" },
      { label: "Exosomes", href: "/shop?category=Skin&sub=exosomes" },
    ],
  },
  {
    label: "SPMU",
    href: "/shop?category=SPMU",
    children: [
      { label: "Machines", href: "/shop?category=SPMU&sub=machines" },
      { label: "Cartridges", href: "/shop?category=SPMU&sub=cartridges" },
      { label: "Microblading", href: "/shop?category=SPMU&sub=micro" },
      { label: "Pigments", href: "/shop?category=SPMU&sub=pigments" },
    ],
  },
  {
    label: "Starter Kits",
    href: "/shop?category=Starter Kits",
    children: [
      { label: "Aesthetic Kits", href: "/shop?category=Starter Kits&sub=aesthetics" },
      { label: "Skin Kits", href: "/shop?category=Starter Kits&sub=skin" },
      { label: "SPMU Kits", href: "/shop?category=Starter Kits&sub=spmu" },
    ],
  },
  {
    label: "Consumables",
    href: "/shop?category=Consumables",
    children: [
      { label: "Needles & Cannulas", href: "/shop?category=Consumables&sub=needles" },
      { label: "Gloves & PPE", href: "/shop?category=Consumables&sub=ppe" },
      { label: "Antiseptics", href: "/shop?category=Consumables&sub=anti" },
    ],
  },
];

export default function Header() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Header Bar */}
      <div className={`bg-[#171717] text-white py-2.5 transition-all duration-500 ${scrolled ? 'opacity-0 h-0 -translate-y-full overflow-hidden' : 'opacity-100'}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-gray-400">
               <Globe size={12} className="text-[#a6549e]" />
               UK Registered B2B Supplier
            </div>
            <div className="hidden md:flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-gray-400">
               <Phone size={12} className="text-[#a6549e]" />
               Mon–Fri: 9am–4pm
            </div>
          </div>
          <div className="flex items-center gap-6">
             <Link href="/account" className="font-body text-[10px] tracking-[0.2em] uppercase text-white hover:text-[#a6549e] transition-colors font-bold">
               Professional Login
             </Link>
             <span className="text-gray-700">|</span>
             <a href="https://wa.me/44XXXXXXXXXX" className="font-body text-[10px] tracking-[0.2em] uppercase text-[#a6549e] hover:text-white transition-colors font-bold">
               WhatsApp Us
             </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm" : "bg-white/80 backdrop-blur-md py-8 border-b border-gray-50"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="text-2xl font-semibold tracking-tight text-[#171717]">Destination</span>
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#a6549e] font-bold mt-1">Wholesale</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link href="/shop" className="font-body text-[11px] tracking-[0.3em] uppercase font-bold text-[#171717] hover:text-[#a6549e] transition-all">
                Shop
              </Link>
              <Link href="/about" className="font-body text-[11px] tracking-[0.3em] uppercase font-bold text-[#171717] hover:text-[#a6549e] transition-all">
                About Us
              </Link>
              <Link href="/contact" className="font-body text-[11px] tracking-[0.3em] uppercase font-bold text-[#171717] hover:text-[#a6549e] transition-all">
                Contact
              </Link>
              {menuData.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-body text-[11px] tracking-[0.3em] uppercase font-bold transition-all py-2 ${activeMenu === item.label ? 'text-[#a6549e]' : 'text-[#171717] hover:text-[#a6549e]'}`}
                  >
                    {item.label}
                    <ChevronDown size={10} className={`transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeMenu === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 animate-soft-fade">
                      <div className="bg-white border border-gray-100 shadow-2xl p-8 min-w-[280px] rounded-sm">
                        <div className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-300 mb-6 font-bold pb-4 border-b border-gray-50">Collections</div>
                        <div className="flex flex-col gap-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="font-body text-[13px] text-gray-500 hover:text-[#a6549e] hover:translate-x-2 transition-all flex items-center justify-between group/link"
                            >
                              {child.label}
                              <div className="w-1 h-1 bg-[#a6549e] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button className="text-[#171717] hover:text-[#a6549e] transition-colors" aria-label="Search">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link href="/cart" className="relative text-[#171717] hover:text-[#a6549e] transition-colors" aria-label="Cart">
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && <span className="cart-badge">{count}</span>}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-[#171717]"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-50 max-h-[80vh] overflow-y-auto p-8 animate-soft-fade">
            <nav className="flex flex-col gap-8">
              <Link href="/shop" className="font-body text-[16px] tracking-widest uppercase font-bold text-[#171717] block">
                Shop All
              </Link>
              <Link href="/about" className="font-body text-[16px] tracking-widest uppercase font-bold text-[#171717] block">
                About Us
              </Link>
              <Link href="/contact" className="font-body text-[16px] tracking-widest uppercase font-bold text-[#171717] block">
                Contact
              </Link>
              {menuData.map((item) => (
                <div key={item.label}>
                  <Link href={item.href} className="font-body text-[14px] tracking-widest uppercase font-bold text-[#a6549e] block mb-4">
                    {item.label}
                  </Link>
                  <div className="flex flex-col gap-3 pl-4 border-l border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-body text-[13px] text-gray-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
