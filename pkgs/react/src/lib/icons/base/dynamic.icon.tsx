import React, { useEffect, useState } from 'react';

export type SVGVariants =
  | 'ARCube.Icon'
  | 'Cursor.Icon'
  | 'ExpandFilled.Icon'
  | 'ExpandOutlined.Icon'
  | 'Linked.Icon';

type SVGKit = {
  icon: SVGVariants;
  color?: string;
  size?: number;
  className?: string;
};

type SVGComponent = React.FC<SVGKit>;

interface IconMap {
  [key: string]: Promise<{ default: SVGComponent }>;
}

async function importIcon(path: string): Promise<{ default: SVGComponent }> {
  const module = await import(path);
  return { default: module.default };
}

const iconPaths: IconMap = {
  ARCubeIcon: importIcon('./tools/ARCube'),
  CursorIcon: importIcon('./tools/Cursor'),
  ExpandFilledIcon: importIcon('./tools/ExpandFilled'),
  ExpandOutlinedIcon: importIcon('./tools/ExpandOutlined'),
  LinkedIcon: importIcon('./tools/Linked'),
  // Add more icons here
};

export const DynamicKitIcon: React.FC<SVGKit> = ({
  icon,
  color,
  size = 24,
  className,
  ...props
}) => {
  const [iconComponent, setIconComponent] = useState<SVGComponent | null>(null);

  useEffect(() => {
    const preloadIcons = async () => {
      try {
        await Promise.all(
          Object.values(iconPaths).map((iconPromise) =>
            iconPromise.catch((error) => {
              console.error('An error occurred while loading icon:', error);
            }),
          ),
        );
      } catch (error) {
        console.error('An error occurred while preloading icons:', error);
      }
    };

    preloadIcons();
  }, []);

  useEffect(() => {
    const loadIcon = async () => {
      if (!icon || !iconPaths[icon]) {
        setIconComponent(null); // Handle case for unknown or missing icon
        return;
      }

      try {
        const module = await iconPaths[icon];
        setIconComponent(module.default);
      } catch (error) {
        console.error(`An error occurred while loading icon ${icon}:`, error);
      }
    };

    loadIcon();
  }, [icon]);

  if (!iconComponent) {
    return null; // Handle case for unknown or missing icon
  }

  const Icon = iconComponent;

  return (
    <Icon
      icon={icon}
      color={color}
      size={size}
      className={className}
      {...props}
    />
  );
};
