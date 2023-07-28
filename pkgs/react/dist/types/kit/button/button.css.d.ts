import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** ------------------------------------------------ */
declare const size: Record<"xs" | "sm" | "md" | "lg", string>;
declare const variant: Record<"carbon" | "jade" | "sapphire", string>;
/** -------------------------------------------- */
export type ButtonSize = keyof typeof size;
export type ButtonVariant = keyof typeof variant;
export type ButtonVariantProps = RecipeVariants<typeof button>;
export declare const button: RuntimeFn<{
    size: Record<"xs" | "sm" | "md" | "lg", string>;
    variant: Record<"carbon" | "jade" | "sapphire", string>;
    font: Record<"system" | "mono", string>;
}>;
export {};
//# sourceMappingURL=button.css.d.ts.map