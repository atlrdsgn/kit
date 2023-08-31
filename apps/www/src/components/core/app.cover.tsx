'use client';

import React from 'react';
import { Canvas, Text } from '@atlrdsgn/kit';
import { KitLogo } from './kit.svg';
import { BackgroundImage } from './background.img';

function AppCoverPage() {
  return (
    <>
      <Canvas z='normal'>
        <div
          className='center'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            zIndex: 10,
          }}>
          <KitLogo
            className='kitLogo logo'
            width={'120'}
            height={'75'}
            style={{
              zIndex: 11,
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
        </div>
      </Canvas>

      <BackgroundImage
        alt='kit loop'
        src='/kit.loop.svg'
        style={{}}
      />
    </>
  );
}

export default AppCoverPage;
