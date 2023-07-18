import React from 'react';
import type { HeadingVariantProps, HeadingFontFamily, HeadingSize, HeadingWeight, HeadingAlignment } from './heading.css';
interface BASE_HEADING_PROPS {
    className?: string;
    font?: HeadingFontFamily;
    size?: HeadingSize;
    weight?: HeadingWeight;
    align?: HeadingAlignment;
}
type HeadingPrimitiveProps = BASE_HEADING_PROPS & HeadingVariantProps & React.HTMLAttributes<HTMLHeadingElement>;
export type HeadingProps = HeadingPrimitiveProps;
export declare const Heading: React.ForwardRefExoticComponent<BASE_HEADING_PROPS & {
    font?: "system" | "mono" | undefined;
    size?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "display" | undefined;
    weight?: "medium" | "black" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy" | undefined;
    align?: "center" | "left" | "right" | undefined;
} & React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export {};
//# sourceMappingURL=heading.d.ts.map