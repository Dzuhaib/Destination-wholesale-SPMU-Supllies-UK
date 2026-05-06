"use client";

export default function ProfessionalNotice() {
  return (
    <section className="bg-white border-y border-gray-50">
      <div className="container-custom">
        <div className="py-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 md:gap-16">
          <div className="font-body text-[10px] tracking-[0.4em] uppercase text-[#a6549e] font-bold shrink-0">
            Professional Use Only
          </div>
          <div className="max-w-2xl font-body text-[14px] text-gray-400 leading-relaxed italic">
            This platform is dedicated exclusively to qualified practitioners. Proof of professional certification 
            and clinical insurance is required for all medical-grade acquisitions. 
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-100" />
          <div className="font-body text-[11px] tracking-widest uppercase text-gray-400 font-bold">
            CE · FDA · UKCA · KFDA · EU REP
          </div>
        </div>
      </div>
    </section>
  );
}
