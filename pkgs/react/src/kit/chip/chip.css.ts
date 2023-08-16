import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { chipShadows } from '../@shared/shadows';
import { kit } from '../../lib';

const BORDER_RADIUS_XSMALL = '7px';
const BORDER_RADIUS_SMALL = '8px';
const BORDER_RADIUS_MEDIUM = '12px';

const SIZE_MAP = {
  xs: {
    fontSize: kit.font.size.MINI,
    lineHeight: kit.font.lineheight.MINI,
    padding: '3px 6px',
    borderRadius: BORDER_RADIUS_XSMALL,
  },
  sm: {
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
    padding: '3px 6px',
    borderRadius: BORDER_RADIUS_SMALL,
  },
  md: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.size.MD,
    padding: '4px 8px',
    borderRadius: BORDER_RADIUS_MEDIUM,
  },
} as const;

const SHAPE_MAP = {
  rounded: {
    borderRadius: `${BORDER_RADIUS_SMALL} !important`,
  },
  pill: {
    borderRadius: '50px !important',
  },
} as const;

const VARIANT_COLOR_MAP = {
  /**
   * @carbon
   */
  carbon: {
    backgroundColor: kit.color.carbon1,
    border: `1px solid ${kit.color.carbon2}`,
    color: kit.color.carbon8,
    boxShadow: chipShadows.primary.initial,
    onHover: {
      backgroundColor: kit.color.carbon1,
      border: `1px solid ${kit.color.carbon3}`,
      color: kit.color.carbon8,
      boxShadow: chipShadows.primary.hover,
    },
    onFocus: {
      boxShadow: chipShadows.primary.focus,
    },
  },
  /**
   *
   * @jade
   */
  jade: {
    backgroundColor: kit.color.jade3,
    border: `1px solid ${kit.color.jade5}`,
    color: kit.color.jade7,
    boxShadow: chipShadows.primary.initial,
    onHover: {
      backgroundColor: kit.color.jade3,
      border: `1px solid ${kit.color.jade6}`,
      color: kit.color.jade7,
      boxShadow: chipShadows.primary.hover,
    },
    onFocus: {
      boxShadow: chipShadows.primary.focus,
    },
  },
  /**
   *
   * @orange
   */
  orange: {
    backgroundColor: kit.color.orange3,
    border: `1px solid ${kit.color.orange4}`,
    color: kit.color.orange8,
    boxShadow: chipShadows.primary.initial,
    onHover: {
      backgroundColor: kit.color.orange3,
      border: `1px solid ${kit.color.orange4}`,
      color: kit.color.orange9,
      boxShadow: chipShadows.primary.hover,
    },
    onFocus: {
      boxShadow: chipShadows.primary.focus,
    },
  },
} as const;

const PLEASE_REMOVE_SHADOW = {
  true: {
    boxShadow: `none !important`,
  },
} as const;

/** --------------------------------------------------- */

const size = styleVariants(
  SIZE_MAP,
  ({ fontSize, lineHeight, padding, borderRadius }) => ({
    fontSize,
    lineHeight,
    padding,
    borderRadius,
  }),
);

const shape = styleVariants(SHAPE_MAP, ({ borderRadius }) => ({
  borderRadius,
}));

const removeShadow = styleVariants(PLEASE_REMOVE_SHADOW, ({ boxShadow }) => ({
  boxShadow,
}));

const variant = styleVariants(VARIANT_COLOR_MAP, (variant) => ({
  backgroundColor: variant.backgroundColor,
  border: variant.border,
  color: variant.color,
  boxShadow: variant.boxShadow,

  ':hover': {
    backgroundColor: variant.onHover.backgroundColor,
    border: variant.onHover.border,
    color: variant.onHover.color,
    boxShadow: variant.onHover.boxShadow,
  },

  ':focus': {
    boxShadow: variant.onFocus.boxShadow,
  },
}));

/** --------------------------------------------------- */

const CHIP_ROOT = style({
  userSelect: 'none',
  textDecoration: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  whiteSpace: 'nowrap',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 'auto',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  fontVariantNumeric: 'tabular-nums',
  gap: '4px',
  maxWidth: 'fit-content',

  selectors: {
    '&::before': {
      boxSizing: 'border-box',
      content: '""',
    },
    '&::after': {
      boxSizing: 'border-box',
      content: '""',
    },
  },
});

export type ChipSizeProps = keyof typeof size;
export type ChipShapeProps = keyof typeof shape;
export type ChipVProps = keyof typeof variant;
export type ChipVariantProps = RecipeVariants<typeof chip>;
export const chip = recipe({
  base: CHIP_ROOT,
  variants: {
    size,
    shape,
    variant,
    //..
    removeShadow,
  },
  defaultVariants: {
    size: 'sm',
    shape: 'pill',
    variant: 'carbon',
    removeShadow: false,
  },
});
