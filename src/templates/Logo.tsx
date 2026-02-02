import { Search, TrendingUp } from 'lucide-react';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const iconSize = props.xl ? 22 : 16;
  const fontStyle = props.xl ? 'font-bold text-3xl' : 'font-bold text-xl';

  return (
    <span className={`inline-flex items-center text-foreground ${fontStyle}`}>
      <span className="relative mr-2 flex items-center justify-center rounded-lg bg-accent p-1.5">
        <Search className="text-white" size={iconSize} strokeWidth={2.5} />
        <TrendingUp
          className="absolute -right-1 -top-1 text-accent"
          size={iconSize * 0.6}
          strokeWidth={3}
        />
      </span>
      <span>
        SEO <span className="font-normal text-muted-foreground">Services</span>
      </span>
      <span className="ml-1 text-accent">for Small Biz</span>
    </span>
  );
};

export { Logo };
