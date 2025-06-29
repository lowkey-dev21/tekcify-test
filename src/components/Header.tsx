"use client";

import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Button } from "@/components/ui/button";
import { useThemeColors } from "@/hooks/useThemeColors";
import { navLinks } from "@/constants";
import Logo from "@/components/ui/logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavlinksI } from "@/constants";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { colors } = useThemeColors();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full  z-[1000] max-w-[1600px] px-8 sm:px-8 lg:px-[10rem] flex justify-between items-center py-4 lg:py-6 ${colors.background} ${colors.border} transition-colors duration-300`}
    >
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:flex-1 justify-center">
        <ul className="flex items-center gap-6">
          {navLinks.map((link: NavlinksI) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`${colors.text} hover:opacity-70 transition-colors duration-200`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2 justify-between ">
        {/* Desktop Actions */}
        <div className=" flex items-center gap-4">
          <Button
            className=" hidden md:flex bg-[#7c3bee] text-white"
            rounded="full"
            size="md"
          >
            Get Started
          </Button>

          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`absolute justify-center top-full left-0 w-full ${colors.background} flex flex-col items-center gap-y-6 py-6 md:hidden`}
          >
            <ul className="flex flex-col items-center gap-y-6 w-full">
              {navLinks.map((link: NavlinksI) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${colors.text} text-lg hover:opacity-70 transition-colors duration-200`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="bg-[#7c3bee] mx-auto flex items-center justify-center text-white w-4/5"
              rounded="full"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
