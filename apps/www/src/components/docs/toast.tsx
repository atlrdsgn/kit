'use client';

import React, { useState } from 'react';
import { Button, Toast } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const KitToast = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showToast = () => {
    setIsOpen(true);
  };

  return (
    <ComponentWrapper label='toast'>
      <Button
        variant='sapphire'
        size='xs'
        onClick={showToast}>
        Show Toast
      </Button>

      {isOpen && (
        <>
          <Toast label='kit-toast'>
            <Toast.Title>Toast Title</Toast.Title>
            <Toast.Description>
              Adipisicing quis culpa proident ex.
            </Toast.Description>
            <Toast.Action altText='accept'>Accept</Toast.Action>

            <Toast.Close />
          </Toast>
        </>
      )}
    </ComponentWrapper>
  );
};

export default KitToast;
