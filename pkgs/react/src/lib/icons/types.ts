import * as React from 'react';

export type IconProps = {
  children?: never;
  color?: string;
  size?: number | string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export type LogoProps = {
  children?: never;
  color?: string;
  width?: string;
  height?: string;
} & React.SVGAttributes<SVGElement>;

/** --- internal icon components only below this comment --- */

export type SVGIconVariants = 'ExpandFilled.Icon' | 'ExpandOutlined.Icon';

export interface SVGIconProps {
  icon?: SVGIconVariants;
  color?: string;
  size?: number;
  className?: string;
}

export interface IconMap {
  'ARCube.Icon': React.FC<SVGIconProps>;
  'Cursor.Icon': React.FC<SVGIconProps>;
  'ExpandFilled.Icon': React.FC<SVGIconProps>;
  'ExpandOutlined.Icon': React.FC<SVGIconProps>;
  'Linked.Icon': React.FC<SVGIconProps>;
}
