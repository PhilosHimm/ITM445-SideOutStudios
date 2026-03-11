import Link from "next/link";

interface NavbarProps {
  activePage: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const navLinks = [
    { label: "Matches", href: "/matches" },
    { label: "Stories", href: "/stories" },
    { label: "Gear", href: "/gear" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      role="banner"
      className="bg-[#16161d] flex h-[56px] items-center justify-between px-6 md:px-16 w-full sticky top-0 z-50 border-b border-white/5"
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-[10px] group"
        aria-label="Side-Out Studios — Home"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:rotate-12"
        >
          <rect width="20" height="20" rx="2" fill="#1b4fd8" />
          <path d="M5 14L10 6L15 14H5Z" fill="white" />
        </svg>
        <span className="font-medium text-[15px] text-white tracking-[-0.3px]">
          Side-Out
        </span>
      </Link>

      {/* Navigation */}
      <nav aria-label="Main navigation">
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
    </header>
  );
}
