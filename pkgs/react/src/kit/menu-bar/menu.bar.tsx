import React from 'react';
import * as MBAR from '@radix-ui/react-menubar';
import * as CSS from './menu.bar.css';
import { clsx } from 'clsx';

const MenubarCollection = MBAR.Menu;
const MenubarSeparator = MBAR.Separator;

/** ------------------------- */

const MenubarRoot = React.forwardRef<
  React.ElementRef<typeof MBAR.Root>,
  React.ComponentProps<typeof MBAR.Root>
>(({ className, ...props }, ref) => {
  return (
    <MBAR.Root
      {...props}
      ref={ref}
      className={clsx(CSS.menuLayout, className)}
    />
  );
});

// trigger
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MBAR.Trigger>,
  React.ComponentProps<typeof MBAR.Trigger>
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <MBAR.Trigger
      {...props}
      ref={ref}
      asChild={asChild}
      className={clsx(CSS.menuTrigger, className)}
    />
  );
});

// content
type MenubarContentProps = {
  asChild?: boolean;
  className?: string;
  loop?: boolean;
  onCloseAutoFocus?: React.FocusEventHandler;
  onEscapeKeyDown?: React.KeyboardEventHandler;
  onPointerDownOutside?: React.PointerEventHandler;
  onFocusOutside?: React.FocusEventHandler;
  onInteractOutside?: React.FocusEventHandler;
  forceMount?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  sticky?: 'partial' | 'always';
} & React.ComponentProps<typeof MBAR.Content>;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MBAR.Content>,
  MenubarContentProps
>(
  (
    {
      className,
      asChild = false,
      loop = true,
      side = 'bottom',
      sideOffset = 10,
      align = 'center',
      alignOffset = 0,
      sticky = 'partial',
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <MBAR.Content
        {...rest}
        ref={forwardedRef}
        asChild={asChild}
        loop={loop}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        sticky={sticky}
        className={clsx(CSS.menuContent, className)}
      />
    );
  },
);

// item
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MBAR.Item>,
  React.ComponentProps<typeof MBAR.Item>
>(({ className, ...props }, ref) => {
  return (
    <MBAR.Item
      {...props}
      ref={ref}
      className={clsx(CSS.menuItem, className)}
    />
  );
});

/** ------------------------- */

export type MenubarProps = React.ComponentProps<typeof MBAR.Root>;
export const Menubar: React.FC<MenubarProps> & {
  //...
  Collection: typeof MenubarCollection;
  Trigger: typeof MenubarTrigger;
  Content: typeof MenubarContent;
  Item: typeof MenubarItem;
  //..
  Separator: typeof MenubarSeparator;
} = (props) => <MenubarRoot {...props} />;

Menubar.Collection = MenubarCollection;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Item = MenubarItem;
Menubar.Separator = MenubarSeparator;

/** ------------------------- */

Menubar.displayName = 'Menubar';
MenubarRoot.displayName = 'Menubar';
MenubarCollection.displayName = 'MenubarCollection';
MenubarTrigger.displayName = 'MenubarTrigger';
MenubarContent.displayName = 'MenubarContent';
MenubarItem.displayName = 'MenubarItem';
MenubarSeparator.displayName = 'MenubarSeparator';

/** ------------------------- */

Menubar.Collection.displayName = 'MenubarCollection';
Menubar.Trigger.displayName = 'MenubarTrigger';
Menubar.Content.displayName = 'MenubarContent';
Menubar.Item.displayName = 'MenubarItem';
Menubar.Separator.displayName = 'MenubarSeparator';
