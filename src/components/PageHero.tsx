export default function PageHero({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <div className="h-[240px] overflow-clip relative w-full">
      <div className="absolute bg-[#ccc] h-[240px] left-0 top-0 w-full" />
      <div className="absolute bg-[rgba(22,22,29,0.73)] h-[240px] left-0 top-0 w-full" />
      <div className="absolute flex flex-col gap-[10px] h-[240px] items-start justify-end left-[64px] pb-[48px] top-0 w-[700px]">
        <p className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
          {subtitle}
        </p>
        <h1 className="font-light text-[52px] text-white tracking-[-2px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
