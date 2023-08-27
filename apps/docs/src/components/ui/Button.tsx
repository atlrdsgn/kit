import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { createClasses } from '@/lib/utils';

const classes = {
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium my-4',
  focus:
    'duration-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  disabled:
    'disabled:cursor-not-allowed disabled:hover:border-input disabled:hover:bg-white/50 disabled:opacity-50',
  //...
};

const buttonVariants = cva(
  `${classes.base} ${classes.focus} ${classes.disabled}`,

  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        ghost:
          'hover:bg-carbon-100 rounded-xl text-carbon-600 hover:text-carbon-900',
        docu: 'border border-transparent bg-carbon-50 shadow hover:bg-carbon-100 hover:text-carbon-500 text-carbon-800 rounded-xl',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-8 py-2',
        sm: 'h-9 rounded-xl px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? React.Fragment : 'button';
    const btnProps = asChild ? {} : { ...props, ref };

    return (
      <Component
        className={createClasses(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { buttonVariants };
