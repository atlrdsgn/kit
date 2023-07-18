import { JSX } from 'react/jsx-runtime';
import React from 'react';
import { type BASE_BUTTON_PROPS } from './button.types';
import { type ButtonVariantProps } from './button.css';
type ButtonElementProps = BASE_BUTTON_PROPS & ButtonVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = ButtonElementProps;
export declare const Button: {
    ({ children, type, as, onClick, href, target, rel, size, variant, ...rest }: ButtonProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=button.d.ts.map