'use client';

import React from 'react';
import { Canvas, Container, Flex, Text } from '@atlrdsgn/kit';
import { KitLogo } from '../kit.svg';
import { BackgroundImage } from '../background.img';

function FlexCoverPage() {
  return (
    <>
      <Canvas z='normal'>
        <Container width='xlarge'>
          <Flex
            direction='row'
            justify='between'
            align='center'
            style={{
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}>
            <KitLogo
              className='kitLogo logo'
              width={'120'}
              height={'75'}
              style={{
                zIndex: 11,
                mixBlendMode: 'difference',
              }}
            />

            <div>
              <Text
                size='sm'
                weight='medium'
                font='mono'
                color='carbon6'>
                yarn add @atlrdsgn/kit
              </Text>
            </div>
          </Flex>
        </Container>
      </Canvas>

      <BackgroundImage
        alt='kit loop'
        src='/static/img/component-grid-alt.png'
        style={{}}
      />
    </>
  );
}

export default FlexCoverPage;
