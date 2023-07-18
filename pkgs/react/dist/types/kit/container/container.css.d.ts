import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** -------------------------------------------- */
export declare const width: {
    readonly small: string;
    readonly medium: string;
    readonly large: string;
    readonly xlarge: string;
    readonly max: string;
    readonly full: string;
};
export declare const align: {
    readonly center: string;
    readonly end: string;
    readonly start: string;
};
export declare const border: {
    readonly true: string;
};
export declare const CONTAINER_BASE: string;
export type ContainerAlignment = keyof typeof align;
export type ContainerWidth = keyof typeof width;
export type ContainerBorder = keyof typeof border;
export type ContainerVariantProps = RecipeVariants<typeof container>;
export declare const container: RuntimeFn<{
    align: {
        readonly center: string;
        readonly end: string;
        readonly start: string;
    };
    width: {
        readonly small: string;
        readonly medium: string;
        readonly large: string;
        readonly xlarge: string;
        readonly max: string;
        readonly full: string;
    };
    border: {
        readonly true: string;
    };
}>;
//# sourceMappingURL=container.css.d.ts.map