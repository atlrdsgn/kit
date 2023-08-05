import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { toggleGroupProperties as tgsx } from './properties';
import { kit } from '../../lib';

const TOGGLE_HEIGHT = 'auto';
const TOGGLE_WIDTH = 'auto';
const TOGGLE_PADDING_X = 10;
const TOGGLE_PADDING_Y = 4;

const ROOT_COLOUR_MAP = {
  carbon: {
    backgroundColor: tgsx.color.root.background.CARBON,
    color: tgsx.color.root.color.CARBON,
    borderColor: tgsx.color.root.borderColor.CARBON,
    boxShadow: tgsx.color.root.shadow.CARBON,
    F: {
      backgroundColor: tgsx.color.root.background.CARBON,
      color: tgsx.color.root.color.CARBON,
      shadow: tgsx.color.root.onFocus.shadow.CARBON,
    },
  },
  jade: {
    backgroundColor: tgsx.color.root.background.JADE,
    color: tgsx.color.root.color.JADE,
    borderColor: tgsx.color.root.borderColor.JADE,
    boxShadow: tgsx.color.root.shadow.JADE,
    F: {
      backgroundColor: tgsx.color.root.background.JADE,
      color: tgsx.color.root.color.JADE,
      shadow: tgsx.color.root.onFocus.shadow.JADE,
    },
  },
  orange: {
    backgroundColor: tgsx.color.root.background.ORANGE,
    color: tgsx.color.root.color.ORANGE,
    borderColor: tgsx.color.root.borderColor.ORANGE,
    boxShadow: tgsx.color.root.shadow.ORANGE,
    F: {
      backgroundColor: tgsx.color.root.background.ORANGE,
      color: tgsx.color.root.color.ORANGE,
      shadow: tgsx.color.root.onFocus.shadow.ORANGE,
    },
  },
  sapphire: {
    backgroundColor: tgsx.color.root.background.SAPPHIRE,
    color: tgsx.color.root.color.SAPPHIRE,
    borderColor: tgsx.color.root.borderColor.SAPPHIRE,
    boxShadow: tgsx.color.root.shadow.SAPPHIRE,
    F: {
      backgroundColor: tgsx.color.root.background.SAPPHIRE,
      color: tgsx.color.root.color.SAPPHIRE,
      shadow: tgsx.color.root.onFocus.shadow.SAPPHIRE,
    },
  },
} as const;

const ORIENTATION_FLEX = {
  horizontal: 'row',
  vertical: 'column',
} as const;

const variant = styleVariants(ROOT_COLOUR_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  borderColor: value.borderColor,
  boxShadow: value.boxShadow,

  ':hover': {},
  ':focus': {
    boxShadow: value.F.shadow,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      //...
    },
  },
}));

const orientation = styleVariants(ORIENTATION_FLEX, (value) => ({
  flexDirection: value,
}));

export const toggleGroupRoot = style({
  position: 'relative',

  ...tgsx.core,

  selectors: {
    '&[data-orientation="vertical"]': { flexDirection: 'column' },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },
  },
});

export const toggleRoot = style({
  position: 'relative',

  ...tgsx.core,

  selectors: {
    '&[data-orientation="vertical"]': { flexDirection: 'column' },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },
  },
});

export const toggleFlex = style({
  ...tgsx.core,

  position: 'relative',
  padding: 0,
  border: `2px solid ${kit.color.transparent}`,
  borderRadius: kit.radii.PILL,
  backgroundColor: kit.color.transparent,
  gap: 2,
  rowGap: 2,
  columnGap: 2,
  width: '100%',
  maxWidth: '280px',
  minWidth: '260px',

  borderWidth: 2,
  borderStyle: 'solid',
});

const itemBase = {
  paddingTop: TOGGLE_PADDING_Y,
  paddingBottom: TOGGLE_PADDING_Y,
  paddingLeft: TOGGLE_PADDING_X,
  paddingRight: TOGGLE_PADDING_X,
  width: TOGGLE_WIDTH,
  height: TOGGLE_HEIGHT,

  borderRadius: kit.radii.PILL,
  boxShadow: `0px 1px 2px -1px ${kit.color.slate5}`,

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  fontSize: kit.font.size.SM,
  lineHeight: kit.font.lineheight.SM,

  selectors: {},
} as const;

export const toggleItem = style({
  ...tgsx.core,
  ...itemBase,
});

export type ToggleGroupVariants = RecipeVariants<typeof toggleGroup>;
export const toggleGroup = recipe({
  base: toggleGroupRoot,
  variants: {
    orientation,
    variant,
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'carbon',
  },
});
