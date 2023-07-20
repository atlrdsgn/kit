import React from 'react';
import { type CardHeadingLevels, type CardHeaderVariants } from './card.css';
interface CardInterfaceProps {
    className?: string;
    children?: React.ReactNode;
}
export type CardProps = CardInterfaceProps & React.HTMLAttributes<HTMLDivElement>;
/** ----------------------------- */
declare const CardContent: React.ForwardRefExoticComponent<CardInterfaceProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLParagraphElement>>;
/** ----------------------------- */
export type CardHeaderProps = CardInterfaceProps & CardHeaderVariants & {
    level?: CardHeadingLevels;
} & React.HTMLAttributes<HTMLHeadingElement>;
declare const CardHeader: React.ForwardRefExoticComponent<CardInterfaceProps & {
    level?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | undefined;
} & {
    level?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | undefined;
} & React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
/** ---------------------- */
export declare const Card: React.FC<CardProps> & {
    Content: typeof CardContent;
    Header: typeof CardHeader;
};
export {};
//# sourceMappingURL=card.d.ts.map