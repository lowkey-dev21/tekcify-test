"use client";

import { ReactNode } from "react";
import { useThemeColors } from "@/hooks/useThemeColors";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  size = "md",
  rounded = "md",
  className,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  // base, size, and rounded classes always included

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const classes = [
    "transform transition-transform duration-150 hover:scale-105",
    sizeClasses[size],
    roundedClasses[rounded],
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
