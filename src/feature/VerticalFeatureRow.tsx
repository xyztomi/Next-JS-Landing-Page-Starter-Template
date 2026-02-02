import { useRouter } from 'next/router';

import { cn } from '@/lib/utils';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        'mt-10 flex flex-wrap items-center sm:mt-14 md:mt-20',
        props.reverse && 'flex-row-reverse',
      )}
    >
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
          {props.title}
        </h3>
        <div className="mt-4 text-base leading-7 sm:mt-6 sm:text-lg md:text-xl md:leading-9">
          {props.description}
        </div>
      </div>

      <div className="w-full p-3 sm:w-1/2 sm:p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
