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
          variant='carbon'>
          Lorem Ipsium
        </Button>
        <Button
          font='system'
          size='sm'
          variant='jade'>
          Lorem Ipsium
        </Button>
        <Button
          font='system'
          size='sm'
          variant='orange'>
          Lorem Ipsium
        </Button>
        <Button
          font='system'
          size='sm'
          variant='sapphire'>
          Lorem Ipsium
        </Button>
      </Flex>

      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'sm'}
        wrap={'wrap'}
        style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button
          font='system'
          size='md'
          variant='carbon'>
          Lorem Ipsium
        </Button>
        <Button
          font='system'
          size='md'
          variant='jade'>
          Lorem Ipsium
        </Button>
        <Button
          font='system'
          size='md'
          variant='orange'>
          Lorem Ipsium
        </Button>
        <Button
          font='system'
          size='md'
          variant='sapphire'>
          Lorem Ipsium
        </Button>
      </Flex>
    </ComponentWrapper>
  );
};
