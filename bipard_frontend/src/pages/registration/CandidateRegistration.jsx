import React from "react";
import { 
  ClipboardList, BookOpen, PenTool, FileCheck, 
  User, IdCard, Briefcase, Users, Mail, 
  Calendar, Phone, ShieldCheck, Users as UsersIcon 
} from "lucide-react";
import "./CandidateRegistration.css";

const instructions = [
  {
    icon: ClipboardList,
    en: "Incomplete application form shall be rejected.",
    hi: "अपूर्ण आवेदन पत्र स्वीकार्य नहीं होंगे।"
  },
  {
    icon: BookOpen,
    en: "Please read all the instructions carefully before filling up the form.",
    hi: "कृपया प्रपत्र भरने से पहले सभी निर्देशों को ध्यानपूर्वक पढ़ें।"
  },
  {
    icon: PenTool,
    en: "Applicant’s signature is mandatory on the application form.",
    hi: "आवेदन पत्र पर प्रार्थी का हस्ताक्षर अनिवार्य है।"
  },
  {
    icon: FileCheck,
    en: "Please make sure the details mentioned in the application form should be same as the details to be filled up in the examination hall.",
    hi: "कृपया सुनिश्चित करें कि आवेदन पत्र में उल्लिखित विवरण परीक्षा हॉल में भरे जाने वाले विवरण के समान होना चाहिए।"
  }
];

export default function CandidateRegistration() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[#e2e8f0]">
      
      {/* Main Professional Portal Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] min-h-[800px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden relative">
        
        {/* ─── LEFT GOVERNMENT PANEL (NAVY) ─────────────────────────── */}
        <div className="registration-left-panel w-full lg:w-[42%] flex flex-col pt-10 pb-10 px-8 lg:px-12 relative shrink-0 overflow-hidden lg:overflow-visible">
          
          {/* Textures and Motifs */}
          <div className="registration-pattern" />
          
          {/* Subtle Bottom Architectural Silhouette */}
          <div className="absolute bottom-0 left-0 w-full opacity-[0.06] pointer-events-none z-0">
            <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,300 L800,300 L800,280 L750,280 L750,260 L730,260 L730,220 L710,220 L710,200 L650,200 L650,150 L630,150 L630,130 L550,130 L550,100 L450,100 L450,80 L420,80 L420,40 L400,20 L380,40 L380,80 L350,80 L350,100 L250,100 L250,130 L170,130 L170,150 L150,150 L150,200 L90,200 L90,220 L70,220 L70,260 L50,260 L50,280 L0,280 Z" fill="#ffffff" />
              <circle cx="400" cy="90" r="45" fill="#ffffff" />
            </svg>
          </div>

          {/* 
            CRITICAL REQUIREMENT: THE S-CURVE 
            Using precise Bezier curves to bow LEFT into the blue, then RIGHT into the white, matching the screenshot perfectly.
          */}
          <svg className="registration-s-curve" viewBox="0 0 100 1000" preserveAspectRatio="none">
            {/* Layer 1: Gold Edge (#F4B83F) - Offset slightly to create the border */}
            <path d="M100,0 C-30,250 140,650 -20,1000 L100,1000 Z" fill="#F4B83F" />
            {/* Layer 2: White Mask Background - Overlaps to create the transition */}
            <path d="M100,0 C-15,250 155,650 -5,1000 L100,1000 Z" fill="#ffffff" />
          </svg>

          {/* Left Panel Content */}
          <div className="relative z-10 flex flex-col h-full">
            
            {/* Ashoka Emblem */}
            <div className="mb-6 flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Government of India Emblem"
                className="w-[50px] h-auto object-contain brightness-0 invert opacity-95 mb-1.5"
              />
              <span className="text-white text-[10px] font-medium tracking-wider">सत्यमेव जयते</span>
            </div>

            {/* General Instructions Heading */}
            <div className="text-center mb-6">
              <h2 className="text-[#F4B83F] font-bold text-[24px] lg:text-[28px] leading-tight tracking-wide">
                GENERAL INSTRUCTIONS /
              </h2>
              <h2 className="text-[#F4B83F] font-bold text-[24px] lg:text-[28px] leading-tight tracking-wide">
                सामान्य निर्देश:
              </h2>
            </div>
            
            {/* Gold Decorative Divider */}
            <div className="flex items-center justify-center gap-3 w-full max-w-[280px] mx-auto mb-8">
              <span className="flex-1 h-px bg-[#E3AD54]/70" />
              <span className="w-1.5 h-1.5 bg-[#E3AD54] rotate-45 rounded-[1px]" />
              <span className="flex-1 h-px bg-[#E3AD54]/70" />
            </div>

            {/* Bilingual Instruction Blocks */}
            <div className="flex flex-col flex-1 pr-0 lg:pr-14">
              {instructions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 border-b border-white/15 py-5 first:pt-0 last:border-0">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <Icon className="text-[#1260B2]" size={22} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white font-semibold text-[15px] leading-[1.5] mb-1">
                        {item.en}
                      </p>
                      <p 
                        className="text-white/90 text-[15px] leading-[1.6]"
                        style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}
                      >
                        {item.hi}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── RIGHT REGISTRATION FORM (WHITE) ─────────────────────── */}
        <div className="w-full lg:flex-1 bg-white flex flex-col px-6 py-8 lg:px-12 relative z-10 shrink-0">
          
          {/* Government Style Header */}
          <div className="flex items-center justify-between bg-[#06366F] rounded-[8px] p-4 mb-4 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4 z-10">
              <div className="w-10 h-10 rounded-[6px] bg-[#F4B83F] flex items-center justify-center shrink-0">
                <ClipboardList className="text-[#06366F]" size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-white font-bold text-[22px] lg:text-[26px] tracking-wide">
                Candidate Registration
              </h2>
            </div>
            {/* Header Diagonal Decorative Slashes */}
            <div className="absolute right-[-20px] top-0 h-full flex gap-2 -skew-x-[30deg] z-0">
              <div className="w-3 bg-white/20 h-full" />
              <div className="w-8 bg-[#F4B83F] h-full" />
              <div className="w-3 bg-white/20 h-full" />
            </div>
          </div>

          <form className="flex flex-col flex-1 w-full relative">
            
            {/* Mandatory Fields Notice */}
            <p className="text-[#EF4444] italic text-[13px] text-right font-medium mb-6">
              Fields marked with (*) are mandatory
            </p>

            <div className="flex flex-col gap-4">
              
              {/* Row 1: Full Name */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="text-[#EF4444]">*</span>
                  <User size={18} className="text-[#052B59]" />
                  Full Name / पूरा नाम
                </label>
                <div className="w-full lg:w-[65%]">
                  <input type="text" placeholder="FirstName MiddleName LastName" className="w-full h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors" />
                </div>
              </div>

              {/* Row 2: Aadhaar Number */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="text-[#EF4444]">*</span>
                  <IdCard size={18} className="text-[#052B59]" />
                  Aadhaar Number/आधार संख्या
                </label>
                <div className="w-full lg:w-[65%]">
                  <input type="text" placeholder="Aadhar Number" className="w-full h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors" />
                </div>
              </div>

              {/* Row 3: Service */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="text-[#EF4444]">*</span>
                  <Briefcase size={18} className="text-[#052B59]" />
                  Service / सेवा
                </label>
                <div className="w-full lg:w-[65%]">
                  <select className="w-full h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors bg-white appearance-none cursor-pointer">
                    <option value="">Select Service</option>
                    <option value="gazetted">Gazetted</option>
                    <option value="non-gazetted">Non-Gazetted</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Service Cadre */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="text-[#EF4444]">*</span>
                  <Users size={18} className="text-[#052B59]" />
                  Service Cadre / सेवा संवर्ग
                </label>
                <div className="w-full lg:w-[65%]">
                  <select className="w-full h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors bg-white appearance-none cursor-pointer">
                    <option value="">Select Service Cadre</option>
                    <option value="ias">Indian Administrative Service</option>
                    <option value="ips">Indian Police Service</option>
                    <option value="ifs">Indian Forest Service</option>
                    <option value="bas">Bihar Administrative Service</option>
                    {/* Map remaining options through existing logic */}
                  </select>
                </div>
              </div>

              {/* Row 5: Email */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="text-[#EF4444]">*</span>
                  <Mail size={18} className="text-[#052B59]" />
                  Email / ईमेल
                </label>
                <div className="w-full lg:w-[65%]">
                  <input type="email" placeholder="Enter Email" className="w-full h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors" />
                </div>
              </div>

              {/* Row 6: Date of Birth */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">
                  <span className="text-[#EF4444]">*</span>
                  <Calendar size={18} className="text-[#052B59]" />
                  Date of Birth / जन्म तिथि
                </label>
                <div className="w-full lg:w-[65%] flex flex-col">
                  <div className="relative w-full">
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full h-[45px] pl-4 pr-10 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors" />
                    <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                  <p className="text-[#EF4444] italic text-[12px] font-medium text-center mt-1.5 leading-tight">
                    Please select the date, month & year correctly. Your Date of Birth will be your PASSWORD. /
                    <br />
                    कृपया तिथि, महीना और वर्ष सही तरीके से चुनें। आपकी जन्मतिथि आपका पासवर्ड होगी।
                  </p>
                </div>
              </div>

              {/* Row 7: Mobile Number */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">
                  <span className="text-[#EF4444]">*</span>
                  <Phone size={18} className="text-[#052B59]" />
                  Mobile No / मोबाइल नं
                </label>
                <div className="w-full lg:w-[65%] flex flex-col">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Enter 10 digit mobile number" className="flex-1 h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors" />
                    <button type="button" className="h-[45px] px-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-[14px] rounded-[6px] transition-colors shrink-0">
                      Send OTP
                    </button>
                  </div>
                  <p className="text-[#EF4444] italic text-[11px] font-medium text-center mt-1.5 leading-tight">
                    Mobile number is important to receive One Time Password (OTP) / वन टाइम पासवर्ड (OTP) प्राप्त करने के लिए मोबाइल नंबर महत्वपूर्ण है।
                  </p>
                </div>
              </div>

              {/* Row 8: Enter OTP */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mt-2">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="w-2" /> {/* Spacer for alignment */}
                  <span className="w-[18px]" /> {/* Spacer for alignment */}
                  Enter OTP
                </label>
                <div className="w-full lg:w-[65%]">
                  <input type="text" placeholder="Enter OTP" className="w-full h-[45px] px-4 border border-[#CBD5E1] rounded-[6px] text-[15px] outline-none focus:border-[#1260B2] focus:ring-1 focus:ring-[#1260B2] transition-colors" />
                </div>
              </div>

              {/* Row 9: CAPTCHA */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px]">
                  <span className="text-[#EF4444]">*</span>
                  <ShieldCheck size={18} className="text-[#052B59]" />
                  Click to Verify
                </label>
                <div className="w-full lg:w-[65%]">
                  <div className="w-full max-w-[300px] h-[74px] border border-gray-300 rounded-[6px] bg-[#f9fafb] flex items-center justify-between px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      {/* Preserving area for actual Google reCAPTCHA injection */}
                      <div className="w-7 h-7 border-2 border-gray-300 bg-white rounded-sm"></div>
                      <span className="text-gray-700 font-medium text-[14px]">I'm not a robot</span>
                    </div>
                    <div className="flex flex-col items-center justify-center opacity-60">
                      <ShieldCheck size={26} className="text-gray-500 mb-0.5" />
                      <span className="text-[8px] text-gray-500 font-bold tracking-wider">reCAPTCHA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-6">
              <button 
                type="submit" 
                className="w-full h-[52px] bg-[#E98313] hover:bg-[#d47610] text-white font-bold text-[18px] tracking-wide rounded-[6px] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <UsersIcon size={22} strokeWidth={2.5} />
                Register
              </button>

              <div className="flex items-center justify-center gap-4 w-full">
                <span className="h-px bg-gray-200 flex-1"></span>
                <span className="text-gray-400 text-sm font-medium border border-gray-200 rounded-full px-3 py-1">OR</span>
                <span className="h-px bg-gray-200 flex-1"></span>
              </div>

              <div className="text-center">
                <span className="text-gray-600 text-[15px] font-medium">Already a member? </span>
                <a href="/login" className="text-[#1260B2] font-bold text-[15px] hover:underline decoration-2 underline-offset-4">
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