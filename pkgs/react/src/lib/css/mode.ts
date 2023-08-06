import type { StyleRule } from '@vanilla-extract/css';
import { themes } from '../theme/kit.css';

export type CSSProps = Omit<StyleRule, 'selectors' | '@media' | '@supports'>;

/**
 * [colorModeSelectors]
 *
 * The function colorModeStyle takes lightMode and darkMode styles as input.
 * If either lightMode or darkMode is provided, the function generates selectors
 * using makeSelector with corresponding styles for each color mode.
 *
 * The generated selectors and styles are combined into a single
 * object and returned as a Vanilla Extract StyleRule.
 */

export const colorModeSelectors = {
  light: `html:not(${themes.light}) &`,
  dark: `html${themes.dark} &`,
};

const makeSelector = (
  mode: keyof typeof colorModeSelectors,
  styles?: CSSProps,
) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [colorModeSelectors[mode]]: styles,
      };

interface ColorMode {
  lightMode?: CSSProps;
  darkMode?: CSSProps;
}

export const colorModeStyle = ({
  lightMode,
  darkMode,
}: ColorMode): StyleRule => ({
  ...(lightMode || darkMode
    ? {
        selectors: {
          ...makeSelector('light', lightMode),
          ...makeSelector('dark', darkMode),
        },
      }
    : {}),
});
