import React from 'react';
import { PageLayout } from '@/components/core';
import { AppNavbar } from '@/components/navigation';
import { DemoIcons } from '@/components/react-kit/icon-kit/DemoIcons';

const IconsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppNavbar />
        <DemoIcons />
      </PageLayout>
    </>
  );
};

export default IconsIndex;
