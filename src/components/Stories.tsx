import Image from "next/image";
import { useState } from "react";
import { stories } from "@/constants/stories";
import { useThemeColors } from "@/hooks/useThemeColors";
import type { Story } from "@/types/app";

const Stories: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const prevStory = (): void => {
    setCurrent(prev => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextStory = (): void => {
    setCurrent(prev => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const story: Story = stories[current];

  const { colors } = useThemeColors();

  return (
    <section className={` ${colors.bgSecondary}  py-24`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className=" bg-purple-500/5 text-purple-600 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm mb-8">
            <span>Success Stories</span>
          </div>
          <h2
            className={` ${colors.textMixedGradient} text-4xl md:text-5xl font-bold mb-6 leading-tight  to-primary-600`}
          >
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how Tekcify is transforming businesses worldwide
          </p>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-2 rounded-full ${colors.background} shadow-lg hover:shadow-xl transition-all`}
            onClick={prevStory}
            aria-label="Previous story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-600"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-2 rounded-full ${colors.background} shadow-lg hover:shadow-xl transition-all`}
            onClick={nextStory}
            aria-label="Next story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-600"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
          <div
            className={` ${colors.background} rounded-3xl shadow-sm overflow-hidden`}
          >
            <div className=" grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              {/* Image */}
              <div className="space-y-8 rounded-3xl bg-purple-500/5 ">
                <div className="relative hidden  h-70 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 md:flex items-center justify-center">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
              {/* Story Content */}
              <div className="space-y-8 h-[500px] lg:h-[400px] ">
                <div>
                  <blockquote
                    className={`text-2xl font-medium ${colors.card.title} italic`}
                  >
                    "{story.quote}"{" "}
                    <span className="text-sm font-semibold mb-2">
                      ~ {story.author}
                    </span>
                  </blockquote>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {story.description}
                </p>
                <div>
                  <h4
                    className={`text-lg font-semibold ${colors.card.title} mb-4`}
                  >
                    Most Loved Features
                  </h4>
                  <ul className="space-y-1 h-[100px] ">
                    {story.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-10 h-10 text-purple-600 mt-1 flex-shrink-0"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-3">
            {stories.map((_: Story, idx: number) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === current
                    ? "bg-purple-500 w-8"
                    : "bg-gray-300  hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
