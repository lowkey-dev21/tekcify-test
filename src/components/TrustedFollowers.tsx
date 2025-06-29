import React from "react";
import { testimonials } from "@/constants/testimonials";
import { useThemeColors } from "@/hooks/useThemeColors";
import TestimonialCard from "@/components/ui/testimonial-card";
import type { Testimonial } from "@/types/app";

const TrustedFollowers: React.FC = () => {
  const { colors } = useThemeColors();
  return (
    <section className={`${colors.bgSecondary} py-16`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-bold text-4xl mb-3">
          Trusted by Users Worldwide
        </h2>
        <p className="text-center text-gray-500 text-lg mb-12">
          Join our growing community of professionals, students, and innovators
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, i: number) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedFollowers;
