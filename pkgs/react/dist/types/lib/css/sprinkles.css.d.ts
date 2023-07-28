import { ResponsiveArray, type ConditionalValue, type RequiredConditionalValue } from '@vanilla-extract/sprinkles';
import { breakpoints, breakpointNames } from './constants';
type Breakpoint = keyof typeof breakpoints;
/**
 * Responsive properties
 *
 * These properties are responsive, meaning
 * they change at different breakpoints.
 */
declare const responsiveProperties: {
    conditions: {
        defaultCondition: "small";
        conditionNames: string[];
        responsiveArray: string[] & {
            length: 4;
        };
    };
    styles: {
        all: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        boxSizing: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "border-box": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        appearance: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        outline: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        userSelect: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        fontVariantNumeric: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "tabular-nums": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        WebkitTapHighlightColor: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "rgba(0,0,0,0)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        display: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "inline-block": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "inline-flex": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        flex: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        flexDirection: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "column-reverse": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "row-reverse": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        flexWrap: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                wrap: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "wrap-reverse": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        justifyContent: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "space-around": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "space-between": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        alignItems: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        alignContent: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        verticalAlign: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                bottom: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                top: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                middle: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "text-bottom": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "text-top": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        position: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                sticky: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        margin: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        padding: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "8px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "10px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "16px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "20px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                0: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "4px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "12px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        width: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        height: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        gap: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "4px 4px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "8px 8px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "10px 10px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "12px 12px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "16px 16px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "20px 20px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        mixBlendMode: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                difference: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                multiply: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                overlay: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                screen: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        fontWeight: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                bold: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                strong: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                normal: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        textTransform: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                capitalize: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                lowercase: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                uppercase: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        transitionProperty: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                all: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        transitionTimingFunction: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                linear: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "cubic-bezier(0.4, 0, 1, 1)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "cubic-bezier(0, 0, 0.2, 1)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "cubic-bezier(0.42, 0, 0.58, 1)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        transitionDuration: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "150ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "300ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "500ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "700ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "1000ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
    };
} & {
    styles: {};
};
/**
 * Non-responsive properties
 *
 * These properties are not responsive, meaning
 * they do not change at different breakpoints.
 */
export declare const lightMode = "light";
export declare const darkMode = "dark";
export declare const sprinkles: ((props: {
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
    padding?: ("8px" | "10px" | "16px" | "20px" | "0" | "4px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | {
        [x: string]: "8px" | "10px" | "16px" | "20px" | "0" | "4px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | undefined;
    } | undefined) | ResponsiveArray<2 | 1 | 4 | 3, "8px" | "10px" | "16px" | "20px" | "0" | "4px" | "12px" | "none" | "inherit" | "initial" | "unset" | "auto" | null>;
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
    color?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
    backgroundColor?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
    borderColor?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | {
        light?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
        dark?: "transparent" | "current" | "white" | "black" | "jade0" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "sapphire0" | "sapphire1" | "sapphire2" | "sapphire3" | "sapphire4" | "sapphire5" | "sapphire6" | "sapphire7" | "sapphire8" | "sapphire9" | "sapphire10" | "sapphire11" | "sapphire12" | "orange0" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "carbon0" | "carbon1" | "carbon2" | "carbon3" | "carbon4" | "carbon5" | "carbon6" | "carbon7" | "carbon8" | "carbon9" | "carbon10" | "carbon11" | "carbon12" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "grey6" | "grey7" | "grey8" | "grey9" | "grey10" | "grey11" | "grey12" | "slate0" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "azure0" | "azure1" | "azure2" | "azure3" | "azure4" | "azure5" | "azure6" | "azure7" | "azure8" | "azure9" | "azure10" | "azure11" | "azure12" | "cherry0" | "cherry1" | "cherry2" | "cherry3" | "cherry4" | "cherry5" | "cherry6" | "cherry7" | "cherry8" | "cherry9" | "cherry10" | "cherry11" | "cherry12" | "lime0" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "lemon0" | "lemon1" | "lemon2" | "lemon3" | "lemon4" | "lemon5" | "lemon6" | "lemon7" | "lemon8" | "lemon9" | "lemon10" | "lemon11" | "lemon12" | undefined;
    } | undefined;
}) => string) & {
    properties: Set<"color" | "margin" | "alignContent" | "alignItems" | "appearance" | "backgroundColor" | "boxSizing" | "display" | "flexDirection" | "flexWrap" | "fontVariantNumeric" | "fontWeight" | "height" | "justifyContent" | "mixBlendMode" | "position" | "textTransform" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "userSelect" | "verticalAlign" | "width" | "all" | "borderColor" | "flex" | "gap" | "outline" | "padding" | "WebkitTapHighlightColor">;
};
export type Sprinkles = Parameters<typeof sprinkles>[0];
export declare const mapResponsiveValue: <OutputValue extends string | number | boolean | null | undefined, Value extends ConditionalValue<{
    conditions: {
        defaultCondition: "small";
        conditionNames: string[];
        responsiveArray: string[] & {
            length: 4;
        };
    };
    styles: {
        all: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        boxSizing: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "border-box": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        appearance: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        outline: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        userSelect: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        fontVariantNumeric: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "tabular-nums": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        WebkitTapHighlightColor: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "rgba(0,0,0,0)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        display: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "inline-block": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "inline-flex": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        flex: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        flexDirection: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "column-reverse": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "row-reverse": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        flexWrap: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                wrap: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "wrap-reverse": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        justifyContent: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "space-around": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "space-between": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        alignItems: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        alignContent: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        verticalAlign: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                bottom: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                top: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                middle: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "text-bottom": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "text-top": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        position: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                sticky: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        margin: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        padding: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "8px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "10px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "16px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "20px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                0: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "4px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "12px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        width: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        height: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        gap: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "4px 4px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "8px 8px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "10px 10px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "12px 12px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "16px 16px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "20px 20px": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        mixBlendMode: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                difference: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                multiply: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                overlay: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                screen: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        fontWeight: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                bold: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                strong: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                normal: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        textTransform: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                capitalize: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                lowercase: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                uppercase: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        transitionProperty: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                all: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        transitionTimingFunction: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                linear: {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "cubic-bezier(0.4, 0, 1, 1)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "cubic-bezier(0, 0, 0.2, 1)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "cubic-bezier(0.42, 0, 0.58, 1)": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
        transitionDuration: {
            responsiveArray: string[] & {
                length: 4;
            };
            values: {
                "150ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "300ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "500ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "700ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
                "1000ms": {
                    defaultClass: string;
                    conditions: {
                        [x: string]: string;
                    };
                };
            };
        };
    };
} & {
    styles: {};
}, string | number | boolean>>(value: Value, fn: (inputValue: Value extends ResponsiveArray<1, string | number | boolean | null> | ResponsiveArray<2 | 1, string | number | boolean | null> | ResponsiveArray<2 | 1 | 3, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5 | 6, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5 | 6 | 7, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5 | 6 | 7 | 8, string | number | boolean | null> ? NonNullable<Value[number]> : Value extends Partial<Record<string, string | number | boolean>> ? NonNullable<Value[keyof Value]> : Value, key: string) => OutputValue) => Value extends string | number | boolean ? OutputValue : Partial<Record<string, OutputValue>>;
export declare const mapColorValue: <OutputValue extends string | number | boolean | null | undefined, Value extends ConditionalValue<{
    conditions: {
        defaultCondition: "light";
        conditionNames: ("light" | "dark")[];
    };
    styles: {
        color: {
            values: {
                transparent: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                current: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                white: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                black: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
            };
        };
        backgroundColor: {
            values: {
                transparent: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                current: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                white: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                black: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
            };
        };
        borderColor: {
            values: {
                transparent: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                current: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                white: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                black: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                jade12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                sapphire12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                orange12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                carbon12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                grey12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                slate12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                azure12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                cherry12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lime12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon0: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon1: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon2: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon3: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon4: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon5: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon6: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon7: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon8: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon9: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon10: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon11: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
                lemon12: {
                    defaultClass: string;
                    conditions: {
                        light: string;
                        dark: string;
                    };
                };
            };
        };
    };
}, string | number | boolean>>(value: Value, fn: (inputValue: Value extends ResponsiveArray<1, string | number | boolean | null> | ResponsiveArray<2 | 1, string | number | boolean | null> | ResponsiveArray<2 | 1 | 3, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5 | 6, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5 | 6 | 7, string | number | boolean | null> | ResponsiveArray<2 | 1 | 4 | 3 | 5 | 6 | 7 | 8, string | number | boolean | null> ? NonNullable<Value[number]> : Value extends Partial<Record<string, string | number | boolean>> ? NonNullable<Value[keyof Value]> : Value, key: "light" | "dark") => OutputValue) => Value extends string | number | boolean ? OutputValue : Partial<Record<"light" | "dark", OutputValue>>;
export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveProperties, Value>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<typeof responsiveProperties, Value>;
export type OptionalResponsiveObject<Value> = Value | Partial<Record<Breakpoint, Value>>;
export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> & Record<(typeof breakpointNames)[0], Value>;
export {};
//# sourceMappingURL=sprinkles.css.d.ts.map