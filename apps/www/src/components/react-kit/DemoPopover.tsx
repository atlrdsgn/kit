'use client';
import React from 'react';
import { Popover, Text } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

function DemoPopover() {
  return (
    <ComponentWrapper label='popover'>
      <Popover>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content>
          <Text
            size='sm'
            color='slate6'
            weight='semibold'>
            Commodo laborum sunt et in non cupidatat proident dolor.
          </Text>
        </Popover.Content>
      </Popover>
    </ComponentWrapper>
  );
}

export default DemoPopover;
