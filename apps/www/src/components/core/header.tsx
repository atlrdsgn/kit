'use client';

import React from 'react';
import { PassLink, Flex } from '@atlrdsgn/kit';

function PageHeader() {
  return (
    <header className='app-header'>
      <Flex
        align='center'
        justify='end'
        gap='sm'>
        <PassLink
          href='/'
          font='system'
          size='sm'
          weight='semibold'
          variant='carbon'>
          index
        </PassLink>
        <PassLink
          href='/colour'
          font='system'
          size='sm'
          weight='semibold'
          variant='carbon'>
          colour
        </PassLink>
        <PassLink
          href='https://github.com/atlrdsgn/kit'
          target='_blank'
          font='system'
          size='sm'
          weight='semibold'
          variant='carbon'>
          github
        </PassLink>
      </Flex>
    </header>
  );
}

export default PageHeader;
