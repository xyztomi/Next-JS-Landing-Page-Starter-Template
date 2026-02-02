import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-lg bg-primary/10 p-5 text-center sm:p-8 md:flex-row md:items-center md:justify-between md:p-12 md:text-left">
    <div className="text-lg font-semibold sm:text-xl md:text-2xl">
      <div className="text-foreground">{props.title}</div>
      <div className="text-primary">{props.subtitle}</div>
    </div>

    <div className="mt-4 whitespace-nowrap md:ml-4 md:mt-0">{props.button}</div>
  </div>
);

export { CTABanner };
