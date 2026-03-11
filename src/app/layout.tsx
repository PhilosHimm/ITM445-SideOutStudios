import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Side-Out Studios — Volleyball Coverage",
    template: "%s | Side-Out Studios",
  },
  description:
    "Unfiltered volleyball. Real games, real stories, real obsession. Intramural match recaps, rally breakdowns, and gear reviews.",
  keywords: [
    "volleyball",
    "intramural",
    "match recap",
    "Side-Out Studios",
    "rally breakdown",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
