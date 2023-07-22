'use client';
import React from 'react';
import { Dropdown } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

function DemoDropdown() {
  return (
    <ComponentWrapper>
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>one</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </ComponentWrapper>
  );
}

export default DemoDropdown;
