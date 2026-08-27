import React, { useState } from "react";
import {
  CreditCard,
  CalendarDays,
  ShieldCheck,
  LockKeyhole,
  LogIn,
  AlertCircle,
} from "lucide-react";
import "./CandidateLogin.css";

const instructions = [
  {
    en: "Incomplete application form shall be rejected.",
    hi: "अपूर्ण आवेदन पत्र स्वीकार्य नहीं होंगे।",
  },
  {
    en: "Please read all the instructions carefully before filling up the form.",
    hi: "कृपया प्रपत्र भरने से पहले सभी निर्देशों को ध्यानपूर्वक पढ़ें।",
  },
  {
    en: "Applicant’s signature is mandatory on the application form.",
    hi: "आवेदन पत्र पर प्रार्थी का हस्ताक्षर अनिवार्य है।",
  },
  {
    en: "Please make sure the details mentioned in the application form should be same as the details to be filled up in the examination hall.",
    hi: "कृपया सुनिश्चित करें कि आवेदन पत्र में उल्लिखित विवरण परीक्षा हॉल में भरे जाने वाले विवरण के समान होना चाहिए।",
  },
];

/* =========================================================
   DATE FORMAT
========================================================= */

function formatDateToDDMMYYYY(dateString) {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-");

  return `${day}-${month}-${year}`;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function CandidateLogin() {
  const [aadhaar, setAadhaar] = useState("");

  const [dob, setDob] = useState("");

  const [captcha, setCaptcha] = useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  /* =========================================================
     LOGIN
  ========================================================= */

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    /* AADHAAR */

    if (!aadhaar) {
      setError(
        "Please enter your Aadhaar number."
      );

      return;
    }

    if (!/^\d{12}$/.test(aadhaar)) {
      setError(
        "Aadhaar number must contain exactly 12 digits."
      );

      return;
    }

    /* DOB */

    if (!dob) {
      setError(
        "Please select your Date of Birth."
      );

      return;
    }

    /* CAPTCHA */

    if (!captcha) {
      setError(
        "Please verify that you are not a robot."
      );

      return;
    }

    setLoading(true);

    try {
      /* ================================================
         GET USERS
      ================================================= */

      const registeredUsers =
        JSON.parse(
          localStorage.getItem("registeredUsers")
        ) || [];

      if (registeredUsers.length === 0) {
        setError(
          "No registered candidate found. Please register first."
        );

        setLoading(false);

        return;
      }

      /* ================================================
         FORMAT DOB
      ================================================= */

      const formattedDOB =
        formatDateToDDMMYYYY(dob);

      /* ================================================
         MATCH USER
      ================================================= */

      const user = registeredUsers.find(
        (item) =>
          item.aadhaar === aadhaar &&
          item.dob === formattedDOB
      );

      /* ================================================
         LOGIN SUCCESS
      ================================================= */

      if (user) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        );

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        setTimeout(() => {
          window.location.href =
            "/application";
        }, 500);

        return;
      }

      /* ================================================
         LOGIN FAILED
      ================================================= */

      setError(
        "Invalid Aadhaar Number or Date of Birth. Please check your registered details."
      );

      setLoading(false);
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-6 bg-white">

      <div className="flex flex-col md:flex-row w-full max-w-[1400px] min-h-[720px] bg-white rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden relative">

        {/* =====================================================
            LEFT PANEL
        ====================================================== */}

        <div className="login-left-panel w-full md:w-[44%] lg:w-[46%] flex flex-col pt-10 pb-10 px-8 lg:px-12 relative shrink-0">

          <div className="login-pattern" />

          <svg
            className="login-s-curve"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >

            <path
              d="M100,0 C-40,250 110,700 10,1000 L100,1000 Z"
              fill="#E3AD54"
            />

            <path
              d="M100,0 C-25,250 125,700 25,1000 L100,1000 Z"
              fill="#ffffff"
            />

          </svg>

          <div className="relative z-10 flex flex-col h-full">

            {/* EMBLEM */}

            <div className="mb-8 flex flex-col items-center self-start md:self-center">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Government of India Emblem"
                className="w-[45px] h-auto object-contain brightness-0 invert opacity-95 mb-1.5"
              />

              <span className="text-white text-[10px] font-medium tracking-wide">
                सत्यमेव जयते
              </span>

            </div>

            {/* HEADING */}

            <h2 className="text-[#F4B83F] font-bold text-[22px] lg:text-[24px] leading-tight mb-2 tracking-wide">
              GENERAL INSTRUCTIONS / सामान्य निर्देश:
            </h2>

            <div className="flex items-center gap-3 w-[180px] mb-8">

              <span className="flex-1 h-px bg-[#E3AD54]" />

              <span className="w-1.5 h-1.5 bg-[#E3AD54] rotate-45 rounded-[1px]" />

              <span className="flex-1 h-px bg-[#E3AD54]" />

            </div>

            {/* INSTRUCTIONS */}

            <div className="flex flex-col gap-5 flex-1 pr-4 md:pr-12">

              {instructions.map((item, idx) => (

                <div
                  key={idx}
                  className="flex flex-col border-b border-white/10 pb-4 last:border-0"
                >

                  <p className="text-white font-semibold text-[15px] lg:text-[16px] leading-[1.5] mb-1.5">
                    {item.en}
                  </p>

                  <p
                    className="text-white/90 text-[15px] lg:text-[16px] leading-[1.6]"
                    style={{
                      fontFamily:
                        '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
                    }}
                  >
                    {item.hi}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT LOGIN
        ====================================================== */}

        <div className="w-full md:flex-1 bg-white flex flex-col px-6 py-10 lg:px-14 relative z-10 shrink-0">
          
          {/* Government Style Header */}
          <div className="flex items-center justify-between bg-[#06366F] rounded-[8px] p-4 mb-8 shadow-sm relative overflow-hidden">
  <div className="flex items-center gap-4 z-10">
    <div className="w-8 h-8 rounded-[6px] bg-[#F4B83F] flex items-center justify-center shrink-0">
      <LockKeyhole className="text-[#06366F]" size={20} strokeWidth={2.5} />
    </div>
    <h2 className="text-white font-bold text-[17px] lg:text-[20px] tracking-wide">
      Candidate Login
    </h2>
  </div>
  {/* Header Diagonal Decorative Slashes */}
  <div className="absolute right-[-20px] top-0 h-full flex gap-2 -skew-x-[30deg] z-0">
    <div className="w-3 bg-white/20 h-full" />
    <div className="w-8 bg-[#F4B83F] h-full" />
    <div className="w-3 bg-white/20 h-full" />
  </div>
</div>

          <form className="flex flex-col gap-6 flex-1 w-full max-w-[480px] mx-auto md:ml-0 md:max-w-none">
            
            {/* Mandatory Fields Notice */}
            <p className="text-[#EF4444] italic text-[14px] md:text-[15px] text-right font-medium">
              Fields marked with (*) are mandatory
            </p>

            {/* ERROR */}

            {error && (

              <div className="flex items-center gap-2 p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm font-medium">

                <AlertCircle size={18} />

                {error}

              </div>

            )}

            {/* =================================================
                AADHAAR
            ================================================== */}

            <div className="flex flex-col">

              <label
                htmlFor="aadhaar"
                className="block text-gray-800 font-bold mb-2 text-[14px] md:text-[15px]"
              >

                <span className="text-[#EF4444] mr-1 text-[16px]">
                  *
                </span>

                Aadhaar Number / आधार संख्या

              </label>

              <div className={`flex items-center border rounded-[8px] overflow-hidden h-[55px] bg-white ${
                error
                  ? "border-gray-300"
                  : "border-gray-300"
              }`}>

                <div className="w-[55px] h-full bg-[#f8fafc] flex items-center justify-center border-r border-gray-200 shrink-0">

                  <CreditCard
                    className="text-[#06366F]/60"
                    size={22}
                  />

                </div>

                <input
                  id="aadhaar"
                  type="text"
                  inputMode="numeric"
                  maxLength={12}
                  value={aadhaar}
                  onChange={(e) => {
                    setAadhaar(
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 12)
                    );

                    setError("");
                  }}
                  placeholder="Enter 12 digit Aadhaar number"
                  className="flex-1 h-full px-4 text-[16px] text-gray-800 outline-none placeholder-gray-400 bg-transparent"
                />

              </div>

            </div>

            {/* =================================================
                DOB
            ================================================== */}

            <div className="flex flex-col">

              <label
                htmlFor="dob"
                className="block text-gray-800 font-bold mb-2 text-[14px] md:text-[15px]"
              >

                <span className="text-[#EF4444] mr-1 text-[16px]">
                  *
                </span>

                Password - Date of Birth

              </label>

              <div className="flex items-center border border-gray-300 rounded-[8px] overflow-hidden h-[55px] bg-white">

                <div className="w-[55px] h-full bg-[#f8fafc] flex items-center justify-center border-r border-gray-200 shrink-0">

                  <CalendarDays
                    className="text-[#06366F]/60"
                    size={22}
                  />

                </div>

                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                    setError("");
                  }}
                  className="flex-1 h-full px-4 text-[16px] text-gray-800 outline-none bg-transparent"
                />

              </div>

              <p className="text-gray-500 text-[12px] mt-1.5">
                Select your Date of Birth from the calendar.
              </p>

            </div>

            {/* =================================================
                CAPTCHA
            ================================================== */}

            <div className="flex flex-col">

              <label className="block text-gray-800 font-bold mb-2 text-[14px] md:text-[15px]">

                <span className="text-[#EF4444] mr-1 text-[16px]">
                  *
                </span>

                Click To Verify

              </label>

              <div
                onClick={() =>
                  setCaptcha(!captcha)
                }
                className="w-full h-[74px] border border-gray-300 rounded-[8px] bg-[#f9fafb] flex items-center justify-between px-4 cursor-pointer hover:bg-gray-50 transition-colors"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`w-7 h-7 border-2 rounded-sm flex items-center justify-center ${
                      captcha
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300 bg-white"
                    }`}
                  >

                    {captcha && (
                      <span className="text-white font-bold">
                        ✓
                      </span>
                    )}

                  </div>

                  <span className="text-gray-700 font-medium text-[15px]">
                    I'm not a robot
                  </span>

                </div>

                <div className="flex flex-col items-center justify-center opacity-60">

                  <ShieldCheck
                    size={28}
                    className="text-gray-500 mb-0.5"
                  />

                  <span className="text-[9px] text-gray-500 font-semibold tracking-wider">
                    reCAPTCHA
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                LOGIN BUTTON
            ================================================== */}

            <div className="mt-2 flex flex-col gap-6">

              <button
                type="submit"
                disabled={loading}
                className={`w-full h-[58px] text-white font-bold text-[18px] tracking-wide rounded-[8px] transition-all shadow-md flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#E98313] hover:bg-[#d47610]"
                }`}
              >

                {loading
                  ? "Logging in..."
                  : "Login"}

                {!loading && (
                  <LogIn
                    size={20}
                    strokeWidth={2.5}
                  />
                )}

              </button>

              {/* OR */}

              <div className="flex items-center justify-center gap-4 w-full">

                <span className="h-px bg-gray-200 flex-1" />

                <span className="text-gray-400 text-sm font-medium border border-gray-200 rounded-full px-3 py-1">
                  OR
                </span>

                <span className="h-px bg-gray-200 flex-1" />

              </div>

              {/* REGISTER */}

              <div className="text-center">

                <span className="text-gray-600 text-[15px] font-medium">
                  Not a member?{" "}
                </span>

                <a
                  href="/register"
                  className="text-[#06366F] font-bold text-[15px] hover:underline"
                >
                  Register now
                </a>

              </div>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}