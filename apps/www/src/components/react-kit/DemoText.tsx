'use client';
import React from 'react';
import { Text, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoText = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'column'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Text
          size='xs'
          color='slate8'
          font='system'
          weight='semibold'>
          Lorem ipsum.
        </Text>
        <Text
          size='sm'
          color='slate8'
          font='system'
          weight='semibold'>
          Lorem ipsum.
        </Text>
        <Text
          size='md'
          color='slate8'
          font='system'
          weight='semibold'>
          Lorem ipsum.
        </Text>
        <Text
          size='lg'
          color='jade6'
          font='system'
          weight='semibold'>
          Lorem ipsum.
        </Text>
      </Flex>
    </ComponentWrapper>
  );
};
