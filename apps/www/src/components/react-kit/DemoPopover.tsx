'use client';
import React from 'react';
import {
  Flex,
  Popover,
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  Space,
  PopoverPortal,
  Text,
} from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

function DemoPopover() {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <PopoverRoot>
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent>
            Commodo laborum sunt et in non cupidatat proident dolor. Nostrud
            proident sint velit mollit proident elit cupidatat aliqua ut cillum
            exercitation aliqua.
            <PopoverClose>Close</PopoverClose>
          </PopoverContent>
        </PopoverRoot>

        <Space size={'xs'} />

        <Popover>
          <Popover.Trigger>Trigger</Popover.Trigger>
          <PopoverPortal>
            <Popover.Content>
              <Text
                size='sm'
                color='slate6'
                weight='semibold'>
                Commodo laborum sunt et in non cupidatat proident dolor. Nostrud
                proident sint velit mollit proident elit cupidatat aliqua ut
                cillum exercitation aliqua.
              </Text>
            </Popover.Content>
          </PopoverPortal>
        </Popover>
      </Flex>
    </ComponentWrapper>
  );
}

export default DemoPopover;
