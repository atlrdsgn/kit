import type { StyleRule } from '@vanilla-extract/css';

const noPrefers = (style: StyleRule) => ({
  '@media': {
    '(prefers-color-scheme: no-preference)': style,
  },
});

const prefersDark = (style: StyleRule) => ({
  '@media': {
    '(prefers-color-scheme: dark)': style,
  },
});

const prefersLight = (style: StyleRule) => ({
  '@media': {
    '(prefers-color-scheme: light)': style,
  },
});

export const colourQueries = {
  dark: prefersDark,
  light: prefersLight,

  none: noPrefers,
} as const;

export type ColourQuery = keyof typeof colourQueries;
export type PrefersDark = typeof colourQueries.dark;
export type PrefersNone = typeof colourQueries.none;
export type PrefersLight = typeof colourQueries.light;

/*
// usage

const divStyle = style({
  ...colourQueries.light({
    background: 'white',
  }),
  ...colourQueries.dark({
    background: 'black',
  }),
});
*/
