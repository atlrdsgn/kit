export const breakpoints = {
  small: 0,
  medium: 768,
  large: 1200,
  xlarge: 1600,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];

/** ----------------------------------- */

const lightModeBG = 'hsla(0, 0%, 100%, 0.2)';
const darkModeBG = 'hsla(0, 0%, 0%, 0.6)';
const blurz = {
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
        filter: 'none',
        WebkitFilter: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      },
      LITE: {
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: lightModeBG,
      },
      MEDIUM: {
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: lightModeBG,
      },
      HEAVY: {
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        backgroundColor: lightModeBG,
      },
      MAX: {
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        backgroundColor: lightModeBG,
      },
    },

    /** --------- darkMode --------- */
    dark: {
      NONE: {
        filter: 'none',
        WebkitFilter: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      },
      LITE: {
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: darkModeBG,
      },
      MEDIUM: {
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: darkModeBG,
      },
      HEAVY: {
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        backgroundColor: darkModeBG,
      },
      MAX: {
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        backgroundColor: darkModeBG,
      },
    },
  },
};

export type Blurz = typeof blurz;
export type BlurzTheme = typeof blurz.theme.light & typeof blurz.theme.dark;
export { blurz };
