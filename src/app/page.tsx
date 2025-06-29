"use client";

import { useThemeColors } from "@/hooks/useThemeColors";
// import Lanyard from "@/components/Lanyard/Lanyard";
import Hero from "@/components/HeroSection";
import TrustedFollowers from "@/components/TrustedFollowers";
import Explore from "@/components/Explore";
import WhyUs from "@/components/whyUs";
import WorldView from "@/components/WorldView";
import GetStarted from "@/components/GetStarted";
import Stories from "@/components/Stories";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { colors } = useThemeColors();

  return (
    <div
      className={`min-h-screen w-full ${colors.background} transition-colors duration-300`}
    >
      <div className=" pt-[3rem] md:pt-[5rem] w-full flex items-center justify-center relative ">
        <Hero />
      </div>
      <TrustedFollowers />
      <Explore />
      <WhyUs />
      <WorldView />
      <GetStarted />
      <Stories />
      <FAQ />
    </div>
  );
}
