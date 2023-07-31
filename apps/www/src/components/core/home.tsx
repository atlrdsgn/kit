'use client';

import React from 'react';
import Image from 'next/image';
import { Canvas } from '@atlrdsgn/kit';
import { BackgroundImage } from './background.img';

function HomePage() {
  return (
    <>
      <Canvas>
        <div className='center'>
          <Image
            className='kitLogo logo'
            src='/kit.svg'
            alt='Kit Logo'
            width={180}
            height={37}
            priority
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
