import { style } from '@vanilla-extract/css';
import { SUF } from '../@shared';
import { shadows, kitFilterBlur } from '../@shared';
import { kit } from '../../lib';

/*
	•	Tooltip.Provider (no-style)
	•	Tooltip.Root (no-style)
	•	Tooltip.Trigger
	•	Tooltip.Portal (no-style)
	•	Tooltip.Content
*/

const baseTrigger = {
  // text styles
  textAlign: 'center',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,

  // layout styles
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px',
  borderRadius: kit.radii.XS,

  height: 'auto',
  width: 'auto',
  margin: 'auto',
  maxHeight: '38px',
} as const;

export const tooltipTrigger = style({
  ...baseTrigger,

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

  selectors: {
    '&[data-state="open"]': {
      backgroundColor: kit.color.carbon0,
      color: kit.color.carbon8,
      borderColor: kit.color.transparent,
    },
  },
});

export const tooltipContent = style({
  zIndex: kit.z.indice.TOP,
  willChange: 'transform, opacity',
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '320px',
  minWidth: `140px`,
  maxHeight: `var(--radix-tooltip-content-available-height)`,
  minHeight: 'var(--radix-tooltip-trigger-height)',
  borderRadius: kit.radii.MD,
  backgroundColor: kit.color.whiteA6,
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: '10px',
  boxShadow: shadows.XS,

  ...kitFilterBlur.MD,

  ':focus': {
    outline: 'none',
    backgroundColor: kit.color.white,
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },

  selectors: {
    '&[data-state="delayed-open"][data-side="top"]': {
      animationName: `${SUF}`,
      animation: `${SUF} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-state="instant-open"][data-side="top"]': {
      animationName: `${SUF}`,
      animation: `${SUF} 100ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

export const tooltipIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  height: 'auto',
  width: 'auto',
  margin: 'auto',

  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  borderRadius: kit.radii.XS,
});
