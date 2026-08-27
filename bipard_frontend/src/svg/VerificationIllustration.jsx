const VerificationIllustration = ({ className = "" }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main document shadow/back */}
      <rect
        x="13"
        y="18"
        width="79"
        height="91"
        rx="10"
        fill="#4B6387"
      />

      {/* Document */}
      <rect
        x="19"
        y="14"
        width="76"
        height="91"
        rx="8"
        fill="#FFFFFF"
        stroke="#31527D"
        strokeWidth="3"
      />

      {/* Top blue folder/tab */}
      <path
        d="M29 21C29 14 34 9 41 9H47C50 9 52 5 57 5H65C70 5 74 9 75 14H84C90 14 94 18 94 24H29V21Z"
        fill="#20A9F5"
      />

      {/* Folder highlight */}
      <path
        d="M47 10C49 6 53 3 58 3C64 3 68 6 70 11"
        stroke="#75D4FF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Yellow checkbox */}
      <rect
        x="27"
        y="35"
        width="18"
        height="18"
        rx="2"
        fill="#FFC400"
      />

      <path
        d="M31 43L35 47L42 39"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* First text lines */}
      <rect
        x="52"
        y="37"
        width="35"
        height="4"
        rx="2"
        fill="#C9D2DE"
      />

      <rect
        x="52"
        y="46"
        width="25"
        height="4"
        rx="2"
        fill="#D9E0E8"
      />

      {/* Purple checkbox */}
      <rect
        x="27"
        y="62"
        width="18"
        height="18"
        rx="2"
        fill="#A64CE8"
      />

      <path
        d="M31 70L35 74L42 66"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Second text lines */}
      <rect
        x="52"
        y="64"
        width="34"
        height="4"
        rx="2"
        fill="#C9D2DE"
      />

      <rect
        x="52"
        y="73"
        width="27"
        height="4"
        rx="2"
        fill="#D9E0E8"
      />

      {/* Green checkbox */}
      <rect
        x="27"
        y="88"
        width="18"
        height="18"
        rx="2"
        fill="#18A64A"
      />

      <path
        d="M31 96L35 100L42 92"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Third text lines */}
      <rect
        x="52"
        y="90"
        width="34"
        height="4"
        rx="2"
        fill="#C9D2DE"
      />

      <rect
        x="52"
        y="99"
        width="24"
        height="4"
        rx="2"
        fill="#D9E0E8"
      />

      {/* Verification blue circle */}
      <circle
        cx="91"
        cy="67"
        r="27"
        fill="#52B9F8"
      />

      {/* Circle highlight */}
      <circle
        cx="96"
        cy="60"
        r="21"
        fill="#48B3F5"
      />

      {/* Verification check */}
      <path
        d="M78 67L87 76L104 56"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small highlight */}
      <circle
        cx="101"
        cy="49"
        r="3"
        fill="#BDEBFF"
      />
    </svg>
  );
};

export default VerificationIllustration;  