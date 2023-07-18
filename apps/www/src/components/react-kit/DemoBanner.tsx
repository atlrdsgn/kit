'use client';
import React from 'react';
import { Banner, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoBanner = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Banner
          size='small'
          variant='one'>
          Hello, this is a banner.
        </Banner>
      </Flex>
    </ComponentWrapper>
  );
};
