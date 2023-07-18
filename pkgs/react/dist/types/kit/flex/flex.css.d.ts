import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** ------------------------------------------------------ */
declare const direction: Record<"column" | "row" | "rowReverse" | "columnReverse", string>;
declare const align: Record<"center" | "baseline" | "stretch" | "end" | "start", string>;
declare const justify: Record<"center" | "end" | "start" | "between", string>;
declare const gap: Record<"xs" | "sm" | "md" | "lg" | "xl", string>;
/**
 *
 * export flex.
 */
export type FlexDirectionProps = keyof typeof direction;
export type FlexAlignProps = keyof typeof align;
export type FlexJustifyProps = keyof typeof justify;
export type FlexGapProps = keyof typeof gap;
export type FlexVariantProps = RecipeVariants<typeof flex>;
export declare const flex: RuntimeFn<{
    direction: Record<"column" | "row" | "rowReverse" | "columnReverse", string>;
    align: Record<"center" | "baseline" | "stretch" | "end" | "start", string>;
    justify: Record<"center" | "end" | "start" | "between", string>;
    gap: Record<"xs" | "sm" | "md" | "lg" | "xl", string>;
    wrap: Record<"nowrap" | "wrap" | "wrapReverse", string>;
}>;
export {};
//# sourceMappingURL=flex.css.d.ts.map