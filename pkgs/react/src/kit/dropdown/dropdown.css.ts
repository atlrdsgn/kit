import { style } from '@vanilla-extract/css';
import { SDF } from '../@shared';
import { kit } from '../../lib';

const TRGGR_WIDTH = '180px';
const TRGGR_PADDING_LEFT = '10px';
const TRGGR_PADDING_RIGHT = '10px';
const TRGGR_PADDING_BOTTOM = '4px';
const TRGGR_PADDING_TOP = '4px';
const TRGGR_RADII = kit.radii.XS;
const CONTENT_RADII = kit.radii.MD;
const ITEM_RADII = '7px';

const baseItem = {
  boxSizing: 'border-box',
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  userSelect: 'none',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.MD,
  width: 'auto',
  transition: 'all 0.3s ease-in-out',
} as const;

export const dropTrigger = style({
  ...baseItem,

  width: TRGGR_WIDTH,
  minWidth: TRGGR_WIDTH,

  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: TRGGR_RADII,
  paddingLeft: TRGGR_PADDING_LEFT,
  paddingRight: TRGGR_PADDING_RIGHT,
  paddingBottom: TRGGR_PADDING_BOTTOM,
  paddingTop: TRGGR_PADDING_TOP,

  backgroundColor: kit.color.transparent,
  color: kit.color.carbon8,
  borderColor: kit.color.transparent,
  borderWidth: '1px',
  borderStyle: 'solid',

  ':hover': {
    backgroundColor: kit.color.carbon0,
    color: kit.color.carbon8,
    borderColor: kit.color.transparent,
  },
  ':focus': {
    outline: 'none',
    backgroundColor: kit.color.carbon0,
    color: kit.color.carbon8,
    borderColor: kit.color.carbon2,
  },
  ':active': {},
  ':disabled': {
    filter: 'saturate(0.2) opacity(0.5)',
    WebkitFilter: 'saturate(0.2) opacity(0.5)',
    cursor: 'not-allowed',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: kit.color.carbon9,
      color: kit.color.carbon0,
      borderColor: kit.color.carbon9,

      ':focus': {
        outline: 'none',
        borderColor: kit.color.carbon7,
      },
      ':hover': {
        backgroundColor: kit.color.carbon9,
        color: kit.color.carbon0,
        borderColor: kit.color.carbon8,
      },
    },
  },
  selectors: {},
});

// content
export const dropContent = style({
  minWidth: `var(--radix-dropdown-menu-content-min-width)`,
  width: `var(--radix-dropdown-menu-trigger-width)`,
  maxHeight: `var(--radix-dropdown-menu-content-available-width)`,

  zIndex: kit.z.indice.MAX,
  opacity: 1,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  margin: 'auto',
  padding: '6px',
  maxWidth: '220px',
  borderRadius: CONTENT_RADII,
  backgroundColor: kit.color.white,
  color: 'inherit',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  willChange: 'transform, opacity',

  ':focus': {
    outline: 'none',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },

  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: kit.color.carbon9,
    },
  },

  selectors: {
    '&[data-state="open"][data-side="bottom"]': {
      animationName: `${SDF}`,
      animation: `${SDF} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

// item
export const dropItem = style({
  ...baseItem,

  textAlign: 'left',
  textDecoration: 'none',
  borderRadius: ITEM_RADII,
  padding: '0 10px 0 11px',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: kit.color.transparent,
  backgroundColor: kit.color.transparent,
  color: kit.color.carbon8,

  ':hover': {
    backgroundColor: kit.color.sapphire3,
    color: kit.color.carbon9,
    boxShadow: `rgba(0,0,0 .2) 0 1px 1px 0`,
  },

  ':focus': {
    outline: 'none',
    boxShadow: `rgba(0,0,0 .5) 0 2px 5px 0`,
  },

  ':disabled': {
    filter: 'saturate(0.2) opacity(0.5)',
    WebkitFilter: 'saturate(0.2) opacity(0.5)',
    cursor: 'not-allowed',
  },

  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: kit.color.carbon9,
      color: kit.color.carbon0,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: kit.color.transparent,

      ':hover': {
        backgroundColor: kit.color.sapphire7,
        color: kit.color.carbon0,
        borderColor: kit.color.transparent,
      },

      ':focus': {
        outline: 'none',
        borderColor: kit.color.carbon8,
        boxShadow: `rgba(0,0,0 .2) 0 2px 5px 0`,
      },
    },
  },

  selectors: {
    '&[data-highlighted]': {
      backgroundColor: kit.color.sapphire4,
    },
  },
});

export const dropItemIndicate = style({});

// group
export const dropGroup = style({});

// label
export const dropLabel = style({});

// separator
export const dropSeparator = style({
  height: '2px',
  width: '100%',
  padding: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 12,
  marginBottom: 12,
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: kit.color.carbon1,

  '@media': {
    '(prefers-color-scheme: dark)': { backgroundColor: kit.color.carbon8 },
  },
});

// sub-menu
export const dropSub = style({});
export const dropSubTrigger = style({});
export const dropSubContent = style({});
