import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';

const FIELD_PAD = {
  left: kit.space.IPX, // 16px
  right: '5px',
  top: '5px',
  bottom: '5px',
} as const;

const COMPOSE_BTN = {
  px: kit.space.GPX,
  py: kit.space.BPX, // 2px
} as const;

export const fieldRoot = style({
  width: '100%',
  maxWidth: '320px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

export const backplate = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  margin: 'auto',

  paddingTop: FIELD_PAD.top,
  paddingRight: FIELD_PAD.right,
  paddingBottom: FIELD_PAD.bottom,
  paddingLeft: FIELD_PAD.left,

  borderRadius: 12,
  border: `1px solid ${kit.color.carbon2}`,
  background: kit.color.whiteA6,

  boxShadow: kit.shadow.SM,

  ':hover': {
    border: `1px solid ${kit.color.carbon3}`,
  },
});

const baseText = {
  letterSpacing: '-0.02em',
  fontVariantNumeric: 'tabular-nums',
  transitionProperty: 'color',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-out',
} as const;

export const copyCmdText = style({
  ...baseText,

  justifyContent: 'flex-start',
  fontFamily: kit.font.family.mono,

  color: kit.color.carbon8,
  fontSize: kit.font.size.SM,
  lineHeight: kit.font.lineheight.SM,
});

export const copyTrigger = style({
  ...baseText,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  lineHeight: kit.font.lineheight.SM,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  userSelect: 'none',
  outline: 'none',

  border: `1px solid ${kit.color.carbon4}`,
  borderRadius: 8,
  height: '100%',

  backgroundColor: kit.color.carbon3,
  color: kit.color.carbon8,
  boxShadow: `0px 1px 0px 0px rgba(27, 31, 35, 0.10)`,

  paddingTop: COMPOSE_BTN.py,
  paddingRight: COMPOSE_BTN.px,
  paddingBottom: COMPOSE_BTN.py,
  paddingLeft: COMPOSE_BTN.px,
  margin: 0,

  ':hover': {
    border: `1px solid ${kit.color.carbon5}`,
  },
  ':active': {},
  ':focus': {},
});
