export declare const breakpoints: {
    readonly small: 0;
    readonly medium: 768;
    readonly large: 1200;
    readonly xlarge: 1600;
};
export type Breakpoint = keyof typeof breakpoints;
export declare const breakpointNames: ("small" | "medium" | "large" | "xlarge")[];
declare const blurz: {
    /**
     *
     * @blurz
     * @author: chvndler
     *
     * !important:
     *
     * passing ...blurz to a style() object takes care of the following:
     * - backdropFilter
     * - WebkitBackdropFilter
     * - backgroundColor
     *
     * & provides values for light and dark mode (prefers-color-scheme)
     *
     * @usage:
     * ...blurz.theme.light.MEDIUM,
     *
     *  '(prefers-color-scheme: dark)': {
     *   ...blurz.theme.dark.MEDIUM,
     *  },
     */
    theme: {
        /** --------- lightMode --------- */
        light: {
            NONE: {
                filter: string;
                WebkitFilter: string;
                backdropFilter: string;
                WebkitBackdropFilter: string;
            };
            LITE: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
            MEDIUM: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
            HEAVY: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
            MAX: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
        };
        /** --------- darkMode --------- */
        dark: {
            NONE: {
                filter: string;
                WebkitFilter: string;
                backdropFilter: string;
                WebkitBackdropFilter: string;
            };
            LITE: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
            MEDIUM: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
            HEAVY: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
            MAX: {
                backdropFilter: string;
                WebkitBackdropFilter: string;
                backgroundColor: string;
            };
        };
    };
};
export type Blurz = typeof blurz;
export type BlurzTheme = typeof blurz.theme.light & typeof blurz.theme.dark;
export { blurz };
//# sourceMappingURL=constants.d.ts.map