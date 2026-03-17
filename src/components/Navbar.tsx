"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  activePage: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Matches", href: "/matches" },
    { label: "Stories", href: "/stories" },
    { label: "Gear", href: "/gear" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      role="banner"
      className="bg-[#16161d] w-full sticky top-0 z-50 border-b border-white/5"
    >
      <div className="flex h-[56px] items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[10px] group"
          aria-label="Side-Out Studios — Home"
        >
          <Image 
            src="/images/logo.png" 
            alt="Side-Out Studios Logo" 
            width={40} 
            height={40} 
            className="transition-transform duration-200 group-hover:scale-110 object-contain"
          />
          <span className="font-bold text-[17px] text-white tracking-[-0.3px]">
            Side-Out Studios
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-1 items-center list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = activePage === link.label;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex h-[32px] items-center justify-center px-[14px] rounded-[4px] text-[13px] transition-colors duration-200 ${
                      isActive
                        ? "bg-white/10 font-medium text-white"
                        : "text-[#999] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 rounded-[4px] hover:bg-white/5 transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-[18px] h-[1.5px] bg-white transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[1.5px] bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[1.5px] bg-white transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/5 bg-[#16161d] px-4 pb-3"
        >
          <ul className="flex flex-col list-none m-0 p-0 pt-2 gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.label;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex h-[38px] items-center px-[14px] rounded-[4px] text-[13px] transition-colors duration-200 ${
                      isActive
                        ? "bg-white/10 font-medium text-white"
                        : "text-[#999] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
