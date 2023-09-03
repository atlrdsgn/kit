import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';

const FIELD_PAD = {
  left: kit.space.HPX, // 14px
  right: kit.space.CPX, // 4px
  top: kit.space.CPX, // 4px
  bottom: kit.space.CPX, // 4px
} as const;

const COMPOSE_BTN = {
  px: kit.space.FPX, // 10px
  py: kit.space.BPX, // 2px
} as const;

export const fieldRoot = style({
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'auto',
  width: '100%',
  maxWidth: '580px',
  margin: 'auto',

  backgroundColor: kit.color.whiteA6,
  color: kit.color.carbon8,
  border: '1px solid',
  borderColor: kit.color.carbon3,
  borderRadius: kit.radii.MD,
  paddingTop: FIELD_PAD.top,
  paddingRight: FIELD_PAD.right,
  paddingBottom: FIELD_PAD.bottom,
  paddingLeft: FIELD_PAD.left,
  overflow: 'hidden',
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
  lineHeight: kit.font.lineheight.LG,
});

export const copyTrigger = style({
  ...baseText,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  lineHeight: kit.font.lineheight.LG,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  userSelect: 'none',
  outline: 'none',
  border: `1px solid transparent`,
  borderRadius: kit.radii.SM,
  height: '100%',

  color: kit.color.carbon9,

  paddingTop: COMPOSE_BTN.py,
  paddingRight: COMPOSE_BTN.px,
  paddingBottom: COMPOSE_BTN.py,
  paddingLeft: COMPOSE_BTN.px,
  margin: 0,

  ':hover': {
    border: `1px solid ${kit.color.carbon1}`,
  },
  ':active': {},
  ':focus': {},
});
