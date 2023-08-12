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
    padding: '2px 8px',
    height: SM_HEIGHT,
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
  },
  medium: {
    padding: '4px 12px',
    height: MD_HEIGHT,
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
  },
  large: {
    padding: '6px 16px',
    height: LG_HEIGHT,
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
  },
} as const;

const SHAPE_MAP = {
  sharp: { borderRadius: '0px' },
  rounded: { borderRadius: '6px' },
  pill: { borderRadius: '9999px' },
} as const;

const COLOR_VARIANTS = {
  carbon: {
    backgroundColor: kit.color.carbon0,
    color: kit.color.carbon8,
    borderColor: kit.color.carbon3,
  },
  sapphire: {
    backgroundColor: kit.color.sapphire3,
    color: kit.color.sapphire10,
    borderColor: kit.color.sapphire4,
  },
  jade: {
    backgroundColor: kit.color.jade3,
    color: kit.color.jade10,
    borderColor: kit.color.jade4,
  },
  mauve: {
    backgroundColor: kit.color.mauve9,
    color: kit.color.mauve11,
    borderColor: kit.color.mauve10,
  },
} as const;

/** ----------------- variants ---------------------- */

const size = styleVariants(SIZE_MAP, (value) => ({
  padding: value.padding,
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
export type BannerSize = keyof typeof size;
export type BannerBorderBoolean = keyof typeof border;
export type BannerVariant = keyof typeof variant;
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
    variant: 'carbon',
    shape: 'rounded',
  },
});
