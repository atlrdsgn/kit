import React from 'react';
import * as MBAR from '@radix-ui/react-menubar';
declare const MenubarCollection: {
    (props: MBAR.ScopedProps<MBAR.MenubarMenuProps>): JSX.Element;
    displayName: string;
};
declare const MenubarSeparator: React.ForwardRefExoticComponent<MBAR.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React.ForwardRefExoticComponent<Omit<MBAR.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
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
declare const MenubarContent: React.ForwardRefExoticComponent<Omit<MenubarContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React.ForwardRefExoticComponent<Omit<MBAR.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** ------------------------- */
export type MenubarProps = React.ComponentProps<typeof MBAR.Root>;
export declare const Menubar: React.FC<MenubarProps> & {
    Collection: typeof MenubarCollection;
    Trigger: typeof MenubarTrigger;
    Content: typeof MenubarContent;
    Item: typeof MenubarItem;
    Separator: typeof MenubarSeparator;
};
export {};
//# sourceMappingURL=menu.bar.d.ts.map