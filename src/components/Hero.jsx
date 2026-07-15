import { scrollToElement } from '../utils/scrollHelpers';

const Hero = () => (
  <section className="hero" id="top">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="boton-hero-urko"
      viewBox="0 0 900 140"
      role="button"
      tabIndex={0}
      aria-label="Una escuela que cambia vidas - ir a Escuela Urko"
      onClick={() => scrollToElement('escuela-urko')}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToElement('escuela-urko');
        }
      }}
    >
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#5c370d" />
          <stop offset="18%" stop-color="#9d6b17" />
          <stop offset="38%" stop-color="#ffd36d" />
          <stop offset="62%" stop-color="#d39d39" />
          <stop offset="82%" stop-color="#8a5c13" />
          <stop offset="100%" stop-color="#4a2b08" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="transparent" />

      <path
        d="M35 20 H865 Q880 20 880 35 V105 Q880 120 865 120 H35 Q20 120 20 105 V35 Q20 20 35 20Z"
        fill="#060606"
        stroke="url(#gold)"
        strokeWidth="2"
      />

      <path
        d="M45 30 H855 Q870 30 870 45 V95 Q870 110 855 110 H45 Q30 110 30 95 V45 Q30 30 45 30Z"
        fill="none"
        stroke="url(#gold)"
        strokeWidth="1"
      />

      <g stroke="url(#gold)" fill="none" strokeWidth="2">
        <path d="M20 70 L8 70" />
        <path d="M8 70 L18 60" />
        <path d="M8 70 L18 80" />
        <circle cx="22" cy="70" r="4" fill="url(#gold)" />
      </g>

      <g stroke="url(#gold)" fill="none" strokeWidth="2">
        <path d="M880 70 L892 70" />
        <path d="M892 70 L882 60" />
        <path d="M892 70 L882 80" />
        <circle cx="878" cy="70" r="4" fill="url(#gold)" />
      </g>

      <polygon
        points="450,10 460,20 450,30 440,20"
        fill="#060606"
        stroke="url(#gold)"
        strokeWidth="2"
      />

      <polygon
        points="450,110 460,120 450,130 440,120"
        fill="#060606"
        stroke="url(#gold)"
        strokeWidth="2"
      />

      <line
        x1="180"
        y1="70"
        x2="720"
        y2="70"
        stroke="url(#gold)"
        strokeWidth="0.8"
        opacity=".35"
      />

      <text
        x="450"
        y="81"
        textAnchor="middle"
        fontSize="34"
        fontFamily="Cormorant Garamond, Cinzel, Trajan Pro, serif"
        fill="url(#gold)"
        filter="url(#glow)"
        letterSpacing="1.2"
      >
        UNA ESCUELA QUE CAMBIA VIDAS
      </text>
    </svg>
  </section>
);

export default Hero;

