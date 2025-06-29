import { useThemeColors } from "@/hooks/useThemeColors";
import CountUp from "./TextAnimations/CountUp/CountUp";
import { stats } from "@/constants/worldStats";
import type { WorldStat } from "@/types/app";

const WorldView: React.FC = () => {
  const { colors } = useThemeColors();

  return (
    <section
      className={` ${colors.bgLightPurple} py-24 px-4 bg-[#fcfcff] dark:from-gray-900/60 dark:to-black transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h2
              className={`${colors.textGradient} text-5xl md:text-6xl tracking-tighter font-bold mb-6`}
            >
              Global Impact &amp; Growth
            </h2>
            <p className={`text-xl ${colors.textSecondary} mb-8`}>
              Tekcify&apos;s AI solutions are transforming digital experiences
              worldwide. Our products are trusted by students, professionals,
              and businesses across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className={`group px-8 py-4 border ${colors.button} rounded-full transition-all hover:scale-105 hover:border-black/80 hover:bg-black/80 dark:hover:border-white/80 dark:hover:bg-white/80 flex items-center justify-center`}
                href="https://chat.whatsapp.com/L7GjPQlTNt72nlNHFQfU5x"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join WhatsApp Community
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat: WorldStat) => (
              <div
                key={stat.label}
                className={`p-8 ${colors.background} rounded-2xl hover:shadow-sm transition-all duration-300 border ${colors.border}`}
              >
                <div>
                  <CountUp
                    from={0}
                    to={Number(stat.value.replace(/[^0-9]/g, ""))}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-5xl !text-[#7c3bee] font-extrabold leading-tight mb-1"
                  />
                  {stat.suffix && (
                    <span className=" text-5xl !text-[#7c3bee] font-extrabold leading-tight mb-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-sm font-medium text-gray-500 mb-2">
                  {stat.label}
                </div>
                <div className={`text-base ${colors.textSecondary}`}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorldView;
