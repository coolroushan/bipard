const CodingVerificationIllustration = ({ className = "" }) => {
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
      {/* Monitor outer frame */}
      <rect
        x="24"
        y="18"
        width="76"
        height="70"
        rx="2"
        fill="#1D3765"
      />

      {/* Monitor inner frame */}
      <rect
        x="29"
        y="23"
        width="66"
        height="60"
        fill="#F4F6FA"
        stroke="#5570A0"
        strokeWidth="2"
      />

      {/* Screen top line */}
      <path
        d="M31 27H93"
        stroke="#B9C4D7"
        strokeWidth="2"
      />

      {/* Green check box */}
      <rect
        x="69"
        y="31"
        width="18"
        height="18"
        rx="1"
        fill="#45D486"
        stroke="#061B3D"
        strokeWidth="2"
      />

      {/* Green check */}
      <path
        d="M73 40L77 44L84 36"
        stroke="#061B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Red cross box */}
      <rect
        x="69"
        y="56"
        width="18"
        height="18"
        rx="1"
        fill="#FF5555"
        stroke="#061B3D"
        strokeWidth="2"
      />

      {/* Red cross */}
      <path
        d="M74 61L82 69M82 61L74 69"
        stroke="#061B3D"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Screen text lines */}
      <rect
        x="90"
        y="33"
        width="7"
        height="3"
        fill="#536B96"
      />

      <rect
        x="90"
        y="40"
        width="7"
        height="3"
        fill="#536B96"
      />

      <rect
        x="90"
        y="58"
        width="7"
        height="3"
        fill="#536B96"
      />

      <rect
        x="90"
        y="65"
        width="7"
        height="3"
        fill="#536B96"
      />

      {/* Monitor stand */}
      <rect
        x="56"
        y="88"
        width="12"
        height="8"
        fill="#1D3765"
      />

      {/* Monitor base */}
      <rect
        x="43"
        y="96"
        width="38"
        height="7"
        rx="2"
        fill="#263F73"
      />

      {/* Gear - outer cyan shape */}
      <path
        d="
          M27 31
          L31 34
          L35 32
          L36 27
          L42 27
          L44 32
          L48 34
          L53 31
          L57 35
          L54 40
          L56 44
          L61 45
          L61 51
          L56 53
          L54 57
          L57 62
          L53 66
          L48 63
          L44 65
          L43 70
          L37 70
          L35 65
          L31 63
          L26 66
          L22 62
          L25 57
          L23 53
          L18 52
          L18 46
          L23 44
          L25 40
          L22 35
          Z
        "
        fill="#00AEEF"
      />

      {/* Gear dark inner ring */}
      <circle
        cx="39"
        cy="49"
        r="17"
        fill="#061B3D"
      />

      {/* Gear center */}
      <circle
        cx="39"
        cy="49"
        r="12"
        fill="#EAF5FF"
        stroke="#00AEEF"
        strokeWidth="2"
      />

      {/* Code brackets */}
      <path
        d="M35 43L29 49L35 55"
        stroke="#061B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M43 43L49 49L43 55"
        stroke="#061B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Slash */}
      <path
        d="M41 41L37 57"
        stroke="#00AEEF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CodingVerificationIllustration;