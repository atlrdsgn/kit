import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** -------------------------------------------- */
export declare const width: Record<"small" | "medium" | "large" | "xlarge" | "max" | "full", string>;
export declare const align: Record<"center" | "end" | "start", string>;
export declare const border: Record<"true", string>;
export declare const flush: Record<"true", string>;
/** ---------------------------------------------- */
export declare const CONTAINER_BASE: string;
export type ContainerAlignment = keyof typeof align;
export type ContainerWidth = keyof typeof width;
export type ContainerBorder = keyof typeof border;
export type ContainerFlush = keyof typeof flush;
export type ContainerVariantProps = RecipeVariants<typeof container>;
export declare const container: RuntimeFn<{
    align: Record<"center" | "end" | "start", string>;
    width: Record<"small" | "medium" | "large" | "xlarge" | "max" | "full", string>;
    border: Record<"true", string>;
    flush: Record<"true", string>;
}>;
//# sourceMappingURL=container.css.d.ts.map