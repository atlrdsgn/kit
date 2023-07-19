'use client';
import React from 'react';
import { Popover, Text } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

function DemoPopover() {
  return (
    <ComponentWrapper>
      <Popover>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content>
          <Text
            size='sm'
            color='slate6'
            weight='semibold'>
            Commodo laborum sunt et in non cupidatat proident dolor. Nostrud
            proident sint velit mollit proident elit cupidatat aliqua ut cillum
            exercitation aliqua.
          </Text>
        </Popover.Content>
      </Popover>
    </ComponentWrapper>
  );
}

export default DemoPopover;
