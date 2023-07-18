'use client';
import React from 'react';
import { Chip, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoChip = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Chip
          size={'xs'}
          variant={'slate'}
          shape={'pill'}>
          xs chip
        </Chip>
        <Chip
          size={'sm'}
          variant={'slate'}
          shape={'pill'}>
          Small Chip
        </Chip>
        <Chip
          size={'md'}
          variant={'slate'}
          shape={'pill'}>
          Medium Chip
        </Chip>
      </Flex>
    </ComponentWrapper>
  );
};
