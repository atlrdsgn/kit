'use client';
import React from 'react';
import { Button, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoButton = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Button
          size='xs'
          variant='slate'>
          Small Button
        </Button>
        <Button
          size='xs'
          variant='jade'>
          Small Button
        </Button>
      </Flex>
    </ComponentWrapper>
  );
};
