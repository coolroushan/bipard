import React from "react";
import { BookOpen, ClipboardEdit, ShieldCheck } from "lucide-react";
import "./HomeLeftPanel.css";

const features = [
  {
    icon: BookOpen,
    title: "Exam",
    subtitle: "Syllabus",
  },
  {
    icon: ClipboardEdit,
    title: "Practice",
    subtitle: "Test",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    subtitle: "",
  },
];

export default function HomeLeftPanel() {
  return (
    <aside className="portal-left-panel flex flex-col items-center w-full md:w-[40%] lg:w-[460px] min-h-full overflow-hidden shrink-0 rounded-t-none md:rounded-tr-none md:rounded-l-none">
      {/* Subtle Dotted Pattern Overlay */}
      <div className="portal-pattern" />

      {/* Decorative Gold & White Right Edge Curve */}
      <svg
        className="portal-curve"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gold Accent Swoosh */}
        <path d="M100,0 C35,25 75,75 15,100 L100,100 Z" fill="#E3AD54" />
        {/* White Mask Layer (Matches right-side content background) */}
        <path d="M100,0 C45,25 85,75 25,100 L100,100 Z" fill="#ffffff" />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full px-6 pt-12 pb-16 md:pb-24 flex-1">
        
        {/* Ashoka Emblem */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Government of India Emblem"
            className="w-[45px] h-auto object-contain brightness-0 invert opacity-95 mb-2"
          />
          <span className="text-white text-[10px] font-medium tracking-wide">
            सत्यमेव जयते
          </span>
        </div>

        {/* Title Section */}
        <div className="text-center w-full mb-5">
          <h2 className="text-white font-semibold text-[22px] md:text-[25px] leading-tight mb-1">
            Computer Competency Test
          </h2>
          <div className="flex justify-center items-center gap-[6px] flex-wrap">
            <span className="font-extrabold text-[30px] md:text-[34px] text-[#F4B83F] leading-none">
              Examination
            </span>
            <span className="font-extrabold text-white text-[30px] md:text-[34px] leading-none">
              Portal
            </span>
          </div>
        </div>

        {/* Gold Diamond Divider */}
        <div className="flex items-center justify-center gap-3 w-full max-w-[240px] mb-6">
          <span className="flex-1 h-px bg-gradient-to-l from-[#E3AD54] to-transparent opacity-80" />
          <span className="w-2 h-2 bg-[#E3AD54] rotate-45 rounded-[1px]" />
          <span className="flex-1 h-px bg-gradient-to-r from-[#E3AD54] to-transparent opacity-80" />
        </div>

        {/* Subtitle */}
        <p className="text-center font-semibold text-white text-[15px] md:text-[16px] mb-10 tracking-wide">
          For All Government Employees
        </p>

        {/* Feature Cards */}
        <div className="flex justify-center gap-3 md:gap-4 w-full flex-wrap">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-1 relative overflow-hidden"
                style={{ width: "105px", height: "135px" }}
              >
                {/* Icon Container */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#EDF4FC] flex items-center justify-center mb-3">
                  <Icon size={26} color="#1260B2" strokeWidth={2} />
                </div>
                
                {/* Text */}
                <div className="text-[13px] font-bold text-[#082F62] leading-snug text-center">
                  <div>{item.title}</div>
                  {item.subtitle && <div>{item.subtitle}</div>}
                </div>

                {/* Gold Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#E3AD54]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Bottom Architectural Motif (Government Dome Silhouette) */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.12] pointer-events-none z-0">
        <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
          <path d="M0,300 L800,300 L800,280 L750,280 L750,260 L730,260 L730,220 L710,220 L710,200 L650,200 L650,150 L630,150 L630,130 L550,130 L550,100 L450,100 L450,80 L420,80 L420,40 L400,20 L380,40 L380,80 L350,80 L350,100 L250,100 L250,130 L170,130 L170,150 L150,150 L150,200 L90,200 L90,220 L70,220 L70,260 L50,260 L50,280 L0,280 Z" fill="#ffffff" />
          {/* Dome details */}
          <circle cx="400" cy="90" r="45" fill="#ffffff" />
          <rect x="375" y="130" width="50" height="170" fill="#ffffff" />
          <rect x="260" y="140" width="30" height="160" fill="#ffffff" />
          <rect x="510" y="140" width="30" height="160" fill="#ffffff" />
        </svg>
      </div>
    </aside>
  );
}