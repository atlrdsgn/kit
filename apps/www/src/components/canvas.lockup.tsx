'use client';

import React from 'react';

function Lockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      id='lockup'
      style={{
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
