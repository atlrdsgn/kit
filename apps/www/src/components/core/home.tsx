'use client';

import React from 'react';
// import Image from 'next/image';
import { Canvas } from '@atlrdsgn/kit';
import { KitLogo } from './kit.svg';
import { BackgroundImage } from './background.img';

function HomePage() {
  return (
    <>
      <Canvas>
        <div className='center'>
          <KitLogo
            className='kitLogo logo'
            width={'120'}
            height={'75'}
          />
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

export default HomePage;
