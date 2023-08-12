'use client';
import React from 'react';
import { Banner, Space } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoBanner = () => {
  return (
    <ComponentWrapper label='banner'>
      <Banner
        size='small'
        variant='mauve'>
        Banner Content
      </Banner>

      <Space size='md' />

      <Banner
        size='small'
        variant='carbon'>
        Banner Content
      </Banner>

      <Space size='md' />

      <Banner
        size='small'
        variant='jade'>
        Banner Content
      </Banner>

      <Space size='md' />

      <Banner
        size='small'
        variant='sapphire'>
        Banner Content
      </Banner>
    </ComponentWrapper>
  );
};
