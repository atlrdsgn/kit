import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
export declare const size: {
    readonly xs: string;
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
    readonly xxl: string;
    readonly "3xl": string;
    readonly "4xl": string;
    readonly "5xl": string;
    readonly "6xl": string;
    readonly "7xl": string;
};
/** ---------------------------------- */
export type SpaceSizeProps = keyof typeof size;
export type SpaceVariantProps = RecipeVariants<typeof space>;
export declare const space: RuntimeFn<{
    size: {
        readonly xs: string;
        readonly sm: string;
        readonly md: string;
        readonly lg: string;
        readonly xl: string;
        readonly xxl: string;
        readonly "3xl": string;
        readonly "4xl": string;
        readonly "5xl": string;
        readonly "6xl": string;
        readonly "7xl": string;
    };
}>;
//# sourceMappingURL=space.css.d.ts.map