import React, { useState } from "react";
import { X, Download } from "lucide-react"; // Imported icons for the modal
// Importing the custom SVG illustrations
import VerificationIllustration from "../../svg/VerificationIllustration";
import CodingVerificationIllustration from "../../svg/CodingVerificationIllustration";
import SecurityIllustration from "../../svg/SecurityIllustration";
import "./HomeLeftPanel.css";

const features = [
  {
    icon: VerificationIllustration,
    title: "Exam",
    subtitle: "Syllabus",
  },
  {
    icon: CodingVerificationIllustration,
    title: "Practice",
    subtitle: "Test",
  },
  {
    icon: SecurityIllustration,
    title: "Verification",
    subtitle: "",
  },
];

export default function HomeLeftPanel() {
  // State to control the syllabus modal visibility
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  return (
    <>
      <aside className="portal-left-panel flex flex-col items-center w-full md:w-[45%] lg:w-[520px] xl:w-[560px] min-h-full overflow-hidden shrink-0 rounded-t-none md:rounded-tr-none md:rounded-l-none">
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
                  onClick={() => {
                    // Open modal only if "Exam Syllabus" is clicked
                    if (item.title === "Exam") {
                      setIsSyllabusModalOpen(true);
                    }
                  }}
                  className={`flex flex-col items-center justify-center bg-white opacity-90 rounded-none shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-1 relative overflow-hidden ${item.title === "Exam" ? "cursor-pointer" : ""}`}
                  style={{ width: "95px", height: "125px" }}
                >
                  {/* Icon Container */}
                  <div className="w-[42px] h-[42px] rounded-full bg-[#EDF4FC] flex items-center justify-center mb-3">
                    {/* Applied a class to size the custom SVGs correctly within the circle */}
                    <Icon className="w-[42px] h-[42px]" />
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

      {/* ─── Gazette List Modal Overlay ─── */}
      {isSyllabusModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-[650px] rounded shadow-xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
              <h3 className="text-[20px] font-semibold text-gray-800 tracking-wide">Gazette List</h3>
              <button 
                onClick={() => setIsSyllabusModalOpen(false)} 
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <X size={26} strokeWidth={2} />
              </button>
            </div>
            
            {/* Modal Body (Table) */}
            <div className="p-5">
              <table className="w-full border-collapse border border-[#446CB3]">
                <thead className="bg-[#446CB3] text-white">
                  <tr>
                    <th className="border border-[#446CB3] p-3 text-left font-bold text-[15px] w-[60px] leading-tight">
                      Sl<br />No.
                    </th>
                    <th className="border border-[#446CB3] p-3 text-left font-bold text-[15px]">
                      Gazette Name
                    </th>
                    <th className="border border-[#446CB3] p-3 text-left font-bold text-[15px] w-[120px] leading-tight">
                      Published<br />Date
                    </th>
                    <th className="border border-[#446CB3] p-3 text-center font-bold text-[15px] w-[70px]">
                      PDF
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="border border-[#446CB3] p-3 text-left font-bold text-gray-800 text-[15px]">
                      1
                    </td>
                    <td className="border border-[#446CB3] p-3 text-gray-700 text-[15px]">
                      Computer competency test examination syllabus
                    </td>
                    <td className="border border-[#446CB3] p-3 text-gray-700 text-left text-[15px]">
                      17/12/2022
                    </td>
                    <td className="border border-[#446CB3] p-3 text-center">
                      {/* Using %20 to properly encode spaces in the file name for safe downloading/viewing */}
                      <a 
                        href="/Syllabus%20for%20Computer%20Competency%20Test%20Examination.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center text-[#0056b3] hover:text-blue-800 transition-colors"
                        title="Download Syllabus PDF"
                      >
                        <Download size={22} strokeWidth={2.5} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}
    </>
  );
}