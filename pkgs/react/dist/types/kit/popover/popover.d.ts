import React from 'react';
import * as POP from '@radix-ui/react-popover';
export declare const PopoverRoot: React.FC<POP.PopoverProps>;
export declare const PopoverArrow: React.ForwardRefExoticComponent<POP.PopoverArrowProps & React.RefAttributes<SVGSVGElement>>;
export declare const PopoverAnchor: React.ForwardRefExoticComponent<POP.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
export declare const PopoverPortal: React.FC<POP.PopoverPortalProps>;
export declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<POP.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const PopoverContent: React.ForwardRefExoticComponent<Omit<POP.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const PopoverClose: React.ForwardRefExoticComponent<Omit<POP.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/** ----------------------------------------- */
export type PopoverProps = React.ComponentProps<typeof POP.Root>;
export declare const Popover: React.FC<PopoverProps> & {
    Portal: typeof PopoverPortal;
    Trigger: typeof PopoverTrigger;
    Content: typeof PopoverContent;
    Anchor: typeof POP.Anchor;
    Arrow: typeof POP.Arrow;
    Close: typeof PopoverClose;
};
//# sourceMappingURL=popover.d.ts.map