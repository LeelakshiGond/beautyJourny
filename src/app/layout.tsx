import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import BeautyFooter from "@/components/BeautyFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Futuristic Beauty Parlour",
  description:
    "A modern, animated beauty parlour experience with 2D/3D effects.",
  keywords: [
    "Beauty Parlour",
    "Futuristic",
    "3D Animation",
    "Framer Motion",
    "Three.js",
    "Tailwind CSS",
    "Next.js",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} bg-white transition-colors duration-500 min-h-screen`}
      >
        <AnimatedNavbar />
        {/* TODO: <BackgroundEffects /> */}
        {children}
        <BeautyFooter />
      </body>
    </html>
  );
}
