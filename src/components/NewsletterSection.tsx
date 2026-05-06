"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-40 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-[#a6549e] font-bold mb-8 block">
            The Bulletin
          </span>
          <h2 className="text-5xl lg:text-7xl text-[#171717] leading-tight mb-12 font-display font-medium tracking-tight">
            Insight for the <span className="italic font-light">Practitioner.</span>
          </h2>
          
          {submitted ? (
            <div className="font-body text-[16px] text-[#a6549e] py-10">
              Subscription confirmed. Welcome to the Destination community.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mt-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Professional email address"
                required
                className="w-full bg-transparent border-b border-gray-200 py-6 font-body text-[18px] text-[#171717] placeholder-gray-300 focus:outline-none focus:border-black transition-all"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-6 font-body text-[11px] tracking-widest uppercase font-bold text-[#171717] hover:text-[#a6549e] transition-colors"
              >
                Join Now
              </button>
            </form>
          )}
          
          <p className="font-body text-[11px] text-gray-300 mt-12 tracking-wider font-bold">
            Strictly professional updates. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
