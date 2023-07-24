'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Canvas, Space } from '@atlrdsgn/kit';

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
        <Space size='sm' />
        <Button
          size='xs'
          variant='primary'
          style={{ zIndex: 9999 }}
          href='/components'>
          View components
        </Button>
      </Canvas>
    </>
  );
}

export default HomePage;
