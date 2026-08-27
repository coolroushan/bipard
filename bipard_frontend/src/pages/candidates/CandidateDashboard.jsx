import React from "react";
import { useNavigate } from "react-router-dom";

// =====================================================
// Icons
// =====================================================

const InfoIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-amber-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const SendIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

// =====================================================
// Action Button
// =====================================================

const ActionButton = ({
  children,
  icon,
  variant = "primary",
  onClick,
}) => {
  const baseClasses =
    "inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2  px-4 py-2.5 text-sm font-semibold tracking-[0.01em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:translate-y-[1px]";

  const variants = {
    primary:
      "bg-[#07336d] text-white shadow-sm hover:bg-[#062957] hover:shadow-md focus:ring-[#07336d]",

    secondary:
      "border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md focus:ring-slate-400",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${
        variants[variant] || variants.primary
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

// =====================================================
// Dashboard Card
// =====================================================

const DashboardCard = ({ title, tag, children }) => {
  return (
    <div
      className="
        group
        flex h-full flex-col overflow-hidden
       
        border border-slate-200
        bg-white
        shadow-[0_2px_10px_rgba(15,23,42,0.06)]
        transition-all duration-200
        hover:-translate-y-[1px]
        hover:border-slate-300
        hover:shadow-[0_6px_18px_rgba(15,23,42,0.09)]
      "
    >
      <div className="flex h-full flex-col">

        {/* Header */}
        <div
          className="
            relative
            flex min-h-[62px]
            items-center justify-between
            gap-3
            border-b border-slate-200
            bg-gradient-to-r from-slate-50 to-white
            px-5 py-3.5
          "
        >
          {/* Government-style accent */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#07336d]" />

          <h2 className="text-sm font-bold tracking-wide text-slate-900 sm:text-base">
            {title}
          </h2>

          {tag && (
            <span
              className={`shrink-0  border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
                tag.startsWith("Status")
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-slate-200 bg-slate-100 text-slate-600"
              }`}
            >
              {tag}
            </span>
          )}
        </div>

        {/* Body */}
        <div
          className="
            flex flex-1 flex-col
            p-5
            text-sm leading-6
            text-slate-600
            sm:text-[15px]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// =====================================================
// Candidate Dashboard
// =====================================================

function CandidateDashboard() {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        bg-[#eaf3fc]
        bg-cover
        bg-center
        bg-fixed
        bg-no-repeat
        text-slate-800
      "
      style={{
        backgroundImage: "url('/images/dashboard-bg.png')",
      }}
    >
      {/* Soft overlay */}
      <div className="min-h-screen bg-white/20">

        <main
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-4
            py-5
            sm:px-6
            sm:py-7
            lg:px-7
            lg:py-8
            xl:px-8
          "
        >

          {/* =================================================
              Important Notice
          ================================================= */}

          <div
            className="
              relative
              mb-6
              flex items-start
              gap-3
              overflow-hidden
         
              border border-amber-200
              bg-amber-50/95
              p-4
              shadow-sm
              backdrop-blur-sm
              sm:p-4
            "
          >
            {/* Notice accent */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-amber-500" />

            <InfoIcon />

            <div className="text-xs leading-6 text-amber-950 sm:text-sm">
              <span className="font-bold">
                Notice / सूचना:
              </span>{" "}
              Please read all instructions carefully before filling out
              forms or booking practice slots. /

              <span className="ml-1 font-normal text-amber-800">
                आवेदन पत्र भरने अथवा अभ्यास सत्र बुक करने से पूर्व सभी
                निर्देशों को ध्यानपूर्वक पढ़ें।
              </span>
            </div>
          </div>

          {/* =================================================
              Dashboard Cards
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:gap-6
            "
          >

            {/* =================================================
                Card 1 - Application
            ================================================= */}

            <DashboardCard
              title="Application Form"
              tag="Step 01"
            >
              <div className="flex flex-1 flex-col">

                <p className="min-h-[72px]">
                  आप अभ्यास सत्र में शामिल होने के उपरांत या सीधे इस बटन पर
                  क्लिक करके मुख्य परीक्षा हेतु अपना आवेदन पत्र भर सकते हैं।
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <ActionButton
                    icon={<SendIcon />}
                    onClick={() => navigate("/application-form")}
                  >
                    Apply for Examination
                  </ActionButton>
                </div>

              </div>
            </DashboardCard>

            {/* =================================================
                Card 2 - Practice Slot
            ================================================= */}

            <DashboardCard
              title="Practice Exam Slot Booking"
              tag="Step 02"
            >
              <div className="flex flex-1 flex-col">

                <p className="min-h-[72px]">
                  कम्प्यूटर आधारित परीक्षा पद्धति से अवगत होने के लिए अभ्यर्थी
                  अपनी सुविधानुसार विषय चुनकर मॉक/अभ्यास सत्र में भाग ले सकते
                  हैं।
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <ActionButton
                    icon={<CalendarIcon />}
                    onClick={() => navigate("/test")}
                  >
                    Practice Slot
                  </ActionButton>
                </div>

              </div>
            </DashboardCard>

            {/* =================================================
                Card 3 - Admit Card
            ================================================= */}

            <DashboardCard
              title="Admit Card / Hall Ticket"
              tag="Status: Active"
            >
              <div className="flex flex-1 flex-col">

                <p className="min-h-[72px]">
                  Download your verified examination admit card. Ensure all
                  personal details and examination center codes are accurate
                  before printing.
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <ActionButton icon={<DownloadIcon />}>
                    Download Admit Card
                  </ActionButton>
                </div>

              </div>
            </DashboardCard>

            {/* =================================================
                Card 4 - Certificate / Result
            ================================================= */}

            <DashboardCard
              title="Certificates & Results"
              tag="Status: Available"
            >
              <div className="flex flex-1 flex-col">

                <p className="min-h-[72px]">
                  Access and download your digital examination marksheet,
                  provisional rank card, and official score verification
                  certificate.
                </p>

                <div
                  className="
                    mt-auto
                    flex flex-wrap
                    items-center
                    gap-3
                    border-t border-slate-100
                    pt-4
                  "
                >
                  <ActionButton icon={<DownloadIcon />}>
                    Certificate
                  </ActionButton>

                  <ActionButton
                    variant="secondary"
                    icon={<DownloadIcon />}
                  >
                    Scorecard / Result
                  </ActionButton>
                </div>

              </div>
            </DashboardCard>

          </div>
        </main>
      </div>
    </div>
  );
}

export default CandidateDashboard;