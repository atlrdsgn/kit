'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Text, Space, PassLink } from '@atlrdsgn/kit';

function GlobalFooter() {
  const { index, footer } = content;

  return (
    <footer className='footer'>
      <Container
        width='medium'
        align='center'>
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
