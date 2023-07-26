import React from 'react';
import * as TAB from '@radix-ui/react-tabs';
import * as CSS from './tab.switcher.css';
import clsx from 'clsx';

type TabsListProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  loop?: boolean;
} & React.ComponentProps<typeof TAB.List>;

type TabsItemProps = {
  asChild?: boolean;
  className?: string;
  value: string;
  disabled?: boolean;
} & React.ComponentProps<typeof TAB.Trigger>;

type TabsContentProps = {
  asChild?: boolean;
  className?: string;
  value: string;
} & React.ComponentProps<typeof TAB.Content>;

export interface TabSwitcherProps
  extends React.ComponentProps<typeof TAB.Root> {}

/** ----------------------------------------------------- */

const TabsList = React.forwardRef<
  React.ElementRef<typeof TAB.List>,
  TabsListProps
>(({ children, className, asChild, loop = true, ...rest }, ref) => {
  return (
    <TAB.List
      {...rest}
      ref={ref}
      asChild={asChild}
      loop={loop}
      className={clsx(CSS.tabsList, className)}>
      {children}
    </TAB.List>
  );
});

const TabsItem = React.forwardRef<
  React.ElementRef<typeof TAB.Trigger>,
  TabsItemProps
>(({ children, className, asChild, value, disabled, ...rest }, ref) => {
  return (
    <TAB.Trigger
      {...rest}
      ref={ref}
      asChild={asChild}
      value={value}
      disabled={disabled}
      className={clsx(CSS.tabsItem, className)}>
      {children}
    </TAB.Trigger>
  );
});

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TAB.Content>,
  TabsContentProps
>(({ children, className, asChild, value, ...rest }, ref) => {
  return (
    <TAB.Content
      {...rest}
      ref={ref}
      asChild={asChild}
      value={value}
      className={clsx(CSS.tabsContent, className)}>
      {children}
    </TAB.Content>
  );
});

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TAB.Root>,
  TabSwitcherProps
>(
  (
    {
      children,
      asChild,
      defaultValue,
      value,
      onValueChange,
      orientation = 'horizontal',
      activationMode = 'automatic',
      ...rest
    },
    ref,
  ) => {
    return (
      <TAB.Root
        {...rest}
        ref={ref}
        asChild={asChild}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        orientation={orientation}
        activationMode={activationMode}>
        {children}
      </TAB.Root>
    );
  },
);

export const TabSwitcher: React.FC<TabSwitcherProps> & {
  List: typeof TabsList;
  Item: typeof TabsItem;
  Content: typeof TabsContent;
} = (props) => <TabsRoot {...props} />;

TabSwitcher.List = TabsList;
TabSwitcher.Item = TabsItem;
TabSwitcher.Content = TabsContent;

TabSwitcher.displayName = 'Tabs';
TabsList.displayName = 'Tabs.List';
TabsItem.displayName = 'Tabs.Item';
TabsContent.displayName = 'Tabs.Content';
TabsRoot.displayName = 'Tabs.Root';

TabSwitcher.List.displayName = 'TabsSwitcher.List';
TabSwitcher.Item.displayName = 'TabsSwitcher.Item';
TabSwitcher.Content.displayName = 'TabsSwitcher.Content';
