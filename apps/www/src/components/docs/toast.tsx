'use client';

import React, { useState } from 'react';
import { Button, Toast } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const KitToast = () => {
  return (
    <ComponentWrapper label='toast'>
      <ToastCompressed />
    </ComponentWrapper>
  );
};

export default KitToast;

const ToastCompressed = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showToast = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button
        variant='sapphire'
        size='xs'
        onClick={showToast}>
        Show Toast
      </Button>
      {isOpen && (
        <Toast label='kit-toast'>
          <Toast.Close>Close</Toast.Close>

          <Toast.Title>Toast Title</Toast.Title>
          <Toast.Description>
            Adipisicing quis culpa proident ex.
          </Toast.Description>
          <Toast.Action altText='dismiss'>Dismiss</Toast.Action>
          <Toast.Action altText='accept'>Accept</Toast.Action>
        </Toast>
      )}
    </div>
  );
};
