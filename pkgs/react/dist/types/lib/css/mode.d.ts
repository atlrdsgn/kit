import type { StyleRule } from '@vanilla-extract/css';
export type CSSProps = Omit<StyleRule, 'selectors' | '@media' | '@supports'>;
export declare const colorModeSelectors: {
    light: string;
    dark: string;
};
interface ColorMode {
    lightMode?: CSSProps;
    darkMode?: CSSProps;
}
export declare const colorModeStyle: ({ lightMode, darkMode, }: ColorMode) => StyleRule;
export {};
//# sourceMappingURL=mode.d.ts.map