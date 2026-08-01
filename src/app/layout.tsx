import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatima Khatun | Full-Stack Developer",
  description:
    "Frontend Developer specializing in scalable ecosystems, performance optimization, and pixel-perfect UI execution.",
  keywords: [
    "Fatima Khatun",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Rajshahi Bangladesh",
  ],
  authors: [{ name: "Fatima Khatun" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${epilogue.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}