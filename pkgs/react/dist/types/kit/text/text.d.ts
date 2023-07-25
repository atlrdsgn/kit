import React from 'react';
import type { TextFontVariants, TextSizeVariants, TextAlignVariants, TextWeightVariants, TextColorVariants, TextCasingVariants, TextVariantProps } from './text.css';
interface BASE_TEXT_PROPS {
    children?: React.ReactNode;
    className?: string;
    font?: TextFontVariants;
    size?: TextSizeVariants;
    align?: TextAlignVariants;
    weight?: TextWeightVariants;
    color?: TextColorVariants;
    casing?: TextCasingVariants;
}
export type TextProps = BASE_TEXT_PROPS & TextVariantProps & React.HTMLAttributes<HTMLParagraphElement>;
export declare const Text: React.ForwardRefExoticComponent<BASE_TEXT_PROPS & {
    font?: "system" | "mono" | "inter" | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    weight?: "medium" | "black" | "bold" | "normal" | "superlite" | "lite" | "semibold" | "heavy" | undefined;
    color?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    align?: "center" | "left" | "right" | undefined;
    casing?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
} & React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export {};
//# sourceMappingURL=text.d.ts.map