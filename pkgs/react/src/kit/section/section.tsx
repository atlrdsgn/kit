import React from 'react';
import clsx from 'clsx';
import { section } from './section.css';
import {
  // ..
  type SectionSize,
  type SectionVariantProps,
} from './section.css';

interface BASE_SECTION_PROPS {
  children: React.ReactNode;
  className?: string;
  size?: SectionSize;
}

export type SectionProps = BASE_SECTION_PROPS &
  SectionVariantProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  size = 'vw',
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(className, section({ size }))}>
      {children}
    </div>
  );
};

Section.displayName = 'Section';
