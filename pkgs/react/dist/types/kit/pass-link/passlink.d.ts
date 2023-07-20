import React from 'react';
import type { LinkColorProps, LinkFontProps, LinkSizeProps } from './passlink.css';
interface LinkElementProps {
    children: React.ReactNode;
    /**
     *
     *
     */
    href?: string;
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
}
export type PassLinkProps = LinkElementProps & React.HTMLAttributes<HTMLAnchorElement>;
export declare const PassLink: React.ForwardRefExoticComponent<LinkElementProps & React.HTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=passlink.d.ts.map