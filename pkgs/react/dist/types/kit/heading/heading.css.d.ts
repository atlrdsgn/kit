import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/**
 *
 * Font, Size, Weight, Alignment
 */
export declare const font: {
    readonly system: string;
    readonly mono: string;
};
export declare const size: {
    readonly H1: string;
    readonly H2: string;
    readonly H3: string;
    readonly H4: string;
    readonly H5: string;
    readonly H6: string;
    readonly display: string;
};
export declare const weight: {
    readonly medium: string;
    readonly black: string;
    readonly bold: string;
    readonly normal: string;
    readonly superlite: string;
    readonly lite: string;
    readonly semibold: string;
    readonly heavy: string;
};
export declare const align: {
    readonly center: string;
    readonly left: string;
    readonly right: string;
};
/** -------------------------------------------- */
export type HeadingFontFamily = keyof typeof font;
export type HeadingSize = keyof typeof size;
export type HeadingWeight = keyof typeof weight;
export type HeadingAlignment = keyof typeof align;
export type HeadingVariantProps = RecipeVariants<typeof heading>;
export declare const heading: RuntimeFn<{
    font: {
        readonly system: string;
        readonly mono: string;
    };
    size: {
        readonly H1: string;
        readonly H2: string;
        readonly H3: string;
        readonly H4: string;
        readonly H5: string;
        readonly H6: string;
        readonly display: string;
    };
    weight: {
        readonly medium: string;
        readonly black: string;
        readonly bold: string;
        readonly normal: string;
        readonly superlite: string;
        readonly lite: string;
        readonly semibold: string;
        readonly heavy: string;
    };
    align: {
        readonly center: string;
        readonly left: string;
        readonly right: string;
    };
}>;
//# sourceMappingURL=heading.css.d.ts.map