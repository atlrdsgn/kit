'use client';

import React from 'react';
import Image from 'next/image';
import { Canvas, PassLink } from '@atlrdsgn/kit';

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

        <PassLink
          size='sm'
          font='mono'
          variant='primary'
          href='/components'
          style={{ zIndex: 9999 }}>
          VIEW COMPONENTS →
        </PassLink>
      </Canvas>
    </>
  );
}

export default HomePage;
