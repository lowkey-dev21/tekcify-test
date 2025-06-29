"use client";

import Image from "next/image";
import { useThemeColors } from "@/hooks/useThemeColors";

const Logo: React.FC = () => {
  const { isDark } = useThemeColors();

  return (
    <div className="flex items-center gap-2">
      <Image
        className={isDark ? "invert" : ""}
        src="/assets/logo.svg"
        alt="Teckify logo"
        width={100}
        height={20}
        priority
      />
    </div>
  );
};

export default Logo;
