import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
declare const size: Record<"small" | "medium", string>;
declare const variant: Record<"primary", string>;
/** --------------------------------------------------------------- */
/** --- icon --- */
export declare const badgeIcon: string;
export declare const badgeContent: string;
export type BadgeSizeVariants = keyof typeof size;
export type BadgeColorVariants = keyof typeof variant;
export type BadgeVariantProps = RecipeVariants<typeof badge>;
export declare const badge: RuntimeFn<{
    size: Record<"small" | "medium", string>;
    variant: Record<"primary", string>;
}>;
export {};
//# sourceMappingURL=badge.css.d.ts.map