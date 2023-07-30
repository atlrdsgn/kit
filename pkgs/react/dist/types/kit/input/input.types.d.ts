import type React from 'react';
import { type InputVariantTypes, type InputColorKeys, type InputSizeKeys } from './input.css';
export type InputInterface = {
    className?: string;
    variant?: InputColorKeys;
    inputSize?: InputSizeKeys;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     *
     * @default false
     * sets the focus on the input element
     * to focus on page load.
     */
    autoFocus?: boolean;
    autoComplete?: 'on' | 'off';
    autoCorrect?: 'on' | 'off';
    /**
     * default = false
     * if the input element is required or not.
     */
    required?: boolean;
    disabled?: boolean;
    /**
     *
     * string that is displayed when
     * the element is empty.
     */
    placeholder?: string;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     *
     * sets the value of the input element
     * when controlling the input element.
     */
    value?: string;
    /**
     *
     * sets the usage type of the input element.
     */
    type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search' | 'submit';
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement> & React.HTMLAttributes<HTMLInputElement>;
export type InputProps = InputInterface & InputVariantTypes;
//# sourceMappingURL=input.types.d.ts.map