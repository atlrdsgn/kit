import React from 'react';
import * as LABL from '@radix-ui/react-label';
import { InputProps } from './input.types';
/** ---------------- label ---------------------- */
type InputLabelPrmitiveProps = React.HTMLAttributes<HTMLLabelElement> & React.ComponentPropsWithRef<typeof LABL.Root>;
export type InputLabelProps = InputLabelPrmitiveProps;
declare const InputLabel: React.ForwardRefExoticComponent<Omit<InputLabelPrmitiveProps, "ref"> & React.RefAttributes<HTMLLabelElement>>;
/** ---------------- flexbox ---------------------- */
type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    className?: string;
};
declare const InputWrapper: React.FC<FlexProps>;
/** ---------------- export input ---------------------- */
export declare const Input: React.FC<InputProps> & {
    Wrapper: typeof InputWrapper;
    Label: typeof InputLabel;
};
export type InputElement = keyof typeof Input;
export type { InputProps };
//# sourceMappingURL=input.d.ts.map