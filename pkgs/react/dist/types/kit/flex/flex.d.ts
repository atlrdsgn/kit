import React from 'react';
import type { FlexDirectionProps, FlexAlignProps, FlexJustifyProps, FlexGapProps, FlexVariantProps } from './flex.css';
interface BASE_FLEX_PROPS {
    children?: React.ReactNode;
    className?: string;
    direction?: FlexDirectionProps;
    align?: FlexAlignProps;
    justify?: FlexJustifyProps;
    gap?: FlexGapProps;
}
type FlexAttributeProps = BASE_FLEX_PROPS & React.HTMLAttributes<HTMLDivElement>;
export type FlexProps = FlexAttributeProps & FlexVariantProps;
export declare const Flex: React.ForwardRefExoticComponent<BASE_FLEX_PROPS & React.HTMLAttributes<HTMLDivElement> & {
    direction?: "column" | "row" | "rowReverse" | "columnReverse" | undefined;
    align?: "center" | "baseline" | "stretch" | "end" | "start" | undefined;
    justify?: "center" | "end" | "start" | "between" | undefined;
    gap?: "none" | 2 | 1 | 4 | 3 | 5 | 6 | 7 | 8 | 22 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "xs" | "sm" | "md" | "lg" | "xl" | 21 | 23 | 24 | undefined;
    wrap?: "nowrap" | "wrap" | "wrapReverse" | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=flex.d.ts.map