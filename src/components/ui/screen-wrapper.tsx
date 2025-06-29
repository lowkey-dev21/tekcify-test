"use client";

import React from "react";
import { useThemeColors } from "@/hooks/useThemeColors";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  const { colors } = useThemeColors();

  return (
    <div
      className={`w-full ${colors.background} transition-colors duration-300`}
    >
      <div className="w-full max-w-[1600px] mx-auto">{children}</div>
    </div>
  );
};

export default ScreenWrapper;
