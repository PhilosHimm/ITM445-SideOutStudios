import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-dark flex flex-col md:flex-row gap-8 items-start md:items-center justify-between px-6 md:px-16 py-10 w-full"
    >
      {/* Brand */}
      <div className="flex flex-col gap-[6px] items-start">
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
          />
          <span className="font-medium text-[14px] text-white tracking-[-0.3px]">
            Side-Out Studios
          </span>
        </Link>
        <p className="text-white/40 text-[12px]">
          Unfiltered volleyball coverage, every match.
        </p>
      </div>

      {/* Nav Links */}
      <nav aria-label="Footer navigation">
        <ul className="flex gap-6 items-center list-none m-0 p-0 flex-wrap">
          {[
            { label: "Home", href: "/" },
            { label: "Matches", href: "/matches" },
            { label: "Highlights", href: "/highlights" },
            { label: "Gear", href: "/gear" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white/60 text-[13px] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright */}
      <p className="text-white/30 text-[11px]">
        &copy; {new Date().getFullYear()} Side-Out Studios
      </p>
    </footer>
  );
}
