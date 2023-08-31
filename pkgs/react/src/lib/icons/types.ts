import * as React from 'react';

export type SVGIconVariants =
  | 'ARCube.Icon'
  | 'Cursor.Icon'
  | 'ExpandFilled.Icon'
  | 'ExpandOutlined.Icon'
  | 'Linked.Icon';

export interface SVGIconProps {
  icon: SVGIconVariants;
  color?: string;
  size?: number;
  className?: string;

  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
}

export interface IconMap {
  'ARCube.Icon': React.FC<SVGIconProps>;
  'Cursor.Icon': React.FC<SVGIconProps>;
  'ExpandFilled.Icon': React.FC<SVGIconProps>;
  'ExpandOutlined.Icon': React.FC<SVGIconProps>;
  'Linked.Icon': React.FC<SVGIconProps>;
}

/** --- icon context --- */

export interface IconContext {
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
}

export const DefaultContext: IconContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined,
};

export const IconContext: React.Context<IconContext> =
  React.createContext && React.createContext(DefaultContext);

/** --- internal icon components only below this comment --- */

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
