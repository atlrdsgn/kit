'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button, Toast } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const KitToast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

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

      <>
        <Toast
          label='kit-toast'
          open={isOpen}
          onOpenChange={setIsOpen}>
          <Toast.Content>
            <Toast.Description>
              Adipisicing quis culpa proident ex.
            </Toast.Description>

            <Toast.Close />
          </Toast.Content>
        </Toast>
      </>
    </ComponentWrapper>
  );
};

export default KitToast;
