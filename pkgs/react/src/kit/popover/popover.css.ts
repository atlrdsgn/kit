import { style } from '@vanilla-extract/css';
import { SDF } from '../@shared';
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
  transition: 'all 0.3s ease-in-out',

  backgroundColor: kit.color.carbon0,
  color: kit.color.carbon8,
  borderColor: kit.color.transparent,
  borderWidth: '1px',
  borderStyle: 'solid',

  ':focus': {
    outline: 'none',
  },
  ':hover': {
    backgroundColor: kit.color.carbon1,
    color: kit.color.carbon9,
    borderColor: kit.color.carbon2,
  },

  '@media': {},

  selectors: {
    '&[data-state="open"]': {
      backgroundColor: kit.color.carbon0,
      color: kit.color.carbon8,
      borderColor: kit.color.transparent,
    },
  },
});

export const popoverContent = style({
  opacity: 1,
  willChange: 'transform, opacity',
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '320px',
  minWidth: `var(--radix-popover-trigger-width)`,
  maxHeight: `var(--radix-popover-content-available-height)`,
  minHeight: 'var(--radix-popover-trigger-height)',
  borderRadius: kit.radii.MD,
  backgroundColor: kit.color.white,
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: '10px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

  ':focus': {
    outline: 'none',
    backgroundColor: kit.color.white,
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },

  '@media': {},

  selectors: {
    '&[data-state="open"][data-side="bottom"]': {
      animationName: `${SDF}`,
      animation: `${SDF} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
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
