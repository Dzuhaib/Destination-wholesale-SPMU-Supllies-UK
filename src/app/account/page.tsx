"use client";

import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight } from "lucide-react";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", qualification: "" });

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 border-2 border-[#a6549e] rounded-full flex items-center justify-center mx-auto mb-5 animate-pulse-theme">
            <User size={28} className="text-[#a6549e]" />
          </div>
          <h1 className="text-4xl text-[#1A1A1A] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="font-body text-[13px] text-[#8A8A8A]">
            {isLogin ? "Sign in to your professional account" : "Register for a professional account"}
          </p>
        </div>

        <div className="bg-white border border-[#E0D8CE] rounded-sm p-8">
          {/* Toggle */}
          <div className="flex mb-8 border border-[#E0D8CE] rounded-sm overflow-hidden">
            <button onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 font-body text-[13px] font-medium transition-colors ${isLogin ? "bg-[#1A1A1A] text-white" : "text-[#8A8A8A] hover:text-[#a6549e]"}`}>
              Sign In
            </button>
            <button onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 font-body text-[13px] font-medium transition-colors ${!isLogin ? "bg-[#1A1A1A] text-white" : "text-[#8A8A8A] hover:text-[#a6549e]"}`}>
              Register
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block font-body text-[12px] text-[#4A4A4A] mb-1.5">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                  <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} required
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF8F4] border border-[#E0D8CE] font-body text-[14px] focus:outline-none focus:border-[#a6549e] rounded-sm" placeholder="Jane Smith" />
                </div>
              </div>
            )}
            <div>
              <label className="block font-body text-[12px] text-[#4A4A4A] mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF8F4] border border-[#E0D8CE] font-body text-[14px] focus:outline-none focus:border-[#a6549e] rounded-sm" placeholder="you@practice.co.uk" />
              </div>
            </div>
            <div>
              <label className="block font-body text-[12px] text-[#4A4A4A] mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                <input type={showPass ? "text" : "password"} value={form.password} onChange={(e) => update("password", e.target.value)} required
                  className="w-full pl-11 pr-11 py-3 bg-[#FAF8F4] border border-[#E0D8CE] font-body text-[14px] focus:outline-none focus:border-[#a6549e] rounded-sm" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] hover:text-[#a6549e]">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {!isLogin && (
              <div>
                <label className="block font-body text-[12px] text-[#4A4A4A] mb-1.5">Professional Qualification</label>
                <select value={form.qualification} onChange={(e) => update("qualification", e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#E0D8CE] font-body text-[14px] focus:outline-none focus:border-[#a6549e] rounded-sm text-[#4A4A4A]">
                  <option value="">Select your qualification</option>
                  <option value="nurse">Aesthetic Nurse</option>
                  <option value="doctor">Doctor / Medic</option>
                  <option value="dentist">Dentist</option>
                  <option value="therapist">Beauty Therapist</option>
                  <option value="spmu">SPMU Artist</option>
                  <option value="other">Other Professional</option>
                </select>
              </div>
            )}

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 relative z-10 mt-6">
              {isLogin ? "Sign In" : "Create Account"} <ArrowRight size={15} />
            </button>
          </form>

          {isLogin && (
            <p className="text-center mt-4">
              <a href="#" className="font-body text-[12px] text-[#a6549e] hover:text-[#843a7a]">Forgot password?</a>
            </p>
          )}
        </div>

        {/* Professional notice */}
        <div className="mt-6 flex items-start gap-3 p-4 bg-[#1A1A1A] rounded-sm">
          <ShieldCheck size={16} className="text-[#a6549e] mt-0.5 shrink-0" />
          <p className="font-body text-[11px] text-[#8A8A8A] leading-relaxed">
            Accounts are verified manually. You may be asked to provide proof of qualifications and insurance before access to medical-grade products is granted.
          </p>
        </div>
      </div>
    </div>
  );
}
