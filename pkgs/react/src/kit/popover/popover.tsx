import React from 'react';
import * as POP from '@radix-ui/react-popover';
import * as CSS from './popover.css';
import clsx from 'clsx';

export const PopoverRoot = POP.Root;
export const PopoverArrow = POP.Arrow;
export const PopoverAnchor = POP.Anchor;
export const PopoverPortal = POP.Portal;

export const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof POP.Trigger>,
  React.ComponentProps<typeof POP.Trigger>
>(({ children, className, asChild = false, ...props }, ref) => {
  return (
    <POP.Trigger
      {...props}
      ref={ref}
      className={clsx(CSS.popoverTrigger, className)}>
      {children}
    </POP.Trigger>
  );
});

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof POP.Content>,
  React.ComponentPropsWithoutRef<typeof POP.Content>
>(
  (
    {
      children,
      className,
      align = 'center',
      sideOffset = 6,
      sticky = 'partial',
      side = 'bottom',
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <POP.Portal>
        <POP.Content
          {...props}
          ref={forwardedRef}
          align={align}
          sideOffset={sideOffset}
          side={side}
          className={clsx(CSS.popoverContent, className)}>
          {children}
        </POP.Content>
      </POP.Portal>
    );
  },
);

export const PopoverClose = React.forwardRef<
  React.ElementRef<typeof POP.Close>,
  React.ComponentProps<typeof POP.Close>
>(({ children, className, asChild, ...props }, ref) => {
  return (
    <POP.Close
      {...props}
      ref={ref}
      asChild={asChild}
      className={clsx(CSS.popoverClose, className)}>
      {children}
    </POP.Close>
  );
});

/** ----------------------------------------- */

export type PopoverProps = React.ComponentProps<typeof POP.Root>;
export const Popover: React.FC<PopoverProps> & {
  Portal: typeof PopoverPortal;
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
  //..
  Anchor: typeof POP.Anchor;
  Arrow: typeof POP.Arrow;
  Close: typeof PopoverClose;
} = (props) => <PopoverRoot {...props} />;

Popover.Portal = PopoverPortal;
Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Anchor = PopoverAnchor;
Popover.Arrow = PopoverArrow;
Popover.Close = PopoverClose;

Popover.displayName = 'Popover';
Popover.Portal.displayName = 'Popover.Portal';
Popover.Trigger.displayName = 'Popover.Trigger';
Popover.Content.displayName = 'Popover.Content';
Popover.Anchor.displayName = 'Popover.Anchor';
Popover.Arrow.displayName = 'Popover.Arrow';
Popover.Close.displayName = 'Popover.Close';
