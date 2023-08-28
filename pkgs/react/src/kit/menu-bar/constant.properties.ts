import { kit } from '../../lib';

export const constants = {
  ROOT_RADII: '11px',
  TRIGGER_RADII: '8px',
  ITEM_RADII: '8px',
  CONTENT_RADII: '11px',

  MENU_TRIGGER_BASE: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: kit.font.family.system,
    fontSize: kit.font.size.XS,
    fontWeight: kit.font.weight.MEDIUM,
    lineHeight: kit.font.lineheight.SM,

    width: 'auto',
    margin: 'auto',
  },

  MENU_CONTENT_BASE: {
    zIndex: 9999,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    margin: 'auto',
    padding: 3,
    paddingBottom: 8,
  },

  MENU_ITEM_BASE: {
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-block',
    verticalAlign: 'middle',
    userSelect: 'none',

    fontFamily: kit.font.family.system,
    fontSize: kit.font.size.XS,
    fontWeight: kit.font.weight.REGULAR,
    lineHeight: kit.font.lineheight.SM,

    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 2,
    paddingTop: 2,
    width: '100%',

    backgroundColor: kit.color.transparent,
    color: kit.color.carbon8,
    transition: 'all 0.3s ease-in-out',
  },
} as const;
