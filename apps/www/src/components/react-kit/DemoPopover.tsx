'use client';
import React from 'react';
import { Popover, Text } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoPopover = () => {
  return (
    <ComponentWrapper label='popover'>
      <Popover>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content>
          <Text
            size='sm'
            color='carbon6'
            weight='medium'>
            Commodo laborum sunt et in non cupidatat proident dolor.
          </Text>
        </Popover.Content>
      </Popover>
    </ComponentWrapper>
  );
};
