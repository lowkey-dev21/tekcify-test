import { useTheme } from "@/contexts/ThemeContext";

interface ThemeColors {
  background: string;
  bgSwitch: string;
  bgLightPurple: string;
  bgSecondary: string;
  text: string;
  textSwitch: string;
  textGradient: string;
  textMixedGradient: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  card: {
    text: string;
    title: string;
    bgSwitch: string;
    textSwitch: string;
    icon: string;
  };
  hover: string;
  button: string;
  buttonHover: string;
  buttonDisabled: string;
}

interface UseThemeColorsReturn {
  colors: ThemeColors;
  isDark: boolean;
  isLight: boolean;
  mounted: boolean;
}

export function useThemeColors(): UseThemeColorsReturn {
  const { resolvedTheme, mounted } = useTheme();

  const colors: ThemeColors = {
    background: resolvedTheme === "dark" ? "bg-black" : "bg-white",
    bgSwitch: resolvedTheme === "dark" ? "bg-white" : "bg-black",
    bgLightPurple: resolvedTheme === "dark" ? "bg-black" : "bg-purple-50/30",
    bgSecondary: resolvedTheme === "dark" ? "bg-purple-500/10" : "bg-[#f9fafb]",
    text: resolvedTheme === "dark" ? "text-white" : "text-black",
    textSwitch: resolvedTheme === "dark" ? "text-black" : "text-white",
    textGradient:
      resolvedTheme === "dark"
        ? "bg-gradient-to-r from-white to-[#7c3bee]  bg-clip-text text-transparent"
        : "bg-gradient-to-r from-gray-900 to-[#7c3bee]  bg-clip-text text-transparent",
    textMixedGradient:
      resolvedTheme === "dark"
        ? "bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
        : "bg-gradient-to-r from-gray-900 to-[#7c3bee]  bg-clip-text text-transparent",
    textPrimary:
      resolvedTheme === "dark" ? "text-purple-500" : "text-purple-500",
    textSecondary: resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600",

    border: resolvedTheme === "dark" ? "border-gray-700" : "border-gray-200",
    card: {
      text:
        resolvedTheme === "dark"
          ? "bg-purple-500/10 text-gray-400 "
          : "bg-white text-gray-700 ",
      title:
        resolvedTheme === "dark"
          ? "text-gray-200 font-semibold"
          : "text-gray-800 font-semibold",

      bgSwitch:
        resolvedTheme === "dark"
          ? "bg-gray-900/70 border-gray-800"
          : "bg-white border-gray-100",

      textSwitch:
        resolvedTheme === "dark" ? "text-gray-400 " : "bg-white text-gray-700 ",

      icon: resolvedTheme === "dark" ? "text-gray-400 " : "text-[#7c3bee]  ",
    },

    hover: resolvedTheme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100",
    button:
      resolvedTheme === "dark" ? "bg-white text-black" : "bg-black text-white",
    buttonHover:
      resolvedTheme === "dark" ? "hover:bg-blue-700" : "hover:bg-blue-600",
    buttonDisabled:
      resolvedTheme === "dark"
        ? "bg-blue-900 text-gray-400 cursor-not-allowed"
        : "bg-blue-200 text-gray-400 cursor-not-allowed",
  };

  return {
    colors,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    mounted,
  };
}
