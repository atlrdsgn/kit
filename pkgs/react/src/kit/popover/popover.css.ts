import { style } from '@vanilla-extract/css';
import { SDF } from '../@utils/keyframes.css';
import { kit } from '../../lib';

const textStyle = {
  textAlign: 'center',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,
} as const;

const TRIGGER_BASE = {
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 14px',
  borderRadius: kit.radii.XS,
} as const;

export const popoverTrigger = style({
  ...TRIGGER_BASE,
  ...textStyle,

  cursor: 'pointer',
  position: 'relative',
  border: '1px solid transparent',
  backgroundColor: kit.color.carbon0,
  color: kit.color.carbon8,
  transition: 'all 0.4s ease-in-out',

  ':active': {},
  ':disabled': {},
  ':focus': {
    outline: 'none',
  },
  ':hover': {
    borderColor: kit.color.carbon2,
    backgroundColor: kit.color.carbon1,
  },

  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: kit.color.carbon8,
      backgroundColor: kit.color.carbon9,
      color: kit.color.carbon0,

      ':hover': {
        borderColor: kit.color.carbon7,
        backgroundColor: kit.color.carbon8,
        color: kit.color.carbon0,
      },
    },
  },

  selectors: {},
});

export const popoverContent = style({
  opacity: 1,
  boxSizing: 'border-box',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: '10px',
  maxWidth: '320px',
  minWidth: '160px',
  width: '100%',
  borderRadius: kit.radii.MD,
  backgroundColor: kit.color.white,
  color: 'inherit',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  willChange: 'transform, opacity',

  ':focus': {
    outline: 'none',
    backgroundColor: kit.color.white,
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

export const popoverArrow = style({
  fill: kit.color.white,
});

export const popoverClose = style({
  fontFamily: 'inherit',
  borderRadius: kit.radii.PILL,
  height: '24px',
  width: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: kit.color.current,
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
});
