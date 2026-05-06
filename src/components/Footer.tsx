import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-1">
            <div className="mb-10">
              <div className="text-3xl font-semibold text-[#171717] mb-1">Destination</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#a6549e] font-bold">Wholesale</div>
            </div>
            <p className="font-body text-[14px] text-gray-400 leading-relaxed max-w-xs">
              UK&apos;s premier aesthetics supply. Sourcing excellence for the modern practitioner.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-10">Collection</h4>
            <ul className="space-y-4">
              {["Aesthetics", "Skin", "SPMU", "Starter Kits", "Consumables"].map((link) => (
                <li key={link}>
                  <Link href={`/shop?category=${link}`} className="font-body text-[13px] text-gray-500 hover:text-[#a6549e] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-10">Information</h4>
            <ul className="space-y-4">
              {["Our Story", "Verification", "Terms", "Privacy", "Shipping"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="font-body text-[13px] text-gray-500 hover:text-[#a6549e] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-10">Contact</h4>
            <div className="space-y-6 font-body text-[14px] text-gray-500 leading-relaxed">
              <p>Office A, Cressing Farm, Witham Road, CM77 8PD</p>
              <p>Mon–Fri: 09:00 – 16:00</p>
              <a href="mailto:info@destinationwholesale.co.uk" className="block text-[#171717] font-semibold border-b border-black w-fit pb-1">
                info@destinationwholesale.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
             <p className="font-body text-[12px] text-gray-300">
               © {year} Destination Wholesale Ltd. All rights reserved.
             </p>
             <div className="flex gap-8 font-body text-[10px] tracking-widest uppercase text-gray-300 font-bold">
               <span>CE Certified</span>
               <span>UKCA Marked</span>
               <span>FDA Approved</span>
             </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
             <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gray-300 font-bold">Secure Payments</span>
             <img 
               src="/Payment-Methods.png" 
               alt="Payment Methods" 
               className="h-8 md:h-10 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
             />
          </div>
        </div>
      </div>
    </footer>
  );
}
