'use client';

import React from 'react';
import { Canvas, Text } from '@atlrdsgn/kit';
// import { BackgroundImage } from '../background.img';
import { KitLogoShadowed } from '@/components/svg/kit.logo.shadowed';

export const CoverPageTwo = () => {
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
          <KitLogoShadowed
            className='kitLogo logo'
            width={'140'}
            height={'80'}
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

      {/* <!--
      <BackgroundImage
        alt='kit loop'
        src='/kit.loop.svg'
        style={{}}
      />
      --> */}
    </>
  );
};
