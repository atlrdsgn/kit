'use client';
import React from 'react';
import { Select } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

const ops = [
  {
    type: 'Icon',
    value: 'Icon',
  },
  {
    type: 'Accordion',
    value: 'Accordion',
  },
  {
    type: 'Button',
    value: 'Button',
  },
  {
    type: 'Checkbox',
    value: 'Checkbox',
  },
  {
    type: 'Container',
    value: 'Container',
  },
  {
    type: 'Switch',
    value: 'Switch',
  },
];

function DemoSelect() {
  return (
    <ComponentWrapper>
      <Select>
        <Select.Trigger placeholder='Lorem ipsum.'>Trigger</Select.Trigger>

        <Select.Content>
          {/* <!--- Map the values to the options --> */}
          {ops.map((options) => (
            <Select.Item
              key={options.type}
              value={options.value}
              textValue={options.value}>
              {options.value}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </ComponentWrapper>
  );
}

export default DemoSelect;
