import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';
import { HIDE_AWAY, SLIDE_ENTER, SWIPE_AWAY } from '../@shared';

/**
 *
 * Parts.
 * - Toast.Provider 𐄂 [unstyled]
 * - Toast.Viewport ✔
 * - Toast.Root ✔
 * - Toast.Title → [render Heading]
 * - Toast.Description → [render Text]
 * - Toast.Action ✔
 * - Toast.Close ✔
 *
 */

export const toastViewport = style({
  // --viewport-padding: 25px;
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  maxWidth: '400px',
  margin: 0,
  listStyle: 'none',
  zIndex: kit.z.indice.MAX,
  outline: 'none',
  selectors: {
    '&[data-state="open"]': {},
  },
});

export const toastRoot = style({
  backgroundColor: kit.color.whiteA6,
  borderRadius: kit.radii.MD,
  border: `1px solid ${kit.color.carbon1}`,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  columnGap: '15px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 'max-content',
  width: '100%',
  margin: 'auto',

  selectors: {
    '&[data-state="open"]': {
      animation: `${SLIDE_ENTER} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      animationName: SLIDE_ENTER,
    },

    '&[data-state="closed"]': {
      animation: `${HIDE_AWAY} 100ms ease-in`,
      animationName: HIDE_AWAY,
    },

    '&[data-swipe="move"]': {
      transform: `translateX(var(--radix-toast-swipe-move-x))`,
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${SWIPE_AWAY} 100ms ease-out`,
      animationName: SWIPE_AWAY,
    },
  },
});

export const toastTitle = style({
  // using this as a wrapper for [Heading]..
  textAlign: 'left',
  marginBottom: 5,
});

export const toastDescription = style({
  // using this as a wrapper for [Text]..
  textAlign: 'left',
  marginBottom: 5,
});

export const toastAction = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  margin: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '5px',
  paddingBottom: '5px',

  backgroundColor: kit.color.jade5,
  color: kit.color.jade1,
  borderRadius: kit.radii.SM,
});

export const toastClose = style({
  // dismiss button
  boxSizing: 'border-box',
  cursor: 'pointer',
  position: 'absolute',
  top: 8,
  right: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',

  backgroundColor: kit.color.carbon0,
  color: kit.color.carbon8,
  borderRadius: kit.radii.SM,
});
