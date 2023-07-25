import { RuntimeFn, type RecipeVariants } from '@vanilla-extract/recipes';
/** ---------------------------------------------------------- */
declare const font: Record<"system" | "mono" | "inter", string>;
declare const size: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl", string>;
declare const weight: Record<"medium" | "black" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy", string>;
declare const color: Record<"transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12", string>;
declare const align: Record<"center" | "left" | "right", string>;
declare const casing: Record<"none" | "capitalize" | "lowercase" | "uppercase", string>;
export type TextFontVariants = keyof typeof font;
export type TextSizeVariants = keyof typeof size;
export type TextColorVariants = keyof typeof color;
export type TextWeightVariants = keyof typeof weight;
export type TextAlignVariants = keyof typeof align;
export type TextCasingVariants = keyof typeof casing;
/**
 * The `text` recipe combines the `font`, `size`, `weight`, `color`, and `align` style variants
 * into a single CSS rule, with default values set.
 *
 * Usage:
 *
 * <Text font="system" size="md" weight="medium" color="slate5" align="left" />
 * (or)
 * `className={text({ font: 'system', size: 'md', weight: 'medium', color: 'slate5', align: 'left' })}`
 */
export type TextVariantProps = RecipeVariants<typeof text>;
export declare const text: RuntimeFn<{
    font: Record<"system" | "mono" | "inter", string>;
    size: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl", string>;
    weight: Record<"medium" | "black" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy", string>;
    color: Record<"transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12", string>;
    align: Record<"center" | "left" | "right", string>;
    casing: Record<"none" | "capitalize" | "lowercase" | "uppercase", string>;
}>;
export {};
//# sourceMappingURL=text.css.d.ts.map