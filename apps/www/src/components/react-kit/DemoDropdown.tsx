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
          <Dropdown.Item>File</Dropdown.Item>
          <Dropdown.Item>Save file</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>User settings</Dropdown.Item>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </ComponentWrapper>
  );
}

export default DemoDropdown;
