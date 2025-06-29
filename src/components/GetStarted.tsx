import { useState } from "react";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Button } from "@/components/ui/button";
import type { WorldStat } from "@/types/app";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: (
      // User Plus Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary-600"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <line x1="19" x2="19" y1="8" y2="14"></line>
        <line x1="22" x2="16" y1="11" y2="11"></line>
      </svg>
    ),
    title: "Create Your Account",
    desc: "One simple registration gives you access to all Tekcify products.",
  },
  {
    number: "02",
    icon: (
      // Sparkles Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary-600"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </svg>
    ),
    title: "Explore Our AI-Powered Tools",
    desc: "Use Binx for instant WhatsApp conversations, PDFX for smart document management, and Campux for AI-enhanced student networking.",
  },
  {
    number: "03",
    icon: (
      // Zap Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary-600"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
      </svg>
    ),
    title: "Transform Your Digital Experience",
    desc: "Work smarter, not harder with AI-driven automation.",
  },
];

const GetStarted: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const { colors } = useThemeColors();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  const stats: WorldStat[] = [
    {
      value: "12",
      label: "Active Users",
      desc: "Across all platforms",
      suffix: "K+",
    },
    {
      value: "98",
      label: "Satisfaction Rate",
      desc: "User happiness score",
      suffix: "%",
    },
    {
      value: "15",
      label: "Community Members",
      desc: "Engaged Community",
    },
    {
      value: "120",
      label: "Countries Reached",
      desc: "Global presence",
      suffix: "+",
    },
  ];

  return (
    <section
      className={` ${colors.bgLightPurple} py-20 px-4  transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Get Started in 3 Steps
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
            With Tekcify, you don't need{" "}
            <span className="font-medium">
              multiple logins or complex setups
            </span>
            . We make{" "}
            <span className="font-medium">digital interactions effortless</span>{" "}
            with our <span className="font-medium">unified platform</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step: Step, idx: number) => (
            <div
              key={step.number}
              className={` ${colors.card.bgSwitch} ${colors.card.text} relative p-8 rounded-2xl backdrop-blur-sm hover:shadow-sm transition-all duration-300 border `}
            >
              <div className="absolute -top-4 right-8 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-400 select-none dark:from-purple-200 dark:to-[#7c3bee]">
                {step.number}
              </div>
              <div
                className={` ${colors.card.icon} w-12 h-12 rounded-full  dark:bg-purple-500/20 flex items-center justify-center mb-8`}
              >
                {step.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
                {step.title}
              </h3>
              <p className={` ${colors.card.textSwitch}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
