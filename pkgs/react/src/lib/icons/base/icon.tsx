import { GlobeBlobIcon } from './misc/globe-blobe';
import { ARCubeIcon } from './tools/ar-cube';
import { ArrowSortIcon } from './tools/arrow-sort';
import CloseIcon from './tools/close';
import { CursorIcon } from './tools/cursor';
import { ExpandFilledIcon } from './tools/expand-filled';
import { ExpandOutlinedIcon } from './tools/expand-outlined';
import { LinkedIcon } from './tools/linked';
import { SpellCheckIcon } from './tools/spell-check';

/**
 *
 * Example usage:
 * import { KitIcon } from '...';
 * <KitIcon icon="ARCube.Icon" color="#000" size={24} />
 *
 *
 */

type SVGVariants =
  // tools
  | 'ARCube.Icon'
  | 'ArrowSort.Icon'
  | 'Close.Icon'
  | 'Cursor.Icon'
  | 'ExpandFilled.Icon'
  | 'ExpandOutlined.Icon'
  | 'Linked.Icon'
  | 'SpellCheck.Icon'

  // misc.
  | 'GlobeBlob.Icon';

interface SVGKit {
  icon: SVGVariants;
  color?: string;
  size?: number;
  className?: string;
}

interface IconSync {
  // tools
  'ARCube.Icon': React.FC<SVGKit>;
  'ArrowSort.Icon': React.FC<SVGKit>;
  'Close.Icon': React.FC<SVGKit>;
  'Cursor.Icon': React.FC<SVGKit>;
  'ExpandFilled.Icon': React.FC<SVGKit>;
  'ExpandOutlined.Icon': React.FC<SVGKit>;
  'Linked.Icon': React.FC<SVGKit>;
  'SpellCheck.Icon': React.FC<SVGKit>;

  // misc.
  'GlobeBlob.Icon': React.FC<SVGKit>;
}

const IconMap: IconSync = {
  // tools
  'ARCube.Icon': ARCubeIcon,
  'ArrowSort.Icon': ArrowSortIcon,
  'Close.Icon': CloseIcon,
  'Cursor.Icon': CursorIcon,
  'ExpandFilled.Icon': ExpandFilledIcon,
  'ExpandOutlined.Icon': ExpandOutlinedIcon,
  'Linked.Icon': LinkedIcon,
  'SpellCheck.Icon': SpellCheckIcon,

  // misc.
  'GlobeBlob.Icon': GlobeBlobIcon,
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
