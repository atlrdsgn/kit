'use client';
import React from 'react';
import { Menubar } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

function DemoMenubar() {
  return (
    <ComponentWrapper label='menubar'>
      <Menubar>
        <Menubar.Collection>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
            <Menubar.Item>Open</Menubar.Item>
            <Menubar.Item>Save</Menubar.Item>
            <Menubar.Item>Save As..</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Print</Menubar.Item>
            <Menubar.Item>Close</Menubar.Item>
            <Menubar.Item>Exit</Menubar.Item>
          </Menubar.Content>
        </Menubar.Collection>

        <Menubar.Collection>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Undo</Menubar.Item>
            <Menubar.Item>Redo</Menubar.Item>
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Find</Menubar.Item>
            <Menubar.Item>Delete</Menubar.Item>
          </Menubar.Content>
        </Menubar.Collection>

        <Menubar.Collection>
          <Menubar.Trigger>Profile</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Save file</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Logout</Menubar.Item>
          </Menubar.Content>
        </Menubar.Collection>

        <Menubar.Collection>
          <Menubar.Trigger>Settings</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Save file</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Logout</Menubar.Item>
          </Menubar.Content>
        </Menubar.Collection>
      </Menubar>
    </ComponentWrapper>
  );
}

export default DemoMenubar;
