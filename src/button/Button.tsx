import className from 'classnames';
import type { ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
};

const Button = (props: IButtonProps) => {
  const variant = props.variant || 'primary';
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    'btn-outline': variant === 'outline',
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-accent-500;
          }

          .btn-primary:hover {
            @apply bg-accent-600;
          }

          .btn-secondary {
            @apply text-white bg-navy-700;
          }

          .btn-secondary:hover {
            @apply bg-navy-800;
          }

          .btn-outline {
            @apply text-navy-700 bg-white border-2 border-navy-700;
          }

          .btn-outline:hover {
            @apply bg-navy-700 text-white;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
