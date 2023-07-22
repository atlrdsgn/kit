import React from 'react';
import * as DROP from '@radix-ui/react-dropdown-menu';
import * as CSS from './dropdown.css';
import clsx from 'clsx';

const DropdownRoot = DROP.Root;
const DropdownSeparator = DROP.Separator;
const DropdownGroup = DROP.Group;
const DrobdownLabel = DROP.Label;
const DropdownItemIndicator = DROP.ItemIndicator;

const DropdownSub = DROP.Sub;
const DropdownSubTrigger = DROP.SubTrigger;
const DropdownSubContent = DROP.SubContent;

// trigger
const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DROP.Trigger>,
  React.ComponentProps<typeof DROP.Trigger>
>(({ className, asChild, ...rest }, ref) => {
  return (
    <DROP.Trigger
      {...rest}
      ref={ref}
      asChild={asChild}
      className={clsx(CSS.dropTrigger, className)}
    />
  );
});

// content
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
      <DROP.Content
        {...props}
        ref={forwardedRef}
        align={align}
        sideOffset={sideOffset}
        sticky={sticky}
        side={side}
        className={clsx(CSS.dropContent, className)}
      />
    );
  },
);

// item
type DropdownItemProps = React.ComponentProps<typeof DROP.Item> & {
  className?: string;
};

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DROP.Item>,
  DropdownItemProps
>(
  (
    { className, onSelect, textValue, asChild, disabled, ...props },
    forwardedRef,
  ) => {
    return (
      <DROP.Item
        {...props}
        ref={forwardedRef}
        onSelect={onSelect}
        textValue={textValue}
        asChild={asChild}
        disabled={disabled}
        className={clsx(CSS.dropItem, className)}
      />
    );
  },
);

export type DropdownProps = React.ComponentProps<typeof DROP.Root>;
export const Dropdown: React.FC<DropdownProps> & {
  Trigger: typeof DropdownTrigger;
  Content: typeof DropdownContent;
  Item: typeof DropdownItem;
  //..
  Group: typeof DropdownGroup;
  Label: typeof DrobdownLabel;
  Separator: typeof DropdownSeparator;
  ItemIndicator: typeof DropdownItemIndicator;
  Sub: typeof DropdownSub;
  SubContent: typeof DropdownSubContent;
  SubTrigger: typeof DropdownSubTrigger;
} = (props) => <DropdownRoot {...props} />;

Dropdown.displayName = 'Dropdown';
Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Group = DropdownGroup;
Dropdown.Label = DrobdownLabel;
Dropdown.Separator = DropdownSeparator;
Dropdown.ItemIndicator = DropdownItemIndicator;
Dropdown.Sub = DropdownSub;
Dropdown.SubContent = DropdownSubContent;
Dropdown.SubTrigger = DropdownSubTrigger;

DropdownContent.displayName = 'DropdownContent';
DropdownTrigger.displayName = 'DropdownTrigger';
DropdownItem.displayName = 'DropdownItem';
DropdownGroup.displayName = 'DropdownGroup';
DrobdownLabel.displayName = 'DrobdownLabel';
DropdownSeparator.displayName = 'DropdownSeparator';
DropdownItemIndicator.displayName = 'DropdownItemIndicator';
DropdownSub.displayName = 'DropdownSub';
DropdownSubContent.displayName = 'DropdownSubContent';
DropdownSubTrigger.displayName = 'DropdownSubTrigger';
