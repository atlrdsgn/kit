import { ARCubeIcon } from '../tools/ARCube';
import { CursorIcon } from '../tools/Cursor';
import { ExpandFilledIcon } from '../tools/ExpandFilled';
import { ExpandOutlinedIcon } from '../tools/ExpandOutlined';
import { LinkedIcon } from '../tools/Linked';

import type { IconMap, SVGIconProps } from '../types';

export const IconMapping: IconMap = {
  'ARCube.Icon': ARCubeIcon,
  'Cursor.Icon': CursorIcon,
  'ExpandFilled.Icon': ExpandFilledIcon,
  'ExpandOutlined.Icon': ExpandOutlinedIcon,
  'Linked.Icon': LinkedIcon,
};

export const IconWrapper: React.FC<SVGIconProps> = ({
  icon,
  color = 'currentColor',
  size = 24,
  className,
  ...props
}) => {
  const Component = icon ? IconMapping[icon] : undefined;

  if (!Component) {
    return null; // Handle case for unknown icon variant
  }

  return (
    <Component
      icon={icon}
      className={className}
      color={color}
      size={size}
      {...props}
    />
  );
};
