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

    // core
    jade0: null,
    jade1: null,
    jade2: null,
    jade3: null,
    jade4: null,
    jade5: null,
    jade6: null,
    jade7: null,
    jade8: null,
    jade9: null,
    jade10: null,
    jade11: null,
    jade12: null,

    sapphire0: null,
    sapphire1: null,
    sapphire2: null,
    sapphire3: null,
    sapphire4: null,
    sapphire5: null,
    sapphire6: null,
    sapphire7: null,
    sapphire8: null,
    sapphire9: null,
    sapphire10: null,
    sapphire11: null,
    sapphire12: null,

    peach0: null,
    peach1: null,
    peach2: null,
    peach3: null,
    peach4: null,
    peach5: null,
    peach6: null,
    peach7: null,
    peach8: null,
    peach9: null,
    peach10: null,
    peach11: null,
    peach12: null,

    // neutrals
    carbon0: null,
    carbon1: null,
    carbon2: null,
    carbon3: null,
    carbon4: null,
    carbon5: null,
    carbon6: null,
    carbon7: null,
    carbon8: null,
    carbon9: null,
    carbon10: null,
    carbon11: null,
    carbon12: null,

    slate0: null,
    slate1: null,
    slate2: null,
    slate3: null,
    slate4: null,
    slate5: null,
    slate6: null,
    slate7: null,
    slate8: null,
    slate9: null,
    slate10: null,
    slate11: null,
    slate12: null,

    // neon
    azure0: null,
    azure1: null,
    azure2: null,
    azure3: null,
    azure4: null,
    azure5: null,
    azure6: null,
    azure7: null,
    azure8: null,
    azure9: null,
    azure10: null,
    azure11: null,
    azure12: null,

    cherry0: null,
    cherry1: null,
    cherry2: null,
    cherry3: null,
    cherry4: null,
    cherry5: null,
    cherry6: null,
    cherry7: null,
    cherry8: null,
    cherry9: null,
    cherry10: null,
    cherry11: null,
    cherry12: null,

    lime0: null,
    lime1: null,
    lime2: null,
    lime3: null,
    lime4: null,
    lime5: null,
    lime6: null,
    lime7: null,
    lime8: null,
    lime9: null,
    lime10: null,
    lime11: null,
    lime12: null,

    lemon0: null,
    lemon1: null,
    lemon2: null,
    lemon3: null,
    lemon4: null,
    lemon5: null,
    lemon6: null,
    lemon7: null,
    lemon8: null,
    lemon9: null,
    lemon10: null,
    lemon11: null,
    lemon12: null,

    /*
  // core
  ...jade,
  ...sapphire,
  ...peach,

  // neutrals
  ...carbon,
  ...slate,

  // neon
  ...azure,
  ...cherry,
  ...lime,
  ...lemon,
    */
  },
  // ..
});

export type ColorTypes = {
  [key in keyof typeof themeVars.color]: string;
};
