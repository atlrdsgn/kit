import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const DIR_MAP = {
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  rowReverse: { flexDirection: 'row-reverse' },
  columnReverse: { flexDirection: 'column-reverse' },
} as const;

const ALIGN_MAP = {
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  stretch: { alignItems: 'stretch' },
  baseline: { alignItems: 'baseline' },
} as const;

const JUSTIFY_MAP = {
  start: { justifyContent: 'flex-start', alignContent: 'flex-start' },
  center: { justifyContent: 'center', alignContent: 'center' },
  end: { justifyContent: 'flex-end', alignContent: 'flex-end' },
  between: { justifyContent: 'space-between', alignContent: 'space-between' },
} as const;

const GAP_MAP = {
  none: { gap: '0' },
  xs: { gap: kit.space.DPX },
  sm: { gap: kit.space.FPX },
  md: { gap: kit.space.IPX },
  lg: { gap: kit.space.KPX },
  xl: { gap: kit.space.NPX },

  1: { gap: '1px' },
  2: { gap: '2px' },
  3: { gap: '3px' },
  4: { gap: '4px' },
  5: { gap: '5px' },
  6: { gap: '6px' },
  7: { gap: '7px' },
  8: { gap: '8px' },
  9: { gap: '9px' },
  10: { gap: '10px' },
  11: { gap: '11px' },
  12: { gap: '12px' },
  13: { gap: '13px' },
  14: { gap: '14px' },
  15: { gap: '15px' },
  16: { gap: '16px' },
  17: { gap: '17px' },
  18: { gap: '18px' },
  19: { gap: '19px' },
  20: { gap: '20px' },
  21: { gap: '21px' },
  22: { gap: '22px' },
  23: { gap: '23px' },
  24: { gap: '24px' },
} as const;

const WRAP_MAP = {
  wrap: { flexWrap: 'wrap' },
  nowrap: { flexWrap: 'nowrap' },
  wrapReverse: { flexWrap: 'wrap-reverse' },
} as const;

/** ------------------------------------------------------ */

const direction = styleVariants(DIR_MAP, (value) => ({
  flexDirection: value.flexDirection,
}));

const align = styleVariants(ALIGN_MAP, (value) => ({
  alignItems: value.alignItems,
}));

const justify = styleVariants(JUSTIFY_MAP, (value) => ({
  justifyContent: value.justifyContent,
  alignContent: value.alignContent,
}));

const gap = styleVariants(GAP_MAP, (value) => ({
  gap: value.gap,
}));

const wrap = styleVariants(WRAP_MAP, (value) => ({
  flexWrap: value.flexWrap,
}));

/** ------------------------------------------- */

const FLEX_BASE = style({
  boxSizing: 'border-box',
  display: 'flex',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 'auto',
  width: '100% !important',
  height: 'auto',
});

/**
 *
 * export flex.
 */
export type FlexDirectionProps = keyof typeof direction;
export type FlexAlignProps = keyof typeof align;
export type FlexJustifyProps = keyof typeof justify;
export type FlexGapProps = keyof typeof gap;
export type FlexVariantProps = RecipeVariants<typeof flex>;
export const flex = recipe({
  base: FLEX_BASE,
  variants: { direction, align, justify, gap, wrap },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    gap: 'sm',
    wrap: 'wrap',
  },
});
