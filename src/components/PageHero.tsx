interface PageHeroProps {
  subtitle: string;
  title: string;
  bgImage?: string;
}

export default function PageHero({ subtitle, title, bgImage }: PageHeroProps) {
  return (
    <section
      aria-label={title}
      className="bg-dark h-[240px] overflow-clip relative flex flex-col gap-[8px] items-start w-full"
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-dark/73" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 flex flex-col gap-[10px] items-start px-6 md:px-16 pb-12 w-full z-10">
        <span className="font-medium text-primary text-[10px] tracking-[3px]">
          {subtitle}
        </span>
        <h1 className="font-light text-[40px] md:text-[52px] text-white tracking-[-2px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
