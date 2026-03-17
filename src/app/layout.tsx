import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
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
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
