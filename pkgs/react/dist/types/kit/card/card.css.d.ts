import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
export declare const cardContainer: string;
export declare const cardContent: string;
export declare const cardFooter: string;
declare const level: Record<"H1" | "H2" | "H3" | "H4" | "H5" | "H6", string>;
export declare const cardHeader: RuntimeFn<{
    level: Record<"H1" | "H2" | "H3" | "H4" | "H5" | "H6", string>;
}>;
export type CardHeadingLevels = keyof typeof level;
export type CardHeaderVariants = RecipeVariants<typeof cardHeader>;
export {};
//# sourceMappingURL=card.css.d.ts.map