'use client';
import React from 'react';
import { TabSwitcher } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoTabSwitcher = () => {
  return (
    <ComponentWrapper label='tab switcher'>
      <TabSwitcher orientation='horizontal'>
        <TabSwitcher.List>
          <TabSwitcher.Item value='sw1'>Item number one</TabSwitcher.Item>
          <TabSwitcher.Item value='sw2'>Item number two</TabSwitcher.Item>
        </TabSwitcher.List>

        <TabSwitcher.Content value='sw1'>
          This Aliquip cupidatat adipisicing aute amet.
        </TabSwitcher.Content>
        <TabSwitcher.Content value='sw2'>
          This is content #2 - Proident est aute veniam sint duis aliqua
          excepteur sit aliqua occaecat adipisicing.
        </TabSwitcher.Content>
      </TabSwitcher>
    </ComponentWrapper>
  );
};
