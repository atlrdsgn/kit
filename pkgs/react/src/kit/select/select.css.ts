import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';
import { SDF, SUF, SRF, SLF, eighty } from '../@utils/keyframes.css';

const TRGGR_PADDING_LEFT = '14px';
const TRGGR_PADDING_RIGHT = '10px';
const TRGGR_RADII = kit.radii.XS;
const CONTENT_RADII = kit.radii.LG;
const ITEM_RADII = kit.radii.XS;

/** ----- trigger ------ */

export const selectTrigger = style({
  display: 'flex',
  flexDirection: 'row',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  verticalAlign: 'middle',

  gap: '6px',
  height: '34px',
  minWidth: 140,
  maxWidth: 280,
  width: 200,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.MD,

  color: kit.color.carbon7,
  border: `1.5px solid ${kit.color.carbon2}`,
  borderRadius: TRGGR_RADII,
  backgroundColor: kit.color.white,

  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: TRGGR_PADDING_LEFT,
  paddingRight: TRGGR_PADDING_RIGHT,

  transition: 'all 0.2s ease-in-out',

  ':hover': { backgroundColor: kit.color.carbon0 },
  ':focus': { boxShadow: `0 0 0 3px ${kit.color.sapphire3}` },

  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: kit.color.carbon8,
      backgroundColor: kit.color.carbon9,
      color: kit.color.carbon0,

      ':hover': { backgroundColor: kit.color.carbon8 },
    },
  },

  selectors: {
    '&[data-placeholder]': {
      color: kit.color.slate5,
      fontWeight: kit.font.weight.REGULAR,
      fontSize: kit.font.size.SM,
    },
    '&[data-disabled]': {
      color: kit.color.slate6,
      pointerEvents: 'none',
    },
  },
});

/** ----- content ------ */

export const selectContent = style({
  maxHeight: 'var(--radix-select-content-available-height)',
  minWidth: 'var(--radix-select-trigger-width)',
  maxWidth: 'var(--radix-select-trigger-width)',
  width: 'var(--radix-select-trigger-width)',

  overflow: 'hidden',
  scrollbarWidth: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 999,
  color: kit.color.slate9,
  border: `1px solid`,
  borderColor: kit.color.carbon1,
  borderRadius: CONTENT_RADII,
  backgroundColor: kit.color.white,
  margin: 'auto',
  paddingTop: '6px',
  paddingBottom: '10px',
  paddingLeft: '6px',
  paddingRight: '6px',
  boxShadow: '0px 16px 20px -8px rgba(17, 12, 34, 0.10)',

  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: kit.color.carbon8,
      backgroundColor: kit.color.carbon9,
      color: kit.color.carbon0,
    },
  },

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '&[data-state="open"][data-side="bottom"]': {
      animationName: `${SDF}`,
      animation: `${SDF} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-state="closed"][data-side="bottom"]': {
      animationName: `${SUF}`,
      animation: `${SUF} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-side="top"]': { animationName: `${SDF}` },
    '&[data-side="right"]': { animationName: `${SLF}` },
    '&[data-side="left"]': { animationName: `${SRF}` },
  },
});

/** ------ item ------ */

const SLCT_TEXT_STX = {
  userSelect: 'none',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,
} as const;

export const selectItemText = style({
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: kit.color.carbon8,
  ...SLCT_TEXT_STX,

  '@media': {
    '(prefers-color-scheme: dark)': {
      color: kit.color.carbon0,
    },
  },
});

export const selectItem = style({
  ...SLCT_TEXT_STX,

  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  height: 'auto',
  minWidth: '100%',
  width: '100%',

  borderRadius: ITEM_RADII,

  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '6px',
  paddingBottom: '6px',
  margin: 'auto',

  ':hover': {
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: kit.color.carbon4,
    color: kit.color.white,
  },

  ':focus': {
    outline: 'none',
  },

  ':disabled': {
    color: kit.color.carbon5,
    pointerEvents: 'none',
  },

  selectors: {
    '&[data-highlighted]': {
      backgroundColor: kit.color.sapphire4,
      color: kit.color.carbon0,
    },
  },
});

export const selectIndicate = style({
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '16px',
  height: '16px',

  // icon color
  color: kit.color.sapphire5,

  selectors: {
    '&[data-highlighted]': {
      color: kit.color.sapphire0,
    },
  },
});

export const selectIcon = style({
  boxSizing: 'border-box',
  lineHeight: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',

  selectors: {
    '&[data-state="open"]': {
      animationName: `${eighty}`,
      animationDuration: '400ms',
      animation: `${eighty}`,
    },
    '&[data-state="closed"]': {
      animationName: `${eighty}`,
      animationDuration: '400ms',
      animation: `${eighty}`,
    },
  },
});

/** ------ group ------ */

export const selectLabel = style({});
export const selectGroup = style({});

const BASE_SCROLL = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '25px',
  backgroundColor: 'white',
  opacity: 0.7,
  color: kit.color.slate10,
  cursor: 'default',
} as const;

export const scrollUp = style({
  ...BASE_SCROLL,
});
export const scrollDown = style({
  ...BASE_SCROLL,
});
