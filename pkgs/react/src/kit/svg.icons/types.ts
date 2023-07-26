import React from 'react';

export type IconProps = {
  children?: never;
  color?: string;
  width?: string;
} & React.SVGAttributes<SVGElement>;

export type LogoProps = {
  children?: never;
  color?: string;
  width?: string;
  height?: string;
} & React.SVGAttributes<SVGElement>;

/** --- internal icon components only below this comment --- */

export type IconVariants =
  | 'Arrow.Down.Icon'
  | 'Arrow.Up.Icon'
  | 'Small.Arrow.Down.Icon'
  | 'Small.Arrow.Up.Icon'
  | 'Small.Arrow.Left.Icon'
  | 'Small.Arrow.Right.Icon'
  | 'Logo.Icon'
  | 'Indicate.Icon';

export interface IconComponentProps {
  children?: never;
  icon?: IconVariants;
  color?: string;
  width?: string;
}
