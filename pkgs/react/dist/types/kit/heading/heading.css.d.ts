import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/**
 *
 * Font, Size, Weight, Alignment
 */
export declare const font: Record<"system" | "mono", string>;
export declare const size: Record<"H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "display", string>;
export declare const weight: Record<"medium" | "black" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy", string>;
export declare const align: Record<"center" | "left" | "right", string>;
/** -------------------------------------------- */
export type HeadingFontFamily = keyof typeof font;
export type HeadingSize = keyof typeof size;
export type HeadingWeight = keyof typeof weight;
export type HeadingAlignment = keyof typeof align;
export type HeadingVariantProps = RecipeVariants<typeof heading>;
export declare const heading: RuntimeFn<{
    font: Record<"system" | "mono", string>;
    size: Record<"H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "display", string>;
    weight: Record<"medium" | "black" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy", string>;
    align: Record<"center" | "left" | "right", string>;
}>;
//# sourceMappingURL=heading.css.d.ts.map