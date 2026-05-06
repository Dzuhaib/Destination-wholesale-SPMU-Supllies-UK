import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-[#171717] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="bg" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="font-body text-[11px] tracking-[0.5em] uppercase text-[#a6549e] font-bold block mb-6 animate-soft-fade">
            Connect
          </span>
          <h1 className="text-5xl lg:text-7xl text-white mb-8 font-display font-medium tracking-tight animate-soft-fade delay-200">
            Contact <span className="italic font-light opacity-60">Destination Wholesale.</span>
          </h1>
          <div className="w-20 h-px bg-[#a6549e] mx-auto animate-soft-fade delay-400" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <div className="space-y-16">
              <div>
                <p className="font-body text-[18px] text-gray-600 leading-relaxed">
                  Welcome to Destination Wholesale, your trusted UK partner for aesthetic supplies and SPMU products. Whether you need help with orders, deliveries, or product advice, our team is here to assist you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-body text-[11px] tracking-[0.4em] uppercase text-[#171717] font-bold mb-6 border-b border-gray-100 pb-4">
                    Our Contact Details
                  </h3>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-[#a6549e] mt-1 shrink-0" size={20} />
                    <p className="font-body text-[15px] text-gray-500 leading-relaxed">
                      Office A, Cressing Farm, <br />
                      Witham Road, Cressing <br />
                      CM77 8PD
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <Mail className="text-[#a6549e] shrink-0" size={20} />
                    <a href="mailto:info@destinationwholesale.co.uk" className="font-body text-[15px] text-gray-500 hover:text-[#a6549e] transition-colors">
                      info@destinationwholesale.co.uk
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#a6549e] shrink-0" size={20} />
                    <a href="tel:01376802575" className="font-body text-[15px] text-gray-500 hover:text-[#a6549e] transition-colors">
                      01376802575
                    </a>
                  </div>
                </div>

                <div>
                   <h3 className="font-body text-[11px] tracking-[0.4em] uppercase text-[#171717] font-bold mb-6 border-b border-gray-100 pb-4">
                    Direct Support
                  </h3>
                  <a href="https://wa.me/4401376802575" className="group flex items-center justify-between bg-gray-50 p-6 rounded-sm hover:bg-[#171717] transition-all duration-300">
                     <div className="flex items-center gap-4">
                       <MessageCircle className="text-[#25D366] group-hover:text-white transition-colors" size={24} />
                       <span className="font-body text-[14px] font-bold text-[#171717] group-hover:text-white transition-colors tracking-wide">WhatsApp</span>
                     </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF8F4] p-10 border border-gray-50">
                 <h3 className="text-2xl font-display font-medium text-[#171717] mb-4">Get in Touch</h3>
                 <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                  If you’re looking for genuine aesthetic and SPMU supplies in the UK, or need wholesale guidance, contact Destination Wholesale & Pharma today. We’re always happy to help professionals and clinics find the best products for their clients.
                 </p>
              </div>
            </div>

            {/* Right: Map */}
            <div className="h-[600px] w-full bg-gray-100 rounded-sm overflow-hidden border border-gray-100 shadow-xl">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2466.906566085145!2d0.5898864!3d51.8443328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8f9b97a2624d7%3A0xc3b2f293b67e813a!2sCressing%20Farm%2C%20Witham%20Rd%2C%20Cressing%2C%20Braintree%20CM77%208PD%2C%20UK!5e0!3m2!1sen!2sus!4v1715012345678!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
