import React from 'react';
import { clsx } from 'clsx';
import { badgeIcon } from './badge.css';
import { type IconComponentProps } from '../svg.icons';

// icon
interface BadgeIconProps extends React.SVGProps<SVGSVGElement> {
  svg: IconComponentProps['icon'];
  className?: string;
}

export const BadgeIcon = React.forwardRef<SVGSVGElement, BadgeIconProps>(
  ({ svg, className, ...rest }, ref) => {
    if (!svg) {
      return null;
    }

    if (svg === 'Arrow.Down.Icon') {
      return (
        <svg
          ref={ref}
          className={clsx(badgeIcon, className)}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...rest}>
          <path
            d='M12.0916 14.9959C12.2854 14.9802 12.4708 14.902 12.6225 14.7846L16.6417 11.583C16.8439 11.4343 16.9703 11.2151 16.9956 10.9725C17.0209 10.7298 16.9366 10.495 16.7681 10.3149C16.5996 10.1349 16.3552 10.0175 16.1024 10.0096C15.8412 9.99399 15.5884 10.0801 15.3946 10.2366L11.9989 12.945L8.60325 10.2366C8.40945 10.0723 8.15667 9.98616 7.90388 10.0018C7.64268 10.0175 7.39832 10.1271 7.2298 10.3149C7.06128 10.495 6.98545 10.7376 7.0023 10.9725C7.02758 11.2151 7.15397 11.4343 7.35619 11.583L11.3754 14.7846C11.5692 14.9411 11.8304 15.0194 12.0832 14.9959H12.0916Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          />
        </svg>
      );
    }

    if (svg === 'Small.Arrow.Up.Icon') {
      return (
        <svg
          width='24'
          height='7'
          viewBox='0 0 24 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={clsx(badgeIcon, className)}
          {...rest}>
          <path
            d='M8.64709 6H15.3529C15.9183 6 16.2107 5.28473 15.8241 4.84769L12.7067 1.32441C12.324 0.891862 11.676 0.891862 11.2933 1.32441L8.17595 4.84769C7.78927 5.28473 8.08172 6 8.64709 6Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          />
        </svg>
      );
    }

    if (svg === 'Small.Arrow.Right.Icon') {
      return (
        <svg
          ref={ref}
          className={clsx(badgeIcon, className)}
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...rest}>
          <path
            d='M3.33337 7.99998H12.6667M12.6667 7.99998L8.00004 3.33331M12.6667 7.99998L8.00004 12.6666'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    }

    return (
      <>
        <svg
          ref={ref}
          className={clsx(badgeIcon, className)}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...rest}>
          <path
            d='M12.0916 14.9959C12.2854 14.9802 12.4708 14.902 12.6225 14.7846L16.6417 11.583C16.8439 11.4343 16.9703 11.2151 16.9956 10.9725C17.0209 10.7298 16.9366 10.495 16.7681 10.3149C16.5996 10.1349 16.3552 10.0175 16.1024 10.0096C15.8412 9.99399 15.5884 10.0801 15.3946 10.2366L11.9989 12.945L8.60325 10.2366C8.40945 10.0723 8.15667 9.98616 7.90388 10.0018C7.64268 10.0175 7.39832 10.1271 7.2298 10.3149C7.06128 10.495 6.98545 10.7376 7.0023 10.9725C7.02758 11.2151 7.15397 11.4343 7.35619 11.583L11.3754 14.7846C11.5692 14.9411 11.8304 15.0194 12.0832 14.9959H12.0916Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          />
        </svg>
      </>
    );
  },
);

BadgeIcon.displayName = 'BadgeIcon';
