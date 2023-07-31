import React from 'react';
import * as TAB from '@radix-ui/react-tabs';
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
export interface TabSwitcherProps extends React.ComponentProps<typeof TAB.Root> {
    asChild?: boolean;
    /**
     * When automatic, tabs are activated when receiving focus.
     * When manual, tabs are activated when clicked.
     */
    activationMode?: 'automatic' | 'manual';
    /**
     * The orientation of the tabs.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * The value of the tab that should be active
     * when initially rendered. Use when you do not
     * need to control the state of the tabs.
     */
    value?: string;
    defaultValue?: string;
    /**
     * Event handler called when the value changes.
     */
    onValueChange?: (value: string) => void;
}
/** ----------------------------------------------------- */
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsListProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsItem: React.ForwardRefExoticComponent<Omit<TabsItemProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const TabSwitcher: React.FC<TabSwitcherProps> & {
    List: typeof TabsList;
    Item: typeof TabsItem;
    Content: typeof TabsContent;
};
export {};
//# sourceMappingURL=tab.switcher.d.ts.map