import React from "react";
import { useThemeColors } from "@/hooks/useThemeColors";
import type { Testimonial } from "@/types/app";

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  username,
  avatar,
  text,
  icons,
}) => {
  const { colors, isDark } = useThemeColors();
  return (
    <div
      style={{ boxShadow: "0 2px 8px 0 rgba(16,30,54,0.06)" }}
      className={`${colors.card.text} rounded-2xl ${colors.border} p-7 flex flex-col gap-4 min-h-[220px] transform transition-transform duration-150 hover:scale-105`}
    >
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <div className={` ${colors.card.title}`}>{name}</div>
          <div className="text-gray-500 text-sm">{username}</div>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2 text-gray-400">
          {icons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt="icon"
              className={` ${isDark ? "invert" : ""} w-5 h-5`}
            />
          ))}
        </div>
      </div>
      <div className="text-base leading-relaxed">{text}</div>
    </div>
  );
};

export default TestimonialCard;
