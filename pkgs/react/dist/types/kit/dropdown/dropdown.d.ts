import React from 'react';
import * as DROP from '@radix-ui/react-dropdown-menu';
declare const DropdownGroup: React.ForwardRefExoticComponent<DROP.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DrobdownLabel: React.ForwardRefExoticComponent<DROP.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownItemIndicator: React.ForwardRefExoticComponent<DROP.DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
declare const DropdownSub: React.FC<DROP.DropdownMenuSubProps>;
declare const DropdownSubTrigger: React.ForwardRefExoticComponent<DROP.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownSubContent: React.ForwardRefExoticComponent<DROP.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownTrigger: React.ForwardRefExoticComponent<Omit<DROP.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
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
declare const DropdownContent: React.ForwardRefExoticComponent<Omit<DropdownContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
type DropdownItemProps = React.ComponentProps<typeof DROP.Item> & {
    className?: string;
};
declare const DropdownItem: React.ForwardRefExoticComponent<Omit<DropdownItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
type DropdownSeparatorProps = React.ComponentProps<typeof DROP.Separator> & {
    className?: string;
};
declare const DropdownSeparator: React.ForwardRefExoticComponent<Omit<DropdownSeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type DropdownProps = React.ComponentProps<typeof DROP.Root>;
export declare const Dropdown: React.FC<DropdownProps> & {
    Trigger: typeof DropdownTrigger;
    Content: typeof DropdownContent;
    Item: typeof DropdownItem;
    Group: typeof DropdownGroup;
    Label: typeof DrobdownLabel;
    Separator: typeof DropdownSeparator;
    ItemIndicator: typeof DropdownItemIndicator;
    Sub: typeof DropdownSub;
    SubContent: typeof DropdownSubContent;
    SubTrigger: typeof DropdownSubTrigger;
};
export {};
//# sourceMappingURL=dropdown.d.ts.map