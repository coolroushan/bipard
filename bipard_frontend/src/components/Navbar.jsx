import React from "react";
import { UserPlus, LogIn, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white py-2">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1400px]
          overflow-hidden
          rounded-none
          bg-white
          shadow-[0_5px_18px_rgba(0,0,0,0.12)]
        "
      >
        {/* =========================================================
            TOP GOVERNMENT BAR
        ========================================================= */}
        <div className="relative h-[32px] w-full bg-[#06285a]">
          {/* Gold diagonal separator */}
          <div
            className="
              absolute
              right-[310px]
              top-0
              z-10
              hidden
              h-full
              w-[18px]
              bg-[#d9ad72]
              skew-x-[-32deg]
              md:block
            "
          />

          {/* Government Information */}
          <div
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-full
              sm:w-auto
              items-center
              justify-center
              sm:justify-end
              gap-2
              bg-[#06285a]
              px-4
              text-white
              md:px-7
            "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="Government of India Emblem"
              className="h-[20px] w-auto brightness-0 invert"
            />

            <span
              className="
                whitespace-nowrap
                text-[11px]
                font-medium
                tracking-wide
                md:text-[13px]
              "
            >
              बिहार सरकार
            </span>

            <span className="text-white/50">|</span>

            <span
              className="
                whitespace-nowrap
                text-[11px]
                font-medium
                tracking-wide
                md:text-[13px]
              "
            >
              Govt. of Bihar
            </span>
          </div>
        </div>

        {/* =========================================================
            MAIN NAVBAR
        ========================================================= */}
        <div
          className="
            relative
            flex
            flex-col
            lg:flex-row
            min-h-[118px]
            items-center
            justify-between
            gap-4
            lg:gap-6
            bg-white
            px-4
            py-4
            sm:px-6
            md:py-5
            md:px-8
            lg:px-10
          "
        >
          {/* =======================================================
              LEFT BRANDING
          ======================================================= */}
          <div
            className="
              relative
              z-10
              flex
              min-w-0
              w-full
              lg:w-auto
              items-center
              justify-center
              lg:justify-start
              gap-3
              md:gap-4
              lg:gap-5
            "
          >
            {/* BIPARD Logo */}
            <img
              src="/bipard_logo.png"
              alt="BIPARD Logo"
              className="
                h-[50px]
                w-[50px]
                sm:h-[62px]
                sm:w-[62px]
                shrink-0
                object-contain
                md:h-[70px]
                md:w-[70px]
                lg:h-[78px]
                lg:w-[78px]
              "
            />

            {/* BIPARD Text */}
            <div className="shrink-0">
              <h1
                className="
                  m-0
                  text-[28px]
                  sm:text-[32px]
                  font-bold
                  leading-none
                  tracking-[-1.5px]
                  text-[#0a376f]
                  md:text-[38px]
                  lg:text-[42px]
                "
              >
                BIPARD
              </h1>
            </div>

            {/* Vertical Divider */}
            <div
              className="
                mx-1
                hidden
                h-[58px]
                w-px
                bg-[#aeb5bd]
                md:block
                lg:mx-3
              "
            />

            {/* Hindi Organization Name */}
            <div
              className="
                hidden
                flex-col
                justify-center
                md:flex
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-medium
                  leading-[1.45]
                  text-[#333]
                  lg:text-[14px]
                "
              >
                बिहार लोक प्रशासन एवं
              </span>

              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-medium
                  leading-[1.45]
                  text-[#333]
                  lg:text-[14px]
                "
              >
                ग्रामीण विकास संस्थान
              </span>

              <span
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[11px]
                  font-normal
                  leading-[1.4]
                  text-[#777]
                  lg:text-[12px]
                "
              >
                बिहार सरकार
              </span>
            </div>
          </div>

          {/* =======================================================
              RIGHT ACTION BUTTONS
          ======================================================= */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              lg:w-auto
              shrink-0
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-3
              md:gap-4
            "
          >
            {/* REGISTER */}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="
                group
                flex
                w-full
                sm:w-auto
                h-[48px]
                items-center
                justify-center
                gap-2
                cursor-pointer
                rounded-none
                border
                border-[#07336d]
                bg-[#07336d]
                px-4
                text-white
                shadow-[0_2px_5px_rgba(0,0,0,0.08)]
                transition-all
                duration-200
                hover:bg-[#092f61]
                hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)]
                md:h-[50px]
                md:px-5
                lg:min-w-[245px]
                lg:px-5
              "
            >
              <UserPlus size={20} strokeWidth={2} className="shrink-0" />

              <span
                className="
                  whitespace-nowrap
                  text-[12px]
                  font-semibold
                  md:text-[13px]
                  lg:text-[14px]
                "
              >
                Register / परीक्षा हेतु पंजीकरण
              </span>

              <ChevronRight
                size={17}
                strokeWidth={2.2}
                className="
                  ml-1
                  sm:ml-auto
                  shrink-0
                  opacity-90
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* LOGIN */}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="
                group
                flex
                w-full
                sm:w-auto
                h-[48px]
                items-center
                justify-center
                gap-2
                rounded-none
                border
                border-[#16457d]
                bg-white
                px-4
                text-[#07336d]
                transition-all
                duration-200
                cursor-pointer
                hover:bg-[#f7f9fc]
                hover:shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                md:h-[50px]
                md:px-5
                lg:min-w-[180px]
              "
            >
              <LogIn size={20} strokeWidth={2} className="shrink-0" />

              <span
                className="
                  whitespace-nowrap
                  text-[12px]
                  font-semibold
                  md:text-[13px]
                  lg:text-[14px]
                "
              >
                Login / लॉगिन
              </span>

              <ChevronRight
                size={17}
                strokeWidth={2.2}
                className="
                  ml-1
                  sm:ml-auto
                  shrink-0
                  opacity-90
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>

        {/* =========================================================
            BOTTOM GOLD LINE
        ========================================================= */}
        <div className="relative h-[7px] bg-white">
          <div className="absolute left-0 top-0 h-[2px] w-full bg-[#d9ad72]" />
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#f5f1eb]" />
          <div
            className="
              absolute
              left-1/2
              top-0
              flex
              h-[25px]
              w-[82px]
              -translate-x-1/2
              items-center
              justify-center
              gap-[7px]
              rounded-b-[22px]
              bg-[#07336d]
              shadow-[0_2px_5px_rgba(0,0,0,0.12)]
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-full
                bg-[#d9ad72]
              "
            />
            <span className="mt-[3px] text-[9px] text-[#d9ad72]">★</span>
            <span className="mt-[3px] text-[9px] text-[#d9ad72]">★</span>
            <span className="mt-[3px] text-[9px] text-[#d9ad72]">★</span>
          </div>
        </div>
      </div>
    </header>
  );
}