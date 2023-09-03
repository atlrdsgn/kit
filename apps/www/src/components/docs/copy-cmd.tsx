'use client';

import React from 'react';
import { CopyCommand } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const KitCopyCommand = () => {
  return (
    <ComponentWrapper label='copy command'>
      <CopyCommand copytext='yarn add @atlrdsgn/kit' />
    </ComponentWrapper>
  );
};

export default KitCopyCommand;
