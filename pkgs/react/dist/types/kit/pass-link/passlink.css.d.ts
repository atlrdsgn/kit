import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
export declare const size: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string>;
export declare const variant: Record<"inherit" | "primary" | "secondary", string>;
export declare const font: Record<"system" | "mono" | "inherit", string>;
/** ------------------------------------------------------ */
export declare const base: string;
/** -------------------------------------------------------- */
export type LinkSizeProps = keyof typeof size;
export type LinkColorProps = keyof typeof variant;
export type LinkFontProps = keyof typeof font;
export type LinkVariantProps = RecipeVariants<typeof link>;
export declare const link: RuntimeFn<{
    size: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string>;
    variant: Record<"inherit" | "primary" | "secondary", string>;
    font: Record<"system" | "mono" | "inherit", string>;
}>;
//# sourceMappingURL=passlink.css.d.ts.map