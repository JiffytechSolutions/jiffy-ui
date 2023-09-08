import React from "react";

export function Logo() {
  return (
    <div className="inte-LogoWrapper">
      <svg
        width="57"
        height="76"
        viewBox="0 0 57 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="20"
          width="36"
          height="36"
          rx="6.75"
          fill="url(#paint0_linear_540_30976)"
        />
        <g filter="url(#filter0_d_540_30976)">
          <path
            d="M41.2192 38.1246L46.937 32.4283L39.8036 25.3308L31.1713 33.9123L26.4435 38.5947L39.6833 51.7941L47.3071 44.1989L41.2192 38.1246ZM29.3302 38.6039L39.7944 28.2067L44.0319 32.4283L39.7666 36.6775L38.1012 35.0184L36.6579 36.4563L38.3233 38.1154L34.6502 41.7747L36.0935 43.2127L39.7666 39.5533L44.4112 44.1805L39.6833 48.9183L29.3302 38.6039Z"
            fill="url(#paint1_linear_540_30976)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_540_30976"
            x="-19.4232"
            y="-0.0717263"
            width="77.1038"
            height="82.7288"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-17.7462" dy="2.73019" />
            <feGaussianBlur stdDeviation="13.651" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_540_30976"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_540_30976"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_540_30976"
            x1="38"
            y1="20"
            x2="38"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D0D5DD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_540_30976"
            x1="57.1256"
            y1="32.375"
            x2="18.3131"
            y2="34.0625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#100F18" />
            <stop offset="1" stopColor="#54538C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
