import { style } from '@vanilla-extract/css';
import { SDF } from '../@shared';
import { kit } from '../../lib';

/**
 *
 * @root
 */
export const baseTabsLayout = style({
  maxWidth: '380px',
  minWidth: '380px',
  width: '100%',
  display: 'flex',
  margin: 'auto',
  padding: 4,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  backgroundColor: kit.color.carbon0,
  color: kit.color.carbon8,

  ':focus': {
    outline: 'none',
    backgroundColor: kit.color.carbon0,
    color: kit.color.carbon8,
  },

  '@media': {},

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },
  },
});

/**
 *
 * @list
 */
export const tabsList = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '320px',
  margin: 'auto',
  padding: 4,
  gap: 8,

  borderRadius: kit.radii.LG,
  backgroundColor: kit.color.carbon1,
  color: kit.color.carbon8,

  ':focus': {
    outline: 'none',
  },

  '@media': {},

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },
  },
});

/**
 *
 * @item
 */
const baseItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  flex: '1 0 0',
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: kit.radii.MD,
  transition: 'all 0.2s ease',
  willChange: 'backgroundColor, color',
  width: '100%',
} as const;

export const tabsItem = style({
  ...baseItem,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,

  color: kit.color.carbon8,
  backgroundColor: kit.color.carbon1,

  borderWidth: '0px',
  borderStyle: 'none',
  cursor: 'pointer',

  ':active': {
    color: kit.color.carbon8,
    backgroundColor: kit.color.carbon1,
  },

  ':hover': {
    color: kit.color.carbon8,
    backgroundColor: kit.color.carbon2,
  },

  ':focus': {
    color: kit.color.carbon8,
    backgroundColor: kit.color.carbon2,
  },

  '@media': {},

  selectors: {
    '&[data-state="active"]': {
      backgroundColor: kit.color.carbon0,
      color: kit.color.carbon8,
      boxShadow: `0px 2px 4px -2px rgba(17, 12, 34, 0.12)`,

      '@media': {},
    },

    '&[data-state="inactive"]': {
      backgroundColor: kit.color.transparent,
      color: kit.color.carbon9,

      '@media': {},
    },

    /** -------------------------- *
     * 
     * more modifiers.
     * 
     * &[data-state="disabled"]
     * &[data-orientation="vertical"]
     * &[data-orientation="horizontal"]
     *
     ----------------------------- */
  },
});

export const tabsContent = style({
  maxWidth: '380px',
  minWidth: '380px',
  width: '100%',

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,

  paddingTop: '16px',
  paddingBottom: '16px',
  paddingLeft: '10px',
  paddingRight: '10px',
  borderRadius: kit.radii.LG,

  color: kit.color.carbon8,
  backgroundColor: kit.color.transparent,

  '@media': {},

  selectors: {
    '&[data-state="active"][data-orientation="horizontal"]': {
      animationName: SDF,
      animationDuration: '400ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },

    '&[data-state="inactive"][data-orientation="horizontal"]': {},
  },
});
