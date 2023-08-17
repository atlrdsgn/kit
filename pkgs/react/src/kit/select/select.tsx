import React from 'react';
import * as SLCT from '@radix-ui/react-select';
import * as CSS from './select.css';

import {
  ArrowDownIcon,
  IndicateIcon,
  SmallArrowDownIcon,
  SmallArrowUpIcon,
} from '../svg.icons';
import clsx from 'clsx';

const SelectGroup = SLCT.Group;
const SelectValue = SLCT.Value;
const SelectSeparator = SLCT.Separator;
const SelectLabel = SLCT.Label;

export type SelectIconProps = React.ComponentPropsWithRef<typeof SLCT.Icon>;
const SelectIcon = React.forwardRef<
  React.ElementRef<typeof SLCT.Icon>,
  SelectIconProps
>(({ className, asChild, ...rest }, forwardedRef) => (
  <SLCT.Icon
    {...rest}
    ref={forwardedRef}
    asChild={asChild}
    className={clsx(CSS.selectIcon, className)}>
    <ArrowDownIcon />
  </SLCT.Icon>
));

/**
 *
 * select.trigger
 */
export type SelectTriggerProps = React.ComponentProps<typeof SLCT.Trigger> & {
  className?: string;
  placeholder?: SLCT.SelectValueProps['placeholder'];
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SLCT.Trigger>,
  SelectTriggerProps
>(({ className, placeholder, ...props }, ref) => {
  return (
    <SLCT.Trigger
      {...props}
      ref={ref}
      className={clsx(CSS.selectTrigger, className)}>
      <SelectValue placeholder={placeholder} />
      <SelectIcon />
    </SLCT.Trigger>
  );
});

/**
 *
 * select.content
 */
export type SelectContentProps = React.ComponentProps<typeof SLCT.Content> & {
  className?: string;
  children?: React.ReactNode;
};

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SLCT.Content>,
  SelectContentProps
>(
  (
    {
      children,
      className,
      position = 'popper',
      side = 'bottom',
      sideOffset = 6,
      align = 'center',
      alignOffset,
      avoidCollisions,
      sticky = 'partial',
      hideWhenDetached,

      ...props
    },

    ref,
  ) => {
    return (
      <SLCT.Content
        {...props}
        ref={ref}
        className={clsx(CSS.selectContent, className)}
        position={position}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        sticky={sticky}
        hideWhenDetached={hideWhenDetached}>
        <SLCT.ScrollUpButton className={clsx(CSS.scrollUp, className)}>
          <SmallArrowUpIcon />
        </SLCT.ScrollUpButton>
        <SLCT.Viewport>{children}</SLCT.Viewport>
        <SLCT.ScrollDownButton className={clsx(CSS.scrollDown, className)}>
          <SmallArrowDownIcon />
        </SLCT.ScrollDownButton>
      </SLCT.Content>
    );
  },
);

/**
 *
 * select.item
 */
export type SelectItemProps = React.ComponentProps<typeof SLCT.Item> & {
  className?: string;
  children?: React.ReactNode;
} & React.ComponentProps<typeof SLCT.Item>;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SLCT.Item>,
  SelectItemProps
>(({ className, children, textValue, value, ...props }, ref) => {
  return (
    <SLCT.Item
      {...props}
      ref={ref}
      value={value}
      textValue={textValue}
      className={clsx(CSS.selectItem, className)}>
      <SLCT.ItemText className={clsx(CSS.selectItemText, className)}>
        {children}
      </SLCT.ItemText>
      <SLCT.ItemIndicator className={clsx(CSS.selectIndicate, className)}>
        <IndicateIcon />
      </SLCT.ItemIndicator>
    </SLCT.Item>
  );
});

/**
 *
 * portal > content > up > viewport > down > [content.items]
 */

/** ------------------------------- */

export type SelectProps = React.ComponentProps<typeof SLCT.Root>;
/**
 *
 * @SelectProps
 *
 * defaultValue?: string;
 * value?: string;
 * onValueChange?: (value: string) => void;
 * defaultOpen?: boolean;
 * open?: boolean;
 * onOpenChange?: (open: boolean) => void;
 * dir?: 'ltr' | 'rtl';
 * name?: string;
 * disabled?: boolean;
 * required?: boolean;
 *
 */
export const Select: React.FC<SelectProps> & {
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Icon: typeof SelectIcon;
  Separator: typeof SelectSeparator;
  Label: typeof SelectLabel;
  Group: typeof SelectGroup;
} = (props) => <SLCT.Root {...props} />;

/** ---------------------------------------------- */

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Icon = SelectIcon;
Select.Separator = SelectSeparator;
Select.Label = SelectLabel;
Select.Group = SelectGroup;

/** ---------------------------------------------- */

Select.displayName = 'Select';
// ..
Select.Trigger.displayName = 'Select.Trigger';
SelectTrigger.displayName = 'SelectTrigger';
// ..
Select.Content.displayName = 'Select.Content';
SelectContent.displayName = 'SelectContent';
// ..
Select.Item.displayName = 'Select.Item';
SelectItem.displayName = 'SelectItem';
// ..
Select.Icon.displayName = 'Select.Icon';
SelectIcon.displayName = 'SelectIcon';
// ..
Select.Separator.displayName = 'Select.Separator';
SelectSeparator.displayName = 'SelectSeparator';
// ..
Select.Label.displayName = 'Select.Label';
SelectLabel.displayName = 'SelectLabel';
// ..
Select.Group.displayName = 'Select.Group';
SelectGroup.displayName = 'SelectGroup';
