'use client';

import React from 'react';
import { Button, Stack } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const KitButton = () => {
  return (
    <ComponentWrapper label='button'>
      <Stack direction='horizontal'>
        <Button
          size='sm'
          variant='jade'>
          Small button
        </Button>
        <Button
          size='sm'
          variant='carbon'>
          Small button
        </Button>
      </Stack>
    </ComponentWrapper>
  );
};

export default KitButton;
