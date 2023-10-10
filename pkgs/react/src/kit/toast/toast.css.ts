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

const ROOT_SPACE = {
  padding: '18px',
} as const;

export const toastViewport = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '25px',
  gap: '10px',
  maxWidth: '600px',
  margin: 0,
  listStyle: 'none',
  zIndex: kit.z.indice.MAX,
  outline: 'none',
  selectors: {
    '&[data-state="open"]': {
      gap: '10px',
      maxWidth: '600px',
      margin: 0,
      listStyle: 'none',
      zIndex: kit.z.indice.MAX,
    },
  },
});

export const toastRoot = style({
  backgroundColor: kit.color.whiteA6,
  borderRadius: kit.radii.SM,
  border: `1px solid ${kit.color.carbon1}`,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem', // 6px
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  padding: ROOT_SPACE.padding,
  height: 'auto',
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
});

export const toastDescription = style({
  // using this as a wrapper for [Text]..
  textAlign: 'left',
});

export const toastContent = style({
  // wraps the title and description
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem', // 6px
  alignItems: 'flex-start',
  width: '100%',
});

export const toastActionWrapper = style({
  // wraps the action button(s)
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'flex-start',
  gap: '0.5rem',

  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
});

const actionButtonCore = {
  textRendering: 'optimizeLegibility',
  fontVariantNumeric: 'tabular-nums',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  gap: '4px',
  transition: 'all 0.2s ease-in-out',
  willChange: 'color, backgroundColor',
  cursor: 'pointer',
  borderStyle: 'solid',

  // text properties
  userSelect: 'none',
  fontWeight: kit.font.weight.MEDIUM,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  // shared non-standard properties
  WebkitUserSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  MozUserSelect: 'none',
  MozTapHighlightColor: 'rgba(0,0,0,0)',
} as const;

export const toastAction = style({
  ...actionButtonCore,
  // the presentation of the action button(s)

  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '4px',
  paddingBottom: '4px',

  backgroundColor: kit.color.carbon2,
  borderRadius: kit.radii.DF,

  color: kit.color.sapphire7,
});

export const toastClose = style({
  // dismiss button
  position: 'relative',
  boxSizing: 'border-box',
  cursor: 'pointer',
  padding: '8px',
  marginRight: '14px',
  marginTop: '14px',
  border: 'none',

  backgroundColor: kit.color.carbon2,
  color: kit.color.orange6,
  ':hover': {
    backgroundColor: kit.color.carbon3,
    color: kit.color.orange7,
  },
});
