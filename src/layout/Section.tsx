import type { ReactNode } from 'react';

type ISectionProps = {
  id?: string;
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <section
    id={props.id}
    className={`mx-auto max-w-screen-lg px-4 sm:px-6 ${
      props.yPadding ? props.yPadding : 'py-10 md:py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-8 text-center md:mb-12">
        {props.title && (
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-3 text-base sm:text-lg md:mt-4 md:px-20 md:text-xl">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </section>
);

export { Section };
