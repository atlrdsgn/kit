import React from 'react';
import { type LinkColorProps, type LinkFontProps, type LinkSizeProps, type LinkWeightProps, type LinkVariantProps } from './passlink.css';
interface LinkElementProps {
    children?: React.ReactNode;
    /**
     *
     *
     */
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top' | string;
    /**
     *
     * the size of the link.
     * -- font-size.
     */
    className?: string;
    size?: LinkSizeProps;
    variant?: LinkColorProps;
    font?: LinkFontProps;
    weight?: LinkWeightProps;
}
export type PassLinkProps = LinkElementProps & LinkVariantProps & React.HTMLAttributes<HTMLAnchorElement>;
export declare const PassLink: React.ForwardRefExoticComponent<LinkElementProps & {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    variant?: "inherit" | "orange" | "carbon" | "jade" | "sapphire" | undefined;
    font?: "system" | "mono" | undefined;
    weight?: "medium" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy" | undefined;
} & React.HTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=passlink.d.ts.map