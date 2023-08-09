import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { buttonProperties as btnx } from './properties';
import { kit } from '../../lib';

/** ---------------------------------------------- */

const SIZE_MAP = {
  xs: {
    fontSize: btnx.size.config.fontSize.XS,
    lineHeight: btnx.size.config.lineHeight.XS,
    padding: btnx.size.config.padding.XS,
    border: btnx.size.config.borderWidth.XS,
    borderRadius: btnx.size.config.borderRadius.XS,
  },
  sm: {
    fontSize: btnx.size.config.fontSize.SM,
    lineHeight: btnx.size.config.lineHeight.SM,
    padding: btnx.size.config.padding.SM,
    border: btnx.size.config.borderWidth.SM,
    borderRadius: btnx.size.config.borderRadius.SM,
  },
  md: {
    fontSize: btnx.size.config.fontSize.MD,
    lineHeight: btnx.size.config.lineHeight.MD,
    padding: btnx.size.config.padding.MD,
    border: btnx.size.config.borderWidth.MD,
    borderRadius: btnx.size.config.borderRadius.MD,
  },
  lg: {
    fontSize: btnx.size.config.fontSize.LG,
    lineHeight: btnx.size.config.lineHeight.LG,
    padding: btnx.size.config.padding.LG,
    border: btnx.size.config.borderWidth.LG,
    borderRadius: btnx.size.config.borderRadius.LG,
  },
} as const;

const COLOR_MAP = {
  carbon: {
    backgroundColor: btnx.color.config.background.CARBON,
    color: btnx.color.config.color.CARBON,
    borderColor: btnx.color.config.borderColor.CARBON,
    boxShadow: btnx.color.config.boxShadow.CARBON,
    H: {
      backgroundColor: btnx.color.config.onHover.background.CARBON,
      borderColor: btnx.color.config.borderColor.CARBON,
      boxShadow: btnx.color.config.onHover.boxShadow.CARBON,
    },
    F: { boxShadow: btnx.color.config.onFocus.boxShadow.CARBON },
  },
  jade: {
    backgroundColor: btnx.color.config.background.JADE,
    color: btnx.color.config.color.JADE,
    borderColor: btnx.color.config.borderColor.JADE,
    boxShadow: btnx.color.config.boxShadow.JADE,
    H: {
      backgroundColor: btnx.color.config.onHover.background.JADE,
      borderColor: btnx.color.config.borderColor.JADE,
      boxShadow: btnx.color.config.onHover.boxShadow.JADE,
    },
    F: { boxShadow: btnx.color.config.onFocus.boxShadow.JADE },
  },
  orange: {
    backgroundColor: btnx.color.config.background.ORANGE,
    color: btnx.color.config.color.ORANGE,
    borderColor: btnx.color.config.borderColor.ORANGE,
    boxShadow: btnx.color.config.boxShadow.ORANGE,
    H: {
      backgroundColor: btnx.color.config.onHover.background.ORANGE,
      borderColor: btnx.color.config.borderColor.ORANGE,
      boxShadow: btnx.color.config.onHover.boxShadow.ORANGE,
    },
    F: { boxShadow: btnx.color.config.onFocus.boxShadow.ORANGE },
  },
  sapphire: {
    backgroundColor: btnx.color.config.background.SAPPHIRE,
    color: btnx.color.config.color.SAPPHIRE,
    borderColor: btnx.color.config.borderColor.SAPPHIRE,
    boxShadow: btnx.color.config.boxShadow.SAPPHIRE,
    H: {
      backgroundColor: btnx.color.config.onHover.background.SAPPHIRE,
      borderColor: btnx.color.config.borderColor.SAPPHIRE,
      boxShadow: btnx.color.config.onHover.boxShadow.SAPPHIRE,
    },
    F: { boxShadow: btnx.color.config.onFocus.boxShadow.SAPPHIRE },
  },
  ghost: {
    backgroundColor: btnx.color.config.background.GHOST,
    color: btnx.color.config.color.GHOST,
    borderColor: btnx.color.config.borderColor.GHOST,
    boxShadow: btnx.color.config.boxShadow.GHOST,
    H: {
      backgroundColor: btnx.color.config.onHover.background.GHOST,
      borderColor: btnx.color.config.borderColor.GHOST,
      boxShadow: btnx.color.config.onHover.boxShadow.GHOST,
    },
    F: { boxShadow: btnx.color.config.onFocus.boxShadow.GHOST },
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
  borderWidth: value.border,
  borderRadius: value.borderRadius,
}));

const variant = styleVariants(COLOR_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  borderColor: value.borderColor,
  boxShadow: value.boxShadow,

  ':hover': {
    backgroundColor: value.H.backgroundColor,
    borderColor: value.H.borderColor,
    boxShadow: value.H.boxShadow,
  },

  ':focus': {
    outline: `-webkit-focus-ring-color auto 1px`,
    boxShadow: value.F.boxShadow,
  },
}));

const font = styleVariants(FONT_MAP, (value) => ({
  fontFamily: value.fontFamily,
}));

/** --------------------------------------------- */

const buttonBase = style({
  ...btnx.core,
  ...btnx.text,
});

/** -------------------------------------------- */

export type ButtonSize = keyof typeof size;
export type ButtonVariant = keyof typeof variant;
export type ButtonVariantProps = RecipeVariants<typeof button>;
export const button = recipe({
  base: buttonBase,
  variants: { size, variant, font },
  defaultVariants: {
    size: 'sm',
    variant: 'carbon',
    font: 'system',
  },
});
