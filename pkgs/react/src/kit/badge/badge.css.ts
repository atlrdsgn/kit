import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const SIZE_MAP = {
  small: {
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
  },
  medium: {
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
  },
} as const;

const COLOR_MAP = {
  primary: {
    backgroundColor: kit.color.carbon0,
    color: kit.color.carbon8,
    border: `1px solid ${kit.color.transparent}`,
    onHover: {
      borderColor: kit.color.carbon1,
    },
    onFocus: {
      boxShadow: `0px 0px 0px 3.5px rgba(0, 0, 0, 0.20), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
    },
  },
} as const;

const size = styleVariants(SIZE_MAP, (value) => ({
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
}));

const variant = styleVariants(COLOR_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  border: value.border,
  ':hover': {
    borderColor: value.onHover.borderColor,
  },
  ':focus': {
    boxShadow: value.onFocus.boxShadow,
  },
}));

/** --------------------------------------------------------------- */

/** --- icon --- */

export const badgeIcon = style({
  position: 'relative',
});

/** --- root --- */

const badgeRootLayout = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  margin: 'auto',

  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 3,
  paddingRight: 10,

  borderRadius: kit.radii.PILL,

  mixBlendMode: 'multiply',

  ':hover': {
    cursor: 'pointer',
  },
});

export const badgeContent = style({
  /**
   *
   * <p /> element is used to display the badge content.
   */

  display: 'inline-flex',
  fontWeight: kit.font.weight.MEDIUM,
});

export type BadgeSizeVariants = keyof typeof size;
export type BadgeColorVariants = keyof typeof variant;
export type BadgeVariantProps = RecipeVariants<typeof badge>;
export const badge = recipe({
  base: badgeRootLayout,
  variants: {
    size,
    variant,
  },
  defaultVariants: {
    size: 'small',
    variant: 'primary',
  },
});
