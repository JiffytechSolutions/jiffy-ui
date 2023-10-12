import React from "react";
import getClassNames from "../../../utilities/getClassnames";
interface IconI {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  customClass?: string;
  onClick?: (e: any) => void;
}
export const ZoomOut = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 19.9365L14.65 15.5865M6 9.93652H12M17 9.93652C17 14.3548 13.4183 17.9365 9 17.9365C4.58172 17.9365 1 14.3548 1 9.93652C1 5.51825 4.58172 1.93652 9 1.93652C13.4183 1.93652 17 5.51825 17 9.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ZoomIn = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6.93652V12.9365M6 9.93652H12M19 19.9365L14.65 15.5865M17 9.93652C17 14.3548 13.4183 17.9365 9 17.9365C4.58172 17.9365 1 14.3548 1 9.93652C1 5.51825 4.58172 1.93652 9 1.93652C13.4183 1.93652 17 5.51825 17 9.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ZapOff = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.93652L23 23.9365M12.41 7.68652L13 2.93652L10.57 5.85652M18.57 13.8465L21 10.9365H15.66M8 8.93652L3 14.9365H12L11 22.9365L16 16.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Zap = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1.93652L1 13.9365H10L9 21.9365L19 9.93652H10L11 1.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const YouTube = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size ?? 24}
    height={props.size ?? 24}
    stroke={props.color ?? "currentColor"}
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    strokeWidth={props.strokeWidth ?? "2"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export const Xsquare = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 9.93652L15 15.9365M15 9.93652L9 15.9365M5 3.93652H19C20.1046 3.93652 21 4.83195 21 5.93652V19.9365C21 21.0411 20.1046 21.9365 19 21.9365H5C3.89543 21.9365 3 21.0411 3 19.9365V5.93652C3 4.83195 3.89543 3.93652 5 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Xoctagon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 9.93652L12 12.9365M12 12.9365L15 15.9365M12 12.9365L15 9.93652M12 12.9365L9 15.9365M7.86 2.93652H16.14L22 8.79652V17.0765L16.14 22.9365H7.86L2 17.0765V8.79652L7.86 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Xcircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 9.93652L9 15.9365M9 9.93652L15 15.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const X = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6.93652L18 18.9365M18 6.93652L6 18.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Wind = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.73 8.66651C18.0208 8.37639 18.3787 8.16242 18.7719 8.04352C19.1652 7.92462 19.5816 7.90445 19.9845 7.98479C20.3874 8.06514 20.7642 8.24353 21.0817 8.50417C21.3993 8.76482 21.6477 9.0997 21.805 9.4792C21.9623 9.85869 22.0236 10.2711 21.9836 10.68C21.9436 11.0888 21.8035 11.4815 21.5756 11.8233C21.3477 12.1651 21.0391 12.4455 20.6771 12.6397C20.3151 12.8338 19.9108 12.9358 19.5 12.9365H2M9.59 5.52651C9.82231 5.29282 10.1088 5.12015 10.4239 5.02385C10.739 4.92754 11.073 4.91059 11.3963 4.9745C11.7195 5.0384 12.022 5.18118 12.2768 5.39015C12.5315 5.59912 12.7307 5.8678 12.8566 6.1723C12.9825 6.4768 13.0313 6.8077 12.9985 7.13557C12.9657 7.46344 12.8524 7.77813 12.6687 8.05167C12.4849 8.3252 12.2365 8.5491 11.9454 8.70347C11.6542 8.85784 11.3295 8.93789 11 8.93651H2L9.59 5.52651ZM12.59 20.3465C12.8223 20.5802 13.1088 20.7529 13.4239 20.8492C13.739 20.9455 14.073 20.9624 14.3963 20.8985C14.7195 20.8346 15.022 20.6918 15.2768 20.4829C15.5315 20.2739 15.7307 20.0052 15.8566 19.7007C15.9825 19.3962 16.0313 19.0653 15.9985 18.7374C15.9657 18.4096 15.8524 18.0949 15.6687 17.8213C15.4849 17.5478 15.2365 17.3239 14.9454 17.1695C14.6542 17.0152 14.3295 16.9351 14 16.9365H2L12.59 20.3465Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const WifiOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="1" y1="1" x2="23" y2="23"></line>
    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
    <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);
export const Wifi = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.42001 9.93656C4.34244 7.36052 8.10431 5.93921 12 5.93921C15.8957 5.93921 19.6576 7.36052 22.58 9.93656M5 13.4866C6.97656 11.8402 9.46761 10.9387 12.04 10.9387C14.6124 10.9387 17.1034 11.8402 19.08 13.4866M8.53 17.0466C9.5452 16.3253 10.7597 15.9378 12.005 15.9378C13.2503 15.9378 14.4648 16.3253 15.48 17.0466M12 20.9366H12.01"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Watch = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="7"></circle>
    <polyline points="12 9 12 12 13.5 13.5"></polyline>
    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
  </svg>
);
export const VolumeX = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 9.93652L17 15.9365M17 9.93652L23 15.9365M11 5.93652L6 9.93652H2V15.9365H6L11 19.9365V5.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Volume2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.07 5.86646C20.9447 7.74173 21.9978 10.2848 21.9978 12.9365C21.9978 15.5881 20.9447 18.1312 19.07 20.0065M15.54 9.39646C16.4773 10.3341 17.0039 11.6056 17.0039 12.9315C17.0039 14.2573 16.4773 15.5288 15.54 16.4665M11 5.93646L6 9.93646H2V15.9365H6L11 19.9365V5.93646Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Volume1 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.54 9.39655C16.4773 10.3342 17.0039 11.6057 17.0039 12.9315C17.0039 14.2574 16.4773 15.5289 15.54 16.4665M11 5.93652L6 9.93652H2V15.9365H6L11 19.9365V5.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Volume = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 5.93652L6 9.93652H2V15.9365H6L11 19.9365V5.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const VoiceMail = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 16.9365C7.98528 16.9365 10 14.9218 10 12.4365C10 9.95125 7.98528 7.93653 5.5 7.93653C3.01472 7.93653 1 9.95125 1 12.4365C1 14.9218 3.01472 16.9365 5.5 16.9365ZM5.5 16.9365H18.5M18.5 16.9365C15.5 16.9365 14 14.4365 14 12.4365C14 10.4365 15.5 7.93653 18.5 7.93652C21.5 7.93651 22.9735 10.4365 23 12.4365C23.0265 14.4365 21.5 16.9365 18.5 16.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const VideoOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);
export const VideoOn = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 7.93652L16 12.9365L23 17.9365V7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 5.93652H3C1.89543 5.93652 1 6.83195 1 7.93652V17.9365C1 19.0411 1.89543 19.9365 3 19.9365H14C15.1046 19.9365 16 19.0411 16 17.9365V7.93652C16 6.83195 15.1046 5.93652 14 5.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Users = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 21.9365V19.9365C17 18.8757 16.5786 17.8582 15.8284 17.1081C15.0783 16.358 14.0609 15.9365 13 15.9365H5C3.93913 15.9365 2.92172 16.358 2.17157 17.1081C1.42143 17.8582 1 18.8757 1 19.9365V21.9365M23 21.9365C23 18.9365 23 17.4365 20 15.9365M16 4.06652C16.8604 4.28682 17.623 4.78722 18.1676 5.48883C18.7122 6.19044 19.0078 7.05335 19.0078 7.94152C19.0078 8.82969 18.7122 9.6926 18.1676 10.3942C17.623 11.0958 16.8604 11.5962 16 11.8165M13 7.93652C13 10.1457 11.2091 11.9365 9 11.9365C6.79086 11.9365 5 10.1457 5 7.93652C5 5.72738 6.79086 3.93652 9 3.93652C11.2091 3.93652 13 5.72738 13 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const UserX = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21.9365V19.9365C16 18.8757 15.5786 17.8582 14.8284 17.1081C14.0783 16.358 13.0609 15.9365 12 15.9365H5C3.93913 15.9365 2.92172 16.358 2.17157 17.1081C1.42143 17.8582 1 18.8757 1 19.9365V21.9365M18 8.93652L23 13.9365M23 8.93652L18 13.9365M12.5 7.93652C12.5 10.1457 10.7091 11.9365 8.5 11.9365C6.29086 11.9365 4.5 10.1457 4.5 7.93652C4.5 5.72738 6.29086 3.93652 8.5 3.93652C10.7091 3.93652 12.5 5.72738 12.5 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const UserPlus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21.9365V19.9365C16 18.8757 15.5786 17.8582 14.8284 17.1081C14.0783 16.358 13.0609 15.9365 12 15.9365H5C3.93913 15.9365 2.92172 16.358 2.17157 17.1081C1.42143 17.8582 1 18.8757 1 19.9365V21.9365M23 11.9365H20M20 11.9365H17M20 11.9365V8.93652M20 11.9365V14.9365M12.5 7.93652C12.5 10.1457 10.7091 11.9365 8.5 11.9365C6.29086 11.9365 4.5 10.1457 4.5 7.93652C4.5 5.72738 6.29086 3.93652 8.5 3.93652C10.7091 3.93652 12.5 5.72738 12.5 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const UserMinus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 11.9365H17M16 21.9365V19.9365C16 18.8757 15.5786 17.8582 14.8284 17.1081C14.0783 16.358 13.0609 15.9365 12 15.9365H5C3.93913 15.9365 2.92172 16.358 2.17157 17.1081C1.42143 17.8582 1 18.8757 1 19.9365V21.9365M12.5 7.93652C12.5 10.1457 10.7091 11.9365 8.5 11.9365C6.29086 11.9365 4.5 10.1457 4.5 7.93652C4.5 5.72738 6.29086 3.93652 8.5 3.93652C10.7091 3.93652 12.5 5.72738 12.5 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const UserCheck = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21.9365V19.9365C16 18.8757 15.5786 17.8582 14.8284 17.1081C14.0783 16.358 13.0609 15.9365 12 15.9365H5C3.93913 15.9365 2.92172 16.358 2.17157 17.1081C1.42143 17.8582 1 18.8757 1 19.9365V21.9365M17 11.9365L19 13.9365L23 9.93652M12.5 7.93652C12.5 10.1457 10.7091 11.9365 8.5 11.9365C6.29086 11.9365 4.5 10.1457 4.5 7.93652C4.5 5.72738 6.29086 3.93652 8.5 3.93652C10.7091 3.93652 12.5 5.72738 12.5 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const User = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21.9365V19.9365C20 18.8757 19.5786 17.8582 18.8284 17.1081C18.0783 16.358 17.0609 15.9365 16 15.9365H8C6.93913 15.9365 5.92172 16.358 5.17157 17.1081C4.42143 17.8582 4 18.8757 4 19.9365V21.9365M16 7.93652C16 10.1457 14.2091 11.9365 12 11.9365C9.79086 11.9365 8 10.1457 8 7.93652C8 5.72738 9.79086 3.93652 12 3.93652C14.2091 3.93652 16 5.72738 16 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UploadCloud = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 16 12 12 8 16"></polyline>
    <line x1="12" y1="12" x2="12" y2="21"></line>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
    <polyline points="16 16 12 12 8 16"></polyline>
  </svg>
);
export const Upload = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15.9365V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H5C4.46957 21.9365 3.96086 21.7258 3.58579 21.3507C3.21071 20.9757 3 20.467 3 19.9365V15.9365M17 8.93652L12 3.93652M12 3.93652L7 8.93652M12 3.93652V15.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Unlock = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11.8721V9.43661C7 7.47047 7.09089 5.64314 8.66206 4.20386C11.3481 1.74331 16.233 2.71925 17 6.90767M5 11.9366H19C20.1046 11.9366 21 12.8321 21 13.9366V20.9366C21 22.0412 20.1046 22.9366 19 22.9366H5C3.89543 22.9366 3 22.0412 3 20.9366V13.9366C3 12.8321 3.89543 11.9366 5 11.9366Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Underline = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 21.9365H20M6 3.93652V10.9365C6 12.5278 6.63214 14.0539 7.75736 15.1792C8.88258 16.3044 10.4087 16.9365 12 16.9365C13.5913 16.9365 15.1174 16.3044 16.2426 15.1792C17.3679 14.0539 18 12.5278 18 10.9365V3.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Umbrella = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 19.9365C18 20.7322 17.6839 21.4952 17.1213 22.0578C16.5587 22.6205 15.7956 22.9365 15 22.9365C14.2044 22.9365 13.4413 22.6205 12.8787 22.0578C12.3161 21.4952 12 20.7322 12 19.9365V12.9365M23 12.9365C22.7388 10.2001 21.467 7.65927 19.433 5.81019C17.399 3.9611 14.7489 2.93652 12 2.93652C9.25114 2.93652 6.60096 3.9611 4.56697 5.81019C2.53297 7.65927 1.2612 10.2001 1 12.9365H23Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Type = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7.93652V4.93652H20V7.93652M9 20.9365H15M12 4.93652V20.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Twitter = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.86 5.46657C20.9821 5.12868 22.0424 4.61205 23 3.93657C22.6608 5.32928 21.9406 6.60006 20.92 7.60657C20.9723 7.88016 20.9991 8.15802 21 8.43657C21 19.9366 10 24.9366 1 19.9366C3.48716 20.0355 5.94053 19.3345 8 17.9366C1.66214 15.1197 1.77107 9.82339 2.39004 6.93658C2.65002 5.72402 3 4.93657 3 4.93657C3.49317 5.63882 4.06739 6.27621 4.70865 6.83667C5.38108 7.42436 6.12725 7.92746 6.93101 8.33202C8.50127 9.12238 10.2426 9.51214 12 9.46657V8.46657C11.9877 7.54891 12.2575 6.6496 12.773 5.89029C13.2884 5.13097 14.0247 4.54828 14.8821 4.22102C15.7395 3.89377 16.6767 3.83773 17.567 4.0605C18.4573 4.28326 19.2577 4.77408 19.86 5.46657Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Twitch = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 11.9365V7.93652M21 2.93652H3V18.9365H8V22.9365L12 18.9365H17L21 14.9365V2.93652ZM11 11.9365V7.93652V11.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Tv = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2.93652L12 7.93652L7 2.93652M4 7.93652H20C21.1046 7.93652 22 8.83195 22 9.93652V20.9365C22 22.0411 21.1046 22.9365 20 22.9365H4C2.89543 22.9365 2 22.0411 2 20.9365V9.93652C2 8.83195 2.89543 7.93652 4 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Truck = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 16.9365V3.93652H1V16.9365H16ZM16 16.9365H23V11.9365L20 8.93652H16V16.9365ZM8 19.4365C8 20.8172 6.88071 21.9365 5.5 21.9365C4.11929 21.9365 3 20.8172 3 19.4365C3 18.0558 4.11929 16.9365 5.5 16.9365C6.88071 16.9365 8 18.0558 8 19.4365ZM21 19.4365C21 20.8172 19.8807 21.9365 18.5 21.9365C17.1193 21.9365 16 20.8172 16 19.4365C16 18.0558 17.1193 16.9365 18.5 16.9365C19.8807 16.9365 21 18.0558 21 19.4365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Triangle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.29 4.79648L1.81999 18.9365C1.64536 19.2389 1.55296 19.5818 1.55198 19.931C1.551 20.2802 1.64148 20.6236 1.81442 20.927C1.98735 21.2304 2.23672 21.4832 2.5377 21.6603C2.83868 21.8374 3.18079 21.9326 3.52999 21.9365H20.47C20.8192 21.9326 21.1613 21.8374 21.4623 21.6603C21.7633 21.4832 22.0126 21.2304 22.1856 20.927C22.3585 20.6236 22.449 20.2802 22.448 19.931C22.447 19.5818 22.3546 19.2389 22.18 18.9365L13.71 4.79648C13.5317 4.50259 13.2807 4.2596 12.9812 4.09097C12.6817 3.92233 12.3437 3.83374 12 3.83374C11.6563 3.83374 11.3183 3.92233 11.0188 4.09097C10.7193 4.2596 10.4683 4.50259 10.29 4.79648V4.79648Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TrendingUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 6.93652L13.5 16.4365L8.5 11.4365L1 18.9365M23 6.93652H17M23 6.93652V12.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TrendingDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 18.9365H23M23 18.9365V12.9365M23 18.9365L13.5 9.43652L8.5 14.4365L1 6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Trello = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <rect x="7" y="7" width="3" height="9"></rect>
    <rect x="14" y="7" width="3" height="5"></rect>
  </svg>
);
export const Trash2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6.93652H5H21M8 6.93652V4.93652C8 4.40609 8.21071 3.89738 8.58579 3.52231C8.96086 3.14724 9.46957 2.93652 10 2.93652H14C14.5304 2.93652 15.0391 3.14724 15.4142 3.52231C15.7893 3.89738 16 4.40609 16 4.93652V6.93652M10 11.9365V17.9365M14 11.9365V17.9365M19 6.93652V20.9365C19 21.467 18.7893 21.9757 18.4142 22.3507C18.0391 22.7258 17.5304 22.9365 17 22.9365H7C6.46957 22.9365 5.96086 22.7258 5.58579 22.3507C5.21071 21.9757 5 21.467 5 20.9365V6.93652H19Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Trash = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 6.93652V20.9365C5 21.467 5.21071 21.9757 5.58579 22.3507C5.96086 22.7258 6.46957 22.9365 7 22.9365H17C17.5304 22.9365 18.0391 22.7258 18.4142 22.3507C18.7893 21.9757 19 21.467 19 20.9365V6.93652H5ZM5 6.93652H3M5 6.93652H21M8 6.93652V4.93652C8 4.40609 8.21071 3.89738 8.58579 3.52231C8.96086 3.14724 9.46957 2.93652 10 2.93652H14C14.5304 2.93652 15.0391 3.14724 15.4142 3.52231C15.7893 3.89738 16 4.40609 16 4.93652V6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Tool = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7 7.2365C14.5168 7.42343 14.4141 7.67475 14.4141 7.9365C14.4141 8.19826 14.5168 8.44957 14.7 8.6365L16.3 10.2365C16.4869 10.4197 16.7382 10.5224 17 10.5224C17.2618 10.5224 17.5131 10.4197 17.7 10.2365L21.47 6.4665C21.9728 7.57769 22.1251 8.81574 21.9065 10.0156C21.6878 11.2156 21.1087 12.3203 20.2463 13.1828C19.3838 14.0452 18.2791 14.6243 17.0791 14.843C15.8792 15.0616 14.6412 14.9093 13.53 14.4065L6.62 21.3165C6.22218 21.7143 5.68261 21.9378 5.12 21.9378C4.55739 21.9378 4.01783 21.7143 3.62 21.3165C3.22218 20.9187 2.99868 20.3791 2.99868 19.8165C2.99868 19.2539 3.22218 18.7143 3.62 18.3165L10.53 11.4065C10.0272 10.2953 9.87492 9.05727 10.0935 7.85736C10.3122 6.65745 10.8913 5.55266 11.7537 4.69022C12.6162 3.82779 13.7209 3.24867 14.9209 3.03005C16.1208 2.81142 17.3588 2.96367 18.47 3.4665L14.71 7.2265L14.7 7.2365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ToggleRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 5.1958H8C4.13401 5.1958 1 8.32981 1 12.1958C1 16.0618 4.13401 19.1958 8 19.1958H16C19.866 19.1958 23 16.0618 23 12.1958C23 8.32981 19.866 5.1958 16 5.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 15.1958C17.6569 15.1958 19 13.8527 19 12.1958C19 10.5389 17.6569 9.1958 16 9.1958C14.3431 9.1958 13 10.5389 13 12.1958C13 13.8527 14.3431 15.1958 16 15.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ToggleLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 5.1958H8C4.13401 5.1958 1 8.32981 1 12.1958C1 16.0618 4.13401 19.1958 8 19.1958H16C19.866 19.1958 23 16.0618 23 12.1958C23 8.32981 19.866 5.1958 16 5.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 15.1958C9.65685 15.1958 11 13.8527 11 12.1958C11 10.5389 9.65685 9.1958 8 9.1958C6.34315 9.1958 5 10.5389 5 12.1958C5 13.8527 6.34315 15.1958 8 15.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ThumbsUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 22.9365H4C3.46957 22.9365 2.96086 22.7258 2.58579 22.3507C2.21071 21.9757 2 21.467 2 20.9365V13.9365C2 13.4061 2.21071 12.8974 2.58579 12.5223C2.96086 12.1472 3.46957 11.9365 4 11.9365H7M14 9.93652V5.93652C14 5.14087 13.6839 4.37781 13.1213 3.8152C12.5587 3.25259 11.7956 2.93652 11 2.93652L7 11.9365V22.9365H18.28C18.7623 22.942 19.2304 22.7729 19.5979 22.4605C19.9654 22.1481 20.2077 21.7134 20.28 21.2365L21.66 12.2365C21.7035 11.9499 21.6842 11.6572 21.6033 11.3788C21.5225 11.1003 21.3821 10.8428 21.1919 10.624C21.0016 10.4053 20.7661 10.2305 20.5016 10.1117C20.2371 9.99303 19.9499 9.93324 19.66 9.93652H14Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ThumbsDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2.93664H19.67C20.236 2.92663 20.7859 3.12478 21.2154 3.49346C21.6449 3.86214 21.9241 4.3757 22 4.93664V11.9366C21.9241 12.4976 21.6449 13.0111 21.2154 13.3798C20.7859 13.7485 20.236 13.9466 19.67 13.9366H17M10 15.9366V19.9366C10 20.7323 10.3161 21.4954 10.8787 22.058C11.4413 22.6206 12.2044 22.9366 13 22.9366L17 13.9366V2.93664H5.72C5.23767 2.93119 4.76962 3.10024 4.40209 3.41263C4.03457 3.72503 3.79232 4.15973 3.72 4.63664L2.34 13.6366C2.29649 13.9233 2.31583 14.216 2.39666 14.4944C2.47749 14.7728 2.6179 15.0303 2.80814 15.2491C2.99839 15.4679 3.23392 15.6427 3.49843 15.7614C3.76294 15.8801 4.05009 15.9399 4.34 15.9366H10Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Thermometer = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
  </svg>
);
export const Terminal = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19.9365H20M4 17.9365L10 11.9365L4 5.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Target = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.1958C17.5228 22.1958 22 17.7186 22 12.1958C22 6.67295 17.5228 2.1958 12 2.1958C6.47715 2.1958 2 6.67295 2 12.1958C2 17.7186 6.47715 22.1958 12 22.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.1958C15.3137 18.1958 18 15.5095 18 12.1958C18 8.88209 15.3137 6.1958 12 6.1958C8.68629 6.1958 6 8.88209 6 12.1958C6 15.5095 8.68629 18.1958 12 18.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14.1958C13.1046 14.1958 14 13.3004 14 12.1958C14 11.0912 13.1046 10.1958 12 10.1958C10.8954 10.1958 10 11.0912 10 12.1958C10 13.3004 10.8954 14.1958 12 14.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TagIcon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7.93652H7.01M20.59 14.3465L18.7491 16.1875L13.42 21.5165C13.2343 21.7025 13.0137 21.85 12.7709 21.9506C12.5281 22.0513 12.2678 22.1031 12.005 22.1031C11.7422 22.1031 11.4819 22.0513 11.2391 21.9506C10.9963 21.85 10.7757 21.7025 10.59 21.5165L2 12.9365V2.93652H12L20.59 11.5265C20.9625 11.9012 21.1716 12.4082 21.1716 12.9365C21.1716 13.2184 21.1121 13.4942 21 13.747C20.902 13.9681 20.7638 14.1717 20.59 14.3465Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Tablet = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.9365H12.01M6 2.93652H18C19.1046 2.93652 20 3.83195 20 4.93652V20.9365C20 22.0411 19.1046 22.9365 18 22.9365H6C4.89543 22.9365 4 22.0411 4 20.9365V4.93652C4 3.83195 4.89543 2.93652 6 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Table = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3.93652H5C4.46957 3.93652 3.96086 4.14724 3.58579 4.52231C3.21071 4.89738 3 5.40609 3 5.93652V9.93652M9 3.93652H19C19.5304 3.93652 20.0391 4.14724 20.4142 4.52231C20.7893 4.89738 21 5.40609 21 5.93652V9.93652M9 3.93652V21.9365M3 9.93652V19.9365C3 20.467 3.21071 20.9757 3.58579 21.3507C3.96086 21.7258 4.46957 21.9365 5 21.9365H9M3 9.93652H21M21 9.93652V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Sunset = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 18.9365C17 17.6104 16.4732 16.3387 15.5355 15.401C14.5979 14.4633 13.3261 13.9365 12 13.9365C10.6739 13.9365 9.40215 14.4633 8.46447 15.401C7.52678 16.3387 7 17.6104 7 18.9365M12 9.93652V2.93652M12 9.93652L16 5.93652M12 9.93652L8 5.93652M4.21997 11.1565L5.63997 12.5765M1 18.9365H3M21 18.9365H23M18.36 12.5765L19.78 11.1565M23 22.9365H1"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Sunrise = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 18.9365H23M17 18.9365C17 17.6104 16.4732 16.3387 15.5355 15.401C14.5979 14.4633 13.3261 13.9365 12 13.9365C10.6739 13.9365 9.40215 14.4633 8.46447 15.401C7.52678 16.3387 7 17.6104 7 18.9365M12 2.93652V9.93652M12 2.93652L8 6.93652M12 2.93652L16 6.93652M4.22 11.1565L5.64 12.5765M1 18.9365H3M18.36 12.5765L19.78 11.1565M23 22.9365H1"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Sun = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);
export const StopCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.1958C17.5228 22.1958 22 17.7186 22 12.1958C22 6.67295 17.5228 2.1958 12 2.1958C6.47715 2.1958 2 6.67295 2 12.1958C2 17.7186 6.47715 22.1958 12 22.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9.1958H9V15.1958H15V9.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Star = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.93652L15.09 9.19652L22 10.2065L17 15.0765L18.18 21.9565L12 18.7065L5.82 21.9565L7 15.0765L2 10.2065L8.91 9.19652L12 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Square = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3.93652H5C3.89543 3.93652 3 4.83195 3 5.93652V19.9365C3 21.0411 3.89543 21.9365 5 21.9365H19C20.1046 21.9365 21 21.0411 21 19.9365V5.93652C21 4.83195 20.1046 3.93652 19 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Speaker = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.93652H12.01M6 2.93652H18C19.1046 2.93652 20 3.83195 20 4.93652V20.9365C20 22.0411 19.1046 22.9365 18 22.9365H6C4.89543 22.9365 4 22.0411 4 20.9365V4.93652C4 3.83195 4.89543 2.93652 6 2.93652ZM16 14.9365C16 17.1457 14.2091 18.9365 12 18.9365C9.79086 18.9365 8 17.1457 8 14.9365C8 12.7274 9.79086 10.9365 12 10.9365C14.2091 10.9365 16 12.7274 16 14.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Smile = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 9.93652H9.01M15 9.93652H15.01M16 14.9365C15.5 15.4365 14.2948 16.9363 12 16.9365C9.70524 16.9367 8.5 15.4365 8 14.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Smartphone = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.9365H12.01M7 2.93652H17C18.1046 2.93652 19 3.83195 19 4.93652V20.9365C19 22.0411 18.1046 22.9365 17 22.9365H7C5.89543 22.9365 5 22.0411 5 20.9365V4.93652C5 3.83195 5.89543 2.93652 7 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sliders = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 16.9365H23M4 21.9365V14.9365M4 10.9365V3.93652M12 21.9365V12.9365M12 8.93652V3.93652M20 21.9365V16.9365M20 12.9365V3.93652M1 14.9365H7M9 8.93652H15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Slash = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.92999 5.86652L19.07 20.0065M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Slack = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 9.43652C13 10.2665 13.67 10.9365 14.5 10.9365C15.33 10.9365 16 10.2665 16 9.43652V4.43652C16 3.60652 15.33 2.93652 14.5 2.93652C13.67 2.93652 13 3.60652 13 4.43652V9.43652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 10.9365H20.5C21.33 10.9365 22 10.2665 22 9.43652C22 8.60652 21.33 7.93652 20.5 7.93652C19.67 7.93652 19 8.60652 19 9.43652V10.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 16.4365C11 15.6065 10.33 14.9365 9.5 14.9365C8.67 14.9365 8 15.6065 8 16.4365V21.4365C8 22.2665 8.67 22.9365 9.5 22.9365C10.33 22.9365 11 22.2665 11 21.4365V16.4365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 14.9365H3.5C2.67 14.9365 2 15.6065 2 16.4365C2 17.2665 2.67 17.9365 3.5 17.9365C4.33 17.9365 5 17.2665 5 16.4365V14.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 13.9365C14.67 13.9365 14 14.6065 14 15.4365C14 16.2665 14.67 16.9365 15.5 16.9365H20.5C21.33 16.9365 22 16.2665 22 15.4365C22 14.6065 21.33 13.9365 20.5 13.9365H15.5Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 19.9365H15.5C16.33 19.9365 17 20.6065 17 21.4365C17 22.2665 16.33 22.9365 15.5 22.9365C14.67 22.9365 14 22.2665 14 21.4365V19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 8.93652C9.33 8.93652 10 9.60652 10 10.4365C10 11.2665 9.33 11.9365 8.5 11.9365H3.5C2.67 11.9365 2 11.2665 2 10.4365C2 9.60652 2.67 8.93652 3.5 8.93652H8.5Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 5.93652H8.5C7.67 5.93652 7 5.26652 7 4.43652C7 3.60652 7.67 2.93652 8.5 2.93652C9.33 2.93652 10 3.60652 10 4.43652V5.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SkipForward = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5.93652V19.9365M5 4.93652L15 12.9365L5 20.9365V4.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SkipBack = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5.93652V19.9365M19 20.9365L9 12.9365L19 4.93652V20.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SidebarIcon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3.93652V21.9365M5 3.93652H19C20.1046 3.93652 21 4.83195 21 5.93652V19.9365C21 21.0411 20.1046 21.9365 19 21.9365H5C3.89543 21.9365 3 21.0411 3 19.9365V5.93652C3 4.83195 3.89543 3.93652 5 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Shuffle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3.93652H21M21 3.93652V8.93652M21 3.93652L4 20.9365M21 16.9365V21.9365M21 21.9365H16M21 21.9365L15 15.9365M4 4.93652L9 9.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShoppingCart = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export const ShoppingBag = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 10.9365C16 11.9974 15.5786 13.0148 14.8284 13.765C14.0783 14.5151 13.0609 14.9365 12 14.9365C10.9391 14.9365 9.92172 14.5151 9.17157 13.765C8.42143 13.0148 8 11.9974 8 10.9365M3 6.93652L6 2.93652H18L21 6.93652M3 6.93652V20.9365C3 21.467 3.21071 21.9757 3.58579 22.3507C3.96086 22.7258 4.46957 22.9365 5 22.9365H19C19.5304 22.9365 20.0391 22.7258 20.4142 22.3507C20.7893 21.9757 21 21.467 21 20.9365V6.93652M3 6.93652H21"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShieldOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
    <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);
export const Shield = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 5.93652V12.9365C20 16.9784 16.3696 20.1127 14 21.728L12 22.9365L10.2173 21.8743C7.85978 20.3068 4 17.1041 4 12.9365V5.93652L12 2.93652L20 5.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Share2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.59003 14.4465L15.42 18.4265M15.41 7.44653L8.59003 11.4265M21 5.93652C21 7.59338 19.6569 8.93652 18 8.93652C16.3431 8.93652 15 7.59338 15 5.93652C15 4.27967 16.3431 2.93652 18 2.93652C19.6569 2.93652 21 4.27967 21 5.93652ZM9 12.9365C9 14.5934 7.65685 15.9365 6 15.9365C4.34315 15.9365 3 14.5934 3 12.9365C3 11.2797 4.34315 9.93652 6 9.93652C7.65685 9.93652 9 11.2797 9 12.9365ZM21 19.9365C21 21.5934 19.6569 22.9365 18 22.9365C16.3431 22.9365 15 21.5934 15 19.9365C15 18.2797 16.3431 16.9365 18 16.9365C19.6569 16.9365 21 18.2797 21 19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Share = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12.9365V20.9365C4 21.467 4.21071 21.9757 4.58579 22.3507C4.96086 22.7258 5.46957 22.9365 6 22.9365H18C18.5304 22.9365 19.0391 22.7258 19.4142 22.3507C19.7893 21.9757 20 21.467 20 20.9365V12.9365M16 6.93652L12 2.93652M12 2.93652L8 6.93652M12 2.93652V15.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Settings = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

export const Server = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6.93652H6.01M6 18.9365H6.01M4 2.93652H20C21.1046 2.93652 22 3.83195 22 4.93652V8.93652C22 10.0411 21.1046 10.9365 20 10.9365H4C2.89543 10.9365 2 10.0411 2 8.93652V4.93652C2 3.83195 2.89543 2.93652 4 2.93652ZM4 14.9365H20C21.1046 14.9365 22 15.832 22 16.9365V20.9365C22 22.0411 21.1046 22.9365 20 22.9365H4C2.89543 22.9365 2 22.0411 2 20.9365V16.9365C2 15.832 2.89543 14.9365 4 14.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Send = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2.93652L11 13.9365M22 2.93652L15 22.9365L11 13.9365L2 9.93652L22 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Search = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21.9365L16.65 17.5865M19 11.9365C19 16.3548 15.4183 19.9365 11 19.9365C6.58172 19.9365 3 16.3548 3 11.9365C3 7.51825 6.58172 3.93652 11 3.93652C15.4183 3.93652 19 7.51825 19 11.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Scissors = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4.93652L8.12 16.8165M14.47 15.4165L20 20.9365M8.12 9.05652L12 12.9365M9 6.93652C9 8.59338 7.65685 9.93652 6 9.93652C4.34315 9.93652 3 8.59338 3 6.93652C3 5.27967 4.34315 3.93652 6 3.93652C7.65685 3.93652 9 5.27967 9 6.93652ZM9 18.9365C9 20.5934 7.65685 21.9365 6 21.9365C4.34315 21.9365 3 20.5934 3 18.9365C3 17.2797 4.34315 15.9365 6 15.9365C7.65685 15.9365 9 17.2797 9 18.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Save = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3.93652H5C4.46957 3.93652 3.96086 4.14724 3.58579 4.52231C3.21071 4.89738 3 5.40609 3 5.93652V19.9365C3 20.467 3.21071 20.9757 3.58579 21.3507C3.96086 21.7258 4.46957 21.9365 5 21.9365H7M7 3.93652H16L21 8.93652V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H17M7 3.93652V8.93652H15M17 21.9365V13.9365H7V21.9365M17 21.9365H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Rss = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4.93652C8.24346 4.93652 12.3131 6.62223 15.3137 9.62282C18.3143 12.6234 20 16.6931 20 20.9365M4 11.9365C6.38695 11.9365 8.67613 12.8847 10.364 14.5726C12.0518 16.2604 13 18.5496 13 20.9365M6 19.9365C6 20.4888 5.55228 20.9365 5 20.9365C4.44772 20.9365 4 20.4888 4 19.9365C4 19.3842 4.44772 18.9365 5 18.9365C5.55228 18.9365 6 19.3842 6 19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RotateCw = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.49 15.9365C19.84 17.7765 18.6096 19.3553 16.9842 20.435C15.3588 21.5148 13.4265 22.0371 11.4784 21.9231C9.53038 21.8092 7.67216 21.0652 6.18376 19.8032C4.69536 18.5413 3.65743 16.8298 3.22637 14.9266C2.79531 13.0234 2.99448 11.0317 3.79386 9.25161C4.59325 7.47149 5.94954 5.9994 7.65836 5.05718C9.36717 4.11495 11.3359 3.75364 13.268 4.02768C15.2 4.30172 16.9906 5.19628 18.37 6.57654L23 10.9365M23 10.9365L17 10.9365M23 10.9365L23 4.93654"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RotateCcw = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.51 15.9365C4.15839 17.7768 5.38734 19.3567 7.01166 20.4378C8.63598 21.519 10.5677 22.0431 12.5157 21.9309C14.4637 21.8188 16.3226 21.0766 17.8121 19.8162C19.3017 18.5558 20.3413 16.8454 20.7742 14.9428C21.2072 13.0402 21.0101 11.0484 20.2126 9.26757C19.4152 7.48672 18.0605 6.01327 16.3528 5.06924C14.6451 4.12521 12.6769 3.76174 10.7447 4.03359C8.81245 4.30544 7.02091 5.19789 5.64 6.57647L1 10.9365M1 10.9365L7 10.9365M1 10.9365V4.93648"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Rewind = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 12.9365L22 19.9365V5.93652L13 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12.9365L11 19.9365V5.93652L2 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Repeat = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="17 1 21 5 17 9"></polyline>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
    <polyline points="7 23 3 19 7 15"></polyline>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
  </svg>
);

export const RefreshCw = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 4.93658V10.9366M23 10.9366H17M23 10.9366L18.36 6.5766C17.2853 5.50131 15.9556 4.71581 14.4952 4.29337C13.0348 3.87094 11.4911 3.82535 10.0083 4.16086C8.52547 4.49636 7.1518 5.20203 6.01547 6.21202C4.87913 7.222 4.01717 8.50338 3.51 9.9366M1 20.9366V14.9366M1 14.9366H7M1 14.9366L5.64 19.2966C6.71475 20.3719 8.04437 21.1574 9.50481 21.5798C10.9652 22.0023 12.5089 22.0478 13.9917 21.7123C15.4745 21.3768 16.8482 20.6712 17.9845 19.6612C19.1209 18.6512 19.9828 17.3698 20.49 15.9366"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RefreshCcw = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10.9366H7M1 10.9366L5.64 6.5766C6.71475 5.50131 8.04437 4.71581 9.50481 4.29337C10.9652 3.87094 12.5089 3.82535 13.9917 4.16086C15.4745 4.49636 16.8482 5.20203 17.9845 6.21202C19.1209 7.222 19.9828 8.50338 20.49 9.9366M1 10.9366V4.93658M23 20.9366V14.9366M23 14.9366L18.36 19.2966C17.2853 20.3719 15.9556 21.1574 14.4952 21.5798C13.0348 22.0023 11.4911 22.0478 10.0083 21.7123C8.52547 21.3768 7.1518 20.6712 6.01547 19.6612C4.87913 18.6512 4.01717 17.3698 3.51 15.9366M23 14.9366H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RadioIcon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.24 8.69646C16.7979 9.25369 17.2404 9.91542 17.5424 10.6438C17.8443 11.3722 17.9997 12.153 17.9997 12.9415C17.9997 13.7299 17.8443 14.5107 17.5424 15.2391C17.2404 15.9675 16.7979 16.6292 16.24 17.1865M7.76 17.1765C7.20214 16.6192 6.75959 15.9575 6.45764 15.2291C6.1557 14.5007 6.00028 13.7199 6.00028 12.9315C6.00028 12.143 6.1557 11.3622 6.45764 10.6338C6.75959 9.90542 7.20214 9.24369 7.76 8.68646M19.07 5.86646C20.9447 7.74173 21.9979 10.2848 21.9979 12.9365C21.9979 15.5881 20.9447 18.1312 19.07 20.0065M4.93 20.0065C3.05529 18.1312 2.00214 15.5881 2.00214 12.9365C2.00214 10.2848 3.05529 7.74173 4.93 5.86646M14 12.9365C14 14.041 13.1046 14.9365 12 14.9365C10.8954 14.9365 10 14.041 10 12.9365C10 11.8319 10.8954 10.9365 12 10.9365C13.1046 10.9365 14 11.8319 14 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Printer = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9.93652V2.93652H18V9.93652M6 18.9365H4C3.46957 18.9365 2.96086 18.7258 2.58579 18.3507C2.21071 17.9757 2 17.467 2 16.9365V11.9365C2 11.4061 2.21071 10.8974 2.58579 10.5223C2.96086 10.1472 3.46957 9.93652 4 9.93652H20C20.5304 9.93652 21.0391 10.1472 21.4142 10.5223C21.7893 10.8974 22 11.4061 22 11.9365V16.9365C22 17.467 21.7893 17.9757 21.4142 18.3507C21.0391 18.7258 20.5304 18.9365 20 18.9365H18M6 14.9365H18V22.9365H6V14.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Power = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.36 7.57654C19.6184 8.83533 20.4753 10.439 20.8223 12.1847C21.1693 13.9305 20.9909 15.7399 20.3096 17.3843C19.6284 19.0287 18.4748 20.4341 16.9948 21.4229C15.5148 22.4117 13.7749 22.9395 11.995 22.9395C10.2151 22.9395 8.47515 22.4117 6.99517 21.4229C5.51519 20.4341 4.36164 19.0287 3.68036 17.3843C2.99909 15.7399 2.82069 13.9305 3.16772 12.1847C3.51475 10.439 4.37162 8.83533 5.63 7.57654M12 2.93652V12.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Pocket = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10.9365L12 14.9365L16 10.9365M4 3.93652H20C20.5304 3.93652 21.0391 4.14724 21.4142 4.52231C21.7893 4.89738 22 5.40609 22 5.93652V11.9365C22 14.5887 20.9464 17.1322 19.0711 19.0076C17.1957 20.883 14.6522 21.9365 12 21.9365C10.6868 21.9365 9.38642 21.6779 8.17317 21.1753C6.95991 20.6728 5.85752 19.9362 4.92893 19.0076C3.05357 17.1322 2 14.5887 2 11.9365V5.93652C2 5.40609 2.21071 4.89738 2.58579 4.52231C2.96086 4.14724 3.46957 3.93652 4 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusSquare = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.93652V16.9365M8 12.9365H16M5 3.93652H19C20.1046 3.93652 21 4.83195 21 5.93652V19.9365C21 21.0411 20.1046 21.9365 19 21.9365H5C3.89543 21.9365 3 21.0411 3 19.9365V5.93652C3 4.83195 3.89543 3.93652 5 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.93652V16.9365M8 12.9365H16M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12.9365H12M19 12.9365H12M12 12.9365V19.9365M12 12.9365V5.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlayCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.1958C17.5228 22.1958 22 17.7186 22 12.1958C22 6.67295 17.5228 2.1958 12 2.1958C6.47715 2.1958 2 6.67295 2 12.1958C2 17.7186 6.47715 22.1958 12 22.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 12.1958L10 8.1958V16.1958L16 12.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Play = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3.93652L19 12.9365L5 21.9365V3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PieChart = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.21 16.8265C20.5738 18.331 19.5788 19.6567 18.3119 20.6878C17.045 21.7189 15.5448 22.4239 13.9424 22.7413C12.3401 23.0586 10.6844 22.9787 9.12015 22.5083C7.55588 22.038 6.13063 21.1916 4.96903 20.0432C3.80742 18.8947 2.94482 17.4793 2.45664 15.9205C1.96846 14.3617 1.86957 12.707 2.1686 11.1011C2.46764 9.49529 3.1555 7.98714 4.17205 6.70854C5.1886 5.42994 6.50289 4.41983 8.00001 3.76651M12 12.9365V2.93652C18 2.93652 22 7.93652 22 12.9365H12Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhoneOutgoing = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 7 23 1 17 1"></polyline>
    <line x1="16" y1="8" x2="23" y2="1"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
    <line x1="23" y1="1" x2="1" y2="23"></line>
  </svg>
);

export const PhoneMissed = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="23" y1="1" x2="17" y2="7"></line>
    <line x1="17" y1="1" x2="23" y2="7"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneIncoming = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 2 16 8 22 8"></polyline>
    <line x1="23" y1="1" x2="16" y2="8"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneForwarded = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="19 1 23 5 19 9"></polyline>
    <line x1="15" y1="5" x2="23" y2="5"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneCall = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const Phone = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 17.8566V20.8566C22.0011 21.1351 21.9441 21.4108 21.8325 21.666C21.7209 21.9211 21.5573 22.1502 21.3521 22.3385C21.1468 22.5268 20.9046 22.6701 20.6407 22.7593C20.3769 22.8486 20.0974 22.8817 19.82 22.8566C16.7428 22.5223 13.787 21.4708 11.19 19.7866C8.77382 18.2513 6.72533 16.2028 5.18999 13.7866C3.49997 11.1778 2.44824 8.20761 2.11999 5.11662C2.095 4.84009 2.12787 4.56138 2.21649 4.29824C2.30512 4.03511 2.44756 3.79331 2.63476 3.58824C2.82196 3.38317 3.0498 3.21933 3.30379 3.10714C3.55777 2.99495 3.83233 2.93688 4.10999 2.93662H7.10999C7.5953 2.93184 8.06579 3.1037 8.43376 3.42015C8.80173 3.73661 9.04207 4.17607 9.10999 4.65662C9.23662 5.61669 9.47144 6.55935 9.80999 7.46662C9.94454 7.82454 9.97366 8.21353 9.8939 8.5875C9.81415 8.96147 9.62886 9.30473 9.35999 9.57662L8.08999 10.8466C9.51355 13.3502 11.5864 15.4231 14.09 16.8466L15.36 15.5766C15.6319 15.3078 15.9751 15.1225 16.3491 15.0427C16.7231 14.963 17.1121 14.9921 17.47 15.1266C18.3773 15.4652 19.3199 15.7 20.28 15.8266C20.7658 15.8952 21.2094 16.1398 21.5265 16.5141C21.8437 16.8884 22.0122 17.3662 22 17.8566Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Percent = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5.93652L5 19.9365M9 7.43652C9 8.81724 7.88071 9.93652 6.5 9.93652C5.11929 9.93652 4 8.81724 4 7.43652C4 6.05581 5.11929 4.93652 6.5 4.93652C7.88071 4.93652 9 6.05581 9 7.43652ZM20 18.4365C20 19.8172 18.8807 20.9365 17.5 20.9365C16.1193 20.9365 15 19.8172 15 18.4365C15 17.0558 16.1193 15.9365 17.5 15.9365C18.8807 15.9365 20 17.0558 20 18.4365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PenTool = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2.93652L16.5 6.43652L18 13.9365L13 18.9365L5.5 17.4365L2 2.93652ZM2 2.93652L9.586 10.5225M12 19.9365L19 12.9365L22 15.9365L15 22.9365L12 19.9365ZM13 11.9365C13 13.0411 12.1046 13.9365 11 13.9365C9.89543 13.9365 9 13.0411 9 11.9365C9 10.832 9.89543 9.93652 11 9.93652C12.1046 9.93652 13 10.832 13 11.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PauseCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 15.9365V9.93652M14 15.9365V9.93652M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Pause = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.93652H6V20.9365H10V4.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 20.9365V4.93652H18V20.9365H14Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const PaperClip = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.44 11.9864L12.25 21.1764C11.1241 22.3023 9.59717 22.9348 8.00498 22.9348C6.4128 22.9348 4.88583 22.3023 3.75998 21.1764C2.63414 20.0506 2.00165 18.5236 2.00165 16.9314C2.00165 15.3393 2.63414 13.8123 3.75998 12.6864L12.95 3.49644C13.7005 2.74588 14.7185 2.32422 15.78 2.32422C16.8414 2.32422 17.8594 2.74588 18.61 3.49644C19.3605 4.24701 19.7822 5.26499 19.7822 6.32644C19.7822 7.3879 19.3605 8.40588 18.61 9.15644L9.40998 18.3464C9.0347 18.7217 8.52571 18.9326 7.99498 18.9326C7.46426 18.9326 6.95527 18.7217 6.57998 18.3464C6.2047 17.9712 5.99387 17.4622 5.99387 16.9314C5.99387 16.4007 6.2047 15.8917 6.57998 15.5164L15.07 7.03644"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Package = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export const Octagon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.86 2.93652H16.14L22 8.79652V17.0765L16.14 22.9365H7.86L2 17.0765V8.79652L7.86 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Navigation2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.93652L19 21.9365L12 17.9365L5 21.9365L12 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Navigation = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11.9365L22 2.93652L13 21.9365L11 13.9365L3 11.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Music = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18.9365V5.93652L21 3.93652V16.9365M9 18.9365C9 20.5934 7.65685 21.9365 6 21.9365C4.34315 21.9365 3 20.5934 3 18.9365C3 17.2797 4.34315 15.9365 6 15.9365C7.65685 15.9365 9 17.2797 9 18.9365ZM21 16.9365C21 18.5934 19.6569 19.9365 18 19.9365C16.3431 19.9365 15 18.5934 15 16.9365C15 15.2797 16.3431 13.9365 18 13.9365C19.6569 13.9365 21 15.2797 21 16.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Move = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 9.93652L2 12.9365M2 12.9365L5 15.9365M2 12.9365H22M9 5.93652L12 2.93652M12 2.93652L15 5.93652M12 2.93652V22.9365M15 19.9365L12 22.9365M12 22.9365L9 19.9365M19 9.93652L22 12.9365M22 12.9365L19 15.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MousePointer = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.58 13.5165L10.07 20.9065L3 3.93652L19.97 11.0065L12.58 13.5165ZM12.58 13.5165L19 19.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MoreVertical = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20.1958C12.5523 20.1958 13 19.7481 13 19.1958C13 18.6435 12.5523 18.1958 12 18.1958C11.4477 18.1958 11 18.6435 11 19.1958C11 19.7481 11.4477 20.1958 12 20.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6.1958C12.5523 6.1958 13 5.74809 13 5.1958C13 4.64352 12.5523 4.1958 12 4.1958C11.4477 4.1958 11 4.64352 11 5.1958C11 5.74809 11.4477 6.1958 12 6.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13.1958C12.5523 13.1958 13 12.7481 13 12.1958C13 11.6435 12.5523 11.1958 12 11.1958C11.4477 11.1958 11 11.6435 11 12.1958C11 12.7481 11.4477 13.1958 12 13.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MoreHorizontal = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12.1958C4 12.7481 4.44772 13.1958 5 13.1958C5.55228 13.1958 6 12.7481 6 12.1958C6 11.6435 5.55228 11.1958 5 11.1958C4.44772 11.1958 4 11.6435 4 12.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12.1958C18 12.7481 18.4477 13.1958 19 13.1958C19.5523 13.1958 20 12.7481 20 12.1958C20 11.6435 19.5523 11.1958 19 11.1958C18.4477 11.1958 18 11.6435 18 12.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 12.1958C11 12.7481 11.4477 13.1958 12 13.1958C12.5523 13.1958 13 12.7481 13 12.1958C13 11.6435 12.5523 11.1958 12 11.1958C11.4477 11.1958 11 11.6435 11 12.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Moon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 13.7265C20.8427 15.4287 20.2039 17.0509 19.1583 18.4033C18.1127 19.7557 16.7035 20.7823 15.0957 21.3631C13.4879 21.9438 11.748 22.0546 10.0795 21.6826C8.41104 21.3106 6.88302 20.4711 5.67425 19.2623C4.46548 18.0535 3.62596 16.5255 3.25393 14.857C2.8819 13.1885 2.99274 11.4486 3.57348 9.84082C4.15423 8.23303 5.18085 6.82389 6.53324 5.77828C7.88562 4.73266 9.50782 4.09383 11.21 3.93652C10.2134 5.28479 9.73387 6.94597 9.85856 8.61794C9.98324 10.2899 10.7039 11.8616 11.8894 13.0471C13.075 14.2327 14.6466 14.9533 16.3186 15.078C17.9906 15.2027 19.6518 14.7231 21 13.7265Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Monitor = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 21.9365H16M12 17.9365V21.9365M4 3.93652H20C21.1046 3.93652 22 4.83195 22 5.93652V15.9365C22 17.0411 21.1046 17.9365 20 17.9365H4C2.89543 17.9365 2 17.0411 2 15.9365V5.93652C2 4.83195 2.89543 3.93652 4 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinusSquare = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.9365H16M5 3.93652H19C20.1046 3.93652 21 4.83195 21 5.93652V19.9365C21 21.0411 20.1046 21.9365 19 21.9365H5C3.89543 21.9365 3 21.0411 3 19.9365V5.93652C3 4.83195 3.89543 3.93652 5 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinusCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.9365H16M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Minus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12.9365H19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Minimize2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 14.9365H10M10 14.9365V20.9365M10 14.9365L3 21.9365M20 10.9365H14M14 10.9365V4.93652M14 10.9365L21 3.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Minimize = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.93652V6.93652C8 7.46696 7.78929 7.97566 7.41421 8.35074C7.03914 8.72581 6.53043 8.93652 6 8.93652H3M21 8.93652H18C17.4696 8.93652 16.9609 8.72581 16.5858 8.35074C16.2107 7.97566 16 7.46696 16 6.93652V3.93652M16 21.9365V18.9365C16 18.4061 16.2107 17.8974 16.5858 17.5223C16.9609 17.1472 17.4696 16.9365 18 16.9365H21M3 16.9365H6C6.53043 16.9365 7.03914 17.1472 7.41421 17.5223C7.78929 17.8974 8 18.4061 8 18.9365V21.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MicOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="1" y1="1" x2="23" y2="23"></line>
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);
export const Mic = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);
export const MessageSquare = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.4142 17.3507C20.7893 16.9757 21 16.467 21 15.9365V5.93652C21 5.40609 20.7893 4.89738 20.4142 4.52231C20.0391 4.14724 19.5304 3.93652 19 3.93652H5C4.46957 3.93652 3.96086 4.14724 3.58579 4.52231C3.21071 4.89738 3 5.40609 3 5.93652V21.9365L7 17.9365H19C19.5304 17.9365 20.0391 17.7258 20.4142 17.3507Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MessageCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.9 16.2366L3 21.9366L8.7 20.0366C11.3033 21.3515 14.4881 21.1991 16.9674 19.6658C19.6894 17.9826 21 15.0533 21 11.9366C20.765 7.67644 17.2601 4.17158 13 3.93655H12.5C11.1801 3.93311 9.87812 4.24148 8.7 4.83655C7.28825 5.54212 6.10083 6.6268 5.27072 7.9691C4.44061 9.3114 4.00061 10.8583 4 12.4366C3.99656 13.7564 4.30493 15.0584 4.9 16.2366Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Menu = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6.93652H21M3 12.9365H21M3 18.9365H21"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Meh = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 15.9365H16M9 9.93652H9.01M15 9.93652H15.01M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Maximize2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 3.93652H21M21 3.93652V9.93652M21 3.93652L14 10.9365M9 21.9365H3M3 21.9365V15.9365M3 21.9365L10 14.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Maximize = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.93652H5C4.46957 3.93652 3.96086 4.14724 3.58579 4.52231C3.21071 4.89738 3 5.40609 3 5.93652V8.93652M21 8.93652V5.93652C21 5.40609 20.7893 4.89738 20.4142 4.52231C20.0391 4.14724 19.5304 3.93652 19 3.93652H16M16 21.9365H19C19.5304 21.9365 20.0391 21.7258 20.4142 21.3507C20.7893 20.9757 21 20.467 21 19.9365V16.9365M3 16.9365V19.9365C3 20.467 3.21071 20.9757 3.58579 21.3507C3.96086 21.7258 4.46957 21.9365 5 21.9365H8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MapPin = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
export const Map = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 18.9365L1 22.9365V6.93652L8 2.93652M8 18.9365L16 22.9365M8 18.9365V2.93652M16 22.9365L23 18.9365V2.93652L16 6.93652M16 22.9365V6.93652M16 6.93652L8 2.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Mail = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 6.93652C22 5.83652 21.1 4.93652 20 4.93652H4C2.9 4.93652 2 5.83652 2 6.93652M22 6.93652V18.9365C22 20.0365 21.1 20.9365 20 20.9365H4C2.9 20.9365 2 20.0365 2 18.9365V6.93652M22 6.93652L12 13.9365L2 6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Logout = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 21.9365H5C4.46957 21.9365 3.96086 21.7258 3.58579 21.3507C3.21071 20.9757 3 20.467 3 19.9365V5.93652C3 5.40609 3.21071 4.89738 3.58579 4.52231C3.96086 4.14724 4.46957 3.93652 5 3.93652H9M16 17.9365L21 12.9365M21 12.9365L16 7.93652M21 12.9365H9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LogIn = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 3.93652H19C19.5304 3.93652 20.0391 4.14724 20.4142 4.52231C20.7893 4.89738 21 5.40609 21 5.93652V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H15M10 17.9365L15 12.9365M15 12.9365L10 7.93652M15 12.9365H3"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Lock = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11.9365V7.93652C7 6.61044 7.52678 5.33867 8.46447 4.40099C9.40215 3.46331 10.6739 2.93652 12 2.93652C13.3261 2.93652 14.5979 3.46331 15.5355 4.40099C16.4732 5.33867 17 6.61044 17 7.93652V11.9365M5 11.9365H19C20.1046 11.9365 21 12.832 21 13.9365V20.9365C21 22.0411 20.1046 22.9365 19 22.9365H5C3.89543 22.9365 3 22.0411 3 20.9365V13.9365C3 12.832 3.89543 11.9365 5 11.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LoaderIcon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.93652V6.93652M12 18.9365V22.9365M4.92999 5.86652L7.75999 8.69652M16.24 17.1765L19.07 20.0065M2 12.9365H6M18 12.9365H22M4.92999 20.0065L7.75999 17.1765M16.24 8.69652L19.07 5.86652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ListIcon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 18.9365H3.01M8 6.93652H21M8 12.9365H21M8 18.9365H21M3 6.93652H3.01M3 12.9365H3.01"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LinkedIn = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.2426 10.6939C19.1174 9.56866 17.5913 8.93652 16 8.93652C14.4087 8.93652 12.8826 9.56866 11.7574 10.6939C10.6321 11.8191 10 13.3452 10 14.9365V21.9365H14V14.9365C14 14.4061 14.2107 13.8974 14.5858 13.5223C14.9609 13.1472 15.4696 12.9365 16 12.9365C16.5304 12.9365 17.0391 13.1472 17.4142 13.5223C17.7893 13.8974 18 14.4061 18 14.9365V21.9365H22V14.9365C22 13.3452 21.3679 11.8191 20.2426 10.6939Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9.93652H2V21.9365H6V9.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6.93652C5.10457 6.93652 6 6.04109 6 4.93652C6 3.83195 5.10457 2.93652 4 2.93652C2.89543 2.93652 2 3.83195 2 4.93652C2 6.04109 2.89543 6.93652 4 6.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Link2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 7.93652H18C18.6566 7.93652 19.3068 8.06585 19.9134 8.31713C20.52 8.5684 21.0712 8.9367 21.5355 9.40099C21.9998 9.86528 22.3681 10.4165 22.6194 11.0231C22.8707 11.6297 23 12.2799 23 12.9365C23 13.5931 22.8707 14.2433 22.6194 14.8499C22.3681 15.4566 21.9998 16.0078 21.5355 16.4721C21.0712 16.9364 20.52 17.3046 19.9134 17.5559C19.3068 17.8072 18.6566 17.9365 18 17.9365H15M9 17.9365H6C5.34339 17.9365 4.69321 17.8072 4.08658 17.5559C3.47995 17.3046 2.92876 16.9364 2.46447 16.4721C1.52678 15.5344 1 14.2626 1 12.9365C1 11.6104 1.52678 10.3387 2.46447 9.40099C3.40215 8.46331 4.67392 7.93652 6 7.93652H9M8 12.9365H16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Link = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 11.9365C13.5706 11.3624 13.0227 10.8873 12.3935 10.5436C11.7643 10.1998 11.0685 9.99539 10.3534 9.94417C9.63822 9.89295 8.92043 9.99614 8.24867 10.2467C7.57691 10.4973 6.9669 10.8894 6.46002 11.3965L3.46002 14.3965C2.54923 15.3395 2.04525 16.6025 2.05665 17.9135C2.06804 19.2245 2.59388 20.4786 3.52092 21.4056C4.44796 22.3326 5.70203 22.8585 7.01301 22.8699C8.32399 22.8813 9.58701 22.3773 10.53 21.4665L12.24 19.7565M10 13.9365C10.4295 14.5106 10.9774 14.9857 11.6066 15.3294C12.2357 15.6732 12.9315 15.8776 13.6467 15.9288C14.3618 15.98 15.0796 15.8769 15.7513 15.6263C16.4231 15.3757 17.0331 14.9836 17.54 14.4765L20.54 11.4765C21.4508 10.5335 21.9548 9.27047 21.9434 7.95948C21.932 6.6485 21.4061 5.39444 20.4791 4.4674C19.5521 3.54036 18.298 3.01451 16.987 3.00312C15.676 2.99173 14.413 3.4957 13.47 4.40649L11.75 6.11649"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LifeBuoy = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.85857 19.9365C6.67349 21.7879 9.20261 22.9365 12 22.9365C14.7974 22.9365 17.3265 21.7879 19.1414 19.9365M4.85857 19.9365C3.09032 18.1328 2 15.662 2 12.9365C2 10.2111 3.09032 7.74027 4.85857 5.93652M4.85857 19.9365L9.1792 15.7726M4.85857 5.93652C6.67349 4.08516 9.20261 2.93652 12 2.93652C14.7974 2.93652 17.3265 4.08516 19.1414 5.93652M4.85857 5.93652L9.1792 10.1005M19.1414 5.93652C20.9097 7.74027 22 10.2111 22 12.9365C22 15.662 20.9097 18.1328 19.1414 19.9365M19.1414 5.93652L14.8208 10.1005M19.1414 19.9365L14.8208 15.7726M9.1792 10.1005C8.45086 10.8249 8 11.8281 8 12.9365C8 14.045 8.45086 15.0481 9.1792 15.7726M9.1792 10.1005C9.90245 9.3811 10.8993 8.93652 12 8.93652C13.1007 8.93652 14.0975 9.3811 14.8208 10.1005M14.8208 10.1005C15.5491 10.8249 16 11.8281 16 12.9365C16 14.045 15.5491 15.0481 14.8208 15.7726M14.8208 15.7726C14.0975 16.4919 13.1007 16.9365 12 16.9365C10.8993 16.9365 9.90245 16.4919 9.1792 15.7726"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Layout = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9.93652H21M9 21.9365V9.93652M5 3.93652H19C20.1046 3.93652 21 4.83195 21 5.93652V19.9365C21 21.0411 20.1046 21.9365 19 21.9365H5C3.89543 21.9365 3 21.0411 3 19.9365V5.93652C3 4.83195 3.89543 3.93652 5 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Layers = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 17.9365L12 22.9365L22 17.9365M2 12.9365L12 17.9365L22 12.9365M12 2.93652L2 7.93652L12 12.9365L22 7.93652L12 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Key = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 2.93652L19 4.93652M19 4.93652L22 7.93652L18.5 11.4365L15.5 8.43652M19 4.93652L15.5 8.43652M11.39 12.5465C11.9064 13.056 12.3168 13.6626 12.5978 14.3313C12.8787 15.0001 13.0246 15.7178 13.0271 16.4432C13.0295 17.1685 12.8884 17.8872 12.6119 18.5578C12.3355 19.2284 11.9291 19.8378 11.4162 20.3507C10.9033 20.8636 10.294 21.27 9.62333 21.5464C8.95271 21.8229 8.23403 21.964 7.50866 21.9615C6.7833 21.9591 6.06557 21.8132 5.39682 21.5323C4.72807 21.2513 4.1215 20.8409 3.61203 20.3245C2.61016 19.2872 2.05579 17.8979 2.06832 16.4558C2.08085 15.0137 2.65928 13.6343 3.67903 12.6145C4.69877 11.5948 6.07824 11.0163 7.52032 11.0038C8.96241 10.9913 10.3517 11.5457 11.389 12.5475L11.39 12.5465ZM11.39 12.5465L15.5 8.43652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Italic = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 20.9365H5M19 4.93652H10M15 4.93652L9 20.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Instagram = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 7.43652H17.51M7 2.93652H17C19.7614 2.93652 22 5.1751 22 7.93652V17.9365C22 20.6979 19.7614 22.9365 17 22.9365H7C4.23858 22.9365 2 20.6979 2 17.9365V7.93652C2 5.1751 4.23858 2.93652 7 2.93652ZM16 12.3065C16.1234 13.1388 15.9813 13.9887 15.5938 14.7355C15.2063 15.4823 14.5932 16.0879 13.8416 16.4662C13.0901 16.8445 12.2385 16.9761 11.4078 16.8425C10.5771 16.7088 9.80977 16.3166 9.21485 15.7217C8.61993 15.1268 8.22774 14.3594 8.09408 13.5287C7.96042 12.6981 8.09208 11.8464 8.47034 11.0949C8.8486 10.3434 9.4542 9.73026 10.201 9.34276C10.9478 8.95526 11.7978 8.81311 12.63 8.93652C13.4789 9.0624 14.2649 9.45798 14.8717 10.0648C15.4785 10.6717 15.8741 11.4576 16 12.3065Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Info = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.9365V12.9365M12 8.93652H12.01M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Inbox = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12.9365L5.45 6.04652C5.61558 5.71331 5.87083 5.43289 6.18704 5.2368C6.50326 5.04071 6.86792 4.93672 7.24 4.93652H16.76C17.1321 4.93672 17.4967 5.04071 17.813 5.2368C18.1292 5.43289 18.3844 5.71331 18.55 6.04652L22 12.9365M2 12.9365V18.9365C2 19.467 2.21071 19.9757 2.58579 20.3507C2.96086 20.7258 3.46957 20.9365 4 20.9365H20C20.5304 20.9365 21.0391 20.7258 21.4142 20.3507C21.7893 19.9757 22 19.467 22 18.9365V12.9365M2 12.9365H8L10 15.9365H14L16 12.9365H22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Image = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 21.9365H19C20.1046 21.9365 21 21.0411 21 19.9365V5.93652C21 4.83195 20.1046 3.93652 19 3.93652H5C3.89543 3.93652 3 4.83195 3 5.93652V19.9365C3 21.0411 3.89543 21.9365 5 21.9365ZM5 21.9365L16 10.9365L21 15.9365M10 9.43652C10 10.265 9.32843 10.9365 8.5 10.9365C7.67157 10.9365 7 10.265 7 9.43652C7 8.6081 7.67157 7.93652 8.5 7.93652C9.32843 7.93652 10 8.6081 10 9.43652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Home = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22.9365V12.9365H15V22.9365M3 9.93652L12 2.93652L21 9.93652V20.9365C21 21.467 20.7893 21.9757 20.4142 22.3507C20.0391 22.7258 19.5304 22.9365 19 22.9365H5C4.46957 22.9365 3.96086 22.7258 3.58579 22.3507C3.21071 21.9757 3 21.467 3 20.9365V9.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Hexagon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 16.9364V8.93643C20.9996 8.5857 20.9071 8.24124 20.7315 7.93759C20.556 7.63394 20.3037 7.38179 20 7.20643L13 3.20643C12.696 3.03089 12.3511 2.93848 12 2.93848C11.6489 2.93848 11.304 3.03089 11 3.20643L4 7.20643C3.69626 7.38179 3.44398 7.63394 3.26846 7.93759C3.09294 8.24124 3.00036 8.5857 3 8.93643V16.9364C3.00036 17.2872 3.09294 17.6316 3.26846 17.9353C3.44398 18.2389 3.69626 18.4911 4 18.6664L11 22.6664C11.304 22.842 11.6489 22.9344 12 22.9344C12.3511 22.9344 12.696 22.842 13 22.6664L20 18.6664C20.3037 18.4911 20.556 18.2389 20.7315 17.9353C20.9071 17.6316 20.9996 17.2872 21 16.9364Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const HelpCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.09 9.93651C9.3251 9.26818 9.78915 8.70462 10.4 8.34565C11.0009 7.99249 11.6837 7.8772 12.3359 7.97281C13.061 8.07914 13.7482 8.44624 14.2424 9.03707C14.7918 9.69393 15.0514 10.5673 14.7562 11.4365C14.3725 12.5659 13.1892 13.5134 11.92 13.9365M12 17.9365H12.01M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Heart = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.0554 4.35348C19.7228 4.63004 20.3292 5.0354 20.84 5.5464C21.351 6.05715 21.7563 6.66358 22.0329 7.33104C22.3095 7.9985 22.4518 8.71391 22.4518 9.4364C22.4518 10.1589 22.3095 10.8743 22.0329 11.5418C21.7563 12.2092 21.351 12.8156 20.84 13.3264L19.78 14.3864L12 22.1664L4.22 14.3864L3.16 13.3264C2.1283 12.2947 1.54871 10.8954 1.54871 9.4364C1.54871 7.97736 2.1283 6.57809 3.16 5.5464C4.19169 4.5147 5.59096 3.93511 7.05 3.93511C8.50903 3.93511 9.9083 4.5147 10.94 5.5464L12 6.6064L13.06 5.5464C13.5708 5.0354 14.1772 4.63004 14.8446 4.35348C15.5121 4.07692 16.2275 3.93457 16.95 3.93457C17.6725 3.93457 18.3879 4.07692 19.0554 4.35348Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const HeadPhones = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 14.9365H18C17.4696 14.9365 16.9609 15.1472 16.5858 15.5223C16.2107 15.8974 16 16.4061 16 16.9365V19.9365C16 20.467 16.2107 20.9757 16.5858 21.3507C16.9609 21.7258 17.4696 21.9365 18 21.9365H19C19.5304 21.9365 20.0391 21.7258 20.4142 21.3507C20.7893 20.9757 21 20.467 21 19.9365V14.9365ZM21 14.9365V12.9365C21 10.5496 20.0518 8.26039 18.364 6.57256C16.6761 4.88473 14.3869 3.93652 12 3.93652C9.61305 3.93652 7.32387 4.88473 5.63604 6.57256C3.94821 8.26039 3 10.5496 3 12.9365V18.9365M3 19.9365C3 20.467 3.21071 20.9757 3.58579 21.3507C3.96086 21.7258 4.46957 21.9365 5 21.9365H6C6.53043 21.9365 7.03914 21.7258 7.41421 21.3507C7.78929 20.9757 8 20.467 8 19.9365V16.9365C8 16.4061 7.78929 15.8974 7.41421 15.5223C7.03914 15.1472 6.53043 14.9365 6 14.9365H3V19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Hash = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 9.93652H20M4 15.9365H20M10 3.93652L8 21.9365M16 3.93652L14 21.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const HardDrive = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12.9365L5.45 6.04652C5.61558 5.71331 5.87083 5.43289 6.18704 5.2368C6.50326 5.04071 6.86792 4.93672 7.24 4.93652H16.76C17.1321 4.93672 17.4967 5.04071 17.813 5.2368C18.1292 5.43289 18.3844 5.71331 18.55 6.04652L22 12.9365M2 12.9365V18.9365C2 19.467 2.21071 19.9757 2.58579 20.3507C2.96086 20.7258 3.46957 20.9365 4 20.9365H20C20.5304 20.9365 21.0391 20.7258 21.4142 20.3507C21.7893 19.9757 22 19.467 22 18.9365V12.9365M2 12.9365H22M10 16.9365V16.9465M6 16.9365V16.9465"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Grid = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 3.93652H14V10.9365H21V3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 14.9365H14V21.9365H21V14.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.9365H3V21.9365H10V14.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Globe = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365M22 12.9365C22 7.41368 17.5228 2.93652 12 2.93652M22 12.9365H2M12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365M12 22.9365C14.5013 20.1982 15.9228 16.6445 16 12.9365C15.9228 9.22856 14.5013 5.67488 12 2.93652M12 22.9365C9.49872 20.1982 8.07725 16.6445 8 12.9365C8.07725 9.22856 9.49872 5.67488 12 2.93652M2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Gitlab = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
  </svg>
);
export const Github = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.16311 20.9403C4.0466 22.4384 4.0466 18.4435 2 17.9442M16.3262 22.9365V20.0715C16.3646 19.5952 16.2987 19.1165 16.1328 18.667C15.967 18.2176 15.705 17.8078 15.3643 17.4648C16.9897 17.288 18.6569 16.8965 19.9078 15.847C22.4505 13.7135 22.7408 9.10827 20.4194 6.72848C20.6401 6.15144 20.749 5.54564 20.7468 4.94074C20.7451 4.43961 20.6671 3.93909 20.5134 3.45604C20.4604 3.28948 20.3983 3.125 20.3273 2.96328C20.3273 2.96328 20.1473 2.91117 19.7655 2.95239C19.3996 2.99189 18.8484 3.11711 18.0926 3.45604C17.5945 3.67944 17.0075 3.99567 16.3262 4.4414C15.1535 4.1312 13.9491 3.97611 12.7447 3.97611C11.5402 3.97611 10.3358 4.1312 9.16311 4.4414C8.52344 4.0229 7.96692 3.71856 7.48903 3.49804C6.91169 3.23163 6.44909 3.08755 6.0932 3.01231C5.45715 2.87784 5.162 2.96328 5.162 2.96328C4.88502 3.594 4.74484 4.26682 4.74248 4.94074C4.74035 5.54564 4.84926 6.15144 5.0699 6.72848C2.87603 8.97746 3.02336 13.2052 5.162 15.4531C6.44333 16.7999 8.31029 17.2748 10.125 17.4947C9.78834 17.8343 9.5287 18.2392 9.36297 18.6831C9.19724 19.1271 9.12914 19.6001 9.16311 20.0715V22.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const GitPullRequest = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9.93652V21.9365M6 9.93652C7.65685 9.93652 9 8.59338 9 6.93652C9 5.27967 7.65685 3.93652 6 3.93652C4.34315 3.93652 3 5.27967 3 6.93652C3 8.59338 4.34315 9.93652 6 9.93652ZM18 15.9365C16.3431 15.9365 15 17.2797 15 18.9365C15 20.5934 16.3431 21.9365 18 21.9365C19.6569 21.9365 21 20.5934 21 18.9365C21 17.2797 19.6569 15.9365 18 15.9365ZM18 15.9365V8.93652C18 8.40609 17.7893 7.89738 17.4142 7.52231C17.0391 7.14724 16.5304 6.93652 16 6.93652H13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const GitMerge = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 21.9365V9.93652M6 9.93652C6 12.3235 6.94821 14.6127 8.63604 16.3005C10.3239 17.9883 12.6131 18.9365 15 18.9365M6 9.93652C7.65685 9.93652 9 8.59338 9 6.93652C9 5.27967 7.65685 3.93652 6 3.93652C4.34315 3.93652 3 5.27967 3 6.93652C3 8.59338 4.34315 9.93652 6 9.93652ZM15 18.9365C15 20.5934 16.3431 21.9365 18 21.9365C19.6569 21.9365 21 20.5934 21 18.9365C21 17.2797 19.6569 15.9365 18 15.9365C16.3431 15.9365 15 17.2797 15 18.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const GitCommit = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12.9365C16 15.1457 14.2091 16.9365 12 16.9365C9.79086 16.9365 8 15.1457 8 12.9365M16 12.9365C16 10.7274 14.2091 8.93652 12 8.93652C9.79086 8.93652 8 10.7274 8 12.9365M16 12.9365H22.96M8 12.9365H1.05005"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const GitBranch = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3.93652V15.9365M6 15.9365C4.34315 15.9365 3 17.2797 3 18.9365C3 20.5934 4.34315 21.9365 6 21.9365C7.65685 21.9365 9 20.5934 9 18.9365M6 15.9365C7.65685 15.9365 9 17.2797 9 18.9365M18 9.93652C19.6569 9.93652 21 8.59338 21 6.93652C21 5.27967 19.6569 3.93652 18 3.93652C16.3431 3.93652 15 5.27967 15 6.93652C15 8.59338 16.3431 9.93652 18 9.93652ZM18 9.93652C18 12.3235 17.0518 14.6127 15.364 16.3005C13.6761 17.9883 11.3869 18.9365 9 18.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Gift = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12.9365V22.9365H4V12.9365M12 22.9365V7.93652M12 7.93652H7.5C6.83696 7.93652 6.20107 7.67313 5.73223 7.20429C5.26339 6.73545 5 6.09956 5 5.43652C5 4.77348 5.26339 4.1376 5.73223 3.66876C6.20107 3.19992 6.83696 2.93652 7.5 2.93652C11 2.93652 12 7.93652 12 7.93652ZM12 7.93652H16.5C17.163 7.93652 17.7989 7.67313 18.2678 7.20429C18.7366 6.73545 19 6.09956 19 5.43652C19 4.77348 18.7366 4.1376 18.2678 3.66876C17.7989 3.19992 17.163 2.93652 16.5 2.93652C13 2.93652 12 7.93652 12 7.93652ZM2 7.93652H22V12.9365H2V7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Frown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 16.9365C16 16.9365 14.5 14.9365 12 14.9365C9.5 14.9365 8 16.9365 8 16.9365M9 9.93652H9.01M15 9.93652H15.01M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Framer = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
  </svg>
);
export const FolderPlus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 11.9365V17.9365M9 14.9365H15M22 19.9365C22 20.467 21.7893 20.9757 21.4142 21.3507C21.0391 21.7258 20.5304 21.9365 20 21.9365H4C3.46957 21.9365 2.96086 21.7258 2.58579 21.3507C2.21071 20.9757 2 20.467 2 19.9365V5.93652C2 5.40609 2.21071 4.89738 2.58579 4.52231C2.96086 4.14724 3.46957 3.93652 4 3.93652H9L11 6.93652H20C20.5304 6.93652 21.0391 7.14724 21.4142 7.52231C21.7893 7.89738 22 8.40609 22 8.93652V19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FolderMinus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14.9365H15M22 19.9365C22 20.467 21.7893 20.9757 21.4142 21.3507C21.0391 21.7258 20.5304 21.9365 20 21.9365H4C3.46957 21.9365 2.96086 21.7258 2.58579 21.3507C2.21071 20.9757 2 20.467 2 19.9365V5.93652C2 5.40609 2.21071 4.89738 2.58579 4.52231C2.96086 4.14724 3.46957 3.93652 4 3.93652H9L11 6.93652H20C20.5304 6.93652 21.0391 7.14724 21.4142 7.52231C21.7893 7.89738 22 8.40609 22 8.93652V19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Folder = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 19.9365C22 20.467 21.7893 20.9757 21.4142 21.3507C21.0391 21.7258 20.5304 21.9365 20 21.9365H4C3.46957 21.9365 2.96086 21.7258 2.58579 21.3507C2.21071 20.9757 2 20.467 2 19.9365V5.93652C2 5.40609 2.21071 4.89738 2.58579 4.52231C2.96086 4.14724 3.46957 3.93652 4 3.93652H9L11 6.93652H20C20.5304 6.93652 21.0391 7.14724 21.4142 7.52231C21.7893 7.89738 22 8.40609 22 8.93652V19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Flag = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 15.9365C4 15.9365 5 14.9365 8 14.9365C11 14.9365 13 16.9365 16 16.9365C18.4007 16.9365 19.5206 16.2962 19.8723 16.0403C20 15.9365 20 15.6746 20 15.4365V12.4365V6.43652V3.93652C20 3.93652 19.893 4.04354 19.6439 4.18755C19.1317 4.48377 18.0186 4.93652 16 4.93652C13 4.93652 11 2.93652 8 2.93652C5 2.93652 4 3.93652 4 3.93652V22.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FilterIcon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 3.93652H2L10 13.3965V19.9365L14 21.9365V13.3965L22 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Film = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 22.9365H4.18C2.97602 22.9365 2 21.9605 2 20.7565V17.9365M7 22.9365H17M7 22.9365V17.9365M7 2.93652H4.18C2.97602 2.93652 2 3.91254 2 5.11652V7.93652M7 2.93652H17M7 2.93652V7.93652M17 2.93652H19.82C21.024 2.93652 22 3.91254 22 5.11652V7.93652M17 2.93652V7.93652M17 22.9365H19.82C21.024 22.9365 22 21.9605 22 20.7565V17.9365M17 22.9365V17.9365M22 17.9365H17M22 17.9365V12.9365M17 17.9365V12.9365M22 12.9365H17M22 12.9365V7.93652M17 12.9365V7.93652M17 12.9365H7M22 7.93652H17M7 7.93652H2M7 7.93652V12.9365M2 7.93652V12.9365M7 12.9365H2M7 12.9365V17.9365M2 12.9365V17.9365M7 17.9365H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FileText = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2.93652H6C5.46957 2.93652 4.96086 3.14724 4.58579 3.52231C4.21071 3.89738 4 4.40609 4 4.93652V20.9365C4 21.467 4.21071 21.9757 4.58579 22.3507C4.96086 22.7258 5.46957 22.9365 6 22.9365H18C18.5304 22.9365 19.0391 22.7258 19.4142 22.3507C19.7893 21.9757 20 21.467 20 20.9365V8.93652M14 2.93652V8.93652H20M14 2.93652L20 8.93652M16 13.9365H8M16 17.9365H8M10 9.93652H9H8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FilePlus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2.93652H6C5.46957 2.93652 4.96086 3.14724 4.58579 3.52231C4.21071 3.89738 4 4.40609 4 4.93652V20.9365C4 21.467 4.21071 21.9757 4.58579 22.3507C4.96086 22.7258 5.46957 22.9365 6 22.9365H18C18.5304 22.9365 19.0391 22.7258 19.4142 22.3507C19.7893 21.9757 20 21.467 20 20.9365V8.93652M14 2.93652V8.93652H20M14 2.93652L20 8.93652M12 18.9365V12.9365M9 15.9365H15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FileMinus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 15.9365H15M14 2.93652H6C5.46957 2.93652 4.96086 3.14724 4.58579 3.52231C4.21071 3.89738 4 4.40609 4 4.93652V20.9365C4 21.467 4.21071 21.9757 4.58579 22.3507C4.96086 22.7258 5.46957 22.9365 6 22.9365H18C18.5304 22.9365 19.0391 22.7258 19.4142 22.3507C19.7893 21.9757 20 21.467 20 20.9365V8.93652M14 2.93652V8.93652H20M14 2.93652L20 8.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const File = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2.93652H6C5.46957 2.93652 4.96086 3.14724 4.58579 3.52231C4.21071 3.89738 4 4.40609 4 4.93652V20.9365C4 21.467 4.21071 21.9757 4.58579 22.3507C4.96086 22.7258 5.46957 22.9365 6 22.9365H18C18.5304 22.9365 19.0391 22.7258 19.4142 22.3507C19.7893 21.9757 20 21.467 20 20.9365V9.93652M13 2.93652V9.93652H20M13 2.93652L20 9.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Figma = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
  </svg>
);
export const Feather = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8.93658L2 22.9366M17.5 15.9366H9M20.24 13.1766C21.3658 12.0507 21.9983 10.5237 21.9983 8.93156C21.9983 7.33938 21.3658 5.8124 20.24 4.68656C19.1142 3.56072 17.5872 2.92822 15.995 2.92822C14.4028 2.92822 12.8758 3.56072 11.75 4.68656L5 11.4366V19.9366H13.5L20.24 13.1766Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FastForward = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.9365L13 19.9365V5.93652L22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 12.9365L2 19.9365V5.93652L11 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Facebook = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2.93652H15C13.6739 2.93652 12.4021 3.46331 11.4645 4.40099C10.5268 5.33867 10 6.61044 10 7.93652V10.9365H7V14.9365H10V22.9365H14V14.9365H17L18 10.9365H14V7.93652C14 7.67131 14.1054 7.41695 14.2929 7.22942C14.4804 7.04188 14.7348 6.93652 15 6.93652H18V2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const EyeOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);
export const Eye = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4.1958C5 4.1958 1 12.1958 1 12.1958C1 12.1958 5 20.1958 12 20.1958C19 20.1958 23 12.1958 23 12.1958C23 12.1958 19 4.1958 12 4.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.1958C13.6569 15.1958 15 13.8527 15 12.1958C15 10.5389 13.6569 9.1958 12 9.1958C10.3431 9.1958 9 10.5389 9 12.1958C9 13.8527 10.3431 15.1958 12 15.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ExternalLink = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13.9365V19.9365C18 20.467 17.7893 20.9757 17.4142 21.3507C17.0391 21.7258 16.5304 21.9365 16 21.9365H5C4.46957 21.9365 3.96086 21.7258 3.58579 21.3507C3.21071 20.9757 3 20.467 3 19.9365V8.93652C3 8.40609 3.21071 7.89738 3.58579 7.52231C3.96086 7.14724 4.46957 6.93652 5 6.93652H11M10 14.9365L21 3.93652M21 3.93652H15M21 3.93652V9.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Edit3 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20.9365H21M16.5 4.43651C16.8978 4.03868 17.4374 3.81519 18 3.81519C18.2786 3.81519 18.5544 3.87006 18.8118 3.97666C19.0692 4.08327 19.303 4.23952 19.5 4.43651C19.697 4.63349 19.8532 4.86734 19.9598 5.12471C20.0665 5.38208 20.1213 5.65793 20.1213 5.93651C20.1213 6.21508 20.0665 6.49093 19.9598 6.7483C19.8532 7.00567 19.697 7.23952 19.5 7.43651L7 19.9365L3 20.9365L4 16.9365L16.5 4.43651Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Edit2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 3.93658C17.2626 3.67394 17.5744 3.4656 17.9176 3.32346C18.2608 3.18131 18.6286 3.10815 19 3.10815C19.3714 3.10815 19.7392 3.18131 20.0824 3.32346C20.4256 3.4656 20.7374 3.67394 21 3.93658C21.2626 4.19923 21.471 4.51103 21.6131 4.85419C21.7553 5.19735 21.8284 5.56515 21.8284 5.93658C21.8284 6.30802 21.7553 6.67581 21.6131 7.01897C21.471 7.36213 21.2626 7.67394 21 7.93658L7.5 21.4366L2 22.9366L3.5 17.4366L17 3.93658Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Edit = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 4.93649H4C3.46957 4.93649 2.96086 5.14721 2.58579 5.52228C2.21071 5.89735 2 6.40606 2 6.93649V20.9365C2 21.4669 2.21071 21.9756 2.58579 22.3507C2.96086 22.7258 3.46957 22.9365 4 22.9365H18C18.5304 22.9365 19.0391 22.7258 19.4142 22.3507C19.7893 21.9756 20 21.4669 20 20.9365V13.9365M18.5 3.43651C18.8978 3.03868 19.4374 2.81519 20 2.81519C20.5626 2.81519 21.1022 3.03868 21.5 3.43651C21.8978 3.83433 22.1213 4.3739 22.1213 4.93651C22.1213 5.49911 21.8978 6.03868 21.5 6.43651L12 15.9365L8 16.9365L9 12.9365L18.5 3.43651Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Droplet = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.66 9.28647L12 3.62646L6.35 9.28647C5.23066 10.4051 4.46821 11.8305 4.1591 13.3825C3.85 14.9345 4.00812 16.5433 4.61346 18.0054C5.21881 19.4675 6.24419 20.7173 7.55989 21.5966C8.8756 22.4758 10.4225 22.9452 12.005 22.9452C13.5875 22.9452 15.1344 22.4758 16.4501 21.5966C17.7658 20.7173 18.7912 19.4675 19.3965 18.0054C20.0019 16.5433 20.16 14.9345 19.8509 13.3825C19.5418 11.8305 18.7793 10.4051 17.66 9.28647Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Dribble = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.56 3.68652C12.93 9.71652 14.58 13.1065 16.59 21.4065M19.13 6.02652C15.41 10.3765 10.19 11.6865 2.25 11.8765M21.75 13.7765C18.25 12.8465 15.12 12.9565 12.81 13.7765C10.23 14.6965 7.8 16.6365 5.37 20.0965M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const DownloadCloud = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="8 17 12 21 16 17"></polyline>
    <line x1="12" y1="12" x2="12" y2="21"></line>
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
  </svg>
);
export const Download = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15.9365V3.93652M12 15.9365L7 10.9365M12 15.9365L17 10.9365M21 15.9365V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H5C4.46957 21.9365 3.96086 21.7258 3.58579 21.3507C3.21071 20.9757 3 20.467 3 19.9365V15.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const DollarSign = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);
export const DivideSquare = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.9365H16M5 3.93652H19C20.1046 3.93652 21 4.83195 21 5.93652V19.9365C21 21.0411 20.1046 21.9365 19 21.9365H5C3.89543 21.9365 3 21.0411 3 19.9365V5.93652C3 4.83195 3.89543 3.93652 5 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const DivideCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.9365H16M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Divide = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12.9365H19M14 18.9365C14 20.0411 13.1046 20.9365 12 20.9365C10.8954 20.9365 10 20.0411 10 18.9365C10 17.832 10.8954 16.9365 12 16.9365C13.1046 16.9365 14 17.832 14 18.9365ZM14 6.93652C14 8.04109 13.1046 8.93652 12 8.93652C10.8954 8.93652 10 8.04109 10 6.93652C10 5.83195 10.8954 4.93652 12 4.93652C13.1046 4.93652 14 5.83195 14 6.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Disc = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.1958C17.5228 22.1958 22 17.7186 22 12.1958C22 6.67295 17.5228 2.1958 12 2.1958C6.47715 2.1958 2 6.67295 2 12.1958C2 17.7186 6.47715 22.1958 12 22.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.1958C13.6569 15.1958 15 13.8527 15 12.1958C15 10.5389 13.6569 9.1958 12 9.1958C10.3431 9.1958 9 10.5389 9 12.1958C9 13.8527 10.3431 15.1958 12 15.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Delete = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 9.93652L12 15.9365M12 9.93652L18 15.9365M21 4.93652H8L1 12.9365L8 20.9365H21C21.5304 20.9365 22.0391 20.7258 22.4142 20.3507C22.7893 19.9757 23 19.467 23 18.9365V6.93652C23 6.40609 22.7893 5.89738 22.4142 5.52231C22.0391 5.14724 21.5304 4.93652 21 4.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Database = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.93652V19.9365C3 21.5965 7 22.9365 12 22.9365C17 22.9365 21 21.5965 21 19.9365V5.93652M3 5.93652C3 7.59338 7.02944 8.93652 12 8.93652C16.9706 8.93652 21 7.59338 21 5.93652M3 5.93652C3 4.27967 7.02944 2.93652 12 2.93652C16.9706 2.93652 21 4.27967 21 5.93652M21 12.9365C21 14.5965 17 15.9365 12 15.9365C7 15.9365 3 14.5965 3 12.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Crosshair = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.9365H18M6 12.9365H2M12 6.93652V2.93652M12 22.9365V18.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Crop = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
    <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
  </svg>
);
export const CreditCard = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10.9365H23M3 4.93652H21C22.1046 4.93652 23 5.83195 23 6.93652V18.9365C23 20.0411 22.1046 20.9365 21 20.9365H3C1.89543 20.9365 1 20.0411 1 18.9365V6.93652C1 5.83195 1.89543 4.93652 3 4.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Cpu = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);
export const CornerUpRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 14.9365L20 9.93652M20 9.93652L15 4.93652M20 9.93652H8C6.93913 9.93652 5.92172 10.358 5.17157 11.1081C4.42143 11.8582 4 12.8757 4 13.9365V20.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CornerUpLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14.9365L4 9.93652M4 9.93652L9 4.93652M4 9.93652H16C17.0609 9.93652 18.0783 10.358 18.8284 11.1081C19.5786 11.8582 20 12.8757 20 13.9365V20.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CornerRightUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 9.93652L15 4.93652M15 4.93652L20 9.93652M15 4.93652V16.9365C15 17.9974 14.5786 19.0148 13.8284 19.7649C13.0783 20.5151 12.0609 20.9365 11 20.9365H4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CornerRightDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 15.9365L15 20.9365M15 20.9365L20 15.9365M15 20.9365V8.93652C15 7.87566 14.5786 6.85824 13.8284 6.1081C13.0783 5.35795 12.0609 4.93652 11 4.93652H4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CornerLeftUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9.93652L9 4.93652M9 4.93652L4 9.93652M9 4.93652V16.9365C9 17.9974 9.42143 19.0148 10.1716 19.7649C10.9217 20.5151 11.9391 20.9365 13 20.9365H20"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CornerLeftDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 15.9365L9 20.9365M9 20.9365L4 15.9365M9 20.9365V8.93652C9 7.87566 9.42143 6.85824 10.1716 6.1081C10.9217 5.35795 11.9391 4.93652 13 4.93652H20"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CornerDownRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 10.9365L20 15.9365M20 15.9365L15 20.9365M20 15.9365H8C6.93913 15.9365 5.92172 15.5151 5.17157 14.765C4.42143 14.0148 4 12.9974 4 11.9365V4.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CornerDownLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 15.9365L9 20.9365M4 15.9365H16C17.0609 15.9365 18.0783 15.5151 18.8284 14.765C19.5786 14.0148 20 12.9974 20 11.9365V4.93652M4 15.9365L9 10.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Copy = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 15.9365H4C3.46957 15.9365 2.96086 15.7258 2.58579 15.3507C2.21071 14.9757 2 14.467 2 13.9365V4.93652C2 4.40609 2.21071 3.89738 2.58579 3.52231C2.96086 3.14724 3.46957 2.93652 4 2.93652H13C13.5304 2.93652 14.0391 3.14724 14.4142 3.52231C14.7893 3.89738 15 4.40609 15 4.93652V5.93652M11 9.93652H20C21.1046 9.93652 22 10.832 22 11.9365V20.9365C22 22.0411 21.1046 22.9365 20 22.9365H11C9.89543 22.9365 9 22.0411 9 20.9365V11.9365C9 10.832 9.89543 9.93652 11 9.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Compass = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.1958C17.5228 22.1958 22 17.7186 22 12.1958C22 6.67295 17.5228 2.1958 12 2.1958C6.47715 2.1958 2 6.67295 2 12.1958C2 17.7186 6.47715 22.1958 12 22.1958Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1198 14.3156L16.2398 7.95557L9.87977 10.0756L7.75977 16.4356L14.1198 14.3156Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Command = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 3.93652C17.2044 3.93652 16.4413 4.25259 15.8787 4.8152C15.3161 5.37781 15 6.14087 15 6.93652V18.9365C15 19.7322 15.3161 20.4952 15.8787 21.0578C16.4413 21.6205 17.2044 21.9365 18 21.9365C18.7956 21.9365 19.5587 21.6205 20.1213 21.0578C20.6839 20.4952 21 19.7322 21 18.9365C21 18.1409 20.6839 17.3778 20.1213 16.8152C19.5587 16.2526 18.7956 15.9365 18 15.9365H6C5.20435 15.9365 4.44129 16.2526 3.87868 16.8152C3.31607 17.3778 3 18.1409 3 18.9365C3 19.7322 3.31607 20.4952 3.87868 21.0578C4.44129 21.6205 5.20435 21.9365 6 21.9365C6.79565 21.9365 7.55871 21.6205 8.12132 21.0578C8.68393 20.4952 9 19.7322 9 18.9365V6.93652C9 6.14087 8.68393 5.37781 8.12132 4.8152C7.55871 4.25259 6.79565 3.93652 6 3.93652C5.20435 3.93652 4.44129 4.25259 3.87868 4.8152C3.31607 5.37781 3 6.14087 3 6.93652C3 7.73217 3.31607 8.49524 3.87868 9.05784C4.44129 9.62045 5.20435 9.93652 6 9.93652H18C18.7956 9.93652 19.5587 9.62045 20.1213 9.05784C20.6839 8.49524 21 7.73217 21 6.93652C21 6.14087 20.6839 5.37781 20.1213 4.8152C19.5587 4.25259 18.7956 3.93652 18 3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Columns = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3.93652V21.9365M12 3.93652H19C19.5304 3.93652 20.0391 4.14724 20.4142 4.52231C20.7893 4.89738 21 5.40609 21 5.93652V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H12V3.93652ZM12 3.93652H5C4.46957 3.93652 3.96086 4.14724 3.58579 4.52231C3.21071 4.89738 3 5.40609 3 5.93652V19.9365C3 20.467 3.21071 20.9757 3.58579 21.3507C3.96086 21.7258 4.46957 21.9365 5 21.9365H12V3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Coffee = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

export const CodeSandBox = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export const CodePen = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.93652L22 9.43652M12 2.93652L2 9.43652M12 2.93652V9.43652M22 9.43652V16.4365M22 9.43652L12 16.4365M22 16.4365L12 22.9365M22 16.4365L12 9.43652M12 22.9365L2 16.4365M12 22.9365V16.4365M2 16.4365V9.43652M2 16.4365L12 9.43652M2 9.43652L12 16.4365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Code = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 6.93652L2 12.9365L8 18.9365M16 18.9365L22 12.9365L16 6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloudSnow = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
    <line x1="8" y1="16" x2="8.01" y2="16"></line>
    <line x1="8" y1="20" x2="8.01" y2="20"></line>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
    <line x1="12" y1="22" x2="12.01" y2="22"></line>
    <line x1="16" y1="16" x2="16.01" y2="16"></line>
    <line x1="16" y1="20" x2="16.01" y2="20"></line>
  </svg>
);

export const CloudRain = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="16" y1="13" x2="16" y2="21"></line>
    <line x1="8" y1="13" x2="8" y2="21"></line>
    <line x1="12" y1="15" x2="12" y2="23"></line>
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
  </svg>
);

export const CloudOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

export const CloudLightning = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
    <polyline points="13 11 9 17 15 17 11 23"></polyline>
  </svg>
);

export const CloudDrizzle = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="19" x2="8" y2="21"></line>
    <line x1="8" y1="13" x2="8" y2="15"></line>
    <line x1="16" y1="19" x2="16" y2="21"></line>
    <line x1="16" y1="13" x2="16" y2="15"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="12" y1="15" x2="12" y2="17"></line>
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
  </svg>
);

export const Cloud = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5461 10.9793C16.5461 10.9793 17.0446 10.9793 17.5432 10.9793M16.5461 10.9793L17.5432 10.9793M16.5461 10.9793C16.0476 7.49433 12.3129 4.43631 8.07087 5.00504C2.93775 5.69323 0.481864 9.94836 1.09124 13.9665C1.63084 17.5245 4.66224 20.9365 9.06795 20.9365C10.065 20.9365 13.4657 20.9365 16.5461 20.9365C19.1882 20.9365 21.033 20.7388 22.3315 18.4472C24.0242 15.4601 22.5286 10.9793 17.5432 10.9793"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Clock = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.93652V12.9365L16 14.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Clipboard = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4.93652H18C18.5304 4.93652 19.0391 5.14724 19.4142 5.52231C19.7893 5.89738 20 6.40609 20 6.93652V20.9365C20 21.467 19.7893 21.9757 19.4142 22.3507C19.0391 22.7258 18.5304 22.9365 18 22.9365H6C5.46957 22.9365 4.96086 22.7258 4.58579 22.3507C4.21071 21.9757 4 21.467 4 20.9365V6.93652C4 6.40609 4.21071 5.89738 4.58579 5.52231C4.96086 5.14724 5.46957 4.93652 6 4.93652H8M9 2.93652H15C15.5523 2.93652 16 3.38424 16 3.93652V5.93652C16 6.48881 15.5523 6.93652 15 6.93652H9C8.44772 6.93652 8 6.48881 8 5.93652V3.93652C8 3.38424 8.44772 2.93652 9 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Circle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.9365C17.5228 22.9365 22 18.4594 22 12.9365C22 7.41368 17.5228 2.93652 12 2.93652C6.47715 2.93652 2 7.41368 2 12.9365C2 18.4594 6.47715 22.9365 12 22.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Chrome = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.93652C9.79086 8.93652 8 10.7274 8 12.9365C8 15.1457 9.79086 16.9365 12 16.9365C14.2091 16.9365 16 15.1457 16 12.9365C16 10.7274 14.2091 8.93652 12 8.93652ZM12 8.93652H21.17M3.95001 6.99652L8.54001 14.9365M10.88 22.8765L15.46 14.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronsUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 11.9365L12 6.93652L7 11.9365M17 18.9365L12 13.9365L7 18.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronsRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 17.9365L18 12.9365L13 7.93652M6 7.93652L11 12.9365L6 17.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronsLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17.9365L6 12.9365L11 7.93652M18 17.9365L13 12.9365L18 7.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronsDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13.9365L12 18.9365L17 13.9365M7 6.93652L12 11.9365L17 6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15.9365L12 9.93652L6 15.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18.9365L15 12.9365L9 6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18.9365L9 12.9365L15 6.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9.93652L12 15.9365L18 9.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckSquare = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12.9365V19.9365C21 20.467 20.7893 20.9757 20.4142 21.3507C20.0391 21.7258 19.5304 21.9365 19 21.9365H5C4.46957 21.9365 3.96086 21.7258 3.58579 21.3507C3.21071 20.9757 3 20.467 3 19.9365V5.93652C3 5.40609 3.21071 4.89738 3.58579 4.52231C3.96086 4.14724 4.46957 3.93652 5 3.93652H16M9 11.9365L12 14.9365L22 4.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.0164V12.9364C21.9988 15.0928 21.3005 17.1911 20.0093 18.9182C18.7182 20.6454 16.9033 21.9089 14.8354 22.5203C12.7674 23.1317 10.5573 23.0583 8.53447 22.311C6.51168 21.5637 4.78465 20.1825 3.61096 18.3735C2.43727 16.5644 1.87979 14.4245 2.02168 12.2727C2.16356 10.121 2.99721 8.07271 4.39828 6.43346C5.79935 4.79421 7.69279 3.65177 9.79619 3.17653C11.8996 2.7013 14.1003 2.91872 16.07 3.79639M22 4.9364L12 14.9464L9 11.9464"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Check = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6.93652L9 17.9365L4 12.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Cast = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 17.0365C2.96089 17.2325 3.84294 17.7067 4.53638 18.4001C5.22982 19.0936 5.70403 19.9756 5.9 20.9365M2 12.9865C4.03079 13.2124 5.92428 14.1226 7.36911 15.5674C8.81395 17.0122 9.72414 18.9057 9.95 20.9365M2 8.93652V6.93652C2 6.40609 2.21071 5.89738 2.58579 5.52231C2.96086 5.14724 3.46957 4.93652 4 4.93652H20C20.5304 4.93652 21.0391 5.14724 21.4142 5.52231C21.7893 5.89738 22 6.40609 22 6.93652V18.9365C22 19.467 21.7893 19.9757 21.4142 20.3507C21.0391 20.7258 20.5304 20.9365 20 20.9365H14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 20.9365H2.01"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CameraOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="1" y1="1" x2="23" y2="23"></line>
    <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
  </svg>
);

export const Camera = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 19.9365C23 20.467 22.7893 20.9757 22.4142 21.3507C22.0391 21.7258 21.5304 21.9365 21 21.9365H3C2.46957 21.9365 1.96086 21.7258 1.58579 21.3507C1.21071 20.9757 1 20.467 1 19.9365V8.93652C1 8.40609 1.21071 7.89738 1.58579 7.52231C1.96086 7.14724 2.46957 6.93652 3 6.93652H7L9 3.93652H15L17 6.93652H21C21.5304 6.93652 22.0391 7.14724 22.4142 7.52231C22.7893 7.89738 23 8.40609 23 8.93652V19.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17.9365C14.2091 17.9365 16 16.1457 16 13.9365C16 11.7274 14.2091 9.93652 12 9.93652C9.79086 9.93652 8 11.7274 8 13.9365C8 16.1457 9.79086 17.9365 12 17.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Calender = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2.93652V6.93652M8 2.93652V6.93652M3 10.9365H21M5 4.93652H19C20.1046 4.93652 21 5.83195 21 6.93652V20.9365C21 22.0411 20.1046 22.9365 19 22.9365H5C3.89543 22.9365 3 22.0411 3 20.9365V6.93652C3 5.83195 3.89543 4.93652 5 4.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BriefCase = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21.9365V5.93652C16 5.40609 15.7893 4.89738 15.4142 4.52231C15.0391 4.14724 14.5304 3.93652 14 3.93652H10C9.46957 3.93652 8.96086 4.14724 8.58579 4.52231C8.21071 4.89738 8 5.40609 8 5.93652V21.9365M4 7.93652H20C21.1046 7.93652 22 8.83195 22 9.93652V19.9365C22 21.0411 21.1046 21.9365 20 21.9365H4C2.89543 21.9365 2 21.0411 2 19.9365V9.93652C2 8.83195 2.89543 7.93652 4 7.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Box = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export const Bookmark = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 21.9365L12 16.9365L5 21.9365V5.93652C5 5.40609 5.21071 4.89738 5.58579 4.52231C5.96086 4.14724 6.46957 3.93652 7 3.93652H17C17.5304 3.93652 18.0391 4.14724 18.4142 4.52231C18.7893 4.89738 19 5.40609 19 5.93652V21.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BankOpen = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 3.93652H16C14.9391 3.93652 13.9217 4.35795 13.1716 5.1081C12.4214 5.85824 12 6.87566 12 7.93652V21.9365C12 21.1409 12.3161 20.3778 12.8787 19.8152C13.4413 19.2526 14.2044 18.9365 15 18.9365H22V3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 3.93652H8C9.06087 3.93652 10.0783 4.35795 10.8284 5.1081C11.5786 5.85824 12 6.87566 12 7.93652V21.9365C12 21.1409 11.6839 20.3778 11.1213 19.8152C10.5587 19.2526 9.79565 18.9365 9 18.9365H2V3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Book = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 20.4365C4 21.0996 4.26339 21.7354 4.73223 22.2043C5.20107 22.6731 5.83696 22.9365 6.5 22.9365H20V2.93652H6.5C5.83696 2.93652 5.20107 3.19992 4.73223 3.66876C4.26339 4.1376 4 4.77348 4 5.43652V20.4365ZM4 20.4365C4 19.7735 4.26339 19.1376 4.73223 18.6688C5.20107 18.1999 5.83696 17.9365 6.5 17.9365H20"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Bold = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12.9365H14C15.0609 12.9365 16.0783 12.5151 16.8284 11.765C17.5786 11.0148 18 9.99739 18 8.93652C18 7.87566 17.5786 6.85824 16.8284 6.1081C16.0783 5.35795 15.0609 4.93652 14 4.93652H6V12.9365ZM6 12.9365H15C16.0609 12.9365 17.0783 13.358 17.8284 14.1081C18.5786 14.8582 19 15.8757 19 16.9365C19 17.9974 18.5786 19.0148 17.8284 19.7649C17.0783 20.5151 16.0609 20.9365 15 20.9365H6V12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Bluetooth = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
  </svg>
);

export const BellOff = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
    <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
    <path d="M18 8a6 6 0 0 0-9.33-5"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);
export const Bell = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.73 21.9365C13.5542 22.2396 13.3018 22.4912 12.9982 22.6661C12.6946 22.8409 12.3504 22.933 12 22.933C11.6496 22.933 11.3054 22.8409 11.0018 22.6661C10.6981 22.4912 10.4458 22.2396 10.27 21.9365M18 8.93652C18 7.34522 17.3679 5.8191 16.2426 4.69388C15.1174 3.56866 13.5913 2.93652 12 2.93652C10.4087 2.93652 8.88258 3.56866 7.75736 4.69388C6.63214 5.8191 6 7.34522 6 8.93652C6 15.9365 3 17.9365 3 17.9365H21C21 17.9365 18 15.9365 18 8.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BatteryCharging = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 13.9365V11.9365M5 18.9365H3C2.46957 18.9365 1.96086 18.7258 1.58579 18.3507C1.21071 17.9757 1 17.467 1 16.9365V8.93652C1 8.40609 1.21071 7.89738 1.58579 7.52231C1.96086 7.14724 2.46957 6.93652 3 6.93652H6.19M15 6.93652H17C17.5304 6.93652 18.0391 7.14724 18.4142 7.52231C18.7893 7.89738 19 8.40609 19 8.93652V16.9365C19 17.467 18.7893 17.9757 18.4142 18.3507C18.0391 18.7258 17.5304 18.9365 17 18.9365H13.81M11 6.93652L7 12.9365H13L9 18.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Battery = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 13.9365V11.9365M3 6.93652H17C18.1046 6.93652 19 7.83195 19 8.93652V16.9365C19 18.0411 18.1046 18.9365 17 18.9365H3C1.89543 18.9365 1 18.0411 1 16.9365V8.93652C1 7.83195 1.89543 6.93652 3 6.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BarChart2 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 20.9365V10.9365M12 20.9365V4.93652M6 20.9365V14.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BarChart1 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 20.9365V4.93652M12 20.9365V10.9365M6 20.9365V16.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Award = (props: IconI) => (
  <svg
    viewBox="0 0 24 24"
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    stroke={props.color ?? "currentColor"}
    strokeWidth={props.strokeWidth ?? "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

export const AtSign = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8.93639V13.9364C16 14.732 16.3161 15.4951 16.8787 16.0577C17.4413 16.6203 18.2044 16.9364 19 16.9364C19.7957 16.9364 20.5587 16.6203 21.1213 16.0577C21.6839 15.4951 22 14.732 22 13.9364V12.9364C21.9999 10.6794 21.2362 8.48887 19.8333 6.72092C18.4303 4.95298 16.4706 3.71162 14.2726 3.19869C12.0747 2.68576 9.76794 2.93143 7.72736 3.89576C5.68677 4.86008 4.03241 6.48635 3.03327 8.51011C2.03413 10.5339 1.74898 12.8361 2.22418 15.0425C2.69938 17.2489 3.90699 19.2296 5.65064 20.6627C7.39429 22.0957 9.57144 22.8967 11.8281 22.9355C14.0847 22.9743 16.2881 22.2486 18.08 20.8764M16 12.9364C16 15.1455 14.2091 16.9364 12 16.9364C9.79086 16.9364 8 15.1455 8 12.9364C8 10.7273 9.79086 8.9364 12 8.9364C14.2091 8.9364 16 10.7273 16 12.9364Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17.9365L17 7.93652M17 7.93652V17.9365M17 7.93652H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 17.9365L7 7.93652M7 7.93652H17M7 7.93652V17.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12.9365L12 8.93652M12 8.93652L8 12.9365M12 8.93652V16.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUp = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19.9365V5.93652M12 5.93652L5 12.9365M12 5.93652L19 12.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRightCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.9365L16 12.9365M16 12.9365L12 8.93652M16 12.9365H8M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12.9365H19M19 12.9365L12 5.93652M19 12.9365L12 19.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12.9365H8M8 12.9365L12 8.93652M8 12.9365L12 16.9365M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19.9365L5 12.9365M5 12.9365L12 5.93652M5 12.9365H19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDownRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7.93652L17 17.9365M17 17.9365V7.93652M17 17.9365H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDownLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 17.9365H7M7 17.9365V7.93652M7 17.9365L17 7.93652"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDownCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.9365L12 16.9365M12 16.9365L16 12.9365M12 16.9365V8.93652M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDown = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.93652V19.9365M12 19.9365L19 12.9365M12 19.9365L5 12.9365"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Archive = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 8.93652V21.9365H3V8.93652M10 12.9365H14M1 3.93652H23V8.93652H1V3.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Aperture = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.31 8.93652L20.05 18.8765M9.69 8.93652H21.17M7.38 12.9365L13.12 2.99652M9.69001 16.9365L3.95001 6.99652M14.31 16.9365H2.82999M16.62 12.9365L10.88 22.8765M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Anchor = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.93652C13.6569 8.93652 15 7.59338 15 5.93652C15 4.27967 13.6569 2.93652 12 2.93652C10.3431 2.93652 9 4.27967 9 5.93652C9 7.59338 10.3431 8.93652 12 8.93652ZM12 8.93652V22.9365M12 22.9365C9.34784 22.9365 6.8043 21.883 4.92893 20.0076C3.05357 18.1322 2 15.5887 2 12.9365H5M12 22.9365C14.6522 22.9365 17.1957 21.883 19.0711 20.0076C20.9464 18.1322 22 15.5887 22 12.9365H19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlignRight = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 6.93652H3M21 10.9365H7M21 14.9365H3M21 18.9365H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlignLeft = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 10.9365H3M21 6.93652H3M21 14.9365H3M17 18.9365H3"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlignJustify = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 6.93652H3M21 10.9365H3M21 14.9365H3M21 18.9365H3"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlignCenter = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 18.9365H6M18 10.9365H6M21 6.93652H3M21 14.9365H3"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlertTriangle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.9367H12.01M12 9.93671V13.9367M10.29 4.79673C10.4683 4.50283 10.7193 4.25985 11.0188 4.09121C11.3184 3.92258 11.6563 3.83398 12 3.83398C12.3438 3.83398 12.6817 3.92258 12.9812 4.09121C13.2807 4.25985 13.5318 4.50283 13.71 4.79673L22.18 18.9367C22.3547 19.2392 22.4471 19.582 22.448 19.9312C22.449 20.2805 22.3585 20.6239 22.1856 20.9273C22.0127 21.2306 21.7633 21.4835 21.4623 21.6606C21.1613 21.8377 20.8192 21.9329 20.47 21.9367H3.53002C3.18082 21.9329 2.83871 21.8377 2.53773 21.6606C2.23675 21.4835 1.98738 21.2306 1.81445 20.9273C1.64151 20.6239 1.55103 20.2805 1.55201 19.9312C1.55299 19.582 1.64539 19.2392 1.82002 18.9367L9.00815 6.93671L10 5.2809L10.29 4.79673Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlertOctagon = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12.9365V8.93652M12 16.9365V16.9465M7.86 2.93652H16.14L22 8.79652V17.0765L16.14 22.9365H7.86L2 17.0765V8.79652L7.86 2.93652Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlertCircle = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.93652V12.9365M12 16.9365H12.01M22 12.9365C22 18.4594 17.5228 22.9365 12 22.9365C6.47715 22.9365 2 18.4594 2 12.9365C2 7.41368 6.47715 2.93652 12 2.93652C17.5228 2.93652 22 7.41368 22 12.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Airplay = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 17.9365H4C3.46957 17.9365 2.96086 17.7258 2.58579 17.3507C2.21071 16.9757 2 16.467 2 15.9365V5.93652C2 5.40609 2.21071 4.89738 2.58579 4.52231C2.96086 4.14724 3.46957 3.93652 4 3.93652H20C20.5304 3.93652 21.0391 4.14724 21.4142 4.52231C21.7893 4.89738 22 5.40609 22 5.93652V15.9365C22 16.467 21.7893 16.9757 21.4142 17.3507C21.0391 17.7258 20.5304 17.9365 20 17.9365H19M12 15.9365L17 21.9365H7L12 15.9365Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Activity = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.9365H18L15 21.9365L9 3.93652L6 12.9365H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Custom Icons

export const ProductDelivery = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20V15C2 13.8954 2.89543 13 4 13H5C6.10457 13 7 13.8954 7 15V20C7 21.1046 6.10457 22 5 22H4C2.89543 22 2 21.1046 2 20Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M7 15L10.3862 13.3069C10.784 13.108 11.2368 13.0474 11.6729 13.1346L14.3922 13.6784C15.3271 13.8654 16 14.6862 16 15.6396V17M16 17H13M16 17L19.8501 14.6899C20.4704 14.3178 21.2762 14.5524 21.5997 15.1994V15.1994C21.8388 15.6775 21.7451 16.2549 21.3671 16.6329L18.4282 19.5718C18.149 19.851 17.7934 20.0413 17.4062 20.1188L13.441 20.9118C13.1506 20.9699 12.851 20.9627 12.5637 20.8909L9.23886 20.0597C9.08022 20.0201 8.91731 20 8.75379 20H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9 14V4C9 2.89543 9.89543 2 11 2H19C20.1046 2 21 2.89543 21 4V14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Discount = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 14L14 10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9.97281 3.85828C11.1198 2.80688 12.8802 2.80688 14.0272 3.85828L14.6734 4.45063C15.1087 4.84968 15.6521 5.11137 16.2355 5.20292L17.1015 5.3388C18.6387 5.58 19.7363 6.95637 19.6294 8.50864L19.5692 9.38317C19.5286 9.97232 19.6628 10.5603 19.955 11.0735L20.3887 11.8353C21.1585 13.1875 20.7668 14.9038 19.4865 15.7881L18.7652 16.2862C18.2793 16.6218 17.9032 17.0934 17.6842 17.6418L17.359 18.4559C16.7818 19.9008 15.1957 20.6646 13.7061 20.215L12.8669 19.9617C12.3016 19.791 11.6984 19.791 11.1331 19.9617L10.2939 20.215C8.80431 20.6646 7.2182 19.9008 6.64101 18.4559L6.31582 17.6418C6.09675 17.0934 5.7207 16.6218 5.23479 16.2862L4.51351 15.7881C3.23324 14.9038 2.8415 13.1875 3.61132 11.8353L4.04502 11.0735C4.3372 10.5603 4.47141 9.97232 4.43084 9.38317L4.37062 8.50864C4.26372 6.95637 5.36134 5.58 6.89848 5.3388L7.76448 5.20292C8.34789 5.11137 8.89131 4.84968 9.32663 4.45063L9.97281 3.85828Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <circle
      cx="13.5"
      cy="14.5"
      r="0.5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <circle
      cx="10.5"
      cy="9.5"
      r="0.5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
  </svg>
);
export const Billing = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 22V18C2 16.8954 2.89543 16 4 16H5M22 22V18C22 16.8954 21.1046 16 20 16H19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M5 19V5.26722C5 4.06153 6.45772 3.45772 7.31027 4.31027C7.72217 4.72217 8.35143 4.82429 8.87244 4.56378L11.1056 3.44721C11.6686 3.16569 12.3314 3.16569 12.8944 3.44721L15.1276 4.56378C15.6486 4.82429 16.2778 4.72217 16.6897 4.31027C17.5423 3.45772 19 4.06153 19 5.26722V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="11"
      x2="15"
      y2="11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="15"
      x2="15"
      y2="15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const ProductSuccessful = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M22 17L17 22L15 20"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Campaign = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17V21.3615C11 21.7141 10.7141 22 10.3615 22V22C10.1372 22 9.9294 21.8823 9.81401 21.69L7 17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M2.58556 15.4231L2.30177 14.2487C2.11792 13.488 2.39473 12.6899 3.01017 12.2063L14.0093 3.56409C15.0251 2.76603 16.5196 3.12578 17.0609 4.29862L20.8389 12.4843C21.4105 13.7227 20.602 15.1573 19.2466 15.3098L4.75325 16.9407C3.75146 17.0535 2.82237 16.403 2.58556 15.4231Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 9.0643L20.1121 8.83801C20.5208 8.01306 19.9206 7.0459 19 7.0459V7.0459"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Analytics = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M8 11V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M12 6V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 9V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M15 18L18 22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M9 18L6 22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
export const Store = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C2.89543 2 2 2.89543 2 4V7.17157C2 8.73367 3.26633 10 4.82843 10C5.57857 10 6.29799 9.70201 6.82843 9.17157L7.29289 8.70711C7.68342 8.31658 8.31658 8.31658 8.70711 8.70711L8.82843 8.82843C9.57857 9.57857 10.596 10 11.6569 10H12.3431C13.404 10 14.4214 9.57857 15.1716 8.82843L15.2929 8.70711C15.6834 8.31658 16.3166 8.31658 16.7071 8.70711L17.1716 9.17157C17.702 9.70201 18.4214 10 19.1716 10C20.7337 10 22 8.73367 22 7.17157V4C22 2.89543 21.1046 2 20 2Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <path
      d="M4 10V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M8 14V16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16V14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
// Payment
export const Payment1 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2V12"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 4H16.5C15.6716 4 15 4.67157 15 5.5V5.5C15 6.32843 15.6716 7 16.5 7H19.5C20.3284 7 21 7.67157 21 8.5V8.5C21 9.32843 20.3284 10 19.5 10H15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M2 20V15C2 13.8954 2.89543 13 4 13H5C6.10457 13 7 13.8954 7 15V20C7 21.1046 6.10457 22 5 22H4C2.89543 22 2 21.1046 2 20Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M7 15L10.3862 13.3069C10.784 13.108 11.2368 13.0474 11.6729 13.1346L14.3922 13.6784C15.3271 13.8654 16 14.6862 16 15.6396V17M16 17H13M16 17L19.8501 14.6899C20.4704 14.3178 21.2762 14.5524 21.5997 15.1994V15.1994C21.8388 15.6775 21.7451 16.2549 21.3671 16.6329L18.4282 19.5718C18.149 19.851 17.7934 20.0413 17.4062 20.1188L13.441 20.9118C13.1506 20.9699 12.851 20.9627 12.5637 20.8909L9.23886 20.0597C9.08022 20.0201 8.91731 20 8.75379 20H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Theme = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2H4C2.89543 2 2 2.89543 2 4V12H12V2Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 16H2V20C2 21.1046 2.89543 22 4 22H12V16Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 2H16V8H22V4C22 2.89543 21.1046 2 20 2Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M22 12H16V22H20C21.1046 22 22 21.1046 22 20V12Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Transaction = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M22 2V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M16 6L18 8L16 10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M2 8L17 8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M8 14L6 16L8 18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M22 16L7 16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const BulkOrders = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 14V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 2V4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 12H4C2.89543 12 2 12.8954 2 14V20C2 21.1046 2.89543 22 4 22H12V12Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 12H12V22H20C21.1046 22 22 21.1046 22 20V14C22 12.8954 21.1046 12 20 12Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const BulkProducts = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 7V7C6 8.10457 6.89543 9 8 9V9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10 19V9C10 7.89543 10.8954 7 12 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H12C10.8954 21 10 20.1046 10 19Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M18 11C18 11.5304 17.7893 12.0391 17.4142 12.4142C17.0391 12.7893 16.5304 13 16 13C15.4696 13 14.9609 12.7893 14.5858 12.4142C14.2107 12.0391 14 11.5304 14 11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const AbandonedCart = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 21C10.5523 21 11 20.5523 11 20C11 19.4477 10.5523 19 10 19C9.44772 19 9 19.4477 9 20C9 20.5523 9.44772 21 10 21Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19C16.4477 19 16 19.4477 16 20C16 20.5523 16.4477 21 17 21Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9L12 12"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9L15 12"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.8 5L7.65405 14.5715C7.90678 15.4191 8.6862 16 9.57066 16H17.2293C18.1138 16 18.8932 15.4191 19.146 14.5715L21.2332 7.5715C21.6157 6.28897 20.6549 5 19.3166 5H4.8ZM4.8 5L4.53003 4.28956C4.23503 3.51324 3.49096 3 2.66047 3H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Activities = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.1168 19.7809L2.43236 13.7851C2.75506 7.65378 7.65378 2.75506 13.7851 2.43236L19.7808 2.1168C20.9668 2.05438 21.9456 3.03316 21.8832 4.21915L21.5676 10.2149C21.2449 16.3462 16.3462 21.2449 10.2149 21.5676L4.21915 21.8832C3.03316 21.9456 2.05438 20.9668 2.1168 19.7809Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M16.8626 6.96484L7.1374 17.0356"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M13.34 7.7334L16.2173 10.512"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10.5613 10.6108L13.4387 13.3895"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M7.78269 13.4883L10.6601 16.2669"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const AddProduct = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 18H22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 14V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Apps = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 6H22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 2V10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M2 8V4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V8C10 9.10457 9.10457 10 8 10H4C2.89543 10 2 9.10457 2 8Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M14 20V16C14 14.8954 14.8954 14 16 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H16C14.8954 22 14 21.1046 14 20Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M2 20V16C2 14.8954 2.89543 14 4 14H8C9.10457 14 10 14.8954 10 16V20C10 21.1046 9.10457 22 8 22H4C2.89543 22 2 21.1046 2 20Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
export const Wallet = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M22 9H15C13.8954 9 13 9.89543 13 11V13C13 14.1046 13.8954 15 15 15H22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
export const ReturnProduct = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 16L15 18L17 20"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M22 22V20C22 18.8954 21.1046 18 20 18H15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M14 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Payment = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 2V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 17V18C20 19.1046 19.1046 20 18 20H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 11V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 7V6C20 4.89543 19.1046 4 18 4H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
// List Repeat
export const List = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 4H6C4.89543 4 4 4.89543 4 6V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V6C20 4.89543 19.1046 4 18 4H17.5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M15 2H9C7.89543 2 7 2.89543 7 4C7 5.10457 7.89543 6 9 6H15C16.1046 6 17 5.10457 17 4C17 2.89543 16.1046 2 15 2Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <circle cx="8" cy="12" r="1" fill={props.color ?? "currentColor"} />
    <path
      d="M12 12H16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <circle cx="8" cy="16" r="1" fill={props.color ?? "currentColor"} />
    <path
      d="M12 16H16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Money = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16.5802V7.079C2 5.91576 3.29799 5.22336 4.26411 5.87123C5.9614 7.00941 8.13148 7.17342 9.98055 6.30327L12.9008 4.92906C15.4438 3.73231 18.4284 3.95788 20.7628 5.52326L21.1139 5.75874C21.6677 6.13011 22 6.75304 22 7.41983V16.921C22 18.0842 20.702 18.7766 19.7359 18.1288C18.0386 16.9906 15.8685 16.8266 14.0194 17.6967L11.0992 19.0709C8.55615 20.2677 5.57159 20.0421 3.23725 18.4767L2.88609 18.2413C2.3323 17.8699 2 17.247 2 16.5802Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 9V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M6 11V15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Rupee = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 7L5 7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M19 2L5 2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5 12L18 22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5 2H11C13.7614 2 16 4.23858 16 7V7C16 9.76142 13.7614 12 11 12H5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Yen = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 2L12 10L19 2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 10V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M19 11L5 11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M16.8572 14.7998L7.14287 14.7998"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Bitcoin = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 5V19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9 2V4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M14 2V4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9 20V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M14 20V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5 4H15C17.2091 4 19 5.79086 19 8V8C19 10.2091 17.2091 12 15 12H8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M8 12H15C17.2091 12 19 13.7909 19 16V16C19 18.2091 17.2091 20 15 20H5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Dollar = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 5H8.5C6.567 5 5 6.567 5 8.5V8.5C5 10.433 6.567 12 8.5 12H15.5C17.433 12 19 13.567 19 15.5V15.5C19 17.433 17.433 19 15.5 19H5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Euro = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 10H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 15H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M13.8889 2V2C8.97969 2 5 5.97969 5 10.8889V13.1111C5 18.0203 8.97969 22 13.8889 22V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M13.8889 22V22C16.5657 22 19.0769 20.7043 20.6282 18.5229L21 18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M13.8889 2V2C16.5657 2 19.0769 3.29567 20.6282 5.47714L21 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Pound = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 14H5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M8 7V6.94559C8 4.21421 10.2142 2 12.9456 2V2C15.3031 2 17.3328 3.66399 17.7951 5.97568L18 7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 14L10 12V12C8.71942 10.7194 8 8.98258 8 7.17157V7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10 14V14C11.1148 15.6723 10.7015 17.9275 9.06604 19.0957L5.97143 21.3061C5.66857 21.5224 5.82161 22 6.19379 22H19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Ruble = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22V11M9 11V2.90909C9 2.40701 9.40701 2 9.90909 2H14.5C16.9853 2 19 4.01472 19 6.5V6.5C19 8.98528 16.9853 11 14.5 11H9Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M15 15H5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11.2 11H5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Session = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="13"
      r="9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <path
      d="M12 9V13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18.9082 2L22 4.51728"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5.0918 2L2 4.51728"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M15.0642 15.5713L12 13.0001"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Backspace = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 17V7C2 5.89543 2.89543 5 4 5H15.4164C16.0225 5 16.5958 5.2748 16.9754 5.74722L20.9933 10.7472C21.5813 11.4789 21.5813 12.5211 20.9933 13.2528L16.9754 18.2528C16.5958 18.7252 16.0225 19 15.4164 19H4C2.89543 19 2 18.1046 2 17Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M13 10L9 14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10L13 14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Checklist = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7H2.01"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 7H22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12H2.01"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 12H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17H2.01"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 17H12"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12L18 17L16 16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const DataVisualization = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V4M4 4H20M4 4H2M20 4H22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 20L15 18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M8 20L9 18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <ellipse
      cx="12"
      cy="9"
      rx="4"
      ry="2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <path
      d="M16 14C16 14.5523 14.2091 15 12 15C9.79086 15 8 14.5523 8 14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <path
      d="M8 9V14M16 14V9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const DragAndDrop = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5555 10.8888V8.44434C17.5555 7.33977 16.6601 6.44434 15.5555 6.44434H8.44439C7.33982 6.44434 6.44439 7.33977 6.44439 8.44434V15.5554C6.44439 16.66 7.33982 17.5554 8.44439 17.5554H10.8888"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M13 13L16.7033 21.8889L18.018 18.018L21.8889 16.7033L13 13Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 19L21 21"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.00005 2H3.99995C2.89538 2 1.99994 2.89543 1.99994 4V6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M6.00005 22H3.99995C2.89538 22 1.99994 21.1046 1.99994 20V18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 2H20.0001C21.1047 2 22.0001 2.89543 22.0001 4V6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Drag = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 4C16.5523 4 17 3.55228 17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M16 22C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
export const Exchange = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 18L9 20L11 22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M13 2L15 4L13 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 9V18C20 19.1046 19.1046 20 18 20H11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M4 15V6C4 4.89543 4.89543 4 6 4H14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <circle cx="20" cy="4" r="2" fill={props.color ?? "currentColor"} />
    <circle
      cx="4"
      cy="20"
      r="2"
      transform="rotate(-180 4 20)"
      fill={props.color ?? "currentColor"}
    />
  </svg>
);
export const Inventory = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 11V4C5 2.89543 5.89543 2 7 2H9C10.1046 2 11 2.89543 11 4V8V11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11 22H4C2.89543 22 2 21.1046 2 20V13C2 11.8954 2.89543 11 4 11H11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11 8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11 10V22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Newsletter = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 21V12C2 11.4477 2.44772 11 3 11H5C5.55228 11 6 11.4477 6 12V12.382C6 12.7607 6.214 13.107 6.55279 13.2764L11.5528 15.7764C11.8343 15.9172 12.1657 15.9172 12.4472 15.7764L17.4472 13.2764C17.786 13.107 18 12.7607 18 12.382V12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M6 12V3C6 2.44772 6.44772 2 7 2H17C17.5523 2 18 2.44772 18 3V12"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9 7H15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11 10H13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
// Hint/clue/help
export const Hint = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 16.8787V17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17V16.8787C10 16.3161 9.7765 15.7765 9.37868 15.3787L7.68371 13.6837C6.63914 12.6391 6.21922 11.1231 6.57751 9.68997C6.84802 8.6079 7.53731 7.67761 8.49374 7.10376L9.04204 6.77477C10.8627 5.68236 13.1373 5.68237 14.958 6.77477L15.5063 7.10376C16.4627 7.67761 17.152 8.6079 17.4225 9.68997C17.7808 11.1231 17.3609 12.6391 16.3163 13.6837L14.6213 15.3787C14.2235 15.7765 14 16.3161 14 16.8787Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 2V3"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M19.3214 5.11719L18.6786 5.88323"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M4.67859 5.11719L5.32138 5.88323"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11 22H13"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Event = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M22 7H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 10L13.236 12.633L16 13.0578L14 15.1062L14.472 18L12 16.633L9.528 18L10 15.1062L8 13.0578L10.764 12.633L12 10Z"
      fill={props.color ?? "currentColor"}
    />
  </svg>
);
export const OnlineStore = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C2.89543 2 2 2.89543 2 4V7.17157C2 8.73367 3.26633 10 4.82843 10C5.57857 10 6.29799 9.70201 6.82843 9.17157L7.29289 8.70711C7.68342 8.31658 8.31658 8.31658 8.70711 8.70711L8.82843 8.82843C9.57857 9.57857 10.596 10 11.6569 10H12.3431C13.404 10 14.4214 9.57857 15.1716 8.82843L15.2929 8.70711C15.6834 8.31658 16.3166 8.31658 16.7071 8.70711L17.1716 9.17157C17.702 9.70201 18.4214 10 19.1716 10C20.7337 10 22 8.73367 22 7.17157V4C22 2.89543 21.1046 2 20 2Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
    <path
      d="M4 10V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M12 18V21"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M7 22H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Logout1 = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 6V4C16 2.89543 15.1046 2 14 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H14C15.1046 22 16 21.1046 16 20V18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M19 9L22 12L19 15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10 12L21 12"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const OrderStatus = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 13V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V13M2 19V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9 7V2H15V7C15 7.55228 14.5523 8 14 8H10C9.44772 8 9 7.55228 9 7Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M22 16H20.5352C20.2008 16 19.8886 15.8329 19.7031 15.5547L18.8765 14.3148C18.4693 13.704 17.5647 13.7255 17.187 14.355L16.1186 16.1356C15.6791 16.8682 14.5826 16.7479 14.3125 15.9374L13.0859 12.2578C12.7696 11.3087 11.4098 11.3609 11.1671 12.3315L9.77888 17.8845C9.54088 18.8365 8.21696 18.9119 7.87241 17.9931L6.68548 14.8279C6.39927 14.0647 5.36923 13.9462 4.9171 14.6244L4.29687 15.5547C4.1114 15.8329 3.79917 16 3.46482 16H2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const CartAdded = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 21C10.5523 21 11 20.5523 11 20C11 19.4477 10.5523 19 10 19C9.44772 19 9 19.4477 9 20C9 20.5523 9.44772 21 10 21Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19C16.4477 19 16 19.4477 16 20C16 20.5523 16.4477 21 17 21Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.8 5L7.65405 14.5715C7.90678 15.4191 8.6862 16 9.57066 16H17.3405C18.171 16 18.915 15.4868 19.21 14.7104L21 10M4.8 5L4.53003 4.28956C4.23503 3.51324 3.49096 3 2.66047 3H2M4.8 5H16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 5C20 5.55228 20.4477 6 21 6C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4C20.4477 4 20 4.44772 20 5Z"
      fill="#1C2433"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
    />
  </svg>
);
export const Tracking = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H18C19.1046 2 20 2.89543 20 4V8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M15 6C15 7.06087 14.5786 8.07828 13.8284 8.82843C13.0783 9.57857 12.0609 10 11 10C9.93913 10 8.92172 9.57857 8.17157 8.82843C7.42143 8.07828 7 7.06087 7 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 16.0909C22 19.2727 18 22 18 22C18 22 14 19.2727 14 16.0909C14 15.0059 14.4214 13.9654 15.1716 13.1982C15.9217 12.431 16.9391 12 18 12C19.0609 12 20.0783 12.431 20.8284 13.1982C21.5786 13.9654 22 15.0059 22 16.0909Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17Z"
      fill="#1C2433"
    />
  </svg>
);
export const WriteReview = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 22L22 22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5858 4.58579L19.4142 3.41421C18.6332 2.63316 17.3668 2.63316 16.5858 3.41421L5.27234 14.7276C5.09242 14.9076 4.94849 15.1202 4.84826 15.354L2.98479 19.7021C2.6292 20.5319 3.46814 21.3708 4.29786 21.0152L8.64596 19.1517C8.87983 19.0515 9.09242 18.9076 9.27234 18.7276L20.5858 7.41421C21.3668 6.63317 21.3668 5.36684 20.5858 4.58579Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Ticket = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5H20C21.1046 5 22 5.89543 22 7V9.86928C22 9.94147 21.9415 10 21.8693 10H21.7778C20.6732 10 19.7778 10.8954 19.7778 12C19.7778 13.1046 20.6732 14 21.7778 14H21.8693C21.9415 14 22 14.0585 22 14.1307V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V14.1307C2 14.0585 2.05852 14 2.13072 14H2.22222C3.32679 14 4.22222 13.1046 4.22222 12C4.22222 10.8954 3.32679 10 2.22222 10H2.13072C2.05852 10 2 9.94148 2 9.86928V7C2 5.89543 2.89543 5 4 5Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9 5V19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Bank = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 9H4C2.89543 9 2 8.10457 2 7V6.48806C2 5.60484 2.57934 4.8262 3.4253 4.57241L11.4253 2.17241C11.8002 2.05995 12.1998 2.05995 12.5747 2.17241L20.5747 4.57241C21.4207 4.8262 22 5.60485 22 6.48806V7C22 8.10457 21.1046 9 20 9Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 22H4C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18H12H20C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5 9V18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 9V18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M19 9V18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Report = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 8L16 8L16 11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M4 10V4C4 2.89543 4.89543 2 6 2H16.1716C16.702 2 17.2107 2.21071 17.5858 2.58579L21.4142 6.41421C21.7893 6.78929 22 7.29799 22 7.82843V14V20C22 21.1046 21.1046 22 20 22H12H6C4.89543 22 4 21.1046 4 20V18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M2 15L3.38673 13.6133C3.73862 13.2614 4.29572 13.2218 4.69384 13.5204L7.30616 15.4796C7.70428 15.7782 8.26138 15.7386 8.61327 15.3867L15 9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Pin = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9734 9.7352L17.4938 8.18672C18.4631 7.59122 18.5642 6.22111 17.6927 5.48987L14.8517 3.10601C13.9803 2.37477 12.6485 2.71219 12.2304 3.77017L11.1431 6.52122"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M14.9734 9.73515L14.2886 13.5203C14.0607 14.7796 12.5575 15.3229 11.5772 14.5004L7.04005 10.6933C6.05972 9.87067 6.33378 8.29592 7.53436 7.85288L11.1431 6.52117"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M9.30859 12.5967L5.55895 17.0653"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Refund = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 10V14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M6 12V16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M11 2L9 4L11 6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 12V6C18 4.89543 17.1046 4 16 4H11"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M22 7.35303V17.9211C22 19.0843 20.702 19.7767 19.7359 19.1289V19.1289C18.0386 17.9907 15.8685 17.8267 14.0194 18.6968L11.0992 20.071C8.55615 21.2678 5.57159 21.0422 3.23725 19.4768L2.88609 19.2414C2.3323 18.87 2 18.247 2 17.5803V8.50459C2 7.03856 3.5251 6.07072 4.85159 6.69495L7 7.70597"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Member = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16V15C9 13.8954 9.89543 13 11 13H13C14.1046 13 15 13.8954 15 15V16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Barcode = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 7V4C22 2.89543 21.1046 2 20 2H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M2 7V4C2 2.89543 2.89543 2 4 2H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M22 17V20C22 21.1046 21.1046 22 20 22H17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M2 17V20C2 21.1046 2.89543 22 4 22H7"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M20 14H4C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
export const Variants = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 16V4C6 2.89543 6.89543 2 8 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H8C6.89543 18 6 17.1046 6 16Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M21 3L7 17"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 18V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V8C2 6.89543 2.89543 6 4 6H6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
// Bug / virus /parasite
export const Bug = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2L15 4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M8 2L9 4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5 11H2V9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M19 11H22V9"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M5 15V11C5 7.13401 8.13401 4 12 4C15.866 4 19 7.13401 19 11V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M19 19H18V17H19V19ZM21 18V17H22V18H21ZM22 20C22 20.5523 21.5523 21 21 21C20.4477 21 20 20.5523 20 20H22ZM19 17H21V19H19V17ZM22 18V20H20V18H22Z"
      fill={props.color ?? "currentColor"}
    />
    <path
      d="M5 19H6V17H5V19ZM3 18V17H2V18H3ZM2 20C2 20.5523 2.44772 21 3 21C3.55228 21 4 20.5523 4 20H2ZM5 17H3V19H5V17ZM2 18V20H4V18H2Z"
      fill={props.color ?? "currentColor"}
    />
  </svg>
);
export const Language = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 22L13.1664 9.23593C13.4688 8.48891 14.1941 8 15 8V8C15.8059 8 16.5312 8.48891 16.8336 9.23593L22 22"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10.3333 17.3335H19.6666"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M2 4L12 4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M10 5V5C10 8.63995 7.83077 11.9297 4.48513 13.3635L3 14"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M4.5 7L4.52913 7.10681C5.46506 10.5386 7.81843 13.4092 11 15V15"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M7 4V2"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Categories = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20V10C2 8.89543 2.89543 8 4 8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M4 8V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
    <path
      d="M7 5V4C7 2.89543 7.89543 2 9 2H15.6667C16.7712 2 17.6667 2.89543 17.6667 4V5"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeMiterlimit="16"
      strokeLinecap="round"
    />
  </svg>
);
export const Connect = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2C21.1046 2 22 2.89543 22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M18 6L16 8"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M6 18L8 16"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M20 18C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M16 16L18 18"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M4 18C5.10457 18 6 18.8954 6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const CardEdit = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.437 17.815C14.4751 17.6245 14.4941 17.5293 14.529 17.4404C14.5599 17.3616 14.6 17.2867 14.6485 17.2172C14.703 17.1389 14.7717 17.0702 14.9091 16.9329L19.395 12.4469C19.991 11.851 20.9571 11.851 21.5531 12.4469C22.149 13.0429 22.149 14.009 21.5531 14.605L17.0671 19.0909C16.9298 19.2283 16.8611 19.297 16.7828 19.3515C16.7133 19.4 16.6384 19.4401 16.5596 19.471C16.4707 19.5059 16.3755 19.5249 16.185 19.563L14 20L14.437 17.815Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 9H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V9ZM2 9V16C2 17.1046 2.89543 18 4 18H10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const Embed = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 8L2.91155 11.4343C2.43581 11.8339 2.43581 12.5661 2.91155 12.9657L7 16.4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M17 8L21.0884 11.4343C21.5642 11.8339 21.5642 12.5661 21.0884 12.9657L17 16.4"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M14 5L10 19"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
  </svg>
);
export const CardLock = (props: IconI) => (
  <svg
    onClick={(e) => props.onClick && props.onClick(e)}
    className={getClassNames({
      "inte-svgIcon": true,
      [props.customClass as string]: props.customClass,
    })}
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 9H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V9ZM2 9V16C2 17.1046 2.89543 18 4 18H10"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
    />
    <path
      d="M21.1111 15.6001H14.8889C14.398 15.6001 14 15.9583 14 16.4001V19.2001C14 19.6419 14.398 20.0001 14.8889 20.0001H21.1111C21.602 20.0001 22 19.6419 22 19.2001V16.4001C22 15.9583 21.602 15.6001 21.1111 15.6001Z"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.7778 15.6V14C15.7778 13.4696 16.0119 12.9609 16.4286 12.5858C16.8454 12.2107 17.4106 12 18 12C18.5894 12 19.1546 12.2107 19.5713 12.5858C19.9881 12.9609 20.2222 13.4696 20.2222 14V15.6"
      stroke={props.color ?? "currentColor"}
      strokeWidth={props.strokeWidth ?? "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
