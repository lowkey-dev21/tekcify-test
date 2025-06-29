import React from "react";
import { useThemeColors } from "@/hooks/useThemeColors";
import type { Testimonial } from "@/types/app";
import Image from "next/image";

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
        <div className="relative w-12 h-12 rounded-full border-2 border-gray-200">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover rounded-full"
            sizes="48px"
          />
        </div>
        <div>
          <div className={` ${colors.card.title}`}>{name}</div>
          <div className="text-gray-500 text-sm">{username}</div>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2 text-gray-400">
          {icons.map((icon, idx) => (
            <div key={idx} className="relative w-5 h-5">
              <Image
                src={icon}
                alt="icon"
                fill
                className={`object-contain ${isDark ? "invert" : ""}`}
                sizes="20px"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-base leading-relaxed">{text}</div>
    </div>
  );
};

export default TestimonialCard;
