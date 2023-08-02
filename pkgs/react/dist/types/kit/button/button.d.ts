import React from 'react';
import { type BASE_BUTTON_PROPS } from './button.types';
import { type ButtonVariantProps } from './button.css';
type ButtonElementProps = BASE_BUTTON_PROPS & ButtonVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = ButtonElementProps;
export declare const Button: {
    ({ children, type, onClick, href, target, rel, size, variant, font, ...rest }: ButtonProps): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=button.d.ts.map