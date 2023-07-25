export declare const theme: {
    readonly media: {
        readonly breakpoints: {
            readonly small: "460px";
            readonly medium: "768px";
            readonly large: "1024px";
            readonly xlarge: "1200px";
        };
        readonly colorModes: {
            readonly LIGHT: "(prefers-color-scheme: light)";
            readonly DARK: "(prefers-color-scheme: dark)";
        };
    };
    readonly font: {
        readonly family: {
            readonly system: "'-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif'";
            readonly mono: "'SF Mono', monospace";
        };
        readonly heading: {
            readonly H1: "2.25rem";
            readonly H2: "1.875rem";
            readonly H3: "1.5rem";
            readonly H4: "1.25rem";
            readonly H5: "1.125rem";
            readonly H6: "1rem";
        };
        readonly size: {
            readonly MINI: "0.688rem";
            readonly XS: "0.75rem";
            readonly SM: "0.875rem";
            readonly MD: "1rem";
            readonly LG: "1.125rem";
            readonly XL: "1.25rem";
            readonly XXL: "1.5rem";
            readonly "3XL": "1.875rem";
            readonly "4XL": "2.25rem";
            readonly "5XL": "3rem";
            readonly "6XL": "3.75rem";
            readonly "7XL": "4.5rem";
            readonly "8XL": "6rem";
            readonly "9XL": "8rem";
        };
        readonly lineheight: {
            /**
             *
             * these should have the exact same
             * tokens as font.size.
             *
             * (not values, but keys)
             *
             */
            readonly MINI: "0.875rem";
            readonly XS: "1rem";
            readonly SM: "1.25rem";
            readonly MD: "1.5rem";
            readonly LG: "1.75rem";
            readonly XL: "1.75rem";
            readonly XXL: "2rem";
            readonly "3XL": "2.25rem";
            readonly "4XL": "2.5rem";
            readonly "5XL": "1";
            readonly "6XL": "1";
            readonly "7XL": "1";
            readonly "8XL": "1";
            readonly "9XL": "1";
        };
        readonly weight: {
            readonly SUPRLITE: "100";
            readonly ULTRALITE: "200";
            readonly LITE: "300";
            readonly REGULAR: "400";
            readonly MEDIUM: "500";
            readonly SEMIBOLD: "600";
            readonly BOLD: "700";
            readonly HEAVY: "800";
            readonly BLACK: "900";
        };
    };
    readonly radii: {
        readonly ZERO: "0px";
        readonly NO: "0px";
        readonly DF: "8px";
        readonly XS: "10px";
        readonly SM: "11px";
        readonly MD: "13px";
        readonly LG: "16px";
        readonly XL: "18px";
        readonly XXL: "20px";
        readonly PILL: "1000px";
    };
    readonly space: {
        readonly ZERO: "0";
        readonly NO: "0";
        readonly DF: "16px";
        readonly APX: "1px";
        readonly BPX: "2px";
        readonly CPX: "4px";
        readonly DPX: "6px";
        readonly EPX: "8px";
        readonly FPX: "10px";
        readonly GPX: "12px";
        readonly HPX: "14px";
        readonly IPX: "16px";
        readonly JPX: "18px";
        readonly KPX: "20px";
        readonly LPX: "24px";
        readonly MPX: "28px";
        readonly NPX: "32px";
        readonly OPX: "36px";
        readonly PPX: "40px";
        readonly QPX: "44px";
        readonly RPX: "48px";
        readonly SPX: "56px";
        readonly TPX: "64px";
        readonly UPX: "72px";
        readonly VPX: "96px";
        readonly WPX: "128px";
        readonly XPX: "192px";
        readonly YPX: "240px";
        readonly ZPX: "320px";
    };
    readonly z: {
        readonly indice: {
            readonly ZERO: "0";
            readonly DF: "1";
            readonly LOW: "2";
            readonly MED: "10";
            readonly HIGH: "30";
            readonly TOP: "100";
            readonly MAX: "99999";
        };
    };
    readonly shadow: {
        readonly NO: "none";
        readonly DF: "0px 4px 8px rgba(0, 0, 0, 0.1)";
        readonly LOW: "0px 4px 8px rgba(0, 0, 0, 0.1)";
        readonly MED: "0px 8px 16px rgba(0, 0, 0, 0.1)";
        readonly HIGH: "0px 12px 24px rgba(0, 0, 0, 0.1)";
    };
};
export declare const BASE: {
    color: {
        transparent: string;
        current: string;
        white: string;
        black: string;
        jade0: string;
        jade1: string;
        jade2: string;
        jade3: string;
        jade4: string;
        jade5: string;
        jade6: string;
        jade7: string;
        jade8: string;
        jade9: string;
        jade10: string;
        jade11: string;
        jade12: string;
        sapphire0: string;
        sapphire1: string;
        sapphire2: string;
        sapphire3: string;
        sapphire4: string;
        sapphire5: string;
        sapphire6: string;
        sapphire7: string;
        sapphire8: string;
        sapphire9: string;
        sapphire10: string;
        sapphire11: string;
        sapphire12: string;
        orange0: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        carbon0: string;
        carbon1: string;
        carbon2: string;
        carbon3: string;
        carbon4: string;
        carbon5: string;
        carbon6: string;
        carbon7: string;
        carbon8: string;
        carbon9: string;
        carbon10: string;
        carbon11: string;
        carbon12: string;
        grey0: string;
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
        grey5: string;
        grey6: string;
        grey7: string;
        grey8: string;
        grey9: string;
        grey10: string;
        grey11: string;
        grey12: string;
        slate0: string;
        slate1: string;
        slate2: string;
        slate3: string;
        slate4: string;
        slate5: string;
        slate6: string;
        slate7: string;
        slate8: string;
        slate9: string;
        slate10: string;
        slate11: string;
        slate12: string;
        azure0: string;
        azure1: string;
        azure2: string;
        azure3: string;
        azure4: string;
        azure5: string;
        azure6: string;
        azure7: string;
        azure8: string;
        azure9: string;
        azure10: string;
        azure11: string;
        azure12: string;
        cherry0: string;
        cherry1: string;
        cherry2: string;
        cherry3: string;
        cherry4: string;
        cherry5: string;
        cherry6: string;
        cherry7: string;
        cherry8: string;
        cherry9: string;
        cherry10: string;
        cherry11: string;
        cherry12: string;
        lime0: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        lemon0: string;
        lemon1: string;
        lemon2: string;
        lemon3: string;
        lemon4: string;
        lemon5: string;
        lemon6: string;
        lemon7: string;
        lemon8: string;
        lemon9: string;
        lemon10: string;
        lemon11: string;
        lemon12: string;
    };
    media: {
        readonly breakpoints: {
            readonly small: "460px";
            readonly medium: "768px";
            readonly large: "1024px";
            readonly xlarge: "1200px";
        };
        readonly colorModes: {
            readonly LIGHT: "(prefers-color-scheme: light)";
            readonly DARK: "(prefers-color-scheme: dark)";
        };
    };
    font: {
        readonly family: {
            readonly system: "'-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif'";
            readonly mono: "'SF Mono', monospace";
        };
        readonly heading: {
            readonly H1: "2.25rem";
            readonly H2: "1.875rem";
            readonly H3: "1.5rem";
            readonly H4: "1.25rem";
            readonly H5: "1.125rem";
            readonly H6: "1rem";
        };
        readonly size: {
            readonly MINI: "0.688rem";
            readonly XS: "0.75rem";
            readonly SM: "0.875rem";
            readonly MD: "1rem";
            readonly LG: "1.125rem";
            readonly XL: "1.25rem";
            readonly XXL: "1.5rem";
            readonly "3XL": "1.875rem";
            readonly "4XL": "2.25rem";
            readonly "5XL": "3rem";
            readonly "6XL": "3.75rem";
            readonly "7XL": "4.5rem";
            readonly "8XL": "6rem";
            readonly "9XL": "8rem";
        };
        readonly lineheight: {
            /**
             *
             * these should have the exact same
             * tokens as font.size.
             *
             * (not values, but keys)
             *
             */
            readonly MINI: "0.875rem";
            readonly XS: "1rem";
            readonly SM: "1.25rem";
            readonly MD: "1.5rem";
            readonly LG: "1.75rem";
            readonly XL: "1.75rem";
            readonly XXL: "2rem";
            readonly "3XL": "2.25rem";
            readonly "4XL": "2.5rem";
            readonly "5XL": "1";
            readonly "6XL": "1";
            readonly "7XL": "1";
            readonly "8XL": "1";
            readonly "9XL": "1";
        };
        readonly weight: {
            readonly SUPRLITE: "100";
            readonly ULTRALITE: "200";
            readonly LITE: "300";
            readonly REGULAR: "400";
            readonly MEDIUM: "500";
            readonly SEMIBOLD: "600";
            readonly BOLD: "700";
            readonly HEAVY: "800";
            readonly BLACK: "900";
        };
    };
    radii: {
        readonly ZERO: "0px";
        readonly NO: "0px";
        readonly DF: "8px";
        readonly XS: "10px";
        readonly SM: "11px";
        readonly MD: "13px";
        readonly LG: "16px";
        readonly XL: "18px";
        readonly XXL: "20px";
        readonly PILL: "1000px";
    };
    space: {
        readonly ZERO: "0";
        readonly NO: "0";
        readonly DF: "16px";
        readonly APX: "1px";
        readonly BPX: "2px";
        readonly CPX: "4px";
        readonly DPX: "6px";
        readonly EPX: "8px";
        readonly FPX: "10px";
        readonly GPX: "12px";
        readonly HPX: "14px";
        readonly IPX: "16px";
        readonly JPX: "18px";
        readonly KPX: "20px";
        readonly LPX: "24px";
        readonly MPX: "28px";
        readonly NPX: "32px";
        readonly OPX: "36px";
        readonly PPX: "40px";
        readonly QPX: "44px";
        readonly RPX: "48px";
        readonly SPX: "56px";
        readonly TPX: "64px";
        readonly UPX: "72px";
        readonly VPX: "96px";
        readonly WPX: "128px";
        readonly XPX: "192px";
        readonly YPX: "240px";
        readonly ZPX: "320px";
    };
    z: {
        readonly indice: {
            readonly ZERO: "0";
            readonly DF: "1";
            readonly LOW: "2";
            readonly MED: "10";
            readonly HIGH: "30";
            readonly TOP: "100";
            readonly MAX: "99999";
        };
    };
    shadow: {
        readonly NO: "none";
        readonly DF: "0px 4px 8px rgba(0, 0, 0, 0.1)";
        readonly LOW: "0px 4px 8px rgba(0, 0, 0, 0.1)";
        readonly MED: "0px 8px 16px rgba(0, 0, 0, 0.1)";
        readonly HIGH: "0px 12px 24px rgba(0, 0, 0, 0.1)";
    };
};
export declare const DARK: {
    color: {
        transparent: string;
        current: string;
        white: string;
        black: string;
        jade0: string;
        jade1: string;
        jade2: string;
        jade3: string;
        jade4: string;
        jade5: string;
        jade6: string;
        jade7: string;
        jade8: string;
        jade9: string;
        jade10: string;
        jade11: string;
        jade12: string;
        sapphire0: string;
        sapphire1: string;
        sapphire2: string;
        sapphire3: string;
        sapphire4: string;
        sapphire5: string;
        sapphire6: string;
        sapphire7: string;
        sapphire8: string;
        sapphire9: string;
        sapphire10: string;
        sapphire11: string;
        sapphire12: string;
        orange0: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        carbon0: string;
        carbon1: string;
        carbon2: string;
        carbon3: string;
        carbon4: string;
        carbon5: string;
        carbon6: string;
        carbon7: string;
        carbon8: string;
        carbon9: string;
        carbon10: string;
        carbon11: string;
        carbon12: string;
        grey0: string;
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
        grey5: string;
        grey6: string;
        grey7: string;
        grey8: string;
        grey9: string;
        grey10: string;
        grey11: string;
        grey12: string;
        slate0: string;
        slate1: string;
        slate2: string;
        slate3: string;
        slate4: string;
        slate5: string;
        slate6: string;
        slate7: string;
        slate8: string;
        slate9: string;
        slate10: string;
        slate11: string;
        slate12: string;
        azure0: string;
        azure1: string;
        azure2: string;
        azure3: string;
        azure4: string;
        azure5: string;
        azure6: string;
        azure7: string;
        azure8: string;
        azure9: string;
        azure10: string;
        azure11: string;
        azure12: string;
        cherry0: string;
        cherry1: string;
        cherry2: string;
        cherry3: string;
        cherry4: string;
        cherry5: string;
        cherry6: string;
        cherry7: string;
        cherry8: string;
        cherry9: string;
        cherry10: string;
        cherry11: string;
        cherry12: string;
        lime0: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        lemon0: string;
        lemon1: string;
        lemon2: string;
        lemon3: string;
        lemon4: string;
        lemon5: string;
        lemon6: string;
        lemon7: string;
        lemon8: string;
        lemon9: string;
        lemon10: string;
        lemon11: string;
        lemon12: string;
    };
    media: {
        readonly breakpoints: {
            readonly small: "460px";
            readonly medium: "768px";
            readonly large: "1024px";
            readonly xlarge: "1200px";
        };
        readonly colorModes: {
            readonly LIGHT: "(prefers-color-scheme: light)";
            readonly DARK: "(prefers-color-scheme: dark)";
        };
    };
    font: {
        readonly family: {
            readonly system: "'-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif'";
            readonly mono: "'SF Mono', monospace";
        };
        readonly heading: {
            readonly H1: "2.25rem";
            readonly H2: "1.875rem";
            readonly H3: "1.5rem";
            readonly H4: "1.25rem";
            readonly H5: "1.125rem";
            readonly H6: "1rem";
        };
        readonly size: {
            readonly MINI: "0.688rem";
            readonly XS: "0.75rem";
            readonly SM: "0.875rem";
            readonly MD: "1rem";
            readonly LG: "1.125rem";
            readonly XL: "1.25rem";
            readonly XXL: "1.5rem";
            readonly "3XL": "1.875rem";
            readonly "4XL": "2.25rem";
            readonly "5XL": "3rem";
            readonly "6XL": "3.75rem";
            readonly "7XL": "4.5rem";
            readonly "8XL": "6rem";
            readonly "9XL": "8rem";
        };
        readonly lineheight: {
            /**
             *
             * these should have the exact same
             * tokens as font.size.
             *
             * (not values, but keys)
             *
             */
            readonly MINI: "0.875rem";
            readonly XS: "1rem";
            readonly SM: "1.25rem";
            readonly MD: "1.5rem";
            readonly LG: "1.75rem";
            readonly XL: "1.75rem";
            readonly XXL: "2rem";
            readonly "3XL": "2.25rem";
            readonly "4XL": "2.5rem";
            readonly "5XL": "1";
            readonly "6XL": "1";
            readonly "7XL": "1";
            readonly "8XL": "1";
            readonly "9XL": "1";
        };
        readonly weight: {
            readonly SUPRLITE: "100";
            readonly ULTRALITE: "200";
            readonly LITE: "300";
            readonly REGULAR: "400";
            readonly MEDIUM: "500";
            readonly SEMIBOLD: "600";
            readonly BOLD: "700";
            readonly HEAVY: "800";
            readonly BLACK: "900";
        };
    };
    radii: {
        readonly ZERO: "0px";
        readonly NO: "0px";
        readonly DF: "8px";
        readonly XS: "10px";
        readonly SM: "11px";
        readonly MD: "13px";
        readonly LG: "16px";
        readonly XL: "18px";
        readonly XXL: "20px";
        readonly PILL: "1000px";
    };
    space: {
        readonly ZERO: "0";
        readonly NO: "0";
        readonly DF: "16px";
        readonly APX: "1px";
        readonly BPX: "2px";
        readonly CPX: "4px";
        readonly DPX: "6px";
        readonly EPX: "8px";
        readonly FPX: "10px";
        readonly GPX: "12px";
        readonly HPX: "14px";
        readonly IPX: "16px";
        readonly JPX: "18px";
        readonly KPX: "20px";
        readonly LPX: "24px";
        readonly MPX: "28px";
        readonly NPX: "32px";
        readonly OPX: "36px";
        readonly PPX: "40px";
        readonly QPX: "44px";
        readonly RPX: "48px";
        readonly SPX: "56px";
        readonly TPX: "64px";
        readonly UPX: "72px";
        readonly VPX: "96px";
        readonly WPX: "128px";
        readonly XPX: "192px";
        readonly YPX: "240px";
        readonly ZPX: "320px";
    };
    z: {
        readonly indice: {
            readonly ZERO: "0";
            readonly DF: "1";
            readonly LOW: "2";
            readonly MED: "10";
            readonly HIGH: "30";
            readonly TOP: "100";
            readonly MAX: "99999";
        };
    };
    shadow: {
        readonly NO: "none";
        readonly DF: "0px 4px 8px rgba(0, 0, 0, 0.1)";
        readonly LOW: "0px 4px 8px rgba(0, 0, 0, 0.1)";
        readonly MED: "0px 8px 16px rgba(0, 0, 0, 0.1)";
        readonly HIGH: "0px 12px 24px rgba(0, 0, 0, 0.1)";
    };
};
//# sourceMappingURL=theme.css.d.ts.map