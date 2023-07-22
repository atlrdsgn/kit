import React from 'react';
import * as DROP from '@radix-ui/react-dropdown-menu';
import * as CSS from './dropdown.css';
import clsx from 'clsx';

const DropdownRoot = DROP.Root;

const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DROP.Trigger>,
  React.ComponentProps<typeof DROP.Trigger>
>(({ children, className, asChild, ...rest }, ref) => {
  return (
    <DROP.Trigger
      {...rest}
      ref={ref}
      asChild={asChild}
      className={clsx(CSS.dropTrigger, className)}>
      {children}
    </DROP.Trigger>
  );
});

type DropdownContentProps = React.ComponentProps<typeof DROP.Content> & {
  loop?: boolean;
  onCloseAutoFocus?: (event: Event) => void;
  onInteractOutside?: (event: Event) => void;
  onEscapeKeyDown?: (event: Event) => void;
  onPointerDownOutside?: (event: Event) => void;
  onFocusOutside?: (event: Event) => void;
  side?: 'left' | 'right' | 'top' | 'bottom';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  sticky?: 'always' | 'partial';
};

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DROP.Content>,
  DropdownContentProps
>(
  (
    {
      children,
      className,
      align = 'center',
      sideOffset = 10,
      sticky = 'partial',
      side = 'bottom',
      onInteractOutside,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <DROP.Content
        {...props}
        ref={forwardedRef}
        align={align}
        sideOffset={sideOffset}
        sticky={sticky}
        onInteractOutside={onInteractOutside}
        side={side}
        className={clsx(CSS.dropContent, className)}>
        {children}
      </DROP.Content>
    );
  },
);

export type DropdownProps = React.ComponentProps<typeof DROP.Root>;
export const Dropdown: React.FC<DropdownProps> & {
  Trigger: typeof DropdownTrigger;
  Content: typeof DropdownContent;
} = (props) => <DropdownRoot {...props} />;

Dropdown.displayName = 'Dropdown';
Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
DropdownContent.displayName = 'DropdownContent';
DropdownTrigger.displayName = 'DropdownTrigger';

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

<DropdownMenu.Root>
  <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>Sub menu →</DropdownMenu.SubTrigger>
        <DropdownMenu.Portal>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
            <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
            <DropdownMenu.Arrow />
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>…</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
*/
