import { createThemeContract } from '@vanilla-extract/css';

export type ThemeContractProps = typeof themeVars;
export const themeVars = createThemeContract({
  media: {
    breakpoints: {
      small: null,
      medium: null,
      large: null,
      xlarge: null,
    },
    colorModes: {
      LIGHT: null,
      DARK: null,
    },
  },

  /**
   *
   * @typedesign
   */
  font: {
    family: {
      system: 'font-system',
      mono: 'font-mono',
    },
    heading: {
      H1: 'font-heading-h1',
      H2: 'font-heading-h2',
      H3: 'font-heading-h3',
      H4: 'font-heading-h4',
      H5: 'font-heading-h5',
      H6: 'font-heading-h6',
    },
    size: {
      MINI: 'font-size-mini',
      XS: 'font-size-xs',
      SM: 'font-size-sm',
      MD: 'font-size-md',
      LG: 'font-size-lg',
      XL: 'font-size-xl',
      XXL: 'font-size-xxl',
      ['3XL']: 'font-size-3xl',
      ['4XL']: 'font-size-4xl',
      ['5XL']: 'font-size-5xl',
      ['6XL']: 'font-size-6xl',
      ['7XL']: 'font-size-7xl',
      ['8XL']: 'font-size-8xl',
      ['9XL']: 'font-size-9xl',
    },
    lineheight: {
      MINI: 'line-height-mini',
      XS: 'line-height-xs',
      SM: 'line-height-sm',
      MD: 'line-height-md',
      LG: 'line-height-lg',
      XL: 'line-height-xl',
      XXL: 'line-height-xxl',
      ['3XL']: 'line-height-3xl',
      ['4XL']: 'line-height-4xl',
      ['5XL']: 'line-height-5xl',
      ['6XL']: 'line-height-6xl',
      ['7XL']: 'line-height-7xl',
      ['8XL']: 'line-height-8xl',
      ['9XL']: 'line-height-9xl',
    },
    weight: {
      SUPRLITE: 'font-weight-suprlite',
      ULTRALITE: 'font-weight-ultralite',
      LITE: 'font-weight-lite',
      REGULAR: 'font-weight-regular',
      MEDIUM: 'font-weight-medium',
      SEMIBOLD: 'font-weight-semibold',
      BOLD: 'font-weight-bold',
      HEAVY: 'font-weight-heavy',
      BLACK: 'font-weight-black',
    },
  },

  /**
   *
   * @radius
   */
  radii: {
    ZERO: null,
    NO: null,
    DF: null,
    XS: null,
    SM: null,
    MD: null,
    LG: null,
    XL: null,
    XXL: null,
    PILL: null,
  },

  /**
   *
   * @spacing
   */
  space: {
    ZERO: null,
    NO: null,
    DF: null,

    APX: null,
    BPX: null,
    CPX: null,
    DPX: null,
    EPX: null,
    FPX: null,
    GPX: null,
    HPX: null,
    IPX: null,
    JPX: null,
    KPX: null,
    LPX: null,
    MPX: null,
    NPX: null,
    OPX: null,
    PPX: null,
    QPX: null,
    RPX: null,
    SPX: null,
    TPX: null,
    UPX: null,
    VPX: null,
    WPX: null,
    XPX: null,
    YPX: null,
    ZPX: null,
  },

  /**
   *
   * @zindex
   */
  z: {
    indice: {
      ZERO: null,
      DF: null,
      LOW: null,
      MED: null,
      HIGH: null,
      TOP: null,
      MAX: null,
    },
  },

  /**
   *
   * @basicshadow
   */
  shadow: {
    NO: null,
    DF: null,
    LOW: null,
    MED: null,
    HIGH: null,
  },

  /**
   *
   * @color
   */
  color: {
    transparent: null,
    current: null,
    white: null,
    black: null,
  },
  // ..
});

export type ColorTypes = {
  [key in keyof typeof themeVars.color]: string;
};
