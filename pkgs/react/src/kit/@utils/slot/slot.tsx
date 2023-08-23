import React from 'react';
import * as SLOT from '@radix-ui/react-slot';
import { type DivProps } from '../../rect';

export type SlotProps = React.ComponentProps<typeof SLOT.Root> &
  DivProps &
  React.ComponentProps<'div'> & {
    children?: React.ReactNode;
    className?: string;
  };

export const Slot = React.forwardRef<
  React.ElementRef<typeof SLOT.Root>,
  SlotProps
>(({ children, ...rest }, forwardedRef) => (
  <>
    <SLOT.Root
      {...rest}
      ref={forwardedRef}
      className='atlr_slot'>
      {children}
    </SLOT.Root>
  </>
));

Slot.displayName = 'Slot';
