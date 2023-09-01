'use client';

import React from 'react';

function Lockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      id='lockup'
      style={{
        backgroundImage:
          'linear-gradient(to bottom right, #1C1C1C 0%, black 100%)',
        backgroundColor: '#333',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0,
      }}>
      {children}
    </div>
  );
}

export default Lockup;
