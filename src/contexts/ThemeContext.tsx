"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Load theme from localStorage immediately on initialization
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
        return savedTheme;
      }
    }
    return "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Save theme to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;

    // Determine the resolved theme based on current theme setting
    const getResolvedTheme = (): "light" | "dark" => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return theme;
    };

    const updateResolvedTheme = () => {
      setResolvedTheme(getResolvedTheme());
    };

    // Set initial resolved theme
    updateResolvedTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateResolvedTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateResolvedTheme);
    };
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme to document
    const root = document.documentElement;
    const body = document.body;

    // Remove existing theme classes
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");

    // Add new theme class
    root.classList.add(resolvedTheme);
    body.classList.add(resolvedTheme);

    // Set background color directly for immediate effect
    if (resolvedTheme === "dark") {
      root.style.backgroundColor = "#000000";
      root.style.color = "#ededed";
      body.style.backgroundColor = "#000000";
      body.style.color = "#ededed";
    } else {
      root.style.backgroundColor = "#ffffff";
      root.style.color = "#171717";
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#171717";
    }
  }, [resolvedTheme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
