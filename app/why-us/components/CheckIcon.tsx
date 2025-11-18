"use client";

export const CheckIcon = () => {
  return (
    <svg
      className="check-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="48"
      height="48"
    >
      {/* Outer circle */}
      <circle
        cx="128"
        cy="128"
        r="88"
        stroke="currentColor"
        strokeWidth="12"
        fill="none"
      />

      {/* Minute hand */}
      <line
        x1="128"
        y1="128"
        x2="128"
        y2="70"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        className="minute-hand"
      />

      {/* Second hand */}
      <line
        x1="128"
        y1="128"
        x2="170"
        y2="128"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="second-hand"
      />

      {/* Top horizontal line */}
      <line
        x1="104"
        y1="16"
        x2="152"
        y2="16"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        className="top-line"
      />
    </svg>
  );
};
