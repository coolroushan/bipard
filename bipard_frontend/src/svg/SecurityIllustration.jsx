const SecurityIllustration = ({ className = "" }) => {
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
      {/* Cyan background document/device */}
      <rect
        x="8"
        y="6"
        width="76"
        height="108"
        rx="9"
        fill="#18C8F2"
      />

      {/* Top highlight */}
      <path
        d="M19 7H67C72 7 76 11 76 16V22H19V7Z"
        fill="#22D5F5"
      />

      {/* Small top slot */}
      <rect
        x="32"
        y="11"
        width="25"
        height="5"
        rx="2.5"
        fill="#061B3D"
      />

      {/* Green security panel */}
      <path
        d="M25 20H101C106 20 110 24 110 29V78C110 83 106 87 101 87H47L35 102C32 106 27 104 27 99V87H25C20 87 16 83 16 78V29C16 24 20 20 25 20Z"
        fill="#9BE329"
        stroke="#061B3D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Lock body */}
      <rect
        x="22"
        y="49"
        width="48"
        height="39"
        rx="6"
        fill="#FFF1A8"
        stroke="#061B3D"
        strokeWidth="3"
      />

      {/* Lock shackle */}
      <path
        d="M32 50V40C32 31 38 26 46 26C54 26 60 31 60 40V50"
        stroke="#061B3D"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Shackle inner */}
      <path
        d="M39 49V40C39 36 42 33 46 33C50 33 53 36 53 40V49"
        stroke="#D8E5D4"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Keyhole */}
      <circle
        cx="46"
        cy="62"
        r="5"
        fill="#F4A500"
      />

      <path
        d="M46 66V76"
        stroke="#F4A500"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Password dots/lines */}
      <rect
        x="67"
        y="40"
        width="38"
        height="5"
        rx="2.5"
        fill="#061B3D"
      />

      <rect
        x="67"
        y="50"
        width="26"
        height="5"
        rx="2.5"
        fill="#061B3D"
      />

      {/* Password field */}
      <rect
        x="65"
        y="59"
        width="43"
        height="17"
        rx="4"
        fill="#FFFFFF"
        stroke="#061B3D"
        strokeWidth="2"
      />

      {/* Password dots */}
      <circle cx="72" cy="67.5" r="2" fill="#061B3D" />
      <circle cx="79" cy="67.5" r="2" fill="#061B3D" />
      <circle cx="86" cy="67.5" r="2" fill="#061B3D" />
      <circle cx="93" cy="67.5" r="2" fill="#061B3D" />
      <circle cx="100" cy="67.5" r="2" fill="#061B3D" />

      {/* Small cyan accent on right */}
      <path
        d="M108 31V75"
        stroke="#7CEAFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
};

export default SecurityIllustration;