import React, { useState } from "react";
import {
  Search,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  User,
  CalendarDays,
  Award,
  RotateCcw,
  FileCheck2,
} from "lucide-react";

function Verification() {
  // =====================================================
  // STATES
  // =====================================================

  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [certificateUser, setCertificateUser] = useState(null);

  // =====================================================
  // DUMMY CERTIFICATE NUMBER
  // =====================================================

  const DUMMY_CERTIFICATE_NUMBER = "123456789";

  // =====================================================
  // SEARCH CERTIFICATE
  // =====================================================

  const handleSearch = () => {
    const enteredNumber = certificateNumber.trim();

    if (!enteredNumber) {
      setVerificationStatus("empty");
      setCertificateUser(null);
      return;
    }

    if (enteredNumber !== DUMMY_CERTIFICATE_NUMBER) {
      setVerificationStatus("invalid");
      setCertificateUser(null);
      return;
    }

    try {
      const storedUsers = localStorage.getItem("registeredUsers");
      const registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];

      let user = null;

      if (Array.isArray(registeredUsers) && registeredUsers.length > 0) {
        user = registeredUsers[0];
      }

      if (user) {
        setCertificateUser(user);
      } else {
        setCertificateUser({
          fullName: "Registered Candidate",
          dob: "01-01-1990",
        });
      }

      setVerificationStatus("verified");
    } catch (error) {
      console.error("Certificate verification error:", error);
      setVerificationStatus("error");
      setCertificateUser(null);
    }
  };

  // =====================================================
  // ENTER KEY
  // =====================================================

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // =====================================================
  // RESET
  // =====================================================

  const handleReset = () => {
    setCertificateNumber("");
    setVerificationStatus(null);
    setCertificateUser(null);
  };

  // =====================================================
  // FORMAT DOB
  // =====================================================

  const formatDOB = (dob) => {
    if (!dob) return "Not Available";

    if (/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
      return dob;
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
      const [year, month, day] = dob.split("-");
      return `${day}-${month}-${year}`;
    }

    return dob;
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/images/dashboard-bg.png')",
      }}
    >
      {/* =================================================
          BACKGROUND OVERLAY
      ================================================= */}
      <div className="fixed inset-0 bg-white/60 pointer-events-none z-0" />

      {/* =================================================
          PAGE CONTENT
      ================================================= */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* =================================================
            MAIN CONTENT AREA
        ================================================= */}
        <main className="flex-1 px-4 py-8 md:py-10">
          <div className="max-w-[960px] mx-auto">

            {/* =================================================
                SEARCH CARD
            ================================================= */}
            <div className="bg-white border border-[#06366F]/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

              {/* Card Ribbon Header */}
              <div className="bg-[#06366F] px-6 py-3.5 flex items-center justify-between border-b border-[#E3AD54]">
                <div className="flex items-center gap-3">
                  <FileCheck2
                    size={20}
                    className="text-[#F4B83F]"
                  />

                  <span className="text-white font-bold text-[16px] tracking-wide uppercase">
                    Certificate Search & Verification
                  </span>
                </div>

                <span className="text-[#F4B83F] text-[11px] font-semibold uppercase tracking-wider">
                  Public Record Check
                </span>
              </div>

              {/* Form Input Body */}
              <div className="p-6 md:p-8">
                <div className="max-w-[700px] mx-auto">

                  <label
                    htmlFor="certificateNumber"
                    className="block text-[#06366F] font-bold text-[14px] mb-2 uppercase tracking-wide"
                  >
                    Enter Certificate Number / प्रमाण पत्र संख्या
                    <span className="text-red-500 ml-1 font-bold">
                      *
                    </span>
                  </label>

                  <div className="flex flex-col sm:flex-row gap-0 border border-gray-400 focus-within:border-[#06366F] focus-within:ring-1 focus-within:ring-[#06366F]">

                    {/* Icon */}
                    <div className="w-full sm:w-[48px] h-[48px] bg-[#EEF3F8] flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-300 shrink-0">
                      <Award
                        size={20}
                        className="text-[#06366F]"
                      />
                    </div>

                    {/* Input */}
                    <input
                      id="certificateNumber"
                      type="text"
                      inputMode="numeric"
                      value={certificateNumber}
                      onChange={(e) => {
                        setCertificateNumber(
                          e.target.value.replace(/\D/g, "")
                        );

                        setVerificationStatus(null);
                        setCertificateUser(null);
                      }}
                      onKeyDown={handleKeyDown}
                      placeholder="e.g. 123456789"
                      className="flex-1 h-[48px] px-4 text-[15px] font-medium text-gray-800 outline-none bg-white placeholder-gray-400 min-w-0"
                    />

                    {/* Verify Button */}
                    <button
                      type="button"
                      onClick={handleSearch}
                      className="h-[48px] px-8 bg-[#E98313] hover:bg-[#d47610] text-white font-bold text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shrink-0"
                    >
                      <Search
                        size={17}
                        strokeWidth={2.5}
                      />

                      Verify Now
                    </button>
                  </div>

                  {/* Demo Helper Box */}
                  <div className="mt-4 p-3 bg-[#EEF3F8] border-l-4 border-[#06366F] flex items-center justify-between text-[12px] text-gray-700">

                    <span>
                      <strong className="text-[#06366F]">
                        Demo Reference:
                      </strong>{" "}
                      Use certificate number{" "}
                      <code className="font-bold text-[#06366F] bg-white px-1.5 py-0.5 border border-gray-300">
                        123456789
                      </code>{" "}
                      to test verification.
                    </span>

                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                EMPTY ERROR ALERT
            ================================================= */}
            {verificationStatus === "empty" && (
              <div className="mt-6 bg-white border-l-4 border-red-600 p-5 shadow-sm border-t border-r border-b border-gray-200">

                <div className="flex items-center gap-3.5">
                  <XCircle
                    size={24}
                    className="text-red-600 shrink-0"
                  />

                  <div>
                    <h3 className="text-red-700 font-bold text-[15px] uppercase tracking-wide">
                      Input Required
                    </h3>

                    <p className="text-gray-600 text-[13px] mt-0.5">
                      Please provide a valid certificate number before
                      initiating verification.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================
                INVALID RECORD ALERT
            ================================================= */}
            {verificationStatus === "invalid" && (
              <div className="mt-6 bg-white border-l-4 border-red-600 p-5 shadow-sm border-t border-r border-b border-gray-200">

                <div className="flex items-start gap-3.5">
                  <XCircle
                    size={24}
                    className="text-red-600 shrink-0 mt-0.5"
                  />

                  <div className="flex-1">
                    <h3 className="text-red-700 font-bold text-[15px] uppercase tracking-wide">
                      Record Not Found
                    </h3>

                    <p className="text-gray-700 text-[13px] mt-1">
                      No matching certificate record exists for the
                      provided number. Please ensure the number is entered
                      accurately without spaces or special characters.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================
                SYSTEM ERROR ALERT
            ================================================= */}
            {verificationStatus === "error" && (
              <div className="mt-6 bg-white border-l-4 border-red-600 p-5 shadow-sm border-t border-r border-b border-gray-200">

                <div className="flex items-center gap-3.5">
                  <XCircle
                    size={24}
                    className="text-red-600 shrink-0"
                  />

                  <div>
                    <h3 className="text-red-700 font-bold text-[15px] uppercase tracking-wide">
                      Verification Error
                    </h3>

                    <p className="text-gray-600 text-[13px] mt-0.5">
                      Unable to access verification database. Please
                      re-try in a few moments.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================
                VERIFIED SUCCESS PANEL
            ================================================= */}
            {verificationStatus === "verified" &&
              certificateUser && (
                <div className="mt-6 bg-white border border-gray-300 shadow-md">

                  {/* Green Verified Banner */}
                  <div className="bg-[#15803D] px-6 py-4 flex items-center justify-between text-white border-b-2 border-[#166534]">

                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={24}
                        className="text-white shrink-0"
                      />

                      <div>
                        <h3 className="text-[17px] font-bold tracking-wide uppercase">
                          Certificate Authenticity Confirmed
                        </h3>

                        <p className="text-[12px] text-green-100">
                          Record matched and verified against official
                          registry.
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-3 py-1 bg-white/20 text-[11px] font-bold tracking-wider uppercase border border-white/30">
                      Status: Valid
                    </span>
                  </div>

                  {/* Data Table */}
                  <div className="p-6 md:p-8">

                    <div className="border border-gray-300 mb-6">

                      <div className="bg-[#EEF3F8] px-4 py-2.5 border-b border-gray-300 font-bold text-[#06366F] text-[13px] uppercase tracking-wider">
                        Candidate & Examination Details
                      </div>

                      <div className="divide-y divide-gray-200 text-[14px]">

                        {/* Certificate Number */}
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-[220px] bg-gray-50 px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">
                            Certificate Number
                          </div>

                          <div className="flex-1 px-4 py-3 font-bold text-[#06366F] tracking-wide">
                            {certificateNumber}
                          </div>
                        </div>

                        {/* Candidate Name */}
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-[220px] bg-gray-50 px-4 py-3 font-semibold text-gray-700 border-r border-gray-200 flex items-center gap-2">
                            <User
                              size={16}
                              className="text-gray-500"
                            />

                            Candidate Full Name
                          </div>

                          <div className="flex-1 px-4 py-3 font-bold text-gray-900 uppercase">
                            {certificateUser.fullName ||
                              "Not Available"}
                          </div>
                        </div>

                        {/* DOB */}
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-[220px] bg-gray-50 px-4 py-3 font-semibold text-gray-700 border-r border-gray-200 flex items-center gap-2">
                            <CalendarDays
                              size={16}
                              className="text-gray-500"
                            />

                            Date of Birth
                          </div>

                          <div className="flex-1 px-4 py-3 text-gray-800 font-medium">
                            {formatDOB(certificateUser.dob)}
                          </div>
                        </div>

                        {/* Exam Title */}
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-[220px] bg-gray-50 px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">
                            Exam Title
                          </div>

                          <div className="flex-1 px-4 py-3 text-gray-800 font-medium">
                            Computer Competency Test Examination (CCT)
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Reset Action */}
                    <div className="flex justify-center pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="h-[44px] px-6 border-2 border-[#06366F] text-[#06366F] hover:bg-[#06366F] hover:text-white font-bold text-[13px] uppercase tracking-wider flex items-center gap-2 transition-all"
                      >
                        <RotateCcw size={16} />

                        Verify Another Certificate
                      </button>
                    </div>

                  </div>
                </div>
              )}

          </div>
        </main>
      </div>
    </div>
  );
}

export default Verification;