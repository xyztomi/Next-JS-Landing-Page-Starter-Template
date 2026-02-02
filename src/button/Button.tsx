import type { ReactNode } from 'react';

import {
  Button as ShadcnButton,
  type ButtonProps as ShadcnButtonProps,
} from '@/components/ui/button';

type IButtonProps = {
  xl?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
};

const variantMap: Record<string, ShadcnButtonProps['variant']> = {
  primary: 'default',
  secondary: 'secondary',
  outline: 'outline',
};

const Button = (props: IButtonProps) => {
  const mappedVariant = variantMap[props.variant || 'primary'] || 'default';

  return (
    <ShadcnButton
      variant={mappedVariant}
      size={props.xl ? 'lg' : 'default'}
      asChild
    >
      <span>{props.children}</span>
    </ShadcnButton>
  );
};

export { Button };
