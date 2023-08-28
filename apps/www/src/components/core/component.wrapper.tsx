'use client';

import React from 'react';

import { Container, Section, Space, Text } from '@atlrdsgn/kit';

interface ComponentWrapperProps {
  children?: React.ReactNode;
  label?: string;
  boxed?: boolean;
}

function ComponentWrapper({ children, boxed, label }: ComponentWrapperProps) {
  if (boxed) {
    return (
      <Section style={{ paddingLeft: 12, paddingRight: 12 }}>
        <Space size='lg' />

        <Container
          width='medium'
          align='center'
          flush>
          <Text
            size='xs'
            color='carbon4'
            weight='medium'
            font='mono'>
            {label}
          </Text>
          <Space size='sm' />
        </Container>
        <Container
          className=''
          width='medium'
          align='center'
          flush>
          {children}
        </Container>
        <Space size='lg' />
      </Section>
    );
  }

  return (
    <Section style={{ paddingLeft: 12, paddingRight: 12 }}>
      <Space size='lg' />

      <Container
        width='medium'
        align='center'
        flush>
        <Text
          size='xs'
          color='carbon4'
          weight='medium'
          font='mono'>
          {label}
        </Text>
        <Space size='sm' />
      </Container>
      <Container
        className='component-wrapper'
        width='medium'
        align='center'>
        {children}
      </Container>
      <Space size='lg' />
    </Section>
  );
}

export default ComponentWrapper;
