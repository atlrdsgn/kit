'use client';
import React from 'react';
import { Dropdown } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

function DemoDropdown() {
  return (
    <ComponentWrapper label='dropdown menu'>
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>one</Dropdown.Item>
          <Dropdown.Item>two</Dropdown.Item>
          <Dropdown.Item>three</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>four</Dropdown.Item>
          <Dropdown.Item>five</Dropdown.Item>
          <Dropdown.Item>six</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </ComponentWrapper>
  );
}

export default DemoDropdown;
