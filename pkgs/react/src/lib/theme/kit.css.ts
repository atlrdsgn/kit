import { createTheme } from '@vanilla-extract/css';
import { BASE, DARK } from './theme.css';
import { themeVars } from './vars.css';

/**
 * Create the base theme class.
 *
 * [kitClass] refers to a css class, representing the base theme.
 * [tokens] represents the generated tokens used for theming.
 */
export const [kitClass, kit] = createTheme(themeVars);

const lightTheme = createTheme(kit, BASE);
const darkTheme = createTheme(kit, DARK);

export const themes = {
  base: kitClass,
  light: lightTheme,
  dark: darkTheme,
};

export type Themes = keyof typeof themes;
export type Kit = typeof kit;
