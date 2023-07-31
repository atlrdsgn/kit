'use client';

import React from 'react';

function CanvasLockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        zIndex: 1,
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
      {children}
    </div>
  );
}

export default CanvasLockup;
