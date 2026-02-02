import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="flex flex-wrap [&_a:hover]:text-foreground [&_a:not(:last-child)]:mr-3 [&_a]:text-muted-foreground [&_svg]:size-5 [&_svg]:fill-current">
    {props.children}
  </div>
);

export { FooterIconList };
