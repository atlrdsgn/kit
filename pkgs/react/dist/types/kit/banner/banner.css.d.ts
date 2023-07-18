import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** ----------------- variants ---------------------- */
declare const size: Record<"small" | "medium" | "large", string>;
declare const variant: Record<"one" | "two", string>;
declare const border: {
    true: string[];
};
/** ------------------------------------------------------- */
export type BannerSize = typeof size;
export type BannerBorderBoolean = typeof border;
export type BannerVariant = typeof variant;
export type BannerVariants = RecipeVariants<typeof banner>;
export declare const banner: RuntimeFn<{
    size: Record<"small" | "medium" | "large", string>;
    border: {
        true: string[];
    };
    variant: Record<"one" | "two", string>;
}>;
export {};
//# sourceMappingURL=banner.css.d.ts.map