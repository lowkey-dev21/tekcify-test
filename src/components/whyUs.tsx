import { ChevronRight } from "lucide-react";
import { features, images, communityAvatars } from "@/constants/whyus";
import { useThemeColors } from "@/hooks/useThemeColors";
import Image from "next/image";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ImageItem {
  src: string;
  label: string;
}

const WhyUs: React.FC = () => {
  const { colors } = useThemeColors();

  const typedFeatures: Feature[] = features;
  const typedImages: ImageItem[] = images;
  const typedAvatars: string[] = communityAvatars;

  return (
    <section
      className={` ${colors.bgSecondary} px-6 py-12 sm:py-16 md:py-24 bg-black w-full text-white`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2  backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#7c3bee] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#7c3bee] font-medium text-primary-400">
                Why Choose Tekcify?
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Experience the future of{" "}
              <span className="text-[#7c3bee]">intelligent technology</span>
            </h2>
            {/* Features */}
            <div className="space-y-6 mb-12">
              {typedFeatures.map((f, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-gradient-to-r from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{f.title}</h3>
                      <p className="text-base text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Description */}
            <p className="text-lg text-gray-400 mb-8">
              At Tekcify, we don't just build products; we{" "}
              <span className="font-semibold text-white">redefine</span> how
              people experience digital solutions.
            </p>
            {/* Button */}
            <div className="flex items-center gap-4">
              <a
                className="group px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 text-base"
                href="/404"
              >
                Get Started
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative mt-12  lg:mt-0">
            <div className="grid sm:grid-cols-2 gap-4">
              {typedImages.map((img, idx) => (
                <div
                  key={img.src}
                  className="group aspect-square rounded-2xl overflow-hidden relative"
                >
                  <Image
                    alt={img.label}
                    src={img.src}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{img.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Community Card */}
            <div className="absolute -bottom-6 -left-6 right-6">
              <div className="bg-[#111] backdrop-blur-xl rounded-2xl p-6 border border-[#222]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c3bee] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">
                        <span className="hidden  sm:inline">Join Our</span>{" "}
                        Growing Community
                      </span>
                      <div className="flex -space-x-1 overflow-hidden">
                        {typedAvatars.map((src, i) => (
                          <div
                            key={i}
                            className="relative inline-block h-6 w-6 rounded-full ring-2 ring-[#111]"
                          >
                            <Image
                              alt="User"
                              src={src}
                              fill
                              className="object-cover rounded-full"
                              sizes="24px"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    className="text-primary-400 text-sm hover:text-primary-300 transition-colors flex items-center gap-1 group"
                    href="https://chat.whatsapp.com/Ki9cOZQ1MtXEmO3ATrJp7h"
                  >
                    Join Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
