import React from 'react';
import { PageHeader, PageLayout } from '@/components/core';
import { DemoIcons } from '@/components/react-kit/icon-kit/DemoIcons';

const IconsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <PageHeader />
        <DemoIcons />
      </PageLayout>
    </>
  );
};

export default IconsIndex;
