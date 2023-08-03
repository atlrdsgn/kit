import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';
import { kit } from '../../lib';

const SM_HEIGHT = '26px';
const MD_HEIGHT = '32px';
const LG_HEIGHT = '40px';
const GUTTER_WIDTH = '28px';

const SIZE_MAP = {
  small: {
    height: SM_HEIGHT,
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
  },
  medium: {
    height: MD_HEIGHT,
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
  },
  large: {
    height: LG_HEIGHT,
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
  },
} as const;

const SHAPE_MAP = {
  sharp: {
    borderRadius: '0px',
  },
  rounded: {
    borderRadius: '6px',
  },
  pill: {
    borderRadius: '9999px',
  },
} as const;

const COLOR_VARIANTS = {
  one: {
    backgroundColor: kit.color.slate2,
    color: kit.color.slate10,
    borderColor: kit.color.slate4,
  },
  two: {
    backgroundColor: kit.color.sapphire3,
    color: kit.color.sapphire10,
    borderColor: kit.color.sapphire5,
  },
} as const;

/** ----------------- variants ---------------------- */

const size = styleVariants(SIZE_MAP, (value) => ({
  height: value.height,
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
}));

const variant = styleVariants(COLOR_VARIANTS, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  borderColor: value.borderColor,
}));

const shape = styleVariants(SHAPE_MAP, (value) => ({
  borderRadius: value.borderRadius,
}));

const border = {
  true: [
    ...style({
      border: '1px solid',
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderColor: 'inherit',
    }),
  ],
};

/** --------------------------------------------------- */

const baseBanner = style({
  width: calc.subtract('100vw', GUTTER_WIDTH),
  maxWidth: '100%',

  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  padding: 'auto',
  margin: 'auto',

  selectors: {
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  },
});

/** ------------------------------------------------------- */
export type BannerSize = typeof size;
export type BannerBorderBoolean = typeof border;
export type BannerVariant = typeof variant;
export type BannerVariants = RecipeVariants<typeof banner>;
export const banner = recipe({
  base: baseBanner,
  variants: {
    size,
    border,
    variant,
    shape,
  },

  defaultVariants: {
    size: 'medium',
    border: false,
    variant: 'one',
    shape: 'rounded',
  },
});
