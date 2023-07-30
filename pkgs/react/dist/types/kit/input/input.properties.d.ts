/** ---------------------------------------------- */
declare enum InputSize {
    XS = "XS",
    SM = "SM",
    MD = "MD"
}
declare enum InputVariant {
    CARBON = "CARBON",
    JADE = "JADE",
    ORANGE = "ORANGE",
    SAPPHIRE = "SAPPHIRE"
}
export declare const inputProperties: {
    readonly core: {
        readonly boxSizing: "border-box";
        readonly display: "flex";
        readonly flexDirection: "row";
        readonly alignItems: "center";
        readonly justifyContent: "center";
        readonly gap: "10px";
        readonly width: "100%";
        readonly maxWidth: "245px";
        readonly margin: "auto";
        readonly fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly number: {
        readonly fontVariantNumeric: "tabular-nums";
        readonly boxSizing: "border-box";
        readonly display: "flex";
        readonly flexDirection: "row";
        readonly alignItems: "center";
        readonly justifyContent: "center";
        readonly gap: "10px";
        readonly width: "100%";
        readonly maxWidth: "245px";
        readonly margin: "auto";
        readonly fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly size: {
        readonly fontSize: {
            readonly XS: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            readonly SM: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            readonly MD: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        readonly lineHeight: {
            readonly XS: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            readonly SM: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            readonly MD: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        readonly padding: {
            readonly XS: "4px 12px";
            readonly SM: "6px 14px";
            readonly MD: "8px 16px";
        };
        readonly borderWidth: {
            readonly XS: "1.4px";
            readonly SM: "1.6px";
            readonly MD: "2px";
        };
        readonly borderRadius: {
            readonly XS: "9px";
            readonly SM: "10px";
            readonly MD: "12px";
        };
    };
    readonly variant: {
        readonly backgroundColor: {
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
        readonly onHover: {
            readonly backgroundColor: {
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
                readonly CARBON: "0px 1px 2px 0px rgba(134, 142, 150, 0.25)";
                readonly JADE: "0px 1px 4px 0px rgba(43, 138, 62, 0.25)";
                readonly ORANGE: "0px 1px 4px 0px rgba(232, 89, 12, 0.25)";
                readonly SAPPHIRE: "0px 1px 4px 0px rgba(74, 73, 126, 0.25)";
            };
        };
        readonly onFocus: {
            readonly backgroundColor: {
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
                readonly CARBON: "0px 0px 0px 4px rgba(134, 142, 150, 0.20), 0px 1px 2px 0px rgba(134, 142, 150, 0.40)";
                readonly JADE: "0px 0px 0px 4px rgba(81, 207, 102, 0.20), 0px 1px 2px 0px rgba(81, 207, 102, 0.40)";
                readonly ORANGE: "0px 0px 0px 4px rgba(255, 140, 0, 0.20), 0px 1px 2px 0px rgba(255, 140, 0, 0.40)";
                readonly SAPPHIRE: "0px 0px 0px 4px rgba(74, 73, 126, 0.20), 0px 1px 2px 0px rgba(74, 73, 126, 0.40)";
            };
        };
        readonly darkMode: {
            readonly backgroundColor: {
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
            readonly onHover: {
                readonly backgroundColor: {};
                readonly borderColor: {};
                readonly boxShadow: {};
            };
            readonly onFocus: {
                readonly backgroundColor: {};
                readonly borderColor: {};
                readonly boxShadow: {};
            };
        };
    };
};
export type InputSizes = keyof typeof InputSize;
export type InputVariants = keyof typeof InputVariant;
export type InputProperties = typeof inputProperties;
export {};
//# sourceMappingURL=input.properties.d.ts.map