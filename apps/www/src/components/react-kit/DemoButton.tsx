'use client';
import React from 'react';
import { Button, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoButton = () => {
  return (
    <ComponentWrapper label='button'>
      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'sm'}
        wrap={'wrap'}
        style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button
          font='system'
          size='sm'
          variant='sapphire'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='sm'
          variant='carbon'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='sm'
          variant='jade'>
          Lorem ipsum
        </Button>
      </Flex>
    </ComponentWrapper>
  );
};
