import Link from "next/link";
import { Search, Play } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Matches", href: "/matches" },
  { label: "Stories", href: "/stories" },
  { label: "Gear", href: "/gear" },
  { label: "About", href: "/about" },
];

export default function Navbar({ activePage }: { activePage: string }) {
  return (
    <nav className="bg-[#16161d] flex h-[72px] items-center justify-between px-[80px] w-full">
      {/* Logo */}
      <Link href="/" className="flex gap-[10px] items-center hover:opacity-80 transition-opacity cursor-pointer">
        <div className="bg-[#1b4fd8] flex items-center justify-center size-[28px]">
          <span className="font-medium text-[16px] text-white">S</span>
        </div>
        <span className="font-medium text-[14px] text-white tracking-[3px]">
          SIDE-OUT
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex gap-[48px] items-center">
        {navLinks.map((link) => {
          const isActive = link.label === activePage;
          return (
            <Link key={link.label} href={link.href} className="flex flex-col gap-[4px] items-center group cursor-pointer">
              <span
                className={`font-medium text-[11px] tracking-[2px] transition-colors duration-200 ${isActive ? "text-white" : "text-[#aaa] group-hover:text-white"
                  }`}
              >
                {link.label}
              </span>
              {isActive && (
                <div className="bg-[#1b4fd8] h-[2px] w-[16px]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Side */}
      <div className="flex gap-[16px] items-center">
        <button className="border border-[#444] flex items-center justify-center size-[36px] hover:bg-[#222] transition-colors duration-200 cursor-pointer">
          <Search size={14} className="text-white" />
        </button>
        <Link
          href="/matches"
          className="bg-[#1b4fd8] flex gap-[8px] h-[36px] items-center px-[20px] rounded-[20px] hover:bg-[#1546b3] transition-colors duration-200 cursor-pointer"
        >
          <Play size={14} className="text-white fill-white" />
          <span className="font-medium text-[12px] text-white">Watch Now</span>
        </Link>
      </div>
    </nav>
  );
}
