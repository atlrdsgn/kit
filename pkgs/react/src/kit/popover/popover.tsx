import React from 'react';
import * as POP from '@radix-ui/react-popover';
import * as CSS from './popover.css';
import clsx from 'clsx';

const PopoverRoot = POP.Root;
const PopoverAnchor = POP.Anchor;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof POP.Trigger>,
  React.ComponentProps<typeof POP.Trigger>
>(({ children, className, asChild, ...rest }, ref) => {
  return (
    <POP.Trigger
      {...rest}
      ref={ref}
      asChild={asChild}
      className={clsx(CSS.popoverTrigger, className)}>
      {children}
    </POP.Trigger>
  );
});

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof POP.Content>,
  React.ComponentPropsWithoutRef<typeof POP.Content>
>(
  (
    {
      children,
      className,
      align = 'center',
      sideOffset = 10,
      sticky = 'partial',
      side = 'bottom',
      onInteractOutside = () => {},
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <POP.Content
        {...props}
        ref={forwardedRef}
        align={align}
        sideOffset={sideOffset}
        sticky='partial'
        onInteractOutside={onInteractOutside}
        side='bottom'
        className={clsx(CSS.popoverContent, className)}>
        {children}
      </POP.Content>
    );
  },
);

const PopoverClose = React.forwardRef<
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
export type PopoverTriggerProps = React.ComponentProps<typeof PopoverTrigger>;
export type PopoverContentProps = React.ComponentProps<typeof PopoverContent>;
export type PopoverProps = React.ComponentProps<typeof PopoverRoot>;

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
  //..
  Anchor: typeof PopoverAnchor;
  Close: typeof PopoverClose;
} = (props) => <PopoverRoot {...props} />;

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Anchor = POP.Anchor;
Popover.Close = PopoverClose;

Popover.displayName = 'Popover';
PopoverTrigger.displayName = 'Popover.Trigger';
PopoverContent.displayName = 'Popover.Content';
Popover.Anchor.displayName = 'Popover.Anchor';
PopoverClose.displayName = 'Popover.Close';
