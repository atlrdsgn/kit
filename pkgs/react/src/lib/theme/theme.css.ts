import { kitColour, darkKitColour } from '../colour';
import type { ColorTypes } from './vars.css';

export const theme = {
  media: {
    breakpoints: {
      small: '460px',
      medium: '768px',
      large: '1024px',
      xlarge: '1200px',
    },
    colorModes: {
      LIGHT: '(prefers-color-scheme: light)',
      DARK: '(prefers-color-scheme: dark)',
    },
  },

  font: {
    family: {
      system: `'-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif'`,
      mono: `'SF Mono', monospace`,
    },
    heading: {
      H1: '2.25rem', // 36px
      H2: '1.875rem', // 30px
      H3: '1.5rem', // 24px
      H4: '1.25rem', // 20px
      H5: '1.125rem', // 18px
      H6: '1rem', // 16px
    },
    size: {
      MINI: '0.688rem', // 11px
      XS: '0.75rem', // 12px
      SM: '0.875rem', // 14px
      MD: '1rem', // 16px
      LG: '1.125rem', // 18px
      XL: '1.25rem', // 20px
      XXL: '1.5rem', // 24px
      ['3XL']: '1.875rem', // 30px
      ['4XL']: '2.25rem', // 36px
      ['5XL']: '3rem', // 48px
      ['6XL']: '3.75rem', // 60px
      ['7XL']: '4.5rem', // 72px
      ['8XL']: '6rem', // 96px
      ['9XL']: '8rem', // 128px
    },
    lineheight: {
      /**
       *
       * these should have the exact same
       * tokens as font.size.
       *
       * (not values, but keys)
       *
       */
      MINI: '14px',
      XS: '16px',
      SM: '20px',
      MD: '24px',
      LG: '28px',
      XL: '28px',
      XXL: '32px',
      ['3XL']: '36px',
      ['4XL']: '40px',
      ['5XL']: '42px',
      ['6XL']: '44px',
      ['7XL']: '46px',
      ['8XL']: '48px',
      ['9XL']: '50px',
    },
    weight: {
      SUPRLITE: '100',
      ULTRALITE: '200',
      LITE: '300',
      REGULAR: '400',
      MEDIUM: '500',
      SEMIBOLD: '600',
      BOLD: '700',
      HEAVY: '800',
      BLACK: '900',
    },
  },

  radii: {
    ZERO: '0px',
    NO: '0px',
    DF: '8px',
    XS: '10px',
    SM: '11px',
    MD: '13px',
    LG: '16px',
    XL: '18px',
    XXL: '20px',
    PILL: '1000px',
  },

  space: {
    ZERO: '0',
    NO: '0',
    DF: '16px',
    APX: '1px',
    BPX: '2px',
    CPX: '4px',
    DPX: '6px',
    EPX: '8px',
    FPX: '10px',
    GPX: '12px', // sect.sm
    HPX: '14px',
    IPX: '16px',
    JPX: '18px',
    KPX: '20px', // sect.vw
    LPX: '24px',
    MPX: '28px', // sect.md
    NPX: '32px',
    OPX: '36px',
    PPX: '40px',
    QPX: '44px',
    RPX: '48px',
    SPX: '56px', // sect.lg
    TPX: '64px',
    UPX: '72px',
    VPX: '96px',
    WPX: '128px',
    XPX: '192px',
    YPX: '240px',
    ZPX: '320px',
  },

  z: {
    indice: {
      ZERO: '0',
      DF: '1',
      LOW: '2',
      MED: '10',
      HIGH: '30',
      TOP: '100',
      MAX: '99999',
    },
  },

  shadow: {
    NO: 'none',
    DF: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    LOW: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    MED: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    HIGH: '0px 12px 24px rgba(0, 0, 0, 0.1)',
  },

  // ..
} as const;

const lightModeColors: ColorTypes = {
  ...kitColour,
};

const darkModeColors: ColorTypes = {
  ...darkKitColour,
};

export const BASE = {
  ...theme,
  color: {
    ...lightModeColors,
  },
};

export const DARK = {
  ...theme,
  color: {
    ...darkModeColors,
  },
};

export type Theme = typeof BASE;
export type BaseThemeColour = keyof typeof lightModeColors;
export type DarkThemeColour = keyof typeof darkModeColors;
export type ThemeColour = BaseThemeColour | DarkThemeColour;
