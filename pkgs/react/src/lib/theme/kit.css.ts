import { createTheme } from '@vanilla-extract/css';
import { BASE, DARK } from './theme.css';
import { themeVars } from './vars.css';

/**
 * Create the base theme class.
 *
 * [kitClass] refers to a css class, representing the base theme.
 * [tokens] represents the generated tokens used for theming.
 */
export const [kitClass, tokens] = createTheme(themeVars);

const lightTheme = createTheme(tokens, BASE);
const darkTheme = createTheme(tokens, DARK);

export const kit = tokens;
export const themes = {
  base: kitClass,
  light: lightTheme,
  dark: darkTheme,
};
