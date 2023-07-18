import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
declare const size: {
    sm: string;
    md: string;
    lg: string;
    vw: string;
};
/** ------------------------------------------------------- */
export declare const SEC_ROOT: string;
/** ------------------------------------------------------- */
export type SectionSize = keyof typeof size;
export type SectionVariantProps = RecipeVariants<typeof section>;
export declare const section: RuntimeFn<{
    size: {
        sm: string;
        md: string;
        lg: string;
        vw: string;
    };
}>;
export {};
//# sourceMappingURL=section.css.d.ts.map