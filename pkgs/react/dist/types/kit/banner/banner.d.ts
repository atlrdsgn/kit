import React from 'react';
import { type BannerSize, type BannerVariant, type BannerVariants, type BannerBorderBoolean } from './banner.css';
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
export type BannerProps = BaseBannerProps & BannerVariants & React.HTMLAttributes<HTMLDivElement>;
export declare const Banner: React.FC<BannerProps>;
export {};
//# sourceMappingURL=banner.d.ts.map