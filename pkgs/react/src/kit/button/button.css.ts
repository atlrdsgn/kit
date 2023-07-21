import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const btn = {
  primary: {
    background: `var(--sapphire6, ${kit.color.sapphire4})`,
    color: `var(--carbon0, ${kit.color.carbon0})`,
    border: `var(--sapphire5, ${kit.color.sapphire5})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

    HOVER: {
      background: `var(--sapphire5, ${kit.color.sapphire5})`,
    },
  },
  secondary: {
    background: `var(--carbon2, ${kit.color.carbon2})`,
    color: `var(--carbon9, ${kit.color.carbon9})`,
    border: `var(--carbon3, ${kit.color.carbon3})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

    HOVER: {
      background: `var(--carbon3, ${kit.color.carbon3})`,
    },
  },
  jade: {
    background: `var(--jade6, ${kit.color.jade7})`,
    color: `var(--jade1, ${kit.color.white})`,
    border: `var(--jade9, ${kit.color.jade8})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

    HOVER: {
      background: `var(--jade5, ${kit.color.jade8})`,
    },
  },

  // ...

  padding: {
    XSMALL: `4px 10px`,
    SMALL: `4px 14px`,
    MEDIUM: `5px 12px`,
    LARGE: `6px 18px`,
  },

  // ...

  radii: {
    XSMALL: `9px`,
    SMALL: `10px`,
    MEDIUM: `12px`,
    LARGE: `14px`,
  },

  // ...

  border: {
    XSMALL: `1.5px solid`,
    SMALL: `1.5px solid`,
    MEDIUM: `2px solid`,
    LARGE: `2px solid`,
  },
} as const;

/** ---------------------------------------------- */

const SIZE_MAP = {
  xs: {
    fontSize: kit.font.size.MINI,
    lineHeight: kit.font.lineheight.MINI,
    padding: btn.padding.XSMALL,
    border: btn.border.XSMALL,
    borderRadius: btn.radii.XSMALL,
  },
  sm: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
    padding: btn.padding.SMALL,
    border: btn.border.SMALL,
    borderRadius: btn.radii.SMALL,
  },
  md: {
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
    padding: btn.padding.MEDIUM,
    border: btn.border.MEDIUM,
    borderRadius: btn.radii.MEDIUM,
  },
  lg: {
    fontSize: kit.font.size.LG,
    lineHeight: kit.font.lineheight.LG,
    padding: btn.padding.LARGE,
    border: btn.border.LARGE,
    borderRadius: btn.radii.LARGE,
  },
} as const;

const COLOR_MAP = {
  primary: {
    backgroundColor: btn.primary.background,
    borderColor: btn.primary.border,
    color: btn.primary.color,
    boxShadow: btn.primary.shadow,
    hBg: btn.primary.HOVER.background,
  },
  secondary: {
    backgroundColor: btn.secondary.background,
    borderColor: btn.secondary.border,
    color: btn.secondary.color,
    boxShadow: btn.secondary.shadow,
    hBg: btn.secondary.HOVER.background,
  },
  jade: {
    backgroundColor: btn.jade.background,
    borderColor: btn.jade.border,
    color: btn.jade.color,
    boxShadow: btn.jade.shadow,
    hBg: btn.jade.HOVER.background,
  },
} as const;

const FONT_MAP = {
  system: { fontFamily: kit.font.family.system },
  mono: { fontFamily: kit.font.family.mono },
} as const;

/** ------------------------------------------------ */

const size = styleVariants(SIZE_MAP, (value) => ({
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
  padding: value.padding,
  border: value.border,
  borderRadius: value.borderRadius,
}));

const variant = styleVariants(COLOR_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  borderColor: value.borderColor,
  boxShadow: value.boxShadow,

  ':hover': {
    backgroundColor: value.hBg,
  },
}));

const font = styleVariants(FONT_MAP, (value) => ({
  fontFamily: value.fontFamily,
}));

/** --------------------------------------------- */

const textStyle = {
  cursor: 'pointer',
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  userSelect: 'none',
  fontWeight: kit.font.weight.MEDIUM,
  textAlign: 'center',
  letterbtnacing: '-0.2px',
} as const;

const BUTTON_BASE = style({
  ...textStyle,

  boxSizing: 'border-box',
  outline: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  position: 'relative',
  // verticalAlign: 'middle',
  transition: 'all 0.6s ease-in-out',
  willChange: 'color, backgroundColor, borderColor, boxShadow',

  /*
  ':hover': {},
  ':focus': {},
  ':active': {},
  ':disabled': {},
  */

  selectors: {},
});

/** -------------------------------------------- */

export type ButtonSize = keyof typeof size;
export type ButtonVariant = keyof typeof variant;
export type ButtonVariantProps = RecipeVariants<typeof button>;
export const button = recipe({
  base: BUTTON_BASE,
  variants: { size, variant, font },
  defaultVariants: {
    size: 'sm',
    variant: 'primary',
    font: 'system',
  },
});
