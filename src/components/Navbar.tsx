import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Matches", href: "/#" },
  { label: "Stories", href: "/stories" },
  { label: "Gear", href: "/gear" },
  { label: "About", href: "/about" },
];

export default function Navbar({ activePage }: { activePage: string }) {
  return (
    <nav className="bg-[#16161d] flex h-[72px] items-center justify-between px-[80px] w-full">
      {/* Logo */}
      <Link href="/" className="flex gap-[10px] items-center">
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
            <Link key={link.label} href={link.href} className="flex flex-col gap-[4px] items-center">
              <span
                className={`font-medium text-[11px] tracking-[2px] ${
                  isActive ? "text-white" : "text-[#aaa]"
                }`}
              >
                {link.label}
              </span>
              {isActive && (
                <div className="bg-[#1b4fd8] h-px w-[16px]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Side */}
      <div className="flex gap-[16px] items-center">
        <button className="border border-[#444] flex items-center justify-center size-[36px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="13" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <Link
          href="/#"
          className="bg-[#1b4fd8] flex gap-[8px] h-[36px] items-center px-[20px] rounded-[20px]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2L12 7L4 12V2Z" fill="white" />
          </svg>
          <span className="font-medium text-[12px] text-white">Watch Now</span>
        </Link>
      </div>
    </nav>
  );
}
