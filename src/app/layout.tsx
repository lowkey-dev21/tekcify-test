import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScreenWrapper from "@/components/ui/screen-wrapper";
import Header from "@/components/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SmoothFollower from "@/components/ui/smooth-pointer";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tekcify - AI-Powered Digital Solutions",
  description:
    "Tekcify simplifies digital experiences through Al-powered solutions. Discover our suite of products including Binx Al, Pdfx.chat, and Campux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-white dark:bg-black transition-colors duration-300`}
      >
        <ThemeProvider>
          <SmoothFollower />
          <ScreenWrapper>
            <Header />
            {children}
            <Footer />
          </ScreenWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
