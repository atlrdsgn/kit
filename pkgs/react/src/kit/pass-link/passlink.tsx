import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { link } from './passlink.css';
import type {
  LinkColorProps,
  LinkFontProps,
  LinkSizeProps,
  LinkWeightProps,
  //..
  LinkVariantProps,
} from './passlink.css';

interface LinkElementProps {
  children?: React.ReactNode;
  /**
   *
   *
   */
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top' | string;
  /**
   *
   * the size of the link.
   * -- font-size.
   */
  className?: string;
  size?: LinkSizeProps;
  variant?: LinkColorProps;
  font?: LinkFontProps;
  weight?: LinkWeightProps;
}

export type PassLinkProps = LinkElementProps &
  LinkVariantProps &
  React.HTMLAttributes<HTMLAnchorElement>;
export const PassLink = forwardRef<HTMLAnchorElement, PassLinkProps>(
  (
    {
      children,
      className,
      href = '#',
      variant = 'inherit',
      target = '_self',
      size = 'sm',
      font = 'system',
      weight = 'normal',
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <a
        ref={forwardedRef}
        href={href}
        target={target}
        className={clsx(className, link({ size, variant, font, weight }))}
        {...rest}>
        {children}
      </a>
    );
  },
);

PassLink.displayName = 'PassLink';
