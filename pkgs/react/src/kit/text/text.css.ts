import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kitMaps } from '../@shared';
import { kit } from '../../lib';

/** ---------------------------------------------------------- */

const font = styleVariants(kitMaps.text.FAMILY, (value) => ({
  fontFamily: value.fontFamily,
}));

const size = styleVariants(kitMaps.text.SIZE, (value) => ({
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
}));

const weight = styleVariants(kitMaps.text.WEIGHT, (value) => ({
  fontWeight: value.fontWeight,
}));

const color = styleVariants(kit.color, (value) => ({
  color: value,
}));

const align = styleVariants(kitMaps.text.ALIGNMENT, (value) => ({
  textAlign: value.textAlign,
}));

const casing = styleVariants(kitMaps.text.CASING, (value) => ({
  textTransform: value.textTransform,
}));

/** ------------------------------------------------------- */

const TEXT_BASE = style({
  letterSpacing: '-0.02em',
  margin: 0,
  padding: 0,
  fontVariantNumeric: 'tabular-nums',
  transitionProperty: 'color',
});

export type TextFontVariants = keyof typeof font;
export type TextSizeVariants = keyof typeof size;
export type TextColorVariants = keyof typeof color;
export type TextWeightVariants = keyof typeof weight;
export type TextAlignVariants = keyof typeof align;
export type TextCasingVariants = keyof typeof casing;

/**
 * The `text` recipe combines the `font`, `size`, `weight`, `color`, and `align` style variants
 * into a single CSS rule, with default values set.
 *
 * Usage:
 *
 * <Text font="system" size="md" weight="medium" color="slate5" align="left" />
 * (or)
 * `className={text({ font: 'system', size: 'md', weight: 'medium', color: 'slate5', align: 'left' })}`
 */
export type TextVariantProps = RecipeVariants<typeof text>;
export const text = recipe({
  base: TEXT_BASE,
  variants: {
    font,
    size,
    weight,
    color,
    align,
    casing,
  },
  defaultVariants: {
    font: 'system',
    size: 'md',
    weight: 'medium',
    color: 'current',
    align: 'left',
    casing: 'none',
  },
});
