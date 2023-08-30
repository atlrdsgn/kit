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
            size='sm'
            color='carbon6'
            weight='medium'>
            Commodo adipisicing laborum laboris laboris.
          </Text>
        </Tip.Content>
      </Tip>
    </ComponentWrapper>
  );
};
