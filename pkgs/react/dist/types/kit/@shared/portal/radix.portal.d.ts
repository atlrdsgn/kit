import React from 'react';
import * as P from '@radix-ui/react-portal';
import { type DivProps } from '../../rect';
export type PortalProps = React.ComponentProps<typeof P.Root> & DivProps & React.ComponentProps<'div'> & {
    asChild?: boolean;
    children?: React.ReactNode;
    className?: string;
};
export declare const Portal: React.ForwardRefExoticComponent<Omit<PortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=radix.portal.d.ts.map