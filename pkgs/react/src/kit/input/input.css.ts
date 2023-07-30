import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { inputProperties as inpx } from './input.properties';
import { kit } from '../../lib';

export const inputFlex = style({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '6px',
  margin: 'auto',
  height: 'auto',
  width: '100%',
  maxWidth: '245px',
});

export const inputLabel = style({
  boxSizing: 'border-box',
  fontVariantNumeric: 'tabular-nums',
  position: 'relative',

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.XS,

  color: kit.color.carbon6,
  letterSpacing: 'normal',
  textAlign: 'left',

  marginLeft: '3px',
  marginRight: '3px',
  padding: '0px',
});

export const inputTypeNumber = style({
  ...inpx.number,
});

/** ---------------------------------------------- */

const SIZE_MAP = {
  xs: {
    fontSize: inpx.size.fontSize.XS,
    lineHeight: inpx.size.lineHeight.XS,
    padding: inpx.size.padding.XS,
    borderWidth: inpx.size.borderWidth.XS,
    borderRadius: inpx.size.borderRadius.XS,
  },
  sm: {
    fontSize: inpx.size.fontSize.SM,
    lineHeight: inpx.size.lineHeight.SM,
    padding: inpx.size.padding.SM,
    borderWidth: inpx.size.borderWidth.SM,
    borderRadius: inpx.size.borderRadius.SM,
  },
  md: {
    fontSize: inpx.size.fontSize.MD,
    lineHeight: inpx.size.lineHeight.MD,
    padding: inpx.size.padding.MD,
    borderWidth: inpx.size.borderWidth.MD,
    borderRadius: inpx.size.borderRadius.MD,
  },
} as const;

const COLOR_MAP = {
  carbon: {
    backgroundColor: inpx.variant.backgroundColor.CARBON,
    color: inpx.variant.color.CARBON,
    borderColor: inpx.variant.borderColor.CARBON,
    H: {
      backgroundColor: inpx.variant.onHover.backgroundColor.CARBON,
      borderColor: inpx.variant.onHover.borderColor.CARBON,
      boxShadow: inpx.variant.onHover.boxShadow.CARBON,
    },
    F: {
      backgroundColor: inpx.variant.onFocus.backgroundColor.CARBON,
      borderColor: inpx.variant.onFocus.borderColor.CARBON,
      boxShadow: inpx.variant.onFocus.boxShadow.CARBON,
    },
  },
  jade: {
    backgroundColor: inpx.variant.backgroundColor.JADE,
    color: inpx.variant.color.JADE,
    borderColor: inpx.variant.borderColor.JADE,
    H: {
      backgroundColor: inpx.variant.onHover.backgroundColor.JADE,
      borderColor: inpx.variant.onHover.borderColor.JADE,
      boxShadow: inpx.variant.onHover.boxShadow.JADE,
    },
    F: {
      backgroundColor: inpx.variant.onFocus.backgroundColor.JADE,
      borderColor: inpx.variant.onFocus.borderColor.JADE,
      boxShadow: inpx.variant.onFocus.boxShadow.JADE,
    },
  },
  orange: {
    backgroundColor: inpx.variant.backgroundColor.ORANGE,
    color: inpx.variant.color.ORANGE,
    borderColor: inpx.variant.borderColor.ORANGE,
    H: {
      backgroundColor: inpx.variant.onHover.backgroundColor.ORANGE,
      borderColor: inpx.variant.onHover.borderColor.ORANGE,
      boxShadow: inpx.variant.onHover.boxShadow.ORANGE,
    },
    F: {
      backgroundColor: inpx.variant.onFocus.backgroundColor.ORANGE,
      borderColor: inpx.variant.onFocus.borderColor.ORANGE,
      boxShadow: inpx.variant.onFocus.boxShadow.ORANGE,
    },
  },
  sapphire: {
    backgroundColor: inpx.variant.backgroundColor.SAPPHIRE,
    color: inpx.variant.color.SAPPHIRE,
    borderColor: inpx.variant.borderColor.SAPPHIRE,
    H: {
      backgroundColor: inpx.variant.onHover.backgroundColor.SAPPHIRE,
      borderColor: inpx.variant.onHover.borderColor.SAPPHIRE,
      boxShadow: inpx.variant.onHover.boxShadow.SAPPHIRE,
    },
    F: {
      backgroundColor: inpx.variant.onFocus.backgroundColor.SAPPHIRE,
      borderColor: inpx.variant.onFocus.borderColor.SAPPHIRE,
      boxShadow: inpx.variant.onFocus.boxShadow.SAPPHIRE,
    },
  },
} as const;

const inputSize = styleVariants(SIZE_MAP, (value) => ({
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
  padding: value.padding,
  borderRadius: value.borderRadius,
  borderWidth: value.borderWidth,
}));

const variant = styleVariants(COLOR_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  borderColor: value.borderColor,

  ':hover': {
    backgroundColor: value.H.backgroundColor,
    borderColor: value.H.borderColor,
    boxShadow: value.H.boxShadow,
  },
  ':focus': {
    backgroundColor: value.F.backgroundColor,
    borderColor: value.F.borderColor,
    boxShadow: value.F.boxShadow,
  },
}));

/** ------------------------------------------- */

const coreInput = style({
  ...inpx.core,

  appearance: 'none',
  borderStyle: 'solid',

  '::placeholder': {
    color: kit.color.carbon3,
    fontFamily: kit.font.family.system,
    fontWeight: kit.font.weight.REGULAR,
  },
});

export const input = recipe({
  base: coreInput,
  variants: {
    inputSize,
    variant,
  },
  defaultVariants: {
    inputSize: 'sm',
    variant: 'carbon',
  },
});

/** ---------------------------------------------- */

export type InputVariantTypes = RecipeVariants<typeof input>;
export type InputColorKeys = keyof typeof variant;
export type InputSizeKeys = keyof typeof inputSize;
