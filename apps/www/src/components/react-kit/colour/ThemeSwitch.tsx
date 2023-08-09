'use client';

import React, { useCallback } from 'react';
import { Button, Flex, useTheme, type KitMode } from '@atlrdsgn/kit';

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleSwitchChange = useCallback(() => {
    let nextTheme: KitMode;

    if (theme === 'light') {
      nextTheme = 'dark';
    } else if (theme === 'dark') {
      nextTheme = 'system';
    } else {
      nextTheme = 'light';
    }

    toggleTheme(nextTheme);
    // Considering toggleTheme now accepts theme mode as argument.
  }, [theme, toggleTheme]);

  return (
    <Flex
      direction={'row'}
      align={'start'}
      justify={'start'}
      gap={'xs'}
      wrap={'wrap'}
      style={{ marginBottom: '20px', marginTop: '20px' }}>
      <Button
        variant='carbon'
        size='sm'
        onClick={handleSwitchChange}>
        Switch to{' '}
        {theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'}{' '}
        mode
      </Button>
    </Flex>
  );
};
