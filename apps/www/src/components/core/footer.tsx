'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Text, Space, PassLink, Flex } from '@atlrdsgn/kit';

function GlobalFooter() {
  const { index, footer } = content;

  return (
    <footer className='footer'>
      <Container
        width='medium'
        align='center'>
        <Flex
          justify='center'
          gap='xl'>
          <PassLink
            font='mono'
            href='/components'
            size='xs'
            color='carbon8'>
            components →
          </PassLink>
          <PassLink
            font='mono'
            href='/colour'
            size='xs'
            color='carbon8'>
            colour →
          </PassLink>
        </Flex>
        <Space size='sm' />
        <Text
          color='slate6'
          size='lg'
          align='center'
          weight='medium'
          font='inter'>
          {index.subtitle}
          <br />
          {index.line2}
        </Text>
        <Space size='md' />
        <Text
          color='slate8'
          size='xs'
          align='center'
          weight='normal'
          font='inter'>
          {footer.copyright}
        </Text>

        <Text
          color='slate8'
          size='xs'
          align='center'
          weight='normal'
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

export default GlobalFooter;
