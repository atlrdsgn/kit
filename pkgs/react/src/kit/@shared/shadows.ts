/**
 * shadows
 *
 *
 *
 *
 * @large_shadow
 */
export const shadowLarge = {
  LIGHT: {
    INITIAL: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
    HOVER: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
  },
  DARK: {
    INITIAL: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
    HOVER: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
  },
} as const;

/**
 *
 * @component_shadows
 */

const SLATE_RGB_3 = `140, 145, 158`;
const SLATE_RGB_4 = `102, 102, 102`;
const SLATE_RGB_5 = `43, 43, 43`;

export type ChipShadows = keyof typeof chipShadows;
export const chipShadows = {
  primary: {
    initial: `0px 1px 2px rgba(${SLATE_RGB_5}, 0.3)`, // 0px 1px 2px
    hover: `0px 2px 3px rgba(${SLATE_RGB_4}, 0.3)`, // 0px 2px 3px
    focus: `0px 1px 2px rgba(${SLATE_RGB_5}, 0.3), 0px 0px 1px 3px rgba(${SLATE_RGB_3}, 0.4)`, // 0px 1px 2px, 0px 0px 1px 3px
  },
} as const;

export const sharedShadows = {
  MINI: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,
  XS: `rgba(48, 49, 51, 0.05) 0px 0px 1px 0px, rgba(48, 49, 51, 0.1) 0px 1px 2px 0px`,
  SM: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,
  MD: `0px 3px 6px rgba(149, 157, 165, 0.15)`,
} as const;

export const shadows = sharedShadows;
