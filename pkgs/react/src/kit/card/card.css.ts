import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { kit } from '../../lib';

const cardFallbackText = {
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.MD,
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  color: kit.color.current,
} as const;

export const cardContainer = style({
  backgroundColor: kit.color.transparent,
  boxSizing: 'border-box',
  transitionDuration: '150ms',

  '@media': {},

  selectors: {},
});

const SHADOW_MAP = {
  none: { boxShadow: 'none' },
  sm: { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
  md: {
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },
  lg: {
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
} as const;

const shadow = styleVariants(SHADOW_MAP, (shadow) => shadow);

const BASE_CONTENT_STX = {
  backgroundColor: kit.color.white,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  borderRadius: kit.radii.LG,
  width: '100%',
  maxWidth: '100%',
  minWidth: '280px',
  padding: '20px',

  ...cardFallbackText,

  '@media': {},
} as const;

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

export const cardFooter = style({
  position: 'relative',
  marginTop: '16px',
});

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

export const cardContent = recipe({
  base: BASE_CONTENT_STX,
  variants: {
    shadow,
  },
  defaultVariants: {
    shadow: 'sm',
  },
});

export type CardHeadingLevels = keyof typeof level;
export type CardShadowVariants = keyof typeof shadow;
export type CardHeaderVariantProps = RecipeVariants<typeof cardHeader>;
export type CardShadowVariantProps = RecipeVariants<typeof cardContent>;
