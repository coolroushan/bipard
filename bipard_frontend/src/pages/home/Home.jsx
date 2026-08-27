import React from "react";
import HomeLeftPanel from "./HomeLeftPanel"; // Adjust path based on your folder structure
// ... import your other components like DirectorMessage
import DirectorMessage from "./DirectorMessage";
export default function Home() {
  return (
    <div className="w-full flex-grow flex items-center justify-center p-0 md:p-6 bg-white">
      {/* 
        The main container is set to stretch and have a white background on the right, 
        which perfectly aligns with the White Mask Layer inside the Left Panel curve.
      */}
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] bg-white md:rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.12)] min-h-[600px] md:min-h-[650px] relative">
        
        {/* Left Side Panel Component */}
        <HomeLeftPanel />

        {/* Right Content Area (Existing component) */}
        <DirectorMessage />
        
      </div>
    </div>
  );
}