'use client';

import React from 'react';
import { PassLink, Flex, Container } from '@atlrdsgn/kit';
import { KitLogo } from '../core/kit.svg';

const repo = 'https://github.com/atlrdsgn/kit';

function AppNavbar() {
  return (
    <header className='app-navbar'>
      <Container
        className='nav-wrapper'
        width='small'
        align='center'>
        <Flex
          align='center'
          justify='between'
          gap='sm'>
          <KitLogo
            width='40'
            height='auto'
          />

          <div>
            <Flex
              align='center'
              justify='center'
              gap='md'>
              <PassLink
                href='/'
                font='system'
                size='sm'
                weight='medium'
                variant='carbon'>
                Index
              </PassLink>
              <PassLink
                href='/colour'
                font='system'
                size='sm'
                weight='medium'
                variant='carbon'>
                Colour
              </PassLink>
              <PassLink
                href='/icons'
                font='system'
                size='sm'
                weight='medium'
                variant='carbon'>
                Icons
              </PassLink>
            </Flex>
          </div>

          <PassLink
            href={repo}
            target='_blank'
            font='system'
            size='sm'
            weight='semibold'
            variant='carbon'>
            GitHub
          </PassLink>
        </Flex>
      </Container>
    </header>
  );
}

export default AppNavbar;
