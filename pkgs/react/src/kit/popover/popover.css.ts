import { style } from '@vanilla-extract/css';
import { slideFadeDown, slideFadeUp } from '../@utils/keyframes.css';
import { kit } from '../../lib';

export const popoverTrigger = style({
  cursor: 'pointer',
  padding: '0 4px',
  display: 'inline-block',
  position: 'relative',
});

export const popoverContent = style({
  zIndex: kit.z.indice.MAX,
  boxSizing: 'border-box',
  padding: '20px',
  maxWidth: '260px',
  width: '100%',
  borderRadius: kit.radii.MD,
  backgroundColor: kit.color.white,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  ':focus': {
    boxShadow:
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px,0 0 0 2px hsl(206 22% 7% / 35%)',
  },

  selectors: {
    '&[data-state="open"][data-side="bottom"]': {
      animationName: `${slideFadeDown}`,
      animation: `${slideFadeDown} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-side="bottom"]': { animationName: `${slideFadeDown}` },
    '&[data-state="closed"]': { animationName: `${slideFadeUp}` },
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
