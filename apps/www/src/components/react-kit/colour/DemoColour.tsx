'use client';
import React from 'react';
import { Flex } from '@atlrdsgn/kit';
import { ColourBox } from './ColourBox';
import ComponentWrapper from '../../core/component.wrapper';

export const DemoColour = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <ColourBox
          colour={'carbon0'}
          className={'carbon0'}
        />
        <ColourBox
          colour={'carbon1'}
          className={'carbon1'}
        />
        <ColourBox
          colour={'carbon2'}
          className={'carbon2'}
        />
      </Flex>
    </ComponentWrapper>
  );
};
