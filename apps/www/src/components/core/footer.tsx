'use client';

import React from 'react';
import { Container, Text, Space, Button, PassLink, Flex } from '@atlrdsgn/kit';

function PageFooter() {
  return (
    <footer className='footer'>
      <Container
        width='medium'
        align='center'>
        <Flex
          justify='center'
          gap='md'>
          <Button
            target='_self'
            href='/components'
            font='system'
            size='xs'
            variant='carbon'>
            Components →
          </Button>
          <PassLink
            font='system'
            href='/icons'
            size='xs'
            weight='semibold'
            variant='carbon'>
            Icons →
          </PassLink>
        </Flex>

        <Space size='md' />
        <Container
          width='small'
          align='center'>
          <Text
            color='carbon6'
            size='xl'
            align='center'
            weight='semibold'
            font='inter'>
            This website is actively being developed.
          </Text>
        </Container>

        <Space size='sm' />
        <Text
          color='carbon4'
          size='xs'
          align='center'
          weight='normal'
          font='inter'>
          Copyright © 2023
        </Text>
        <Text
          color='carbon4'
          size='xs'
          align='center'
          weight='medium'
          font='inter'>
          powered by{' '}
          <PassLink
            size='xs'
            color='jade5'
            href='https://kit.atlrdsgn.com'
            target='_blank'>
            @atlrdsgn
          </PassLink>
        </Text>
      </Container>
    </footer>
  );
}

export default PageFooter;
