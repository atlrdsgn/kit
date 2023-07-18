import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const btn = {
  primary: {
    background: `var(--slate6, ${kit.color.slate2})`,
    color: `var(--slate1, ${kit.color.slate9})`,
    border: `var(--slate2, ${kit.color.slate3})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,
  },
  secondary: {},
  jade: {
    background: `var(--jade6, ${kit.color.jade6})`,
    color: `var(--jade1, ${kit.color.jade1})`,
    border: `var(--jade9, ${kit.color.jade9})`,
    shadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,
  },
} as const;

const style_properties = {
  padding: {
    XSMALL: `6px 10px`,
    SMALL: `6px 14px`,
    MEDIUM: `10px 12px`,
    LARGE: `12px 18px`,
  },
  radii: {
    XSMALL: `9px`,
    SMALL: `9px`,
    MEDIUM: `12px`,
    LARGE: `14px`,
  },
  border: {
    XSMALL: `1.5px solid`,
    SMALL: `1.5px solid`,
    MEDIUM: `2px solid`,
    LARGE: `2px solid`,
  },
  shadows: {
    // slate_shadows
    SLATE: {
      INITIAL: {
        XS: `0px 1px 2px -1px rgba(0, 0, 0, 0.25)`,
        SM: `none`,
        MD: `none`,
        LG: `none`,
      },
      HOVER: {
        XS: `0px 2px 4px rgba(0, 0, 0, 0.3)`,
        SM: `none`,
        MD: `none`,
        LG: `none`,
      },
      FOCUS: {
        XS: `0px 1px 2px rgba(0, 0, 0, 0.25), 0px 0px 0px 3.5px rgba(0, 0, 0, 0.2)`,
        SM: `none`,
        MD: `0px 2px 4px rgba(17, 12, 34, 0.18), 0px 0px 0px 5px rgba(236, 236, 237, 1)`,
        LG: `0px 2px 4px rgba(17, 12, 34, 0.12), 0px 0px 0px 6px rgba(236, 236, 237, 1)`,
      },
    },
    // hyper_shadows
    HYPER: {
      INITIAL: {
        XS: `0px 1px 2px -1px rgba(102, 27, 95, 0.75)`,
        SM: `none`,
        MD: `none`,
        LG: `none`,
      },
      HOVER: {
        XS: `0px 2px 4px rgba(102, 27, 95, 0.3)`,
        SM: `0px 3px 6px -1px rgba(102, 27, 95, 0.4)`,
        MD: `none`,
        LG: `none`,
      },
      FOCUS: {
        XS: `0px 1px 2px rgba(102, 27, 95, 0.3), 0px 0px 0px 3.5px rgba(226, 220, 255, 1)`,
        SM: `0px 1px 2px rgba(102, 27, 95, 0.3), 0px 0px 0px 4.5px rgba(255, 105, 241, 0.2)`,
        MD: `none`,
        LG: `none`,
      },
    },
  },
} as const;

const sp = style_properties;

/** ---------------------------------------------- */

const SIZE_MAP = {
  xs: {
    fontSize: kit.font.size.MINI,
    lineHeight: kit.font.lineheight.MINI,
    padding: sp.padding.XSMALL,
    border: sp.border.XSMALL,
    borderRadius: sp.radii.XSMALL,
  },
  sm: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
    padding: sp.padding.SMALL,
    border: sp.border.SMALL,
    borderRadius: sp.radii.SMALL,
  },
  md: {
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
    padding: sp.padding.MEDIUM,
    border: sp.border.MEDIUM,
    borderRadius: sp.radii.MEDIUM,
  },
  lg: {
    fontSize: kit.font.size.LG,
    lineHeight: kit.font.lineheight.LG,
    padding: sp.padding.LARGE,
    border: sp.border.LARGE,
    borderRadius: sp.radii.LARGE,
  },
} as const;

const COLOR_MAP = {
  slate: {
    backgroundColor: btn.primary.background,
    borderColor: btn.primary.border,
    color: btn.primary.color,
    boxShadow: btn.primary.shadow,
  },
  jade: {
    backgroundColor: btn.jade.background,
    borderColor: btn.jade.border,
    color: btn.jade.color,
    boxShadow: btn.jade.shadow,
  },
} as const;

/** ------------------------------------------------ */

const size = styleVariants(SIZE_MAP, (value) => ({
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
  padding: value.padding,
  border: value.border,
  borderRadius: value.borderRadius,

  ':hover': {},
  ':focus': {},
}));

const variant = styleVariants(COLOR_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,

  ':hover': {},
  ':focus': {},
}));

/** --------------------------------------------- */

const textStyle = {
  textAlign: 'center',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,
  letterSpacing: '-0.2px',
} as const;

const BUTTON_BASE = style({
  ...textStyle,

  boxSizing: 'border-box',
  userSelect: 'none',
  outline: 0,
  cursor: 'pointer',
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  position: 'relative',
  verticalAlign: 'middle',
  transition: '0.2s cubic-bezier(0.3, 0, 0.5, 1)',
  transitionProperty: 'color, backgroundColor, borderColor',
  willChange: 'color, backgroundColor, borderColor, boxShadow',

  ':hover': {},
  ':focus': {},
  ':active': {},
  ':disabled': {},

  selectors: {},
});

/** -------------------------------------------- */

export type ButtonSize = keyof typeof size;
export type ButtonVariant = keyof typeof variant;
export type ButtonVariantProps = RecipeVariants<typeof button>;
export const button = recipe({
  base: BUTTON_BASE,
  variants: { size, variant },
  defaultVariants: {
    size: 'sm',
    variant: 'slate',
  },
});
