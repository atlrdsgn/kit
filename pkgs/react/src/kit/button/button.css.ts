import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const btn = {
  primary: {
    background: `var(--sapphire6, ${kit.color.sapphire5})`,
    color: `var(--carbon0, ${kit.color.carbon0})`,
    border: `var(--sapphire5, ${kit.color.sapphire5})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

    HOVER: { background: `var(--sapphire5, ${kit.color.sapphire4})` },
    FOCUS: {
      boxShadow: `0px 0px 0px 3px #C2E2FF, 0px 2px 4px 0px rgba(17, 12, 34, 0.12)`,
    },
  },
  secondary: {
    background: `var(--carbon2, ${kit.color.carbon2})`,
    color: `var(--carbon9, ${kit.color.carbon9})`,
    border: `var(--carbon3, ${kit.color.carbon2})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

    HOVER: { background: `var(--carbon3, ${kit.color.carbon1})` },
    FOCUS: {
      boxShadow: `0px 0px 0px 3.5px rgba(0, 0, 0, 0.20), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
    },
  },
  jade: {
    background: `var(--kit-jade5, ${kit.color.jade5})`,
    color: `var(--kit-carbon0, ${kit.color.carbon0})`,
    border: `var(--kit-jade5, ${kit.color.jade5})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

    HOVER: { background: `var(--kit-jade6, ${kit.color.jade4})` },
    FOCUS: {
      boxShadow: `0px 0px 0px 3px #C6F1DD, 0px 2px 4px 0px rgba(17, 12, 34, 0.12)`,
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
    XSMALL: `7px`,
    SMALL: `9px`,
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

    hoverBg: btn.primary.HOVER.background,
    focusShadow: btn.primary.FOCUS.boxShadow,
  },
  secondary: {
    backgroundColor: btn.secondary.background,
    borderColor: btn.secondary.border,
    color: btn.secondary.color,
    boxShadow: btn.secondary.shadow,

    hoverBg: btn.secondary.HOVER.background,
    focusShadow: btn.secondary.FOCUS.boxShadow,
  },
  jade: {
    backgroundColor: btn.jade.background,
    borderColor: btn.jade.border,
    color: btn.jade.color,
    boxShadow: btn.jade.shadow,

    hoverBg: btn.jade.HOVER.background,
    focusShadow: btn.jade.FOCUS.boxShadow,
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
    backgroundColor: value.hoverBg,
  },

  ':focus': {
    boxShadow: value.focusShadow,
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
  transition: 'all 0.2s ease-in-out',
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
