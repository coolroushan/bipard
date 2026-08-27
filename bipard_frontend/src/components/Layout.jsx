import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/* ── News Ticker Component ───────────────────────────────────── */
const NewsTicker = () => {
  return (
    <div className="w-full bg-[#828282] text-white py-1 overflow-hidden flex relative group border-t border-b border-gray-400 shadow-sm z-10">
      
      {/* 
        Injecting scoped CSS for the seamless loop animation.
        This prevents needing to modify your tailwind.config.js
      */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
        /* Pauses the animation when the user hovers over the bar */
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* The scrolling container - Added whitespace-nowrap here */}
      <div className="animate-scroll whitespace-nowrap text-[14px] md:text-[15px] font-medium tracking-wide">
        
        {/* Block 1 (Original) - Added shrink-0 to prevent flex compression */}
        <div className="flex items-center gap-16 px-8 shrink-0">
          <span>Exam will be conducted only on saturdays of every month for without training candidates.</span>
          <span>Slots will be announced every two weeks for with training candidates.</span>
        </div>

        {/* Block 2 (Duplicate for seamless infinite looping) - Added shrink-0 */}
        <div className="flex items-center gap-16 px-8 shrink-0">
          <span>Exam will be conducted only on saturdays of every month for without training candidates.</span>
          <span>Slots will be announced every two weeks for with training candidates.</span>
        </div>
        
      </div>
    </div>
  );
};

/* ── Main Layout ─────────────────────────────────────────────── */
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Inserted the running ticker below the Navbar */}
      <NewsTicker />
      
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}