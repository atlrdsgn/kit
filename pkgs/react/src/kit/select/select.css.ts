import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';
import { SDF, SUF, SRF, SLF } from '../@utils/keyframes.css';

const TRGGR_PADDING_LEFT = '12px';
const TRGGR_PADDING_RIGHT = '8px';
const TRGGR_RADII = kit.radii.XS;
const CONTENT_RADII = kit.radii.SM;
const ITEM_RADII = kit.radii.XS;

/** ----- trigger ------ */

export const selectTrigger = style({
  display: 'flex',
  flexDirection: 'row',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  verticalAlign: 'middle',

  gap: 20,
  height: 32,
  minWidth: 140,
  maxWidth: 280,
  width: 200,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,

  color: kit.color.carbon8,
  border: `1.5px solid ${kit.color.carbon3}`,
  borderRadius: TRGGR_RADII,
  backgroundColor: kit.color.white,

  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: TRGGR_PADDING_LEFT,
  paddingRight: TRGGR_PADDING_RIGHT,

  transition: 'all 0.2s ease-in-out',

  ':hover': { backgroundColor: kit.color.carbon1 },
  ':focus': { boxShadow: `0 0 0 2.5px ${kit.color.jade3}` },

  selectors: {
    '&[data-state="open"]': { animationName: `${SDF}` },
    '&[data-state="closed"]': { animationName: `${SUF}` },
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
  zIndex: 999,
  maxHeight: 'var(--radix-select-content-available-height)',
  width: 'var(--radix-select-trigger-width)',
  color: kit.color.slate9,
  borderRadius: CONTENT_RADII,
  backgroundColor: kit.color.white,
  overflow: 'hidden',
  scrollbarWidth: 'none',
  padding: '2px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

  selectors: {
    '&::-webkit-scrollbar': {},
    '&[data-state="open"]': { animationName: `${SDF}` },
    '&[data-state="closed"]': { animationName: `${SUF}` },

    '&[data-side="top"]': { animationName: `${SDF}` },
    '&[data-side="right"]': { animationName: `${SLF}` },
    '&[data-side="bottom"]': { animationName: `${SUF}` },
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

export const selectItem = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'auto',

  borderRadius: ITEM_RADII,

  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 2,
  paddingBottom: 2,

  ...SLCT_TEXT_STX,

  ':hover': {
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: kit.color.sapphire5,
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
      backgroundColor: kit.color.sapphire6,
      color: kit.color.carbon0,
    },
  },
});

export const selectIcon = style({
  lineHeight: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
});

export const selectItemText = style({
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: kit.color.carbon8,
  ...SLCT_TEXT_STX,
});

export const selectIndicate = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: 16,
  height: 16,

  // icon color
  color: kit.color.jade6,
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
