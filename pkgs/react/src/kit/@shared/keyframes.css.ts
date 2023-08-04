import { keyframes, style } from '@vanilla-extract/css';

const SLIDE_UP_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const SLIDE_DOWN_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const SLIDE_RIGHT_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const SLIDE_LEFT_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

/* -------------------------------------------------------------------------- */

const slideFadeUp = style({
  animationName: SLIDE_UP_FADE,
  animation: `${SLIDE_UP_FADE} 0.3s`,
});

const slideFadeDown = style({
  animationName: SLIDE_DOWN_FADE,
  animation: `${SLIDE_DOWN_FADE} 0.2s`,
});

const slideFadeRight = style({
  animationName: SLIDE_RIGHT_FADE,
  animation: `${SLIDE_RIGHT_FADE} 0.2s`,
});

const slideFadeLeft = style({
  animationName: SLIDE_LEFT_FADE,
  animation: `${SLIDE_LEFT_FADE} 0.2s`,
});

/** ------------------- exports keyframes -------------------------- */

const oneEighty = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(180deg)' },
});

const eighty = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(180deg)' },
});

const threeSixty = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

// SLIDE DOWN FADE
const SDF = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

// SLIDE UP FADE
const SUF = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

// SLIDE RIGHT FADE
const SRF = keyframes({
  // slide right fade
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

// SLIDE LEFT FADE
const SLF = keyframes({
  // slide left fade
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

/** ------------------------------------------------------- */

export {
  slideFadeUp,
  slideFadeDown,
  slideFadeRight,
  slideFadeLeft,
  // ..
  SDF,
  SUF,
  SRF,
  SLF,
  // ..
  eighty,
  oneEighty,
  threeSixty,
};
