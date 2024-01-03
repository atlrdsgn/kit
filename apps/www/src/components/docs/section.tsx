'use client';

import React from 'react';
import { Container, Section, Text } from '@atlrdsgn/kit';

interface LabelProps {
  label?: string;
}

export const KitSection = ({ label = 'section', ...props }: LabelProps) => {
  return (
    <>
      <Container
        width='medium'
        align='center'
        flush>
        <Text
          {...props}
          size='xs'
          color='carbon4'
          weight='medium'
          font='mono'>
          {label}
        </Text>
      </Container>
      <Section size='vw'>
        <Section
          size='sm'
          style={{
            backgroundColor: 'rgba(28, 29, 32, 0.24)',
            marginBottom: '10px',
          }}>
          <Text
            size='sm'
            weight='medium'
            color='slate4'
            align='center'>
            section = sm
          </Text>
        </Section>

        <Section
          size='md'
          style={{
            backgroundColor: 'rgba(28, 29, 32, 0.24)',
            marginBottom: '10px',
          }}>
          <Text
            size='sm'
            weight='medium'
            color='slate4'
            align='center'>
            section = md
          </Text>
        </Section>

        <Section
          size='lg'
          style={{
            backgroundColor: 'rgba(28, 29, 32, 0.24)',
            marginBottom: '10px',
          }}>
          <Text
            size='sm'
            weight='medium'
            color='slate4'
            align='center'>
            section = lg
          </Text>
        </Section>

        <Section
          size='vw'
          style={{
            backgroundColor: 'rgba(28, 29, 32, 0.24)',
            marginBottom: '10px',
          }}>
          <Text
            size='sm'
            weight='medium'
            color='slate4'
            align='center'>
            section = vw
          </Text>
        </Section>
      </Section>
    </>
  );
};

export default KitSection;
