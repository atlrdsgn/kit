import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const WIDTH_MAP = {
  small: { maxWidth: '430px' },
  medium: { maxWidth: '720px' },
  large: { maxWidth: '1145px' },
  xlarge: { maxWidth: '1440px' },
  max: { maxWidth: '100%' },
  full: { maxWidth: '100vw' },
} as const;

const ALIGNMENT_MAP = {
  start: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  end: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
} as const;

const BORDER_API = {
  true: {
    border: `1px solid ${kit.color.slate3}`,
    backgroundColor: kit.color.slate3,
  },
} as const;

const FLUSH_API = {
  true: {
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
  },
} as const;

/** -------------------------------------------- */

export const width = styleVariants(WIDTH_MAP, (value) => ({
  maxWidth: value.maxWidth,
}));

export const align = styleVariants(ALIGNMENT_MAP, (value) => ({
  alignItems: value.alignItems,
  alignContent: value.alignContent,
  justifyContent: value.justifyContent,
}));

export const border = styleVariants(BORDER_API, (value) => ({
  border: value.border,
  backgroundColor: value.backgroundColor,
}));

export const flush = styleVariants(FLUSH_API, (value) => ({
  paddingTop: value.paddingTop,
  paddingBottom: value.paddingBottom,
  paddingLeft: value.paddingLeft,
  paddingRight: value.paddingRight,
}));

/** ---------------------------------------------- */

export const CONTAINER_BASE = style({
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: kit.space.DPX,
  paddingBottom: kit.space.DPX,
  paddingLeft: kit.space.JPX,
  paddingRight: kit.space.JPX,

  width: `100% !important`,
  margin: 'auto',

  '@media': {
    'screen and (max-width: 640px)': {
      paddingLeft: kit.space.IPX,
      paddingRight: kit.space.IPX,
    },
  },
});

export type ContainerAlignment = keyof typeof align;
export type ContainerWidth = keyof typeof width;
export type ContainerBorder = keyof typeof border;
export type ContainerFlush = keyof typeof flush;
export type ContainerVariantProps = RecipeVariants<typeof container>;
export const container = recipe({
  base: [CONTAINER_BASE],
  variants: { align, width, border, flush },
  defaultVariants: {
    align: 'start',
    width: 'max',
    border: false,
    flush: false,
  },
});
