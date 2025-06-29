import { useThemeColors } from "@/hooks/useThemeColors";
import Image from "next/image";

const logos = [
  { alt: "Google", src: "/google.png" },
  { alt: "Meta", src: "/meta.png" },
  { alt: "WhatsApp", src: "/whatsapp.png" },
  { alt: "Microsoft", src: "/microsoft.png" },
  { alt: "AWS", src: "/aws.png" },
  { alt: "Microsoft Azure", src: "/ms-azure.png" },
  { alt: "Cardri", src: "/cardri.png" },
];

const BrandLogos: React.FC = () => {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];
  const { colors } = useThemeColors();

  return (
    <div
      className={` ${colors.border} border  md:p-6 p-5  ${colors.bgSecondary} rounded-2xl infinite-scroll-wrapper mt-8`}
    >
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {allLogos.map((logo, idx) => (
          <div
            key={logo.alt + idx}
            className="flex items-center justify-center min-w-[160px] sm:min-w-[200px] md:min-w-[240px] px-4 sm:px-6 md:px-8"
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={120}
              height={32}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
