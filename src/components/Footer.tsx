import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Matches", href: "/matches" },
  { label: "Stories", href: "/stories" },
  { label: "Gear", href: "/gear" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#16161d] flex flex-col gap-[24px] items-start overflow-clip px-[80px] py-[48px] w-full">
      {/* Top Row */}
      <div className="flex items-start justify-between overflow-clip w-full">
        {/* Logo */}
        <Link href="/" className="flex gap-[10px] items-center overflow-clip hover:opacity-80 transition-opacity cursor-pointer">
          <div className="bg-[#1b4fd8] flex items-center justify-center overflow-clip rounded-[4px] size-[28px]">
            <span className="font-medium text-[16px] text-white">S</span>
          </div>
          <span className="font-medium text-[14px] text-white">SIDE-OUT</span>
        </Link>

        {/* Links */}
        <div className="flex font-medium gap-[32px] items-center overflow-clip text-[#ababab] text-[11px]">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors duration-200 cursor-pointer">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#404045] h-px w-full" />

      {/* Bottom Row */}
      <div className="flex items-center justify-between overflow-clip text-[#666] text-[11px] w-full">
        <p>&copy; 2026 Side-Out Studios. All rights reserved.</p>
        <p>ITM 445 — Kevin Lin &amp; Philos Himm · Toronto Metropolitan University</p>
      </div>
    </footer>
  );
}
