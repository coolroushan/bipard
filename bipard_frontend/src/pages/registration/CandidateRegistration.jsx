import React, { useState } from "react";
import {
  ClipboardList,
  BookOpen,
  PenTool,
  FileCheck,
  User,
  IdCard,
  Briefcase,
  Users,
  Mail,
  Calendar,
  Phone,
  ShieldCheck,
  Users as UsersIcon,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import "./CandidateRegistration.css";

// =====================================================
// INSTRUCTIONS
// =====================================================

const instructions = [
  {
    icon: ClipboardList,
    en: "Incomplete application form shall be rejected.",
    hi: "अपूर्ण आवेदन पत्र स्वीकार्य नहीं होंगे।",
  },
  {
    icon: BookOpen,
    en: "Please read all the instructions carefully before filling up the form.",
    hi: "कृपया प्रपत्र भरने से पहले सभी निर्देशों को ध्यानपूर्वक पढ़ें।",
  },
  {
    icon: PenTool,
    en: "Applicant’s signature is mandatory on the application form.",
    hi: "आवेदन पत्र पर प्रार्थी का हस्ताक्षर अनिवार्य है।",
  },
  {
    icon: FileCheck,
    en: "Please make sure the details mentioned in the application form should be same as the details to be filled up in the examination hall.",
    hi: "कृपया सुनिश्चित करें कि आवेदन पत्र में उल्लिखित विवरण परीक्षा हॉल में भरे जाने वाले विवरण के समान होना चाहिए।",
  },
];

// =====================================================
// DATE HELPERS
// =====================================================

function formatDateToDDMMYYYY(dateString) {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-");

  return `${day}-${month}-${year}`;
}

function calculateAge(dateString) {
  if (!dateString) return 0;

  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  const birthDate = new Date(
    year,
    month - 1,
    day
  );

  const today = new Date();

  let age =
    today.getFullYear() -
    birthDate.getFullYear();

  const monthDifference =
    today.getMonth() -
    birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function getMaxDOB() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");
  const day = String(
    today.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getMinDOB() {
  const today = new Date();

  const year =
    today.getFullYear() - 100;

  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    today.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// =====================================================
// COMPONENT
// =====================================================

export default function CandidateRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    aadhaar: "",
    service: "",
    serviceCadre: "",
    email: "",
    dob: "",
    mobile: "",
    otp: "",
  });

  const [captcha, setCaptcha] =
    useState(false);

  // ===================================================
  // FIXED DUMMY OTP
  // ===================================================

  const [generatedOtp, setGeneratedOtp] =
    useState("1234");

  const [otpSent, setOtpSent] =
    useState(false);

  const [otpVerified, setOtpVerified] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [fieldErrors, setFieldErrors] =
    useState({});

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    let finalValue = value;

    // ===================================================
    // AADHAAR
    // ONLY NUMBERS + MAX 12 DIGITS
    // ===================================================

    if (name === "aadhaar") {
      finalValue = value
        .replace(/\D/g, "")
        .slice(0, 12);
    }

    // ===================================================
    // MOBILE
    // ONLY NUMBERS + MAX 10 DIGITS
    // ===================================================

    if (name === "mobile") {
      finalValue = value
        .replace(/\D/g, "")
        .slice(0, 10);

      // Mobile change means OTP
      // needs to be verified again
      if (otpSent || otpVerified) {
        setOtpSent(false);
        setOtpVerified(false);

        // Fixed OTP remains 1234
        setGeneratedOtp("1234");

        setFormData((prev) => ({
          ...prev,
          otp: "",
        }));
      }
    }

    // ===================================================
    // OTP
    // ONLY NUMBERS + MAX 4 DIGITS
    // ===================================================

    if (name === "otp") {
      finalValue = value
        .replace(/\D/g, "")
        .slice(0, 4);

      if (otpVerified) {
        setOtpVerified(false);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    setError("");
    setSuccess("");

    setFieldErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =====================================================
  // SEND OTP
  // FIXED DUMMY OTP = 1234
  // =====================================================

  const handleSendOTP = () => {
    setError("");
    setSuccess("");

    const mobile = formData.mobile;

    // Mobile required
    if (!mobile) {
      setFieldErrors((prev) => ({
        ...prev,
        mobile:
          "Mobile number is required.",
      }));

      return;
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setFieldErrors((prev) => ({
        ...prev,
        mobile:
          "Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.",
      }));

      return;
    }

    // =================================================
    // FIXED DUMMY OTP
    // =================================================

    const otp = "1234";

    setGeneratedOtp(otp);

    setOtpSent(true);

    setOtpVerified(false);

    setFormData((prev) => ({
      ...prev,
      otp: "",
    }));

    // =================================================
    // SHOW OTP ON SCREEN
    // =================================================

    setSuccess(
      "Demo OTP sent successfully. Your OTP is 1234"
    );
  };

  // =====================================================
  // VERIFY OTP
  // OTP MUST BE 1234
  // =====================================================

  const handleVerifyOTP = () => {
    setError("");
    setSuccess("");

    // OTP not sent
    if (!otpSent) {
      setFieldErrors((prev) => ({
        ...prev,
        otp:
          "Please send OTP first.",
      }));

      return;
    }

    // OTP must be exactly 4 digits
    if (!/^\d{4}$/.test(formData.otp)) {
      setFieldErrors((prev) => ({
        ...prev,
        otp:
          "OTP must be exactly 4 digits.",
      }));

      return;
    }

    // Check fixed OTP
    if (formData.otp !== "1234") {
      setFieldErrors((prev) => ({
        ...prev,
        otp:
          "Invalid OTP. Please enter 1234.",
      }));

      setOtpVerified(false);

      return;
    }

    // OTP verified
    setOtpVerified(true);

    setFieldErrors((prev) => ({
      ...prev,
      otp: "",
    }));

    setSuccess(
      "Mobile number verified successfully."
    );
  };

  // =====================================================
  // VALIDATE FORM
  // =====================================================

  const validateForm = () => {
    const errors = {};

    // ===================================================
    // FULL NAME
    // ===================================================

    const fullName =
      formData.fullName.trim();

    if (!fullName) {
      errors.fullName =
        "Full name is required.";
    } else if (fullName.length < 3) {
      errors.fullName =
        "Full name must contain at least 3 characters.";
    } else if (fullName.length > 100) {
      errors.fullName =
        "Full name cannot exceed 100 characters.";
    } else if (
      !/^[A-Za-z\s.'-]+$/.test(fullName)
    ) {
      errors.fullName =
        "Full name can contain only letters, spaces, dot and hyphen.";
    }

    // ===================================================
    // AADHAAR
    // ONLY 12 DIGITS
    // ===================================================

    if (!formData.aadhaar) {
      errors.aadhaar =
        "Aadhaar number is required.";
    } else if (
      !/^\d{12}$/.test(
        formData.aadhaar
      )
    ) {
      errors.aadhaar =
        "Aadhaar number must contain exactly 12 digits.";
    }

    // ===================================================
    // SERVICE
    // ===================================================

    if (!formData.service) {
      errors.service =
        "Please select service.";
    }

    // ===================================================
    // SERVICE CADRE
    // ===================================================

    if (!formData.serviceCadre) {
      errors.serviceCadre =
        "Please select service cadre.";
    }

    // ===================================================
    // EMAIL
    // ===================================================

    const email =
      formData.email.trim();

    if (!email) {
      errors.email =
        "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        email
      )
    ) {
      errors.email =
        "Please enter a valid email address.";
    }

    // ===================================================
    // DOB
    // ===================================================

    if (!formData.dob) {
      errors.dob =
        "Date of birth is required.";
    } else {
      const age =
        calculateAge(formData.dob);

      if (age < 18) {
        errors.dob =
          "Candidate must be at least 18 years old.";
      }

      if (age > 100) {
        errors.dob =
          "Please enter a valid date of birth.";
      }
    }

    // ===================================================
    // MOBILE
    // ===================================================

    if (!formData.mobile) {
      errors.mobile =
        "Mobile number is required.";
    } else if (
      !/^[6-9]\d{9}$/.test(
        formData.mobile
      )
    ) {
      errors.mobile =
        "Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.";
    }

    // ===================================================
    // OTP
    // ===================================================

    if (!otpVerified) {
      errors.otp =
        "Please send and verify the OTP.";
    }

    // ===================================================
    // CAPTCHA
    // ===================================================

    if (!captcha) {
      errors.captcha =
        "Please verify that you are not a robot.";
    }

    setFieldErrors(errors);

    return (
      Object.keys(errors).length === 0
    );
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const isValid =
      validateForm();

    if (!isValid) {
      setError(
        "Please correct the errors in the form."
      );

      return;
    }

    setLoading(true);

    try {
      // =================================================
      // GET EXISTING USERS
      // =================================================

      const existingUsers =
        JSON.parse(
          localStorage.getItem(
            "registeredUsers"
          )
        ) || [];

      // =================================================
      // DUPLICATE AADHAAR
      // =================================================

      const duplicateAadhaar =
        existingUsers.some(
          (user) =>
            user.aadhaar ===
            formData.aadhaar
        );

      if (duplicateAadhaar) {
        setFieldErrors((prev) => ({
          ...prev,
          aadhaar:
            "This Aadhaar number is already registered.",
        }));

        setLoading(false);

        return;
      }

      // =================================================
      // DUPLICATE EMAIL
      // =================================================

      const duplicateEmail =
        existingUsers.some(
          (user) =>
            user.email?.toLowerCase() ===
            formData.email
              .trim()
              .toLowerCase()
        );

      if (duplicateEmail) {
        setFieldErrors((prev) => ({
          ...prev,
          email:
            "This email address is already registered.",
        }));

        setLoading(false);

        return;
      }

      // =================================================
      // DUPLICATE MOBILE
      // =================================================

      const duplicateMobile =
        existingUsers.some(
          (user) =>
            user.mobile ===
            formData.mobile
        );

      if (duplicateMobile) {
        setFieldErrors((prev) => ({
          ...prev,
          mobile:
            "This mobile number is already registered.",
        }));

        setLoading(false);

        return;
      }

      // =================================================
      // CREATE USER
      // =================================================

      const newUser = {
        id: Date.now(),

        fullName:
          formData.fullName.trim(),

        // ONLY 12 DIGITS
        aadhaar:
          formData.aadhaar,

        service:
          formData.service,

        serviceCadre:
          formData.serviceCadre,

        email:
          formData.email
            .trim()
            .toLowerCase(),

        // Save DOB as DD-MM-YYYY
        dob:
          formatDateToDDMMYYYY(
            formData.dob
          ),

        mobile:
          formData.mobile,

        createdAt:
          new Date().toISOString(),
      };

      // =================================================
      // SAVE USERS
      // =================================================

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([
          ...existingUsers,
          newUser,
        ])
      );

      // =================================================
      // SAVE LAST REGISTERED USER
      // =================================================

      localStorage.setItem(
        "lastRegisteredUser",
        JSON.stringify(newUser)
      );

      // =================================================
      // SUCCESS
      // =================================================

      setSuccess(
        "Registration successful! Redirecting to login..."
      );

      // =================================================
      // REDIRECT LOGIN
      // =================================================

      setTimeout(() => {
        window.location.href =
          "/login";
      }, 1200);
    } catch (err) {
      console.error(
        "Registration Error:",
        err
      );

      setError(
        "Something went wrong while registering."
      );

      setLoading(false);
    }
  };

  // =====================================================
  // FIELD ERROR
  // =====================================================

  const FieldError = ({ name }) => {
    if (!fieldErrors[name]) {
      return null;
    }

    return (
      <p className="mt-1 text-[12px] text-red-600 font-medium">
        {fieldErrors[name]}
      </p>
    );
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[#e2e8f0]">

      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] min-h-[800px] bg-white rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden relative">

        {/* =================================================
            LEFT PANEL
        ================================================= */}

        <div className="registration-left-panel w-full lg:w-[42%] flex flex-col pt-10 pb-10 px-8 lg:px-12 relative shrink-0 overflow-hidden lg:overflow-visible">

          <div className="registration-pattern" />

          <svg
            className="registration-s-curve"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >

            <path
              d="M85,0 C-30,250 140,650 10,1000 L100,1000 L100,0 Z"
              fill="#F4B83F"
            />

            <path
              d="M100,0 C-15,250 155,650 25,1000 L100,1000 Z"
              fill="#ffffff"
            />

          </svg>

          <div className="relative z-10 flex flex-col h-full">

            {/* EMBLEM */}

            <div className="mb-6 flex flex-col items-center">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Government of India Emblem"
                className="w-[50px] h-auto object-contain brightness-0 invert opacity-95 mb-1.5"
              />

              <span className="text-white text-[10px] font-medium tracking-wider">
                सत्यमेव जयते
              </span>

            </div>

            {/* TITLE */}

            <div className="text-center mb-6">

              <h2 className="text-[#F4B83F] font-bold text-[24px] lg:text-[28px] leading-tight tracking-wide">
                GENERAL INSTRUCTIONS /
              </h2>

              <h2 className="text-[#F4B83F] font-bold text-[24px] lg:text-[28px] leading-tight tracking-wide">
                सामान्य निर्देश:
              </h2>

            </div>

            {/* DIVIDER */}

            <div className="flex items-center justify-center gap-3 w-full max-w-[280px] mx-auto mb-8">

              <span className="flex-1 h-px bg-[#E3AD54]/70" />

              <span className="w-1.5 h-1.5 bg-[#E3AD54] rotate-45 rounded-[1px]" />

              <span className="flex-1 h-px bg-[#E3AD54]/70" />

            </div>

            {/* INSTRUCTIONS */}

            <div className="flex flex-col flex-1 pr-0 lg:pr-14">

              {instructions.map(
                (item, idx) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 border-b border-white/15 py-5 first:pt-0 last:border-0"
                    >

                      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">

                        <Icon
                          className="text-[#1260B2]"
                          size={22}
                          strokeWidth={2.5}
                        />

                      </div>

                      <div className="flex flex-col">

                        <p className="text-white font-semibold text-[15px] leading-[1.5] mb-1">
                          {item.en}
                        </p>

                        <p
                          className="text-white/90 text-[15px] leading-[1.6]"
                          style={{
                            fontFamily:
                              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
                          }}
                        >
                          {item.hi}
                        </p>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </div>

        {/* =================================================
            RIGHT FORM
        ================================================= */}

        <div className="w-full lg:flex-1 bg-white flex flex-col px-6 py-8 lg:px-12 relative z-10 shrink-0">

          {/* HEADER */}

          <div className="flex items-center justify-between bg-[#06366F] rounded-[8px] p-4 mb-4 shadow-sm relative overflow-hidden">

            <div className="flex items-center gap-4 z-10">

              <div className="w-8 h-8 rounded-[6px] bg-[#F4B83F] flex items-center justify-center shrink-0">

                <ClipboardList
                  className="text-[#06366F]"
                  size={20}
                  strokeWidth={2.5}
                />

              </div>

              <h2 className="text-white font-bold text-[17px] lg:text-[20px] tracking-wide">
                Candidate Registration
              </h2>

            </div>

            <div className="absolute right-[-20px] top-0 h-full flex gap-2 -skew-x-[30deg] z-0">

              <div className="w-3 bg-white/20 h-full" />

              <div className="w-8 bg-[#F4B83F] h-full" />

              <div className="w-3 bg-white/20 h-full" />

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col flex-1 w-full relative"
          >

            {/* REQUIRED TEXT */}

            <p className="text-[#EF4444] italic text-[13px] text-right font-medium mb-4">
              Fields marked with (*) are mandatory
            </p>

            {/* =================================================
                GLOBAL ERROR
            ================================================= */}

            {error && (
              <div className="mb-4 flex items-center gap-2 p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm font-medium">

                <AlertCircle
                  size={18}
                />

                {error}

              </div>
            )}

            {/* =================================================
                GLOBAL SUCCESS
            ================================================= */}

            {success && (
              <div className="mb-4 flex items-center gap-2 p-3 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm font-medium">

                <CheckCircle2
                  size={18}
                />

                {success}

              </div>
            )}

            <div className="flex flex-col gap-4">

              {/* =================================================
                  FULL NAME
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <User
                    size={18}
                    className="text-[#052B59]"
                  />

                  Full Name / पूरा नाम

                </label>

                <div className="w-full lg:w-[65%]">

                  <input
                    name="fullName"
                    value={
                      formData.fullName
                    }
                    onChange={
                      handleChange
                    }
                    type="text"
                    maxLength={100}
                    placeholder="FirstName MiddleName LastName"
                    className={`w-full h-[45px] px-4 border rounded-[6px] text-[15px] outline-none ${
                      fieldErrors.fullName
                        ? "border-red-400"
                        : "border-[#CBD5E1]"
                    }`}
                  />

                  <FieldError
                    name="fullName"
                  />

                </div>

              </div>

              {/* =================================================
                  AADHAAR
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <IdCard
                    size={18}
                    className="text-[#052B59]"
                  />

                  Aadhaar Number / आधार संख्या

                </label>

                <div className="w-full lg:w-[65%]">

                  <input
                    name="aadhaar"
                    value={
                      formData.aadhaar
                    }
                    onChange={
                      handleChange
                    }
                    type="text"
                    inputMode="numeric"
                    maxLength={12}
                    placeholder="Enter 12 digit Aadhaar number"
                    className={`w-full h-[45px] px-4 border rounded-[6px] text-[15px] outline-none ${
                      fieldErrors.aadhaar
                        ? "border-red-400"
                        : "border-[#CBD5E1]"
                    }`}
                  />

                  <FieldError
                    name="aadhaar"
                  />

                </div>

              </div>

              {/* =================================================
                  SERVICE
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <Briefcase
                    size={18}
                    className="text-[#052B59]"
                  />

                  Service / सेवा

                </label>

                <div className="w-full lg:w-[65%]">

                  <select
                    name="service"
                    value={
                      formData.service
                    }
                    onChange={
                      handleChange
                    }
                    className={`w-full h-[45px] px-4 border rounded-[6px] text-[15px] outline-none bg-white ${
                      fieldErrors.service
                        ? "border-red-400"
                        : "border-[#CBD5E1]"
                    }`}
                  >

                    <option value="">
                      Select Service
                    </option>

                    <option value="gazetted">
                      Gazetted
                    </option>

                    <option value="non-gazetted">
                      Non-Gazetted
                    </option>

                  </select>

                  <FieldError
                    name="service"
                  />

                </div>

              </div>

              {/* =================================================
                  SERVICE CADRE
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <Users
                    size={18}
                    className="text-[#052B59]"
                  />

                  Service Cadre / सेवा संवर्ग

                </label>

                <div className="w-full lg:w-[65%]">

                  <select
                    name="serviceCadre"
                    value={
                      formData.serviceCadre
                    }
                    onChange={
                      handleChange
                    }
                    className={`w-full h-[45px] px-4 border rounded-[6px] text-[15px] outline-none bg-white ${
                      fieldErrors.serviceCadre
                        ? "border-red-400"
                        : "border-[#CBD5E1]"
                    }`}
                  >

                    <option value="">
                      Select Service Cadre
                    </option>

                    <option value="ias">
                      Indian Administrative Service
                    </option>

                    <option value="ips">
                      Indian Police Service
                    </option>

                    <option value="ifs">
                      Indian Forest Service
                    </option>

                    <option value="bas">
                      Bihar Administrative Service
                    </option>

                  </select>

                  <FieldError
                    name="serviceCadre"
                  />

                </div>

              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <Mail
                    size={18}
                    className="text-[#052B59]"
                  />

                  Email / ईमेल

                </label>

                <div className="w-full lg:w-[65%]">

                  <input
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    type="email"
                    maxLength={150}
                    placeholder="Enter Email"
                    className={`w-full h-[45px] px-4 border rounded-[6px] text-[15px] outline-none ${
                      fieldErrors.email
                        ? "border-red-400"
                        : "border-[#CBD5E1]"
                    }`}
                  />

                  <FieldError
                    name="email"
                  />

                </div>

              </div>

              {/* =================================================
                  DOB
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <Calendar
                    size={18}
                    className="text-[#052B59]"
                  />

                  Date of Birth / जन्म तिथि

                </label>

                <div className="w-full lg:w-[65%]">

                  <input
                    name="dob"
                    value={
                      formData.dob
                    }
                    onChange={
                      handleChange
                    }
                    type="date"
                    min={getMinDOB()}
                    max={getMaxDOB()}
                    className={`w-full h-[45px] px-4 border rounded-[6px] text-[15px] outline-none bg-white ${
                      fieldErrors.dob
                        ? "border-red-400"
                        : "border-[#CBD5E1]"
                    }`}
                  />

                  <FieldError
                    name="dob"
                  />

                  <p className="text-[#EF4444] italic text-[12px] font-medium text-center mt-1.5 leading-tight">

                    Select your Date, Month
                    & Year from the calendar.

                    <br />

                    Date will be saved as{" "}
                    <b>DD-MM-YYYY</b>.

                  </p>

                </div>

              </div>

              {/* =================================================
                  MOBILE
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <Phone
                    size={18}
                    className="text-[#052B59]"
                  />

                  Mobile No / मोबाइल नं

                </label>

                <div className="w-full lg:w-[65%]">

                  <div className="flex gap-2">

                    <input
                      name="mobile"
                      value={
                        formData.mobile
                      }
                      onChange={
                        handleChange
                      }
                      type="text"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Enter 10 digit mobile number"
                      className={`flex-1 h-[45px] px-4 border rounded-[6px] text-[15px] outline-none ${
                        fieldErrors.mobile
                          ? "border-red-400"
                          : "border-[#CBD5E1]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={
                        handleSendOTP
                      }
                      className="h-[45px] px-5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-[14px] rounded-[6px] shrink-0"
                    >
                      {otpSent
                        ? "Resend OTP"
                        : "Send OTP"}
                    </button>

                  </div>

                  <FieldError
                    name="mobile"
                  />

                </div>

              </div>

              {/* =================================================
                  OTP
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="w-2" />

                  <span className="w-[18px]" />

                  Enter OTP

                </label>

                <div className="w-full lg:w-[65%]">

                  <div className="flex gap-2">

                    <input
                      name="otp"
                      value={
                        formData.otp
                      }
                      onChange={
                        handleChange
                      }
                      type="text"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="Enter 4 digit OTP"
                      className={`flex-1 h-[45px] px-4 border rounded-[6px] text-[15px] outline-none ${
                        fieldErrors.otp
                          ? "border-red-400"
                          : "border-[#CBD5E1]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={
                        handleVerifyOTP
                      }
                      disabled={
                        otpVerified
                      }
                      className={`h-[45px] px-5 text-white font-semibold text-[14px] rounded-[6px] shrink-0 ${
                        otpVerified
                          ? "bg-green-600"
                          : "bg-[#16A34A] hover:bg-[#15803d]"
                      }`}
                    >
                      {otpVerified
                        ? "Verified ✓"
                        : "Verify OTP"}
                    </button>

                  </div>

                  <FieldError
                    name="otp"
                  />

                  {/* =================================================
                      DUMMY OTP DISPLAY
                  ================================================= */}

                  {otpSent &&
                    !otpVerified && (
                      <div className="mt-2 px-3 py-2 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[13px] font-semibold">

                        Demo OTP:{" "}
                        <span className="text-[#E98313] text-[16px] tracking-widest">
                          1234
                        </span>

                      </div>
                    )}

                </div>

              </div>

              {/* =================================================
                  CAPTCHA
              ================================================= */}

              <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">

                <label className="w-full lg:w-[35%] flex items-center gap-2 text-gray-700 font-semibold text-[14px] pt-3">

                  <span className="text-[#EF4444]">
                    *
                  </span>

                  <ShieldCheck
                    size={18}
                    className="text-[#052B59]"
                  />

                  Click to Verify

                </label>

                <div className="w-full lg:w-[65%]">

                  <div
                    onClick={() =>
                      setCaptcha(
                        !captcha
                      )
                    }
                    className={`w-full max-w-[300px] h-[74px] border rounded-[6px] bg-[#f9fafb] flex items-center justify-between px-4 cursor-pointer ${
                      fieldErrors.captcha
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
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

                      <span className="text-gray-700 font-medium text-[14px]">
                        I'm not a robot
                      </span>

                    </div>

                    <div className="flex flex-col items-center justify-center opacity-60">

                      <ShieldCheck
                        size={26}
                        className="text-gray-500 mb-0.5"
                      />

                      <span className="text-[8px] text-gray-500 font-bold tracking-wider">
                        reCAPTCHA
                      </span>

                    </div>

                  </div>

                  <FieldError
                    name="captcha"
                  />

                </div>

              </div>

            </div>

            {/* =================================================
                REGISTER BUTTON
            ================================================= */}

            <div className="mt-8 flex flex-col gap-6">

              <button
                type="submit"
                disabled={loading}
                className={`w-full h-[52px] text-white font-bold text-[18px] tracking-wide rounded-[6px] transition-all shadow-md flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#E98313] hover:bg-[#d47610]"
                }`}
              >

                <UsersIcon
                  size={22}
                  strokeWidth={2.5}
                />

                {loading
                  ? "Registering..."
                  : "Register"}

              </button>

              {/* OR */}

              <div className="flex items-center justify-center gap-4 w-full">

                <span className="h-px bg-gray-200 flex-1" />

                <span className="text-gray-400 text-sm font-medium border border-gray-200 rounded-full px-3 py-1">
                  OR
                </span>

                <span className="h-px bg-gray-200 flex-1" />

              </div>

              {/* LOGIN */}

              <div className="text-center">

                <span className="text-gray-600 text-[15px] font-medium">
                  Already a member?{" "}
                </span>

                <a
                  href="/login"
                  className="text-[#1260B2] font-bold text-[15px] hover:underline"
                >
                  Login now
                </a>

              </div>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}