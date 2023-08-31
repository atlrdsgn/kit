import { ARCubeIcon } from '../tools/ARCube';
import { CursorIcon } from '../tools/Cursor';
import { ExpandFilledIcon } from '../tools/ExpandFilled';
import { ExpandOutlinedIcon } from '../tools/ExpandOutlined';
import { LinkedIcon } from '../tools/Linked';

/**
 *
 * Example usage:
 * import { KitIcon } from '...';
 * <KitIcon icon="ARCube.Icon" color="#000" size={24} />
 *
 *
 */

type SVGVariants =
  | 'ARCube.Icon'
  | 'Cursor.Icon'
  | 'ExpandFilled.Icon'
  | 'ExpandOutlined.Icon'
  | 'Linked.Icon';

interface SVGKit {
  icon: SVGVariants;
  color?: string;
  size?: number;
  className?: string;
}

interface IconSync {
  'ARCube.Icon': React.FC<SVGKit>;
  'Cursor.Icon': React.FC<SVGKit>;
  'ExpandFilled.Icon': React.FC<SVGKit>;
  'ExpandOutlined.Icon': React.FC<SVGKit>;
  'Linked.Icon': React.FC<SVGKit>;
}

const IconMap: IconSync = {
  'ARCube.Icon': ARCubeIcon,
  'Cursor.Icon': CursorIcon,
  'ExpandFilled.Icon': ExpandFilledIcon,
  'ExpandOutlined.Icon': ExpandOutlinedIcon,
  'Linked.Icon': LinkedIcon,
};

export const KitIcon: React.FC<SVGKit> = ({
  icon,
  color,
  size = 24,
  className,
  ...props
}) => {
  const Component = icon ? IconMap[icon] : undefined;

  if (!Component) {
    throw new Error(`Invalid icon variant: ${icon}`);
  }

  return (
    <Component
      icon={icon}
      color={color}
      size={size}
      className={className}
      {...props}
    />
  );
};

export default KitIcon;

export type IconElement = React.ReactElement<SVGKit>;
export type KitIconComponent = typeof KitIcon;

export type { SVGKit, SVGVariants };
