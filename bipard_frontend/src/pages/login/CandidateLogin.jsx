import React from "react";
import { CreditCard, CalendarDays, ShieldCheck, LockKeyhole, LogIn } from "lucide-react";
import "./CandidateLogin.css";

const instructions = [
  {
    en: "Incomplete application form shall be rejected.",
    hi: "अपूर्ण आवेदन पत्र स्वीकार्य नहीं होंगे।"
  },
  {
    en: "Please read all the instructions carefully before filling up the form.",
    hi: "कृपया प्रपत्र भरने से पहले सभी निर्देशों को ध्यानपूर्वक पढ़ें।"
  },
  {
    en: "Applicant’s signature is mandatory on the application form.",
    hi: "आवेदन पत्र पर प्रार्थी का हस्ताक्षर अनिवार्य है।"
  },
  {
    en: "Please make sure the details mentioned in the application form should be same as the details to be filled up in the examination hall.",
    hi: "कृपया सुनिश्चित करें कि आवेदन पत्र में उल्लिखित विवरण परीक्षा हॉल में भरे जाने वाले विवरण के समान होना चाहिए।"
  }
];

export default function CandidateLogin() {
  return (
    <div className="w-full flex-grow flex items-center justify-center p-4 md:p-6 bg-white">
      
      {/* Main Professional Portal Container */}
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] min-h-[720px] bg-white rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden relative">
        
        {/* ─── LEFT GOVERNMENT PANEL (NAVY) ─────────────────────────── */}
        <div className="login-left-panel w-full md:w-[44%] lg:w-[46%] flex flex-col pt-10 pb-10 px-8 lg:px-12 relative shrink-0">
          
          {/* Textures and Motifs */}
          <div className="login-pattern" />
          
          {/* Subtle Bottom Architectural Silhouette */}
          <div className="absolute bottom-0 left-0 w-full opacity-[0.08] pointer-events-none z-0">
            <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,300 L800,300 L800,280 L750,280 L750,260 L730,260 L730,220 L710,220 L710,200 L650,200 L650,150 L630,150 L630,130 L550,130 L550,100 L450,100 L450,80 L420,80 L420,40 L400,20 L380,40 L380,80 L350,80 L350,100 L250,100 L250,130 L170,130 L170,150 L150,150 L150,200 L90,200 L90,220 L70,220 L70,260 L50,260 L50,280 L0,280 Z" fill="#ffffff" />
              <circle cx="400" cy="90" r="45" fill="#ffffff" />
            </svg>
          </div>

          {/* 
            CRITICAL REQUIREMENT: THE S-CURVE 
            Using precise Bezier curves (C) to bow IN to the blue, then OUT to the white 
          */}
          <svg className="login-s-curve" viewBox="0 0 100 1000" preserveAspectRatio="none">
            {/* Layer 1: Gold Edge (#E3AD54) - Pulled slightly further left to create the border */}
            <path d="M100,0 C-40,250 110,700 -20,1000 L100,1000 Z" fill="#E3AD54" />
            {/* Layer 2: White Mask Background - Overlaps the gold to create a perfect curved transition */}
            <path d="M100,0 C-25,250 125,700 -5,1000 L100,1000 Z" fill="#ffffff" />
          </svg>

          {/* Left Panel Content */}
          <div className="relative z-10 flex flex-col h-full">
            
            {/* Ashoka Emblem */}
            <div className="mb-8 flex flex-col items-center self-start md:self-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Government of India Emblem"
                className="w-[45px] h-auto object-contain brightness-0 invert opacity-95 mb-1.5"
              />
              <span className="text-white text-[10px] font-medium tracking-wide">सत्यमेव जयते</span>
            </div>

            {/* General Instructions Heading */}
            <h2 className="text-[#F4B83F] font-bold text-[22px] lg:text-[26px] leading-tight mb-2 tracking-wide">
              GENERAL INSTRUCTIONS / सामान्य निर्देश:
            </h2>
            
            {/* Gold Decorative Divider */}
            <div className="flex items-center gap-3 w-[180px] mb-8">
              <span className="flex-1 h-px bg-[#E3AD54]" />
              <span className="w-1.5 h-1.5 bg-[#E3AD54] rotate-45 rounded-[1px]" />
              <span className="flex-1 h-px bg-[#E3AD54]" />
            </div>

            {/* Bilingual Instruction Blocks */}
            <div className="flex flex-col gap-5 flex-1 pr-4 md:pr-12">
              {instructions.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-white/10 pb-4 last:border-0">
                  <p className="text-white font-semibold text-[15px] lg:text-[16px] leading-[1.5] mb-1.5">
                    {item.en}
                  </p>
                  <p 
                    className="text-white/90 text-[15px] lg:text-[16px] leading-[1.6]"
                    style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}
                  >
                    {item.hi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT LOGIN PANEL (WHITE) ───────────────────────────── */}
        <div className="w-full md:flex-1 bg-white flex flex-col px-6 py-10 lg:px-14 relative z-10 shrink-0">
          
          {/* Government Style Header */}
          <div className="flex items-center gap-4 bg-[#06366F] rounded-t-xl rounded-b-md p-5 border-b-[5px] border-[#E3AD54] mb-8 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <LockKeyhole className="text-[#F4B83F]" size={22} strokeWidth={2.5} />
            </div>
            <h2 className="text-white font-bold text-[24px] lg:text-[28px] tracking-wide">
              Candidate Login
            </h2>
          </div>

          <form className="flex flex-col gap-6 flex-1 w-full max-w-[480px] mx-auto md:ml-0 md:max-w-none">
            
            {/* Mandatory Fields Notice */}
            <p className="text-[#EF4444] italic text-[14px] md:text-[15px] text-right font-medium">
              Fields marked with (*) are mandatory
            </p>

            {/* Aadhaar Number Field */}
            <div className="flex flex-col">
              <label htmlFor="aadhaar" className="block text-gray-800 font-bold mb-2 text-[14px] md:text-[15px]">
                <span className="text-[#EF4444] mr-1 text-[16px]">*</span>Aadhaar Number/आधार संख्या
              </label>
              <div className="flex items-center border border-gray-300 rounded-[8px] overflow-hidden h-[55px] focus-within:border-[#06366F] focus-within:ring-1 focus-within:ring-[#06366F] transition-all bg-white group">
                <div className="w-[55px] h-full bg-[#f8fafc] flex items-center justify-center border-r border-gray-200 shrink-0 group-focus-within:bg-[#EDF4FC]">
                  <CreditCard className="text-[#06366F]/60 group-focus-within:text-[#06366F]" size={22} />
                </div>
                <input 
                  id="aadhaar"
                  type="text" 
                  placeholder="Aadhar Number" 
                  className="flex-1 h-full px-4 text-[16px] text-gray-800 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Date of Birth Field */}
            <div className="flex flex-col">
              <label htmlFor="dob" className="block text-gray-800 font-bold mb-2 text-[14px] md:text-[15px]">
                <span className="text-[#EF4444] mr-1 text-[16px]">*</span>Password - Date of Birth
              </label>
              <div className="flex items-center border border-gray-300 rounded-[8px] overflow-hidden h-[55px] focus-within:border-[#06366F] focus-within:ring-1 focus-within:ring-[#06366F] transition-all bg-white group">
                <div className="w-[55px] h-full bg-[#f8fafc] flex items-center justify-center border-r border-gray-200 shrink-0 group-focus-within:bg-[#EDF4FC]">
                  <CalendarDays className="text-[#06366F]/60 group-focus-within:text-[#06366F]" size={22} />
                </div>
                <input 
                  id="dob"
                  type="text" 
                  placeholder="dd/mm/yyyy" 
                  className="flex-1 h-full px-4 text-[16px] text-gray-800 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* CAPTCHA Placeholder Section */}
            <div className="flex flex-col">
              <label className="block text-gray-800 font-bold mb-2 text-[14px] md:text-[15px]">
                <span className="text-[#EF4444] mr-1 text-[16px]">*</span>Click To Verify
              </label>
              <div className="w-full h-[74px] border border-gray-300 rounded-[8px] bg-[#f9fafb] flex items-center justify-between px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  {/* Fake reCAPTCHA checkbox */}
                  <div className="w-7 h-7 border-2 border-gray-300 bg-white rounded-sm"></div>
                  <span className="text-gray-700 font-medium text-[15px]">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center justify-center opacity-60">
                  <ShieldCheck size={28} className="text-gray-500 mb-0.5" />
                  <span className="text-[9px] text-gray-500 font-semibold tracking-wider">reCAPTCHA</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-2 flex flex-col gap-6">
              <button 
                type="submit" 
                className="w-full h-[58px] bg-[#E98313] hover:bg-[#d47610] text-white font-bold text-[18px] tracking-wide rounded-[8px] transition-all shadow-[0_4px_14px_rgba(233,131,19,0.3)] hover:shadow-[0_6px_20px_rgba(233,131,19,0.4)] hover:-translate-y-px flex items-center justify-center gap-2"
              >
                Login
                <LogIn size={20} strokeWidth={2.5} />
              </button>

              <div className="text-center">
                <span className="text-gray-600 text-[15px] font-medium">Not a member? </span>
                <a href="/register" className="text-[#06366F] font-bold text-[15px] hover:underline decoration-2 underline-offset-4">
                  Signup now
                </a>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}