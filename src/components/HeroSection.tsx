import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useThemeColors } from "@/hooks/useThemeColors"; // <-- import the hook
import BrandLogos from "@/components/ui/brand-logos";

import { IoIosArrowForward } from "react-icons/io";
// Dynamically import BackgroundStrokes with SSR disabled
const BackgroundStrokes = dynamic(
  () => import("@/components/ui/background-strokes"),
  { ssr: false }
);

const Hero: React.FC = () => {
  const { colors } = useThemeColors(); // <-- use the hook

  return (
    <section className="w-full px-5 z-0 flex flex-col items-center justify-center pt-12 pb-20  relative overflow-hidden">
      {/* Falling stars background */}
      <BackgroundStrokes
        color="#a78bfa"
        opacity={0.5}
        starCount={30}
        height={400}
        width={1200}
        className="top-0 left-0"
      />

      {/* Announcement badge */}
      <div
        className={`mb-6 border-[0.1px]  ${colors.border} bg-purple-500/5  rounded-full  p-2 pr-4`}
      >
        <span className="inline-block px-4 py-1 rounded-full bg-[#7c3bee] text-white font-semibold text-sm">
          New
        </span>
        <span className="ml-2 text-gray-500 text-sm">
          Binx AI is now live on WhatsApp
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl !font-extrabold text-center  mb-6">
        Elevate Your Digital <br className="hidden sm:block" />
        Experience with <span className="text-[#8b5cf6]">AI</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg lg:w-[40%] sm:text-xl text-center !text-[#727a85]  max-w-2xl mb-8">
        Experience the power of AI-driven solutions that streamline your
        workflow, enhance communication, and revolutionize document management.
        Join the future of intelligent technology.
      </p>

      {/* Buttons */}
      <div className="flex w-full md:w-[50%] mx-auto justify-center flex-col sm:flex-row gap-4 mb-16">
        <Button
          size="xl"
          rounded="full"
          className={`${colors.button} ${colors.border} justify-center  flex items-center gap-2`}
        >
          Explore Tekcify
          <IoIosArrowForward className="w-5 h-5" />
        </Button>
        <Button size="xl" rounded="full" className={`border ${colors.border}`}>
          Learn More
        </Button>
      </div>

      {/* Secondary Heading */}
      <div className=" md:mt-10  text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
          Empowering Innovation Together
        </h2>
        <small className="!text-[#727a85] text-center ">
          Collaborating with industry leaders to shape the future of AI
        </small>
      </div>

      {/* Brand Logos - Infinite Scroll */}
      <div className=" md:w-[80%] w-[90%] mx-auto">
        <BrandLogos />
      </div>
    </section>
  );
};

export default Hero;
