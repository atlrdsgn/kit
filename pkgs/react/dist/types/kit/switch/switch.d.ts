import React from 'react';
import * as SWI from '@radix-ui/react-switch';
import { type SwitchRootVariantProps, type SwitchToggleVariantProps } from './switch.css';
interface BASE_SWITCH_PROPS {
    className?: string;
    asChild?: boolean;
    /**
     *
     * The state of the switch when it is
     * initially rendered.
     * Use when you do not need to control its state.
     */
    defaultChecked?: boolean;
    /**
     *
     * The controlled state of the switch.
     * Must be used in conjunction with onCheckedChange.
     */
    checked?: boolean;
    /**
     *
     * Event handler called when
     * the state of the switch changes.
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     *
     * If true, prevents the user
     * from interacting with the switch.
     */
    disabled?: boolean;
    /**
     *
     * If true, indicates that the user must
     * check the switch before the owning
     * form can be submitted.
     */
    required?: boolean;
    /**
     *
     * The name of the switch.
     * Submitted with its owning form
     * as part of a name/value pair.
     */
    name?: string;
    /**
     *
     * The value given as data
     * when submitted with a name.
     */
    value?: string;
    size?: 'small' | 'medium';
}
export type SwitchProps = BASE_SWITCH_PROPS & SwitchRootVariantProps & React.ComponentProps<typeof SWI.Root>;
/**
 * --------------------------------------------
 * [SwitchToggleVariantProps]
 * holds the props (size) and (variant) for the ToggleComponent.
 */
export type ToggleProps = SwitchToggleVariantProps & React.ComponentProps<typeof SWI.Thumb>;
declare const SwitchToggleComponent: React.ForwardRefExoticComponent<Omit<{
    size?: "small" | "medium" | undefined;
} & SWI.SwitchThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/** ------------------- exports ------------------------- */
export declare const Switch: React.FC<SwitchProps> & {
    Toggle: typeof SwitchToggleComponent;
};
export {};
//# sourceMappingURL=switch.d.ts.map