import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
declare const z: Record<"normal" | "top" | "default" | "blur" | "max", string>;
export declare const canvasBlur: string;
/** ------------------------------ */
export type CanvasVariantProps = RecipeVariants<typeof canvas>;
export type CanvasZVariants = keyof typeof z;
export declare const canvas: RuntimeFn<{
    z: Record<"normal" | "top" | "default" | "blur" | "max", string>;
}>;
export {};
//# sourceMappingURL=canvas.css.d.ts.map