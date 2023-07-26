import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** --------------------------------------------------- */
declare const size: Record<"xs" | "sm" | "md", string>;
declare const shape: Record<"rounded" | "pill", string>;
declare const variant: Record<"carbon" | "slate" | "jade", string>;
export type ChipSizeProps = keyof typeof size;
export type ChipShapeProps = keyof typeof shape;
export type ChipVProps = keyof typeof variant;
export type ChipVariantProps = RecipeVariants<typeof chip>;
export declare const chip: RuntimeFn<{
    size: Record<"xs" | "sm" | "md", string>;
    shape: Record<"rounded" | "pill", string>;
    variant: Record<"carbon" | "slate" | "jade", string>;
    removeShadow: Record<"true", string>;
}>;
export {};
//# sourceMappingURL=chip.css.d.ts.map