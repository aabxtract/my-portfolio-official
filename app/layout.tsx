import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "block",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "block",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "block",
});

export const metadata: Metadata = {
  title: "AABXTRACT — Anuoluwapo Afolami",
  description: "Portfolio website for Anuoluwapo Afolami, builder, designer, and open source contributor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
