"use client";
import { useState } from "react";

import { faqs } from "@/constants/faqs";
import { useThemeColors } from "@/hooks/useThemeColors";
import Link from "next/link";
import type { FAQ } from "@/types/app";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { colors } = useThemeColors();

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 px-4 ${colors.bgSecondary}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about Tekcify and our products
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq: FAQ, idx: number) => (
            <div
              key={idx}
              className={` ${colors.background} rounded-2xl overflow-hidden`}
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-medium text-lg">{faq.q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === idx
                    ? "max-h-40 opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            className={`inline-flex items-center justify-center px-8 py-4 ${colors.bgSwitch} ${colors.textSwitch} rounded-full transition-all hover:scale-105`}
            href="/404"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
