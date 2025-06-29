"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeColors } from "@/hooks/useThemeColors";

const themeOrder = ["light", "dark", "system"] as const;
type ThemeType = (typeof themeOrder)[number];

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();
  const { colors } = useThemeColors();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`flex items-center gap-1 p-1 rounded-lg ${colors.card}`}>
        <button
          className={`p-1 px-2 rounded-md inline-flex items-center justify-center transition-colors ${colors.textSecondary}`}
        >
          <Sun size={18} />
        </button>
      </div>
    );
  }

  // Helper to get next theme
  const getNextTheme = (current: ThemeType): ThemeType => {
    const idx = themeOrder.indexOf(current as ThemeType);
    return themeOrder[(idx + 1) % themeOrder.length];
  };

  // Icon for current theme
  const getThemeIcon = (t: ThemeType): React.ReactNode => {
    if (t === "light") return <Sun size={20} />;
    if (t === "dark") return <Moon size={20} />;
    return <Monitor size={20} />;
  };

  // Get the visual theme for active state (system resolves to light/dark)
  const getVisualTheme = (): "light" | "dark" => {
    if (theme === "system") {
      return resolvedTheme;
    }
    return theme as "light" | "dark";
  };

  const visualTheme = getVisualTheme();

  return (
    <>
      {/* Mobile: show only one icon, tap to cycle */}
      <button
        className={`md:hidden p-2 px-2 rounded-md inline-flex items-center justify-center transition-colors ${colors.card} ${colors.border}`}
        aria-label="Change theme"
        onClick={() => setTheme(getNextTheme(theme as ThemeType))}
      >
        {getThemeIcon(theme as ThemeType)}
      </button>

      {/* Desktop: show all options */}
      <div
        className={`hidden md:flex items-center gap-1 p-1 rounded-lg transition-colors duration-300 ${colors.card} border ${colors.border}`}
      >
        <button
          onClick={() => setTheme("light")}
          className={`p-1 px-2 rounded-md inline-flex items-center justify-center transition-colors ${
            visualTheme === "light"
              ? `${colors.background} ${colors.text} shadow-sm`
              : `${colors.textSecondary} ${colors.hover}`
          }`}
          aria-label="Light mode"
        >
          <Sun size={18} />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`p-1 px-2 rounded-md inline-flex items-center justify-center transition-colors ${
            visualTheme === "dark"
              ? `${colors.background} ${colors.text} shadow-sm`
              : `${colors.textSecondary} ${colors.hover}`
          }`}
          aria-label="Dark mode"
        >
          <Moon size={18} />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`p-1 px-2 rounded-md inline-flex items-center justify-center transition-colors ${
            theme === "system"
              ? `${colors.background} ${colors.text} shadow-sm `
              : `${colors.textSecondary} ${colors.hover}`
          }`}
          aria-label="System mode"
        >
          <Monitor size={18} />
        </button>
      </div>
    </>
  );
}
