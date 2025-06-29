import React from "react";

interface BackgroundStrokesProps {
  color?: string;
  opacity?: number;
  starCount?: number;
  height?: number;
  width?: number;
  className?: string;
}

const getRandom = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const BackgroundStrokes: React.FC<BackgroundStrokesProps> = ({
  color = "#a78bfa",
  opacity = 0.5,
  starCount = 12,
  height = 400,
  width = 800,
  className = "",
}) => {
  // Generate animated stars with random positions and delays
  const stars = Array.from({ length: starCount }).map((_, i) => {
    const cx = getRandom(0, width);
    const r = getRandom(1, 2.5);
    const duration = getRandom(2, 5); // seconds
    const delay = getRandom(0, 5); // seconds

    return (
      <circle
        key={i}
        cx={cx}
        cy={-10}
        r={r}
        fill={color}
        opacity={opacity}
        style={{
          animation: `fall ${duration}s linear ${delay}s infinite`,
        }}
      />
    );
  });

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient
          id="linearGradient-0"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <style>
        {`
          @keyframes fall {
            to {
              transform: translateY(${height + 20}px);
              opacity: 0;
            }
          }
        `}
      </style>
      {/* Your stroke path */}
      <path
        d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
        stroke="url(#linearGradient-0)"
        strokeOpacity="0.4"
        strokeWidth="0.5"
        fill="none"
      />
      {stars}
    </svg>
  );
};

export default BackgroundStrokes;
