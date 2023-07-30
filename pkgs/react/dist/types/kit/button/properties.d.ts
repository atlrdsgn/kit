declare enum ButtonSize {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
declare enum ButtonColor {
    CARBON = "CARBON",
    JADE = "JADE",
    ORANGE = "ORANGE",
    SAPPHIRE = "SAPPHIRE"
}
export declare const sharedCSS: {
    readonly fontVariantNumeric: "tabular-nums";
    readonly boxSizing: "border-box";
    readonly display: "flex";
    readonly flexDirection: "column";
    readonly justifyContent: "center";
    readonly alignItems: "center";
    readonly position: "relative";
    readonly gap: "4px";
    readonly transition: "all 0.2s ease-in-out";
    readonly willChange: "color, backgroundColor";
    readonly cursor: "pointer";
    readonly borderStyle: "solid";
    readonly WebkitUserSelect: "none";
    readonly MozUserSelect: "none";
    readonly MozTapHighlightColor: "rgba(0,0,0,0)";
};
export declare const buttonProperties: {
    readonly core: {
        readonly fontVariantNumeric: "tabular-nums";
        readonly boxSizing: "border-box";
        readonly display: "flex";
        readonly flexDirection: "column";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly position: "relative";
        readonly gap: "4px";
        readonly transition: "all 0.2s ease-in-out";
        readonly willChange: "color, backgroundColor";
        readonly cursor: "pointer";
        readonly borderStyle: "solid";
        readonly WebkitUserSelect: "none";
        readonly MozUserSelect: "none";
        readonly MozTapHighlightColor: "rgba(0,0,0,0)";
    };
    readonly text: {
        readonly userSelect: "none";
        readonly fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly overflow: "hidden";
        readonly textOverflow: "ellipsis";
    };
    readonly size: {
        readonly config: {
            readonly fontSize: {
                readonly XS: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly SM: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly MD: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly LG: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            readonly lineHeight: {
                readonly XS: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly SM: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly MD: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly LG: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            readonly common: {
                readonly userSelect: "none";
                readonly fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly textAlign: "center";
                readonly whiteSpace: "nowrap";
                readonly overflow: "hidden";
                readonly textOverflow: "ellipsis";
            };
            readonly padding: {
                readonly XS: "4px 11px";
                readonly SM: "6px 12px";
                readonly MD: "6px 14px";
                readonly LG: "8px 18px";
            };
            readonly borderWidth: {
                readonly XS: "1px";
                readonly SM: "1px";
                readonly MD: "1px";
                readonly LG: "2px";
            };
            readonly borderRadius: {
                readonly XS: "7px";
                readonly SM: "10px";
                readonly MD: "12px";
                readonly LG: "14px";
            };
        };
    };
    readonly color: {
        readonly config: {
            readonly background: {
                readonly CARBON: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly JADE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly ORANGE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly SAPPHIRE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            readonly color: {
                readonly CARBON: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly JADE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly ORANGE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly SAPPHIRE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            readonly borderColor: {
                readonly CARBON: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly JADE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly ORANGE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                readonly SAPPHIRE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            readonly boxShadow: {
                readonly CARBON: "0px 1px 2px -1px rgba(173, 181, 189, 0.25)";
                readonly JADE: "0px 1px 2px -1px rgba(64, 192, 87, 0.25)";
                readonly ORANGE: "0px 1px 2px -1px rgba(255, 191, 0, 0.25)";
                readonly SAPPHIRE: "0px 1px 2px -1px rgba(17, 12, 34, 0.12)";
            };
            readonly onHover: {
                readonly background: {
                    readonly CARBON: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    readonly JADE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    readonly ORANGE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    readonly SAPPHIRE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                readonly boxShadow: {
                    readonly CARBON: "0px 1px 2px 0px rgba(173, 181, 189, 0.40)";
                    readonly JADE: "0px 1px 2px 0px rgba(64, 192, 87, 0.40)";
                    readonly ORANGE: "0px 1px 2px 0px rgba(255, 191, 0, 0.40)";
                    readonly SAPPHIRE: "0px 1px 2px 0px rgba(17, 12, 34, 0.40)";
                };
            };
            readonly onFocus: {
                readonly boxShadow: {
                    readonly CARBON: "0px 0px 0px 3.5px rgba(173, 181, 189, 0.35), 0px 1px 2px 0px #ADB5BD";
                    readonly JADE: "0px 0px 0px 3.5px rgba(64, 192, 87, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)";
                    readonly ORANGE: "0px 0px 0px 3.5px rgba(253, 126, 20, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)";
                    readonly SAPPHIRE: "0px 0px 0px 3.5px rgba(103, 90, 162, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)";
                };
            };
        };
    };
};
export type CSSButtonProperties = keyof typeof buttonProperties;
export type ButtonSizes = keyof typeof ButtonSize;
export type VariantColors = keyof typeof ButtonColor;
export type CSSButtonSizeProperties = keyof typeof buttonProperties.size.config;
export type CSSButtonColorProperties = keyof typeof buttonProperties.color.config;
export {};
//# sourceMappingURL=properties.d.ts.map