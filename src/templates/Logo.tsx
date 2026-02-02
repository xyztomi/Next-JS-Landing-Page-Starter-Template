import { Search, TrendingUp } from 'lucide-react';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const iconSize = props.xl ? 20 : 16;
  const fontStyle = props.xl
    ? 'font-bold text-lg sm:text-xl md:text-2xl'
    : 'font-bold text-base sm:text-xl';

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-foreground ${fontStyle}`}
    >
      <span className="relative flex shrink-0 items-center justify-center rounded-lg bg-accent p-1 sm:p-1.5">
        <Search className="text-white" size={iconSize} strokeWidth={2.5} />
        <TrendingUp
          className="absolute -right-1 -top-1 text-accent"
          size={iconSize * 0.6}
          strokeWidth={3}
        />
      </span>
      <span className="whitespace-nowrap">
        SEO <span className="font-normal text-muted-foreground">Services</span>
        <span className="text-accent"> for Small Biz</span>
      </span>
    </span>
  );
};

export { Logo };
