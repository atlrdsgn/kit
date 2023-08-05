import { kit } from '../../lib';

// enum for size variants
enum ToggleGroupSize {
  SM = 'SM',
  MD = 'MD',
}

// enum for color variants
enum ToggleGroupColor {
  CARBON = 'CARBON',
  JADE = 'JADE',
  ORANGE = 'ORANGE',
  SAPPHIRE = 'SAPPHIRE',
}

const toggleCommonProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
} as const;

const toggleGroupSizeProperties = {
  root: {
    padding: {
      [ToggleGroupSize.SM]: '4px',
      [ToggleGroupSize.MD]: '6px',
    },
  },

  item: {
    text: {
      size: {
        [ToggleGroupSize.SM]: kit.font.size.SM,
        [ToggleGroupSize.MD]: kit.font.size.MD,
      },
      lineheight: {
        [ToggleGroupSize.SM]: kit.font.lineheight.SM,
        [ToggleGroupSize.MD]: kit.font.lineheight.MD,
      },
    },

    padding: {
      [ToggleGroupSize.SM]: '4px 10px',
      [ToggleGroupSize.MD]: '6px 12px',
    },
  },
} as const;

const toggleGroupColorProperties = {
  root: {
    background: {
      [ToggleGroupColor.CARBON]: kit.color.carbon0,
      [ToggleGroupColor.JADE]: kit.color.jade0,
      [ToggleGroupColor.ORANGE]: kit.color.orange0,
      [ToggleGroupColor.SAPPHIRE]: kit.color.sapphire0,
    },
    borderColor: {
      [ToggleGroupColor.CARBON]: kit.color.carbon4,
      [ToggleGroupColor.JADE]: kit.color.jade4,
      [ToggleGroupColor.ORANGE]: kit.color.orange4,
      [ToggleGroupColor.SAPPHIRE]: kit.color.sapphire4,
    },
    color: {
      [ToggleGroupColor.CARBON]: kit.color.carbon8,
      [ToggleGroupColor.JADE]: kit.color.jade8,
      [ToggleGroupColor.ORANGE]: kit.color.orange8,
      [ToggleGroupColor.SAPPHIRE]: kit.color.sapphire8,
    },
    shadow: {
      [ToggleGroupColor.CARBON]: `0px 1px 2px -1px rgba(173, 181, 189, 0.25)`,
      [ToggleGroupColor.JADE]: `0px 1px 2px -1px rgba(64, 192, 87, 0.25)`,
      [ToggleGroupColor.ORANGE]: `0px 1px 2px -1px rgba(255, 191, 0, 0.25)`,
      [ToggleGroupColor.SAPPHIRE]: `0px 1px 2px -1px rgba(17, 12, 34, 0.12)`,
    },

    onFocus: {
      shadow: {
        [ToggleGroupColor.CARBON]: `0px 0px 0px 3.5px rgba(173, 181, 189, 0.35), 0px 1px 2px 0px #ADB5BD`,
        [ToggleGroupColor.JADE]: `0px 0px 0px 3.5px rgba(64, 192, 87, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
        [ToggleGroupColor.ORANGE]: `0px 0px 0px 3.5px rgba(253, 126, 20, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
        [ToggleGroupColor.SAPPHIRE]: `0px 0px 0px 3.5px rgba(103, 90, 162, 0.40), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
      },
    },
    isDark: {},
  },
  item: {
    background: {},
    borderColor: {},
    color: {},
    shadow: {},

    onHover: {},
    onFocus: {},
    isDark: {},
  },
} as const;

export const toggleGroupProperties = {
  core: toggleCommonProperties,
  text: toggleGroupSizeProperties.item.text,
  size: {
    root: toggleGroupSizeProperties.root,
    item: toggleGroupSizeProperties.item,
  },
  color: {
    root: toggleGroupColorProperties.root,
    item: toggleGroupColorProperties.item,
  },
} as const;
