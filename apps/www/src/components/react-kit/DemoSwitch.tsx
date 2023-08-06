'use client';
import React from 'react';
import { Switch, Flex, useTheme } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  // Handle theme switching when the switch is toggled
  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      // Set the theme to 'dark' if the switch is checked
      toggleTheme();
    } else {
      // Set the theme to 'light' if the switch is unchecked
      toggleTheme();
    }
  };

  return (
    <ComponentWrapper label='switch'>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Switch
          size='small'
          checked={isDarkTheme} // Set the checked state based on the theme mode
          onCheckedChange={handleSwitchChange} // Call handleSwitchChange when the switch is changed
        >
          <Switch.Toggle />
        </Switch>
      </Flex>
    </ComponentWrapper>
  );
};
