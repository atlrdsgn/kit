import React from 'react';
import * as KitChip from '../chip/chip';
import * as CSS from './badge.css';
import { clsx } from 'clsx';
import { BadgeIcon } from './badge.icons';
import type {
  BadgeVariantProps,
  BadgeSizeVariants,
  BadgeColorVariants,
} from './badge.css';

/**
 *
 * @badge parts:
 *
 * 1. root
 * 2. label - typeof Chip
 * 3. content
 * 4. group
 * 5. icon
 * 6. ..
 */

// label
type LabelProps = React.ComponentProps<typeof KitChip.Chip>;
const BadgeLabel: React.FC<LabelProps> = (props) => {
  return (
    <KitChip.Chip
      size='xs'
      shape='pill'
      variant='carbon'
      removeShadow
      {...props}
    />
  );
};

// content
interface BadgeContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  content: string;
  className?: string;
}

export const BadgeContent = React.forwardRef<
  HTMLParagraphElement,
  BadgeContentProps
>(({ content, className, ...rest }, ref) => {
  return (
    <p
      ref={ref}
      className={clsx(CSS.badgeContent, className)}
      {...rest}>
      {content}
    </p>
  );
});

// root
interface BaseBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: BadgeColorVariants;
  size?: BadgeSizeVariants;
}

export type BadgeProps = BaseBadgeProps & BadgeVariantProps;

const BadgeRoot = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { appearance = 'carbon', size = 'small', className, ...rest },
    forwardedRef,
  ) => {
    return (
      <div
        {...rest}
        ref={forwardedRef}
        className={clsx(CSS.badge({ size, appearance }), className)}
      />
    );
  },
);

/** --------------------------------- */

export const Badge: React.FC<BadgeProps> & {
  Label: typeof BadgeLabel;
  Content: typeof BadgeContent;
  Icon: typeof BadgeIcon;
} = (props) => <BadgeRoot {...props} />;

Badge.displayName = 'Badge';
// ..
Badge.Label = BadgeLabel;
Badge.Content = BadgeContent;
Badge.Icon = BadgeIcon;
// ..
BadgeRoot.displayName = 'Badge';
BadgeLabel.displayName = 'BadgeLabel';
BadgeContent.displayName = 'BadgeContent';
BadgeIcon.displayName = 'BadgeIcon';
// ..
Badge.Label.displayName = 'BadgeLabel';
Badge.Content.displayName = 'BadgeContent';
Badge.Icon.displayName = 'BadgeIcon';
