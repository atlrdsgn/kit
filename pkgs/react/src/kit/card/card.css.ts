import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

export const cardContainer = style({
  backgroundColor: kit.color.white,
  borderRadius: kit.radii.MD,
  width: '100%',
  maxWidth: '100%',
  minWidth: '280px',
  padding: '20px',

  boxSizing: 'border-box',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

  transitionDuration: '150ms',

  '@media': {},

  selectors: {},
});

export const cardContent = style({
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.MD,
  fontWeight: kit.font.weight.REGULAR,
  lineHeight: kit.font.lineheight.MD,
  color: kit.color.current,
});

export const cardFooter = style({
  position: 'relative',
  marginTop: '16px',
});

/** ----------------------------------- */

const H_LEVEL_MAP = {
  H1: {
    fontSize: kit.font.size['5XL'],
    lineHeight: kit.font.lineheight['5XL'],
  },
  H2: {
    fontSize: kit.font.size['3XL'],
    lineHeight: kit.font.lineheight['3XL'],
  },
  H3: {
    fontSize: kit.font.size.XL,
    lineHeight: kit.font.lineheight.XL,
  },
  H4: {
    fontSize: kit.font.size.LG,
    lineHeight: kit.font.lineheight.LG,
  },
  H5: {
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
  },
  H6: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
  },
} as const;

const level = styleVariants(H_LEVEL_MAP, (LEVEL) => ({
  fontSize: LEVEL.fontSize,
  lineHeight: LEVEL.lineHeight,
}));

/** --------------------------------------- */

const BASE_HEADER_STX = {
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XL,
  fontWeight: kit.font.weight.BOLD,
  lineHeight: kit.font.lineheight.XL,
  color: kit.color.current,
  marginBottom: '8px',
} as const;

export const cardHeader = recipe({
  base: BASE_HEADER_STX,
  variants: {
    level,
  },
  defaultVariants: {
    level: 'H2',
  },
});

export type CardHeadingLevels = keyof typeof level;
export type CardHeaderVariants = RecipeVariants<typeof cardHeader>;
