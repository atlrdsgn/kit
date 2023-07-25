import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** ------------------------------------------------------ */
declare const direction: Record<"column" | "row" | "rowReverse" | "columnReverse", string>;
declare const align: Record<"center" | "baseline" | "stretch" | "end" | "start", string>;
declare const justify: Record<"center" | "end" | "start" | "between", string>;
declare const gap: Record<"none" | 2 | 1 | 4 | 3 | 5 | 6 | 7 | 8 | 22 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "xs" | "sm" | "md" | "lg" | "xl" | 21 | 23 | 24, string>;
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
    gap: Record<"none" | 2 | 1 | 4 | 3 | 5 | 6 | 7 | 8 | 22 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "xs" | "sm" | "md" | "lg" | "xl" | 21 | 23 | 24, string>;
    wrap: Record<"nowrap" | "wrap" | "wrapReverse", string>;
}>;
export {};
//# sourceMappingURL=flex.css.d.ts.map