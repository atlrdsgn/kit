'use client';
import React from 'react';
import { Chip, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoChip = () => {
  return (
    <ComponentWrapper label='chip'>
      <Flex
        direction='row'
        align='center'
        justify='center'
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
          Small chip
        </Chip>
        <Chip
          size={'md'}
          variant={'slate'}
          shape={'pill'}>
          Medium chip
        </Chip>
      </Flex>

      <Flex
        direction='row'
        align='center'
        justify='center'
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Chip
          size='xs'
          variant='jade'
          shape='pill'>
          xs chip
        </Chip>
        <Chip
          size='sm'
          variant='jade'
          shape='pill'>
          Small chip
        </Chip>
        <Chip
          size='md'
          variant='jade'
          shape='pill'>
          Medium chip
        </Chip>
      </Flex>

      <Flex
        direction='row'
        align='center'
        justify='center'
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Chip
          size='xs'
          variant='carbon'
          shape='pill'>
          xs chip
        </Chip>
        <Chip
          size='sm'
          variant='carbon'
          shape='pill'>
          Small chip
        </Chip>
        <Chip
          size='md'
          variant='carbon'
          shape='pill'>
          Medium chip
        </Chip>
      </Flex>
    </ComponentWrapper>
  );
};
