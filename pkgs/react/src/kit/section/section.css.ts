import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const SIZE_MAP = {
  sm: {
    paddingTop: kit.space.GPX,
    paddingBottom: kit.space.GPX,
  },
  md: {
    paddingTop: kit.space.MPX,
    paddingBottom: kit.space.MPX,
  },
  lg: {
    paddingTop: kit.space.SPX,
    paddingBottom: kit.space.SPX,
  },
  vw: {
    paddingTop: kit.space.KPX,
    paddingBottom: kit.space.KPX,
  },
};

const size = {
  ...styleVariants(SIZE_MAP, (value) => ({
    paddingTop: value.paddingTop,
    paddingBottom: value.paddingBottom,
  })),
};

/** ------------------------------------------------------- */

export const SEC_ROOT = style({
  boxSizing: 'border-box',
  display: 'inline-block',
  position: 'relative',
  backgroundColor: 'transparent',
  height: 'auto',
  width: '100%',
  maxWidth: '100vw',
  margin: 0,
});

/** ------------------------------------------------------- */

export type SectionSize = keyof typeof size;
export type SectionVariantProps = RecipeVariants<typeof section>;
export const section = recipe({
  base: SEC_ROOT,
  variants: { size },
  defaultVariants: {
    // ..
    size: 'vw',
  },
});
