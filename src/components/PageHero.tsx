interface PageHeroProps {
  subtitle: string;
  title: string;
}

export default function PageHero({ subtitle, title }: PageHeroProps) {
  return (
    <section
      aria-label={title}
      className="bg-[#16161d] flex flex-col gap-[8px] items-start px-6 md:px-16 py-12 md:py-14 w-full"
    >
      <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
        {subtitle}
      </span>
      <h1 className="font-light text-[40px] md:text-[56px] text-white tracking-[-2px]">
        {title}
      </h1>
    </section>
  );
}
