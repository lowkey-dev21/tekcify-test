import { useThemeColors } from "@/hooks/useThemeColors";
import { ChevronRight } from "lucide-react";
import { products } from "@/constants/products";
import type { Product } from "@/types/app";

const Explore: React.FC = () => {
  const { colors } = useThemeColors();

  return (
    <section className={`py-24 ${colors.background}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles-icon lucide-sparkles"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            Our Solutions
          </span>
        </div>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
          Discover Our Products
        </h2>
        {/* Subheading */}
        <p className={`text-center text-lg mb-14 ${colors.textSecondary}`}>
          Explore our suite of AI-powered tools designed to transform your
          digital experience
        </p>
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((prod: Product, idx: number) => (
            <a
              key={prod.name}
              href={prod.href}
              className="group relative overflow-hidden rounded-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-colors"></div>
              {/* Product Image */}
              <img
                alt={prod.name}
                src={prod.image}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {prod.name}
                </h3>
                <p className="text-gray-200 text-sm">{prod.desc}</p>
              </div>
              {/* Chevron Button */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm absolute top-6 right-6 bg-white/10 transition-colors ${prod.chevronBg}`}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
