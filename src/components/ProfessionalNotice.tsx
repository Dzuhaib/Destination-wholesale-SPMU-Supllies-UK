"use client";

import { ShieldCheck, FileCheck, Award } from "lucide-react";

export default function ProfessionalNotice() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100 max-w-6xl mx-auto">
          
          <div className="flex flex-col items-center text-center px-4 lg:px-10">
            <ShieldCheck size={32} className="text-[#a6549e] mb-6" strokeWidth={1.5} />
            <h3 className="font-body text-[11px] tracking-[0.3em] uppercase text-[#171717] font-bold mb-4">
              Professional Use Only
            </h3>
            <p className="font-body text-[13px] lg:text-[14px] text-gray-500 leading-relaxed">
              This platform is dedicated exclusively to qualified medical and aesthetic practitioners.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4 lg:px-10 pt-12 md:pt-0">
            <FileCheck size={32} className="text-[#a6549e] mb-6" strokeWidth={1.5} />
            <h3 className="font-body text-[11px] tracking-[0.3em] uppercase text-[#171717] font-bold mb-4">
              Strict Verification
            </h3>
            <p className="font-body text-[13px] lg:text-[14px] text-gray-500 leading-relaxed">
              Proof of professional certification and clinical insurance is required for all medical-grade acquisitions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4 lg:px-10 pt-12 md:pt-0">
            <Award size={32} className="text-[#a6549e] mb-6" strokeWidth={1.5} />
            <h3 className="font-body text-[11px] tracking-[0.3em] uppercase text-[#171717] font-bold mb-4">
              Global Standards
            </h3>
            <p className="font-body text-[13px] lg:text-[14px] text-gray-500 leading-relaxed">
              Acquisitions guaranteed to meet strict CE, FDA, UKCA, KFDA, and EU REP quality standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
