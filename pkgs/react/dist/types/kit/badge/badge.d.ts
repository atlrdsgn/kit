import React from 'react';
import * as KitChip from '../chip/chip';
import { type BadgeVariantProps, type BadgeSizeVariants, type BadgeColorVariants } from './badge.css';
import { BadgeIcon } from './badge.icons';
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
type LabelProps = React.ComponentProps<typeof KitChip.Chip>;
declare const BadgeLabel: React.FC<LabelProps>;
interface BadgeContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
    content: string;
    className?: string;
}
export declare const BadgeContent: React.ForwardRefExoticComponent<BadgeContentProps & React.RefAttributes<HTMLParagraphElement>>;
interface BaseBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: BadgeColorVariants;
    size?: BadgeSizeVariants;
}
export type BadgeProps = BaseBadgeProps & BadgeVariantProps;
/** --------------------------------- */
export declare const Badge: React.FC<BadgeProps> & {
    Label: typeof BadgeLabel;
    Content: typeof BadgeContent;
    Icon: typeof BadgeIcon;
};
export {};
//# sourceMappingURL=badge.d.ts.map