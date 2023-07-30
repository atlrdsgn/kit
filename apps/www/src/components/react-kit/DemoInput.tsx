'use client';
import React from 'react';
import { Input, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoInput = () => {
  return (
    <ComponentWrapper label='switch'>
      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'md'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Input
          inputSize='sm'
          placeholder='Carbon'
          type='text'
          variant='carbon'
          autoComplete='on'
        />

        <Input
          inputSize='sm'
          placeholder='Jade'
          type='text'
          variant='jade'
          autoComplete='on'
        />

        <Input
          inputSize='sm'
          placeholder='Orange'
          type='text'
          variant='orange'
          autoComplete='on'
        />

        <Input
          inputSize='sm'
          placeholder='Sapphire'
          type='text'
          variant='sapphire'
          autoComplete='on'
        />
      </Flex>

      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Input.Wrapper>
          <Input.Label>Small label</Input.Label>
          <Input
            inputSize='sm'
            placeholder='lorem ipsum'
            type='text'
            variant='carbon'
            autoComplete='on'
          />
        </Input.Wrapper>
      </Flex>
    </ComponentWrapper>
  );
};
