"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      <Navbar activePage="" />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center gap-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
          <Construction size={32} className="text-primary" />
        </div>

        <div className="flex flex-col gap-3 max-w-md">
          <span className="font-medium text-primary text-[10px] tracking-[3px]">
            WORK IN PROGRESS
          </span>
          <h1 className="font-light text-[36px] text-dark tracking-[-1px]">
            Coming Soon
          </h1>
          <p className="text-dark/60 text-[14px] leading-relaxed">
            This feature is still being built. Check back soon — we&apos;re working on it.
          </p>
        </div>

        <Link
          href="/"
          className="flex gap-2 items-center text-[13px] font-medium text-primary hover:text-primary-hover transition-colors duration-200 mt-2"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
