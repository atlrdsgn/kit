import { kit } from '../../lib';

export type KitMaps = typeof kitMaps;
export type KitMapObjects = keyof KitMaps;

export const kitMaps = {
  text: {
    /**
     *
     * These are all common text styles.
     * They align specific kit tokens with a particular style.
     *
     * For instance, using text.SIZE.[size] will yield a style object
     * covering both the font size and line height.
     *
     * This is useful for keeping a style across multiple elements/components tight.
     * We can also map our entire colour library to text.COLOUR.[colour[X]]. lovely.
     *
     * Further usage could be explored, this requires additional consideration.
     */
    FAMILY: {
      system: { fontFamily: kit.font.family.system },
      inter: { fontFamily: kit.font.family.system },
      mono: { fontFamily: kit.font.family.mono },
    },
    SIZE: {
      xs: { fontSize: kit.font.size.XS, lineHeight: kit.font.lineheight.XS },
      sm: { fontSize: kit.font.size.SM, lineHeight: kit.font.lineheight.SM },
      md: { fontSize: kit.font.size.MD, lineHeight: kit.font.lineheight.MD },
      lg: { fontSize: kit.font.size.LG, lineHeight: kit.font.lineheight.LG },
      xl: { fontSize: kit.font.size.XL, lineHeight: kit.font.lineheight.XL },
      xxl: { fontSize: kit.font.size.XXL, lineHeight: kit.font.lineheight.XXL },
      '3xl': {
        fontSize: kit.font.size['3XL'],
        lineHeight: kit.font.lineheight['3XL'],
      },
      '4xl': {
        fontSize: kit.font.size['4XL'],
        lineHeight: kit.font.lineheight['4XL'],
      },
      '5xl': {
        fontSize: kit.font.size['5XL'],
        lineHeight: kit.font.lineheight['5XL'],
      },
      '6xl': {
        fontSize: kit.font.size['6XL'],
        lineHeight: kit.font.lineheight['6XL'],
      },
      '7xl': {
        fontSize: kit.font.size['7XL'],
        lineHeight: kit.font.lineheight['7XL'],
      },
      '8xl': {
        fontSize: kit.font.size['8XL'],
        lineHeight: kit.font.lineheight['8XL'],
      },
      '9xl': {
        fontSize: kit.font.size['9XL'],
        lineHeight: kit.font.lineheight['9XL'],
      },
    },
    WEIGHT: {
      superlite: { fontWeight: kit.font.weight.SUPRLITE },
      lite: { fontWeight: kit.font.weight.LITE },
      normal: { fontWeight: kit.font.weight.REGULAR },
      medium: { fontWeight: kit.font.weight.MEDIUM },
      semibold: { fontWeight: kit.font.weight.SEMIBOLD },
      bold: { fontWeight: kit.font.weight.BOLD },
      heavy: { fontWeight: kit.font.weight.HEAVY },
      black: { fontWeight: kit.font.weight.BLACK },
    },
    ALIGNMENT: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    CASING: {
      none: { textTransform: 'none' },
      uppercase: { textTransform: 'uppercase' },
      lowercase: { textTransform: 'lowercase' },
      capitalize: { textTransform: 'capitalize' },
    },

    COLOUR: {
      ...kit.color,
    },
  },

  space: {
    /**
     *
     * will include all spacing styles.
     */
  },
} as const;
