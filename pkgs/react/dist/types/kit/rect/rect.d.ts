import { ResponsiveArray } from '@vanilla-extract/sprinkles';
import React from 'react';
import { type ClassValue } from 'clsx';
type HTMLProperties = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'className' | 'color' | 'height' | 'width'>;
export declare const Rect: React.ForwardRefExoticComponent<{
    all?: ("unset" | {
        [x: string]: "unset" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "unset" | null>;
    boxSizing?: ("border-box" | {
        [x: string]: "border-box" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "border-box" | null>;
    appearance?: ("none" | {
        [x: string]: "none" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | null>;
    outline?: ("none" | {
        [x: string]: "none" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | null>;
    userSelect?: ("none" | "auto" | {
        [x: string]: "none" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | "auto" | null>;
    fontVariantNumeric?: ("tabular-nums" | {
        [x: string]: "tabular-nums" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "tabular-nums" | null>;
    WebkitTapHighlightColor?: ("rgba(0,0,0,0)" | {
        [x: string]: "rgba(0,0,0,0)" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "rgba(0,0,0,0)" | null>;
    display?: ("none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | {
        [x: string]: "none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | null>;
    flex?: ("none" | 1 | "initial" | "auto" | {
        [x: string]: "none" | 1 | "initial" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | 1 | "initial" | "auto" | null>;
    flexDirection?: ("column" | "column-reverse" | "row" | "row-reverse" | {
        [x: string]: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "column" | "column-reverse" | "row" | "row-reverse" | null>;
    flexWrap?: ("nowrap" | "wrap" | "wrap-reverse" | {
        [x: string]: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "nowrap" | "wrap" | "wrap-reverse" | null>;
    justifyContent?: ("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | {
        [x: string]: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | null>;
    alignItems?: ("center" | "baseline" | "stretch" | "flex-end" | "flex-start" | {
        [x: string]: "center" | "baseline" | "stretch" | "flex-end" | "flex-start" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "center" | "baseline" | "stretch" | "flex-end" | "flex-start" | null>;
    alignContent?: ("center" | "stretch" | "flex-end" | "flex-start" | {
        [x: string]: "center" | "stretch" | "flex-end" | "flex-start" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "center" | "stretch" | "flex-end" | "flex-start" | null>;
    verticalAlign?: ("bottom" | "top" | "baseline" | "middle" | "text-bottom" | "text-top" | {
        [x: string]: "bottom" | "top" | "baseline" | "middle" | "text-bottom" | "text-top" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "bottom" | "top" | "baseline" | "middle" | "text-bottom" | "text-top" | null>;
    position?: ("fixed" | "inherit" | "initial" | "unset" | "absolute" | "relative" | "sticky" | {
        [x: string]: "fixed" | "inherit" | "initial" | "unset" | "absolute" | "relative" | "sticky" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "fixed" | "inherit" | "initial" | "unset" | "absolute" | "relative" | "sticky" | null>;
    margin?: ("0" | "none" | "inherit" | "initial" | "unset" | "auto" | {
        [x: string]: "0" | "none" | "inherit" | "initial" | "unset" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "0" | "none" | "inherit" | "initial" | "unset" | "auto" | null>;
    padding?: ("10px" | "16px" | "20px" | "0" | "4px" | "8px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | {
        [x: string]: "10px" | "16px" | "20px" | "0" | "4px" | "8px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "10px" | "16px" | "20px" | "0" | "4px" | "8px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | null>;
    width?: ("auto" | "100%" | {
        [x: string]: "auto" | "100%" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "auto" | "100%" | null>;
    height?: ("auto" | "100%" | {
        [x: string]: "auto" | "100%" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "auto" | "100%" | null>;
    gap?: (number | "4px 4px" | "8px 8px" | "10px 10px" | "12px 12px" | "16px 16px" | "20px 20px" | {
        [x: string]: number | "4px 4px" | "8px 8px" | "10px 10px" | "12px 12px" | "16px 16px" | "20px 20px" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, number | "4px 4px" | "8px 8px" | "10px 10px" | "12px 12px" | "16px 16px" | "20px 20px" | null>;
    mixBlendMode?: ("inherit" | "initial" | "unset" | "difference" | "multiply" | "overlay" | "screen" | {
        [x: string]: "inherit" | "initial" | "unset" | "difference" | "multiply" | "overlay" | "screen" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "inherit" | "initial" | "unset" | "difference" | "multiply" | "overlay" | "screen" | null>;
    fontWeight?: ("bold" | "strong" | "inherit" | "normal" | {
        [x: string]: "bold" | "strong" | "inherit" | "normal" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "bold" | "strong" | "inherit" | "normal" | null>;
    textTransform?: ("capitalize" | "lowercase" | "uppercase" | {
        [x: string]: "capitalize" | "lowercase" | "uppercase" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "capitalize" | "lowercase" | "uppercase" | null>;
    transitionProperty?: ("none" | "initial" | "all" | {
        [x: string]: "none" | "initial" | "all" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | "initial" | "all" | null>;
    transitionTimingFunction?: ("linear" | "cubic-bezier(0.4, 0, 1, 1)" | "cubic-bezier(0, 0, 0.2, 1)" | "cubic-bezier(0.42, 0, 0.58, 1)" | {
        [x: string]: "linear" | "cubic-bezier(0.4, 0, 1, 1)" | "cubic-bezier(0, 0, 0.2, 1)" | "cubic-bezier(0.42, 0, 0.58, 1)" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "linear" | "cubic-bezier(0.4, 0, 1, 1)" | "cubic-bezier(0, 0, 0.2, 1)" | "cubic-bezier(0.42, 0, 0.58, 1)" | null>;
    transitionDuration?: ("150ms" | "300ms" | "500ms" | "700ms" | "1000ms" | {
        [x: string]: "150ms" | "300ms" | "500ms" | "700ms" | "1000ms" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "150ms" | "300ms" | "500ms" | "700ms" | "1000ms" | null>;
} & {
    color?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
    backgroundColor?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
    borderColor?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
} & {
    reset?: "div" | (("a" | "article" | "aside" | "blockquote" | "body" | "button" | "details" | "figcaption" | "figure" | "footer" | "header" | "hgroup" | "input" | "mark" | "menu" | "nav" | "ol" | "q" | "section" | "select" | "table" | "textarea" | "ul") & React.ElementType<any>) | undefined;
} & HTMLProperties & {
    as?: React.ElementType<any> | undefined;
    className?: ClassValue;
    reset?: string | undefined;
} & React.RefAttributes<HTMLElement>>;
export declare const Box: React.ForwardRefExoticComponent<{
    all?: ("unset" | {
        [x: string]: "unset" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "unset" | null>;
    boxSizing?: ("border-box" | {
        [x: string]: "border-box" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "border-box" | null>;
    appearance?: ("none" | {
        [x: string]: "none" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | null>;
    outline?: ("none" | {
        [x: string]: "none" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | null>;
    userSelect?: ("none" | "auto" | {
        [x: string]: "none" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | "auto" | null>;
    fontVariantNumeric?: ("tabular-nums" | {
        [x: string]: "tabular-nums" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "tabular-nums" | null>;
    WebkitTapHighlightColor?: ("rgba(0,0,0,0)" | {
        [x: string]: "rgba(0,0,0,0)" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "rgba(0,0,0,0)" | null>;
    display?: ("none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | {
        [x: string]: "none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | "flex" | "block" | "inline" | "inline-block" | "inline-flex" | null>;
    flex?: ("none" | 1 | "initial" | "auto" | {
        [x: string]: "none" | 1 | "initial" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | 1 | "initial" | "auto" | null>;
    flexDirection?: ("column" | "column-reverse" | "row" | "row-reverse" | {
        [x: string]: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "column" | "column-reverse" | "row" | "row-reverse" | null>;
    flexWrap?: ("nowrap" | "wrap" | "wrap-reverse" | {
        [x: string]: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "nowrap" | "wrap" | "wrap-reverse" | null>;
    justifyContent?: ("center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | {
        [x: string]: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | null>;
    alignItems?: ("center" | "baseline" | "stretch" | "flex-end" | "flex-start" | {
        [x: string]: "center" | "baseline" | "stretch" | "flex-end" | "flex-start" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "center" | "baseline" | "stretch" | "flex-end" | "flex-start" | null>;
    alignContent?: ("center" | "stretch" | "flex-end" | "flex-start" | {
        [x: string]: "center" | "stretch" | "flex-end" | "flex-start" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "center" | "stretch" | "flex-end" | "flex-start" | null>;
    verticalAlign?: ("bottom" | "top" | "baseline" | "middle" | "text-bottom" | "text-top" | {
        [x: string]: "bottom" | "top" | "baseline" | "middle" | "text-bottom" | "text-top" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "bottom" | "top" | "baseline" | "middle" | "text-bottom" | "text-top" | null>;
    position?: ("fixed" | "inherit" | "initial" | "unset" | "absolute" | "relative" | "sticky" | {
        [x: string]: "fixed" | "inherit" | "initial" | "unset" | "absolute" | "relative" | "sticky" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "fixed" | "inherit" | "initial" | "unset" | "absolute" | "relative" | "sticky" | null>;
    margin?: ("0" | "none" | "inherit" | "initial" | "unset" | "auto" | {
        [x: string]: "0" | "none" | "inherit" | "initial" | "unset" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "0" | "none" | "inherit" | "initial" | "unset" | "auto" | null>;
    padding?: ("10px" | "16px" | "20px" | "0" | "4px" | "8px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | {
        [x: string]: "10px" | "16px" | "20px" | "0" | "4px" | "8px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "10px" | "16px" | "20px" | "0" | "4px" | "8px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | null>;
    width?: ("auto" | "100%" | {
        [x: string]: "auto" | "100%" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "auto" | "100%" | null>;
    height?: ("auto" | "100%" | {
        [x: string]: "auto" | "100%" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "auto" | "100%" | null>;
    gap?: (number | "4px 4px" | "8px 8px" | "10px 10px" | "12px 12px" | "16px 16px" | "20px 20px" | {
        [x: string]: number | "4px 4px" | "8px 8px" | "10px 10px" | "12px 12px" | "16px 16px" | "20px 20px" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, number | "4px 4px" | "8px 8px" | "10px 10px" | "12px 12px" | "16px 16px" | "20px 20px" | null>;
    mixBlendMode?: ("inherit" | "initial" | "unset" | "difference" | "multiply" | "overlay" | "screen" | {
        [x: string]: "inherit" | "initial" | "unset" | "difference" | "multiply" | "overlay" | "screen" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "inherit" | "initial" | "unset" | "difference" | "multiply" | "overlay" | "screen" | null>;
    fontWeight?: ("bold" | "strong" | "inherit" | "normal" | {
        [x: string]: "bold" | "strong" | "inherit" | "normal" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "bold" | "strong" | "inherit" | "normal" | null>;
    textTransform?: ("capitalize" | "lowercase" | "uppercase" | {
        [x: string]: "capitalize" | "lowercase" | "uppercase" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "capitalize" | "lowercase" | "uppercase" | null>;
    transitionProperty?: ("none" | "initial" | "all" | {
        [x: string]: "none" | "initial" | "all" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "none" | "initial" | "all" | null>;
    transitionTimingFunction?: ("linear" | "cubic-bezier(0.4, 0, 1, 1)" | "cubic-bezier(0, 0, 0.2, 1)" | "cubic-bezier(0.42, 0, 0.58, 1)" | {
        [x: string]: "linear" | "cubic-bezier(0.4, 0, 1, 1)" | "cubic-bezier(0, 0, 0.2, 1)" | "cubic-bezier(0.42, 0, 0.58, 1)" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "linear" | "cubic-bezier(0.4, 0, 1, 1)" | "cubic-bezier(0, 0, 0.2, 1)" | "cubic-bezier(0.42, 0, 0.58, 1)" | null>;
    transitionDuration?: ("150ms" | "300ms" | "500ms" | "700ms" | "1000ms" | {
        [x: string]: "150ms" | "300ms" | "500ms" | "700ms" | "1000ms" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "150ms" | "300ms" | "500ms" | "700ms" | "1000ms" | null>;
} & {
    color?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
    backgroundColor?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
    borderColor?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "peach0" | "peach1" | "peach2" | "peach3" | "peach4" | "peach5" | "peach6" | "peach7" | "peach8" | "peach9" | "peach10" | "peach11" | "peach12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
} & {
    reset?: "div" | (("a" | "article" | "aside" | "blockquote" | "body" | "button" | "details" | "figcaption" | "figure" | "footer" | "header" | "hgroup" | "input" | "mark" | "menu" | "nav" | "ol" | "q" | "section" | "select" | "table" | "textarea" | "ul") & React.ElementType<any>) | undefined;
} & HTMLProperties & {
    as?: React.ElementType<any> | undefined;
    className?: ClassValue;
    reset?: string | undefined;
} & React.RefAttributes<HTMLElement>>;
export type DivProps = Parameters<typeof Rect>[0];
export {};
//# sourceMappingURL=rect.d.ts.map