import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  secondButton?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-3xl font-bold leading-snug text-foreground sm:text-4xl sm:leading-tight md:text-5xl md:leading-hero">
      {props.title}
    </h1>
    <div className="mb-6 mt-3 text-base sm:mb-8 sm:mt-4 sm:text-lg md:mb-16 md:text-2xl">
      {props.description}
    </div>

    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      {props.button}
      {props.secondButton}
    </div>
  </header>
);

export { HeroOneButton };
