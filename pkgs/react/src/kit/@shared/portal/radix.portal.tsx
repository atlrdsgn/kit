import React from 'react';
import * as P from '@radix-ui/react-portal';
import { type DivProps } from '../../rect';

export type PortalProps = React.ComponentProps<typeof P.Root> &
  DivProps &
  React.ComponentProps<'div'> & {
    asChild?: boolean;
    children?: React.ReactNode;
    className?: string;
  };

export const Portal = React.forwardRef<
  React.ElementRef<typeof P.Root>,
  PortalProps
>(({ children, asChild, ...rest }, forwardedRef) => (
  <>
    <P.Root
      {...rest}
      ref={forwardedRef}
      asChild={asChild}
      className='radix_portal'>
      {children}
    </P.Root>
  </>
));

Portal.displayName = 'Portal';
