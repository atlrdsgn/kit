'use client';
import React from 'react';
import { Tip, Text } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoTip = () => {
  return (
    <ComponentWrapper label='tip'>
      <Tip>
        <Tip.Trigger>
          <Tip.Icon icon='ExpandFilled.Icon' />
        </Tip.Trigger>
        <Tip.Content>
          <Text
            align='center'
            size='xs'
            color='carbon6'
            weight='medium'>
            Tip Component
          </Text>
        </Tip.Content>
      </Tip>
    </ComponentWrapper>
  );
};
