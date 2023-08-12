import React from 'react';
import * as LABL from '@radix-ui/react-label';
import clsx from 'clsx';
import * as CSS from './data.display.css';
import { Stack } from '../stack';

type DataLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<typeof LABL.Root>;
export type InputLabelProps = DataLabelProps;
const DataLabelComponent = React.forwardRef<
  React.ElementRef<typeof LABL.Root>,
  InputLabelProps
>(({ className, children, label, htmlFor, ...props }, forwardedRef) => {
  return (
    <LABL.Root
      {...props}
      ref={forwardedRef}
      htmlFor={htmlFor}
      className={clsx(CSS.dataLabel, className)}>
      {label !== undefined && <span>{label}</span>}
      {children}
    </LABL.Root>
  );
});

/** ------------- Root ------------ */

export type DataDisplayProps = {
  label: React.ReactNode;
  meta?: React.ReactNode;
  value: React.ReactNode;
  className?: string;
};

export const DataDisplay = ({
  className,
  label,
  meta,
  value,
}: DataDisplayProps) => {
  return (
    <Stack
      direction={'vertical'}
      align={'flex-start'}>
      <DataLabelComponent htmlFor={'label'}>{label}</DataLabelComponent>
      <h3 className={clsx(className, CSS.dataValue)}>{value}</h3>
      {meta !== undefined && <p>{meta}</p>}
    </Stack>
  );
};

DataDisplay.displayName = 'DataDisplay';

/**
 *
 * Example:
 */

/*

<DataDisplay
  label={'Label'}
  value={'Value'}
  meta={'Meta'}
/>


*/
