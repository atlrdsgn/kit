import React from 'react';
import { clsx } from 'clsx';
import * as css from './banner.css';
import type {
  BannerSize,
  BannerVariant,
  BannerVariants,
  BannerBorderBoolean,
} from './banner.css';

interface BaseBannerProps {
  children: React.ReactNode;

  /**
   *
   * className to be passed to the section.
   */
  className?: string;
  size?: BannerSize;
  variant?: BannerVariant;
  border?: BannerBorderBoolean;
}

export type BannerProps = BaseBannerProps &
  BannerVariants &
  React.HTMLAttributes<HTMLDivElement>;

export const Banner: React.FC<BannerProps> = ({
  children,
  className,
  size,
  variant = 'carbon',
  border = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(className, css.banner({ size, variant, border }))}>
      {children}
    </div>
  );
};

Banner.displayName = 'Banner';
