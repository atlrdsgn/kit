'use client';

import React from 'react';
import { Canvas, Text } from '@atlrdsgn/kit';
import { CoverLogo } from '../../svg/cover-logo';

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
          <CoverLogo
            width='230'
            height='29'
          />

          <div style={{ zIndex: 100 }}>
            <Text
              align='center'
              size='md'
              casing='none'
              weight='bold'
              color='carbon7'>
              Advanced Techniques and Learning Resources.
            </Text>
          </div>

          <div style={{}}>
            <Text
              className='take'
              align='center'
              size='sm'
              casing='lowercase'
              weight='medium'
              color='carbon7'>
              Rooted in subtractive design.
            </Text>
          </div>
        </div>
      </Canvas>
    </>
  );
}

export default AppCoverPage;
