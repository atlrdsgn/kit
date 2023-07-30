import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
export declare const inputFlex: string;
export declare const inputLabel: string;
export declare const inputTypeNumber: string;
declare const inputSize: Record<"xs" | "sm" | "md", string>;
declare const variant: Record<"orange" | "carbon" | "jade" | "sapphire", string>;
export declare const input: RuntimeFn<{
    inputSize: Record<"xs" | "sm" | "md", string>;
    variant: Record<"orange" | "carbon" | "jade" | "sapphire", string>;
}>;
/** ---------------------------------------------- */
export type InputVariantTypes = RecipeVariants<typeof input>;
export type InputColorKeys = keyof typeof variant;
export type InputSizeKeys = keyof typeof inputSize;
export {};
//# sourceMappingURL=input.css.d.ts.map