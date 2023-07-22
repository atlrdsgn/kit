import { style } from '@vanilla-extract/css';
import { SDF } from '../@utils/keyframes.css';
import { kit } from '../../lib';

const baseItem = {
  boxSizing: 'border-box',
  cursor: 'pointer',

  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  userSelect: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.LG,

  width: 'auto',
  padding: '0 10px 0 11px',

  backgroundColor: kit.color.carbon0,
  color: kit.color.carbon8,
  border: `1px solid ${kit.color.carbon1}`,
  borderRadius: kit.radii.DF,
  boxShadow: `rgba(213, 217, 217, .5) 0 2px 5px 0`,

  transition: 'all 0.4s ease-in-out',

  ':focus': {
    outline: 'none',
    boxShadow: `rgba(0,0,0 .5) 0 2px 5px 0`,
    borderColor: kit.color.carbon2,
  },
} as const;

export const dropTrigger = style({
  ...baseItem,

  ':focus': {
    outline: 'none',
  },
  ':hover': {
    backgroundColor: kit.color.carbon1,
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
      borderColor: kit.color.carbon8,
    },
  },

  selectors: {},
});

// content
export const dropContent = style({
  opacity: 1,
  boxSizing: 'border-box',
  padding: '20px',
  maxWidth: '220px',
  minWidth: '160px',
  width: '100%',
  borderRadius: kit.radii.MD,
  backgroundColor: kit.color.carbon0,
  color: 'inherit',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

  willChange: 'transform, opacity',

  ':focus': {
    outline: 'none',
    backgroundColor: kit.color.carbon0,
    background: kit.color.carbon0,
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
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

  ':hover': {
    backgroundColor: kit.color.carbon1,
  },

  ':disabled': {
    filter: 'saturate(0.2) opacity(0.5)',
    WebkitFilter: 'saturate(0.2) opacity(0.5)',
    cursor: 'not-allowed',
  },
});
export const dropItemIndicate = style({});

// group
export const dropGroup = style({});

// label
export const dropLabel = style({});

// separator
export const dropSeparator = style({});

// sub-menu
export const dropSub = style({});
export const dropSubTrigger = style({});
export const dropSubContent = style({});
