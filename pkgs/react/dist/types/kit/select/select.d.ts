import React from 'react';
import * as SLCT from '@radix-ui/react-select';
declare const SelectGroup: React.ForwardRefExoticComponent<SLCT.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<SLCT.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<SLCT.SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
export type SelectIconProps = React.ComponentPropsWithRef<typeof SLCT.Icon>;
declare const SelectIcon: React.ForwardRefExoticComponent<Omit<SLCT.SelectIconProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 *
 * select.trigger
 */
export type SelectTriggerProps = React.ComponentProps<typeof SLCT.Trigger> & {
    className?: string;
    placeholder?: SLCT.SelectValueProps['placeholder'];
};
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/**
 *
 * select.content
 */
export type SelectContentProps = React.ComponentProps<typeof SLCT.Content> & {
    className?: string;
    children?: React.ReactNode;
};
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 *
 * select.item
 */
export type SelectItemProps = React.ComponentProps<typeof SLCT.Item> & {
    className?: string;
    children?: React.ReactNode;
} & React.ComponentProps<typeof SLCT.Item>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
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
export declare const Select: React.FC<SelectProps> & {
    Trigger: typeof SelectTrigger;
    Content: typeof SelectContent;
    Item: typeof SelectItem;
    Icon: typeof SelectIcon;
    Separator: typeof SelectSeparator;
    Label: typeof SelectLabel;
    Group: typeof SelectGroup;
};
export {};
//# sourceMappingURL=select.d.ts.map