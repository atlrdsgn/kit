'use client';
import React from 'react';
import { Button, Flex, Space } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoButton = () => {
  return (
    <ComponentWrapper label='button'>
      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button
          font='mono'
          size='xs'
          variant='primary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='xs'
          variant='primary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='xs'
          variant='secondary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='xs'
          variant='jade'>
          Lorem ipsum
        </Button>
        <Button
          font='mono'
          size='xs'
          variant='jade'>
          Lorem ipsum
        </Button>
      </Flex>

      <Space size={'sm'} />

      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button
          font='system'
          size='sm'
          variant='primary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='sm'
          variant='secondary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='sm'
          variant='jade'>
          Lorem ipsum
        </Button>
      </Flex>

      <Space size={'sm'} />

      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button
          font='system'
          size='md'
          variant='primary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='md'
          variant='secondary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='md'
          variant='jade'>
          Lorem ipsum
        </Button>
      </Flex>

      <Space size={'sm'} />

      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '10px', marginTop: '10px' }}>
        <Button
          font='system'
          size='lg'
          variant='primary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='lg'
          variant='secondary'>
          Lorem ipsum
        </Button>
        <Button
          font='system'
          size='lg'
          variant='jade'>
          Lorem ipsum
        </Button>
      </Flex>
    </ComponentWrapper>
  );
};
