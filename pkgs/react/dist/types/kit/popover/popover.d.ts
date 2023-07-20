import React from 'react';
import * as POP from '@radix-ui/react-popover';
declare const PopoverRoot: React.FC<POP.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<POP.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<POP.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PopoverClose: React.ForwardRefExoticComponent<Omit<POP.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/** ----------------------------------------- */
export type PopoverTriggerProps = React.ComponentProps<typeof PopoverTrigger>;
export type PopoverContentProps = React.ComponentProps<typeof PopoverContent>;
export type PopoverProps = React.ComponentProps<typeof PopoverRoot>;
export declare const Popover: React.FC<PopoverProps> & {
    Trigger: typeof PopoverTrigger;
    Content: typeof PopoverContent;
    Anchor: typeof POP.Anchor;
    Arrow: typeof POP.Arrow;
    Close: typeof PopoverClose;
};
export {};
//# sourceMappingURL=popover.d.ts.map