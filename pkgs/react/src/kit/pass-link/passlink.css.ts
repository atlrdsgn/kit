import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const SIZE_MAP = {
  xs: { fontSize: kit.font.size.XS, lineHeight: kit.font.lineheight.XS },
  sm: { fontSize: kit.font.size.SM, lineHeight: kit.font.lineheight.SM },
  md: { fontSize: kit.font.size.MD, lineHeight: kit.font.lineheight.MD },
  lg: { fontSize: kit.font.size.LG, lineHeight: kit.font.lineheight.LG },
  xl: { fontSize: kit.font.size.XL, lineHeight: kit.font.lineheight.XL },
  xxl: { fontSize: kit.font.size.XXL, lineHeight: kit.font.lineheight.XXL },
} as const;

const COLOR_MAP = {
  inherit: {
    color: kit.color.current,
    hov: { color: kit.color.current },
    act: { color: kit.color.current },
  },
  carbon: {
    color: kit.color.carbon6,
    hov: { color: kit.color.carbon5 },
    act: { color: kit.color.carbon5 },
  },
  jade: {
    color: kit.color.jade7,
    hov: { color: kit.color.jade6 },
    act: { color: kit.color.jade6 },
  },
  orange: {
    color: kit.color.orange5,
    hov: { color: kit.color.orange6 },
    act: { color: kit.color.orange6 },
  },
  sapphire: {
    color: kit.color.sapphire6,
    hov: { color: kit.color.sapphire5 },
    act: { color: kit.color.sapphire5 },
  },
} as const;

export const size = styleVariants(SIZE_MAP, (value) => ({
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
}));

const WEIGHT_MAP = {
  superlite: kit.font.weight.SUPRLITE,
  lite: kit.font.weight.LITE,
  normal: kit.font.weight.REGULAR,
  medium: kit.font.weight.MEDIUM,
  semibold: kit.font.weight.SEMIBOLD,
  bold: kit.font.weight.BOLD,
  heavy: kit.font.weight.HEAVY,
} as const;

export const variant = styleVariants(COLOR_MAP, (value) => ({
  color: value.color,
  ':hover': {
    color: value.hov.color,
  },
  ':active': {
    color: value.act.color,
  },
}));

export const font = styleVariants(kit.font.family, (value) => ({
  fontFamily: value,
}));

export const weight = styleVariants(WEIGHT_MAP, (value) => ({
  fontWeight: value,
}));

/** ------------------------------------------------------ */

export const baseLink = style({
  textDecoration: 'none',
  backgroundColor: 'transparent',
  margin: 0,
  padding: 0,
  fontWeight: kit.font.weight.MEDIUM,
  color: kit.color.current,
  // ...
  transition: 'all 0.2s ease-in-out',

  ':hover': {
    cursor: 'pointer',
  },

  ':focus': {
    outline: 'none',
    textDecoration: 'underline',
  },

  ':disabled': {
    color: kit.color.slate3,
  },
});

/** -------------------------------------------------------- */

export type LinkSizeProps = keyof typeof size;
export type LinkColorProps = keyof typeof variant;
export type LinkFontProps = keyof typeof font;
export type LinkWeightProps = keyof typeof weight;
export type LinkVariantProps = RecipeVariants<typeof link>;
export const link = recipe({
  base: baseLink,
  variants: { size, variant, font, weight },
  defaultVariants: {
    size: 'sm',
    variant: 'inherit',
    font: 'system',
    weight: 'medium',
  },
});
