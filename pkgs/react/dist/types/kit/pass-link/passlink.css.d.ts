import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
export declare const size: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string>;
export declare const variant: Record<"inherit" | "orange" | "carbon" | "jade" | "sapphire", string>;
export declare const font: Record<"system" | "mono", string>;
export declare const weight: Record<"medium" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy", string>;
/** ------------------------------------------------------ */
export declare const baseLink: string;
/** -------------------------------------------------------- */
export type LinkSizeProps = keyof typeof size;
export type LinkColorProps = keyof typeof variant;
export type LinkFontProps = keyof typeof font;
export type LinkWeightProps = keyof typeof weight;
export type LinkVariantProps = RecipeVariants<typeof link>;
export declare const link: RuntimeFn<{
    size: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string>;
    variant: Record<"inherit" | "orange" | "carbon" | "jade" | "sapphire", string>;
    font: Record<"system" | "mono", string>;
    weight: Record<"medium" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy", string>;
}>;
//# sourceMappingURL=passlink.css.d.ts.map