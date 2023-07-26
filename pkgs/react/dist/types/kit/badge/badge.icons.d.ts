import React from 'react';
import { type IconComponentProps } from '../svg.icons';
interface BadgeIconProps extends React.SVGProps<SVGSVGElement> {
    svg: IconComponentProps['icon'];
    className?: string;
}
export declare const BadgeIcon: React.ForwardRefExoticComponent<Omit<BadgeIconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=badge.icons.d.ts.map