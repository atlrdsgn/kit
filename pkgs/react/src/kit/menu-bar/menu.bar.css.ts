import { style } from '@vanilla-extract/css';
import { SDF } from '../@shared';
import { blurz, kit } from '../../lib';
import { constants } from './constant.properties';

/** ----------------------------------------------------- */

/** ------------------------------------ *
 * @root
 * ------------------------------------ */
export const menuLayout = style({
  // .. menubar[menu]
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  padding: 3,
  margin: 'auto',

  color: kit.color.carbon8,
  backgroundColor: kit.color.carbon0,
  borderRadius: constants.ROOT_RADII,

  boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,

  '@media': {
    '(prefers-color-scheme: dark)': {
      color: kit.color.carbon1,
      backgroundColor: kit.color.carbon9,
    },
  },
});

/** ------------------------------------ *
 * @trigger
 * ------------------------------------ */
export const menuTrigger = style({
  // layout
  ...constants.MENU_TRIGGER_BASE,

  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 16,
  paddingRight: 16,

  color: kit.color.carbon8,
  backgroundColor: kit.color.transparent,
  border: `1px solid ${kit.color.transparent}`,
  borderRadius: constants.TRIGGER_RADII,

  transition: 'all 0.2s ease-in-out',

  ':hover': {
    color: kit.color.carbon7,
    backgroundColor: kit.color.carbon1,
  },
  ':focus': {},

  '@media': {
    '(prefers-color-scheme: dark)': {
      color: kit.color.carbon1,
      backgroundColor: kit.color.transparent,

      ':hover': {
        color: kit.color.carbon0,
        backgroundColor: kit.color.carbon8,
      },
    },
  },

  selectors: {
    '&[data-highlighted]': {
      backgroundColor: kit.color.sapphire3,
      color: kit.color.carbon9,
    },
    '&[data-state="open"]': {
      backgroundColor: kit.color.sapphire3,
      color: kit.color.carbon9,
    },
  },
});

export const menuSubTrigger = style({});

/** ------------------------------------- *
 * @content
 ---------------------------------------- */
export const menuContent = style({
  ...constants.MENU_CONTENT_BASE,
  borderRadius: constants.CONTENT_RADII,
  willChange: 'transform, opacity',
  maxWidth: `210px`,
  maxHeight: `var(--radix-menubar-content-available-height)`,
  width: `var(--radix-menubar-content-available-width)`,
  height: 'auto',
  overflow: 'hidden',
  boxShadow:
    'rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, 0px 16px 20px -8px rgba(17, 12, 34, 0.10)',

  /**
   *
   * bg (or) w/ backdrop-filter
   */
  // backgroundColor: kit.color.carbon0,
  // ...blurz.theme.light.MEDIUM,
  backdropFilter: blurz.theme.light.MEDIUM.backdropFilter,
  WebkitBackdropFilter: blurz.theme.light.MEDIUM.WebkitBackdropFilter,
  backgroundColor: blurz.theme.light.MEDIUM.backgroundColor,

  '@media': {
    '(prefers-color-scheme: dark)': {
      backdropFilter: blurz.theme.dark.MEDIUM.backdropFilter,
      WebkitBackdropFilter: blurz.theme.dark.MEDIUM.WebkitBackdropFilter,
      backgroundColor: blurz.theme.dark.MEDIUM.backgroundColor,
    },
  },

  selectors: {
    '&[data-state="open"][data-side="bottom"]': {
      animationName: `${SDF}`,
      animation: `${SDF} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

export const menuSub = style({
  // ..
});
export const menuSubContent = style({
  ...constants.MENU_CONTENT_BASE,
});
export const menuSubItem = style({
  ...constants.MENU_ITEM_BASE,
});

/** ------------------------------------- *
 * @item
 * ------------------------------------- */
export const menuItem = style({
  ...constants.MENU_ITEM_BASE,

  borderRadius: constants.ITEM_RADII,
  border: `1px solid ${kit.color.transparent}`,

  ':focus': {
    outline: 'none',
    boxShadow: `rgba(0,0,0 .5) 0 2px 5px 0`,
  },

  ':hover': {
    backgroundColor: kit.color.sapphire1,
    border: `1px solid ${kit.color.sapphire3}`,
  },

  ':disabled': {
    filter: 'saturate(0.2) opacity(0.5)',
    WebkitFilter: 'saturate(0.2) opacity(0.5)',
    cursor: 'not-allowed',
  },

  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: kit.color.transparent,
      color: kit.color.carbon0,

      ':hover': {
        backgroundColor: kit.color.sapphire8,
        border: `1px solid ${kit.color.sapphire8}`,
      },
    },
  },

  selectors: {
    '&[data-highlighted]': {
      backgroundColor: kit.color.sapphire5,
      color: kit.color.white,
    },
  },
});
