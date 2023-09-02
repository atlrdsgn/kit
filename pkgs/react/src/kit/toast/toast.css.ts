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
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  selectors: {
    '&[data-state="open"]': {},
  },
});

export const toastRoot = style({
  backgroundColor: kit.color.whiteA6,
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '15px',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

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

export const toastAction = style({});

export const toastClose = style({});
